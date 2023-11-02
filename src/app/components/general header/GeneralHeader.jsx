import React from 'react'
import Nav from '../nav/Nav'

const GeneralHeader = () => {
    return (
        <header className={`h-[100px] bg-[#720f0f] flex justify-center xl:h-[80px] w-full`}>
            <Nav />
        </header>
    )
}

export default GeneralHeader