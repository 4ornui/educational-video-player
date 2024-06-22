import axios from "axios";
import { defer } from "react-router-dom";
import { BASE_URL } from "../config";
import { LoaderProps } from "../interfaces/interfaces";

import { IVideoResponse } from "../interfaces/IVideos";
import { ICommentsListResponse } from "../interfaces/IComments";

async function useVideoDetailes({ params }: LoaderProps) {
    const { id } = params;
    return await axios({
        method: "get",
        url: `${BASE_URL}/api/videos/single?video_id=${id}`,
    }).then(({ data }: IVideoResponse) => {
        return {
            video: data.video,
        };
    });
}

async function useCommentsList({ params }: LoaderProps) {
    const { id } = params;
    return await axios({
        method: "get",
        url: `${BASE_URL}/api/videos/comments?video_id=${id}`,
    }).then(({ data }: ICommentsListResponse) => {
        return {
            comments: data.comments,
        };
    });
}

export default async function useVideoDetailesLoader(loaderProps: LoaderProps) {
    return defer({
        videoDetailes: useVideoDetailes(loaderProps),
        comments: useCommentsList(loaderProps),
    });
}
