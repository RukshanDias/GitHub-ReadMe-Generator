import React from "react";

const Editor = (props) => {
    const handleCopy = () => {
        const textarea = document.getElementById("finalMarkdown");
        if (textarea) {
            textarea.select();
            document.execCommand("copy");
        }
    };
    return (
        <div className="w-1/2 px-16 py-5 bg-slate-100 mx-5 my-5">
            <textarea onChange={props.handlechange} className="editor w-full" id="finalMarkdown">
                {props.text}
            </textarea>
            <div className="flex justify-around">
                <button className="bg-purple-800 text-stone-50 px-4 py-1 rounded-lg cursor-pointer" onClick={handleCopy}>
                    Copy
                </button>
                <button className="bg-purple-800 text-stone-50 px-4 py-1 rounded-lg cursor-pointer">Download</button>
            </div>
        </div>
    );
};

export default Editor;
