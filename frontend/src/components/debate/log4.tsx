import { useState } from "react";
import style from "../../styles/Debate/Rog4.module.css"

type LogProps = {
  log4: string;
};

const Log4 :React.FC<LogProps>= ({log4}) =>{

  const hyouzi4 = useState<boolean>(true);
  
  return (
    <>
      <div className={style.rog4_area} style={{display:hyouzi4?'block':'none'}}>
      <p className={style.rog4}>{log4}</p>
    </div>
    </>
  )
}
export default Log4;