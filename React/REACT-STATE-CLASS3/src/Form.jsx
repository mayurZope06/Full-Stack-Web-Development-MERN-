import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  //   let handleNameChange = (event) => {
  //     setFullName(event.target.value);
  //   };

  //   let handleUserName = (event) => {
  //     setUserName(event.target.value);
  //   };

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ fullName: "", userName: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="enter full name: "
        type="text"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="username">User Name</label>
      <input
        placeholder="enter username: "
        type="text"
        value={formData.userName}
        id="username"
        name="userName"
        onChange={handleInputChange}
      />

      <label htmlFor="password">Password</label>
      <input
        placeholder="enter Password: "
        type="password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
      />

      <button>Submit</button>
    </form>
  );
}
