import React, { useEffect, useRef } from 'react';
import "./Intro.scss";
import { Player } from '@lottiefiles/react-lottie-player';
import { KeyboardArrowDown } from '@mui/icons-material';
import { init } from 'ityped'

const Intro = () => {

  const textRef = useRef();

  useEffect(() => {
    // console.log(textRef);
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 100, 
      strings: ['CSS & JS', 'HTML 5', 'React JS', 'Wordpress', 'UI / UX' ] 
    });
  }, []);
  

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        <Player
          autoplay
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_xvrofzfk.json"
          style={{ height: '450px', width: '450px', overflow: 'hidden' }}
        />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Imam Hilmi</h1>
          <h3>I Still Learning <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
