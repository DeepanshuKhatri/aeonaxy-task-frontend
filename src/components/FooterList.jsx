import React from 'react'

const FooterList = ({title, list}) => {
  return (
    <div className='mb-5'>
          <h1 className='mb-4 font-bold text-left text-xs lg:text-sm'>{title}</h1>
          <ul >
            {
              list.map((item) => (
                <li className="mb-4 text-left text-gray-600 text-xs lg:text-sm"><a href={item.link}>{item.label}</a></li>
              ))
            }
          </ul>
        </div>
  )
}

export default FooterList