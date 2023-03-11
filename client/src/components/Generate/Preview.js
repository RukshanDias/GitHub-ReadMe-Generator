import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Preview = (props) => {
    return (
        <div className="w-2/5 max-h-screen px-8 py-5 bg-neutral-100 mx-5 my-5 overflow-auto" style={{maxHeight:"88vh"}}>
            <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
                {props.text}
            </ReactMarkdown>
            ;
        </div>
    );
};

export default Preview;
