import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';
import ImageModal from '../component/ImageModal';

function Banner() {

    const styles = {
        wrapper: 'bg-primary500 mx-auto min-h-[100vh] relative',
        container: 'flex flex-col justify-center place-items-center py-[3rem] px-[1rem] md:px-[5rem] gap-[4rem] lg:flex-row z-[2] relative',
        leftContainer: '',
        titleContainer: '',
        title: 'text-[2.5rem] text-[#fff] font-[700] opacity-[0.92]',
        subtitleContainer: 'pt-[1rem]',
        subtitle: 'text-[1rem] text-[#fff] opacity-[0.85] font-[600]',
        inputContainer: 'pt-[2rem]',
        rightContainer: '',
        bottomBackground: 'absolute bottom-[0rem] z-[0]',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>
                            Awesome Software To Manage Your Business
                        </h1>
                    </div>
                    <div className={styles.subtitleContainer}>
                        <p className={styles.subtitle}>Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd dolor sed magna dolor.</p>
                    </div>
                    <div className={styles.inputContainer}>
                        <Paper
                            component="form"
                            sx={{
                                p: '0.6rem 1rem',
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                borderRadius: '100px',
                                border: '1px solid #b7e7fa',
                                transition: '0.3s',
                                "&:hover": {
                                    border: '1px solid #3b9dc2',
                                },
                                "&:focus": {
                                    border: '1px solid #3b9dc2',
                                }
                            }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Your Email"
                                inputProps={{ 'aria-label': 'your email' }}
                            />
                            <div className={styles.buttonContainer}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: '100px',
                                        padding: '0.6rem 1.5rem',
                                        background: '#4ac4f3',
                                        color: '#fff',
                                        "&:hover": {
                                            background: '#4ac4f3',
                                            color: '#fff',
                                        },
                                        position: 'relative',
                                    }}
                                >
                                    Free Trail
                                </Button>
                            </div>
                        </Paper>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <ImageModal src='/images/hero.jpg' alt='Banner Image' />
                </div>
            </div>
            <div className={styles.bottomBackground}>
                <img src="/images/bg-bottom.png" alt="" />
            </div>
        </div>
    )
}

export default Banner