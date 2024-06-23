import axios from "axios";
import { ActionProps } from "../interfaces/interfaces";
import { BASE_URL } from "../config";
import { redirect } from "react-router-dom";
export const addVideoAction = async ({ request, params }: ActionProps) => {
    const { id } = params;
    const isCreatMode = !id;
    const formData = await request.formData();
    const videoUrl = formData.get("video_url");
    const title = formData.get("title");
    const userId = formData.get("user_id");
    const description = formData.get("description");
    let config = {};
    if (isCreatMode) {
        config = {
            method: "POST",
            url: `${BASE_URL}/api/videos`,
            data: {
                video_url: videoUrl,
                title: title,
                user_id: userId,
                description: description,
            },
        };
    } else {
        config = {
            method: "PUT",
            url: `${BASE_URL}/api/videos`,
            data: {
                video_id: id,
                title: title,
                description: description,
            },
        };
    }
    await axios(config);

    return redirect("/");
};
