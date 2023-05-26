import Styles from '@/styles/Home/Home.module.scss'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
interface titleProps {
    onTitleChange: (newTitle: string) => void; 
}
function HomeGpt({onTitleChange}: titleProps) {
return (
<> 
<div className={Styles.top}>
        <div className={Styles.titleText}>お題：</div>
        <input type="text" className={Styles.titleInput} placeholder='入力してください' onChange={event => onTitleChange(event.target.value)} />
    </div>
</>
)
}

export default HomeGpt