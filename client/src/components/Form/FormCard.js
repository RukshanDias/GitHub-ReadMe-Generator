import React from 'react';
import { useState } from 'react';
import Form from './Form';

const FormCard = () => {
    const [page, setpage] = useState(0);
    const formHeaders = ["Account Detals", "About You", "Social media", "Technologies"];
    // const FormDisplay = () => {
    //     switch (page) {
    //         case 0:
    //             return <AccountForm />
    //         case 1:
    //             return <AboutMeForm />
    //         default:
    //             <h2>error</h2>
    //     }
    // }

    return (
        <div className='Form bg-neutral-100 px-10 py-12 rounded-md'>
            <div className='progressbar'>
                <p>Step {page} of {formHeaders.length}</p>
            </div>

            <div className='form-container'>
                <div className='header text-center'>
                    <h2>{formHeaders[page]}</h2>
                </div>
                <div className='form-body'>
                    <Form page={page}/>
                </div>
                <div className='footer flex justify-around mt-6'>
                    <button
                        className='bg-purple-800 text-stone-50 px-4 py-1 rounded-lg cursor-pointer'
                        disabled={page <= 0}
                        onClick={() => setpage(() => page - 1)}
                    >Back</button>
                    <button
                        className='bg-purple-800 text-stone-50 px-4 py-1 rounded-lg cursor-pointer'
                        disabled={page === formHeaders.length - 1}
                        onClick={() => setpage(() => page + 1)}
                    >Next</button>
                </div>
            </div>
        </div>
    )
}

export default FormCard
