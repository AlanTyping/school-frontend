'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import LineSeparator from '../components/LineSeparator';
import './form.css'

const Form = ({ register, errors, watch, setSecondForm, handleSubmit }) => {

	const onSubmit = handleSubmit(() => {
		if (Object.keys(errors).length === 0) {
			setSecondForm(true)
		}
	})

	return (
		<form className="w-full flex flex-col items-center justify-center" onSubmit={onSubmit}>

			<input name='name' type="text" placeholder="Nombre"
				{...register('name', { required: { value: true, message: '*Nombre requerido' }, minLength: { value: 1, message: '*Mínimo 1 carácter'}, maxLength: { value: 20, message: '*Máximo 20 carácteres'} })}
				
			/>
			{errors.name && <span>{errors.name.message}</span>}


			<input name='lastName' type="text" placeholder="Apellido"
				{...register('lastName', { required: { value: true, message: '*Apellido requerido' }, maxLength: { value: 20, message: '*Máximo 20 carácteres'} })}
			/>
			{errors.lastName && <span>{errors.lastName.message}</span>}


			<LineSeparator />
			
			<input name='password' type="password" placeholder="Contraseña"
				{...register('password', { required: { value: true, message: '*Contraseña requerida' }, minLength: { value: 8, message: '*Mínimo 8 carácteres'}, maxLength: { value: 30, message: '*Máximo 30 carácteres'} })}
			/>
			{errors.password && <span>{errors.password.message}</span>}


			<input name='confirmPassword' type="password" placeholder="Confirmar contraseña"
				{...register('confirmPassword', { required: { value: true, message: '*Confirmar contraseña' }, minLength: { value: 8, message: '*Mínimo 8 carácteres'}, validate: (value) => watch('password') === value || 'contraseñas no coinciden' })}
			/>
			{errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

			<div className="w-full h-[auto] mt-6 flex items-center justify-center">
				<button className="bg-[#1b7423] py-2 w-[90%] text-[1.1rem] 2xl:text-[1.2vw] rounded" type="submit">Siguiente</button>
			</div>
		</form>
	)
}

export default Form