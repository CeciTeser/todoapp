export type User = {
    id: string;
    password: string, 
    email: string, 
    username: string;
    gender: string;
    userage: number;
    userweight: number;
    dogname: string;
    dogage: number;
    dogweight: number;
    dogbreedselected: string;
};

export type Image = {
    id: string,
    width: number,
    height: number,
    url: string,
};

export type Breeds ={
    weight:{
        imperial: string,
        metric: string, 
    };
    height: {
        imperial: string,
        metric: string,
    };

    id: number,
    name: string,
    bred_for: string,
    breed_group: string,
    life_span: string,
    temperament: string,
    origin: string,
    reference_image_id: string,
    image: Image,
};

