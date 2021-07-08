import axios from "axios";
import ActionCreators from "../actionCreators";
import { put, callback } from "redux-saga/effects";
export function* createClass(action)
{
  const classes = yield axios.post(`http://localhost:3333/class/${action.class.moduleId}`, {
    name: action.class.name,
    date: action.class.date
  });

  yield put(ActionCreators.createClassSuccess(classes.data));
}
export function* getClasses(action)
{
  const token = localStorage.getItem("token");

  const classes = yield axios.get(`http://localhost:3333/classes/${action.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  yield put(ActionCreators.getClassesSuccess(classes.data));
}
export function* removeClass(action)
{
  const token = localStorage.getItem("token");
  yield axios.delete(`http://localhost:3333/class/${action.id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  yield put(ActionCreators.removeClassSuccess(action.id));
}
export function* getClass(action)
{
  const classId = action.class

  const token = localStorage.getItem("token");

  const classes = yield axios.get(`http://localhost:3333/class/${classId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  yield put(ActionCreators.getClassSuccess(classes.data));
}
export function* updateClass(action)
{
  const token = localStorage.getItem("token");
  const classToSave = {
    ...action.class,
  };

  yield axios.patch(
    `http://localhost:3333/class/${action.class.id}`,
    classToSave,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  yield put(ActionCreators.updateClassSuccess(classToSave));
}
export function* getTotalClasses()
{
  const TotalClasses = yield axios.get('http://localhost:3333/totalClasses');

  yield put(ActionCreators.getTotalClassesSuccess(TotalClasses.data));
}

