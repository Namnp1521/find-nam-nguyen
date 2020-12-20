import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import { FaExternalLinkSquareAlt, FaWindowClose } from "react-icons/fa";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./modal.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 2000,
  className: "slick-custom",
  lazyLoad: "progressive",
};

function Modal(props) {
  const { show, setShow, data } = props;

  const [imgLs, setImgLs] = useState([]);

  let slickRef = useRef(null);

  useEffect(() => {
    if (show) {
      slickRef.slickPlay();
      setImgLs(data.detail);
      // document.body.style.overflow = "hidden";
    } else {
      slickRef.slickPause();
      setImgLs([]);
      // document.body.style.overflow = "unset"
    }
  }, [show, data.detail]);

  const handleGoLink = () => {
    window.open(data.link, "_blank");
  };

  return (
    <div className={"modal-wrap flex-column" + (show ? " visible" : "")}>
      <div className="mask" onClick={() => setShow(false)}></div>
      <div className="modal flex-row">
        <FaWindowClose className="close" onClick={() => setShow(false)} />
        <div className="img-list">
          <Slider {...settings} autoplay={show} ref={(ref) => (slickRef = ref)}>
            {imgLs.map((img, idx) => (
              <img src={img} key={idx} />
            ))}
          </Slider>
        </div>
        <div className="detail">
          <div className="title">{data.name}</div>
          <div className="sub-title">The Art of Pen Spinning</div>
          <div className="content">
            With Spinee, everybody can know and learn about the art of pen
            spinning.
          </div>
          <div className="view flex-row" onClick={handleGoLink}>
            <FaExternalLinkSquareAlt className="icon" />
            VIEW APP
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
