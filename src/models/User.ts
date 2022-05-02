import { Comment } from './Comment';

export interface User {
    id?: number;
    userName: string;
    birthDate: string;
    email: string;
    password: string;
    comment?: Comment[];
    age?: number;
    role?: string[];
}
