import { IVideosListResponse, IVideoDetails } from "../interfaces/IVideos";
import { VideosListItem } from "./VideosListItem";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { LoadingVideosList } from "./LoadingVideosList";

export const VideosList = () => {
    const { data } = useLoaderData() as IVideosListResponse;
    return (
        <div className="videosList">
            <Suspense fallback={<LoadingVideosList />}>
                <Await
                    resolve={data}
                    children={(resolvedReviews) => (
                        <>
                            {resolvedReviews.videos.map(
                                (item: IVideoDetails) => {
                                    return (
                                        <VideosListItem
                                            key={item.id}
                                            item={item}
                                        />
                                    );
                                }
                            )}
                        </>
                    )}
                ></Await>
            </Suspense>
        </div>
    );
};
