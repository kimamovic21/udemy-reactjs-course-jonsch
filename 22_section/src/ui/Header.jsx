import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
    return (
        <div>
            <Link to='/'>Fast React Pizza Co.</Link>
            <SearchOrder />
        </div>
    );
};

export default Header;