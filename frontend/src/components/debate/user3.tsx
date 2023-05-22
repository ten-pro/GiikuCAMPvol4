import style from "../../styles/Debate/User3.module.css";

interface Character {
  gpt_id: number;
  gpt_name: string;
  gpt_character: string;
  gpt_img: number;
  position: string;
  user_id: number;
}

interface User3Props {
  chara3?: Character; // chara1がオプションとして渡される可能性があるため、?を追加
}

const User3: React.FC<User3Props> = ({ chara3 }) => {

  if (!chara3) {
    // chara1がundefinedの場合の処理
    return null; // もしくは、デフォルトのUIを表示するなどの適切な処理を行う
  }

  return (
    <>
      <img
        src="../../public/image/gpt.png"
        alt=""
        className={style.image3}
      />
      <p className={style.user3}>{chara3.gpt_name}</p>
      <p className={style.seikaku3}>{chara3.gpt_character}</p>
      <p className={style.po}>{chara3.position}</p>
    </>
  );
};

export default User3;