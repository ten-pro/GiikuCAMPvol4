import Styles from '@/styles/Home/Home.module.scss'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function HomeGpt() {
return (
<> 
<div className={Styles.top}>
        <div className={Styles.titleText}>お題：</div>
        <input type="text" className={Styles.titleInput} placeholder='入力してください' />
    </div>
</>
)
}

export default HomeGpt