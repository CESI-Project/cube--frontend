export interface User {
    id?: number;
    username: string;
    firstName: string;
    name: string
    birthDate: string;
    email: string;
    password: string;
    age?: number;
    role?: [string];
}
