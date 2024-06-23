import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Poster from "../assets/poster.png";
import { IVideoResponse } from "../interfaces/IVideos";
import { LoadingVideoPlayer } from "./LoadingVideoPlayer";
import { timeSince } from "../utils/timeSince";
import { formatCommentCount } from "../utils/formatCommentCount";
export const VideoPlayer = () => {
    const { videoDetailes } = useLoaderData() as {
        videoDetailes: IVideoResponse;
    };
    return (
        <div className="videoDetails">
            <Suspense fallback={<LoadingVideoPlayer />}>
                <Await
                    resolve={videoDetailes}
                    children={({ video }) => (
                        <>
                            <video
                                className="videoPlayer"
                                src={video.video_url}
                                preload="auto"
                                poster={Poster}
                                controls
                            ></video>

                            <div className="title">{video.title}</div>
                            <div className="info">
                                <div className="timeSince">
                                    {formatCommentCount(video.num_comments)}
                                </div>
                                <div className="timeSince">
                                    {timeSince(video.created_at)}
                                </div>
                            </div>
                        </>
                    )}
                ></Await>
            </Suspense>
        </div>
    );
};
