import React from 'react'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoopIcon from '@mui/icons-material/Loop';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import LaptopIcon from '@mui/icons-material/Laptop';

function Features() {

    const featureList = [
        {
            title: 'Fully Customizable',
            subtitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.',
            icon: <AppRegistrationIcon
                sx={{
                    color: '#4ac4f3',
                    fontSize: '3.5rem',
                    transition: '0.3s',
                }}
            />,
        },
        {
            title: 'App Integration',
            subtitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.',
            icon: <LoopIcon
                sx={{
                    color: '#4ac4f3',
                    fontSize: '3.5rem',
                    transition: '0.3s',
                }}
            />,
        },
        {
            title: 'High Resolution',
            subtitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.',
            icon: <LaptopIcon
                sx={{
                    color: '#4ac4f3',
                    fontSize: '3.5rem',
                    transition: '0.3s',
                }}
            />,
        },
        {
            title: 'Drag And Drop',
            subtitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.',
            icon: <HighlightAltIcon
                sx={{
                    color: '#4ac4f3',
                    fontSize: '3.5rem',
                    transition: '0.3s',
                }}
            />,
        },
    ]

    const styles = {
        wrapper: 'py-[6rem]',
        container: 'px-[1rem]',
        headerContainer: 'mx-auto text-center',
        titleContainer: '',
        title: 'text-primary900 font-bold text-[2.5rem]',
        subtitleContainer: 'w-full md:w-[80%] lg:w-[50%] mx-auto pt-[1rem]',
        subtitle: 'text-[1rem] text-[#656565]',
        cardsWrapper: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-[4rem] w-full lg:w-[85%] mx-auto gap-[1.5rem]',
        cardContainer: 'border-[1px] border-[#f9f9f9] min-h-[300px] flex justify-center place-items-center flex-col bg-[#fff] shadow-xl hover:shadow-2xl p-[1rem] gap-[1rem] rounded-xl duration-300 hover:bg-primary500 featureCard',
        cardIconContainer: 'text-center cardIcon',
        cardTitleContainer: 'text-center cardTitle',
        cardTitle: 'text-primary900 font-[500] text-[1.25rem] duration-300',
        cardSubtitleContainer: 'text-center cardSubtitle',
        cardSubtitle: 'text-[1rem] text-[#959595] duration-300',
    }

    return (
        <section id="features">
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.headerContainer}>
                        <div className={styles.titleContainer}>
                            <h2 className={styles.title}>Advanced Features</h2>
                        </div>
                        <div className={styles.subtitleContainer}>
                            <p className={styles.subtitle}>Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo</p>
                        </div>
                    </div>
                    <div className={styles.cardsWrapper}>
                        {
                            featureList.map((item, index) => {
                                return (
                                    <div className={styles.cardContainer} key={index}>
                                        <div className={styles.cardIconContainer}>
                                            {item.icon}
                                        </div>
                                        <div className={styles.cardTitleContainer}>
                                            <h5 className={styles.cardTitle}>{item.title}</h5>
                                        </div>
                                        <div className={styles.cardSubtitleContainer}>
                                            <p className={styles.cardSubtitle}>{item.subtitle}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features