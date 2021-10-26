import { mapToArray } from "../helpers"
import { api } from "../utils"

const showDogsList = async (query:string)=>{

    const dogs = await api.get(`/users/${query}/dogs.json`)
    return mapToArray (dogs.data)
}

export {showDogsList}