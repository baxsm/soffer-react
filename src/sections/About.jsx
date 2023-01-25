import React from 'react'
import ImageModal from '../component/ImageModal'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@mui/material';

function About() {

    const listData = [
        {
            title: 'First Working Process',
            subtitle: 'Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo magna',
        },
        {
            title: '24/7 Hours Support',
            subtitle: 'Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo magna',
        },
    ]

    const styles = {
        wrapper: 'mx-auto mt-[4rem]',
        container: 'flex flex-col-reverse lg:flex-row justify-center place-items-center gap-[4rem] py-[2rem] px-[1rem] lg:px-[6rem]',
        leftContainer: 'lg:w-[80%]',
        titleContainer: '',
        title: 'text-[2.5rem] font-[700] text-primary900',
        subtitleContainer: 'pt-[1rem]',
        subtitle: 'text-[1rem] text-[#656565]',
        listWrapper: 'pt-[1rem] flex flex-col gap-[1rem]',
        listContainer: 'flex gap-[1.5rem]',
        iconContainer: '',
        listContent: 'flex gap-[0.5rem] flex-col',
        listTitle: 'text-[1.25rem] text-primary900 font-[600]',
        listSubtitle: 'text-[1rem] text-[#757575]',
        buttonContainer: 'pt-[2rem]'
    }

    return (
        <section id="about">
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.leftContainer}>
                        <div className={styles.titleContainer}>
                            <h1 className={styles.title}>Manage & Push Your Business To The Next Level</h1>
                        </div>
                        <div className={styles.subtitleContainer}>
                            <p className={styles.subtitle}>Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                        </div>
                        <div className={styles.listWrapper}>
                            {
                                listData.map((item, index) => {
                                    return (
                                        <div className={styles.listContainer} key={index}>
                                            <div className={styles.iconContainer}>
                                                <CheckCircleIcon
                                                    sx={{
                                                        fontSize: '3rem',
                                                        color: '#4ac4f3',
                                                    }}
                                                />
                                            </div>
                                            <div className={styles.listContent}>
                                                <h5 className={styles.listTitle}>{item.title}</h5>
                                                <p className={styles.listSubtitle}>{item.subtitle}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button
                                variant='contained'
                                sx={{
                                    background: '#4ac4f3',
                                    borderRadius: '100px',
                                    padding: '1rem 3rem',
                                    color: '#fff',
                                    "&:hover": {
                                        background: '#4ac4f3',
                                        color: '#fff',
                                    },
                                }}
                            >
                                Read More
                            </Button>
                        </div>
                    </div>
                    <div className={styles.rightContainer}>
                        <ImageModal src='/images/about.jpg' alt='about image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About