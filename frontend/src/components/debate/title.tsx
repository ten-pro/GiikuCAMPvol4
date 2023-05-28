import style from "../../styles/Debate/Title.module.css"

interface Chaildtitle{
  title:string;
}


const Title :React.FC<Chaildtitle> = ({title}) =>{
  return(
    <>
      <p className={style.title}>{title}</p>
    </>
  )
}
export default Title;