export interface IVideoDetails {
    created_at: string;
    video_url: string;
    user_id: string;
    description: string;
    title: string;
    num_comments: number;
    id: string;
}

export interface IVideosListResponse {
    data: {
        videos: IVideoDetails[];
    };
}

export interface IVideoResponse {
    data: {
        video: IVideoDetails;
    };
}
