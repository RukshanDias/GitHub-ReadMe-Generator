import React from "react";
import ReactMarkdown from "react-markdown";

const Preview = (props) => {
    return (
        <div className="w-1/2 px-16 py-5 bg-slate-100 mx-5 my-5 overflow-auto">
            <ReactMarkdown className="markdown">{props.text}</ReactMarkdown>;
        </div>
    );
};

export default Preview;
