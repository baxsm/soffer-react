import React from 'react'
import PricingCard from '../component/Pricing/PricingCard'

const priceCardsData = [
    {
        type: 'standard',
        price: 29.99,
        features: [
            {
                description: 'HTML5 & CSS3',
                included: true,
            },
            {
                description: 'Bootstrap v5',
                included: true,
            },
            {
                description: 'Responsive Layout',
                included: true,
            },
            {
                description: 'Cross-browser Support',
                included: false,
            },
            {
                description: 'Remove Author\'s Credit',
                included: false,
            },
            {
                description: 'PHP & Ajax Contact Form',
                included: false,
            },
            {
                description: '6 Months Free Support',
                included: false,
            },
        ],
        isDark: true
    },
    {
        type: 'professional',
        price: '49.99',
        features: [
            {
                description: 'HTML5 & CSS3',
                included: true,
            },
            {
                description: 'Bootstrap v5',
                included: true,
            },
            {
                description: 'Responsive Layout',
                included: true,
            },
            {
                description: 'Cross-browser Support',
                included: true,
            },
            {
                description: 'Remove Author\'s Credit',
                included: true,
            },
            {
                description: 'PHP & Ajax Contact Form',
                included: false,
            },
            {
                description: '6 Months Free Support',
                included: false,
            },
        ],
        isDark: false
    },
    {
        type: 'ultimate',
        price: 79.99,
        features: [
            {
                description: 'HTML5 & CSS3',
                included: true,
            },
            {
                description: 'Bootstrap v5',
                included: true,
            },
            {
                description: 'Responsive Layout',
                included: true,
            },
            {
                description: 'Cross-browser Support',
                included: true,
            },
            {
                description: 'Remove Author\'s Credit',
                included: true,
            },
            {
                description: 'PHP & Ajax Contact Form',
                included: true,
            },
            {
                description: '6 Months Free Support',
                included: true,
            },
        ],
        isDark: true
    },
]

function Pricing() {

    const styles = {
        wrapper: 'py-[6rem]',
        container: 'px-[1rem] xl:px-[6rem] flex flex-col gap-[1rem]',
        header: 'flex flex-col gap-[1rem] text-center justify-center place-items-center',
        title: 'text-[2.5rem] text-primary900 font-[700]',
        subtitle: 'lg:w-[50%] text-[#757575]',
        cardsContainer: 'grid grid-cols-1 gap-[2rem] lg:grid-cols-3 place-items-center pt-[2rem]',
    }   

    return (
        <section id="pricing">
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Pricing Plan</h2>
                        <p className={styles.subtitle}>Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo</p>
                    </div>
                    <div className={styles.cardsContainer}>
                        {
                            priceCardsData.map((card, index) => {
                                return (
                                    <PricingCard data={card} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
