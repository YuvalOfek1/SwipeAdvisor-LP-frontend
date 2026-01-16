import axios from "axios"
import { BACKEND_URL } from "../../constants/constants"

export const createUser = async (email: string) => {
    const response = await axios.post(`${BACKEND_URL}/users`, { email })
    return response.data
}