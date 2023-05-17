import Styles from '@/styles/Record/Record.module.scss'
import Book from '@/components/Record/RecordBook'
import Bottom from '@/components/Record/RecordBottom'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function RecordRight() {
return (
<>
    <div className={Styles.right}>
        <div className={Styles.bookArea}>
            <div className={Styles.bookLine}>
                <div className={Styles.bookTop}>
                    <Book color='#ff0000'/>
                    <Book color='#00A8A8'/>
                    <Book color='#FB37FF'/>
                    <Book color='#CC00FF'/>
                    <Book color='#FFD56A'/>
                </div>
                <div className={Styles.bookBottom}>
                    <Bottom />
                </div>
            </div>
            <div className={Styles.bookLine}>
                <div className={Styles.bookTop}>
                    <Book color='#ff0000'/>
                    <Book color='#00A8A8'/>
                    <Book color='#FB37FF'/>
                    <Book color='#CC00FF'/>
                    <Book color='#FFD56A'/>
                </div>
                <div className={Styles.bookBottom}>
                    <Bottom />
                </div>
            </div>
            <div className={Styles.bookLine}>
                <div className={Styles.bookTop}>
                    <Book color='#ff0000'/>
                    <Book color='#00A8A8'/>
                    <Book color='#FB37FF'/>
                    <Book color='#CC00FF'/>
                    <Book color='#FFD56A'/>
                </div>
                <div className={Styles.bookBottom}>
                    <Bottom />
                </div>
            </div>
            <div className={Styles.bookLine}>
                <div className={Styles.bookTop}>
                    <Book color='#ff0000'/>
                    <Book color='#00A8A8'/>
                    <Book color='#FB37FF'/>
                    <Book color='#CC00FF'/>
                    <Book color='#FFD56A'/>
                </div>
                <div className={Styles.bookBottom}>
                    <Bottom />
                </div>
            </div>
            <div className={Styles.bookLine}>
                <div className={Styles.bookTop}>
                    <Book color='#ff0000'/>
                    <Book color='#00A8A8'/>
                    <Book color='#FB37FF'/>
                    <Book color='#CC00FF'/>
                    <Book color='#FFD56A'/>
                </div>
                <div className={Styles.bookBottom}>
                    <Bottom />
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default RecordRight
