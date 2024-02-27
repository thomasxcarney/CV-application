function GeneralInfoSection() {
  return (
    <div id="general-info">
      <form>
        <p>
          <label htmlFor="name">
            <span>Name</span>
          </label>
          <input type="text" id="name"></input>
        </p>
        <p>
          <label htmlFor="email">
            <span>Email</span>
          </label>
          <input type="email" id="email"></input>
        </p>
        <p>
          <label htmlFor="phone-number">
            <span>Phone Number</span>
          </label>
          <input type="tel" id="phone-number"></input>
        </p>
        <button type="submit">Submit</button>
        <button type="button">Edit</button>
      </form>
    </div>
  );
}

export default GeneralInfoSection;
