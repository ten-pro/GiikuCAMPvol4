import { useState } from "react";
import style from "../../styles/Debate/Rog3.module.css"

type LogProps = {
  log3: string;
};

const Log3 :React.FC<LogProps>= ({log3}) =>{

  const hyouzi3 = useState<boolean>(true);
  
  return (
    <>
      <div className={style.rog3_area} style={{display:hyouzi3?'block':'none'}}>
      <p className={style.rog3}>{log3}</p>
    </div>
    </>
  )
}
export default Log3;