import axios from "axios";
import { defer } from "react-router-dom";
import { BASE_URL, USER_ID } from "../config";

import { IVideosListResponse } from "../interfaces/IVideos";

async function useCommentsList() {
    return await axios({
        method: "get",
        url: `${BASE_URL}/api/videos?user_id=${USER_ID}`,
    }).then(({ data }: IVideosListResponse) => {
        return { videos: data.videos };
    });
}

export default async function useCommentsListLoader() {
    return defer({
        data: useCommentsList(),
    });
}
