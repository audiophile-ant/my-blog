interface stateType {
  isLogin: { value: boolean };
  requireLogin: { value: boolean };
  mode: { value: number };
  timeOfDay: { value: string };
  showNav: { value: boolean };
  timeSwitch: { value: boolean };
}


export const selectIsLogin = (state: stateType) => state.isLogin.value;

export const selectRequireLogin = (state: stateType) => state.requireLogin.value;

export const selectMode = (state: stateType) => state.mode.value;

export const selectTimeOfDay = (state: stateType) => state.timeOfDay.value;

export const selectShowNav = (state: stateType) => state.showNav.value;

export const selectTimeSwitch = (state: stateType) => state.timeSwitch.value;



