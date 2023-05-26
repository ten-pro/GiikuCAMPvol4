import style from "../../styles/Debate_finish/Finishbtn.module.css";
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

const Finishbtn = (props: RogbtnProps) =>{

  const { log1, log2, log3, log4, log5, log6, log7, log8 } = props;

  const router = useRouter();

  const handle = () =>{

    const queryParams = {
      log1,
      log2,
      log3,
      log4,
      log5,
      log6,
      log7,
      log8,
    };

    router.push({
      pathname: "/jazzi",
      query: queryParams,
    });
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