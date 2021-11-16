import { mapToArray } from "../helpers"
import { api } from "../utils"

const showDogsList = async (user: string|undefined)=>{

    const dogs = await api.get(`/users/${user}/dogs.json`)
    return mapToArray (dogs.data)
}

export {showDogsList}