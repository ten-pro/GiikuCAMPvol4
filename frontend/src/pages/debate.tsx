import style from "../styles/Debate/Debate.module.css"
import Title from "@/components/debate/title";
import User1 from "@/components/debate/user1";
import User2 from "@/components/debate/user2";
import User3 from "@/components/debate/user3";
import User4 from "@/components/debate/user4";
import Rogbtn from "@/components/debate/logbtn";
import Rog1 from "@/components/debate/log1";
import Rog3 from "@/components/debate/log3";
import Rog2 from "@/components/debate/log2";
import Rog4 from "@/components/debate/log4";
import { useState,useEffect } from "react";

const Debate = () => {
  const [currentRogIndex, setCurrentRogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRogIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(timer);
      setCurrentRogIndex(+1);
    };
  }, []);

  return (
    <div className={style.debate_area}>
      <div className={style.area1}>
        <div className={style.box1}>
            <p className={style.p1}>肯定</p>
        </div>
      </div>

      <div className={style.area2}>
        <div className={style.box2}>
            <p className={style.p2}>肯定</p>
        </div>
      </div>
      
      <Title />
      <User1 />
      <User2 />
      <User3 />
      <User4 />
      {currentRogIndex === 0 && <Rog1 />}
      {currentRogIndex === 1 && <Rog2 />}
      {currentRogIndex === 2 && <Rog3 />}
      {currentRogIndex === 3 && <Rog4 />}
      <Rogbtn />
    </div>
  );
};

export default Debate;