import React from 'react'

const Form = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
			<input type="text" placeholder="Nombre" className="p-4 mt-2 rounded bg-[#5f0a0a] w-[90%]" />
			<input type="text" placeholder="Apellido" className="p-4 my-4 rounded bg-[#5f0a0a] w-[90%]" />

			<div className="bg-[#720f0f] w-[90%] h-[2px] my-4" />

			<input type="password" placeholder="contraseña" className="p-4 my-2 bg-[#5f0a0a] w-[90%]" />
			<input type="password" placeholder="confirmar contraseña" className="p-4 my-2 bg-[#5f0a0a] w-[90%]" />
			<div className="w-full h-[auto] mt-8 flex items-center justify-center">
				<button className="bg-[#1b7423] py-3 w-[90%] rounded" type="submit">Siguiente</button>
			</div>
		</form>
	)
}

export default Form