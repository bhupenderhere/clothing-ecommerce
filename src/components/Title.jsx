import React from 'react'

export const Title = ({text_1, text_2}) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-gray-500">
        <span>{text_1.toUpperCase()}&nbsp;</span>
        <span className="text-gray-700 font-medium">{text_2.toUpperCase()}</span>
      </p>
      <div className="w-8 sm:w-12 h-[1px] bg-gray-700 sm:h-[2px]"></div>
    </div>
  );
}
