import Styles from '@/styles/Home/Home.module.scss'
import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import axios from 'axios'

interface HomeGptProps {
    color: string;
    src: string;
    onImageChange:(index: number, newValue: string) => void;
    placeholder: string;
    position: string;
    loading: string;
    positive: string;
    negative: string;
    one:string;
    all: string;
    pCheck: boolean;
    lCheck: boolean;
    onTitleChange: (newTitle: string) => void; 
    indexName: number;
    indexSelect:number;
    indexRadio: number;
    indexCharacter: number;
    onCharacterInputChange:(index: number, newValue: string) => void;
    onRadioChange: (index: number, newValue: string) => void;
    onInputChange: (index: number, newValue: string) => void;
    onSelectChange: (index: number, newValue: string) => void;
  }

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
    <label style={{ marginRight: '1em' }}>
      <input type="checkbox" {...props} />
      {children}
    </label>
  );
function HomeGpt({ onImageChange, onCharacterInputChange,indexCharacter,onRadioChange,indexRadio, indexSelect,onSelectChange,indexName, onInputChange, color, src, placeholder, position, loading , positive, negative, one, all, pCheck ,lCheck}: HomeGptProps) {
    const style = {
        boxShadow: `
        0 0 10px ${color},
        0 0 10px ${color},
        0 0 10px ${color},
        0 0 10px ${color}
        `,
      };
      
      const handleChange = (event:any) => {
        onInputChange(indexName, event.target.value);
    }
    const handleSelectChange = (selectedOption: any) => {
        if (selectedOption) {
            const { value, label } = selectedOption as { value: number, label: string };
            setId(value);
            setSelectedCharacter(label);
            onCharacterInputChange(indexCharacter, label);  // 追加：label値を親コンポーネントの関数に渡す
        } else {
            setSelectedCharacter('');
            onCharacterInputChange(indexCharacter, '');  // 追加：空文字を親コンポーネントの関数に渡す
        }
    };
    

    // Inputフィールドで値が変わった時の処理
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSelectedCharacter(newValue);
        onCharacterInputChange(indexCharacter, newValue);  // 入力値を親コンポーネントの関数に渡す
    };

      const [options, setOptions] = useState<{value: number, label: string}[]>([]);
      const [isClearable, setIsClearable] = useState(true);
      const [userId, setUserId] = useState<number | null>(null);
const [isSearchable, setIsSearchable] = useState(true);
      const [cPosition, setCPosition] = useState(pCheck ? positive : negative);
      const [cLoading, setCLoading] = useState(lCheck ? one : all);
      const [isMounted, setIsMounted] = useState(false);
      const [id, setId] = useState(0); 
      const [selectedCharacter, setSelectedCharacter] = useState('');
      const [idToUse, setIdToUse] = useState(0);
      const handleCharacterChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSelectedCharacter(newValue);
      };
      const handleCharacterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCharacter(e.target.value);
    };

      const gptList = async (idToUse: number) => {
        try {
            const res = await axios.post(
                'http://mp-class.chips.jp/debate/Main.php',
                {
                    get_gptlist: '',
                    id: idToUse
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            const gptOptions = res.data.map((item: any, index: any) => ({
                value: index,
                label: item.gpt_character
            }));
            setOptions(gptOptions);
        } catch(error) {
            console.log(error);
        }
    };
    useEffect(() => {
        // const userIdFromLocalStorage = localStorage.getItem('USERID');
        const userIdFromLocalStorage:any = 1;
        if (userIdFromLocalStorage) {
            setUserId(parseInt(userIdFromLocalStorage));
        }
    }, []);

    useEffect(() => {
        if (cLoading === one) {
            setId(userId || 0);
        } else {
            setId(0);
        }
    }, [cLoading, userId]);

    useEffect(() => {
        let idToUse = 0;
        if (cLoading === one) {
            idToUse = userId || 0;
        }
        gptList(idToUse);
        setIsMounted(true);
    }, [cLoading, userId]);
      useEffect(() => {
        if (one) {
            setIdToUse(userId || 0);
        } else if (all) {
            setIdToUse(0);
        }
    }, [one, all, userId]);
return (
<>
    <div className={Styles.main}>
        <div className={Styles.left}>
            <img src={src} className={Styles.logo1}/>
            <div className={Styles.changeDiv}>
                <button className={Styles.change1} onClick={() => onImageChange()}>画像を変更<img src='/HomeImage/arrow.png' className={Styles.changeIcon}/></button>
            </div>
        </div>
        <div className={Styles.right}>
            <input type="text" className={Styles.gptName1} placeholder={placeholder} style={style} onChange={handleChange}/>
            <div className={Styles.gptSetting1} style={style}>
                <div className={Styles.gender}>
                    <div className={Styles.genderTitle}>性別：</div>
                    <select className={Styles.genderSelect} onChange={(e) => onSelectChange(indexSelect, e.target.value)}>
                        <option value="null">選択してください</option>
                        <option value="boy">男性</option>
                        <option value="girl">女性</option>
                        <option value="another">その他</option>
                    </select>
                </div>
                <div className={Styles.position}>
                    <div className={Styles.positionTitle}>立場：</div>
                    <input name={`group${indexRadio}`} onChange={(e) => { setCPosition(positive); onRadioChange(indexRadio, e.target.value); }} type="radio" value='positive' id={positive} className={Styles.positionRadio1} checked={cPosition === positive}/>
                    <label htmlFor={positive} className={Styles.positiveLabel} >肯定</label>
                    <input type="radio" name={`group${indexRadio}`} value='negative' id={negative} className={Styles.positionRadio2} checked={cPosition === negative} onChange={(e) => { setCPosition(negative); onRadioChange(indexRadio, e.target.value); }}/>
                    <label htmlFor={negative} className={Styles.negativeLabel} >否定</label>
                </div>
                <div className={Styles.character}>
                    <div className={Styles.characterTitle}>性格：</div>
                    <input type="text" className={Styles.characterInput} placeholder='新しく性格を作る' value={selectedCharacter} onChange={handleInputChange}/>
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
                    {isMounted && (
                    <Select className="basic-single" classNamePrefix="select" isClearable={isClearable}
                        isSearchable={isSearchable} name="color" placeholder="既存の性格を選ぶ" options={options}
                        onChange={handleSelectChange} 
                        />
                        )}
                        <div style={{
                        color: 'hsl(0, 0%, 40%)',
                        display: 'inline-block',
                        fontSize: 12,
                        fontStyle: 'italic',
                        marginTop: '1em',
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default HomeGpt