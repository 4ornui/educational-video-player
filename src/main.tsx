import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import useVideosListLoader from "./loaders/useVideosList.tsx";
import useVideoDetailesLoader from "./loaders/useVideoDetailesLoader.tsx";
import { MainPage } from "./pages/mainPage.tsx";
import App from "./App.tsx";
import { VideoDetails } from "./pages/videoDetails.tsx";

import "./index.css";

const queryClient = new QueryClient();

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
                loader: useVideoDetailesLoader,
            },
            {
                path: "/add-video",
                element: <div>Add details</div>,
            },
            {
                path: "/edit-video/:id",
                element: <div>Edit details</div>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);
