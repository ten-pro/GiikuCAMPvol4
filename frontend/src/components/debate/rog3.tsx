import { useState } from "react"
import style from "../../styles/Debate/Rog3.module.css"

const Rog3 = () =>{

  const hyouzi3 = useState<Boolean>(true)
  return(
    <>
    <div className={style.rog3_area} style={{display:hyouzi3?'none':'block'}}>
      <p className={style.rog3}>学費の無償化あり！</p>
    </div>
    </>
  )
}
export default Rog3;