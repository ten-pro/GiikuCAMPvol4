import style from "../../styles/Rog/Rogari3.module.css";

type LogProps = {
  log3: string;
};


const Rogari3 :React.FC<LogProps>= ({log3}) =>{
  return(
    <div className={style.rogari_area}>
      <img src="../../../public/image/gpt.png" alt="" className={style.img3}/>
      <div className={style.fukidasi_area}>
      <p className={style.p3}>{log3}</p>
      </div>
    </div>
  )
}
export default Rogari3;