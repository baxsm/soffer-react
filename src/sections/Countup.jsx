import React, { useState } from 'react'
import DownloadingIcon from '@mui/icons-material/Downloading';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CountUp, { useCountUp } from 'react-countup';

function Countup() {

    const countData = [
        {
            name: 'Active Install',
            count: 7264,
            icon: <DownloadingIcon
                sx={{
                    fontSize: '3.5rem',
                    color: '#fff',
                }}
            />,
        },
        {
            name: 'Satisfied Clients',
            count: 6521,
            icon: <PeopleIcon
                sx={{
                    fontSize: '3.5rem',
                    color: '#fff',
                }}
            />,
        },
        {
            name: 'Award Wins',
            count: 729,
            icon: <EmojiEventsIcon
                sx={{
                    fontSize: '3.5rem',
                    color: '#fff',
                }}
            />,
        },
        {
            name: 'Client Reviews',
            count: 5917,
            icon: <FormatQuoteIcon
                sx={{
                    fontSize: '3.5rem',
                    color: '#fff',
                }}
            />,
        },
    ]

    const styles = {
        wrapper: 'py-[6rem] bg-primary500',
        container: 'px-[1rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-[1rem] w-full md:w-[90%] lg:w-[80%]',
        contentContainer: 'flex flex-col justify-center place-items-center',
        iconContainer: '',
        countContainer: '',
        count: 'text-[2.5rem] text-primary900 font-[700]',
        nameContainer: '',
        name: 'text-[1rem] text-[#fff] text-center',
    }

    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {
                    countData.map((item, index) => {
                        return (
                            <div className={styles.contentContainer} key={index}>
                                <div className={styles.iconContainer}>
                                    {item.icon}
                                </div>
                                <div className={styles.countContainer}>
                                    <CountUp
                                        start={item.count - 450}
                                        end={item.count}
                                        enableScrollSpy={true}
                                        scrollSpyOnce={true}
                                    >
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span className={styles.count} ref={countUpRef} />
                                            </div>
                                        )}
                                    </CountUp>
                                </div>
                                <div className={styles.nameContainer}>
                                    <h5 className={styles.name}>{item.name}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Countup