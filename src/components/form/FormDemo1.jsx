    import { useState } from 'react';

    export const FormDemo1 = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');

    const statesData = {
        india: ["Gujarat", "Maharashtra", "Rajasthan", "Delhi"],
        usa: ["California", "Texas", "Florida", "New York"],
        canada: ["Ontario", "Quebec", "British Columbia"]
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        setState(""); // reset state when country changes
    };

    return (
        <div>
        <h1>FORM DEMO 1</h1>

        {/* Name */}
        <div>
            <label>NAME : </label>
            <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            />
            <p>{name}</p>
        </div>

        {/* Gender */}
        <div>
            <label>GENDER : </label>
            MALE
            <input
            type="radio"
            value="MALE"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            />
            FEMALE
            <input
            type="radio"
            value="FEMALE"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            />
            <h3>{gender}</h3>
        </div>

        {/* Country */}
        <div>
            <label>Country:</label><br />
            <select value={country} onChange={handleCountryChange}>
            <option value="">-- Select Country --</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            </select>
        </div>

        {/* State */}
        {country && (
            <div style={{ marginTop: "10px" }}>
            <label>State:</label><br />
            <select value={state} onChange={(e) => setState(e.target.value)}>
                <option value="">-- Select State --</option>
                {statesData[country].map((st) => (
                <option key={st} value={st}>
                    {st}
                </option>
                ))}
            </select>
            </div>
        )}
        </div>
    );
    };
