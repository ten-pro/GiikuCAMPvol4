import style from "../../styles/Debate/User4.module.css"

interface Chailduserdata4{
  data4:user;
}

interface user  {
  name:String,
  seikaku:String
}

const User4:React.FC<Chailduserdata4> = ({data4}) =>{
  return(
    <>
    <img src="../../../public/image/gpt.png" alt="" className={style.image4}/>
    <p className={style.user4}>{data4.name}</p>
    <p className={style.seikaku4}>{data4.seikaku}</p>
    </>
  )
}
export default User4;