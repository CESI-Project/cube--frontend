export interface SubComment {
    id?: number;
    text: string;
    createdAt: string;
    commentId: number | undefined;
    userId: number | undefined;
}
