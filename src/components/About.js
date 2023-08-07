import React from "react";
import Links from "./Links";

function About(props) {
  function biography() {
  
    if (!props.bio) {
      return null;
    } else {
      return <p>{props.bio}</p>;
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {biography()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* pass the necessary props to the Links component */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;




