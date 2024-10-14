import * as z from 'zod';
import axios from "axios";
import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../Components/Common/Button/Button';
import Heading from '../../Components/Common/Heading/Heading';
import { useGetUserID } from "../../Components/Hooks/useGetUserID";

interface FormValues {
    Name: string;
    Image: string;
    userOwner: any;
    Description: string;
    Ingredients: string;
    Instructions: string;
};

const Create: React.FC = () => {

    const userID = useGetUserID();
    const [ Cookie,_ ] = useCookies(["auth_token"]);

    // USESTATE HOOK

    const [ Success, setSuccess ] = useState('')

    // CREATION OF THE RECIPE ZOD SCHEMA

    const RecipeSchema = z.object({
        userOwner: z.any().default(userID),
        Name: z.string().min(1, 'Name is required'),
        Image: z.string().min(1, 'Image link is required'),
        Description: z.string().min(1, 'Description is required'),
        Ingredients: z.string().min(1, 'Ingredients are required'),
        Instructions: z.string().min(1, 'Instructions are required'), 
    });

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(RecipeSchema),
    });

    type RecipeData = z.infer<typeof RecipeSchema>

    // ADD RECIPE FUNCTION

    const AddRecipe: SubmitHandler<FormValues> = async (data: RecipeData) => {
        try {
            await axios.post("http://localhost:4000/Recipe/AddRecipe", data, {
                headers: { authorization: Cookie.auth_token },
            }) 
            .then(() => {
                setSuccess('Recipe has been successfully added.') 
            })
        } catch (error) {
            console.log(error)
        }
    };

return (
    <div>
        <Heading 
            idName='Create'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading='Create Recipe'
            HeadingStyle='font-bold text-5xl'
        />
        <section className='flex flex-col items-center mb-5'>
            <form method="post" onSubmit={handleSubmit(AddRecipe)} encType="multipart/form-data" className='flex flex-col items-center justify-center gap-2 px-2'>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Name</label> 
                    <textarea placeholder="Enter Name..." {...register('Name', { required: 'Name is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-1 text-black w-80 sm:w-96' required />
                    {errors.Name && <p className="text-center text-red-700">{errors.Name.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Description</label>
                    <textarea className="border-black border-b h-20 outline-none px-1 py-2 w-80 sm:w-96"  placeholder="Enter Description..." {...register('Description', { required: 'Description is required' })} required/>
                    {errors.Description && <p className="text-center text-red-700">{errors.Description.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Ingredients</label>
                    <textarea placeholder='Enter Ingredients...' className="border-black border-b h-20 outline-none px-1 py-2 w-80 sm:w-96" {...register('Ingredients', { required: 'Ingredients is required' })} required ></textarea>
                    {errors.Ingredients && <p className="text-center text-red-700">{errors.Ingredients.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Instructions</label>
                    <textarea placeholder='Enter Instructions...' className="border-black border-b h-20 px-1 outline-none py-2 w-80 sm:w-96" {...register('Instructions', { required: 'Instructions is required' })} required ></textarea>
                    {errors.Instructions && <p className="text-center text-red-700">{errors.Instructions.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Image</label>
                    <textarea placeholder='Enter Image Url...' {...register('Image', { required: 'Image is required' })} className='border-black border-b h-8 outline-none px-2 py-1 truncate text-black w-80 sm:w-96' required />
                    {errors.Image && <p className="text-center text-red-700">{errors.Image.message}</p>}
                </div>
                <div className='mt-10'>
                    <h4 className='font-bold text-center text-green-700'>{Success}</h4>
                    <Button
                        ButtonText='Add Recipe'
                        ButtonStyle='bg-buttonOrange cursor-pointer text-center text-white px-3 py-1 rounded w-64 hover:bg-black'
                        onClick={handleSubmit(AddRecipe)}
                    />
                </div>
            </form>
        </section>
    </div>
)
}

export default Create
