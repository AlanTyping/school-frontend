'use client'

import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from 'react';
import { verifyCaptcha } from "@/serverActions";

async function handleCaptchaSubmission(token) {
	// Server function to verify captcha
	await verifyCaptcha(token)
		.then(() => setIsverified(true))
		.catch(() => setIsverified(false))
}

const SecondForm = () => {

	const recaptchaRef = useRef(null)
  const [isVerified, setIsverified] = useState(false);
	return (
		<form onSubmit={() => alert(isVerified)} className="w-full flex flex-col items-center justify-center">
			<input type="text" placeholder="username" className="p-4 mt-2 rounded bg-[#5f0a0a] w-[90%]" />
			<input type="email" placeholder="email" className="p-4 my-4 rounded bg-[#5f0a0a] w-[90%]" />

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