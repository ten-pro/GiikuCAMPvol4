
import style from "../../styles/Rog/Rogari2.module.css";

type LogProps = {
  log2: string;
};

const Rogari2: React.FC<LogProps> = ({ log2 }) => {
  return (

    <div className={style.rogari_area}>
      <img src='/HomeImage/gptLogo2.png' alt="" className={style.img2} />
      <div className={style.fukidasi_area}>
        <p className={style.p1}>{log2}</p>
      </div>
    </div>

  );
};

export default Rogari2;