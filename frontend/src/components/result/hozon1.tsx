import { useState } from "react";
import style from "../../styles/Result/Hozon1.module.css"

const Hozon1 = () =>{

  const [hozon,setHozon] = useState<boolean>(true);

  const [zumi,setZumi] = useState<boolean>(false);

  const handle = () =>{
    setHozon(false);
    setZumi(true);
  }

  return(
    <>
    {hozon && (<div className={style.hozon_area} onClick={handle}>
      <p className={style.p1}>性格保存</p>
    </div>)}
    
    {zumi && (<div className={style.hozonzumi_area}>
      <p className={style.p}>保存済み</p>
    </div>)}
    </>
  )
}
export default Hozon1;