import React from 'react';

export default function About() {
  return (
    <div className="mainBody">
      <h1>My Work</h1>
      <div className="logoHolder">
        <div className="logo pic1">
          <a href="https://github.com/jamespclark95/note-taking-app" className="title">Note Taker</a>
        </div>
        <div className="logo pic2">
        <a href="https://github.com/jamespclark95/Javascript-Quiz" className="title">JS Quiz</a>
        </div>
        <div className="logo pic3">
        <a href="https://github.com/jamespclark95/jpc-portfolio" className="title">Other Portfolio</a>
        </div>
        <div className="logo pic4">
        <a href="https://unh-bootcamp-projects.github.io/project-1-group-e/" className="title">GamePulse</a>
        </div>
        <div className="logo pic5">
        <a href="https://github.com/abalcs/Masker-Aid" className="title">MaskerAid</a>
        </div>
        <div className="logo pic6">
        <a href="https://github.com/jamespclark95/workout-tracker" className="title">Workout Tracker</a>
        </div>
      </div>
    </div>
  );
}
