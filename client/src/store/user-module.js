import { apiUserRegister, apiUserLogin } from '@/apis'
const userModule = {
  state: {
    id: '',
    first_name: null,
    last_name: null,
    email: null,
    status: null,
  },
  mutations: {
    ASSIGN_USER ( state, user) {
      console.log("ASSIGN_USER: ", user)

      state.id = user.id;
      state.first_name = user.first_name;
      state.last_name = user.last_name;
      state.email = user.email;
    }
  },
  actions: {
    async login({ commit } , account_data) {
      let res = await apiUserLogin(account_data);

      console.log("Store, Login: ", res.data)
      if(typeof(res.data) === "object" && res.data != null) {
        commit('ASSIGN_USER', res.data)
        return true;
      } else {
        return false;
      }
    },

    async register( _ , user) {
      let res = await apiUserRegister(user);

      if(res.data == "Success") { return true; }
      else { return false; }
    },

  }
}

export default userModule;
