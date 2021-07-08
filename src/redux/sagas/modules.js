import axios from "axios";
import ActionCreators from "../actionCreators";
import { put } from "redux-saga/effects";
export function* getModules()
{
  const modules = yield axios.get(`http://localhost:3333/modules`);

  yield put(ActionCreators.getModulesSuccess(modules.data));
}
export function* getModule(action)
{
  const moduleId = action.module

  const token = localStorage.getItem("token");

  const module = yield axios.get(`http://localhost:3333/module/${moduleId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  yield put(ActionCreators.getModuleSuccess(module.data));
}
export function* createModule(action)
{
  const name = action.module

  const modules = yield axios.post(`http://localhost:3333/module`, {
    name
  });

  yield put(ActionCreators.createModuleSuccess(modules.data));
}
export function* removeModule(action)
{
  const token = localStorage.getItem("token");
  yield axios.delete(`http://localhost:3333/module/${action.id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  yield put(ActionCreators.removeModuleSuccess(action.id));
}
export function* updateModule(action)
{
  const token = localStorage.getItem("token");
  const moduleToSave = {
    ...action.module,
  };

  yield axios.patch(
    `http://localhost:3333/module/${action.module.id}`,
    moduleToSave,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  yield put(ActionCreators.updateModuleSuccess(moduleToSave));
}
