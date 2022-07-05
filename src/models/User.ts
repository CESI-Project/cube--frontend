import { Comment } from './Comment';

export interface User {
    id?: number;
    userName: string;
    age: string;
    email: string;
    password: string;
    comment?: Comment[];
    favorite?: string[];
    roles?: string[];
    isActivated: boolean;
}
