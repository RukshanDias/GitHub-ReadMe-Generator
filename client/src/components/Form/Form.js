import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { languages, frontend, backend } from "../../data/Skills";
import MarkdownContext from "../../context/MarkdownContext";
import Alert from "../Alerts/Alert";
import Loading from "../Loading/Loading";

const Form = (props) => {
    const pageNo = props.page;
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const { setResponseData } = useContext(MarkdownContext);
    const navigate = useNavigate();
    const socialApps = ["twitter", "stackoverflow", "facebook", "linkedin", "youtube", "Medium", "discord"];
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: "all" });

    const displaySkills = (object, startname) => {
        return (
            <div className="flex flex-wrap">
                {object.map((element, index) => (
                    <div key={index} className="flex items-center w-1/4 my-1">
                        <input
                            type="checkbox"
                            className="mr-1 cursor-pointer"
                            id={element.name}
                            name={startname + element.name}
                            value={element.link}
                            {...register(startname + element.name)}
                        />
                        <label htmlFor={element.name} className="flex items-center cursor-pointer">
                            <img src={element.link} alt={element.name} className="w-10 h-10 mr-1" />
                        </label>
                    </div>
                ))}
            </div>
        );
    };

    const getCheckboxData = (startname, data) => {
        const checkedData = Object.entries(data)
            .filter(([name, value]) => {
                return name.startsWith(startname) && value != false;
            })
            .map(([name, value]) => value);
        return checkedData;
    };

    const getSocialLinksData = (data) => {
        let socialLinks = {};
        socialApps.forEach((app) => {
            const link = data[app];
            if (link && link.trim() !== "") {
                socialLinks[app] = link;
            }
        });
        return socialLinks;
    };

    const isFormValid = (data) => {
        if (data.GithubLink && data.Name) {
            return true;
        }
        return false;
    };

    const onSubmit = (data, e) => {
        if (isFormValid(data)) {
            const selectedLanguages = getCheckboxData("language", data);
            const selectedFrontend = getCheckboxData("frontend", data);
            const selectedBackend = getCheckboxData("backend", data);
            const socialLinksObj = getSocialLinksData(data);

            const FinalData = {
                ...data,
                selectedLanguages,
                selectedFrontend,
                selectedBackend,
                socialLinksObj,
            };
            sendFormData(FinalData);
        } else {
            console.log("invalid data");
            setErrorMsg(true);
        }
    };

    const sendFormData = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post("https://github-readme-generator-api.onrender.com/generate-readme", data);
            setResponseData(response.data);
            navigate("/generate");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {errorMsg && <Alert show={errorMsg} setShow={setErrorMsg} />}

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
                            {...register("Name", { required: true, maxLength: 50 })}
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
                            defaultValue={`🔭 I’m currently working on: ...\n👯 I’m looking to collaborate on: ...\n💬 Ask me about: ...\n🌱 I’m currently learning: ...\n⚡ Fun fact: ...`}
                            {...register("work")}
                        />
                    </div>
                )}

                {/* SKILLS */}
                {pageNo === 1 && (
                    <>
                        <h2 className="mb-3">Languages</h2>
                        {/* keep the space inthe end */}
                        {displaySkills(languages, "language ")}
                        <h2 className="my-3">Frontend</h2>
                        {displaySkills(frontend, "frontend ")}
                        <h2 className="my-3">Backend</h2>
                        {displaySkills(backend, "backend ")}
                    </>
                )}

                {/* LINKS */}
                {pageNo === 2 && (
                    <div>
                        {socialApps.map((app, index) => {
                            return (
                                <div key={index} className="my-4">
                                    <input
                                        className="w-full bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg outline-blue-600 p-2.5"
                                        type="url"
                                        name={app}
                                        placeholder={app + " profile link"}
                                        {...register(app, {
                                            required: false,
                                            maxLength: 80,
                                        })}
                                    />
                                    {errors[app] && <p>This field is required</p>}
                                    <br />
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* OTHERS */}
                {pageNo === 3 && (
                    <div>
                        <div className="flex items-center my-2">
                            <input
                                type="checkbox"
                                className="mr-2 cursor-pointer"
                                id="displayCoverImg"
                                name="displayCoverImg"
                                {...register("displayCoverImg")}
                            />
                            <label htmlFor="displayCoverImg" className="flex items-center cursor-pointer">
                                Display Cover image on top
                            </label>
                        </div>

                        <div className="flex items-center my-2">
                            <input
                                type="checkbox"
                                className="mr-2 cursor-pointer"
                                id="displayGitStats"
                                name="displayGitStats"
                                {...register("displayGitStats")}
                            />
                            <label htmlFor="displayGitStats" className="flex items-center cursor-pointer">
                                Display GitHub stats
                            </label>
                        </div>

                        <div className="flex items-center my-2">
                            <input
                                type="checkbox"
                                className="mr-2 cursor-pointer"
                                id="displayTopSkills"
                                name="displayTopSkills"
                                {...register("displayTopSkills")}
                            />
                            <label htmlFor="displayTopSkills" className="flex items-center cursor-pointer">
                                Display GitHub Top Skills
                            </label>
                        </div>
                        <button type="submit" className="form-submit-btn" />
                        {loading && <Loading />}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Form;
