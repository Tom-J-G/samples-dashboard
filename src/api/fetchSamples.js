import {axiosSamples as axios} from './api'

export const getSamples = () => {
    return axios.get('/samples?pageNumber=0&pageSize=50&orderBy=name%20asc')
}