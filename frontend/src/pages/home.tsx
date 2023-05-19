import HomeTitle from '@/components/Home/HomeTitle'
import HomeGpt from '@/components/Home/HomeGpt'
import HomeButton from '@/components/Home/HomeButton'
import Styles from '@/styles/Home/Home.module.scss'
import React, { useState } from 'react';
import axios from 'axios';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Home() {
    const [title, setTitle] = useState('連携テスト');
    const [name1, setName1] = useState('gpt1');
    const [name2, setName2] = useState('gpt2');
    const [name3, setName3] = useState('gpt3');
    const [name4, setName4] = useState('gpt4');
    const [img1, setImg1] = useState(1);
    const [img2, setImg2] = useState(2);
    const [img3, setImg3] = useState(3);
    const [img4, setImg4] = useState(4);
    const [character1, setCharacter1] = useState('頭でっかち');
    const [character2, setCharacter2] = useState('力自慢');
    const [character3, setCharacter3] = useState('ごうけつ');
    const [character4, setCharacter4] = useState('理屈っぽい');
    const [position1, setPosition1] = useState('肯定');
    const [position2, setPosition2] = useState('肯定');
    const [position3, setPosition3] = useState('否定');
    const [position4, setPosition4] = useState('否定');

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
                            "gpt_img": 1,
                            "gpt_character": "Character 1",
                            "position": "否定"
                        },
                        {
                            "user_id": 1,
                            "gpt_name": "GPT 2",
                            "gpt_img": 2,
                            "gpt_character": "Character 2",
                            "position": "肯定"
                        },
                        {
                            "user_id": 1,
                            "gpt_name": "GPT 1",
                            "gpt_img": 1,
                            "gpt_character": "Character 1",
                            "position": "否定"
                        },
                        {
                            "user_id": 1,
                            "gpt_name": "GPT 1",
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

return (
<>
    <HomeTitle />
    <div style={{display: "flex"}}>
        <HomeGpt color="#ff0000" src="/HomeImage/gptLogo1.png" placeholder='Ada' position='1' loading='11' positive='111' negative='a' one='aa' all='aaa'/>
        <HomeGpt color="#CC00FF" src="/HomeImage/gptLogo2.png" placeholder='Babbage' position='2' loading='22' positive='222' negative='b' one='bb' all='bbb'/>
    </div>
    <div style={{display: "flex"}}>
        <div style={{display: "flex"}}>
            <HomeGpt color="#33E9E9" src="/HomeImage/gptLogo3.png" placeholder='Curie' position='3' loading='33' positive='333' negative='c' one='cc' all='ccc'/>
            <HomeGpt color="#FFD56A" src="/HomeImage/gptLogo4.png" placeholder='Davinci' position='4' loading='44' positive='444' negative='d' one='dd' all='ddd'/>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }} className={Styles.buttonArea}>
            <HomeButton text="議事録を開く"/>
            <HomeButton text="スタート"/>
        </div>
    </div>
    <button onClick={debateStart}>debateState</button>
</>
)
}

export default Home