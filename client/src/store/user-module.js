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
      console.log("in User Module")
      console.log(user)

      state.id = user.id;
      state.first_name = user.first_name;
      state.last_name = user.last_name;
      state.email = user.email;
    }
  },
  actions: {
    async login({ commit }, data) {
      // call login api, check if avaliable
      // let user = login(account, password)
      // if (valid)
      apiUserLogin(data)
        .then((res) => {

        })

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

    async register({ commit } , data) {
      apiUserRegister(data)
        .then((res) => {
          if(res.data == "Success") { commit('ASSIGN_USER', data); return true;}
          else { return false }
        })
    },

  }
}

export default userModule;
