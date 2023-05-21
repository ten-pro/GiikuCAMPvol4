import Left from '@/components/Record/RecordLeft'
import Right from '@/components/Record/RecordRight'
import Styles from '@/styles/Record/Record.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function record() {
    const [books, setBooks] = useState(0);
    const [bookIndex, setBookIndex] = useState<number>(0);
    const [titleText, setTitleText] = useState('');
    const [bookTitles, setBookTitles] = useState<string[]>([]);
    const [names, setNames] = useState<string[]>([]);
    const [positions, setPositions] = useState<string[]>([]);

    const get_record = async () => {
        try {
            const res = await axios.post(
                'https://mp-class.chips.jp/debate/Main.php',
                {
                    get_minutes: '',
                    user_id: 1
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            const titles = res.data.map((item: any) => item.title);
            const names = res.data[bookIndex].gpts.map((item: any) => item.gpt_name); 
            const positions = res.data[bookIndex].gpts.map((item: any) => item.gpt_character);
            setPositions(positions);
            setNames(names);
            setBookTitles(titles);
            console.log(res.data);
            setTitleText(res.data[bookIndex].title);
            setBooks(res.data.length)
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        get_record();
    }, [bookIndex]); 

    const bookClick = (bookIndex: number) => {
        setBookIndex(bookIndex);
        // console.log(`Book index ${bookIndex} selected.`);
        console.log(titleText);
    };
return (
<>
    <div className={Styles.record}>
        <Left title={titleText} names={names} positions={positions}/>
        <Right books={books} bookNumber={bookClick} bookTitles={bookTitles}/>

    </div>
</>
)
}

export default record
