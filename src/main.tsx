import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import useVideosListLoader from "./loaders/useVideosList.tsx";
import useVideoDetailesAndCommentsLoader from "./loaders/useVideoDetailesAndCommentsLoader.tsx";
import useVideoDetailesLoader from "./loaders/useVideoDetailesLoader.tsx";
import { addCommentAction } from "./actions/addCommentAction.ts";
import { addVideoAction } from "./actions/addVideoAction.ts";

import { MainPage } from "./pages/mainPage.tsx";
import App from "./App.tsx";
import { VideoDetails } from "./pages/videoDetails.tsx";
import { AddVideoPage } from "./pages/addVideoPage.tsx";

import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <MainPage />,
                loader: useVideosListLoader,
            },
            {
                path: "/video-details/:id",
                element: <VideoDetails />,
                loader: useVideoDetailesAndCommentsLoader,
                action: addCommentAction,
            },
            {
                path: "/add-video",
                element: <AddVideoPage />,
                action: addVideoAction,
            },
            {
                path: "/edit-video/:id",
                element: <AddVideoPage />,
                loader: useVideoDetailesLoader,
                action: addVideoAction,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
