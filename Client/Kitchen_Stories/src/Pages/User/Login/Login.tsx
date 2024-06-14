import * as z from 'zod';
import Axios from "axios";
import React from 'react';
import { useSnackbar } from 'notistack';
import { useCookies } from "react-cookie";
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Heading from '../../../Components/Common/Heading/Heading';
import Input from '../../../Components/Common/UserInput/Input';
import Button from '../../../Components/Common/Button/Button';

interface FormValues {
    Email: string;
    Password: string;
};

const Login: React.FC = () => {

    const LoginSchema = z.object({
        Email: z.string().min(1, 'Email is required'),
        Password: z.string().min(1, 'Password is required'),
    });

    const [_,setCookie] = useCookies(["auth_token"]);
    const { enqueueSnackbar } = useSnackbar();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(LoginSchema),
    });

    const onLogin : SubmitHandler<FormValues> = async data => {

        try {
            const response = await Axios.post("http://localhost:4000/Users/Login", data)
                setCookie("auth_token", response.data.Token)
                window.localStorage.setItem("UserID", response.data.UserID)
                enqueueSnackbar("Logged in successfully!" , {variant: "success"}) 
                window.location.reload();
        } catch (error) { 
            enqueueSnackbar("Login unsuccessful!" , {variant: "error"})
            console.log(error)
        }
    }

return (
    <div>
        <Heading
            idName='Login'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-black'
            Heading='Login'
            HeadingStyle='font-bold text-5xl'
        />
        <form method="post" onSubmit={handleSubmit(onLogin)} encType="multipart/form-data" className='flex flex-col items-center gap-5'>
            <Input
                ContainerStyle = 'flex flex-col gap-2'
                Label = 'Email'
                LabelStyle = 'font-bold'
                Placeholder = "Enter Email..."
                inputStyle = 'border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-96'
                {...register('Email', { required: 'Email is required' })}
            />
            {errors.Email && <p className="mb-2 mt-2 text-center text-red-700">{errors.Email.message}</p>}
            <Input
                ContainerStyle = 'flex flex-col gap-2'
                Label = 'Password'
                LabelStyle = 'font-bold'
                Placeholder = "Enter Password..."
                inputStyle = 'border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-96'
                {...register('Password', { required: 'Password is required' })}
            />
            {errors.Password && <p className="mt-2 text-center text-red-700">{errors.Password.message}</p>}
            <Button
                ButtonText='Login'
                ButtonStyle='bg-black cursor-pointer mt-3 text-center text-white px-3 py-1 rounded w-40'
                onClick={handleSubmit(onLogin)}
            />
        </form>
    </div>
)
}

export default Login