export interface Comment {
    id?: number;
    text: string;
    react: number
    dislike: number;
    createdAt: string;
    topicId: number;
    userId: number;
}
