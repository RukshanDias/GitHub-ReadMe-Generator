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
        <div className="flex">
            <Editor text={text} handlechange={handleTextChange} />
            <Preview text={text} />
        </div>
    );
};

export default Generate;
