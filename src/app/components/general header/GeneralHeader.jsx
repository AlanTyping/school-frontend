import React from 'react'
import Nav from '../nav/Nav'

const GeneralHeader = () => {
    return (
        <header className={`h-[100px] bg-blue-800 flex justify-center xl:h-[80px] w-full`}>
            <Nav />
        </header>
    )
}

export default GeneralHeader