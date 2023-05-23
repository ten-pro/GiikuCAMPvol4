import HomeTitle from '@/components/Home/HomeTitle'
import HomeGpt from '@/components/Home/HomeGpt'
import HomeButton from '@/components/Home/HomeButton'
import Styles from '@/styles/Home/Home.module.scss'
import React, { useState } from 'react';
import axios from 'axios';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Home() {
    const [gptData, setGptData] = useState({
        name: '',
        img: '',
        character: '',
        position: '',
        gender: '',
    });
    const [inputValues, setInputValues] = useState(["", "", "", ""]);
    const handleInputChange = (index:any, newValue: any) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = newValue;
        setInputValues(newInputValues);
    }
    const [selectValues, setSelectValues] = useState(["", "", "", ""]);
    const handleSelectChange = (index:any, newValue:any) => {
        const newSelectValues = [...selectValues];
        newSelectValues[index] = newValue;
        setSelectValues(newSelectValues);
    }    
    const [childValues, setChildValues] = useState({
        child1: '',
        child2: '',
        child3: '',
        child4: '',
        // その他の子コンポーネントの初期値
      });
      
      const handleChildChange = (childName: any, newValue: any) => {
        setChildValues(prevValues => ({
          ...prevValues,
          [childName]: newValue,
        }));
      };
    const [title, setTitle] = useState('');
    const handleTitleChange = (newTitle: string) => {
        setTitle(newTitle);
        console.log(newTitle);
      }
    const [gptStates, setGptStates] = useState([
        {
          name: 'gpt1',
          img: 1,
          character: '頭でっかち',
          position: '肯定',
        },
        {
          name: 'gpt2',
          img: 2,
          character: '力自慢',
          position: '肯定',
        },
        {
          name: 'gpt3',
          img: 3,
          character: 'ごうけつ',
          position: '否定',
        },
        {
          name: 'gpt4',
          img: 4,
          character: '理屈っぽい',
          position: '否定',
        },
      ]);
    const debateStart = async () => {
        try {
            const res = await axios.post(
                'http://mp-class.chips.jp/debate/Main.php',
                {
    "create_debate": "",
    "gpts": [
        {
            "user_id": 1,
            "gpt_name": "GPT 1",
            "gpt_gender": "男性",
            "gpt_img": 1,
            "gpt_character": "Character 1",
            "position": "否定"
        },
        {
            "user_id": 1,
            "gpt_name": "GPT 2",
            "gpt_gender": "男性",
            "gpt_img": 2,
            "gpt_character": "Character 2",
            "position": "肯定"
        },
        {
            "user_id": 1,
            "gpt_name": "GPT 1",
            "gpt_gender": "男性",
            "gpt_img": 1,
            "gpt_character": "Character 1",
            "position": "否定"
        },
        {
            "user_id": 1,
            "gpt_name": "GPT 1",
            "gpt_gender": "男性",
            "gpt_img": 1,
            "gpt_character": "Character 1",
            "position": "否定"
        }
    ],
    "debate":{
        "id":1,
        "title":"debate_title"
    }
},
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log(res);
        } catch(error) {
            console.log(error);
        }
    };
    const check = () => {
        console.log(title)
        console.log(inputValues);
        console.log(selectValues)
    }
    const setGptState = (index: any, newState: any) => {
        setGptStates(gptStates.map((state, i) => (i === index ? newState : state)));
      };
return (
<>
    <HomeTitle onTitleChange={handleTitleChange}/>
    <div style={{display: "flex"}}>
        <HomeGpt indexSelect={0} onSelectChange={handleSelectChange} indexName={0} onInputChange={handleInputChange} gptState={gptStates[0]} setGptState={(newState) => setGptState(0, newState)} color="#ff0000" lCheck={false} pCheck={true} src="/HomeImage/gptLogo1.png" placeholder='Ada' position='1' loading='11' positive='111' negative='a' one='aa' all='aaa'/>
        <HomeGpt indexSelect={1} onSelectChange={handleSelectChange} indexName={1} onInputChange={handleInputChange} gptState={gptStates[1]} setGptState={(newState) => setGptState(1, newState)} color="#CC00FF" lCheck={true} pCheck={false} src="/HomeImage/gptLogo2.png" placeholder='Babbage' position='2' loading='22' positive='222' negative='b' one='bb' all='bbb'/>
    </div>
    <div style={{display: "flex"}}>
        <div style={{display: "flex"}}>
            <HomeGpt indexSelect={2} onSelectChange={handleSelectChange} indexName={2} onInputChange={handleInputChange} gptState={gptStates[2]} setGptState={(newState) => setGptState(2, newState)} color="#33E9E9" lCheck={false} pCheck={true} src="/HomeImage/gptLogo3.png" placeholder='Curie' position='3' loading='33' positive='333' negative='c' one='cc' all='ccc'/>
            <HomeGpt indexSelect={3} onSelectChange={handleSelectChange} indexName={3} onInputChange={handleInputChange} gptState={gptStates[3]} setGptState={(newState) => setGptState(3, newState)} color="#FFD56A" lCheck={true} pCheck={false} src="/HomeImage/gptLogo4.png" placeholder='Davinci' position='4' loading='44' positive='444' negative='d' one='dd' all='ddd'/>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }} className={Styles.buttonArea}>
            <HomeButton text="議事録を開く"/>
            <HomeButton text="スタート"/>
        </div>
    </div>
    <button onClick={check}>debateState</button>
</>
)
}

export default Home