'use client'

import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from 'react';
import { verifyCaptcha } from "@/serverActions";
import { useForm } from 'react-hook-form';
import './secondForm.css';

async function handleCaptchaSubmission(token) {
	// Server function to verify captcha
	await verifyCaptcha(token)
		.then(() => setIsverified(true))
		.catch(() => setIsverified(false))
}

const SecondForm = () => {
	const recaptchaRef = useRef(null)
	const [isVerified, setIsverified] = useState(false);

	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = handleSubmit(data => {
		if (Object.keys(errors).length === 0) {

		}
	})


	return (
		<form onSubmit={onSubmit} className="w-full flex flex-col items-center justify-center">
			<input type="text" placeholder="username"
				{...register('username', { required: { value: true, message: '*Username requerido' }, maxLength: { value: 15, message: '*Máximo 15 carácteres' } })}
			/>
			{errors.username && <span>{errors.username.message}</span>}
	
			<input type="email" placeholder="email"
				{...register('email', { required: { value: true, message: '*Email requerido' },pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Correo no válido'} , maxLength: { value: 50, message: '*Máximo 50 carácteres' } })}
			/>
			{errors.email && <span>{errors.email.message}</span>}

			<div className="bg-[#7e1818] w-[90%] h-[2px] my-4" />

			<button className="p-4 py-6 my-2 mb-8 bg-[#0f3b13] w-[90%] text-start rounded" >Seleccione rol</button>
			<ReCAPTCHA sitekey="6Lfg7OEoAAAAAO-0UlVU_kEtcTEp4b_U05YevLHi" />
			<div className="w-full h-[auto] mt-8 flex items-center justify-center">
				<button className="bg-[#1b7423] py-3 w-[90%] rounded" type="submit">Submit</button>
			</div>
		</form>
	)
}

export default SecondForm