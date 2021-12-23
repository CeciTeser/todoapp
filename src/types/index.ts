export type User = {
    id?: string;
    password: string, 
    email: string, 
    username: string;
    dogname: string;
    dogbreedselected: string;
    sessionToken: string;

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

export type Dogs = {
    id?:string;
    dogname: string;
    dogbreedselected: string;
};

export type Todo = {
    id?:string;
    title: string;
    description: string;
    todostate: string;
    tododate: string;
    category: string, 
};

export type Category = {
    id?: string,
    category?: string,
};


