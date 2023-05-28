import style from "../../styles/Rog/Tozirubtn.module.css";
import { useRouter } from "next/router";

const Tozirubtn = () =>{

  const router = useRouter();

  const handle = () =>{

    router.push('/debate');
  }

  return(
    <div className={style.close_btn} onClick={handle}></div>
  )
}
export default Tozirubtn;