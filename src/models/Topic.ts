export interface Topic {
    id?: number;
    title: string;
    text: string;
    picture: any;
    view?: number;
    isValidated?: boolean;
    comment?: string;
    favorite?: string[];
    tags?: string[];
}
