export const MODULE_NAME = 'PROFILE';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_AGE = 'CHANGE_AGE';
export const CHANGE_URL = 'CHANGE_URL';
export const RANDOM_PICTURE = 'RANDOM_PICTURE';

export const initialState = () => {
  return {
    name: 'myTestUser',
    age: 22,
    url: ''
  };
};


export default {
  namespaced: true,
  state: initialState(),
  mutations: {
    [CHANGE_NAME](state, payload) {
      state.name = payload || "";
    },
    [CHANGE_AGE](state, payload) {
      state.age = payload;
    },
    [CHANGE_URL](state, payload) {
      state.url = payload;
    }
  },
  actions: {
    async [RANDOM_PICTURE] (context){
      // await fetch('www.google.de');
      context.commit(CHANGE_URL, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png');
    }
  }
};
