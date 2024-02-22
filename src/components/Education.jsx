function EducationSection() {
    return (
        <div>
            <form>
                <p>
                    <label for='school-name'>
                        <span>School</span>
                    </label>
                    <input type='text' id='school-name'></input>
                </p>
                <p>
                    <label for="field-of-study">
                        <span>Field of study</span>
                    </label>
                    <input type="text" id="field-of-study"></input>
                </p>
                <p>
                    <label for="date-of-study">
                        <span>Date finished</span>
                    </label>
                    <input type='date' id='date-of-study'></input>
                </p>
                <button type='submit'>Submit</button>
                <button type='button'>Edit</button>
            </form>
        </div>
    )
}

export default EducationSection