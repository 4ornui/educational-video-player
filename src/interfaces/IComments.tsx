export interface ICommentDetails {
    created_at: string;
    content: string;
    user_id: string;
    video_id: string;
    id: string;
}

export interface ICommentsListResponse {
    data: {
        comments: ICommentDetails[];
    };
}
export interface ICreateComment {
    content: string;
    user_id: string;
    video_id: string;
}
