import style from "../styles/Result/Result.module.css";
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
import { useEffect,useState } from "react";
import axios from "axios";

interface Character {
  gpt_id: number;
  gpt_name: string;
  gpt_character: string;
  gpt_img: number;
  position: string;
  user_id: number;
}

const Result = () =>{

  //user取得
  const[debate_id,setDebate_id] = useState<number>(0);
  const [title,setTitle] = useState<string>('');

  const[chara1,setChara1] = useState<Character | undefined>(undefined);
  const[chara2,setChara2] = useState<Character | undefined>(undefined);
  const[chara3,setChara3] = useState<Character | undefined>(undefined);
  const[chara4,setChara4] = useState<Character | undefined>(undefined);
  const[seikaku,setSeikaku] = useState<string>('');

   //linkを使用してデータを取得
   const router = useRouter();
   const { log1, log2, log3, log4, log5, log6, log7, log8,hantei } = router.query;
   const Log1 = Array.isArray(log1) ? decodeURIComponent(log1[0]) : decodeURIComponent(log1);
    const Log2 = Array.isArray(log2) ? decodeURIComponent(log2[0]) : decodeURIComponent(log2);
    const Log3 = Array.isArray(log3) ? decodeURIComponent(log3[0]) : decodeURIComponent(log3);
    const Log4 = Array.isArray(log4) ? decodeURIComponent(log4[0]) : decodeURIComponent(log4);
    const Log5 = Array.isArray(log5) ? decodeURIComponent(log5[0]) : decodeURIComponent(log5);
    const Log6 = Array.isArray(log6) ? decodeURIComponent(log6[0]) : decodeURIComponent(log6);
    const Log7 = Array.isArray(log7) ? decodeURIComponent(log7[0]) : decodeURIComponent(log7);
    const Log8 = Array.isArray(log8) ? decodeURIComponent(log8[0]) : decodeURIComponent(log8);
    const Hantei = Array.isArray(hantei) ? decodeURIComponent(hantei[0]) : decodeURIComponent(hantei);

  //user取得
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const create = {
          "create_talk": "",
          "debate_id":1,
          "judgement":hantei,
          "talks": [
              {
                  "debate_id": 2,
                  "gpt_id": 1,
                  "talk": Log1,
              },
              {
                  "debate_id": 2,
                  "gpt_id": 3,
                  "talk": Log2
              },
              {
                "debate_id": 2,
                "gpt_id": 2,
                "talk": Log3
              },
              {
                "debate_id": 2,
                "gpt_id": 4,
                "talk": Log4
              },
              {
                "debate_id": 2,
                "gpt_id": 1,
                "talk": Log5
              },
              {
                "debate_id": 2,
                "gpt_id": 3,
                "talk": Log6
              },
              {
              "debate_id": 2,
              "gpt_id": 1,
              "talk": Log7
            },
            {
              "debate_id": 2,
              "gpt_id": 4,
              "talk": Log8
            }
          ]
      };
  
        const res = await axios.post(
          'https://mp-class.chips.jp/debate/Main.php',
          JSON.stringify(create),
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
    


  const handle  = () =>{

    router.push('/home');
  }

  return(
    <div className={style.rog_area}>
      <div className={style.area1}>
        <div className={style.box1}>
          <p className={style.p1}>肯定</p>
        </div>
      </div>
      <div className={style.area2}>
        <div className={style.box2}>
          <p className={style.p2}>否定</p>
        </div>
      </div>
      <Title title={title}/>
      <User1 chara1={chara1}/>
      <User2 chara3={chara3}/>
      <User3 chara2={chara2}/>
      <User4 chara4={chara4}/>
      {hantei.includes("肯定") && (
          <img src="../../../image/win.png" alt="" className={style.winkoutei}/>
      )}
      {hantei.includes("否定") && (
        <img src="../../../image/win.png" alt="" className={style.winhitei}/>
      )}
      <div className={style.hyouzi_area}>
      {Log1 !== undefined && <Rogari1 log1={Log1} />}
      {Log3 !== undefined && <Rogari3 log3={Log3} />}
      {Log4 !== undefined && <Rogari4 log4={Log4} />}
      {Log2 !== undefined && <Rogari2 log2={Log2} />}
      {Log5 !== undefined && <Rogari1 log1={Log5} />}
      {Log6 !== undefined && <Rogari3 log3={Log6} />}
      {Log7 !== undefined && <Rogari2 log2={Log7} />}
      {Log8 !== undefined && <Rogari4 log4={Log8} />}
      </div>
      
      <div className={style.btn_area}>
        <div className={style.homebtn_area} onClick={handle}>
          <p className={style.homep}>ホームへ</p>
        </div>
      </div>
    </div>
  )
}
export default Result;