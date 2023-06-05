import style from "../styles/Debate/Debate.module.css"
import Title from "@/components/debate/title1";
import User1 from "@/components/debate/user1";
import User2 from "@/components/debate/user3";
import User3 from "@/components/debate/user2";
import User4 from "@/components/debate/user4";
import Rogbtn from "@/components/debate/logbtn";
import Rog1 from "@/components/debate/log1";
import Rog3 from "@/components/debate/log3";
import Rog2 from "@/components/debate/log2";
import Rog4 from "@/components/debate/log4";
import Rogari1 from "@/components/debate_rog/rogari1";
import Rogari2 from "@/components/debate_rog/rogari2";
import Rogari3 from "@/components/debate_rog/rogari3";
import Rogari4 from "@/components/debate_rog/rogari4";
import Tozirubtn from "@/components/debate_rog/tozirubtn";
import Finishbtn from "@/components/debate_finish/finishbtn";
import { useState,useEffect,useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

import {useContext} from 'react';

interface Character {
  gpt_id: number;
  gpt_name: string;
  gpt_character: string;
  gpt_img: number;
  position: string;
  user_id: number;
}

interface RogbtnProps {
  log1: string;
  log2: string;
  log3: string;
  log4: string;
  log5: string;
  log6: string;
  log7: string;
  log8: string;
}

const Debate = () =>{

  const[debate_id,setDebate_id] = useState<number>(0);
  const [title,setTitle] = useState<string>('今後世の中はAIに支配されるか');

  // const[chara1,setChara1] = useState<Character | undefined>(undefined);
  // const[chara2,setChara2] = useState<Character | undefined>(undefined);
  // const[chara3,setChara3] = useState<Character | undefined>(undefined);
  // const[chara4,setChara4] = useState<Character | undefined>(undefined);
  // const[seikaku,setSeikaku] = useState<string>('');
  const [chara1, setChara1] = useState<Character | undefined>({
    gpt_id: 1,
    gpt_name: "楓",
    gpt_character: "やんちゃ",
    gpt_img: 1,
    position: "肯定",
    user_id: 1
  });
  const [chara2, setChara2] = useState<Character | undefined>({
    gpt_id: 1,
    gpt_name: "増田",
    gpt_character: "穏やか",
    gpt_img: 1,
    position: "肯定",
    user_id: 1
  });
  const [chara3, setChara3] = useState<Character | undefined>({
    gpt_id: 1,
    gpt_name: "加藤",
    gpt_character: "ミステリアス",
    gpt_img: 1,
    position: "否定",
    user_id: 1
  });
  const [chara4, setChara4] = useState<Character | undefined>({
    gpt_id: 1,
    gpt_name: "川田",
    gpt_character: "短気",
    gpt_img: 1,
    position: "否定",
    user_id: 1
  });

  const [kou1,setKou1] = useState<string>(''); //１肯定の発表
  const [hi2,setHi2] = useState<string>(''); //２否定の反対尋問
  const [hi3,setHi3] = useState<string>(''); //３否定の発表
  const [kou4,setKou4] = useState<string>(''); //４肯定の反対尋問
  const [kou5,setKou5] = useState<string>(''); //５肯定の反駁
  const [hi6,setHi6] = useState<string>(''); //６否定の反駁
  const [kou7,setKou7] = useState<string>(''); //７肯定の最終弁論
  const [hi8,setHi8] = useState<string>(''); //８否定の最終弁論

  //表示のありなしを判断する場所
  const [isRog1Visible, setIsRog1Visible] = useState<boolean>(false);
  const [isRog2Visible, setIsRog2Visible] = useState<boolean>(false);
  const [isRog3Visible, setIsRog3Visible] = useState<boolean>(false);
  const [isRog4Visible, setIsRog4Visible] = useState<boolean>(false);
  const [isRog5Visible, setIsRog5Visible] = useState<boolean>(false);
  const [isRog6Visible, setIsRog6Visible] = useState<boolean>(false);
  const [isRog7Visible, setIsRog7Visible] = useState<boolean>(false);
  const [isRog8Visible, setIsRog8Visible] = useState<boolean>(false);
  const [finishbtn,setFinishbtn] = useState<boolean>(false);

  //ｇｐｔの画像取得
  const[gptimg,setGptimg] = useState<number>();
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

 //let chara1data = JSON.parse(localStorage.getItem("chara1"));
//  let chara2data = JSON.parse(localStorage.getItem("chara2"));
//  let chara3data = JSON.parse(localStorage.getItem("chara3"));
//  let chara4data = JSON.parse(localStorage.getItem("chara4"));


      // ↓GPTの動き１回目の発表
      const fetchMessage1 = async () => {
       
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
              { "role": "system", "content": `あなたの名前は${chara1?.gpt_name}。${chara1?.gpt_character}な性格で答えてほしい` },
              { "role": "user", "content": `肯定の立場で${title}について簡潔に３文で立論してほしい`}
            ],
            "max_tokens": 130  // 返答の最大トークン数を指定
          };
    
          const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
          //setMessage(response.data.choices[0].message.content);
          console.log(response.data.choices[0].message.content);
          setKou1(response.data.choices[0].message.content);
          setIsRog1Visible(true);
          console.log("一回目OK！");

           // 5秒間待機する
        await new Promise((resolve) => setTimeout(resolve, 5000));

 
        } catch (error) {
          console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
        }
      };

    // ↓GPTの動き２回目の反対尋問
    const fetchMessage2 = async () => {
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
            { "role": "system", "content": `あなたは${chara3?.gpt_name}。${chara3?.gpt_character}で答えてほしい` },
            { "role": "assistant", "content": kou1 },
            { "role": "user", "content": `反対の立場で${title}についてassistantを含めて３文で簡潔に反論をしてほしい` },
          ],
          "max_tokens": 130
        };
    
        const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
        console.log(response.data.choices[0].message.content);
        setHi2(response.data.choices[0].message.content);
        setIsRog1Visible(false);
        setIsRog2Visible(true);
        console.log("2回目OK！");
    
        await new Promise((resolve) => setTimeout(resolve, 5000));
    
      } catch (error) {
        console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
        setIsRog1Visible(false);
      }
    };
        // ↓GPTの動き３回目の発表
        const fetchMessage3 = async () => {
          
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
                { "role": "system", "content": `あなたの名前は${chara4?.gpt_name}。${chara4?.gpt_character}な性格で答えてほしい` },
                { "role": "user", "content": `否定の立場で${title}について３文で簡潔に立論してほしい`}
              ],
                "max_tokens": 130  // 返答の最大トークン数を指定
            };
      
            const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
          console.log(response.data.choices[0].message.content);
            setHi3(response.data.choices[0].message.content);
            setIsRog2Visible(false);
            setIsRog3Visible(true);
            console.log("3回目OK！");

        await new Promise((resolve) => setTimeout(resolve, 5000));

          } catch (error) {
            console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
            setIsRog2Visible(false);
          }
        };
            // ↓GPTの動き４回目の反対尋問
    const fetchMessage4 = async () => {
      
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
            { "role": "system", "content": `あなたの名前は${chara2?.gpt_name}。${chara2?.gpt_character}な性格で答えてほしい` },
            { "role": "assistant", "content": hi3 },
            { "role": "user", "content": `肯定の立場で${title}についてassistantを含めて３文で反論をしてほしい` },
          ],
          "max_tokens": 130  // 返答の最大トークン数を指定
        };
  
        const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
        console.log(response.data.choices[0].message.content);
        setKou4(response.data.choices[0].message.content);
        setIsRog3Visible(false);
        setIsRog4Visible(true);
        console.log("4回目OK！");

        await new Promise((resolve) => setTimeout(resolve, 5000));
        setIsRog3Visible(false);


      } catch (error) {
        console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
      }
    };
        // ↓GPTの動き５回目の反駁
        const fetchMessage5 = async () => {
          
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
                { "role": "system", "content": `あなたの名前は${chara1?.gpt_name}。${chara1?.gpt_character}な性格で答えてほしい` },
                { "role": "assistant", "content": hi2 },
                { "role": "user", "content": `肯定の立場で${title}についてassistantを含めて３文で反駁をしてほしい` },
              ],
          "max_tokens": 130  // 返答の最大トークン数を指定

            };
      
            const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
            setKou5(response.data.choices[0].message.content);
            setIsRog4Visible(false);
            setIsRog5Visible(true);
            console.log("5回目OK！");

        await new Promise((resolve) => setTimeout(resolve, 5000));


          } catch (error) {
            console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
            setIsRog4Visible(false);
          }
        };
            // ↓GPTの動き６回目の反駁
    const fetchMessage6 = async () => {
      
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
            { "role": "system", "content": `あなたの名前は${chara3?.gpt_name}。${chara3?.gpt_character}な性格で答えてほしい` },
            { "role": "assistant", "content": kou4 },
            { "role": "user", "content": `反対の立場で${title}についてassistantを含めて３文で反対をしてほしい` },
          ],
          "max_tokens": 130  // 返答の最大トークン数を指定
        };
  
        const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
        setHi6(response.data.choices[0].message.content);
        setIsRog5Visible(false);
        setIsRog6Visible(true);
        console.log("6回目OK！");

        await new Promise((resolve) => setTimeout(resolve, 5000));


      } catch (error) {
        console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
        setIsRog5Visible(false);
      }
    };

            // ↓GPTの動き7回目の反駁
    const fetchMessage7 = async () => {
      
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
            { "role": "system", "content": `あなたの名前は${chara2?.gpt_name}。${chara2?.gpt_character}な性格で答えてほしい` },
            { "role": "assistant", "content": kou1 },
            { "role": "assistant", "content": kou5 },
            { "role": "user", "content": `肯定の立場で${title}についてassistantを含めて３文でまとめてほしい` },
          ],
          "max_tokens": 130  // 返答の最大トークン数を指定
        };
  
        const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
        setKou7(response.data.choices[0].message.content);
        setIsRog6Visible(false);
        setIsRog7Visible(true);
        console.log("7回目OK！");

        await new Promise((resolve) => setTimeout(resolve, 5000));


      } catch (error) {
        console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
        setIsRog6Visible(false);
      }
    };

            // ↓GPTの動き８回目の最終弁論
           const fetchMessage8 = async () => {
      
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
                  { "role": "system", "content": `あなたの名前は${chara4?.gpt_name}。${chara4?.gpt_character}な性格で答えてほしい` },
                  { "role": "assistant", "content": hi3},
                  { "role": "assistant", "content": hi6 },
                  { "role": "user", "content": `反対の立場で${title}についてassistantを含めて３文でまとめてほしい` },
                ],
                "max_tokens": 130  // 返答の最大トークン数を指定
              };
        
              const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
              setHi8(response.data.choices[0].message.content);
              setIsRog7Visible(false);
              setIsRog8Visible(true);
              console.log("8回目OK！");
      
              await new Promise((resolve) => setTimeout(resolve, 5000));
      
      
            } catch (error) {
              console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
              setIsRog7Visible(false);
            }
          };

          const [loopstop, setLoopstop] = useState(false);
          const [closebtn, setClosebtn] = useState(false);

          //gptへの関数を動かす
          useEffect(() => {
            let cancel = false;
          
            const fetchMessages = async () => {
              const messages = [
                fetchMessage1,
                fetchMessage2,
                fetchMessage3,
                fetchMessage4,
                fetchMessage5,
                fetchMessage6,
                fetchMessage7,
                fetchMessage8
              ];
          
              for (let i = 0; i < 8; i++) {
                if (cancel) {
                  break;
                }
                await messages[i]();
              }
          
              if (!cancel) {
                setIsRog8Visible(false);
                setFinishbtn(true);
                setClosebtn(true);
                console.log(cancel);
              }
            };
          
            fetchMessages();
          
            return () => {
              cancel = true;
            };
          }, [loopstop]);

          const [logari,setLogari] = useState<boolean>(false);

          const logaribtn = ()=>{
              setLogari(true);
          }

          const toziru = () =>{
            setLogari(false);
            setLoopstop(true);
          }


  return (
    <div className={style.debate_area}>
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
    
    <div>
  {!logari && (
    <>
      {isRog1Visible && <Rog1 log1={kou1} />}
      {isRog2Visible && <Rog3 log3={hi2} />}
      {isRog3Visible && <Rog4 log4={hi3} />}
      {isRog4Visible && <Rog2 log2={kou4} />}
      {isRog5Visible && <Rog1 log1={kou5} />}
      {isRog6Visible && <Rog3 log3={hi6} />}
      {isRog7Visible && <Rog2 log2={kou7} />}
      {isRog8Visible && <Rog4 log4={hi8} />}
    </>
  )}
</div>

      <div onClick={logaribtn} className={style.push_area}>
        <Rogbtn/>
      </div>

    {logari&&
    <div className={style.hyouzi_area}>
    {kou1&&<Rogari1 log1={kou1}/>}
    {hi2&&<Rogari3 log3={hi2} />}
    {hi3&&<Rogari4 log4={hi3} />}
    {kou4&&<Rogari2 log2={kou4} />}
      
    {kou5&&<Rogari1 log1={kou5} />}
    {hi6&&<Rogari3 log3={hi6} />}
    {kou7&&<Rogari2 log2={kou7} />}
    {hi8&&<Rogari4 log4={hi8} />}
    
    </div>}
    <div onClick={toziru} className={style.tozi_area}>{logari&&<Tozirubtn/>}</div>

    {isRog1Visible && <p className={style.mozi}>立論</p>}
    {isRog2Visible && <p className={style.mozi}>反対尋問</p>}
    {isRog3Visible && <p className={style.mozi}>立論</p>}
    {isRog4Visible && <p className={style.mozi}>反対尋問</p>}
    {isRog5Visible && <p className={style.mozi}>反駁</p>}
    {isRog6Visible && <p className={style.mozi}>反駁</p>}
    {isRog7Visible && <p className={style.mozi}>最終弁論</p>}
    {isRog8Visible && <p className={style.mozi}>最終弁論</p>}
    

    {finishbtn &&<Finishbtn log1={kou1}
        log2={hi2}
        log3={hi3}
        log4={kou4}
        log5={kou5}
        log6={hi6}
        log7={kou7}
        log8={hi8}/>}
  </div>
  )
}
export default Debate;