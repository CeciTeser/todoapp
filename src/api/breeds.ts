import { Breeds } from "../types";
import { apiBreeds } from "../utils";

const mapToArray = (object: any) => {
    const array = [];

    for (const elem in object) {
    array.push({
        id: elem,
        ...object[elem],
    });
    }

    return array;
};

const getBreeds = async (): Promise<Breeds[]> => {
    const breedsList = await apiBreeds.get("/breeds.json");
    return mapToArray(breedsList.data);
};

export { getBreeds };