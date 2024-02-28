import { useState } from "react";

function GeneralInfoSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submit, setSubmit] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmit(true);
        return;
    };

    function handleEdit(e) {
        e.preventDefault();
        setSubmit(false);
        return;
    }

    if(!submit) {
        return (
            <div id="general-info">
            <form onSubmit={handleSubmit}>
                <p>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" id="name" name='name' value={name}
                    onChange={(e)=> setName(e.target.value)}
                ></input>
                </p>
                <p>
                <label htmlFor="email">
                    <span>Email</span>
                </label>
                <input type="email" id="email" name='email' value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                ></input>
                </p>
                <p>
                <label htmlFor="phone-number">
                    <span>Phone Number</span>
                </label>
                <input type="tel" id="phone-number" name='phoneNumber' value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                ></input>
                </p>
                <button type="submit">Submit</button>
            </form>
            </div>
        );
    } else return (
        <div id="general-info">
        <form>
            <p>
                {name}
            </p>
            <p>
                {email}
            </p>
            <p>
                {phone}
            </p>
            <button type="button" onClick={handleEdit}>Edit</button>
        </form>
        </div>
    ); 
}

export default GeneralInfoSection;
