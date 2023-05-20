import Styles from '@/styles/Record/Record.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function RecordBottom() {
return (
<>
    <div className={Styles.bottom}></div>
</>
)
}

export default RecordBottom
