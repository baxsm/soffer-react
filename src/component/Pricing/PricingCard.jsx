import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function PricingCard({ data }) {

    const { type, price, features, isDark } = data

    const styles = {
        wrapper: `min-w-[100%]  shadow-md hover:mt-[-1rem] duration-500 rounded-xl`,
        container: '',
        header: `flex flex-col gap-[1rem] p-6 ${isDark ? 'bg-primary900' : 'bg-primary500'} rounded-t-xl`,
        typeContainer: '',
        type: 'text-[#fff] text-[1.25rem] capitalize font-[500]',
        priceContainer: 'text-[#fff] leading-[1.5]',
        priceDollar: 'align-top text-[1.5rem] font-[500]',
        price: `inline leading-[1.2] text-[2.5rem] font-[700] ${isDark ? 'text-primary500' : 'text-primary900'}`,
        priceMonth: 'align-bottom text-[1rem] leading-[1.5]',
        features: 'flex flex-col gap-[1rem] py-8 p-4 bg-[#fff]',
        feature: 'flex justify-between place-items-center px-2',
        description: 'text-[#959595]',
        buttonContainer: 'bg-[#fff] px-6 pb-6 rounded-b-xl',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.typeContainer}>
                        <h5 className={styles.type}>{type}</h5>
                    </div>
                    <div className={styles.priceContainer}>
                        <span className={styles.priceDollar}>$</span>
                        {" "}
                        <p className={styles.price}>{price}</p>
                        {" "}
                        <span className={styles.priceMonth}> / Month</span>
                    </div>
                </div>
                <div className={styles.features}>
                    {
                        features.map((feature, index) => {
                            const { description, included } = feature;
                            return (
                                <div className={styles.feature} key={index}>
                                    <p className={styles.description}>{description}</p>
                                    {
                                        included ? (
                                            <div className="">
                                                <DoneIcon
                                                    sx={{
                                                        color: 'green',
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <div className="">
                                                <CloseIcon
                                                    sx={{
                                                        color: 'red'
                                                    }}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.buttonContainer}>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: '100px',
                            padding: '0.6rem 1.5rem',
                            background: isDark ? '#0f2731' : '#4ac4f3',
                            color: '#fff',
                            "&:hover": {
                                background: isDark ? '#0f2731' : '#4ac4f3',
                                color: '#fff',
                            },
                            position: 'relative',
                        }}
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PricingCard
