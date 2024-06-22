import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { IVideosListResponse } from "./interfaces/IVideos";
import { VideosList } from "./components/VideosList";
function App() {
    let { data } = useLoaderData() as IVideosListResponse;
    return (
        <Suspense fallback={<>Loading...</>}>
            <Await
                resolve={data}
                children={(resolvedReviews) => (
                    <VideosList data={resolvedReviews} />
                )}
            ></Await>
        </Suspense>
    );
}

export default App;
