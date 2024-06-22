import { Link } from "react-router-dom";
import { IVideoDetails } from "../interfaces/IVideos";
import { timeSince } from "../utils/timeSince";
import { formatCommentCount } from "../utils/formatCommentCount";

import { VideoThumbnail } from "./VideoThumbnail";

interface IProps {
    item: IVideoDetails;
}

export const VideosListItem = ({ item }: IProps) => {
    return (
        <Link to={`/video-details/${item.id}`} className="videosListItem">
            <VideoThumbnail item={item} />
            <div className="title">{item.title}</div>
            <div className="info">
                <div className="timeSince">
                    {formatCommentCount(item.num_comments)}
                </div>
                <div className="timeSince">{timeSince(item.created_at)}</div>
            </div>
        </Link>
    );
};
