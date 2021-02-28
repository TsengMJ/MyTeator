
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
      console.log("in User Module")
      console.log(user.id)

      state.id = user.id;
      state.first_name = user.first_name;
      state.last_name = user.last_name;
      state.email = user.email;
      state.status = user.status;
    }
  },
  actions: {
    login({ commit }) {
      //{account_email, password}
      // call login api, check if avaliable
      // let user = login(account, password)
      // if (valid)

      let user = {
        id: 123,
        first_name: 'MJ',
        last_name: 'Tseng',
        email: 'test@gmail.com',
        status: '111',
      }

      console.log("in User Module")
      console.log(user)
      commit('ASSIGN_USER', user)
    },

    // register() {
    //
    // },

  }
}

export default userModule;
