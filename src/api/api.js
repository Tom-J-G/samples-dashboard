import axios from 'axios'

export const axiosSamples = axios.create({
    baseURL: "https://rs-inventory-alpha.researchspace.com/api/inventory/v1",
    headers: {
        apiKey: '6XYwT38ifwnRqpsVx1n9dudqqn6goqsu' 
    }
})