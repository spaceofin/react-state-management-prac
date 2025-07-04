import type { Middleware } from "redux";
import * as Sentry from "@sentry/react";

/**
 * Sends crash reports as state is updated and listeners are notified.
 */
const crashReporter: Middleware = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error("Caught an exception!", err);
    Sentry.captureException(err, {
      extra: {
        action,
        state: store.getState(),
      },
    });
    throw err;
  }
};

export default crashReporter;
