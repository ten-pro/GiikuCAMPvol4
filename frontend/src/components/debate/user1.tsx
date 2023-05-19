import style from "../../styles/Debate/User1.module.css"

interface Chailduserdata1{
  data1:user;
}

interface user  {
  name:String,
  seikaku:String
}

const User1:React.FC<Chailduserdata1> = ({data1}) =>{
  return(
    <>
    <img src="../../public/image/gpt.png" alt="" className={style.image1}/>
    <p className={style.user1}>{data1.name}</p>
    <p className={style.seikaku1}>{data1.seikaku}</p>
    </>
  )
}
export default User1;