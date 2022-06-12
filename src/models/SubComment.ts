export interface SubComment {
    id?: number;
    text: string;
    createdAt: Date;
    commentId: number | undefined;
    userId: number | undefined;
}
