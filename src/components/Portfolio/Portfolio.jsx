import React, { useEffect, useState } from 'react';
import "./Portfolio.scss";
import PortfolioList from '../PortfolioList/PortfolioList';
import { featuredPortfolio, codeIgniterPortfolio, reactJSPortfolio, wordpressPortfolio } from '../../data'

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "codeigniter",
      title: "CodeIgniter",
    },
    {
      id: "react",
      title: "React JS",
    },
    {
      id: "wordpress",
      title: "Wordpress",
    },
  ];

  useEffect(() => {

    switch(selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "codeigniter":
        setData(codeIgniterPortfolio);
        break;
      case "react":
        setData(reactJSPortfolio);
        break;
      case "wordpress":
        setData(wordpressPortfolio);
        break;
      default: 
        setData(featuredPortfolio);
    }

  }, [selected]);
  


  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) =>(
          <PortfolioList 
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt={d.title} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Portfolio;
