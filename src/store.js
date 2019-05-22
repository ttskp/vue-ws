import Vue from 'vue'
import Vuex from 'vuex'

import profileStore, {MODULE_NAME as PROFILE_MODULE_NAME}  from "./domain/user/page/store";

Vue.use(Vuex);
const store = new Vuex.Store({});
store.registerModule(PROFILE_MODULE_NAME, profileStore);
export default store;
