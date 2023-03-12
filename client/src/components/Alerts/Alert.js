import React from "react";

const Alert = ({ show, setShow }) => {
    const [showAlert, setShowAlert] = React.useState(show);
    return (
        <>
            {showAlert ? (
                <div className={"text-white px-6 py-4 border-0 rounded absolute mb-4 bg-red-500 -top-5 left-10"}>
                    <span className="inline-block align-middle mr-8">
                        <b className="capitalize">Invalid!</b> Please enter Username & your name
                    </span>
                    <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                        onClick={() => setShow(false)}
                    >
                        <span>×</span>
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default Alert;
