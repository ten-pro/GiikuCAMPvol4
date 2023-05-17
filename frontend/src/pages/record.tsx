import Left from '@/components/Record/RecordLeft'
import Right from '@/components/Record/RecordRight'
import Styles from '@/styles/Record/Record.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Home() {
return (
<>
    <div className={Styles.record}>
        <Left />
        <Right />
    </div>
</>
)
}

export default Home
