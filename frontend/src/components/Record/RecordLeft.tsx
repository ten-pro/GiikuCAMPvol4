import Styles from '@/styles/Record/Record.module.scss'
import LeftContnts from '@/components/Record/RecordLeftContents'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Home() {
return (
<>
    <div className={Styles.left}>
        <div className={Styles.buttonLine}>
        <button className={Styles.homeButton}>く&nbsp;ホーム画面</button>
        </div>
        <div className={Styles.leftBottom}>
        <div className={Styles.title}>
        <div className={Styles.titleText}>タイトル：</div>
        <div className={Styles.titleVar}>必要なのは電気  OR  ガス</div>
        </div>
            <LeftContnts name='Ada' position='頭でっかち'/>
            <LeftContnts name='Babbage' position='命知らず'/>
            <LeftContnts name='Curie' position='正直者'/>
            <LeftContnts name='Davinci' position='力自慢'/>
        </div>
    </div>
</>
)
}

export default Home
