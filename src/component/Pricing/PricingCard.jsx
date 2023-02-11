import React from 'react'

function PricingCard({ data }) {

    const { type, price, features, isDark } = data

    console.log(type)

    const styles = {
        wrapper: `min-w-[100%] lg:min-w-[350px] ${isDark ? 'bg-primary900' : 'bg-primary500'} rounded-xl`,
        container: '',
        header: 'flex flex-col gap-[1rem] p-6',
        typeContainer: '',
        type: 'text-[#fff] text-[1.25rem] capitalize font-[500]',
        priceContainer: 'text-[#fff] leading-[1.5]',
        priceDollar: 'align-top text-[1.5rem] font-[500]',
        price: `inline leading-[1.2] text-[2.5rem] font-[700] ${isDark ? 'text-primary500' : 'text-primary900'}`,
        priceMonth: 'align-bottom text-[1rem] leading-[1.5]',
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
            </div>
        </div>
    )
}

export default PricingCard
