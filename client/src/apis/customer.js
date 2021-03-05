import axios from 'axios'

const customerRequest = axios.create({
  baseURL: 'http://localhost:3000/api/customer/'
})

const apiUserRegister = async data => customerRequest.post('/', data)
const apiUserLogin = async data => customerRequest.post('/login', data)

export {
  apiUserRegister,
  apiUserLogin
}
