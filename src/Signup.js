// import "./signup.css"
export const Signup=()=>{
    return(
        <div className="user-login-container">
            <div className="signup-card">
                <p className="signup-title">Signup</p>
                <form  className="form">
                    <label htmlFor="name">Name:-</label>
                    <br/>
                    <input id="name" type="text" placeholder="Enter Your Name"/>
                    <br/>
                    <label htmlFor="email">Email:-</label>
                    <br/>
                    <input id="email" type="email" placeholder="Enter Your Email"/>
                    <br/>
                    <label htmlFor="mobile">Mobile No:-</label>
                    <br/>
                    <input id="mobile" type="number" placeholder="Enter Your Mobile No."/>
                    <br/>
                    <label htmlFor="password">Password:-</label>
                    <br/>
                    <input id="password" type="text" placeholder="Enter Your Password"/>
                    <br/>
                    <label htmlFor="confirm-password">Confirm Password:-</label>
                    <br/>
                    <input id="confirm-password" type="text" placeholder="Enter Your Confirm Password"/>
                    <br/>
                    <br/>
                    <button >Signup</button>
                </form>
                <div className="form-bottom signup-button">
                    <span>Already have an account?</span> &nbsp;&nbsp;
                    <a id="a" href="#">login</a>
                </div>
            </div>
        </div>
    )
}