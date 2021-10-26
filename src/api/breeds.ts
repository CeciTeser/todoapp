import { mapToArray } from "../helpers";
import { Breeds } from "../types";
import { apiBreeds } from "../utils";



const getBreeds = async (): Promise<Breeds[]> => {
    const breedsList = await apiBreeds.get("/breeds.json");
    return mapToArray(breedsList.data);
};

export { getBreeds };