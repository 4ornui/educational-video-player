import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { ICommentDetails } from "../interfaces/IComments";
import { CommentsListItem } from "./CommentsListItem";
import { AddCommentForm } from "./AddCommentForm";
export const CommentsList = () => {
    let { comments } = useLoaderData() as { comments: ICommentDetails[] };
    return (
        <>
            <AddCommentForm />
            <div className="commentsList">
                <Suspense fallback={<>Loading...</>}>
                    <Await
                        resolve={comments}
                        children={({ comments }) => (
                            <>
                                {comments.map((comment: ICommentDetails) => (
                                    <CommentsListItem
                                        key={comment.id}
                                        comment={comment}
                                    />
                                ))}
                            </>
                        )}
                    ></Await>
                </Suspense>
            </div>
        </>
    );
};
