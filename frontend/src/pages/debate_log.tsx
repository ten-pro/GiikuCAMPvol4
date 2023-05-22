import React from "react";
import style from "../styles/Rog/Debate_rog.module.css";
import Title from "@/components/debate/title";
import User1 from "@/components/debate/user1";
import User2 from "@/components/debate/user3";
import User3 from "@/components/debate/user2";
import User4 from "@/components/debate/user4";
import Rogari1 from "@/components/debate_rog/rogari1";
import Tozirubtn from "@/components/debate_rog/tozirubtn";
import Rogari2 from "@/components/debate_rog/rogari2";
import Rogari3 from "@/components/debate_rog/rogari3";
import Rogari4 from "@/components/debate_rog/rogari4";

interface user  {
  name:String,
  seikaku:String
}

const Debate_log :React.FC = () =>{

  const user1 :user= {
    name:"test1",
    seikaku:"せいかく"
  }
  const user2 :user= {
    name:"test2",
    seikaku:"せいかく"
  }
  const user3 :user= {
    name:"test3",
    seikaku:"せいかく"
  }
  const user4 :user= {
    name:"test4",
    seikaku:"せいかく"
  }
  return(
    <div className={style.rog_area}>
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
      <Title/>
      <User1 data1 = {user1}/>
      <User2 data2 = {user2}/>
      <User3 data3 = {user3}/>
      <User4 data4 = {user4}/>
      <div className={style.hyouzi_area}>
        <Rogari1/>
        <Rogari2/>
        <Rogari3/>
        <Rogari4/>
      </div>
      <Tozirubtn/>
    </div>
  )
}
export default Debate_log;