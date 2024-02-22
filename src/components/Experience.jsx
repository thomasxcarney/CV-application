function ExperienceSection() {
    return (
        <div id='experience'>
            <form>
                <p>
                    <label for='company-name'>
                        <span>Company name</span>
                    </label>
                    <input type='text' id='company-name'></input>
                </p>
                <p>
                    <label for="position">
                        <span>Position held</span>
                    </label>
                    <input type="text" id="position"></input>
                </p>
                <p>
                    <label for="responsibilities">
                        <span>Responsibilities</span>
                    </label>
                    <input type='text' id='responsibilities'></input>
                </p>
                <p>
                    <label for="start-date">
                        <span>Start date</span>
                    </label>
                    <input type='date' id='start-date'></input>
                </p>
                <button type='submit'>Submit</button>
                <button type='button'>Edit</button>
            </form>
        </div>
    )
}

export default ExperienceSection