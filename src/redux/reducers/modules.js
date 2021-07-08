import { createReducer } from "reduxsauce";
import { Types } from "../actionCreators";

export const INITIAL_STATE = {
  isLoading: false,
  data: [],
  saved: false,
  isSaving: false,
  module: []
};
export const getModulesRequest = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: true,
  };
};
export const getModulesSuccess = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: false,
    data: action.modules,
  };
};
export const getModulesFailure = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: false,
  };
};
export const getModuleRequest = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: true,
  };
};
export const getModuleSuccess = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: false,
    module: action.module
  };
};
export const getModuleFailure = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isLoading: false,
  };
};
export const removeModuleRequest = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: false,
  };
};
export const removeModuleSuccess = (state = INITIAL_STATE, action) =>
{
  const modules = [...state.data];
  const id = action.id;
  const indexToDelete = modules.findIndex((module) => module.id === id);
  modules.splice(indexToDelete, 1);
  return {
    ...state,
    isSaving: false,
    data: modules,
  };
};
export const removeModuleFailure = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: false,
  };
};
export const createModuleRequest = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: true,
    saved: false,
  };
};
export const createModuleSuccess = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: false,
    saved: true,
  };
};
export const createModuleFailure = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: false,
    saved: false,
  };
};
export const updateModuleRequest = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: true,
    error: false,
    errorMessage: "",
    saved: false,
  };
};
export const updateModuleSuccess = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: false,
    // data: newModule,
    saved: true,
  };
};
export const updateModuleFailure = (state = INITIAL_STATE, action) =>
{
  return {
    ...state,
    isSaving: false,
    error: true,
    errorMessage: action.error,
    saved: false,
  };
};

export const HANDLERS = {
  [Types.GET_MODULES_REQUEST]: getModulesRequest,
  [Types.GET_MODULES_SUCCESS]: getModulesSuccess,
  [Types.GET_MODULES_FAILURE]: getModulesFailure,

  [Types.GET_MODULE_REQUEST]: getModuleRequest,
  [Types.GET_MODULE_SUCCESS]: getModuleSuccess,
  [Types.GET_MODULE_FAILURE]: getModuleFailure,

  [Types.CREATE_MODULE_REQUEST]: createModuleRequest,
  [Types.CREATE_MODULE_SUCCESS]: createModuleSuccess,
  [Types.CREATE_MODULE_FAILURE]: createModuleFailure,

  [Types.UPDATE_MODULE_REQUEST]: updateModuleRequest,
  [Types.UPDATE_MODULE_SUCCESS]: updateModuleSuccess,
  [Types.UPDATE_MODULE_FAILURE]: updateModuleFailure,

  [Types.REMOVE_MODULE_REQUEST]: removeModuleRequest,
  [Types.REMOVE_MODULE_SUCCESS]: removeModuleSuccess,
  [Types.REMOVE_MODULE_FAILURE]: removeModuleFailure,
};
export default createReducer(INITIAL_STATE, HANDLERS);
