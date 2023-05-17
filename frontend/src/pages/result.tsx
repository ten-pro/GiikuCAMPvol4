import style from "../styles/Result/Result.module.css";
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
import Hozon1 from "@/components/result/hozon1";
import Hozon2 from "@/components/result/hozon2";
import Hozon3 from "@/components/result/hozon3";
import Hozon4 from "@/components/result/hozon4";

const Result = () =>{
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
      <Hozon1/>
      <Hozon2/>
      <Hozon3/>
      <Hozon4/>
      <div className={style.homebtn_area}>
        <p className={style.homep}>ホームへ</p>
      </div>
    </div>
  )
}
export default Result;