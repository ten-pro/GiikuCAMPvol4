import style from "../../styles/Rog/Rogari3.module.css";

type LogProps = {
  log3: string;
};


const Rogari3 :React.FC<LogProps>= ({log3}) =>{
  return(
    <div className={style.rogari_area}>
      <div className={style.fukidasi_area}>
      <p className={style.p3}>{log3}</p>
      </div>
      <img src='/HomeImage/gptLogo2.png' alt="" className={style.img3}/>
    </div>
  )
}
export default Rogari3;