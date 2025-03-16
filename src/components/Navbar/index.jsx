import { useState } from "react";

const Navbar = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const  handleInputChange = (evt) => {
        evt.stopPropagation();
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt) => {
        evt.stopPropagation();
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