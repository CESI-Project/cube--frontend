import { Tag } from './Tag';

export interface Topic {
    id?: number;
    title: string;
    text: string;
    picture?: any;
    view?: number;
    isValidated?: boolean;
    userId?: number;
    comment?: string;
    favorite?: string[];
    tags: Tag[];
}
