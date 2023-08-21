import React, { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = { name, email };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        console.log("API call successful!");
        alert("API call successful!");
      } else {
        console.error("API call failed.");
        alert("API call failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <span className="col-3"></span>
        <div className="col-6">
          <div className="text-center">
            <form onSubmit={handleSubmit} className="form-control">
              <h1>
                <u>User Form</u>
              </h1>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="form-control"
                placeholder="Enter Name"
              />
              <br />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="form-control"
                placeholder="Enter Email"
              />
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
