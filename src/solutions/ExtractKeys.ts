/**
 * 
 */

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


type ExtractKeys<T> = T extends object
    ? { [Key in keyof T & string]:
        (T[Key] extends object
            ? `${Key}.${ExtractKeys<T[Key]>}`
            : Key);
    }[keyof T & string]
    : never


type Result = ExtractKeys<FormValues>;
//    ^?