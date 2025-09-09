import React from 'react'

function GetQuotationButton({title}) {
  return (
    <div>
      <button className="text-white button-color px-4 py-2 rounded font-semibold hover:bg-white transition duration-300">{title}</button>
    </div>
  )
}

export default GetQuotationButton
