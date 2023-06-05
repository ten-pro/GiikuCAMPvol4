import style from "../../styles/Debate/User2.module.css";
import {useState} from "react";

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

  const [images, setImages] = useState([
    '/HomeImage/gptLogo1.png',
    '/HomeImage/gptLogo2.png',
    '/HomeImage/gptLogo3.png',
    '/HomeImage/gptLogo4.png',
    '/icon/logo0.png',
    '/icon/logo1.png',
    '/icon/logo2.png',
    '/icon/logo3.png',
    '/icon/logo4.png',
    '/icon/logo5.png',
    '/icon/logo6.png',
    '/icon/logo7.png',
    '/icon/logo8.png',
    '/icon/logo9.png',
    '/icon/logo10.png',
    '/icon/logo11.png',
    '/icon/logo12.png',
    '/icon/logo13.png',
    '/icon/logo14.png',
    '/icon/logo15.png',
    '/icon/logo16.png',
    '/icon/logo17.png',
    '/icon/logo18.png',
    '/icon/logo19.png',
    '/icon/logo20.png',
    '/icon/logo21.png',
    '/icon/logo22.png',
    '/icon/logo23.png',
    '/icon/logo24.png',
    '/icon/logo25.png',
    // Other image paths...
]);

  if (!chara2) {
    // chara1がundefinedの場合の処理
    return null; // もしくは、デフォルトのUIを表示するなどの適切な処理を行う
  }

  return (
    <>
      <img
        src={images[chara2.gpt_img]}
        alt=""
        className={style.image2}
      />
      <p className={style.user2}>{chara2.gpt_name}</p>
      <p className={style.seikaku2}>{chara2.gpt_character}</p>
      {/* <p className={style.po}>{chara2.position}</p> */}

    </>
  );
};

export default User2;