import React from "react";
import FormCard from "../components/Form/FormCard";
import YourSvg from "../assets/coding.svg";

const Home = () => {
    return (
        <div className="App flex justify-center items-center min-h-screen flex-row">
            <div className="img-container w-1/3 relative mt-30 mr-24">
                <div className="backdrop"></div>
                <img src={YourSvg} alt="Your SVG" className="" />
            </div>
            <FormCard />
        </div>
    );
};

export default Home;
