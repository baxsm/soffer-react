import React from 'react'
import ImageModal from '../component/ImageModal'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DoneIcon from '@mui/icons-material/Done';

function Steps() {

    const stepsList = [
        {
            title: 'Install the Software',
            subtitle: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit',
            icon: <FileDownloadIcon
                sx={{
                    color: '#fff',
                    background: '#4ac4f3',
                    padding: '8px',
                    fontSize: '2.5rem',
                    borderRadius: '100px',
                }}
            />,
        },
        {
            title: 'Setup Your Profile',
            subtitle: 'Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo',
            icon: <AccountBoxIcon
                sx={{
                    color: '#fff',
                    background: '#4ac4f3',
                    padding: '8px',
                    fontSize: '2.5rem',
                    borderRadius: '100px',
                }}
            />,
        },
        {
            title: 'Enjoy The Features',
            subtitle: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna',
            icon: <DoneIcon
                sx={{
                    color: '#fff',
                    background: '#4ac4f3',
                    padding: '8px',
                    fontSize: '2.5rem',
                    borderRadius: '100px',
                }}
            />,
        },
    ]

    const styles = {
        wrapper: 'py-[4rem]',
        container: 'flex justify-center place-items-center flex-col lg:flex-row gap-[4rem] py-[2rem] px-[1rem] lg:px-[6rem]',
        leftContainer: 'w-full h-full',
        rightContainer: 'flex flex-col gap-[1rem]',
        titleContainer: '',
        title: 'text-primary900 text-[2.5rem] font-bold',
        subtitleContainer: '',
        subtitle: 'text-[1rem] text-[#757575]',
        listContainer: 'flex flex-col gap-[1.5rem]',
        listItem: 'flex gap-[1.5rem] relative listItemAfter after:inline-block after:mt-[2rem] after:content-[""] after:absolute after:w-[1px] after:h-full after:top-0 after:left-[20px] after:bg-[#4ac4f3]',
        iconContainer: '',
        listContent: 'flex flex-col gap-[0.5rem]',
        listTitle: 'text-[1.25rem] text-primary900 font-[700]',
        listSubtitle: 'text-[1rem] text-[#959595]',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <ImageModal src='/images/process.jpg' alt='steps image' />
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>Three Simple Steps To Start Working With</h2>
                    </div>
                    <div className={styles.subtitleContainer}>
                        <p className={styles.subtitle}>Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                    </div>
                    <div className={styles.listContainer}>
                        {
                            stepsList.map((item, index) => {
                                return (
                                    <div className={styles.listItem} key={index}>
                                        <div className={styles.iconContainer}>
                                            {item.icon}
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
                </div>
            </div>
        </div>
    )
}

export default Steps