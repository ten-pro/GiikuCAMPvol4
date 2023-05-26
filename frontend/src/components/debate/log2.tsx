import { useState } from "react";
import style from "../../styles/Debate/Rog2.module.css"

type LogProps = {
  log2: string;
};

const Log2 :React.FC<LogProps>= ({log2}) =>{

  const hyouzi2 = useState<boolean>(true);
  
  return (
    <div className={style.rog_area}>
      <div className={style.rog2_area} style={{display:hyouzi2?'block':'none'}}>
      <p className={style.rog2}>{log2}</p>
    </div>
    </div>
  )
}
export default Log2;