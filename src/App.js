import React from "react";

class App extends React.Component {
  state = {
    fullName: "Bouhlel Rochdi",
    bio: "Blablabla",
    imgSrc: "./img.jpg",
    profession: "web Developer",
    show: true,
    buttonState:false
  };
  handleName = (e) => {
    e.preventDefault();
    alert("Full Name: " + this.state.fullName + " bio: " + this.state.bio + " Job: " + this.state.profession);
  };
  handleButton=()=>{
this.setState({buttonState: !this.state.buttonState})
console.log(this.state.buttonState)
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleName}>
          Click and look at console
        </button>
        <button onClick={this.handleButton}>
          click me
        </button>
        {this.state.buttonState ? (<h1></h1>) : (
          <div>
           <h3>Full Name: {this.state.fullName} </h3> 
            <h3>bio: {this.state.bio}</h3> 
             <h3>Job:  {this.state.profession}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;
