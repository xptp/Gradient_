import React from "react";
import { Link } from "react-router-dom";
import "../style/actorBox.scss";

const ActorBox = ({ obj }) => {
  function checkActor(o) {
    if (o.male === "M") {
      return "Актёр";
    } else {
      return "Актриса";
    }
  }
  return (
    <Link to={`/actor/${obj.url}`}>
      <div
        style={{
          backgroundImage: `url(${String(obj.main_image)})`,
        }}
        className="box-photo"
      >
        <>
          <h2 className="name-box">
            {obj.name} {obj.last_name}
          </h2>
          <h2 className="name-box name-age">
            {checkActor(obj)} {obj.age} {obj.agetype}
          </h2>
        </>
      </div>
    </Link>
  );
};

export default ActorBox;
