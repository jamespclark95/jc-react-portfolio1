import React from 'react';

export default function Blog() {
  return (
    <div className="mainBody">
      <h1>Contact Me</h1>
      <form className="contactForm">
        <input className="inputLabel" type="text" placeholder="Name"></input>
        <input className="inputLabel"  type="email" placeholder="Email"></input>
        <input className="inputLabel" type="text" placeholder="Message"></input>
        <button><a href="mailto: jamespclark95@gmail.com"></a>Submit</button>
      </form>
    </div>
  );
}
