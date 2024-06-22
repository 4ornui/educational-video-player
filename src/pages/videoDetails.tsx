import Poster from "../assets/poster.png";
export const VideoDetails = () => {
    return (
        <video
            src="https://videos.pexels.com/video-files/1321208/1321208-uhd_2560_1440_30fps.mp4"
            preload="none"
            poster={Poster}
            controls
            width={300}
        />
    );
};
