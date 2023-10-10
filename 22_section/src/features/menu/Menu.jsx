import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

const Menu = () => {
    const menu = useLoaderData();
    // console.log(menu);

    return (
        <ul>
            {menu.map((pizza) => {
                return (
                    <MenuItem key={pizza.id} pizza={pizza} />
                )
            })}
        </ul>
    );
}

export const loader = async () => {
    const menu = await getMenu();
    console.log(menu);
    return menu;
};

export default Menu;