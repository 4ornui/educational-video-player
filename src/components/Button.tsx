import { Link } from "react-router-dom";
interface iProps {
    href: string;
    text: string;
}
export const Button = ({ href = "", text = "" }: iProps) => {
    return (
        <div className="addBtn">
            <Link to={href}>{text}</Link>
        </div>
    );
};
