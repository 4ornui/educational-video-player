import { VideoPlayer } from "../components/VideoPlayer";
import { CommentsList } from "../components/CommentsList";
import { Button } from "../components/Button";

export const VideoDetails = () => {
    return (
        <>
            <Button href="/add-video" text="Edit Video" />
            <VideoPlayer />
            <CommentsList />
        </>
    );
};
