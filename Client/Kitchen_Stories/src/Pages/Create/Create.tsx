import React, { ChangeEvent, useState } from 'react';
import Heading from '../../Components/Common/Heading/Heading';
import Button from '../../Components/Common/Button/Button';

const Create: React.FC = () => {

    const [Name, setName] = useState('')
    const [Description, setDescription] = useState('')
    const [Ingredients, setIngredients] = useState('')
    const [Instructions, setInstructions] = useState('')
    const [Image, setImage] = useState('')
    const [Error, setError] = useState('')
    const [Success, setSuccess] = useState('')

    const handleName = (e :ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }

    const handleIngredients = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setIngredients(e.target.value)
    }

    const handleInstructions = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInstructions(e.target.value)
    }

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.value)
    }

return (
    <div>
        <Heading 
            idName='Create'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading='Create Recipe'
            HeadingStyle='font-bold text-4xl'
        />
        <section className='flex flex-col items-center mb-5'>
            <form method="post" encType="multipart/form-data" className='flex flex-col gap-5' >
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Name</label> 
                    <input type="text" placeholder="Enter Name..." value={Name} onChange={handleName} className='border-black border-b outline-none px-1 py-2 text-black w-96' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Description</label>
                    <textarea className="border-black border-b h-20 outline-none px-1 py-2 w-96"  placeholder="Enter Description..." value={Description} onChange={handleDescription} required></textarea>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Ingredients</label>
                    <textarea placeholder='Enter Ingredients...' className="border-black border-b h-20 outline-none px-1 py-2 w-96" value={Ingredients} onChange={handleIngredients} required ></textarea>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Instructions</label>
                    <textarea placeholder='Enter Instructions...' className="border-black border-b h-20 px-1 outline-none py-2 w-96" value={Instructions} onChange={handleInstructions} required ></textarea>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Image</label>
                    <input type="text" placeholder='Enter Image Url...' value={Image} onChange={handleImage} className='border-black border-b outline-none px-2 py-1 text-black w-96' required />
                </div>
                <div className='mt-10' >
                    <h4 className='font-bold text-red-700'>{Error}</h4>
                    <h4 className='font-bold text-green-700'>{Success}</h4>
                    <Button
                        ButtonText='Add Recipe'
                        ButtonStyle='bg-black cursor-pointer text-center text-white px-3 py-1 rounded'
                    />
                </div>
            </form>
        </section>
    </div>
)
}

export default Create


