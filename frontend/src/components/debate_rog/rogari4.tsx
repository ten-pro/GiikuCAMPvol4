import style from "../../styles/Rog/Rogari4.module.css";

type LogProps = {
  log4: string;
};


const Rogari4 :React.FC<LogProps>= ({log4}) =>{
  return(
    <div className={style.rogari_area}>
      <div className={style.fukidasi_area}>
      <p className={style.p4}>{log4}</p>
      </div>
      <img src='/HomeImage/gptLogo2.png' alt="" className={style.img4}/>
    </div>
  )
}
export default Rogari4;