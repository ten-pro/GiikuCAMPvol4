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

const Debate = () =>{
  return(
    <div className={style.debate_area}>
      <Title/>
      <User1/>
      <User2/>
      <User3/>
      <User4/>
      <Rog1/>
      <Rog2/>
      <Rog3/>
      <Rog4/>
      <Rogbtn/>
    </div>
  )
}
export default Debate;