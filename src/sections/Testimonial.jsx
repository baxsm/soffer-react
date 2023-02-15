import React from 'react'

function Testimonial() {
    const styles = {
        wrapper: 'py-[6rem]',
        container: 'px-[1rem] xl:px-[6rem] flex flex-col gap-[1rem]',
        header: 'flex flex-col gap-[1rem] text-center justify-center place-items-center',
        title: 'text-[2.5rem] text-primary900 font-[700]',
        subtitle: 'lg:w-[50%] text-[#757575]',

    }

    return (
        <section id="pricing">
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Pricing Plan</h2>
                        <p className={styles.subtitle}>Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo</p>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
