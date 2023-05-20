import Left from '@/components/Record/RecordLeft'
import Right from '@/components/Record/RecordRight'
import Styles from '@/styles/Record/Record.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function record() {
    const [books, setBooks] = useState(0);
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
            console.log(res.data);
            console.log(res.data.length);
            setBooks(res.data.length)
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        get_record();
    }, []); 
return (
<>
    <div className={Styles.record}>
        <Left />
        <Right books={12}/>
        {/* <Right books={books}/> */}
    </div>
</>
)
}

export default record
