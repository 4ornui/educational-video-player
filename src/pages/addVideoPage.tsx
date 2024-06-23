import { useReducer } from "react";
import { useFetcher } from "react-router-dom";
import {
    FormState,
    FormAction,
    initialFormState,
    formReducer,
} from "../reducers/AddVideoReducer";

export const AddVideoPage = () => {
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
        dispatch({ type: "RESET_FORM" });
    };
    return (
        <form onSubmit={handleSubmit} className="addCommentForm">
            <div>
                <input
                    name="videoUrl"
                    type="text"
                    placeholder="Add Video URL..."
                    value={state.video_url}
                    onChange={handleChange("video_url")}
                    required
                />
                <input
                    name="title"
                    type="text"
                    placeholder="Add Title..."
                    value={state.title}
                    onChange={handleChange("title")}
                    required
                />
                <input
                    name="userId"
                    type="text"
                    placeholder="Add User Id..."
                    value={state.user_id}
                    onChange={handleChange("user_id")}
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
                        Add Video
                    </button>
                </div>
            </div>
        </form>
    );
};
