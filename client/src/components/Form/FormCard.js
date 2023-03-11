import React from "react";
import { useState, useRef } from "react";
import Form from "./Form";

const FormCard = () => {
  const [page, setpage] = useState(0);
  const formHeaders = ["About You", "Skills", "Links", "Others"];
  const nextBtnRef = useRef(null);
  const childRef = useRef();

  return (
    <div className="Form bg-neutral-100 px-10 py-12 rounded-md w-1/3 my-2 shadow">
      <div className="form-container">
        <div className="progressbar text-gray-500 text-sm font-semibold">
          <p>
            Step {page + 1} of {formHeaders.length}
          </p>
        </div>

        <div className="header text-center mt-2 mb-6 text-4xl font-mono text-purple-700">
          <h2>{formHeaders[page]}</h2>
        </div>

        <div className="form-body overflow-auto">
          <Form page={page} />
        </div>

        <div className="footer flex justify-around mt-5">
          <button
            className="bg-purple-800 text-stone-50 px-4 py-1 rounded-lg cursor-pointer"
            disabled={page <= 0}
            onClick={() => setpage(() => page - 1)}
          >
            Back
          </button>

          {/* redering Next btn or Submit btn */}
          {page === formHeaders.length - 1 ? (
            <button type="submit">Submit</button>
          ) : (
            <button
              className="bg-purple-800 text-stone-50 px-4 py-1 rounded-lg cursor-pointer"
              ref={nextBtnRef}
              disabled={page === formHeaders.length - 1}
              onClick={() => setpage(() => page + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormCard;
