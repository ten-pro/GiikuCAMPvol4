import style from "../styles/Debate/Debate.module.css"
import Title from "@/components/debate/title";
import User1 from "@/components/debate/user1";
import User2 from "@/components/debate/user3";
import User3 from "@/components/debate/user2";
import User4 from "@/components/debate/user4";
import Rogbtn from "@/components/debate/logbtn";
import Rog1 from "@/components/debate/log1";
import Rog3 from "@/components/debate/log3";
import Rog2 from "@/components/debate/log2";
import Rog4 from "@/components/debate/log4";
import { useState,useEffect } from "react";
import axios from "axios";



interface chara{
  gpt_id: number,
  gpt_name: string;
  gpt_character: string,
  gpt_img: number,
  position: string,
  user_id: number,
}



type Title = {title :string};


const Debate :React.FC= () => {

  const [message, setMessage] = useState<string>(''); //取得したデータを保存
 // const [title,setTitle] = useState<string>('');     //取得したタイトル保存
  const [kou_happyo1,setKhappyo1] = useState<string>(''); //１肯定の発表
  const [hi_hantai2,setHi_hantai2] = useState<string>(''); //２否定の反対尋問
  const [hi_happyo3,setHi_happyo3] = useState<string>(''); //３否定の発表
  const [kou_hantai4,setKou_hantai4] = useState<string>(''); //４肯定の反対尋問
  const [kou_hanbatu5,setKou_hanbatu5] = useState<string>(''); //５肯定の反駁
  const [hi_hanbatu6,setHi_hanbatu6] = useState<string>(''); //６否定の反駁
  const [kou_saisyu7,setKou_saisyu7] = useState<string>(''); //７肯定の最終弁論
  const [hi_saisyu8,setKou_saisyu8] = useState<string>(''); //８否定の最終弁論

  const [area1,setArea1] = useState<boolean>(false);
  const [area2,setArea2] = useState<boolean>(false);
  const [area3,setArea3] = useState<boolean>(false);
  const [area4,setArea4] = useState<boolean>(false);

 
const [title, setTitle] = useState<Title>();
const [debate_id,setDebate_id] = useState<number>();

const [chara1,setChara1] = useState<{
  gpt_id: number,
  gpt_name: string;
  gpt_character: string,
  gpt_img: number,
  position: string,
  user_id: number,
}>({
  gpt_id: 0,
  gpt_name: '',
  gpt_character: '',
  gpt_img: 0,
  position: '',
  user_id: 0,
});

const [chara2,setChara2] = useState<{
  gpt_id: number,
  gpt_name: string;
  gpt_character: string,
  gpt_img: number,
  position: string,
  user_id: number,
}>({
  gpt_id: 0,
  gpt_name: '',
  gpt_character: '',
  gpt_img: 0,
  position: '',
  user_id: 0,
});

const [chara3,setChara3] = useState<{
  gpt_id: number,
  gpt_name: string;
  gpt_character: string,
  gpt_img: number,
  position: string,
  user_id: number,
}>({
  gpt_id: 0,
  gpt_name: '',
  gpt_character: '',
  gpt_img: 0,
  position: '',
  user_id: 0,
});

const [chara4,setChara4] = useState<{
  gpt_id: number,
  gpt_name: string;
  gpt_character: string,
  gpt_img: number,
  position: string,
  user_id: number,
}>({
  gpt_id: 0,
  gpt_name: '',
  gpt_character: '',
  gpt_img: 0,
  position: '',
  user_id: 0,
});


  // useEffect (()=>{
  //    //↓gptの名前や性格、立場、titleを取得
  //   try {
  //     axios.post(
  //       'https://mp-class.chips.jp/debate/Main.php',
  //       {
  //         get_debate_info: 1,
  //         debate_id:2,
  //       },
  //       
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       }
  //     );
  //     if (response.data === false) {
  //       // userData.error1 = true;
  //     } else {
  //       console.log(response.data);
  //       console.log(response.data[0].debate_id);
  //       setTitle(response.data[0].title);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // })

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
          console.log(response.data[0].debate_id);
          setTitle(response.data[0].title);

          const data = response.data[0];

            // if(data.gets[0].position == "肯定"){
            //   setArea1(true);
            //   setChara1({
            //     gpt_id: data.gets[0].gpt_id,
            //     gpt_name: data.gpt_name,
            //     gpt_character: data.gpt_character,
            //     gpt_img: data.gpt_img,
            //     position: data.position,
            //     user_id: data.user_id,
            //   });
            // }else{
            //   setArea3(true);
            //   setChara3({
            //     gpt_id: data.gpt_id,
            //     gpt_name: data.gpt_name,
            //     gpt_character: data.gpt_character,
            //     gpt_img: data.gpt_img,
            //     position: data.position,
            //     user_id: data.user_id,
            //   });
            // }
        }
      })
    }catch(e){
      console.log(e);
    }
  }, [])
 


  // ↓GPTの動き
  const fetchMessage = async () => {
    try {
      const configuration = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        }
      };
      const body = {
        "model": "gpt-3.5-turbo",
        "messages": [
          { "role": "system", "content": "you have a serious personality" },
          { "role": "user", "content": "Tell me how you feel right now in 10 characters or less" }
        ]
      };

      const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
      setMessage(response.data.choices[0].message.content);
    } catch (error) {
      console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
    }
  };

  return (
    <div className={style.debate_area}>
      <div className={style.area1}>
        <div className={style.box1}>
            <p className={style.p1}>肯定</p>
        </div>
      </div>

      <div className={style.area2}>
        <div className={style.box2}>
            <p className={style.p2}>肯定</p>
        </div>
      </div>
      <Rog1 log1={/>
      <Rogbtn />
    </div>
  );
};

export default Debate;