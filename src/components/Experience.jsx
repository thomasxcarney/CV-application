import { useState } from "react";

function ExperienceSection() {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [respon, setRespon] = useState('');
    const [date, setDate] = useState('');
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

    if(!submit){
            return (
            <div id="experience">
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="company-name">
                        <span>Company name</span>
                    </label>
                    <input type="text" id="company-name" name='companyName' value={company}
                        onChange={(e)=> setCompany(e.target.value)}
                    ></input>
                </p>
                <p>
                    <label htmlFor="position">
                        <span>Position held</span>
                    </label>
                    <input type="text" id="position" name='position' value={position}
                        onChange={(e)=> setPosition(e.target.value)}
                    ></input>
                </p>
                <p>
                    <label htmlFor="responsibilities">
                        <span>Responsibilities</span>
                    </label>
                    <input type="text" id="responsibilities" name='responsibilities' value={respon}
                        onChange={(e)=> setRespon(e.target.value)}
                    ></input>
                </p>
                <p>
                    <label htmlFor="start-date">
                        <span>Start date</span>
                    </label>
                    <input type="date" id="start-date" name='startDate' value={date}
                        onChange={(e)=> setDate(e.target.value)}
                    ></input>
                </p>
                <button type="submit">Submit</button>
            </form>
            </div>
        );
    } else return (
        <div id="experience">
        <form>
            <p>
                {company}
            </p>
            <p>
                {position}
            </p>
            <p>
                {respon}
            </p>
            <p>
                {date}
            </p>
            <button type="button" onClick={handleEdit}>Edit</button>
        </form>
        </div>
    );
}

export default ExperienceSection;
