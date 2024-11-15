import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Issue:", issue);
    alert("Your issue has been submitted. Thank you!");
    setEmail("");
    setIssue("");
  };

  return (
    <div className="container my-4" >
      <h2 className="text-center mb-4">Contact Administrator</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="issue" className="form-label">
            Issue
          </label>
          <textarea
            id="issue"
            className="form-control"
            rows="4"
            placeholder="Describe your issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
    // <div >
    //     <div class="mb-3" >
    //     <label for="exampleFormControlInput1" class="form-label">Email address</label>
    //     <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    //     </div>
    //     <div class="mb-3">
    //      <label for="exampleFormControlTextarea1" class="form-label">Issue</label>
    //      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    //     </div>
    //     <div className="col-12">
    //       <button type="submit" className="btn btn-primary">
    //         Submit
    //       </button>
    //     </div>


    // </div>

  );
};

export default Contact;
