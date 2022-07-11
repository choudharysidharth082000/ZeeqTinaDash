import React from 'react'

const Card = () => {
    
  return (
    <div className="containorCard w-80 bg-red-200 transition-all hover:scale-105 cursor-pointer mx-10">
        <div className="header w-full h-12 bg-[#FF5E0E] flex justify-center items-center ">
            <h1 className='text-white'>Backup Infra</h1>
            </div>        
        <div className="containorBody w-full h-38 bg-white flex flex-col justify-between items-center p-4 overflow-y-scroll">
           <h1 className="m-1">Host : 4</h1>
           <h1 className="m-1">Application : 4</h1>
           <div className="Application p-2 border border-dashed rounded-md border-slate-400 bg-gray-50 w-48 m-3 flex justify-center flex-col">
            <h1 className="m-1 text-sm">MSSQL : <span>0</span></h1>
            <h1 className="m-1 text-sm">My-SQL : <span>3</span></h1>
            <h1 className="m-1 text-sm">DB2 : 0</h1>
            <h1 className="m-1 text-sm">Hyper-V : 1</h1>
           </div>
           <h1 className="m-1">Storages : 4</h1>
           <h1 className="m-1">Media Pool : 4</h1>
        </div>
    </div>
  )
}

export default Card