import { IVideosListResponse, IVideoDetails } from "../interfaces/IVideos";
export const VideosList = ({ data }: IVideosListResponse) => {
    return (
        <>
            {data.videos.map((item: IVideoDetails) => {
                return <div key={item.id}>{item.title}</div>;
            })}
        </>
    );
};
