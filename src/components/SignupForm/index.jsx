import { useState } from 'react'

const SignupForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');

    const handleClearClick = () => {
        console.log('clear');
        setName('');
        setAge('');
        setAddress('');
        setZipcode('');
        setPhone('');
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        console.log('submit', {
            name,
            age,
            address,
            zipcode,
            phone
        });
    };

    return (
        <div>SignupForm
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="name">
                    Name
                    <input type="text" 
                    name="name" id="" 
                    value={name} onChange={(evt) => setName(evt.target.value)}
                    required/>
                </label>
                <label htmlFor="age">
                    Age
                    <input type="number" 
                    name="age" id="" 
                    value={age} onChange={(evt) => setAge(evt.target.value)}
                    required/>
                </label>
                <label htmlFor="address">
                    Address
                    <input type="text" 
                    name="address" id="" 
                    value={address} onChange={(evt) => setAddress(evt.target.value)}
                    required/>
                </label>
                <label htmlFor="zipcode">
                    Zipcode
                    <input type="number" 
                    name="zipcode" id="" 
                    value={zipcode} onChange={(evt) => setZipcode(evt.target.value)}
                    required/>
                </label>
                <label htmlFor="phone">
                    Phone
                    <input type="text" 
                    name="phone" id="" 
                    value={phone} onChange={(evt) => setPhone(evt.target.value)}
                    required/>
                </label>
                <div>
                    <button type='button' onClick={handleClearClick}>Clear</button>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
      )
}  

export default SignupForm