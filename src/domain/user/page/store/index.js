export const MODULE_NAME = 'PROFILE';
export const CHANGE_NAME = 'CHANGE_NAME';

const initialState = () => {
  return {
    name: 'myTestUser'
  };
};


export default {
  namespaced: true,
  state: initialState(),
  mutations: {
    [CHANGE_NAME](state, payload) {
      state.name = payload;
    }
  },
  actions: {}
};
