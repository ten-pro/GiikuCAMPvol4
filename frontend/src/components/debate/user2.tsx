import style from "../../styles/Debate/User2.module.css"

interface Chailduserdata2{
  data2:user;
}

interface user  {
  name:String,
  seikaku:String
}

const User2:React.FC<Chailduserdata2> = ({data2}) =>{
  return(
    <>
    <img src="../../../public/image/gpt.png" alt="" className={style.image2}/>
    <p className={style.user2}>{data2.name}</p>
    <p className={style.seikaku2}>{data2.seikaku}</p>
    </>
  )
}
export default User2;