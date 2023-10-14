import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type }) => {
    const base = 'text-sm bg-yellow-400 uppercase font-semibold tracking-wide text-stone-800 inline-block rounded-full hover:bg-yellow-200 transition-color duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-yellow-400 disabled:cursor-not-allowed';

    const styles = {
        primary: base + ' px-4 py-3 md:px-6 sm:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        secondary: 'text-sm px-3.5 py-2.5 uppercase font-semibold tracking-wide text-stone-500 inline-block rounded-full border-2 border-stone-300 hover:bg-stone-300 hover: text-stone-800 transition-color duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 active:bg-stone-400 disabled:cursor-not-allowed md:px-4.5 md:py-3.5'
    };

    if (to) {
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        );
    }

    return (
        <button 
            disabled={disabled} 
            className={styles[type]}
        >
            {children}
        </button>
    );
}

export default Button;