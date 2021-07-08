import axios from "axios";
import ActionCreators from "../actionCreators";
import { put } from "redux-saga/effects";
export function* login(action)
{
  let token = localStorage.getItem("token");
  const user = yield axios.post("http://localhost:3333/login", {
    email: action.email,
    password: action.password,
  });
  if (user.data.token)
  {
    token = user.data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("user", user.data.user);
    yield put(ActionCreators.signinSuccess(user));
  }
  else
  {
    yield put(ActionCreators.signinFailure(user.data.error));
  }
}

export function* destroyAuth()
{
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  yield put(ActionCreators.destroyAuthSuccess());
}
