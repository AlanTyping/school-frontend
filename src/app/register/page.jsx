'use client'

import { useRef, useState, useEffect } from "react";
import GeneralHeader from "../components/general header/GeneralHeader";
import Footer from "../components/footer/Footer";
import Form from "./form/Form";
import SecondForm from "./secondForm/SecondForm";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import './register.css';

const Page = () => {
  const [secondForm, setSecondForm] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm();
  
  return (
    <div className="h-[auto] min-h-[720px] w-full items-center justify-center flex flex-col bg-[#1f1f1f] text-[#b9b9b9] text-[1.2rem]">
      <GeneralHeader />

      <div className="mb-20 w-full flex items-start justify-center lg:h-[60vw]">
        <div id="form-container" className="h-[auto] w-[95%] max-w-[350px] md:max-w-[25vw] pb-4 mt-[9vh] flex flex-col items-center rounded bg-[#2e180b]">

          <div id="register-title" className="w-full p-[1.2rem] flex row justify-start text-[1.6rem] items-center bg-[#521c15] rounded-t-lg">
            <h1>Registrate!</h1>
          </div>

          <div id="text-counter" className="w-[90%] mt-1 px-2 h-auto flex items-center justify-end text-[0.9rem]">
            <h2>{secondForm ? '2' : '1'}/2</h2>
          </div>

          {secondForm ? <SecondForm register={register} errors={errors} watch={watch} handleSubmit={handleSubmit} />
            :
            <Form setSecondForm={setSecondForm} register={register} errors={errors} watch={watch} handleSubmit={handleSubmit} />}

          <div id="register-login-option" className="text-[1rem] 2xl:text-[1.05vw] mt-6 2xl:mt-[1.5vw] text-start w-[90%] ">
            <p>¿Tienes una cuenta? <Link href="login">inicia sesión</Link></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  )
}
export default Page



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