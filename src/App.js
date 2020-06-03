import React, {Component} from "react";
import ContactCard from "./ContactCard";
import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <ContactCard 
          name="John"
          mobile="2129999999" 
          work="7185555555" 
          email="John@hello.com"/>

        <ContactCard 
          name="Jill" 
          mobile="8171234567" 
          work="8008881234" 
          email="Jill@hello.com"/>  

      </>
    )
  }
}

export default App;
