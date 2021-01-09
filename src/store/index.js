import { createStore } from "vuex";

//modules
import user from "@/store/user.module";
import auth from "@/store/auth.module";
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    auth
  }
});

export default store;
