import React from 'react';
import './index.css';
const Contact = () => {
    return (
        <div>
            <section className='contact' id='contact'> 
                    <h1>contact <span> us </span></h1>
                    <form>
                      <div className="h">
                        <h1>
                        We're <span> always  </span> here to help you
                        </h1>
                          <form method="post">
                          	<input type="text" name="name" placeholder="name" required="required" />
                            <input type="email" name="email" placeholder="email" required="required" />
                            <input type="number" name="phone-number" placeholder="phone" required="required"/>
                            <button type="submit" class="btn btn-primary btn-block btn-large">Submit</button>
                          </form>
                      </div>
                    </form>

                <div className="linkdin">
                <i className="fa-brands fa-linkedin" />
                </div>
                <div className="insta">
                <i className="fa-brands fa-instagram" />
                </div>
                <div className="x">
                <i className="fa-brands fa-x-twitter" />
                </div>
            </section>
        </div>
    );
};

export default Contact;