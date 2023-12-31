import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) return;

        navigate(`/order/${query}`);
        setQuery('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Search order..."
                type="text" 
                value={query}
                onChange={(e) => {
                    console.log(e.target.value);
                    setQuery(e.target.value)
                }}
            />
        </form>
    );
};

export default SearchOrder;