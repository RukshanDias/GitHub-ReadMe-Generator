import React from "react";
import { FiCopy, FiDownload } from "react-icons/fi";

const Editor = (props) => {
    const handleCopy = () => {
        const textarea = document.getElementById("finalMarkdown");
        if (textarea) {
            textarea.select();
            document.execCommand("copy");
        }
    };
    return (
        <div className="w-2/5 max-h-screen px-16 py-5 bg-neutral-100 mx-5 my-5 overflow-auto">
            <textarea
                onChange={props.handlechange}
                className="w-full p-3 border-2 border-gray-900 rounded-md bg-neutral-100"
                id="finalMarkdown"
                rows={22}
            >
                {props.text}
            </textarea>
            <div className="flex justify-around">
                <button className="bg-purple-800 text-stone-50 px-4 py-1 rounded-lg cursor-pointer mt-2 flex items-center" onClick={handleCopy}>
                    <FiCopy className="mr-2" />
                    Copy
                </button>
                <button className="bg-purple-800 text-stone-50 px-4 py-1 rounded-lg cursor-pointer mt-2 flex items-center">
                    <FiDownload className="mr-2" />
                    Download
                </button>
            </div>
        </div>
    );
};

export default Editor;
