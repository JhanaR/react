function EventHandling() {
  const buttonClick = () => {
    console.log("Button Clicked");
  };
  const handleChange = () => {
    console.log("Button Handle");
  }; 
  const buttonOver = () => {
    console.log("Button Move Over");
  };    
  
  return (
    <>
  <button onClick={buttonClick}>Button Text</button>
  <button onChange={handleChange}>Button Submit</button>
  <button onMouseOver={buttonOver}>Button Mouse Over</button>
  </>
  )
}

export default EventHandling