import { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const Navbar = forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        onSearch(search);
    }, [search, onSearch]);

    useImperativeHandle(ref, () => ({
        search
    }));

    const  handleInputChange = (evt) => {
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search)
        }
    }

    return (
        <div ref={ref} style={
            {
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px',
                borderBottom: '1px solid #ccc'
            }
        }>
            <p>Mi boletera</p>
            <input placeholder="Busca tu evento" 
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search}/>
        </div>
    )
});

Navbar.displayName = 'Navbar';

export default Navbar;