import { defer } from "react-router-dom";
import { LoaderProps } from "../interfaces/interfaces";

import { useVideoDetailes } from "./useVideoDetailesAndCommentsLoader";

export default async function useVideoDetailesAndCommentsLoader(
    loaderProps: LoaderProps
) {
    return defer({
        data: await useVideoDetailes(loaderProps),
    });
}
