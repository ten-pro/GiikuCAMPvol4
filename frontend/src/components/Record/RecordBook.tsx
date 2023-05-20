import Styles from '@/styles/Record/Record.module.scss'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
interface bookProps {
    color:string;
}
function RecordBook({ color }: bookProps) {
    const style = {
        boxShadow: `
        0 0 10px ${color},
        0 0 10px ${color},
        0 0 10px ${color},
        0 0 10px ${color}
        `,
      };
return (
<>
   <div className={Styles.book} style={style}>
    <div className={Styles.bookTitle}>タイトル</div>
   </div>
</>
)
}

export default RecordBook
