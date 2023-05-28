import style from "../../styles/Debate/Rogbtn.module.css";
import { useRouter } from "next/router";

interface RogbtnProps {
  log1: string;
  log2: string;
  log3: string;
  log4: string;
  log5: string;
  log6: string;
  log7: string;
  log8: string;
}

const Logbtn = (props: RogbtnProps)  =>{

  const { log1, log2, log3, log4, log5, log6, log7, log8 } = props;

  const router = useRouter();

  const handle = () =>{

    const queryParams = {
      log1,
      log3,
      log4,
      log2,
      log5,
      log6,
      log7,
      log8,
    };

    router.push({
      pathname: "/debate_log",
      query: queryParams,
    });
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