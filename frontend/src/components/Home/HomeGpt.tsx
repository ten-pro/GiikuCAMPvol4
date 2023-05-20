import Styles from '@/styles/Home/Home.module.scss'
import React, { useState } from 'react'
import { Inter } from 'next/font/google'

interface HomeGptProps {
    color: string;
    src: string;
    placeholder: string;
    position: string;
    loading: string;
    positive: string;
    negative: string;
    one:string;
    all: string;
    pCheck: boolean;
    lCheck: boolean;
  }
const inter = Inter({ subsets: ['latin'] })

function HomeGpt({ color, src, placeholder, position, loading , positive, negative, one, all, pCheck ,lCheck}: HomeGptProps) {
    const style = {
        boxShadow: `
        0 0 10px ${color},
        0 0 10px ${color},
        0 0 10px ${color},
        0 0 10px ${color}
        `,
      };
      const [cPosition, setCPosition] = useState(pCheck ? positive : negative);
      const [cLoading, setCLoading] = useState(lCheck ? one : all);
return (
<>
    <div className={Styles.main}>
        <div className={Styles.left}>
            <img src={src} className={Styles.logo1}/>
            <div className={Styles.changeDiv}>
                <button className={Styles.change1}>画像を変更<img src='/HomeImage/arrow.png' className={Styles.changeIcon}/></button>
            </div>
        </div>
        <div className={Styles.right}>
            <input type="text" className={Styles.gptName1} placeholder={placeholder} style={style}/>
            <div className={Styles.gptSetting1} style={style}>
                <div className={Styles.gender}>
                    <div className={Styles.genderTitle}>性別：</div>
                    <select className={Styles.genderSelect}>
                        <option value="null">選択してください</option>
                        <option value="boy">男性</option>
                        <option value="girl">女性</option>
                        <option value="another">その他</option>
                    </select>
                </div>
                <div className={Styles.character}>
                    <div className={Styles.characterTitle}>性格：</div>
                    <input type="text" className={Styles.characterInput} placeholder='入力してください'/>
                </div>
                <div className={Styles.position}>
                    <div className={Styles.positionTitle}>立場：</div>
                    <input type="radio" name={position} value='positive' id={positive} className={Styles.positionRadio1} checked={cPosition === positive} onChange={() => setCPosition(positive)}/>
                    <label htmlFor={positive} className={Styles.positiveLabel} >肯定</label>
                    <input type="radio" name={position} value='negative' id={negative} className={Styles.positionRadio2} checked={cPosition === negative} onChange={() => setCPosition(negative)}/>
                    <label htmlFor={negative} className={Styles.negativeLabel} >否定</label>
                </div>
                <div className={Styles.loading}>
                    <div className={Styles.loadingTop}>
                        <div className={Styles.loadingTitle}>読み込み：</div>
                        <input type="radio" name={loading}  value='one' id={one} className={Styles.loadingInput1} checked={cLoading === one} onChange={() => setCLoading(one)}/>
                        <label htmlFor={one} className={Styles.loadingOne}>自分のみ</label>
                        <input type="radio" name={loading} value='all' id={all} className={Styles.loadingInput1} checked={cLoading === all} onChange={() => setCLoading(all)}/>
                        <label htmlFor={all} className={Styles.loadingAll}>全員</label>
                    </div>
                    <div className={Styles.loadingBottom}>
                        <select className={Styles.loadingSelect}>
                            <option value="null">選択してください</option>
                            <option value="rikei">理系</option>
                            <option value="bunnkei">文系</option>
                            <option value="jinuas">天才</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default HomeGpt