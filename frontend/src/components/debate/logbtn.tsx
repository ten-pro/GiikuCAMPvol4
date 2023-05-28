import style from "../../styles/Debate/Rogbtn.module.css";
import { useRouter } from "next/router";

const Logbtn = ()  =>{

  const router = useRouter();

  const handle = () =>{
    
    router.push('/debate_rog');
    
  }
  return(
    <>
    <div className={style.btn_area} onClick={handle}>
      <p className={style.p}>ログを表示</p>
    </div>
    </>
  )
}
export default Logbtn;