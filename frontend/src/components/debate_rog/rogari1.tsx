import {useState} from 'react';
import style from "../../styles/Rog/Rogari1.module.css";

type LogProps = {
  log1: string;
};

const Rogari1: React.FC<LogProps> = ({ log1 }) => {
  return (

    <div className={style.rogari_area}>
      <img src='/HomeImage/gptLogo2.png' alt="" className={style.img1} />
      <div className={style.fukidasi_area}>
        <p className={style.p1}>{log1}</p>
      </div>
    </div>

  );
};

export default Rogari1;