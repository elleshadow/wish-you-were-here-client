import React from "react"
import '../styles/Participant.css'


const Participant = () => {
  return (
    <div className="participant">
      <div> Name</div>
      <div className="left-side blue section" contenteditable>Left Sidebar</div>
      <div className="stage" contenteditable> Main Content</div>
      <div className="right-side yellow section" contenteditable>Right Sidebar</div>
      <footer className="green section">Footer</footer>
    </div>
  )
}

export default Participant;