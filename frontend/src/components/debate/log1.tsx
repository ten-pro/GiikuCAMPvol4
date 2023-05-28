import style from "../../styles/Debate/Rog1.module.css"

type LogProps = {
  log1: string;
};

const Log1 :React.FC<LogProps>= ({log1}) =>{
  
  return (
    <div className={style.rog_area}>
      <div className={style.rog1_area} >
        <p className={style.rog1}>{log1}</p>
      </div>
    </div>
  )
}
export default Log1;