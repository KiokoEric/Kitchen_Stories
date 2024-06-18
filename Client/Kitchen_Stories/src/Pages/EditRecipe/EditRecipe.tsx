import * as z from 'zod';
import Axios from "axios";
import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Heading from '../../Components/Common/Heading/Heading';
import Button from '../../Components/Common/Button/Button';

interface FormValues {
    Name: string;
    Description: string;
    Ingredients: string;
    Instructions: string;
    Image: string;
};

const EditRecipe:React.FC = () => {

    const RecipeSchema = z.object({
        Name: z.string().min(1, 'Name is required'),
        Description: z.string().min(1, 'Description is required'),
        Ingredients: z.string().min(1, 'Ingredients are required'),
        Instructions: z.string().min(1, 'Instructions are required'),
        Image: z.string().min(1, 'Image link is required'),
    });

    const [Cookie,_] = useCookies(["auth_token"]);
    const [Success, setSuccess] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(RecipeSchema),
    });


    const Edit: SubmitHandler<FormValues> =  data => {
        Axios.post("http://localhost:4000/Recipe/EditRecipe", data , {
            headers: { authorization: Cookie.auth_token },
        }) 
        setSuccess('Recipe has been successfully edited.')
    };


return (
    <div>
        <Heading 
            idName='Create'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading='Edit Recipe'
            HeadingStyle='font-bold text-5xl'
        />
        <section className='flex flex-col items-center mb-5'>
            <form method="post" onSubmit={handleSubmit(Edit)} encType="multipart/form-data" className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Name</label> 
                    <textarea placeholder="Enter Name..." {...register('Name', { required: 'Name is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-1 text-black w-96' required />
                    {errors.Name && <p className="text-center text-red-700">{errors.Name.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Description</label>
                    <textarea className="border-black border-b h-20 outline-none px-1 py-2 w-96"  placeholder="Enter Description..." {...register('Description', { required: 'Description is required' })} required/>
                    {errors.Description && <p className="text-center text-red-700">{errors.Description.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Ingredients</label>
                    <textarea placeholder='Enter Ingredients...' className="border-black border-b h-20 outline-none px-1 py-2 w-96" {...register('Ingredients', { required: 'Ingredients is required' })} required ></textarea>
                    {errors.Ingredients && <p className="text-center text-red-700">{errors.Ingredients.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Instructions</label>
                    <textarea placeholder='Enter Instructions...' className="border-black border-b h-20 px-1 outline-none py-2 w-96" {...register('Instructions', { required: 'Instructions is required' })} required ></textarea>
                    {errors.Instructions && <p className="text-center text-red-700">{errors.Instructions.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Image</label>
                    <textarea placeholder='Enter Image Url...' {...register('Image', { required: 'Image is required' })} className='border-black border-b h-8 outline-none px-2 py-1 truncate text-black w-96' required />
                    {errors.Image && <p className="text-center text-red-700">{errors.Image.message}</p>}
                </div>
                <div className='mt-10' >
                    <h4 className='font-bold text-center text-green-700'>{Success}</h4>
                    <Button
                        ButtonText='Edit Recipe'
                        ButtonStyle='bg-black cursor-pointer text-center text-white px-3 py-1 rounded'
                    />
                </div>
            </form>
        </section>
    </div>
)
}

export default EditRecipe