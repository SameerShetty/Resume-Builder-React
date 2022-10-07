import React, { useState, useRef } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { useReactToPrint } from "react-to-print";
import "../index.css";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [isexp, setexp] = useState("");
  const [isach, setach] = useState("");
  const [isp, setp] = useState("");
  const [isskil, setskil] = useState("");
  const [ish, seth] = useState("");
  const [user, setuser] = useState({
    name: "",
    jobtitle: "",
    ph: "",
    mail: "",
    gps: "",
    git: "",
    lnkd: "",
    sslc: "",
    puc: "",
    grad: "",
    exp: [],
    achiev: [],
    proj: [],
    skill: [],
    hobby: [],
  });
  function handleadd(e) {
    const { name, value } = e.target;
    setuser((prev) => {
      return {
        [name]: [...prev, value],
      };
    });
  }
  function handlechangeexp(e) {
    const value = e.target.value;
    setexp((prev) => {
      return [...prev, value];
    });
  }
  function handlechangeach(e) {
    const value = e.target.value;
    setach((prev) => {
      return [...prev, value];
    });
  }
  function handlechangep(e) {
    const value = e.target.value;
    setp((prev) => {
      return [...prev, value];
    });
  }
  function handlechangesk(e) {
    const value = e.target.value;
    setskil((prev) => {
      return [...prev, value];
    });
  }
  function handlechangehob(e) {
    const value = e.target.value;
    seth((prev) => {
      return [...prev, value];
    });
  }
  function handlechange(e) {
    const { name, value } = e.target;

    setuser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <div className="hero-container">
      <div className="preview-wrapper">
        <div className="resume" ref={componentRef}>
          <div className="header">
            <div className="title">
              <h1>{user.name}</h1>
              <p>{user.jobtitle}</p>
            </div>

            <div className="info">
              <div className="box">
                <div>
                  {" "}
                  <FiPhoneCall
                    style={{ display: user.ph ? "block" : "none" }}
                    className="icon"
                  />
                </div>
                <div>
                  <h3>{user.ph}</h3>
                </div>
              </div>
              <div className="box">
                <div>
                  <HiOutlineMail
                    style={{ display: user.mail ? "block" : "none" }}
                    className="icon"
                  />
                </div>
                <div>
                  <h3>
                    {" "}
                    <a href={user.mail}>{user.mail}</a>
                  </h3>
                </div>
              </div>
              <div className="box">
                <div>
                  {" "}
                  <GrLocation
                    style={{ display: user.gps ? "block" : "none" }}
                    className="icon"
                  />
                </div>
                <div>
                  <h3>{user.gps}</h3>
                </div>
              </div>
            </div>
          </div>
          <hr
            style={{ display: user.name ? "block" : "none", margin: "0 auto " }}
          />
          <div className="container">
            <div className="left-col">
              <div className="ref-links">
                <h3
                  style={{ display: user.git || user.lnkd ? "block" : "none" }}
                >
                  REFERENCES
                  <hr />
                </h3>
                <ul>
                  <li>
                    {" "}
                    <a
                      style={{ display: user.git ? "block" : "none" }}
                      href={user.git}
                      className="link"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ display: user.lnkd ? "block" : "none" }}
                      href={user.lnkd}
                      className="link"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div class="expertise">
                <h3 style={{ display: user.exp.length > 0 ? "block" : "none" }}>
                  MY EXPERTISE <hr />
                </h3>

                <ul>
                  {user.exp.map((experts) => {
                    return <li>{experts}</li>;
                  })}
                </ul>
              </div>
              <div className="achieve">
                <h3
                  style={{
                    display: user.achiev.length > 0 ? "block" : "none",
                  }}
                >
                  ACHIEVEMENTS
                  <hr />
                </h3>

                <ul>
                  {user.achiev.map((ament) => {
                    return <li>{ament}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div
              className="right-col"
              style={{
                borderLeft:
                  user.grad || user.puc || user.sslc
                    ? "2px solid #52616b"
                    : "none",
              }}
            >
              <div>
                <div className="edu">
                  <h3
                    style={{
                      display:
                        user.grad || user.puc || user.sslc ? "block" : "none",
                    }}
                  >
                    EDUCATION HISTORY
                    <hr />
                  </h3>

                  <div className="edu-wrapper">
                    <div>
                      <h2 style={{ display: user.grad ? "block" : "none" }}>
                        GRAD
                      </h2>

                      <p>{user.grad} </p>
                    </div>
                    <div>
                      {" "}
                      <h2 style={{ display: user.puc ? "block" : "none" }}>
                        PUC/DIP
                      </h2>
                      <p>{user.puc}</p>
                    </div>
                    <div>
                      {" "}
                      <h2 style={{ display: user.sslc ? "block" : "none" }}>
                        SSLC
                      </h2>
                      <p>{user.puc}</p>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="project">
                <h3
                  style={{
                    display: user.proj.length > 0 ? "block" : "none",
                  }}
                >
                  PROJECTS
                  <hr />
                </h3>

                <ul>
                  {user.proj.map((pts) => {
                    return <li>{pts}</li>;
                  })}
                </ul>
              </div>
              <div className="skill">
                <h3
                  style={{
                    display: user.skill.length > 0 ? "block" : "none",
                  }}
                >
                  SKILLS
                  <hr />
                </h3>

                <ul>
                  {user.skill.map((skl) => {
                    return <li>{skl}</li>;
                  })}
                </ul>
              </div>
              <div className="hobby">
                <h3
                  style={{
                    display: user.hobby.length > 0 ? "block" : "none",
                  }}
                >
                  HOBBY & INTERESTS <hr />
                </h3>

                <ul>
                  {user.hobby.map((hbo) => {
                    return <li>{hbo}</li>;
                  })}
                </ul>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="form-wrapper">
        <form>
          <label for="name">
            Name :
            <input
              onChange={handlechange}
              type="text"
              placeholder="Your name"
              required
              value={user.name}
              name="name"
              id="name"
            />
          </label>
          <label for="jobtitle">
            Job-Title :
            <input
              onChange={handlechange}
              type="text"
              placeholder="Your job title"
              value={user.jobtitle}
              name="jobtitle"
              id="jobtitle"
            />
          </label>
          <label for="phone">
            Contact :
            <input
              onChange={handlechange}
              type="tel"
              placeholder="Your contact no."
              name="ph"
              required
              value={user.ph}
              id="phone"
            />
          </label>
          <label for="mail">
            Email :
            <input
              onChange={handlechange}
              type="email"
              value={user.mail}
              placeholder="Your email address"
              required
              name="mail"
              id="mail"
            />
          </label>
          <label for="address">
            Address :
            <textarea
              type="text"
              onChange={handlechange}
              placeholder="Your address"
              required
              value={user.gps}
              name="gps"
              id="address"
            />
          </label>
          <label for="ref">
            GitHub link :
            <input
              onChange={handlechange}
              type="text"
              value={user.git}
              placeholder="Your GitHub link"
              name="git"
              id="ref"
            />
          </label>
          <label for="ref">
            LinkedIn link :
            <input
              onChange={handlechange}
              type="text"
              value={user.lnkd}
              placeholder="Your LinkedIn link"
              name="lnkd"
              id="ref"
            />
          </label>
          <label for="grad">
            Degree :
            <textarea
              type="text"
              onChange={handlechange}
              placeholder="Your Graduation details"
              required
              value={user.grad}
              name="grad"
              id="grad"
            />
          </label>
          <label for="puc">
            PUC/Diploma :
            <textarea
              type="text"
              onChange={handlechange}
              placeholder="Your UG details"
              required
              value={user.puc}
              name="puc"
              id="puc"
            />
          </label>
          <label for="sslc">
            SSLC :
            <textarea
              type="text"
              onChange={handlechange}
              placeholder="Your SSLC details"
              required
              value={user.sslc}
              name="sslc"
              id="sslc"
            />
          </label>
          <label for="exp">
            Expertise :
            <input
              type="text"
              onChange={handlechangeexp}
              value={isexp}
              placeholder="Your expertise"
              name="exp"
              id="exp"
            />
            <button
              className="btn"
              onClick={handleadd}
              name="exp"
              value={isexp}
            >
              +
            </button>
          </label>
          <label for="ach">
            Achievements :
            <input
              type="text"
              onChange={handlechangeach}
              value={isach}
              placeholder="Your achievements"
              name="achiev"
              id="ach"
            />
            <button
              className="btn"
              value={isach}
              name="achiev"
              onClick={handleadd}
            >
              +
            </button>
          </label>
          <label for="pro">
            Project-Title :
            <input
              onChange={handlechangep}
              type="text"
              value={isp}
              placeholder="Your Project title"
              name="proj"
              id="pro"
            />
            <button className="btn" value={isp} onClick={handleadd} name="proj">
              +
            </button>
          </label>
          <label for="ski">
            Skills :
            <input
              type="text"
              onChange={handlechangesk}
              value={isskil}
              placeholder="Your skills"
              name="skill"
              id="ski"
            />
            <button
              className="btn"
              name="skill"
              value={isskil}
              onClick={handleadd}
            >
              +
            </button>
          </label>
          <label for="hob">
            HObby & Interests :
            <input
              type="text"
              onChange={handlechangehob}
              value={ish}
              placeholder="Your hobbies"
              name="hobby"
              id="hob"
            />
            <button
              className="btn"
              name="hobby"
              value={ish}
              onClick={handleadd}
            >
              +
            </button>
          </label>
          <button className="btn" onClick={handlePrint}>
            Print this out!
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
