import { useState } from "react";
import style from "../../styles/Debate/Rog1.module.css"

type LogProps = {
  log1: string;
};

const Log1 :React.FC<LogProps>= ({log1}) =>{

  const hyouzi1 = useState<boolean>(true);
  
  return (
    <>
      <div className={style.rog1_area} style={{display:hyouzi1?'block':'none'}}>
      <p className={style.rog1}>{log1}</p>
    </div>
    </>
  )
}
export default Log1;