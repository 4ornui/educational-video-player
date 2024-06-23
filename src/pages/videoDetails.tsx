import { useParams } from "react-router-dom";
import { VideoPlayer } from "../components/VideoPlayer";
import { CommentsList } from "../components/CommentsList";
import { Button } from "../components/Button";

export const VideoDetails = () => {
    let { id } = useParams();
    return (
        <>
            <Button href={`/edit-video/${id}`} text="Edit Video" />
            <VideoPlayer />
            <CommentsList />
        </>
    );
};
