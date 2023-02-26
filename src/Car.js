import React from "react";

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Person :{fullName:"Asma", Bio:"societé",imgSrc:"https://previews.123rf.com/images/lumut/lumut1612/lumut161202301/71464094-smile-logo-dentaire-mod%C3%A8le-illustration-vectorielle-ic%C3%B4ne-design.jpg", profession:"leoni"},
       shows:true
      };
    } 
   
         

    change=()=>{
 this.setState({shows:!this.state.shows})


    }
    render() {  
      return (
        <div>
            {this.state.shows?<><h1>Hello, I'm {this.state.Person.fullName}</h1>
          <h1>Hello, I'm {this.state.Person.Bio}</h1>
          <h1>Hello, I'm {this.state.Person.profession}</h1>
          <img src={this.state.Person.imgSrc}></img></>: null 
    }
    <button onClick={this.change}>show</button>
        </div>
      );
} 
  }
  export default Car