// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// export function SimpleSlider(imgs) {
//   // const [modalActive, setModalActive] = useState(true);
//   const settings = {
//     dots: true,
//     fade: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Slider {...settings}>
//       {imgs.map((i) => {
//         return (
//           <img
//             // onClick={() => setModalActive(true)}
//             key={i.id}
//             className="more-img"
//             src={i.images}
//             alt="img error"
//           />
//         );
//       })}
//     </Slider>
//   );
// }

// img.map((i) => {
//   return (
//     <img
//       onClick={() => setModalActive(true)}
//       key={i.id}
//       className="more-img"
//       src={i.images}
//       alt="img error"
//     />
//   );
// });

import React from "react";
import Slider from "react-slick";

export function Fade(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {props.map((i) => {
          return (
            <img
              // onClick={() => setModalActive(true)}
              key={i.id}
              className="more-img"
              src={i.images}
              alt="img error"
            />
          );
        })}
      </Slider>
    </div>
  );
}
