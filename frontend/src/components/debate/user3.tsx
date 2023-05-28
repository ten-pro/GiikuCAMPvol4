import style from "../../styles/Debate/User3.module.css"

interface Chailduserdata3{
  data3:user;
}

interface user  {
  name:String,
  seikaku:String
}

const User3:React.FC<Chailduserdata3> = ({data3}) =>{
  
  return(
    <>
    <img src="../../../public/image/gpt.png" alt="" className={style.image3}/>
    <p className={style.user3}>{data3.name}</p>
    <p className={style.seikaku3}>{data3.seikaku}</p>
    </>
  )
}
export default User3;