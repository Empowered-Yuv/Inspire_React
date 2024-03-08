import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'


function Signup() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center'>
        <div className={`mx-auto max-w-lg bg-gray-100 rounded-xl border-black/10`}>
        <span className='w-full inline-block max-w-[100px]'>
                    <Logo width='100%' />
                </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign Up ur account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Dont hv any acc?
                <Link to='/signup' 
                className='font-medium text-primary transition-all duration-200 hover:underline' >
                    Sign Up
                </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            <form action="" onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                <Input
                label="Name: "
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                    required: true,
                })}
                />
                    <Input 
                    label="E-mail" 
                    placeholder='Enter email' 
                    type='email' 
                    {...register('email', {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                        //regex how should be email
                    })}
                    />
                     <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign Up</Button>
                </div>
            </form>
    </div>
  )
}

export default Signup
