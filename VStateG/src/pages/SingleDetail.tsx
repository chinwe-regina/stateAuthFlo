import React from 'react'

const SingleDetail = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-5'>
            <div className='col-span-1 md:col-span-2 bg-purple-600'>
                <img src="" alt="" className='w-full h-[500px]'/>
            </div>
            <div>
                <div className='mb-6 text-[30px font-bold]'>Title</div>
                <div className='mt-2 text-[13px] text-[gray]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate sint atque in amet, tempore autem eum earum aliquam magni at non vero explicabo enim iure, repudiandae facilis nihil libero!
                </div>
                <div className='text-[12px] mt-5'>date</div>
            </div>
        </div>
        <div>
                 <div className='mt-20 mb-8 font-bold'>Review</div>
                <div className='w-[250px] rounded-full border-red-400 border mr-2'>
                    <div className='text-[12px] font-bold'>name</div>
                </div>
        </div>
    </div>
  )
}

export default SingleDetail