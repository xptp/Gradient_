import React, { useEffect, useState } from "react";
import PostService from "../../../API/PostService";
import { Link, useParams } from "react-router-dom";
import "../../../style/oneActorPage.scss";
import ActorStats from "./actorStats";
import ReactPlayer from "react-player";
import MoreStats from "../../moreStats";
import { ThreeDots } from "react-loader-spinner";
// import ImagesSlider from "./ImagesSlider";
// import { Fade } from "../../animation/fadeSlider";
// import { Modal } from "../../animation/modal";

const OneActorPage = () => {
  const [actor, setActor] = useState();
  const [images, setImages] = useState(null);
  const [loader, setLoader] = useState(false);
  // const [modalActive, setModalActive] = useState(false);
  const { id } = useParams();

  async function fetchActor() {
    try {
      const a = await PostService.getById(id);
      setActor(a);

      setTimeout(() => {
        setLoader(true);
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  useEffect(() => {
    fetchActor();
  }, []);

  useEffect(() => {
    if (actor) {
      setImages(actor.images);
    }
  }, [actor]);
  // console.log(images);

  return (
    <>
      {actor ? (
        <>
          <div className="main-container">
            <div className="first-container ">
              <div>
                <img
                  className="main-photo"
                  src={actor.main_image}
                  alt="error img"
                />
                <div className="player">
                  <ReactPlayer
                    height={200}
                    width={360}
                    controls={true}
                    url={actor.video}
                  />
                </div>
              </div>

              <ActorStats actor={actor} />
            </div>

            <MoreStats
              roles={actor.roles}
              skills={actor.skills}
              language={actor.language}
            />
          </div>
          {images ? (
            <div className="main-img-container">
              {/* <Modal active={modalActive} setActive={setModalActive}> */}
              {/* {Fade(images)} */}
              {images.map((i) => {
                return (
                  <Link to={i.images} key={i.id}>
                    <img
                      // onClick={() => setModalActive(true)}
                      key={i.id}
                      className="more-img"
                      src={i.images}
                      alt="img error"
                    />
                  </Link>
                );
              })}
              {/* </Modal> */}
            </div>
          ) : null}
        </>
      ) : (
        <>
          {loader ? (
            <div className="puff-container">
              <ThreeDots
                height="100"
                width="100"
                radius={1}
                color="#7e7a79"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default OneActorPage;
