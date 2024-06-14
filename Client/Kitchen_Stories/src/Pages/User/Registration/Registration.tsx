import * as z from 'zod';
import Axios from "axios";
import React from 'react';
import { useSnackbar } from 'notistack';
import { useCookies } from "react-cookie";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import Heading from '../../../Components/Common/Heading/Heading';
import Input from '../../../Components/Common/UserInput/Input';
import Button from '../../../Components/Common/Button/Button';

interface FormValues {
    Name: string;
    Email: string;
    Password: string;
};

const Registration: React.FC<FormValues> = () => {

    const RegistrationSchema = z.object({
        Name: z.string().min(1, { message: 'Name is required'}),
        Email: z.string().min(1, { message: 'Email is required'}),
        Password: z.string().min(1, { message: 'Password is required'})
    });

    const [_,setCookie] = useCookies(["auth_token"]);
    const { enqueueSnackbar } = useSnackbar();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(RegistrationSchema)
    });

    const onRegistration : SubmitHandler<FormValues> = async data => {
        try {
            const response = await Axios.post("http://localhost:4000/Users/Registration", data)
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
            idName='Registration'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading='Sign Up'
            HeadingStyle='font-bold text-5xl'
        />
        <form method="post" onSubmit={handleSubmit(onRegistration)} encType="multipart/form-data" className='flex flex-col items-center gap-5'>
            <Input
                ContainerStyle = 'flex flex-col gap-1'
                Label = 'Name'
                LabelStyle = 'font-bold'
                Placeholder = "Enter Name..."
                inputStyle = 'border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-96'
                {...register('Name', {required: 'Name is required'})}
            />
            {errors.Name && <p className="mb-0.5 mt-0.5 text-center text-red-700">{errors.Name.message}</p>}
            <Input
                ContainerStyle = 'flex flex-col gap-1'
                Label = 'Email'
                LabelStyle = 'font-bold'
                Placeholder = "Enter Email..."
                inputStyle = 'border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-96'
                {...register('Email', {required: 'Email is required'})}
            />
            {errors.Email && <p className="mb-0.5 mt-0.5 text-center text-red-700">{errors.Email.message}</p>}
            <Input
                ContainerStyle = 'flex flex-col gap-1'
                Label = 'Password'
                LabelStyle = 'font-bold'
                Placeholder = "Enter Password..."
                inputStyle = 'border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-96'
                {...register('Password', {required: 'Password is required'})}
            />
            {errors.Password && <p className="mt-0.5 text-center text-red-700">{errors.Password.message}</p>}
            <Button
                ButtonText='Sign Up'
                ButtonStyle='bg-black cursor-pointer mt-1 text-center text-white px-3 py-1 rounded w-40'
                onClick={handleSubmit(onRegistration)}
            />
        </form>
    </div>
)
}

export default Registration