import style from "../styles/Jazzi/Jazzi.module.css";
import Title from "@/components/debate/title";
import User1 from "@/components/debate/user1";
import User2 from "@/components/debate/user3";
import User3 from "@/components/debate/user2";
import User4 from "@/components/debate/user4";
import { useRouter } from "next/router";
import {useState,useEffect} from "react";
import axios from "axios";

interface Character {
  gpt_id: number;
  gpt_name: string;
  gpt_character: string;
  gpt_img: number;
  position: string;
  user_id: number;
}

const Jazzi = () =>{

  //user情報
  const[debate_id,setDebate_id] = useState<number>(0);
  const [title,setTitle] = useState<string>('');

  const[chara1,setChara1] = useState<Character | undefined>(undefined);
  const[chara2,setChara2] = useState<Character | undefined>(undefined);
  const[chara3,setChara3] = useState<Character | undefined>(undefined);
  const[chara4,setChara4] = useState<Character | undefined>(undefined);
  const[seikaku,setSeikaku] = useState<string>('');

   //linkを使用してデータを取得
   const router = useRouter();
   const { log1, log2, log3, log4, log5, log6, log7, log8 } = router.query;

  //user取得
  useEffect(() => {
    try{
    axios
      .post('https://mp-class.chips.jp/debate/Main.php', {
        get_debate_info: '',
          debate_id:31,
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

  const handle1 = () => {

  
    const queryParams = {
      log1,
      log2,
      log3,
      log4,
      log5,
      log6,
      log7,
      log8,
      hantei: '否定'
    };
  
    router.push({
      pathname: '/result',
      query: queryParams
    });
  };

  const handle2 = () => {
  
    const queryParams = {
      log1,
      log2,
      log3,
      log4,
      log5,
      log6,
      log7,
      log8,
      hantei: '肯定'
    };
  
    router.push({
      pathname: '/result',
      query: queryParams
    });
  };

  return(
    <div className={style.jazzi_area}>

        <div className={style.area1}>
          <div className={style.box1}>
              <p className={style.p5}>肯定</p>
          </div>
        </div>

        <div className={style.area2}>
          <div className={style.box2}>
              <p className={style.p6}>否定</p>
          </div>
        </div>

      <Title title={title}/>
    <User1 chara1={chara1}/>
    <User2 chara3={chara3}/>
    <User3 chara2={chara2}/>
    <User4 chara4={chara4}/>
      <div className={style.hantei}>
          <p className={style.p1}>ディベート終了</p>
          <p className={style.p2}>ジャッジ</p>
          <div className={style.erabu}>
              <div className={style.koutei} onClick={handle2}>
              <p className={style.p4}>肯定</p>
              </div>
              <div className={style.hitei} onClick={handle1}>
              <p className={style.p3}>否定</p>
              </div>
          </div>
        
      </div>
    </div>
  )
}
export default Jazzi;