export interface User {
    id?: number;
    username: string;
    birthDate: string;
    email: string;
    password: string;
    age?: number;
    role?: string[];
}
