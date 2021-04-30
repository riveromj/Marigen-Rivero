import React from 'react'

import '../src/css/contact.css';

export const Contact = () => {
    return (
        <div className="contacto">
            <a name="contact"></a>
            <h2 className="title">Contact</h2>
            <p className="text-work">Let's work together!!!</p>
                <form className="row g-3 needs-validation input-text" novalidate>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Name" required/>
                        <div className="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="validationCustom02" placeholder="Last Name" required/>
                        <div className="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="input-group has-validation">
                        <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="Email" required/>
                        <div className="invalid-feedback">
                            Please choose a Email.
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <textarea type="text" rows="5" cols="40" className="form-control msn" id="validationCustom03" placeholder="Message" required/>
                        <div className="invalid-feedback">
                        Please provide a valid message.
                        </div>
                    </div>
                   
                    
                   
                    <div className="col-12 send">
                        <button className="btn btn-send" type="submit">Send</button>
                    </div>
                </form>
        </div>
    )
}
