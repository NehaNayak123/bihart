import { useState } from "react"
// import "./Contact.css";

export const Contact=()=>{
    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    const [email, setEmail]=useState("")
    const [mobile, setMobile]=useState("")
    const [message, setMessage]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!firstName || !lastName  || !email  || !mobile || !message){
            alert("fill all fields")
        }
        console.log(firstName, lastName, email, mobile, message);
        setFirstName("")
        setLastName("")
        setEmail("")
        setMobile("")
        setMessage("")
    }
    return(
        <div className="contact-us-main">
            <h3 className="contact-page-title">Contact</h3>
            <div className="contact-us-upper-img">
                <div className="text-center">
                    <h1><b>Contact-us</b></h1>
                </div>
            </div>
            <div className="contact-us-card">
                <div className="contact-us-img">
                    {/* image of contact Us */}
                    {/* <img className="contact-us-img" src={require('../ContactUs/contactUsImg.jpg')}/> */}
                    <div className="row">
                        <div>📞</div>
                        <div >
                            <p>Package Enquiry 24*7 call</p>
                            <p>+91 1234567890 , +91 1234567890</p>
                        </div>
                    </div>
                    <div className="row">
                        <div>📦</div>
                        <div >
                            <p>Package services : </p>
                            <p>+91 1234567890 , +91 1234567890</p>
                        </div>
                    </div>
                    <div className="row">
                        <div>🏨</div>
                        <div >
                            <p>Hotel Contact : </p>
                            <p>+91 1234567890 , +91 1234567890</p>
                        </div>
                    </div>
                    <div className="row">
                        <div>🚗</div>
                        <div >
                            <p>Cab services : </p>
                            <p>+91 1234567890 , +91 1234567890</p>
                        </div>
                    </div>
                    <div className="row">
                        <div>📧</div>
                        <div >
                            <p>Complaints & Suggestion :  </p>
                            <p>test@mail.com , test@mail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-us-form">
                    <form>
                        <label className="form-label" htmlFor="firstName">First Name : </label>
                        <br/>
                        <input value={firstName} className="form-input" onChange={(e)=>setFirstName(e.target.value)} id="firstName" placeholder="Enter Your First Name"/>
                        <br/>
                        <label className="form-label" htmlFor="lastName">Last Name : </label>
                        <br/>
                        <input value={lastName} className="form-input" onChange={(e)=>setLastName(e.target.value)} id="lastName" placeholder="Enter Your Last Name"/>
                        <br/>
                        <label className="form-label" htmlFor="email">Email : </label>
                        <br/>
                        <input value={email} className="form-input" onChange={(e)=>setEmail(e.target.value)} id="email" placeholder="Enter Your Email"/>
                        <br/>
                        <label className="form-label" htmlFor="mobile">Mobile : </label>
                        <br/>
                        <input value={mobile} className="form-input" onChange={(e)=>setMobile(e.target.value)} id="mobile" placeholder="Enter Your Mobile No."/>
                        <br/>
                        <label className="form-label" htmlFor="msg">Message : </label>
                        <br/>
                        <textarea value={message} className="form-input" onChange={(e)=>setMessage(e.target.value)} id="msg" placeholder="Wtite Your Message..."/>
                        <br/>
                        <button className="submitHandler" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}