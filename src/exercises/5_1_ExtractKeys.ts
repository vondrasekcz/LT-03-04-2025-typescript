type FormValues = {
    name: {
        first: string;
        last: string;
    },
    address: {
        street: string;
        city: string;
    },
    contact: {
        personal: {
            email: string;
            phone: string;
        },
        company: {
            email: string;
            phone: string;
        }
    }
}


type ExtractKeys<T> = TODO


// expected outcome: "name" | "address" | "contact" | "name.first" | "name.last" ...
type Result = ExtractKeys<FormValues>;
//    ^?