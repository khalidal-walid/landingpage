import { useEffect, useState } from "react";
import Solutionslist from "../solutionsList/SolutionsList";
import "./solutions.scss";
import {
  featuredPortfolio,
  proCourse,
  webPortfolio,
} from "../solutionsList/dataa.js";

export default function Solutions() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Gigify Your Business",
    },
    {
      id: "web",
      title: "Gigify Your Career",
    },
    {
      id: "pro",
      title: "Professional Courses"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      // case "pro":
      //   setData(proCourse);
      //   break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      {/* <h1>FAQ</h1> */}
      <div className="hero">
        {data.map((d) => (
           <div className="item">
            {/* <h4>{d.titleHero}</h4> */}
            {/* <p>{d.descHero}</p> */}
            {/* <img>{d.imgGeneral}</img> */}
          </div>
        ))}
      </div>
      <ul className="lists">
        {list.map((item) => (
          <Solutionslist
            title={item.title}
            desc={item.desc}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="items">
            <div className="item-img">
            <img
              src={d.imgGeneral}
              alt=""
            />
            </div>
            <div className="item-desc">
              <h1>{d.titleGeneral}</h1>
              <h4>{d.benefitGeneral}</h4>
              <p>{d.descGeneral}</p>
              <h4>{d.benefitGeneral2}</h4>
              <p>{d.descGeneral2}</p>
              <h4>{d.benefitGeneral3}</h4>
              <p>{d.descGeneral3}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container"> 
        {data.map((d) => (
          <div className="items">
            <div className="item-desc">
              <h1>{d.titleSpecific}</h1>
              <h4>{d.benefitSpecific}</h4>
              <p>{d.descSpecific}</p>
              <h4>{d.benefitSpecific2}</h4>
              <p>{d.descSpecific2}</p>
              <h4>{d.benefitSpecific3}</h4>
              <p>{d.descSpecific3}</p>
            </div>
            <div className="item-img">
            <img
              src={d.imgSpecific}
              alt=""
            />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="container"> 
        {data.map((d) => (
          <div className="items">
            <div className="item-img">
              <img
                src={d.img}
                alt=""
              />
            </div>
            <div className="item-desc">
              <h1>{d.title}</h1>
              <h4>{d.benefit}</h4>
              <p>{d.desc}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="testimoni"> 
      <h1>Testimonials</h1>
        {data.map((d) => (
          <div className="items">
            <div className="item-testimoni">
              <h4>{d.titleTestimoni}</h4>
              <span>{d.descTestimoni}</span>
              <p>{d.testimoni}</p>
            </div>
            <div className="item-testimoni">
              <h4>{d.titleTestimoni2}</h4>
              <span>{d.descTestimoni2}</span>
              <p>{d.testimoni2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
