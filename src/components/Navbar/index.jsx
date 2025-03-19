import { useState, useEffect } from "react";

const Navbar = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        onSearch(search);
    }, [search, onSearch]);

    const  handleInputChange = (evt) => {
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search)
        }
    }

    return (
        <div>
            <p>Mi boletera</p>
            <input placeholder="Busca tu evento" 
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search}/>
        </div>
    )
}

export default Navbar;