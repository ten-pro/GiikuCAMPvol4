import style from "../../styles/Debate/Title.module.css"

type TitleProps = {
  title: string;
};

const Title :React.FC<TitleProps>= ({title}) =>{
  
  return (
    <>
      <p className={style.title}>{title}</p>
    </>
  )
}
export default Title;