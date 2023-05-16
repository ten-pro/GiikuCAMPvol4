import Styles from '@/styles/Home/Home.module.scss'

import { Inter } from 'next/font/google'

interface HomeButtonProps {
    text: string;
    src: string;
  }
const inter = Inter({ subsets: ['latin'] })

function HomeGpt({ text, src }: HomeButtonProps) {
return (
<>
    <div className={Styles.button}>
        <button className={Styles.buttonDesign}>{text} <img src={src}/></button>
    </div>
</>
)
}

export default HomeGpt