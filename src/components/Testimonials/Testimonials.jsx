import React from 'react';
import "./Testimonials.scss"

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Anita Orinthia",
      title: "Senior Developer",
      img: "/people1.png",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum neque non aliquam elementum.",
    },
    {
      id: 2,
      name: "Sherilyn Rabia",
      title: "CEO of Broom.Co",
      img: "/people2.png",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet,  adipiscing elit. Integer rutrum neque non aliquam elementum.",
      featured: true,
    },
    {
      id: 3,
      name: "Reyna Boitumelo",
      title: "Sales Manager",
      img: "/people3.png",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum neque non aliquam elementum.",
    },
    // {
    //   id: 4,
    //   name: "Mark Cow Follow",
    //   title: "Uber Driver",
    //   img: "/people4.png",
    //   icon: "assets/mobile.png",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum neque non aliquam elementum.",
    // },
  ]


  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((p)=>(
          <div className={p.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="left" src="assets/right-arrow.png" alt="right arrow" />
              <img className="users" src={p.img} alt={p.name} />
              <img className="right" src={p.icon} alt={p.title} />
            </div>
            <div className="center">{p.desc}</div>
            <div className="bottom">
              <h3>
                {p.name}
              </h3>
              <h4>
                {p.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Testimonials;
