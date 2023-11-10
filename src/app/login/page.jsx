import React from 'react';
import GeneralHeader from '../components/general header/GeneralHeader';
import Footer from '../components/footer/Footer';
import './login.css';

const Page = () => {
  return (
    <div className="h-[auto] min-h-[720px] w-full items-center justify-center flex flex-col bg-[#1f1f1f] text-[#b9b9b9] text-[1.2rem]">
    <GeneralHeader />
    
    <div className="mb-20 w-full flex items-start justify-center lg:h-[100vh]">
      <div id="form-container" className="h-[auto] w-[95%] max-w-[350px] 2xl:max-w-[20vw] pb-8 mt-[9vh] flex flex-col items-center rounded bg-[#2e180b]">

        <div id="register-title" className="w-full p-6 flex row justify-start text-[1.65rem] items-center bg-[#521c15] rounded">
          <h1>Login</h1>
        </div>
      </div>
    </div>

    <Footer />
  </div>
  )
}

export default Page