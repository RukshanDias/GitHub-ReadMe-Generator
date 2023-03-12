import React, { useState, useContext } from "react";
import Preview from "../components/Generate/Preview";
import Editor from "../components/Generate/Editor";
import MarkdownContext from "../context/MarkdownContext";

const Generate = () => {
    const { responseData } = useContext(MarkdownContext);
    const [text, setText] = useState(responseData);
    const handleTextChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div className="generate-page App text-center h-screen">
            <h2 className="text-4xl font-mono font-semibold pt-3">\\ Generated ReadMe //</h2>
            <div className="flex justify-center">
                <Editor text={text} handlechange={handleTextChange} />
                <Preview text={text} />
            </div>
        </div>
    );
};

export default Generate;
