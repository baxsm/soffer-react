/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function TestimonialCard({ data }) {
  return (
    <div className="bg-secondary flex flex-col items-start justify-start gap-4 px-10 py-8 rounded-xl">
      <div className="">
        <h5 className='text-xl font-[400] text-[#858585] leading-[30px] text-justify'>
          <FormatQuoteIcon sx={{
            fontSize: '12rem',
            zIndex: '2',
            color: '#4ac4f3',
            marginBottom: '-20rem',
            marginLeft: '-2rem',
            position: 'relative',
            top: '-12rem',
            left: '1rem',
          }}/>
          {data.description}
        </h5>
      </div>
      <div className="flex items-center gap-8">
        <div className="">
          <img src={data.imageUrl} alt="user-image" className='w-[5rem] h-[5rem] object-cover rounded-full' />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className='text-2xl font-[500] text-primary900'>{data.name}</h5>
          <p className='text-[1rem] text-[#858585]'>{data.profession}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard