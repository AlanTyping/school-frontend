'use client';

import React from 'react'
import { useMutation } from '@tanstack/react-query'

const user = {
	username: "amivrgago",
	name: "Marcelo",
	lastName: "aaa",
	email: "jijveroa@gmail.com",
	password: "123321123321123321123"
}

const Register = () => {
	const { isLoading, data, isError, error, mutate } = useMutation({
		mutationFn: (userProp) => {
			return axios.post('http://localhost:2000/api/auth/register', userProp)
		},
	})

	return (
		<div>
			{isLoading ? ('Adding todo...') : (
				<>
					{isError ? (<div>An error occurred: {error.response.data.message}</div>) : null}

					{data ?
						<div className='h-[300px] w-[50%] my-4 rounded bg-slate-700 flex flex-col items-start p-5 justify-center'>
							<h1>Username: {data.data.username}</h1><br />
							<h2>Name: {data.data.name}</h2>
							<h2>lastName: {data.data.lastName}</h2>
							<h2>Email: {data.data.email}</h2>
							<h2>password: {data.data.password}</h2>
						</div>
						: 
						null}

					<button onClick={() => { mutate(user) }}>Create Todo</button>
				</>
			)}
		</div>
	)
}

export default Register