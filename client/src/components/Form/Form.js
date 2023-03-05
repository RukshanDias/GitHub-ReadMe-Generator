import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Form = (props) => {
    const pageNo = props.page;
    const { watch, register, handleSubmit, formState: { errors } } = useForm({ mode: "all" });
    const onSubmit = async(data) => {
        try {
            const response = await axios.post('/api/form-data', data);
            console.log(response.data); // response from the server
        } catch (error) {
            console.log(error);
        }
    }
    console.log("page " + props.page);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {pageNo === 0 && (
                    <div>
                        <input type="url" placeholder="Github Profile Link" {...register("Github Profile Link", { required: true, maxLength: 80 })} /><br />
                        <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 100 })} /><br />
                        <label htmlFor='username' />
                        <input type="text" id='username' {...register("username", { required: true, value: 'error' })} />
                    </div>
                )}

                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /><br />
                <input type="checkbox" placeholder="Technologies" {...register("Technologies", { required: true, maxLength: 12 })} />
            </form>
        </div>
    )
}

export default Form
