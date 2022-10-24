import React from 'react'

interface ImageProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    img: string | undefined | null;
    className: string;
}

function Avartar({img, className, ...rest}: ImageProps) {
  return (
    <button className={`${className} cursor-pointer mb-3  flex items-center`} {...rest}>
    <img alt='user_image' src={img as string} className="w-full h-full rounded-[50%]" />
</button>
  )
}

export default Avartar