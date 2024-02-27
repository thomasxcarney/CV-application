import { useState } from "react";

function EducationSection() {
    const [school, setSchool] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
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

    if(!submit){return (
        <div id="education">
        <form onSubmit={handleSubmit}>
            <p>
            <label htmlFor="school-name">
                <span>School</span>
            </label>
            <input type="text" id="school-name" name="schoolName" value={school}
              onChange={(e)=> setSchool(e.target.value)}
            ></input>
            </p>
            <p>
            <label htmlFor="field-of-study">
                <span>Field of study</span>
            </label>
            <input type="text" id="field-of-study" name="fieldOfStudy" value ={fieldOfStudy}
                onChange={(e)=> setFieldOfStudy(e.target.value)}
            ></input>
            </p>
            <p>
            <label htmlFor="date-of-study">
                <span>Date finished</span>
            </label>
            <input type="date" id="date-of-study" name="dateOfStudy" value={date}
                onChange={(e)=> setDate(e.target.value)}
            ></input>
            </p>
            <button type="submit">Submit</button>
        </form>
        </div>
    )} else return (
        <div id="education">
        <form>
            <p>
                {school}
            </p>
            <p>
                {fieldOfStudy}
            </p>
            <p>
                {date}
            </p>
            <button type="button" onClick={handleEdit}>Edit</button>
        </form>
        </div>
    );
}

export default EducationSection;
