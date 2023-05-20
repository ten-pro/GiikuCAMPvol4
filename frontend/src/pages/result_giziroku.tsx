import style from "../styles/Result_giziroku/Result_giziroku.module.css";
import Title from "@/components/debate/title";
import User1 from "@/components/debate/user1";
import User2 from "@/components/debate/user2";
import User3 from "@/components/debate/user3";
import User4 from "@/components/debate/user4";
import Rogari1 from "@/components/debate_rog/rogari1";
import Rogari2 from "@/components/debate_rog/rogari2";
import Rogari3 from "@/components/debate_rog/rogari3";
import Rogari4 from "@/components/debate_rog/rogari4";
import { useRouter } from "next/router";

const Result_giziroku = () =>{

  const router = useRouter();

  const handle = () =>{
    router.push('/recode');
  }
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
      <div className={style.gizi_area}>
        <div className={style.gizibtn_area} onClick={handle}>
          <p className={style.gizip}>閉じる</p>
        </div>
      </div>
    </div>
  )
}
export default Result_giziroku;