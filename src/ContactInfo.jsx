import React from "react";




export default function ContactInfo(props)
{

    return (
    <div>
    <h3 className="contactitle">CONTACT INFORMATION</h3>
    <form className="contactinfoform" >
    <label htmlFor="contactname">Name:</label>
    <input type="text" onChange={props.handleClick} name="contactname" required />


    <label htmlFor="contactemail">Email:</label>
    <input type="email"  onChange={props.handleClick} name="contactemail" required/>

    <label htmlFor="contactphone">Phone Number:</label>
    <input type="text" onChange={props.handleClick} name="contactphone" required/>
 
    </form>
    
    </div>
    )
}