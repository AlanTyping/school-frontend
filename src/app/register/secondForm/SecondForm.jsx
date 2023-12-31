'use client'

import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from 'react';
import { verifyCaptcha } from './captcha';
import LineSeparator from '../components/LineSeparator';
import { useRouter } from 'next/navigation';
import { registerQuery } from './axiosQueries/register';
import './secondForm.css';

const SecondForm = ({ register, errors, handleSubmit, watch }) => {
  const recaptchaRef = useRef(null)
  const [isVerified, setIsverified] = useState(false);
  const [showCaptchaMessage, setShowCaptchaMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const submit = handleSubmit(async (data) => {
    if (!isVerified) return setShowCaptchaMessage(true);
    setShowCaptchaMessage(false);

    if (Object.keys(errors).length === 0) {
      const {confirmPassword: _, ...userData} = data

      const result = await registerQuery(userData);

      if (result.status === 200) return router.push('/login')
      setErrorMessage(result.response.data.message)
    }
  })

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }


  const options = ['student', 'teacher', 'staff'];

  return (
    <form onSubmit={submit} className="w-full flex flex-col items-center justify-center">
      <input type="text" placeholder="Username"
        {...register('username', { required: { value: true, message: '*Username requerido' }, maxLength: { value: 15, message: '*Máximo 15 carácteres' } })}
      />
      {errors.username && <span>{errors.username.message}</span>}

      <input type="email" placeholder="Email"
        {...register('email', { required: { value: true, message: '*Email requerido' }, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Correo no válido' }, maxLength: { value: 50, message: '*Máximo 50 carácteres' } })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <LineSeparator />

      <select id='select-options' defaultValue="" className="p-4 py-4 my-2 text-[1.15rem] bg-[#0f3b13] w-[90%] text-start rounded" {...register('role', { validate: () => options.includes(watch('role')) || '*Elige rol' })}>
        <option value="" disabled>Elige rol</option>
        <option value="student">Estudiante</option>
        <option value="teacher">Profesor</option>
        <option value="staff">Staff</option>
      </select>
      {errors.role && <span>{errors.role.message}</span>}

      <ReCAPTCHA className="mt-8" onChange={handleCaptchaSubmission} ref={recaptchaRef} sitekey="6Lfg7OEoAAAAAO-0UlVU_kEtcTEp4b_U05YevLHi" />
      {showCaptchaMessage && <span>*Aprobar captcha</span>}

      <div className="w-full h-[auto] mt-8 flex items-center justify-center">
        <button className="bg-[#1b7423] py-2 w-[90%] rounded text-[1.1rem]" type="submit">Submit</button>
      </div>

      {errorMessage && <p id='error-message' className='text-[1.1rem] md:text-[1.1vw]'>*{errorMessage}</p>}
    </form>
  )
}

export default SecondForm