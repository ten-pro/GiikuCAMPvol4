import Styles from '@/styles/Record/Record.module.scss'
import Book from '@/components/Record/RecordBook'
import Bottom from '@/components/Record/RecordBottom'
import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

interface RightProps {
    books: number;
    bookNumber:(bookIndex: number) => void;
    bookTitles: string[];
}
function RecordRight({ books, bookNumber, bookTitles }: RightProps) {
    const colors = ['#ff0000', '#FB37FF', '#00A8A8', '#CC00FF', '#FFD56A'];
    
    const handleClick = (bookIndex: number) => {
        bookNumber(bookIndex);
        console.log(bookIndex);
    };

    return (
        <div className={Styles.right}>
            <div className={Styles.pageTitle}>
                <div className={Styles.pTitle}>議事録</div>
            </div>
            <div className={Styles.bookArea}>
                {[...Array(Math.ceil(books/5))].map((_, i) => (
                    <div key={i} className={Styles.bookLine}>
                        <div className={Styles.bookTop}>
                            {[...Array(5)].map((_, j) => {
                                const bookIndex = i * 5 + j;
                                return (
                                    <div key={j} onClick={() => handleClick(bookIndex)}>
                                        <Book color={bookIndex < books ? colors[bookIndex % colors.length] : 'transparent'}
                                        isVisible={bookIndex < books}
                                        bookTitle={bookTitles[bookIndex] || ''}/>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={Styles.bookBottom}>
                            <Bottom />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecordRight;
