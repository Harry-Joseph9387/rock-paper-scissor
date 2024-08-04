import React from 'react'

const Header = ({score}) => {
  return (
    <>
        <div className="w-screen flex justify-center text-white py-5 lg:py-10">
            <div className="flex justify-between header_sub_main  py-2 items-center border-2 rounded-lg max-w-xl">
                <div className="pl-5 header-title font-bold  " >
                    <h1>ROCK</h1>
                    <h1>PAPER</h1>
                    <h1>SCISSORS</h1>
                </div>
                <div className="text-center bg-white text-slate-800 py-2 px-5 rounded mr-3">
                    <p >Score</p>
                    <h2 className='text-5xl font-bold'>{score}</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header