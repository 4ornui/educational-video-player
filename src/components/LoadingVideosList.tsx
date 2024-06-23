import { VideosListItem } from "./VideosListItem";
import { IVideosListResponse, IVideoDetails } from "../interfaces/IVideos";
export const LoadingVideosList = () => {
    const { data } = {
        data: {
            videos: [{}, {}, {}],
        },
    } as IVideosListResponse;
    return (
        <>
            {data.videos.map((item: IVideoDetails, index: number) => {
                return <VideosListItem key={index} item={item} />;
            })}
        </>
    );
};
