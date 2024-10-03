import React, { useState } from "react";
import "../style/Signup.scss";
import imgg from "../assets/imgg.png";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth, storage,db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    mob: "",
    email: "",
    password: "",
    img: "",
  });

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    //or
    const { name, value } = e.target;

    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    try {
      const userinfo = createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log(userinfo);

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      uploadTask.on(
        (error) => {
          setErr(true);
        },
        // () => {
        //   getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        //   await  updateProfile(res.user,{
        //       displayName,
        //       photoURL:downloadURL
        //     });
        //     // console.log("File available at", downloadURL);
        //   });
        //   await setDoc(doc(db,"users", res.user.uid), {
        //     uid:res.user.uid,
        //     displayName,
        //     email,
        //     photoURL : downloadURL
    
        //   })
        //   {}
        // }

      );


    } catch (err) {
      setErr(true);
    }

    setUser({
      fname: "",
      lname: "",
      mob: "",
      email: "",
      password: "",
      img: "",
    });
  };

  return (
    <div className="affi-signUpBg">
      <div className="affi-frame">
        <div className="affi-part2">
          <h5 className="affi-h5">signUp</h5>
          <form className="affi-form" action="" onSubmit={handleSubmit}>
            <div className="fnamelname">
              <div className="firstName">
                <label className="affi-label1" htmlFor="fname">
                  First Name
                </label>
                <input
                  className="inputFirst"
                  type="text"
                  id="fname"
                  name="fname"
                  value={user.fname}
                  placeholder="enter first name"
                  onChange={handleChange}
                />
              </div>
              <div className="lastName">
                <label className="affi-label2" htmlFor="totalNumber">
                  Last name
                </label>
                <input
                  className="inputSecond"
                  type="text"
                  id="totalNumber"
                  name="lname"
                  value={user.lname}
                  placeholder="enter last name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <label className="affi-label3" htmlFor="moNumber">
              Contact Number
            </label>

            <div className="affi-moNumber">
              <input
                className="affi-countryCode"
                type="number"
                placeholder="+91"
              />
              <input
                className="affi-mobileNumber"
                type="number"
                id="moNumber"
                name="mob"
                value={user.mob}
                placeholder="enter 10-digits mobile number"
                onChange={handleChange}
              />
            </div>

            <label className="affi-label4" htmlFor="emailAdd">
              Email Address
            </label>
            <input
              type="email"
              id="emailAdd"
              name="email"
              value={user.email}
              placeholder="enter email address"
              onChange={handleChange}
            />
            <label className="affi-label5" htmlFor="state">
              Password
            </label>
            <input
              type="Password"
              id="state"
              name="password"
              value={user.password}
              placeholder="enter Password "
              onChange={handleChange}
            />

            <label className="affi-label6" htmlFor="FPO-ID">
              <img src={imgg} alt="" />
              <span>select photo</span>
            </label>
            <input
              style={{ display: "none" }}
              type="file"
              id="FPO-ID"
              name="img"
              onChange={handleChange}
              value={user.img}
            />
            {err && <span className="error">something went wrong</span>}
            <button className="affi-btn1">SignUp</button>
          </form>
          <p className="affi-para">
            Already have an account?
            <a className="affi-link" href="/Login">
              Login!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
