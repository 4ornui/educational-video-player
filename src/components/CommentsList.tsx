import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { ICommentDetails } from "../interfaces/IComments";
import { CommentsListItem } from "./CommentsListItem";
export const CommentsList = () => {
    let { comments } = useLoaderData() as { comments: ICommentDetails[] };
    return (
        <div className="commentsList">
            <Suspense fallback={<>Loading...</>}>
                <Await
                    resolve={comments}
                    children={({ comments }) => (
                        <>
                            {comments.map((comment: ICommentDetails) => (
                                <CommentsListItem comment={comment} />
                            ))}
                        </>
                    )}
                ></Await>
            </Suspense>
        </div>
    );
};
