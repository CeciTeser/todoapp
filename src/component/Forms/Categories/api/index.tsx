
import { api } from '../../../../utils';
import { mapToArray } from '../../../../helpers';
import { Category } from '../../../../types';


const createCategory = async (user:string|undefined, data: Category) => {
    await api.post(`/users/${user}/categories.json`, data);
};

const getCategories = async (user:string|undefined) => {
    const response = await api.get(`/users/${user}/categories.json`);
    return mapToArray(response.data);
};


const deleteCategory = (user:string|undefined , categoryid:string ) => {
    api.delete(`/users/${user}/categories/${categoryid}.json`);

};


export { createCategory, getCategories, deleteCategory };