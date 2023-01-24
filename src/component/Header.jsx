import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'

function Header() {

    const styles = {
        wrapper: 'bg-primary500 duration-300',
        wrapperSticky: 'bg-[#fff] fixed z-[10] w-full top-[2rem] opacity-0 duration-300',
        wrapperStickyVisible: 'block opacity-[1] top-[0]',
        container: 'py-[0.6rem] px-[2rem] flex justify-between place-items-center',
        containerSticky: 'py-[0.4rem] px-[2rem] flex justify-between place-items-center',
        logoContainer: '',
        logo: 'text-[2.5rem] text-[#f0f0f0] font-bold',
        logoSticky: 'text-[2.5rem] text-primary500 font-bold',
        navContainer: 'flex justify-center place-items-center gap-[1.5rem]',
        navItemContainer: '',
        navItem: 'text-[1rem] text-[#fff] font-[600] duration-300',
        navItemSticky: 'text-[1rem] text-black font-[600] hover:text-primary500 duration-300',
        trailButton: 'duration-300',
    }

    const navigationLinks = [
        {
            title: 'Home',
            ref: '#',
        },
        {
            title: 'About',
            ref: '#about',
        },
        {
            title: 'Overview',
            ref: '#overview',
        },
        {
            title: 'Features',
            ref: '#features',
        },
        {
            title: 'Pricing',
            ref: '#pricing',
        },
        {
            title: 'Testimonial',
            ref: '#testimonial',
        },
        {
            title: 'Contact',
            ref: '#contact',
        },
    ]

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(function mount() {

        function onScroll() {
            if (this.scrollY >= 20) {
                setIsScrolled(true)
            }
            else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return (
        <>
            <div className={styles.wrapper} id="header">
                <div className={styles.container}>
                    <div className={styles.logoContainer}>
                        <a href="/#">
                            <h3 className={styles.logo}>soFFer</h3>
                        </a>
                    </div>
                    <div className={styles.navContainer}>
                        {
                            navigationLinks.map((item, index) => {
                                return (
                                    <div className={styles.navItemContainer} key={index}>
                                        <a className={styles.navItem} href={item.ref}>{item.title}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.trailButton}>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: '100px',
                                padding: '0.6rem 1.5rem',
                                background: '#fff',
                                color: '#4ac4f3',
                                "&:hover": {
                                    background: '#fff',
                                    color: '#4ac4f3',
                                },
                                position: 'relative',
                            }}
                        >
                            Free Trail
                        </Button>
                    </div>
                </div>
            </div>
            <div className={isScrolled ?  styles.wrapperSticky + ' ' + styles.wrapperStickyVisible : 'hidden ' + styles.wrapperSticky} id="header">
                <div className={styles.containerSticky}>
                    <div className={styles.logoContainer}>
                        <a href="/#">
                            <h3 className={styles.logoSticky}>soFFer</h3>
                        </a>
                    </div>
                    <div className={styles.navContainer}>
                        {
                            navigationLinks.map((item, index) => {
                                return (
                                    <div className={styles.navItemContainer} key={index}>
                                        <a className={styles.navItemSticky} href={item.ref}>{item.title}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.trailButton}>
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
                                }
                            }}
                        >
                            Free Trail
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header