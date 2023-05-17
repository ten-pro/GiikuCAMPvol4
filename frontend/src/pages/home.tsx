import HomeTitle from '@/components/Home/HomeTitle'
import HomeGpt from '@/components/Home/HomeGpt'
import HomeButton from '@/components/Home/HomeButton'
import Styles from '@/styles/Home/Home.module.scss'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Home() {
return (
<>
    <HomeTitle />
    <div style={{display: "flex"}}>
        <HomeGpt color="#ff0000" src="/HomeImage/gptLogo1.png" placeholder='Ada' position='1' loading='11' positive='111' negative='a' one='aa' all='aaa'/>
        <HomeGpt color="#CC00FF" src="/HomeImage/gptLogo2.png" placeholder='Babbage' position='2' loading='22' positive='222' negative='b' one='bb' all='bbb'/>
    </div>
    <div style={{display: "flex"}}>
        <div style={{display: "flex"}}>
            <HomeGpt color="#33E9E9" src="/HomeImage/gptLogo3.png" placeholder='Curie' position='3' loading='33' positive='333' negative='c' one='cc' all='ccc'/>
            <HomeGpt color="#FFD56A" src="/HomeImage/gptLogo4.png" placeholder='Davinci' position='4' loading='44' positive='444' negative='d' one='dd' all='ddd'/>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <HomeButton text="議事録"/>
            <HomeButton text="スタート"/>
        </div>
    </div>
</>
)
}

export default Home

// color: string;
// src: string;
// placeholder: string;
// position: string;
// loading: string;
// positiveLabel: string;
// negativeLabel: string;
// oneLabel: string;
// allLabel: string;