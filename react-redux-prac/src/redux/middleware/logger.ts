import type { Middleware } from "redux";
import type { RootState } from "../store";

/**
 * Logs all actions and states after they are dispatched.
 */
const logger: Middleware<{}, RootState> =
  (store) => (next) => (action: any) => {
    console.group(action.type);
    console.info("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return result;
  };

export default logger;
