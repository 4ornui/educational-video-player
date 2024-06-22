import { IVideoDetails } from "../interfaces/IVideos";
import Poster from "../assets/poster.png";

interface IProps {
    item: IVideoDetails;
}
export const VideoThumbnail = ({ item }: IProps) => {
    return (
        <div>
            <img
                className={`${item.video_url || "opacity_05"}`}
                src={Poster}
                title={item.title}
                alt={item.title}
            />
        </div>
    );
};
