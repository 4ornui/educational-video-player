import axios from "axios";
import { defer } from "react-router-dom";

import { IVideosListResponse } from "../interfaces/IVideos";

async function useGetVideosList() {
    return await axios({
        method: "get",
        url: `https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=1`,
    }).then(({ data }: IVideosListResponse) => {
        return { videos: data.videos };
    });
}

export default async function useGetVideosListLoader() {
    return defer({
        data: useGetVideosList(),
    });
}
