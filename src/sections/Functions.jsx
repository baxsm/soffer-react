import React from 'react'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoopIcon from '@mui/icons-material/Loop';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';

function Functions() {

    const functionList = [
        {
            title: 'Fully Customizable',
            subtitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
            icon: <AppRegistrationIcon 
                sx={{
                    color: '#3b9dc2',
                    fontSize: '3.5rem',
                }}
            />,
        },
        {
            title: 'App Integration',
            subtitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
            icon: <LoopIcon 
                sx={{
                    color: '#3b9dc2',
                    fontSize: '3.5rem',
                }}
            />,
        },
        {
            title: 'Drag & Drop',
            subtitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
            icon: <HighlightAltIcon 
                sx={{
                    color: '#3b9dc2',
                    fontSize: '3.5rem',
                }}
            />,
        },
    ]

    const styles = {
        wrapper: 'mx-auto mt-[2rem] py-[4rem] px-[1rem] md:px-[6rem]',
        container: 'grid grid-cols-1 lg:grid-cols-3 gap-[1.5rem] text-center place-items-center',
        listContainer: 'flex flex-col justify-center place-items-center gap-[1rem] bg-primary100 px-[2rem] py-[3rem] rounded-xl shadow-md duration-500 relative top-0 hover:top-[-0.5rem] hover:shadow-xl',
        listIconContainer: '',
        listTitleContainer: '',
        listTitle: 'text-primary900 text-[1.25rem] font-[700]',
        listSubtitleContainer: 'md:px-[2rem]',
        listSubtitle: 'text-[#555] text-[1rem]',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {
                    functionList.map((item, index) => {
                        return (
                            <div className={styles.listContainer} key={index}>
                                <div className={styles.listIconContainer}>
                                    {item.icon}
                                </div>
                                <div className={styles.listTitleContainer}>
                                    <h3 className={styles.listTitle}>{item.title}</h3>
                                </div>
                                <div className={styles.listSubtitleContainer}>
                                    <p className={styles.listSubtitle}>{item.subtitle}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Functions