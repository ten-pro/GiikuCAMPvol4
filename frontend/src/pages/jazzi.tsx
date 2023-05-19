import style from "../styles/Jazzi/Jazzi.module.css";
import Title from "@/components/debate/title";
import User1 from "@/components/debate/user1";
import User2 from "@/components/debate/user2";
import User3 from "@/components/debate/user3";
import User4 from "@/components/debate/user4";
import { useRouter } from "next/router";

const Jazzi = () =>{

  const router = useRouter();

  const handle1 = () =>{
    
    router.push({
      pathname:'/result',
      query:{hantei:'否定'},
    });
  };

  const handle2 = () =>{
    
    router.push({
      pathname:'/result',
      query:{hantei:'否定'},
    });
  };

  return(
    <div className={style.jazzi_area}>
      <Title/>
      <User1/>
      <User2/>
      <User3/>
      <User4/>
      <div className={style.hantei}>
          <p className={style.p1}>ディベート終了</p>
          <p className={style.p2}>ジャッジ</p>
          <div className={style.erabu}>
              <div className={style.hitei} onClick={handle1}>
              <p className={style.p3}>否定</p>
              </div>
              <div className={style.koutei} onClick={handle2}>
              <p className={style.p4}>肯定</p>
              </div>
          </div>
        
      </div>
    </div>
  )
}
export default Jazzi;