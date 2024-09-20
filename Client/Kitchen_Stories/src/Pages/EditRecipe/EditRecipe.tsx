import axios from "axios";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Input from "../../Components/Common/Input/Input";
import Button from '../../Components/Common/Button/Button';
import Heading from '../../Components/Common/Heading/Heading';
import TextArea from "../../Components/Common/TextArea/TextArea";
import { useGetUserID } from "../../Components/Hooks/useGetUserID";

const EditRecipe:React.FC = () => {

    const { _id } = useParams()
    const userID = useGetUserID();
    const [Cookie,_] = useCookies(["auth_token"])

    // USESTATE HOOK

    const [Name, setName] = useState<string>("")
    const [Image, setImage] = useState<string>("")
    const [Success, setSuccess] = useState<string>("")
    const [Ingredients, setIngredients] = useState<[]>([])
    const [userOwner, setuserOwner] = useState<any>(userID)
    const [Instructions, setInstructions] = useState<[]>([])
    const [Description, setDescription] = useState<string>("")

    // RECEIVING CREATED RECIPE DATA

    useEffect(() => {
        axios.get(`http://localhost:4000/Recipe/${_id}`, {
                headers: { authorization: Cookie.auth_token },
            }) 
        .then((Data) => { 
            setName(Data.data.Name)
            setImage(Data.data.Image) 
            setDescription(Data.data.Description)
            setIngredients(Data.data.Ingredients)
            setInstructions(Data.data.Instructions) 
        })
    }, [])

    // RECIPE EDIT FUNCTION
    
    const Edit = async (e:any) => {
        e.preventDefault()

        const data = {
            Name, Description, Ingredients, Instructions, Image, userOwner
        }
        axios.put(`http://localhost:4000/Recipe/${_id}`, data , {
            headers: { authorization: Cookie.auth_token },
        }) 
        .then(() => {
            setSuccess('Recipe has been successfully edited.') 
        })
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
            <form method="post" onSubmit={Edit} encType="multipart/form-data" className='flex flex-col gap-4'>
                <Input 
                    ContainerStyle = 'flex flex-col gap-2'
                    Label = 'Name'
                    LabelStyle = 'font-bold'
                    inputStyle = 'border-black border-b h-8 outline-none truncate px-1 py-1 text-black w-80 sm:w-96'  
                    Value={Name}
                    Change={(e: any) => setName(e.target.value)}
                />
                <TextArea 
                    ContainerStyle = 'flex flex-col gap-2'
                    Label = 'Description'
                    LabelStyle = 'font-bold'
                    inputStyle = 'border-black border-b h-20 outline-none truncate px-1 py-1 text-black w-80 sm:w-96'   
                    Value={Description}
                    Change={(e: any) => setDescription(e.target.value)}
                />
                <TextArea
                    ContainerStyle = 'flex flex-col gap-2'
                    Label = 'Ingredients'
                    LabelStyle = 'font-bold'
                    inputStyle = 'border-black border-b h-20 outline-none truncate px-1 py-1 text-black w-80 sm:w-96'  
                    Value={Ingredients}
                    Change={(e: any) => setIngredients(e.target.value)}
                />
                <TextArea 
                    ContainerStyle = 'flex flex-col gap-2'
                    Label = 'Instructions'
                    LabelStyle = 'font-bold'
                    inputStyle = 'border-black border-b h-20 outline-none truncate px-1 py-1 text-black w-80 sm:w-96'
                    Value={Instructions}
                    Change={(e: any) => setInstructions(e.target.value)}
                    />
                <Input 
                    ContainerStyle = 'flex flex-col gap-2'
                    Label = 'Image'
                    LabelStyle = 'font-bold'
                    inputStyle = 'border-black border-b h-8 outline-none truncate px-1 py-1 text-black w-80 sm:w-96'  
                    Value={Image}
                    Change={(e: any) => setImage(e.target.value)}       
                />
                <div className='mt-10'>
                    <h4 className='font-bold text-center text-green-700'>{Success}</h4>
                    <Button
                        ButtonText='Edit Recipe'
                        ButtonStyle='bg-black cursor-pointer text-center text-white px-3 py-1 rounded'
                        onClick={Edit}
                    />
                </div>
            </form>
        </section>
    </div>
)
}

export default EditRecipe