const AddVideogame = () => {
  return (
    <div className="reserve-main-container">
      <div className="container">
        <div className="login-form">
          <h3 className="subtitle text-center">ADD A VIDEOGAME</h3>
          <hr className="green-line" />
          <p>Add a videogame available for rent</p>
          <div className="login-inputs">
            <input type="text" className="input" placeholder="Name"/>
            <input type="text" className="input" placeholder="Image url"/>
            <input type="text" className="input" placeholder="Description"/>
            <input type="text" className="input" placeholder="Price per day"/>
            
          </div>
            <button
              className="login-submit-button"
            >
              Save
            </button>
        </div>
      </div>
    </div>
  )
};

export default AddVideogame;
