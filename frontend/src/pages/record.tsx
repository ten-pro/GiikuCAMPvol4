import Left from '@/components/Record/RecordLeft'
import Right from '@/components/Record/RecordRight'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Home() {
return (
<>
    <Left />
    <Right />
</>
)
}

export default Home
