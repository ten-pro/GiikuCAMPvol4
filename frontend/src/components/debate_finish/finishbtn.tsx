import style from "../../styles/Debate_finish/Finishbtn.module.css";
import { useRouter } from "next/router";

const Finishbtn = () =>{

  const router = useRouter();

  const handle = () =>{
    router.push('/jazzi');
  }
  return(
    <div className={style.finish_area} onClick={handle}>
    <div className={style.btn_area} >
      <p className={style.p}>ジャッジへ</p>
    </div>
    </div>
  )
}
export default Finishbtn;