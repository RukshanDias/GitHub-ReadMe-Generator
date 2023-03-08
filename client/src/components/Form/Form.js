import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { languages, frontend, backend } from "../../data/Skills";

const Form = (props) => {
    const pageNo = props.page;
    const {
        watch,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: "all" });
    const socialApps = ["twitter", "stackoverflow", "facebook", "linkedin", "youtube", "Medium", "discord"];

    const displaySkills = (object) => {
        return (
            <div className="flex flex-wrap">
                {object.map((element, index) => (
                    <div key={index} className="flex items-center w-1/4 my-1">
                        <input type="checkbox" className="mr-1 cursor-pointer" id={element.name} name={element.name} value={element.link} />
                        <label htmlFor={element.name} className="flex items-center cursor-pointer">
                            <img src={element.link} alt={element.name} className="w-10 h-10 mr-1" />
                        </label>
                    </div>
                ))}
            </div>
        );
    };
    const onSubmit = (data, e) => {
        console.log(data, e);
        sendFormData(data);
    };

    const sendFormData = (data) => {
        axios
            .post("http://localhost:8000/api", data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* ABOUT YOU */}
                {pageNo === 0 && (
                    <div>
                        <label htmlFor="githubLink" className="inline-block mt-3 mb-1.5">
                            Github Username
                        </label>
                        <input
                            className="w-full bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg outline-blue-600 p-2.5"
                            type="text"
                            id="githubLink"
                            placeholder="Github User Name"
                            {...register("GithubLink", {
                                required: true,
                            })}
                        />
                        {errors.GithubLink && <p className="form-error-msg">This field is required</p>}

                        <label htmlFor="name" className="inline-block mt-3 mb-1.5">
                            Name
                        </label>
                        <input
                            className=" w-full bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg outline-blue-600 p-2.5"
                            type="text"
                            id="name"
                            placeholder="Name"
                            {...register("Name", { required: true, maxLength: 100 })}
                        />
                        {errors.Name && <p className="form-error-msg">This field is required</p>}

                        <label htmlFor="personalStatement" className="inline-block mt-3 mb-1.5">
                            Personal Statement
                        </label>
                        <input
                            className="w-full bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg outline-blue-600 p-2.5"
                            type="text"
                            id="personalStatement"
                            {...register("personalStatement", { required: true })}
                        />

                        <label htmlFor="work" className="inline-block mt-3 mb-1.5">
                            Work
                        </label>
                        <textarea
                            className="w-full bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg outline-blue-600 p-2.5"
                            rows={5}
                            id="work"
                            defaultValue={`🔭 I’m currently working on: ...\n👯 I’m looking to collaborate on: ...\n💬 Ask me about: ...\n⚡ Fun fact: ...`}
                            {...register("work")}
                        />
                    </div>
                )}

                {/* SKILLS */}
                {pageNo === 1 && (
                    <>
                        <h2 className="mb-3">Languages</h2>
                        {displaySkills(languages)}
                        <h2 className="my-3">Frontend</h2>
                        {displaySkills(frontend)}
                        <h2 className="my-3">Backend</h2>
                        {displaySkills(backend)}
                    </>
                )}

                {/* LINKS */}
                {pageNo === 2 && (
                    <div>
                        <input
                            type="url"
                            placeholder="Github Profile Link"
                            {...register("GithubProfileLink", {
                                required: true,
                                maxLength: 80,
                            })}
                        />
                        {errors.GithubProfileLink && <p>This field is required</p>}
                        <br />
                    </div>
                )}

                {/* OTHERS */}
                {pageNo === 3 && (
                    <div>
                        <input
                            type="url"
                            placeholder="Github Profile Link"
                            {...register("GithubProfileLink", {
                                required: true,
                                maxLength: 80,
                            })}
                        />
                        {errors.GithubProfileLink && <p>This field is required</p>}
                        <br />
                        <button type="submit">Generate</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Form;
