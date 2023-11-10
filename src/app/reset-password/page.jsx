'use client'

import { useState, useEffect } from "react";
import GeneralHeader from "../components/general header/GeneralHeader";
import Footer from "../components/footer/Footer";
import Form from "./form/Form";
import './reset-password.css';

const Page = () => {
  const [formData, setFormData] = useState({ email: '' })

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div className="h-[auto] min-h-[720px] w-full items-center justify-center flex flex-col bg-[#1f1f1f] text-[#b9b9b9] text-[1.2rem]">
      <GeneralHeader />

      <div className="mb-20 w-full flex items-start justify-center min-h-[600px] lg:h-[100vh]">
        <div id="form-container" className="h-[auto] w-[95%] max-w-[325px] 2xl:max-w-[20vw] pb-8 mt-[9vh] flex flex-col items-center rounded bg-[#2e180b]">

          <div id="register-title" className="w-full p-6 flex row justify-start h-[100px] 2xl:p-[1.5vw] 2xl:text-[1.5vw] 2xl:h-[5vw] text-[1.6rem] items-center bg-[#521c15] rounded-t-lg">
            <h1>Cambiar contraseña</h1>
          </div>

          <div className="w-full flex flex-col text-center p-4">
            <h2 className="text-[1.3rem] text-[bold] mb-2 text-[#a8a8a8]">¿Tienes problemas para iniciar sesión?</h2>
            <p className="text-[#999999] text-[0.95rem]">Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta</p>
          </div>

          <Form handleInputChange={handleInputChange} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default Page