import React from "react";

export default function Display(props)
{
return(
    <div className="displayelement">
    <h3 className="at1">CONTACT INFORMATION</h3>
    <div className="name">Name - <b>{props.putname}</b></div>
    <div className="email">Email - <b>{props.putemail}</b></div>
    <div className="phone">Phone - <b>{props.putphone}</b></div>
    <hr></hr>
    <h3 className="at2">EDUCATION INFORMATION</h3>
    <div className="school">School - <b>{props.putschool}</b></div>
    <div className="study">Study Degree - <b>{props.putstudy}</b></div>
    <div className="studystart">Start Date - <b>{props.putstudystart}</b></div>
    <div className="studyend">End Date - <b>{props.putstudyend}</b></div>
    <hr></hr>
    <h3 className="at3">EDUCATION INFORMATION</h3>
    <div className="company">Company - <b>{props.putcompany}</b></div>
    <div className="position">Position - <b>{props.putposition}</b></div>
    <div className="role">Roles and Resposibilities - <b>{props.putrole}</b></div>
    <div className="workstart">Start Date - <b>{props.putworkstart}</b></div>
    <div className="workend">End Date - <b>{props.putworkend}</b></div>
    </div>
)
}