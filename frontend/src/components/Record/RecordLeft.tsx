import Styles from '@/styles/Record/Record.module.scss'
import LeftContnts from '@/components/Record/RecordLeftContents'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
interface homeProps {
    title: string;
    names: string[];
    positions: string[];
}
function RecordLeft({ title, names, positions }:homeProps) {
    const handle = () =>{
        window.location.href = "/home";
    }
return (
<>
    <div className={Styles.left}>
        <div className={Styles.buttonLine}>
            <button className={Styles.homeButton} onClick={handle}>く&nbsp;ホーム画面</button>
        </div>
        <div className={Styles.leftBottom}>
            <div className={Styles.leftBottomm}>
                <div className={Styles.title}>
                    <div className={Styles.titleText}>タイトル：</div>
                    <div className={Styles.titleVar}>{ title }</div>
                </div>
                <LeftContnts name={names[0]} position={positions[0]} />
                <LeftContnts name={names[1]} position={positions[1]} />
                <LeftContnts name={names[2]} position={positions[2]} />
                <LeftContnts name={names[3]} position={positions[3]} />
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
