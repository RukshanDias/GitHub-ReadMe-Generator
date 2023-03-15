import React from "react";
import { ImSpinner } from "react-icons/im";

const Loading = () => {
    return (
        <div className="flex justify-center items-center flex-col text-white px-4 py-6 border-0 rounded mb-4 bg-purple-600">
            <ImSpinner className="animate-spin mb-2 text-3xl" />
            <p className="text-center text-xl"> Generating Your ReadMe</p>
        </div>
    );
};

export default Loading;