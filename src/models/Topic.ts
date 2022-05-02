export interface Topic {
    id: number;
    title: string;
    text: string;
    picture: string;
    view: number;
    isValidated?: boolean;
    comment: string;
    tags?: string[];
}
