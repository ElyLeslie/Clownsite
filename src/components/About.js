import React from 'react';
import "../styles/Section.css"

export default function About() {
  return (
    <div style={{maxWidth: "100%"}}>
      <h1>About Ely</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
      <p className='projectCard d-flex m-3 p-2' style={{background: "rgba(238,174,202, 0.75)", background: "radial-gradient(circle, rgba(238,174,202,0.75) 0%, rgba(148,187,233,0.75) 100%)", fontSize: "20px", lineHeight: "4rem", maxWidth: "45%", justifyContent: "center"}}>
      Ely is a strong communicator and an achiever. They graduated from St. Cloud State University with a Bachelor’s degree and are well on their way to graduating from the FullStack Web Development Coding Bootcamp through the University of Minnesota. They have two degrees between an Associate’s degree and a Bachelor’s degree. A good learner, Ely is versatile and always able to give you the results that you’re looking for in your workplace.
      </p>
      </div>
     
    </div>
  );
}