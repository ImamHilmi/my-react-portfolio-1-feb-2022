import React, { useState } from 'react';
import "./Works.scss"

const Works = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data =[
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'CodeIgniter',
      desc: 'I made a few website while im in college with this framework.',
      img: './portfolio6.jpg'
    },
    {
      id: '2',
      icon: './assets/globe.png',
      title: 'React JS',
      desc: 'Still learning until now and i was enjoy to explore it more right now.',
      img: './portfolio12.jpg'
    },
    {
      id: '3',
      icon: './assets/writing.png',
      title: 'Wordpress',
      desc: 'I like using this CMS because it allows me to create any website with just drag & drop.',
      img: './portfolio3.jpg'
    },
  ]

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt={d.title} />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt={d.title} />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" alt="Arrow" className="arrow left" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" alt="Arrow" className="arrow right" onClick={() => handleClick()} />
    </div>
    );
};

export default Works;
