import Styles from '@/styles/Record/Record.module.scss'
import LeftContnts from '@/components/Record/RecordLeftContents'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
interface homeProps {
    title: string;
}
function RecordLeft({ title }:homeProps) {
return (
<>
    <div className={Styles.left}>
        <div className={Styles.buttonLine}>
            <button className={Styles.homeButton}>く&nbsp;ホーム画面</button>
        </div>
        <div className={Styles.leftBottom}>
            <div className={Styles.leftBottomm}>
                <div className={Styles.title}>
                    <div className={Styles.titleText}>タイトル：</div>
                    <div className={Styles.titleVar}>{ title }</div>
                </div>
                <LeftContnts name='Ada' position='頭でっかち' />
                <LeftContnts name='Babbage' position='命知らず' />
                <LeftContnts name='Curie' position='正直者' />
                <LeftContnts name='Davinci' position='力自慢' />
                <div className={Styles.openArea}>
                <div className={Styles.open}>議事録を開く</div>
            </div>
            </div>
            
        </div>
    </div>
</>
)
}

export default RecordLeft
