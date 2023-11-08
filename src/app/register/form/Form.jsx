'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import './form.css'

const Form = ({ handleInputChange, setSecondForm }) => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = handleSubmit(data => {
		if (Object.keys(errors).length === 0) {
			setSecondForm(true)
		}
	})

	console.log(errors)

	return (
		<form className="w-full flex flex-col items-center justify-center" onSubmit={onSubmit}>

			<input name='name' type="text" placeholder="Nombre"
				{...register('name', { required: { value: true, message: '*Nombre requerido' }, minLength: { value: 1, message: '*Mínimo 1 carácter'}, maxLength: { value: 15, message: '*Máximo 15 carácteres'} })}
				onChange={handleInputChange}
			/>
			{errors.name && <span>{errors.name.message}</span>}


			<input name='lastName' type="text" placeholder="Apellido"
				{...register('lastName', { required: { value: true, message: '*Apellido requerido' }, maxLength: { value: 15, message: '*Máximo 15 carácteres'} })}
				onChange={handleInputChange}
			/>
			{errors.lastName && <span>{errors.lastName.message}</span>}


			<div className="bg-[#720f0f] w-[90%] h-[2px] mt-6 mb-4" />


			<input name='password' type="password" placeholder="Contraseña"
				{...register('password', { required: { value: true, message: '*Contraseña requerida' }, minLength: { value: 6, message: '*Mínimo 6 carácteres'}, maxLength: { value: 30, message: '*Máximo 30 carácteres'} })}
				onChange={handleInputChange}
			/>
			{errors.password && <span>{errors.password.message}</span>}


			<input name='confirmPassword' type="password" placeholder="Confirmar contraseña"
				{...register('confirmPassword', { required: { value: true, message: '*Confirmar contraseña' }, minLength: { value: 6, message: '*Mínimo 6 carácteres'}, maxLength: { value: 30, message: '*Máximo 30 carácteres'} })}
				onChange={handleInputChange}
			/>
			{errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

			<div className="w-full h-[auto] mt-8 flex items-center justify-center">
				<button className="bg-[#1b7423] py-3 w-[90%] rounded" type="submit">Siguiente</button>
			</div>
		</form>
	)
}

export default Form