// Polyfill for Keyboard.removeListener on RN versions where addListener
// returns a subscription object and removeListener no longer exists.

import {Keyboard} from 'react-native';

(function applyKeyboardPolyfill() {
  try {
    if (global.__KEYBOARD_EVENT_POLYFILLED__) return;

    const hasRemove = typeof Keyboard.removeListener === 'function';
    const hasAdd = typeof Keyboard.addListener === 'function';

    if (!hasAdd || hasRemove) {
      global.__KEYBOARD_EVENT_POLYFILLED__ = true;
      return;
    }

    const originalAdd = Keyboard.addListener.bind(Keyboard);
    const handlerMap = new Map();

    Keyboard.addListener = (type, handler) => {
      const subscription = originalAdd(type, handler);
      let listeners = handlerMap.get(type);

      if (!listeners) {
        listeners = new Map();
        handlerMap.set(type, listeners);
      }

      listeners.set(handler, subscription);
      return subscription;
    };

    Keyboard.removeListener = (type, handler) => {
      const listeners = handlerMap.get(type);
      const subscription = listeners && listeners.get(handler);

      if (subscription && typeof subscription.remove === 'function') {
        try {
          subscription.remove();
        } catch (error) {}
      }

      if (listeners) {
        listeners.delete(handler);
      }
    };

    global.__KEYBOARD_EVENT_POLYFILLED__ = true;
  } catch (error) {
    // no-op
  }
})();