'use client'

import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/serverActions";
import { useRef, useState, useEffect } from "react";
import GeneralHeader from "../components/general header/GeneralHeader";
import Footer from "../components/footer/Footer";
import './register.css';

const page = () => {
  const recaptchaRef = useRef(null)
  const [isVerified, setIsverified] = useState(false)

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }

  useEffect(() => {
    console.log(isVerified)
  }, [isVerified])
  return (
    <div className="h-[auto] min-h-[720px] w-full items-center justify-center flex flex-col bg-[#ffcfcf] text-white text-[1.2rem]">
      <GeneralHeader />
      <div className="py-20 w-full flex items-center justify-center">
        <div className="h-[auto] w-[95%] p-4 py-10 flex flex-col items-center rounded bg-[#361907]">

          <div className="w-full p-4 flex row justify-start text-[2rem] items-center h-[90px] bg-[#490808]">
            <h1>Registrate!</h1>
          </div>
          <div className="w-[90%] my-4 h-auto flex items-center justify-end">
            <h2>1/2</h2>
          </div>

          {/* <form onSubmit={() => alert(isVerified)} className="w-full flex flex-col items-center justify-center">
            <input type="text" placeholder="Nombre" className="p-4 mt-2 rounded bg-[#5f0a0a] w-[90%]" />
            <input type="text" placeholder="Apellido" className="p-4 my-4 rounded bg-[#5f0a0a] w-[90%]" />

            <div className="bg-[#720f0f] w-[90%] h-[2px] my-4" />

            <input type="password" placeholder="contraseña" className="p-4 my-2 bg-[#5f0a0a] w-[90%]" />
            <input type="password" placeholder="confirmar contraseña" className="p-4 my-2 bg-[#5f0a0a] w-[90%]" />
            <ReCAPTCHA  sitekey="6Lfg7OEoAAAAAO-0UlVU_kEtcTEp4b_U05YevLHi"/>
            <div className="w-full h-[auto] mt-8 flex items-center justify-center">
              <button className="bg-[#1b7423] py-3 w-[90%] rounded" type="submit">Siguiente</button>
            </div>
          </form> */}

          <form onSubmit={() => alert(isVerified)} className="w-full flex flex-col items-center justify-center">
            <input type="text" placeholder="username" className="p-4 mt-2 rounded bg-[#5f0a0a] w-[90%]" />
            <input type="email" placeholder="email" className="p-4 my-4 rounded bg-[#5f0a0a] w-[90%]" />

            <div className="bg-[#7e1818] w-[90%] h-[2px] my-4" />

            <button className="p-4 py-6 my-2 mb-8 bg-[#5f0a0a] w-[90%] text-start border-[4px] border-[#7e1818]" >Seleccione rol</button>
            <ReCAPTCHA  sitekey="6Lfg7OEoAAAAAO-0UlVU_kEtcTEp4b_U05YevLHi"/>
            <div className="w-full h-[auto] mt-8 flex items-center justify-center">
              <button className="bg-[#1b7423] py-3 w-[90%] rounded" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>

  )
}
export default page



// 'use client';

// import React from 'react'
// import { useMutation } from '@tanstack/react-query'

// const user = {
// 	username: "amivrgago",
// 	name: "Marcelo",
// 	lastName: "aaa",
// 	email: "jijveroa@gmail.com",
// 	password: "123321123321123321123"
// }

// const Register = () => {
// 	const { isLoading, data, isError, error, mutate } = useMutation({
// 		mutationFn: (userProp) => {
// 			return axios.post('http://localhost:2000/api/auth/register', userProp)
// 		},
// 	})

// 	return (
// 		<div>
// 			{isLoading ? ('Adding todo...') : (
// 				<>
// 					{isError ? (<div>An error occurred: {error.response ? error.response.data.message : '404, server not found'}</div>) : null}

// 					{data ?
// 						<div className='h-[300px] w-[50%] my-4 rounded bg-slate-700 flex flex-col items-start p-5 justify-center'>
// 							<h1>Username: {data.data.username}</h1><br />
// 							<h2>Name: {data.data.name}</h2>
// 							<h2>lastName: {data.data.lastName}</h2>
// 							<h2>Email: {data.data.email}</h2>
// 							<h2>password: {data.data.password}</h2>
// 						</div>
// 						:
// 						null}

// 					<button onClick={() => { mutate(user) }}>Create Todo</button>
// 				</>
// 			)}
// 		</div>
// 	)
// }

// export default Register