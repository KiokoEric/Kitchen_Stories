import '../Create/Create.css'
import React, { ChangeEvent, useState } from 'react';
import Heading from '../../Components/Common/Heading/Heading';

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
            Heading='Create'
            HeadingStyle='font-bold text-4xl'
        />
        <section>
        <form method="post" encType="multipart/form-data" >
                <div>
                    <label htmlFor="">Name</label> 
                    <input type="text" name="Subject" id="Subject" placeholder="Enter Name..." value={Name} onChange={handleName} required />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <textarea type="text" className="Description" name='Description' id="Description" cols="1" rows="10" placeholder="Enter Description..."  value={Description} onChange={handleDescription} required ></textarea>
                </div>
                <div>
                    <label htmlFor="">Ingredients</label>
                    <textarea type="text" name="" id="Ingredients" cols="30" rows="10" placeholder='Enter Ingredients'  value={Ingredients} onChange={handleIngredients} required ></textarea>
                </div>
                <div>
                    <label htmlFor="">Instructions</label>
                    <textarea type="text" name="" id="Instructions" cols="30" rows="10" placeholder='Enter Instructions'  value={Instructions} onChange={handleInstructions} required ></textarea>
                </div>
                <div>
                    <label htmlFor="">Image</label>
                    <input type="text" name="Image" id="Image" placeholder='Enter Image Url...' value={Image} onChange={handleImage} required />
                </div>
                <div>
                    <h4 className='Error'>{Error}</h4>
                    <h4 className='Success' >{Success}</h4>
                    <button type="submit">Add Recipe</button>
                </div>
            </form>
        </section>
    </div>
)
}

export default Create