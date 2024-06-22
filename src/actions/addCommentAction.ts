import axios from "axios";
import { ActionProps } from "../interfaces/interfaces";
import { ICreateComment } from "../interfaces/IComments";
import { BASE_URL } from "../config";
export const addCommentAction = async ({ request, params }: ActionProps) => {
    const formData = await request.formData();
    let comment = formData.get("comment");
    let userId = formData.get("userId");
    await axios.post<ICreateComment>(`${BASE_URL}/api/videos/comments`, {
        content: comment,
        user_id: userId,
        video_id: params.id,
    });

    return { ok: true };
};
