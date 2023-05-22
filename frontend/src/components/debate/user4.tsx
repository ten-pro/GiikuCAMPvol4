import style from "../../styles/Debate/User4.module.css";

interface Character {
  gpt_id: number;
  gpt_name: string;
  gpt_character: string;
  gpt_img: number;
  position: string;
  user_id: number;
}

interface User4Props {
  chara4?: Character; // chara1がオプションとして渡される可能性があるため、?を追加
}

const User4: React.FC<User4Props> = ({ chara4 }) => {

  if (!chara4) {
    // chara1がundefinedの場合の処理
    return null; // もしくは、デフォルトのUIを表示するなどの適切な処理を行う
  }

  return (
    <>
      <img
        src="../../public/image/gpt.png"
        alt=""
        className={style.image4}
      />
      <p className={style.user4}>{chara4.gpt_name}</p>
      <p className={style.seikaku4}>{chara4.gpt_character}</p>
      <p className={style.po}>{chara4.position}</p>
    </>
  );
};

export default User4;