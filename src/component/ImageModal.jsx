import React from 'react'

function ImageModal({src, alt, shadow = true}) {

    const styles = {
        common: 'rounded-xl cursor-pointer duration-300',
        shadow: 'shadow-md duration-300 hover:shadow-xl',
    }

  return (
    <div>
        <img src={src} alt={alt} className={shadow ? styles.common + ' ' + styles.shadow : styles.common}/>
    </div>
  )
}

export default ImageModal