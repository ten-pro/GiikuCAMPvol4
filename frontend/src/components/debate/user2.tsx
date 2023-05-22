import style from "../../styles/Debate/User2.module.css";

interface Character {
  gpt_id: number;
  gpt_name: string;
  gpt_character: string;
  gpt_img: number;
  position: string;
  user_id: number;
}

interface User2Props {
  chara2?: Character; // chara1がオプションとして渡される可能性があるため、?を追加
}

const User2: React.FC<User2Props> = ({ chara2 }) => {

  if (!chara2) {
    // chara1がundefinedの場合の処理
    return null; // もしくは、デフォルトのUIを表示するなどの適切な処理を行う
  }

  return (
    <>
      <img
        src="../../public/image/gpt.png"
        alt=""
        className={style.image2}
      />
      <p className={style.user2}>{chara2.gpt_name}</p>
      <p className={style.seikaku2}>{chara2.gpt_character}</p>
      <p className={style.po}>{chara2.position}</p>

    </>
  );
};

export default User2;