// import BackGround_login from '@/components/Login/BackGround_login'
// import AppName_login from '@/components/Login/AppName_login'
// import Card_login from '@/components/Login/Card_login'
import Styles from '@/styles/Home/Home.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Home() {
return (
<>
    <div className={Styles.titleText}>お題：</div>
    {/*
    <BackGround_login />
    <AppName_login />
    <Card_login /> */}
</>
)
}

export default Home