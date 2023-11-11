import React from "react";


export default function Experience(props)
{

    return(
        <>
        <h3>WORK EXPERIENCE</h3>
        <form className="experienceform">
        <label htmlFor="contactcompany">Company Name:</label>
        <input type="text"  onChange={props.handleClick} name="contactcompany"/>

        <label htmlFor="contactposition">Position Title:</label>
        <input type="text"  onChange={props.handleClick} name="contactposition"/> 

        <label htmlFor="contactroles">Roles and Responsibilities:</label>
        <input type="text" onChange={props.handleClick} name="contactroles"/> 

        <label htmlFor="workstart">Start Date:</label>
        <input type="date"  onChange={props.handleClick} name="workstart"/>

        <label htmlFor="workend">End Date:</label>
        <input type="date" onChange={props.handleClick} name="workend"/> 
        </form>
        </>
    )
}