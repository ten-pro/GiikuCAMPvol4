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
              { "role": "system", "content": `今からディベートをします。あなたは${chara1?.gpt_character}な性格です。` },
              { "role": "user", "content": `肯定の立場で${title}について最大１００文字で立論してください。`}
            ]
          };
    
          const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
          //setMessage(response.data.choices[0].message.content);
          setKou1(response.data.choices[0].message.content);
          console.log("一回目OK！");
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
            { "role": "system", "content": `今からディベートをします。あなたは${chara3?.gpt_character}な性格です。` },
            { "role": "user", "content": `否定の立場で${kou1}の内容に対して最大１００文字で反対尋問してください。`}
          ]
        };
  
        const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
        //setMessage(response.data.choices[0].message.content);
        setHi2(response.data.choices[0].message.content);
        console.log("2回目OK！");

      } catch (error) {
        console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
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
                { "role": "system", "content": `今からディベートをします。あなたは${chara4?.gpt_character}な性格です。` },
                { "role": "user", "content": `否定の立場で${title}について最大１００文字で立論してください。`}
              ]
            };
      
            const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
            //setMessage(response.data.choices[0].message.content);
            setHi3(response.data.choices[0].message.content);
          console.log("3回目OK！");
          } catch (error) {
            console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
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
            { "role": "system", "content": `今からディベートをします。あなたは${chara2?.gpt_character}な性格です。` },
            { "role": "user", "content": `肯定の立場で${hi3}について最大１００文字で反対尋問してください。`}
          ]
        };
  
        const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
        //setMessage(response.data.choices[0].message.content);
        setKou4(response.data.choices[0].message.content);
        console.log("4回目OK！");

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
                { "role": "system", "content": `今からディベートをします。あなたは${chara1?.gpt_character}な性格です。` },
                { "role": "user", "content": `${chara1?.position}の立場で${hi2}に対して最大１００文字で反駁してください。`}
              ]
            };
      
            const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
            //setMessage(response.data.choices[0].message.content);
            setKou5(response.data.choices[0].message.content);
          console.log("5回目OK！");

          } catch (error) {
            console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
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
            { "role": "system", "content": `今からディベートをします。あなたは${chara3?.gpt_character}な性格です。` },
            { "role": "user", "content": `否定の立場で${kou4}に対して最大１００文字で反駁してください。`}
          ]
        };
  
        const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
        //setMessage(response.data.choices[0].message.content);
        setHi6(response.data.choices[0].message.content);
        console.log("6回目OK！");

      } catch (error) {
        console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
      }
    };

        // ↓GPTの動き７回目の最終弁論
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
                { "role": "system", "content": `今からディベートをします。あなたは${chara2?.gpt_character}な性格です。` },
                { "role": "user", "content": `$肯定の立場で${title}について最大１００文字で最終弁論をしてください。`}
              ]
            };
      
            const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
            //setMessage(response.data.choices[0].message.content);
            setKou7(response.data.choices[0].message.content);
          console.log("7回目OK！");

          } catch (error) {
            console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
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
            { "role": "system", "content": `今からディベートをします。あなたは${chara1?.gpt_character}な性格です。` },
            { "role": "user", "content": `否定の立場で${title}について最大１００文字で最終弁論してください。`}
          ]
        };
  
        const response = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
        //setMessage(response.data.choices[0].message.content);
        setHi8(response.data.choices[0].message.content);
        console.log("8回目OK！");

      } catch (error) {
        console.error('ChatGPT APIの呼び出し中にエラーが発生しました:', error);
      }
    };


    const [currentStep, setCurrentStep] = useState(0);

  const setIsStepVisible = (step: number) => {
    setCurrentStep(step);
  };

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
  
      for (let i = 0; i < messages.length; i++) {
        await messages[i]();
        setIsStepVisible(i + 1); // ステップの可視性を設定
      }
    };
  
    fetchMessages();
  }, []);
  
    const isStepVisible = (step: number) => {
      return currentStep >= step;
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
    
    <Title title={title}/>
    <User1 chara1={chara1}/>
    <User2 chara3={chara3}/>
    <User3 chara2={chara2}/>
    <User4 chara4={chara4}/>
    
    <div className={style.hyouzi_area}>
    {isStepVisible(1) && kou1 && <Rog1 log1={kou1} />}
    {isStepVisible(2) && hi2 && <Rog2 log2={hi2} />}
    {isStepVisible(3) && hi3 && <Rog3 log3={hi3} />}
    {isStepVisible(4) && kou4 && <Rog4 log4={kou4} />}
    {isStepVisible(5) && kou5 && <Rog1 log1={kou5} />}
    {isStepVisible(6) && hi6 && <Rog2 log2={hi6} />}
    {isStepVisible(7) && kou7 && <Rog3 log3={kou7} />}
    {isStepVisible(8) && hi8 && <Rog4 log4={hi8} />}
    </div>

    

    <Rogbtn />
  </div>
  )
}
export default Debate;