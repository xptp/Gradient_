import React, { useEffect, useState } from "react";
import ActorBox from "../../boxForList";
import PostService from "../../../API/PostService";
import { ThreeDots } from "react-loader-spinner";
import { motion } from "framer-motion";
import { listSort } from "../../utils/sort";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const HomePage = () => {
  const [actors, setActors] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchActors();
  }, []);

  async function fetchActors() {
    const a = await PostService.getAllActors();
    setActors(listSort(a));
    setTimeout(() => {
      setLoader(true);
    }, 1000);
  }

  return (
    <motion.div
      className="pages-box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {actors ? (
        <div className="foto-boxes">
          {actors.map((a, index) => {
            return (
              <div className="actor-kase" key={index}>
                {a.map((aa) => {
                  return <ActorBox obj={aa} key={aa.id} />;
                })}
              </div>
            );
          })}
        </div>
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
    </motion.div>
  );
};

export default HomePage;
