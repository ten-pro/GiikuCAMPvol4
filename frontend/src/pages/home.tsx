import HomeTitle from '@/components/Home/HomeTitle'
import HomeGpt from '@/components/Home/HomeGpt'
import HomeButton from '@/components/Home/HomeButton'
import Styles from '@/styles/Home/Home.module.scss'
import React, { useState } from 'react';
import axios from 'axios';

function Home() {
const [characterValues, setCharacterValues] = useState(["", "", "", ""]);
const handleCharacterInputChange = (index: number, newValue: string) => {
    const newValues = [...characterValues];
    newValues[index] = newValue;
    setCharacterValues(newValues);
}
const [images, setImages] = useState([
    '/HomeImage/gptLogo1.png',
    '/HomeImage/gptLogo2.png',
    '/HomeImage/gptLogo3.png',
    '/HomeImage/gptLogo4.png',
    // Other image paths...
]);
const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0, 0]); // 各画像の初期インデックス
const handleImageChange = (index: number) => {
    return () => {
      const newIndex = Math.floor(Math.random() * images.length);
      setCurrentIndexes(oldIndexes => {
        const newIndexes = [...oldIndexes];
        newIndexes[index] = newIndex;
        return newIndexes;
      });
    };
  };
  

    
    const [radioValues, setRadioValues] = useState(["", "", "", ""]);
const handleRadioChange = (index: any, newValue:any) => {
    const newRadioValues = [...radioValues];
    newRadioValues[index] = newValue;
    setRadioValues(newRadioValues);
}
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
    const [title, setTitle] = useState('');
    const handleTitleChange = (newTitle: string) => {
        setTitle(newTitle);
        // console.log(newTitle);
      }
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
        console.log(selectValues);
        console.log(radioValues);
        console.log(characterValues);
        console.log(currentIndexes);
    }
return (
<>
{/* key={index} index={index} onRadioChange={handleRadioChange} */}
    <HomeTitle onTitleChange={handleTitleChange}/>
    <div style={{display: "flex"}}>
        <HomeGpt src={images[currentIndexes[0]]} onImageChange={handleImageChange(0)}  indexCharacter={0}onCharacterInputChange={handleCharacterInputChange} indexRadio={0} onRadioChange={handleRadioChange} indexSelect={0} onSelectChange={handleSelectChange} indexName={0} onInputChange={handleInputChange} color="#ff0000" lCheck={false} pCheck={true} placeholder='Ada' position='1' loading='11' positive='111' negative='a' one='aa' all='aaa'/>
        <HomeGpt src={images[currentIndexes[1]]} onImageChange={handleImageChange(1)}  indexCharacter={1}onCharacterInputChange={handleCharacterInputChange} indexRadio={1} onRadioChange={handleRadioChange} indexSelect={1} onSelectChange={handleSelectChange} indexName={1} onInputChange={handleInputChange} color="#CC00FF" lCheck={true} pCheck={false} placeholder='Babbage' position='2' loading='22' positive='222' negative='b' one='bb' all='bbb'/>
    </div>
    <div style={{display: "flex"}}>
        <div style={{display: "flex"}}>
            <HomeGpt src={images[currentIndexes[2]]} onImageChange={handleImageChange(2)}  indexCharacter={2}onCharacterInputChange={handleCharacterInputChange} indexRadio={2} onRadioChange={handleRadioChange} indexSelect={2} onSelectChange={handleSelectChange} indexName={2} onInputChange={handleInputChange} color="#33E9E9" lCheck={false} pCheck={true} placeholder='Curie' position='3' loading='33' positive='333' negative='c' one='cc' all='ccc'/>
            <HomeGpt src={images[currentIndexes[3]]} onImageChange={handleImageChange(3)}  indexCharacter={3}onCharacterInputChange={handleCharacterInputChange} indexRadio={3} onRadioChange={handleRadioChange} indexSelect={3} onSelectChange={handleSelectChange} indexName={3} onInputChange={handleInputChange} color="#FFD56A" lCheck={true} pCheck={false} placeholder='Davinci' position='4' loading='44' positive='444' negative='d' one='dd' all='ddd'/>
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