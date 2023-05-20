import Styles from '@/styles/Record/Record.module.scss'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
interface settingProps {
    name: string;
    position: string;
}
function RecordLeftContents({name, position }:settingProps) {
return (
<>
   <div className={Styles.bottomContents}>
        <div className={Styles.nameCon}>
            <div className={Styles.nameTitle}>名前：</div>
            <div className={Styles.nameVar}>{ name }</div>
        </div>
        <div className={Styles.positionCon}>
            <div className={Styles.positionTitle}>性格：</div>
            <div className={Styles.positionVar}>{ position }</div>
        </div>
   </div>
</>
)
}

export default RecordLeftContents
