import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  signinRequest: ["email", "password"],
  signinSuccess: ["user"],
  signinFailure: ["error"],

  authRequest: null,
  authSuccess: ["user"],
  authFailure: null,

  getModulesRequest: ["modules"],
  getModulesSuccess: ["modules"],
  getModulesFailure: null,

  getModuleRequest: ["module"],
  getModuleSuccess: ["module"],
  getModuleFailure: null,

  createModuleRequest: ["module"],
  createModuleSuccess: ["module"],
  createModuleFailure: ["error"],

  updateModuleRequest: ["module"],
  updateModuleSuccess: ["module"],
  updateModuleFailure: ["error"],

  removeModuleRequest: ["id"],
  removeModuleSuccess: ["id"],
  removeModuleFailure: ["error"],

  getClassesRequest: ["id"],
  getClassesSuccess: ["classes"],
  getClassesFailure: null,

  getClassRequest: ["class"],
  getClassSuccess: ["class"],
  getClassFailure: null,

  createClassRequest: ["class"],
  createClassSuccess: ["class"],
  createClassFailure: ["error"],

  updateClassRequest: ["class"],
  updateClassSuccess: ["class"],
  updateClassFailure: ["error"],

  removeClassRequest: ["id"],
  removeClassSuccess: ["id"],
  removeClassFailure: ["error"],

  destroyAuthRequest: null,
  destroyAuthSuccess: null,

  getTotalClassesRequest: null,
  getTotalClassesSuccess: ["total"],
  getTotalClassesFailure: null,
});
export default Creators;
