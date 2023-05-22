import style from "../../styles/Debate/User1.module.css";

interface Character {
  gpt_id: number;
  gpt_name: string;
  gpt_character: string;
  gpt_img: number;
  position: string;
  user_id: number;
}

interface User1Props {
  chara1?: Character; // chara1がオプションとして渡される可能性があるため、?を追加
}

const User1: React.FC<User1Props> = ({ chara1 }) => {

  if (!chara1) {
    // chara1がundefinedの場合の処理
    return null; // もしくは、デフォルトのUIを表示するなどの適切な処理を行う
  }

  return (
    <>
      <img
        src="../../public/image/gpt.png"
        alt=""
        className={style.image1}
      />
      <p className={style.user1}>{chara1.gpt_name}</p>
      <p className={style.seikaku1}>{chara1.gpt_character}</p>
      <p className={style.po}>{chara1.position}</p>
    </>
  );
};

export default User1;