import Styles from '@/styles/Home/Home.module.scss'

import { Inter } from 'next/font/google'

interface HomeButtonProps {
    text: string;
  }
const inter = Inter({ subsets: ['latin'] })

function HomeGpt({ text }: HomeButtonProps) {
return (
<>
    <div className={Styles.button}>
        <button className={Styles.buttonDesign}>{text}</button>
    </div>
</>
)
}

export default HomeGpt