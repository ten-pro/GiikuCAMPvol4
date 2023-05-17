import { useState } from "react";
import style from "../../styles/Debate/Rog1.module.css"

const Rog1 = () =>{

  const hyouzi = useState<boolean>(true);

  return(
    <>
    <div className={style.rog1_area} style={{display:hyouzi?'block':'none'}}>
      <p className={style.rog1}>学費の無償化ありありありありありありありありありありありありありありありありありあり</p>
    </div>
    </>
  )
}
export default Rog1;