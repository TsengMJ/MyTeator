import axios from "axios";

const productRequest = axios.create({
  baseURL:'http://localhost:3000/api/product/'
})

const apiProductCreate = async data => productRequest.post('/', data)
const apiProductFetchAllIDs = async () => productRequest.get('/id')
const apiProductSearch = async data => productRequest.get('/search', data)
const apiProductFetchWithIDs = async id_array => productRequest.get('/', {params: {ids: id_array}})

export {
  apiProductCreate,
  apiProductFetchAllIDs,
  apiProductSearch,
  apiProductFetchWithIDs
}
