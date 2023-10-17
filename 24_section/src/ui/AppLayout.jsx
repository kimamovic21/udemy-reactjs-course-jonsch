import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
    const navigation = useNavigation();
    // console.log(navigation);
    const isLoading = navigation.state === 'loading';
    // console.log(isLoading);

    return (
        <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
            {isLoading && (<Loader />)}
            {/* {true && (<Loader />)} */}

            <Header />

            <div className="overflow-auto">
                <main className="mx-auto max-w-3xl">
                    <Outlet />
                </main>
            </div>

            <CartOverview />
        </div>
    );
};

export default AppLayout;