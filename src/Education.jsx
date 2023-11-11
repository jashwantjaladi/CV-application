import React from "react";
import { useState } from "react";

export default function Education(props)
{
 
    return(
        <>
        <h3>EDUCATION BACKGROUND</h3>
        <form className="educationform">
        <label htmlFor="contactschool">School:</label>
        <input type="text" onChange={props.handleClick} name="contactschool"/>

        <label htmlFor="contactstudy">Title Of Study:</label>
        <input type="text"  onChange={props.handleClick} name="contactstudy"/> 

        <label htmlFor="studystart">Start Date:</label>
        <input type="date"  onChange={props.handleClick} name="studystart"/>

        <label htmlFor="studyend">End Date:</label>
        <input type="date" onChange={props.handleClick} name="studyend"/> 
        </form>
        
        </>
    )
}