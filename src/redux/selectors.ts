interface stateType {
  isLogin: { value: boolean };
  requireLogin: { value: boolean };
  mode: { value: number };
}


export const selectIsLogin = (state: stateType) => state.isLogin.value;

export const selectRequireLogin = (state: stateType) => state.requireLogin.value;

export const selectMode = (state: stateType) => state.mode.value;

