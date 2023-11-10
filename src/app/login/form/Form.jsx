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
		<form className="w-full flex flex-col items-center justify-center" onSubmit={onSubmit}>

			<input name='name' type="text" placeholder="Nombre"
				{...register('name', { required: { value: true, message: '*Nombre requerido' }, minLength: { value: 1, message: '*Mínimo 1 carácter'}, maxLength: { value: 20, message: '*Máximo 20 carácteres'} })}
				onChange={handleInputChange}
			/>
			{errors.name && <span>{errors.name.message}</span>}


			<input name='lastName' type="text" placeholder="Apellido"
				{...register('lastName', { required: { value: true, message: '*Apellido requerido' }, maxLength: { value: 20, message: '*Máximo 20 carácteres'} })}
				onChange={handleInputChange}
			/>
			{errors.lastName && <span>{errors.lastName.message}</span>}



			<input name='password' type="password" placeholder="Contraseña"
				{...register('password', { required: { value: true, message: '*Contraseña requerida' }, minLength: { value: 6, message: '*Mínimo 6 carácteres'}, maxLength: { value: 30, message: '*Máximo 30 carácteres'} })}
				onChange={handleInputChange}
			/>
			{errors.password && <span>{errors.password.message}</span>}

			<div className="w-full h-[auto] mt-6 flex items-center justify-center">
				<button className="bg-[#1b7423] py-3 w-[90%] rounded" type="submit">Log in</button>
			</div>
		</form>
	)
}

export default Form