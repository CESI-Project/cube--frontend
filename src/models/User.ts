export interface User {
    id?: number;
    userName: string;
    birthDate: string;
    email: string;
    password: string;
    age?: number;
    role?: string[];
}
