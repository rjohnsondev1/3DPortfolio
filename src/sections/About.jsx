import React from 'react';
import {logo, profile} from "../assets/index.js";
import '../index.css'

const About = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    return (
        <div className="modals flex">
            <div className="bg-black opacity-50 fixed inset-0" onClick={closeModal}></div>
            <div className="bg-white modal-content">
               <img src={logo} className="w-12 mx-auto"/>
                <h1>Roberta Johnson</h1>
                <h4>Web Designer/ Developer</h4>
                <img src={profile} className= 'w-24 mx-auto'/>
                <p>I am Roberta Johnson, a passionate developer hailing from New Jersey.  I specialize in crafting immersive digital experiences through a blending of cutting edge technologies and create design.
                    With expertise in modern frameworks such as React JS, Three JS, Next JS, and Node Js, I have a proven track record of designing and developing cohesive and visually stunning websites.
                    In addition to web development, I also have a knack for creating captivating 3D models and animations using tools such as Blender, Figma, and Spline. Please feel free to reach out to discuss and potential collaborations.
                </p>
                <button
                    onClick={closeModal}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default About;
