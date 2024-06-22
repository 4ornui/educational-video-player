export interface ICommentDetails {
    created_at: string;
    content: string;
    user_id: string;
    video_id: string;
    id: string;
}

export interface ICommentsListResponse {
    comments: ICommentDetails[];
}
