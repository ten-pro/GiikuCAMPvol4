import style from "../styles/Result_giziroku/Result_giziroku.module.css";
import Title from "@/components/debate/title";
import User1 from "@/components/debate/user1";
import User2 from "@/components/debate/user3";
import User3 from "@/components/debate/user2";
import User4 from "@/components/debate/user4";
import Rogari1 from "@/components/debate_rog/rogari1";
import Rogari2 from "@/components/debate_rog/rogari2";
import Rogari3 from "@/components/debate_rog/rogari3";
import Rogari4 from "@/components/debate_rog/rogari4";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import axios from "axios";

interface Character {
  gpt_id: number;
  gpt_name: string;
  gpt_character: string;
  gpt_img: number;
  position: string;
  user_id: number;
}

const Result_giziroku = () =>{

  const[debate_id,setDebate_id] = useState<number>(0);
  const [title,setTitle] = useState<string>('');

  const[chara1,setChara1] = useState<Character | undefined>(undefined);
  const[chara2,setChara2] = useState<Character | undefined>(undefined);
  const[chara3,setChara3] = useState<Character | undefined>(undefined);
  const[chara4,setChara4] = useState<Character | undefined>(undefined);
  const[seikaku,setSeikaku] = useState<string>('');

  //talk情報
  const[talk1,setTalk1] = useState<string>('');
  const[talk2,setTalk2] = useState<string>('');
  const[talk3,setTalk3] = useState<string>('');
  const[talk4,setTalk4] = useState<string>('');
  const[talk5,setTalk5] = useState<string>('');
  const[talk6,setTalk6] = useState<string>('');
  const[talk7,setTalk7] = useState<string>('');
  const[talk8,setTalk8] = useState<string>('');

  //user情報取得
  useEffect(() => {
    try{
    axios
      .post('https://mp-class.chips.jp/debate/Main.php', {
        get_debate_info: 1,
          debate_id:2,
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
      .then(function (response) {
        if (response.data === false) {
          // userData.error1 = true;
        } else {
          console.log(response.data);
          const data = response.data[0];
          setDebate_id(data.debate_id); 
          setTitle(data.title);          
          const gpts = data.gpts;
          setSeikaku(gpts.gpt_character);
        
        const positiveGpts = gpts.filter((gpt: Character) => gpt.position === "肯定");
        const negativeGpts = gpts.filter((gpt: Character) => gpt.position === "否定");
        
        if (positiveGpts.length >= 1) {
          setChara1(positiveGpts[0]);
        }
        if (positiveGpts.length >= 2) {
          setChara2(positiveGpts[1]);
        }
        if (negativeGpts.length >= 1) {
          setChara3(negativeGpts[0]);
        }
        if (negativeGpts.length >= 2) {
          setChara4(negativeGpts[1]);
        }
        }
      })
    }catch(e){
      console.log(e);
    }
  }, [])

   //talk履歴取得
   useEffect(() => {
    try{
    axios
      .post('https://mp-class.chips.jp/debate/Main.php', {
        get_talklist: 1,
          debate_id:2,
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
      .then(function (response) {
       console.log(response.data);
       const talkList = response.data;

        // 最新の8件を抽出
        const latestTalks = talkList.slice(-8);

        console.log(latestTalks);
        console.log(latestTalks[0].talk);
        setTalk1(latestTalks[0].talk);
        setTalk2(latestTalks[1].talk);
        setTalk3(latestTalks[2].talk);
        setTalk4(latestTalks[3].talk);
        setTalk5(latestTalks[4].talk);
        setTalk6(latestTalks[5].talk);
        setTalk7(latestTalks[6].talk);
        setTalk8(latestTalks[7].talk);

      })
    }catch(e){
      console.log(e);
    }
  }, [])

  const router = useRouter();

  const handle = () =>{
    router.push('/recode');
  }
  return(
    <div className={style.rog_area}>
      <Title title={title}/>
      <User1 chara1={chara1}/>
      <User2 chara3={chara3}/>
      <User3 chara2={chara2}/>
      <User4 chara4={chara4}/>
      <div className={style.hyouzi_area}>
      <Rogari1 log1={talk1} />
      <Rogari3 log3={talk3} />
      <Rogari4 log4={talk4} />
      <Rogari2 log2={talk2} />
      <Rogari1 log1={talk5} />
      <Rogari3 log3={talk6} />
      <Rogari2 log2={talk7} />
      <Rogari4 log4={talk8} />
      </div>
      <div className={style.gizi_area}>
        <div className={style.gizibtn_area} onClick={handle}>
          <p className={style.gizip}>閉じる</p>
        </div>
      </div>
    </div>
  )
}
export default Result_giziroku;