import { IVideoDetails } from "../interfaces/IVideos";
import Poster from "../assets/poster.png";

interface IProps {
    item: IVideoDetails;
}
export const VideoThumbnail = ({ item }: IProps) => {
    return (
        <div>
            <img src={Poster} title={item.title} alt={item.title} />
        </div>
    );
};
