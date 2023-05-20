// RecordBook.tsx
import Styles from '@/styles/Record/Record.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
interface bookProps {
    color:string;
    isVisible: boolean;
}

function RecordBook({ color, isVisible }: bookProps) {
    const style = {
        boxShadow: `
        0 0 10px ${color},
        0 0 10px ${color},
        0 0 10px ${color},
        0 0 10px ${color}
        `,
      };

    return (
        <div className={Styles.book} style={style}>
            <div className={Styles.bookTitle} style={{color: isVisible ? '#ffffff' : 'transparent'}}>タイトル</div>
        </div>
    );
}

export default RecordBook
