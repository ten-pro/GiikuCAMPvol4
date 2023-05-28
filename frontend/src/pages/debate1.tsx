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
import Finishbtn from "@/components/debate_finish/finishbtn";
import { useState,useEffect,useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

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
  const [title,setTitle] = useState<string>('');

  const[chara1,setChara1] = useState<Character | undefined>(undefined);
  const[chara2,setChara2] = useState<Character | undefined>(undefined);
  const[chara3,setChara3] = useState<Character | undefined>(undefined);
  const[chara4,setChara4] = useState<Character | undefined>(undefined);
  const[seikaku,setSeikaku] = useState<string>('');

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
              { "role": "system", "content": `あなたの名前はあい。やんちゃ坊主な性格で答えてほしい` },
              { "role": "user", "content": `肯定の立場で朝のコーヒーについて簡潔に３文で立論してほしい`}
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
            { "role": "system", "content": `あなたはもみじ。真面目な性格で答えてほしい` },
            { "role": "assistant", "content": kou1 },
            { "role": "user", "content": `反対の立場で３文で簡潔に反論をしてほしい` },
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
                { "role": "system", "content": `あなたの名前はかい。ヤンキーな性格で答えてほしい` },
                { "role": "user", "content": `否定の立場で朝のコーヒーについて３文で簡潔に立論してほしい`}
              ],
                "max_tokens": 130  // 返答の最大トークン数を指定
            };
      
            const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
            //setMessage(response.data.choices[0].message.content);
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
            { "role": "system", "content": `あなたの名前はまい。オタク気質な性格で答えてほしい` },
            { "role": "assistant", "content": hi3 },
            { "role": "user", "content": `肯定の立場で３文で反論をしてほしい` },
          ],
          "max_tokens": 130  // 返答の最大トークン数を指定
        };
  
        const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
        //setMessage(response.data.choices[0].message.content);
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
                { "role": "system", "content": `あなたの名前はあい。やんちゃ坊主な性格で答えてほしい` },
                { "role": "assistant", "content": hi2 },
                { "role": "user", "content": `肯定の立場で３文で反駁をしてほしい` },
              ],
          "max_tokens": 130  // 返答の最大トークン数を指定

            };
      
            const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
            //setMessage(response.data.choices[0].message.content);
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
            // { "role": "system", "content": `あなたの性格は${chara3?.gpt_character}。` },
            { "role": "system", "content": `あなたの名前はかい。ヤンキーな性格で答えてほしい` },
            { "role": "assistant", "content": kou4 },
            { "role": "user", "content": `反対の立場で３文で反対をしてほしい` },
          ],
          "max_tokens": 130  // 返答の最大トークン数を指定
        };
  
        const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
        //setMessage(response.data.choices[0].message.content);
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
            // { "role": "system", "content": `あなたの性格は${chara3?.gpt_character}。` },
            { "role": "system", "content": `あなたの名前はかい。ヤンキーな性格で答えてほしい` },
            { "role": "assistant", "content": kou1 },
            { "role": "assistant", "content": kou5 },
            { "role": "user", "content": `肯定の立場で３文でまとめてほしい` },
          ],
          "max_tokens": 130  // 返答の最大トークン数を指定
        };
  
        const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
        //setMessage(response.data.choices[0].message.content);
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
                  // { "role": "system", "content": `あなたの性格は${chara3?.gpt_character}。` },
                  { "role": "system", "content": `あなたの名前はかい。オタク気質な性格で答えてほしい` },
                  { "role": "assistant", "content": hi3},
                  { "role": "assistant", "content": hi6 },
                  { "role": "user", "content": `反対の立場で３文でまとめてほしい` },
                ],
                "max_tokens": 130  // 返答の最大トークン数を指定
              };
        
              const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
              //setMessage(response.data.choices[0].message.content);
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

          const [loopstop,setLoopstop] = useState<boolean>(false);

          //gptへの関数を動かす
          useEffect(() => {
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
                if (loopstop) {
                  break; // ループを中断
                }
                await messages[i]();
              }

              setIsRog8Visible(false);
              setFinishbtn(true);
              
            };
          
            fetchMessages();
          }, [loopstop]);

          const pushbtn = () => {
            setLoopstop(true);
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
              <p className={style.p2}>否定</p>
          </div>
        </div>
    
    <Title title={title}/>
    <User1 chara1={chara1}/>
    <User2 chara3={chara3}/>
    <User3 chara2={chara2}/>
    <User4 chara4={chara4}/>
    
      <div>
      {isRog1Visible && <Rog1 log1={kou1} />}
      {isRog2Visible &&<Rog3 log3={hi2} />}
      {isRog3Visible &&<Rog4 log4={hi3} />}
      {isRog4Visible &&<Rog2 log2={kou4} />}
      
      {isRog5Visible &&<Rog1 log1={kou5} />}
      {isRog6Visible &&<Rog3 log3={hi6} />}
      {isRog7Visible &&<Rog2 log2={kou7} />}
      {isRog8Visible &&<Rog4 log4={hi8} />}

    </div>

    <div onClick={pushbtn} className={style.push_area}>
    <Rogbtn log1={kou1}
            log3={hi2}
            log4={hi3}
            log2={kou4}
            log5={kou5}
            log6={hi6}
            log7={kou7}
            log8={hi8}/>
    </div>

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