import React from "react";
import {interngradient} from "../../assets/index";
import { issues } from "../../constants/index";
import IssueCard from "../IssueCard";


const Main = () => {
  return <div className=" mt-8 ">
    
      <div>
      <div className="flex mx-auto pl-8 flex-wrap xs:justify-start justify-center w-full ">
    {issues.map((card) => <IssueCard key={card.id} {...card} />)}
  </div>
  </div>
  <div className=" flex flex-col items-center justify-center mt-5">
  <button type="button" className="w-[240px] h-[65px] text-2xl text-white border-btn bg-lightcyan  justify-center hover:bg-btn outline-btn rounded-full font-semibold mb-5 ">
    See More
  </button>
  {/* background */}
  </div>
  <div>
        <img
            className="absolute -mt-96 h-[50%] left-0 -z-10 "
            src={interngradient}
        ></img>
    </div>
    <div>
        <img
            className="absolute -mt-96 h-[50%] right-0 -z-10 "
            src={interngradient}
        ></img>
    </div>
    <div>
        <img
            className="absolute  -mt-[900px] h-[50%] right-0 -z-10"
            src={interngradient}
        ></img>
    </div>
    <div>
        <img
            className="absolute  -mt-[1000px] h-[50%] left-0 -z-10 "
            src={interngradient}
        ></img>
    </div>
    {/* --------- */}
 
  </div>;
}


export default Main;
