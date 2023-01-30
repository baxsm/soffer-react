import React from 'react'
import ImageModal from '../component/ImageModal'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@mui/material';

function Overview() {

    const overviewData = [
        {
            id: '01',
            title: 'App Integration',
            subtitle: 'Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet',
            listData: [
                {
                    title: 'Fully customizable',
                },
                {
                    title: 'User friendly interface',
                },
                {
                    title: 'More effective & poerwfull',
                },
            ],
            imageSource: '/images/overview-1.jpg',
        },
        {
            id: '02',
            title: 'App Customization',
            subtitle: 'Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet',
            listData: [
                {
                    title: 'Fully customizable',
                },
                {
                    title: 'User friendly interface',
                },
                {
                    title: 'More effective & poerwfull',
                },
            ],
            imageSource: '/images/overview-2.jpg',
        },
        {
            id: '03',
            title: 'App Modification',
            subtitle: 'Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet',
            listData: [
                {
                    title: 'Fully customizable',
                },
                {
                    title: 'User friendly interface',
                },
                {
                    title: 'More effective & poerwfull',
                },
            ],
            imageSource: '/images/overview-3.jpg',
        },

    ]

    const styles = {
        wrapper: 'mx-auto bg-secondary py-[2rem]',
        container: 'pt-[2rem] lg:[&>*:nth-child(even)]:flex-row py-[4rem]',
        contentContainer: 'flex flex-col-reverse lg:flex-row-reverse justify-center place-items-center gap-[4rem] py-[2rem] px-[1rem] lg:px-[6rem]',
        leftContainer: 'lg:w-[80%]',
        titleContainer: 'flex place-items-center',
        title: 'text-[2.5rem] font-[700] text-primary900',
        title2: 'text-[1.25rem] font-[700] text-primary900',
        subtitleContainer: 'pt-[1rem]',
        subtitle: 'text-[1rem] text-[#656565]',
        listWrapper: 'pt-[1rem] flex flex-col gap-[1rem]',
        listContainer: 'flex gap-[1.5rem] place-items-center',
        iconContainer: '',
        listContent: 'flex gap-[0.5rem] flex-col',
        listTitle: 'text-[1rem] text-[#757575] font-[600]',
        listSubtitle: 'text-[1rem] text-[#757575]',
        buttonContainer: 'pt-[2rem]',
        rightContainer: '',
        titleDivider: 'w-[30px] h-[2px] bg-primary500 mx-[0.5rem] text-[transparent]'
    }

    return (
        <section id="overview">
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {
                        overviewData.map((item, index) => {
                            return (
                                <div className={styles.contentContainer} key={index}>
                                    <div className={styles.leftContainer}>
                                        <div className={styles.titleContainer}>
                                            <h1 className={styles.title}>{item.id}</h1>
                                            <span className={styles.titleDivider}></span>
                                            <h5 className={styles.title2}>{item.title}</h5>
                                        </div>
                                        <div className={styles.subtitleContainer}>
                                            <p className={styles.subtitle}>{item.subtitle}</p>
                                        </div>
                                        <div className={styles.listWrapper}>
                                            {
                                                item.listData.map((list, i) => {
                                                    return (
                                                        <div className={styles.listContainer} key={i}>
                                                            <div className={styles.iconContainer}>
                                                                <CheckCircleIcon
                                                                    sx={{
                                                                        fontSize: '1.25rem',
                                                                        color: '#4ac4f3',
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className={styles.listContent}>
                                                                <h5 className={styles.listTitle}>{list.title}</h5>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className={styles.rightContainer}>
                                        <ImageModal src={item.imageSource} alt='overview image' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Overview