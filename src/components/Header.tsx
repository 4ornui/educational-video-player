import { Link } from "react-router-dom";
import LOGO from "../../public/FULL_LOGO_COLOR.png";
export const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={LOGO} width={150} />
            </Link>
        </header>
    );
};
