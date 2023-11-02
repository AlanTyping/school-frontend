'use client'

import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ handleInputChange, setSecondForm }) => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = handleSubmit(data => {
		if (Object.keys(errors).length === 0) {
			setSecondForm(true)
		}
	})

	return (
		<form className="w-full flex flex-col items-center justify-center" onSubmit={onSubmit}>

			<input name='name' type="text" placeholder="Nombre" className="p-4 mt-2 rounded bg-[#5f0a0a] w-[90%]"
				{...register('name', { required: { value: true, message: '*Nombre requerido' } })}
			/>
			{errors.name && <h2 className='w-[90%] text-start text-blue-600 p-2'>{errors.name.message}</h2>}

			<input name='lastName' type="text" placeholder="Apellido" className="p-4 my-4 rounded bg-[#5f0a0a] w-[90%]"
				{...register('lastName', { required: { value: true, message: '*Apellido requerido' } })}
			/>
			{errors.lastName && <h2 className='w-[90%] text-start text-blue-600 p-2 mt-[-14px]'>{errors.lastName.message}</h2>}

			<div className="bg-[#720f0f] w-[90%] h-[2px] my-4" />

			<input name='password' type="password" placeholder="Contraseña" className="p-4 my-2 bg-[#5f0a0a] w-[90%]"
				{...register('password', { required: { value: true, message: '*Contraseña requerida' } })}
			/>
			{errors.password && <h2 className='w-[90%] text-start text-blue-600 p-2'>{errors.password.message}</h2>}


			<input name='confirmPassword' type="password" placeholder="Confirmar contraseña" className="p-4 my-2 bg-[#5f0a0a] w-[90%]"
				{...register('confirmPassword', { required: { value: true, message: '*Confirmar contraseña' } })}
			/>
			{errors.confirmPassword && <h2 className='w-[90%] text-start text-blue-600 p-2'>{errors.confirmPassword.message}</h2>}


			<div className="w-full h-[auto] mt-8 flex items-center justify-center">
				<button className="bg-[#1b7423] py-3 w-[90%] rounded" type="submit">Siguiente</button>
			</div>
		</form>
	)
}

export default Form