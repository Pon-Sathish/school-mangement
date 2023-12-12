import { useNavigate } from "react-router-dom";
import "./adminpage.css";
import React, { useState, } from 'react';
import TemplateDemo from "../AddTeacher/teachertable";
import PaginatorBasicDemo from "../AddTeacher/teachertable";



function Adminpage() {
    let [btn, setBtn] = useState('Check In')
    let navigate = useNavigate()
    function selva() {
        if (btn === 'Check In') {
            setBtn('CheckOut')
        }
        else { }
        if (btn === 'CheckOut') {
            setBtn('Check In')
        }
        else { }
    }
    function Addteacher() {
        navigate('/addteacher')
    }
    function Addstudent() {
        navigate('/addstudent')
    }
    return <>
        <div className="admin-css">
            <div id="hi">
                <label>HI'Admin</label>
                <div className="img">
                <img id="adminimg" src={require("../images/testimonials-5.jpg")}></img>
                </div>
                <div className="admin-buttons">
                    <div><button value={btn} onClick={selva} id=
                        {btn === 'Check In' ? 'checkin' : 'checkout'}
                    >{btn}</button></div>
                   <div> <button id="teacher" onClick={Addteacher}>Add Teacher</button></div>
                    <div><button id="student" onClick={Addstudent}>Add Student</button></div>
                </div>

            </div>

            <div id="basicdemo">
                <PaginatorBasicDemo />
            </div>
        </div>

    </>
}
export default Adminpage