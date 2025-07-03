import type { Middleware } from "redux";
import type { RootState } from "../store";

/**
 * Lets you dispatch special actions with a { promise } field.
 *
 * This middleware will turn them into a single action at the beginning,
 * and a single success (or failure) action when the `promise` resolves.
 *
 * For convenience, `dispatch` will return the promise so the caller can wait.
 */
const readyStatePromise: Middleware<{}, RootState> =
  (store) => (next) => (action: any) => {
    if (!action.promise) {
      return next(action);
    }

    function makeAction(ready: boolean, data?: { result?: any; error?: any }) {
      const newAction = Object.assign({}, action, { ready }, data);
      delete newAction.promise;
      return newAction;
    }

    next(makeAction(false));
    return action.promise.then(
      (result: any) => next(makeAction(true, { result })),
      (error: any) => next(makeAction(true, { error }))
    );
  };

export default readyStatePromise;
