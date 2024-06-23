import axios from "axios";
import { ActionProps } from "../interfaces/interfaces";
import { ICreateComment } from "../interfaces/IComments";
import { BASE_URL } from "../config";
import { redirect } from "react-router-dom";
export const addVideoAction = async ({ request }: ActionProps) => {
    const formData = await request.formData();
    const videoUrl = formData.get("video_url");
    const title = formData.get("title");
    const userId = formData.get("user_id");
    const description = formData.get("description");
    await axios.post<ICreateComment>(`${BASE_URL}/api/videos`, {
        video_url: videoUrl,
        title: title,
        user_id: userId,
        description: description,
    });

    return redirect("/");
};
