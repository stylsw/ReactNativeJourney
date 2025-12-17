// Polyfill for Dimensions.removeEventListener on RN >= 0.65
// Some libraries (e.g., @react-navigation/drawer v5) still call
// Dimensions.removeEventListener('change', handler), which was removed.
// This shim tracks subscriptions created via addEventListener and
// removes them when removeEventListener is called.

import { Dimensions } from 'react-native';

(function applyDimensionsPolyfill() {
  try {
    if (global.__DIMENSIONS_EVENT_POLYFILLED__) return;

    const hasRemove = typeof Dimensions.removeEventListener === 'function';
    const hasAdd = typeof Dimensions.addEventListener === 'function';

    if (!hasAdd || hasRemove) {
      global.__DIMENSIONS_EVENT_POLYFILLED__ = true;
      return; // Either old API still exists or addEventListener missing
    }

    const originalAdd = Dimensions.addEventListener.bind(Dimensions);
    const handlerMap = new Map(); // type -> Map(handler -> subscription)

    Dimensions.addEventListener = (type, handler) => {
      const sub = originalAdd(type, handler);
      let inner = handlerMap.get(type);
      if (!inner) {
        inner = new Map();
        handlerMap.set(type, inner);
      }
      inner.set(handler, sub);
      return sub;
    };

    Dimensions.removeEventListener = (type, handler) => {
      const inner = handlerMap.get(type);
      const sub = inner && inner.get(handler);
      if (sub && typeof sub.remove === 'function') {
        try { sub.remove(); } catch (e) {}
      }
      if (inner) inner.delete(handler);
    };

    global.__DIMENSIONS_EVENT_POLYFILLED__ = true;
  } catch (e) {
    // no-op
  }
})();
