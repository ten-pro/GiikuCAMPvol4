import style from "../styles/Rog/Debate_rog.module.css";
import Title from "@/components/debate/title";
import User1 from "@/components/debate/user1";
import User2 from "@/components/debate/user2";
import User3 from "@/components/debate/user3";
import User4 from "@/components/debate/user4";
import Rogari1 from "@/components/debate_rog/rogari1";
import Tozirubtn from "@/components/debate_rog/tozirubtn";
import Rogari2 from "@/components/debate_rog/rogari2";
import Rogari3 from "@/components/debate_rog/rogari3";
import Rogari4 from "@/components/debate_rog/rogari4";

const Debate_rog = () =>{
  return(
    <div className={style.rog_area}>
      <Title/>
      <User1/>
      <User2/>
      <User3/>
      <User4/>
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
export default Debate_rog;