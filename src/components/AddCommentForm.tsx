import { useState } from "react";
import { useFetcher } from "react-router-dom";
export const AddCommentForm = () => {
    const [comment, setComment] = useState("");
    const [userId, setUserId] = useState("");
    const fetcher = useFetcher();

    const handleCommentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setComment(event.target.value);
    };
    const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (comment.trim() !== "") {
            fetcher.submit(
                {
                    comment: comment,
                    userId: userId,
                },
                {
                    method: "post",
                }
            );
            setUserId("");
            setComment("");
        }
    };
    return (
        <form onSubmit={handleSubmit} className="addCommentForm">
            <div>
                <input
                    name="userId"
                    type="text"
                    placeholder="Add User Id..."
                    value={userId}
                    onChange={handleUserIdChange}
                />
                <input
                    name="comment"
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={handleCommentChange}
                />
                <div className="commentBtn">
                    <button type="submit" name="intent" value="add">
                        Comment
                    </button>
                </div>
            </div>
        </form>
    );
};
