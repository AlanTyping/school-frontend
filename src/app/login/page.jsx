'use client'

import React from 'react';
import GeneralHeader from '../components/general header/GeneralHeader';
import Footer from '../components/footer/Footer';
import Form from './form/Form';
import Link from 'next/link';
import './login.css';

const Page = () => {
  return (
    <div className="h-[auto] min-h-[720px] w-full items-center justify-center flex flex-col bg-[#1f1f1f] text-[#b9b9b9] text-[1.2rem]">
      <GeneralHeader />

      <div className="mb-20 w-full flex items-start justify-center lg:h-[60vw]">
        <div id="form-container" className="h-[auto] w-[95%] max-w-[325px] 2xl:max-w-[20vw] mt-[9vh] flex flex-col items-center rounded bg-[#2e180b]">

          <div id="register-title" className="w-full p-6 flex row justify-start text-[1.65rem] items-center bg-[#521c15] rounded-t-lg mb-[2vh]">
            <h1>Login</h1>
          </div>

          <Form />

          <div id='password-reset-question' className='w-full h-[auto] p-4 2xl:pl-[1.3vw] pl-6 mt-[1vh] text-[1rem]'>
            <Link href="reset-password">¿Olvidaste tu contraseña?</Link>
          </div>

          <div id='login-footer' className='w-full text-[1rem] h-[80px] 2xl:h-[5vw] 2xl:mt-[1vw] p-4 flex-col bg-[#291407] flex items-center justify-evenly rounded-b-lg'>
            <p className='text-[#c9c9c9]'>¿No tienes cuenta? <Link href="register" id='registrate-link'>Registrate</Link></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Page