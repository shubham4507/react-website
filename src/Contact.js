import React, { useState } from 'react';

const Contact = () => {

  const [data, setData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    text: ""   
  })

  const inputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name] : value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My number is ${data.mobile} and email is ${data.email}`)
  };

  return(
    <>
      <div className="my-5">
        <h1 className="text-center">Contact</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name" 
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Mobile No.</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  name="mobile"
                  value={data.mobile}
                  onChange={inputEvent}
                  placeholder="Mobile number" 
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com" 
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea 
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  name="text"
                  value={data.text}
                  onChange={inputEvent}
                >    
                </textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>   
  );
};

export default Contact;