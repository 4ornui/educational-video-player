import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src="./FULL_LOGO_COLOR.png" width={150} />
            </Link>
        </header>
    );
};
