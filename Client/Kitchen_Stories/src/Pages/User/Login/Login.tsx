import * as z from 'zod';
import axios from "axios";
import React from 'react';
import { useSnackbar } from 'notistack';
import { useCookies } from "react-cookie";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../../Components/Common/Button/Button';
import Heading from '../../../Components/Common/Heading/Heading';

interface FormValues {
    Email: string;
    Password: string;
};

const Login: React.FC  = () => {

    // CREATION OF THE LOGIN ZOD SCHEMA

    const LoginSchema = z.object({
        Email: z.string().min(1, { message: 'Email is required'}),
        Password: z.string().min(1, { message: 'Password is required'}),
    });

    const [_,setCookie] = useCookies(["auth_token"]);
    const { enqueueSnackbar } = useSnackbar();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(LoginSchema)
    });

    // ONLOGIN FUNCTION

    const onLogin : SubmitHandler<FormValues> = async (data) => {
        try {
            const response = await axios.post("https://cook-io-server.onrender.com/Users/Login", data)
                setCookie("auth_token", response.data.Token)
                window.localStorage.setItem("UserID", response.data.UserID)
                enqueueSnackbar("Logged in successfully!" , {variant: "success"}) 
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
        } catch (error) { 
            enqueueSnackbar("Login unsuccessful!" , {variant: "error"})
            console.log(error)
        }
    }

    // DEMO LOGIN FUNCTION

    const DemoLogin = async (e: any) => {
        e.preventDefault()
        const data = {
            Email : "marymasika@gmail.com" , Password : "Triumph2025"
        }
        try {
                const response = await axios.post(`https://cook-io-server.onrender.com/Users/Login`, data)
                setCookie("auth_token", response.data.Token)
                window.localStorage.setItem("UserID", response.data.UserID)
                enqueueSnackbar("Logged in successfully!" , {variant: "success"}) 
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
        } catch (error) { 
            enqueueSnackbar("Login unsuccessful!" , {variant: "error"}) 
            console.log(error) 
        }
    }

    return (
        <div>
            <Heading
                idName='Login'
                ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
                Heading='Login'
                HeadingStyle='font-bold text-5xl'
            />
            <form method="post" onSubmit={handleSubmit(onLogin)} encType="multipart/form-data" className='flex flex-col items-center gap-2'>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="Email">Email</label> 
                    <input placeholder="Enter Email..." {...register('Email', { required: 'Email is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80 sm:w-96' required />
                    {errors.Email && <p className="text-center text-red-700">{errors.Email.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="Password">Password</label> 
                    <input placeholder="Enter Password..." {...register('Password', { required: 'Password is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80 sm:w-96' required />
                    {errors.Password && <p className="text-center text-red-700">{errors.Password.message}</p>}
                </div>
                <div className='flex gap-5 mt-5'>
                    <Button
                        ButtonText='Login'
                        ButtonStyle='bg-buttonOrange cursor-pointer text-center text-white px-3 py-1 rounded w-40 hover:bg-black'
                        onClick={handleSubmit(onLogin)}
                    />
                    <Button
                        ButtonText='Demo Login'
                        ButtonStyle='bg-buttonOrange cursor-pointer text-center text-white px-3 py-1 rounded w-40 hover:bg-black'
                        onClick={DemoLogin}
                    />
                </div>
            </form>
        </div>
    )
    }
    
    export default Login
