export interface Comment {
    id?: number;
    text: string;
    createdAt: Date;
    topicId: number;
    userId: number;
}
