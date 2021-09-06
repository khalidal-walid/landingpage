import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
} from "../portfolioList/data.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Gig",
    },
    {
      id: "web",
      title: "Client",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      {/* <h1>FAQ</h1> */}
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            // titleGeneral={item.titleGeneral}
            desc={item.desc}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="tajuk">
          {data.map((d) =>(
            <h1>{d.titleGeneral}</h1>
          ))}
        </div>
        {data.map((d) => (
           <div className="item">
             <img
              src={d.imgGeneral}
              alt=""
            />
            <h4>{d.benefitGeneral}</h4>
            <p>{d.descGeneral}</p>
          </div>
        ))}
      </div>
      <div className="container"> 
        <div className="tajuk">
          {data.map((d) =>(
            <h1>{d.titleSpecific}</h1>
          ))}
        </div>

        {data.map((d) => (
           <div className="item">
             <img
              src={d.imgSpecific}
              alt=""
            />
            <h4>{d.benefitSpecific}</h4>
            <p>{d.descSpecific}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
