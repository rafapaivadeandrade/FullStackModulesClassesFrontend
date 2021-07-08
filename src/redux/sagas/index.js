import { takeLatest, all, put } from "redux-saga/effects";
import { Types } from "../actionCreators";
import ActionCreators from "../actionCreators";
import { createClass, getClasses, removeClass, getClass, updateClass, getTotalClasses } from "./classes";
import { getModules, createModule, removeModule, getModule, updateModule } from "./modules";
import { login, destroyAuth } from "./auth";
export default function* rootSaga()
{
  yield all([
    takeLatest(Types.SIGNIN_REQUEST, login),
    takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),
    takeLatest(Types.CREATE_CLASS_REQUEST, createClass),
    takeLatest(Types.GET_MODULES_REQUEST, getModules),
    takeLatest(Types.GET_CLASSES_REQUEST, getClasses),
    takeLatest(Types.GET_MODULE_REQUEST, getModule),
    takeLatest(Types.GET_CLASS_REQUEST, getClass),
    takeLatest(Types.CREATE_MODULE_REQUEST, createModule),
    takeLatest(Types.UPDATE_MODULE_REQUEST, updateModule),
    takeLatest(Types.UPDATE_CLASS_REQUEST, updateClass),
    takeLatest(Types.REMOVE_MODULE_REQUEST, removeModule),
    takeLatest(Types.REMOVE_CLASS_REQUEST, removeClass),
    takeLatest(Types.GET_TOTAL_CLASSES_REQUEST, getTotalClasses),

    put(ActionCreators.authRequest()),
  ]);
}
