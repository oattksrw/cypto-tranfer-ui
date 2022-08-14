import axios from 'axios'
import { TRIKER_24HR_URL } from './endpoint'

export const ticker24hrs = {
    get: async (params) => {
        const response = await axios.get(`${TRIKER_24HR_URL}?symbol=${params}`)
        return response
    }
}