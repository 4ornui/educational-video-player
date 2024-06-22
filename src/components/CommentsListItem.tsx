import { ICommentDetails } from "../interfaces/IComments";
import { timeSince } from "../utils/timeSince";
interface IProps {
    comment: ICommentDetails;
}
export const CommentsListItem = ({ comment }: IProps) => {
    return (
        <div className="commentDetailes">
            <div className="commentInfo">
                <span className="commentAuthor">{comment.user_id}</span>
                <span className="commentTimeSince">
                    {timeSince(comment.created_at)}
                </span>
            </div>
            <div className="commentContent">{comment.content}</div>
        </div>
    );
};
