import React, { useState } from "react";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
// import { BiSolidDownArrow } from "react-icons/bi";

const MoreStats = ({ roles, skills, language }) => {
  const [role, setRole] = useState("hide");
  const [skill, setSkill] = useState("hide");
  const [languag, setLanguag] = useState("hide");

  function switchRoles() {
    if (role === "hide") {
      setRole("show");
    }
    if (role === "show") {
      setRole("hide");
    }
  }
  function switchSkills() {
    if (skill === "hide") {
      setSkill("show");
    }
    if (skill === "show") {
      setSkill("hide");
    }
  }
  function switchLanguages() {
    if (languag === "hide") {
      setLanguag("show");
    }
    if (languag === "show") {
      setLanguag("hide");
    }
  }

  let newRoles = new String(roles).split("\r\n");
  let newSkills = new String(skills).split("\r\n");
  let newLanguages = new String(language).split("\r\n");
  return (
    <>
      <div className="info-main-div">
        <div className="info-div">
          <div className="drop-margin ">
            <button className="drop-btn dark" onClick={switchRoles}>
              Роли в кино{" "}
              {role === "hide" ? (
                <VscTriangleDown className="arrow" />
              ) : (
                <VscTriangleUp className="arrow" />
              )}
            </button>
            <div className={` drop-contet ${role}`}>
              {newRoles.map((r, index) => {
                return (
                  <div className={`drop-contet drop-role ${role} `} key={index}>
                    {r}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="drop-margin">
            <button className="drop-btn dark" onClick={switchSkills}>
              Умения и навыки{" "}
              {skill === "hide" ? (
                <VscTriangleDown className="arrow" />
              ) : (
                <VscTriangleUp className="arrow" />
              )}
            </button>
            <div className={`drop-contet drop-skills ${skill}`}>
              {newSkills.map((s, index) => {
                return (
                  <div className={`drop-contet ${skill} `} key={index}>
                    {s}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="drop-margin drop-end">
            <button className="drop-btn  dark" onClick={switchLanguages}>
              Знание языков{" "}
              {languag === "hide" ? (
                <VscTriangleDown className="arrow" />
              ) : (
                <VscTriangleUp className="arrow" />
              )}
            </button>
            <div className={`drop-contet drop-language ${languag}`}>
              {newLanguages.map((l, index) => {
                return (
                  <div className={`drop-contet ${languag}`} key={index}>
                    {l}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreStats;
