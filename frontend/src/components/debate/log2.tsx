import { useState } from "react";
import style from "../../styles/Debate/Rog2.module.css"

const Log2 = () =>{

  const hyouzi2 = useState<boolean>(true)
  return(
    <>
    <div className={style.rog2_area} style={{display:hyouzi2?'none':'block'}}>
      <p className={style.rog2}>学費の無償化なしなしなしなしなしなしなしなしなしなし</p>
    </div>
    </>
  )
}
export default Log2;