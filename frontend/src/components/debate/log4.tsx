import { useState } from "react";
import style from "../../styles/Debate/Rog4.module.css"

const Log4 = () =>{

  const hyouzi4 = useState<boolean>(true);

  return(
    <>
    <div className={style.rog4_area} style={{display:hyouzi4?'none':'block'}}>
      <p className={style.rog4}>学費の無償化なしだよだよだよだよだよだよだよだよだよだよだよだよだよだよだよだよ</p>
    </div>
    </>
  )
}
export default Log4;