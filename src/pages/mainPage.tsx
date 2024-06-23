import { VideosList } from "../components/VideosList";
import { Button } from "../components/Button";
export const MainPage = () => {
    return (
        <>
            <Button href="/add-video" text="Add Video" />
            <VideosList />
        </>
    );
};
