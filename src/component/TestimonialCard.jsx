/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function TestimonialCard({ data }) {

  const styles = {
    wrapper: 'bg-secondary flex flex-col items-start justify-start gap-4 p-8 rounded-xl shadow-md',
    description: 'text-xl font-[400] text-[#858585] leading-[30px] text-justify',
    quotation: '',
    contentContainer: 'flex items-center gap-8',
    image: 'w-[5rem] h-[5rem] object-cover rounded-full',
    bioContainer: 'flex flex-col gap-1',
    name: 'text-2xl font-[500] text-primary900',
    profession: 'text-[1rem] text-[#858585]',
  }

  return (
    <div className={styles.wrapper}>
      <div className="">
        <h5 className={styles.description}>
          <span className={styles.quotation}>&ldquo;</span>
          {data.description}
          <span className={styles.quotation}>&rdquo;</span>
        </h5>
      </div>
      <div className={styles.contentContainer}>
        <div className="">
          <img src={data.imageUrl} alt="user-image" className={styles.image} />
        </div>
        <div className={styles.bioContainer}>
          <h5 className={styles.name}>{data.name}</h5>
          <p className={styles.profession}>{data.profession}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard