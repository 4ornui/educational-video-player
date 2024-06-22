export function formatCommentCount(count: number) {
    if (count === 0) {
        return "No comments";
    } else if (!count) {
        return "Loading...";
    } else if (count === 1) {
        return "1 comment";
    } else {
        return `${count} comments`;
    }
}
