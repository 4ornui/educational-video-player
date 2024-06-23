import { useReducer } from "react";
import { useFetcher, useLoaderData, useParams } from "react-router-dom";
import { IVideoResponse } from "../interfaces/IVideos";
import {
    FormState,
    FormAction,
    emptyFormState,
    formReducer,
} from "../reducers/AddVideoReducer";

export const AddVideoPage = () => {
    const { id } = useParams();
    const isCreatMode = !id;
    let initialFormState = emptyFormState;
    const response = useLoaderData() as IVideoResponse;
    if (id) {
        initialFormState = {
            user_id: response.data.video.user_id,
            description: response.data.video.description,
            video_url: response.data.video.video_url,
            title: response.data.video.title,
        };
    }
    const fetcher = useFetcher();
    const [state, dispatch] = useReducer<React.Reducer<FormState, FormAction>>(
        formReducer,
        initialFormState
    );
    const handleChange =
        (field: keyof FormState) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: `SET_${field.toUpperCase()}` as FormAction["type"],
                payload: e.target.value,
            });
        };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetcher.submit(
            { ...state },
            {
                method: "post",
            }
        );
    };
    return (
        <form onSubmit={handleSubmit} className="addCommentForm">
            <div>
                {isCreatMode && (
                    <input
                        name="videoUrl"
                        type="text"
                        placeholder="Add Video URL..."
                        value={state.video_url}
                        onChange={handleChange("video_url")}
                        required
                    />
                )}
                {isCreatMode && (
                    <input
                        name="userId"
                        type="text"
                        placeholder="Add User Id..."
                        value={state.user_id}
                        onChange={handleChange("user_id")}
                        required
                    />
                )}
                <input
                    name="title"
                    type="text"
                    placeholder="Add Title..."
                    value={state.title}
                    onChange={handleChange("title")}
                    required
                />
                <input
                    name="description"
                    type="text"
                    placeholder="Add a description..."
                    value={state.description}
                    onChange={handleChange("description")}
                    required
                />
                <div className="commentBtn">
                    <button type="submit" name="intent" value="add">
                        {isCreatMode ? "Add" : "Edit"} Video
                    </button>
                </div>
            </div>
        </form>
    );
};
