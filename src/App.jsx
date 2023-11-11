import React from "react";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Experience from "./Experience";
import Display from "./Display";
import {useState} from "react"

import "./styles.css"
export default function App(props)
{   
const [formdata,setFormdata]=useState({
    contactname:"",
    contactemail:"",
    contactphone:"",
    contactschool:"",
    contactstudy:"",
    studystart:"",
    studyend:"",
    contactcompany:"",
    contactposition:"",
    contactroles:"",
    workstart:"",
    workend:""

    })

function handleClick(event)
{
 const {name,value} =event.target
 setFormdata((prevformdata)=>{ return {
    ...prevformdata,
    [name]:value
 }}
)}
  return(
    <>
  <h1 className="title">CV APPLICATION GENERATOR</h1>
  <div className="CV">
  <div className="get">
  <ContactInfo handleClick={handleClick}/>
  <Education handleClick={handleClick}/>
  <Experience handleClick={handleClick}/>
  </div>
  <div className="put">
  <Display 
    putname={formdata.contactname}
    putemail={formdata.contactemail}
    putphone={formdata.contactphone}
    putschool={formdata.contactschool}
    putstudy={formdata.contactstudy}
    putstudystart={formdata.studystart}
    putstudyend={formdata.studyend}
    putcompany={formdata.contactcompany}
    putposition={formdata.contactposition}
    putrole={formdata.contactroles}
    putworkstart={formdata.workstart}
    putworkend={formdata.workend}
      />
   
  </div>
  </div>
  </>
  )
}