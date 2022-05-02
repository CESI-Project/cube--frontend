import { Topic } from './Topic';

export interface Tag {
    id: number;
    nameEn: string;
    nameFr: string;
    familyTagId: number;
    topics: Topic[];
}
