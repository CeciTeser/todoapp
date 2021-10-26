import { getBreeds } from "../../../api"

const getInfoBreeds = async () =>{
    const infobreeds = await getBreeds()

    console.log (infobreeds)
    return infobreeds

}
export {getInfoBreeds}