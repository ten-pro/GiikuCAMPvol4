import Styles from '@/styles/Home/Home.module.scss'

import { Inter } from 'next/font/google'

interface HomeButtonProps {
    text: string;
    functionButton: () => void;
  }
const inter = Inter({ subsets: ['latin'] })

function HomeGpt({ text, functionButton }: HomeButtonProps) {
return (
<>
    <div className={Styles.button}>
        <button className={Styles.buttonDesign} onClick={functionButton}>{text}</button>
    </div>
</>
)
}

export default HomeGpt