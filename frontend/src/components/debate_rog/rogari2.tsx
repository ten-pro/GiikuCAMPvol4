import style from "../../styles/Rog/Rogari2.module.css";

type LogProps = {
  log2: string;
};


const Rogari2 :React.FC<LogProps>= ({log2}) =>{
  return(
    <div className={style.rogari_area}>
      <div className={style.fukidasi_area}>
      <p className={style.p2}>{log2}</p>
      </div>
      <img src="../../../public/image/gpt.png" alt="" className={style.img2}/>
    </div>
  )
}
export default Rogari2;