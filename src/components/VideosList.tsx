import { IVideosListResponse, IVideoDetails } from "../interfaces/IVideos";
import { VideosListItem } from "./VideosListItem";
import { AddVideoBtn } from "./AddVideoBtn";

export const VideosList = ({ data }: IVideosListResponse) => {
    return (
        <>
            <AddVideoBtn />
            <div className="videosList">
                {data.videos.map((item: IVideoDetails) => {
                    return <VideosListItem key={item.id} item={item} />;
                })}
            </div>
        </>
    );
};
