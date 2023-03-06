import { legacy_createStore as createStore } from "redux";
import messageReducer from "reducers/messageReducer";
function configureStore(state = { messsage: "Default message" }) {
  return createStore(messageReducer, state);
}
export default configureStore();
