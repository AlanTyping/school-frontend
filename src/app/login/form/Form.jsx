'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import './form.css'

const Form = ({ handleInputChange }) => {
	const { register, handleSubmit, formState: { errors }, watch } = useForm();

	const onSubmit = handleSubmit(data => {
		if (Object.keys(errors).length === 0) {
            
		}
	})
	
	return (
		<form className="w-full flex flex-col items-center justify-center p-1" onSubmit={onSubmit}>

			<input type="email" placeholder="Email"
				{...register('email', { required: { value: true, message: '*Email requerido' }, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Correo no válido' }, maxLength: { value: 50, message: '*Máximo 50 carácteres' } })}
				onChange={handleInputChange}
			/>
			{errors.email && <span>{errors.email.message}</span>}



			<input name='password' type="password" placeholder="Contraseña"
				{...register('password', { required: { value: true, message: '*Contraseña requerida' }, minLength: { value: 6, message: '*Mínimo 6 carácteres'}, maxLength: { value: 30, message: '*Máximo 30 carácteres'} })}
				onChange={handleInputChange}
			/>
			{errors.password && <span>{errors.password.message}</span>}

			<div className="w-full h-[auto] mt-6 flex items-center justify-center">
				<button className="bg-[#1b7423] py-3 w-[90%] rounded" type="submit">Iniciar sesión</button>
			</div>
		</form>
	)
}

export default Form