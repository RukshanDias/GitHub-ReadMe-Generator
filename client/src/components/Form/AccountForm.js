import React from 'react';
import { useForm } from 'react-hook-form';

const AccountForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="url" placeholder="Github Profile Link" {...register("Github Profile Link", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="checkbox" placeholder="Technologies" {...register("Technologies", { required: true, maxLength: 12 })} />
            </form>
        </div>
    )
}

export default AccountForm
