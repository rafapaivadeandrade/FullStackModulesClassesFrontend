import { createReducer } from "reduxsauce";
import { Types } from "../actionCreators";

export const INITIAL_STATE = {
  isLoading: false,
  data: [],
  saved: false,
  isSaving: false,
  class: [],
  total: 0,
};

export const getClassesRequest = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: true,
  };
};
export const getClassesSuccess = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: false,
    data: action.classes,
  };
};
export const getClassesFailure = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: false,
  };
};
export const getClassRequest = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: true,
    saved: false,
  };
};
export const getClassSuccess = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: false,
    class: action.class
  };
};
export const getClassFailure = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: false,
  };
};
export const createClassRequest = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: true,
    saved: false,
  };
};
export const createClassSuccess = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: false,
    saved: true,
  };
};
export const createClassFailure = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: false,
    saved: false,
  };
};
export const removeClassRequest = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: false,
  };
};
export const removeClassSuccess = (state = INITIAL_STATE, action) =>
{
  const classes = [state.data];
  const id = action.id;
  const indexToDelete = classes.findIndex((classes) => classes.id === id);
  classes.splice(indexToDelete, 1);
  return {
    ...state,
    isSaving: false,
    data: classes,
  };
};
export const removeClassFailure = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: false,
  };
};

export const updateClassRequest = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: true,
    error: false,
    errorMessage: "",
    saved: false,
  };
};
export const updateClassSuccess = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: false,
    saved: true,
  };
};
export const updateClassFailure = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: false,
    error: true,
    errorMessage: action.error,
    saved: false,
  };
};

export const getTotalClassesRequest = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: true,
  };
};
export const getTotalClassesSuccess = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: false,
    total: action.total.count,
  };
};
export const getTotalClassesFailure = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: false,
  };
};

export const HANDLERS = {

  [Types.GET_CLASSES_REQUEST]: getClassesRequest,
  [Types.GET_CLASSES_SUCCESS]: getClassesSuccess,
  [Types.GET_CLASSES_FAILURE]: getClassesFailure,

  [Types.GET_CLASS_REQUEST]: getClassRequest,
  [Types.GET_CLASS_SUCCESS]: getClassSuccess,
  [Types.GET_CLASS_FAILURE]: getClassFailure,

  [Types.CREATE_CLASS_REQUEST]: createClassRequest,
  [Types.CREATE_CLASS_SUCCESS]: createClassSuccess,
  [Types.CREATE_CLASS_FAILURE]: createClassFailure,

  [Types.UPDATE_CLASS_REQUEST]: updateClassRequest,
  [Types.UPDATE_CLASS_SUCCESS]: updateClassSuccess,
  [Types.UPDATE_CLASS_FAILURE]: updateClassFailure,

  [Types.REMOVE_CLASS_REQUEST]: removeClassRequest,
  [Types.REMOVE_CLASS_SUCCESS]: removeClassSuccess,
  [Types.REMOVE_CLASS_FAILURE]: removeClassFailure,

  [Types.GET_TOTAL_CLASSES_REQUEST]: getTotalClassesRequest,
  [Types.GET_TOTAL_CLASSES_SUCCESS]: getTotalClassesSuccess,
  [Types.GET_TOTAL_CLASSES_FAILURE]: getTotalClassesFailure,

};
export default createReducer(INITIAL_STATE, HANDLERS);
