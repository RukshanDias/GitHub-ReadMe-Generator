import React from 'react';
import { useState } from 'react';
import AccountForm from './AccountForm';
import AboutMeForm from './AboutMeForm';

const Form = () => {
    const [page, setpage] = useState(0);
    const formHeaders = ["Account Detals", "About You", "Social media", "Technologies"];
    const FormDisplay = () => {
        switch (page) {
            case 0:
                return <AccountForm />
            case 1:
                return <AboutMeForm />
            default:
                <h2>error</h2>
        }
    }

    return (
        <div className='form'>
            <div className='progressbar'></div>

            <div className='form-container'>
                <div className='header'>
                    <h2>{formHeaders[page]}</h2>
                </div>
                <div className='body'>{FormDisplay()}</div>
                <div className='footer'>
                    <button
                        disabled={page <= 0}
                        onClick={() => setpage(() => page - 1)}
                    >Back</button>
                    <button
                        disabled={page === formHeaders.length - 1}
                        onClick={() => setpage(() => page + 1)}
                    >Next</button>
                </div>
            </div>
        </div>
    )
}

export default Form
