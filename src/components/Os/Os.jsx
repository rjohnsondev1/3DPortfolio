import React, { useState, useRef, useEffect } from 'react';
import './OS.scss';
import {
    bookfront,
    finder1,
    launch,
    email,
    projects,
    safari,
    settings,
    Trashfull,
    linkedin,
    github,
    jestelleweb1,
    AppleLogo, vscode,

} from '/src/assets';

import { skills, Recent, css, aws, html, java, sass, mysql, nextjs, nodejs, react, threed, vite1, threejs, javascript, postgresql,  } from '/src/assets/Finder/'
import { abletonlive, electron, swift, xcode, flstudio, rekord, spline, VsCode, unrealicon, blender_icon, magnifyingglass } from "../../assets/Launchpad/";

const Os = ({closeOs, isEmailOpen, isProjectsOpen, toggleEmailOpen, toggleProjectsOpen }) => {
    // Local state and refs
    const [showBookFront, setShowBookFront] = useState(false);
    //const [isEmailOpen, setIsEmailOpen] = useState(props.isEmailOpen);
    const [isFinderOpen, setIsFinderOpen]= useState(false);
    //const [isFinderOpen, setIsFinderOpen] = useState(props.isFinderOpen);
    const [isLaunchpad1Open, setIsLaunchpad1Open] = useState(false);
    //const [isProjectsOpen, setIsProjectsOpen] = useState(props.isProjectOpen);
    const [messageSent, setMessageSent] = useState(false);
    const [errorOccurred, setErrorOccurred] = useState(false);
    //const handleEmailToggle = () => toggleEmailOpen();
   // const handleProjectsToggle = () => toggleProjectsOpen()

    const bookfrontRef = useRef(null);
    const emailRef = useRef(null);
    const finderRef = useRef(null);
    const launchpad1Ref = useRef(null);
    const projectsRef = useRef(null);

    const handleFinderToggle = (e) => {setIsFinderOpen(!isFinderOpen);
        e.stopPropagation();
    };
    const handleEmailToggle = (e) => {
        e.stopPropagation();
        toggleEmailOpen()};
    const handleProjectsToggle = (e) => {
        e.stopPropagation();
        toggleProjectsOpen()};
    const handleSafariToggle = (e) => {
        e.stopPropagation();
        setShowBookFront(!showBookFront);
    }
    const handleLaunchpad1Toggle = (e) => {
        e.stopPropagation();
        setIsLaunchpad1Open(!isLaunchpad1Open);
    }





    // Sync state with incoming props for `isEmailOpen`, `isFinderOpen`, and `isProjectsOpen`
    useEffect(() => {
        //setIsEmailOpen(props.isEmailOpen);
        //setIsFinderOpen(props.isFinderOpen);
       // setIsProjectsOpen(props.isProjectsOpen);
        setIsFinderOpen(false);
    }, [isEmailOpen,  isProjectsOpen]);

    // Handle clicking outside of the components
    useEffect(() => {
       const handleClickOutside = (event) => {
            if (bookfrontRef.current && !bookfrontRef.current.contains(event.target)) {
                setShowBookFront(false);
            }
            if (emailRef.current && !emailRef.current.contains(event.target)) {
                closeOs();
            }
            if (finderRef.current && !finderRef.current.contains(event.target)) {
                setIsFinderOpen(false);
            }
            if (launchpad1Ref.current && !launchpad1Ref.current.contains(event.target)) {
                setIsLaunchpad1Open(false);
            }
            if (projectsRef.current && !projectsRef.current.contains(event.target)) {
                closeOs();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Debugging logs to track when props change and state updates
    /*useEffect(() => {
        console.log("isEmailOpen prop:", props.isEmailOpen);
        console.log("isFinderOpen prop:", props.isFinderOpen);
        console.log("isProjectsOpen prop:", props.isProjectsOpen);
        console.log("Current state isEmailOpen:", isEmailOpen);
        console.log("Current state isFinderOpen:", isFinderOpen);
        console.log("Current state isProjectsOpen:", isProjectsOpen);
    }, [isEmailOpen, isFinderOpen, isProjectsOpen, props.isEmailOpen, props.isFinderOpen, props.isProjectsOpen]); */

    const handleSubmit = (event) => {
        event.preventDefault();
        // Email sending logic (e.g. emailjs) would go here
        setMessageSent(true);
    };



    return (
        <div className="os-container">
            <button onClick={closeOs} className='close-os-button'>X</button>

            {/* Menu Bar */}
            <div className='menu-bar'>
                <div className='group-leading'>
                    <div className='apple-logo'>
                        <img src={AppleLogo} alt="apple logo"/>
                    </div>
                    <div className="app-name">
                        <div className="app-name1">Finder</div>
                    </div>
                    <div className="app-name">
                        <div className="menu-label">File</div>
                    </div>
                    <div className="app-name">
                        <div className="menu-label">Edit</div>
                    </div>
                    <div className="app-name">
                        <div className="menu-label">View</div>
                    </div>
                    <div className="app-name">
                        <div className="menu-label">Go</div>
                    </div>
                    <div className="app-name">
                        <div className="menu-label">Window</div>
                    </div>
                    <div className="app-name">
                        <div className="menu-label">Help</div>
                    </div>
                </div>
                <div className='frame-trailing'>
                    <div className="menu-item-trailing">
                        <div className="menu-label">􀙇</div>
                    </div>
                    <div className='app-name'>
                        <div className="menu-label">􀊫</div>
                    </div>
                    <div className="app-name">
                        <div className="menu-label">􀉭</div>
                    </div>
                    <div className="app-name">
                        <div className="menu-label">􀜊</div>
                    </div>
                    <div className="menu-label-wrapper">
                        <div className="menu-label10">Mon Jul 1&nbsp;&nbsp;3:41 PM</div>
                    </div>
                </div>


            </div>
            <section className="dock-container">
                <div className="dock-item">
                    <div className="tool-tip"><p>Skills</p></div>
                    <img src={finder1} onClick={handleFinderToggle} alt="finder" className="image-wrapper"/>
                </div>
                <div className="dock-item">
                    <div className="tool-tip"><p>Tech</p></div>
                    <img src={launch} onClick={handleLaunchpad1Toggle} alt="launch" className="image-wrapper"/>
                </div>
                <div className="dock-item">
                    <div className="tool-tip"><p>Email</p></div>
                    <img src={email} onClick={handleEmailToggle} alt="email" className="image-wrapper"/>
                </div>
                <div className="dock-item">
                    <div className="tool-tip"><p>Projects</p></div>
                    <img src={projects} onClick={handleProjectsToggle} alt="projects" className="image-wrapper"/>
                </div>
                <div className="dock-item" ref={bookfrontRef}>
                    <div className="tool-tip"><p>About</p></div>
                    <img src={safari} onClick={handleSafariToggle} alt="safari" className="image-wrapper"/>
                </div>
                <div className="dock-item">
                    <div className="tool-tip"><p>Settings</p></div>
                    <img src={settings} alt="settings" className="image-wrapper"/>
                </div>
                <div className="dock-item">
                    <div className="tool-tip"><p>Trash</p></div>
                    <img src={Trashfull} alt="trash"/>
                </div>
            </section>

            {isFinderOpen && (
                <div className='finder-container' ref={finderRef}>
                    {/* Finder Content */}
                    <div className='sidebarAndContentAreaWith'>
                        <div className='sidebar'>
                            <div className='toolbar'>
                                <div className='windowControls'>
                                    <div className='window-button close' onClick={handleFinderToggle}></div>
                                    <div className='window-button minimize'/>
                                    <div className='zoom'/>
                                </div>
                            </div>
                            <div className='sidebarList'>
                                <div className='sidebarGroup'>
                                    <div className='sectionHeader'>
                                        <b className='section'>Favorites</b>
                                        <div className='symbol'>􀆈</div>
                                    </div>
                                    <div className='component1'>
                                        <div className='sidebarItemWrapper'>
                                            <div className='sidebarItem1'>
                                                <div className='leading'>
                                                    <div className='symbol1'/>
                                                    <img className='skillsIcon' alt="" src={skills}/>
                                                    <div className='label'>Skills</div>
                                                </div>
                                                <div className='trailing'/>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='sidebarItem1'>
                                        <div className='leading'>
                                            <div className='symbol1'>􀣰</div>
                                            <div className='label'>Desktop</div>
                                        </div>
                                        <div className='trailing'/>
                                    </div>
                                    <div className='sidebarItem1'>
                                        <div className='leading'>

                                            <div className='symbol1'>
                                                <img alt='Recent' src={Recent}/>
                                            </div>
                                            <div className='label'>
                                                <span className='labelTxt'>
                                                    <p className='recent'>Recent</p>
                                                </span>
                                            </div>
                                        </div>
                                        <div className='trailing'/>
                                    </div>
                                </div>
                                <div className='sidebarItem1'>
                                    <div className='leading'>
                                        <div className='symbol1'>􀁸</div>
                                        <div className='label'>Downloads</div>
                                    </div>
                                    <div className='trailing'/>
                                </div>
                                <div className='sidebarGroup1'>
                                    <div className='sectionHeader'>
                                        <b className='section'>Locations</b>
                                        <div className='symbol'>􀆈</div>
                                    </div>
                                    <div className='sidebarItem4'>
                                        <div className='leading'>
                                            <div className='symbol1'>􀤂</div>
                                            <div className='label'>Roberta’s Portfolio</div>
                                        </div>
                                        <div className='trailing'/>
                                    </div>
                                    <div className='sidebarItem5'/>
                                </div>
                            </div>
                        </div>
                        <div className='separator'/>
                        <div className='contentAreaAndToolbar'>
                            <div className='contentArea'>
                                <div className='listItemPrimary'>
                                    <div className='documentIconLabel'>
                                        <img src={vite1}/>
                                        <div className='label5'> Vite</div>
                                    </div>
                                </div>
                                <div className='listItemPrimary1'>
                                    <div className='documentIconLabel'>
                                        <img src={react}/>
                                        <div className='label5'> React</div>
                                    </div>
                                </div>
                                <div className='listItemPrimary2'>
                                    <div className='documentIconLabel'>
                                        <img src={sass}/>
                                        <div className='label5'> Sass</div>
                                    </div>
                                </div>
                                <div className='listItemPrimary3'>
                                    <img src={nodejs}/>
                                    <div className='label5'> Node.js</div>
                                </div>
                                <div className='margins'/>

                                <div className='listItemPrimary4'>
                                    <img src={threejs}/>
                                    <div className='label5'> Three.js</div>
                                </div>
                                <div className='listItemPrimary5'>
                                    <img src={html}/>
                                    <div className='label5'> HTML</div>
                                </div>

                                <div className='listItemPrimary6'>
                                    <div className='documentIconLabel'>
                                        <img src={css}/>
                                        <div className='label5'> CSS</div>
                                    </div>
                                </div>
                                <div className='listItemPrimary7'>
                                    <div className='documentIconLabel'>
                                        <img className='javascriptsj1icon' src={javascript}/>
                                        <div className='label5'> JavaScript</div>

                                    </div>
                                </div>

                                <div className='listItemPrimary14'>
                                    <div className='documentIconLabel'>
                                        <img src={threed}/>
                                        <div className='label5'> 3D Modeling</div>
                                    </div>
                                </div>
                                <div className='listItemPrimary9'>
                                    <img src={java}/>
                                    <div className='label5'> Java</div>
                                </div>

                                <div className='listItemPrimary9'>
                                    <div className='documentIconLabel'>
                                        <img src={nextjs}/>
                                        <div className='label5'> Next.js</div>
                                    </div>
                                </div>
                                <div className='listItemPrimary10'>
                                    <img src={postgresql}/>
                                    <div className='label5'> Postgres</div>
                                </div>
                                <div className='listItemPrimary11'>
                                    <div className='documentIconLabel'>
                                        <img src={aws}/>
                                        <div className='label5'> AWS</div>
                                    </div>
                                </div>
                                <div className='listItemPrimary12'>
                                    <img src={mysql}/>
                                    <div className='label5'> MySQL</div>
                                </div>
                                <div className='header'>
                                    <div className='labelRightDetail'>
                                        <div className='label18'>Name</div>
                                        <div className='rightDetail'/>
                                    </div>
                                    <div className='separator1'/>
                                </div>
                                <div className='listItemPrimary13'>
                                    <div className='documentIconLabel7'>
                                        <div className='label5'> Javascript</div>
                                    </div>
                                </div>

                            </div>
                            <div className='toolbar1'>
                                <div className='leading5'>
                                    <div className='titleSidebarAndNavigation'>
                                        <div className='sidebarButton'>
                                            <div className='symbol7'>􀏚</div>
                                        </div>
                                        <div className='finder-title'>Skills</div>
                                    </div>
                                </div>
                                <div className='trailing5'>
                                    <div className='spacer'/>
                                    <div className='spacer'/>
                                    <div className='spacer'/>
                                    <div className='search'>
                                        <div className='symbol8'>􀊫</div>
                                        <div className='searchLabel'>Search</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isLaunchpad1Open && (

                <div className="launchpad-wrapper flex   items-center justify-center min-h-screen bg-gray-900 " ref={launchpad1Ref} >

                    <div className="search-bar absolute flex top-6 w-1/3 mb-8 justify-center">
                        <img src={magnifyingglass} />
                        <input

                            type="text"
                            placeholder="Search for apps"
                            className="w-full px-4 py-2 rounded-lg border  border-gray-300 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>


                    <div className="launchpad-container grid grid-cols-4 gap-1 content-evenly mt-10 p-6">
                        <div
                            className="icon-container flex flex-col items-center justify-center text-center transition-transform transform hover:scale-110">
                            <img src={unrealicon} alt="App Icon 1" className="w-12 h-12"/>
                            <span className="text-sm mt-2 text-white">Unreal</span>
                        </div>

                        <div
                            className="icon-container flex flex-col items-center justify-center text-center transition-transform transform hover:scale-110">
                            <img src={electron} alt="App Icon 2" className="w-12 h-12"/>
                            <span className="text-sm mt-2 text-white">Figma</span>
                        </div>

                        <div
                            className="icon-container flex flex-col items-center justify-center text-center transition-transform transform hover:scale-110">
                            <img src={blender_icon} alt="App Icon 3" className="w-12 h-12"/>
                            <span className="text-sm mt-2 text-white">Blender</span>
                        </div>
                        <div
                            className="icon-container flex flex-col items-center justify-center text-center transition-transform transform hover:scale-110">
                            <img src={spline} alt="App Icon 3" className="w-12 h-12"/>
                            <span className="text-sm mt-2 text-white">Spline</span>
                        </div>
                        <div
                            className="icon-container flex flex-col items-center justify-center text-center transition-transform transform hover:scale-110">
                            <img src={vscode} alt="App Icon 3" className="w-12 h-12"/>
                            <span className="text-sm mt-2 text-white">Vs Code</span>
                        </div>
                        <div
                            className="icon-container flex flex-col items-center justify-center text-center transition-transform transform hover:scale-110">
                            <img src={swift} alt="App Icon 3" className="w-12 h-12"/>
                            <span className="text-sm mt-2 text-white">Swift</span>
                        </div>
                        <div
                            className="icon-container flex flex-col items-center justify-center text-center transition-transform transform hover:scale-110">
                            <img src={xcode} alt="App Icon 3" className="w-12 h-12"/>
                            <span className="text-sm mt-2 text-white">Xcode</span>
                        </div>
                        <div
                            className="icon-container flex flex-col items-center justify-center text-center transition-transform transform hover:scale-110">
                            <img src={github} alt="App Icon 3" className="w-12 h-12"/>
                            <span className="text-sm mt-2 text-white">Github</span>
                        </div>
                        <div
                            className="icon-container flex flex-col items-center justify-center text-center transition-transform transform hover:scale-110">
                            <img src={abletonlive} alt="App Icon 3" className="w-12 h-12"/>
                            <span className="text-sm mt-2 text-white">Ableton Live</span>
                        </div>
                        <div
                            className="icon-container flex flex-col items-center justify-center text-center transition-transform transform hover:scale-110">
                            <img src={flstudio} alt="App Icon 3" className="w-12 h-12"/>
                            <span className="text-sm mt-2 text-white">Fl Studio</span>
                        </div>
                        <div
                            className="icon-container flex flex-col items-center justify-center text-center transition-transform transform hover:scale-110">
                            <img src={rekord} alt="App Icon 3" className="w-12 h-12"/>
                            <span className="text-sm mt-2 text-white">Rekordbox</span>
                        </div>


                    </div>
                </div>


            )
            }

            {
                isEmailOpen && (
                    <div className="email-container" ref={emailRef}>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Your name"
                                   onChange={(e) => setName(e.target.value)}/>
                            <input type="email" name="email" placeholder="example@mail.com"
                                   onChange={(e) => setEmail(e.target.value)}/>
                            <textarea name="message" rows="4" placeholder="Your message"
                                      onChange={(e) => setMessage(e.target.value)}></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                        <p className='all'>All messages are sent directly to my personal email account: <a
                            href="mailto:rjohnsondev1@gmail.com"> rjohnsondev1@gmail.com</a>
                        </p>
                        {messageSent && <p>Your message has been sent successfully!</p>}
                        {errorOccurred && <p>Error. Please try again.</p>}
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                            <a href="www.linkedin.com/in/roberta-johnson" target="_blank">
                                <img src={linkedin} id="icon" style={{margin: "0 10px", width: "30px", height: "30px"}}
                                     alt="linkedin"
                                     onClick={() => window.open('https://www.linkedin.com/in/roberta-johnson/', "_blank")}/>
                        </a>
                        <a href="www.github.com/robertajohnson1" target="_blank">
                            <img src={github} id="icon" style={{margin: "0 10px", width: "30px", height: "30px"}}
                                 alt="github" onClick={() => window.open('https://github.com/rjohnsondev1', "_blank")}/>
                        </a>
                        <a>

                        </a>
                        <a></a>

                    </div>
                </div>
            )}

            {isProjectsOpen && (
                <div className="projects-container" ref={projectsRef}>
                    {/* Projects content */}
                    <div className='sidebarAndContentAreaWith'>
                        <div className='sidebar'>
                            <div className='toolbar'>
                                <div className='windowControls'>
                                    <div className='window-button close' onClick={handleProjectsToggle}></div>
                                    <div className='winddow-button minimize'/>
                                    <div className='zoom'/>
                                </div>
                            </div>
                            <div className='sidebarList'>
                                <div className='sidebarGroup'>
                                    <div className='sectionHeader'>
                                        <b className='section'>Favorites</b>
                                        <div className='symbol'>􀆈</div>
                                    </div>
                                    <div className='component1'>
                                        <div className='sidebarItemWrapper'>
                                            <div className='sidebarItem1'>
                                                <div className='leading'>
                                                    <div className='symbol1'/>
                                                    <img className='skillsIcon' alt="" src={skills}/>
                                                    <div className='label'>Projects</div>
                                                </div>
                                                <div className='trailing'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sidebarItem1'>
                                        <div className='leading'>
                                            <div className='symbol1'>􀣰</div>
                                            <div className='label'>Desktop</div>
                                        </div>
                                        <div className='trailing'/>
                                    </div>
                                    <div className='sidebarItem1'>
                                        <div className='leading'>
                                            <div className='symbol1'>
                                                <img alt='Recent' src={Recent}/>
                                            </div>
                                            <div className='label'>
                                                    <span className='labelTxt'>
                                                        <p className='recent'>Recent</p>
                                                    </span>
                                            </div>
                                        </div>
                                        <div className='trailing'/>
                                    </div>
                                </div>
                                <div className='sidebarItem1'>
                                    <div className='leading'>
                                        <div className='symbol1'>􀁸</div>
                                        <div className='label'>Downloads</div>
                                    </div>
                                    <div className='trailing'/>
                                </div>
                                <div className='sidebarGroup1'>
                                    <div className='sectionHeader'>
                                        <b className='section'>Locations</b>
                                        <div className='symbol'>􀆈</div>
                                    </div>
                                    <div className='sidebarItem4'>
                                        <div className='leading'>
                                            <div className='symbol1'>􀤂</div>
                                            <div className='label'>Roberta’s Portfolio</div>
                                        </div>
                                        <div className='trailing'/>
                                    </div>
                                    <div className='sidebarItem5'/>
                                </div>
                            </div>
                        </div>
                        <div className='separator'/>
                        <div className='contentAreaAndToolbar'>
                            <div className='contentArea'>

                                <div className='margins'/>

                                <div className='header'>
                                    <div className='labelRightDetail'>
                                        <div className='label18'>Name</div>
                                        <div className='rightDetail'/>
                                    </div>
                                    <div className='separator1'/>

                                    <div className='projects'>
                                        <img className='thumbnail'
                                             onClick={() => window.open('https://dj-jestelle.vercel.app', "_blank")}
                                             src={jestelleweb1}/>
                                        <div className='modal'>
                                            Tech stack used:
                                            <div>
                                                <img src={javascript}/>
                                                Javascript
                                            </div>
                                            <div>
                                                <img src={threejs}/>
                                                Three.js
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='toolbar1'>
                                <div className='leading5'>
                                    <div className='titleSidebarAndNavigation'>
                                        <div className='sidebarButton'>
                                            <div className='symbol7'>􀏚</div>
                                        </div>
                                        <div className='finder-title'>Projects</div>
                                    </div>
                                </div>
                                <div className='trailing5'>
                                    <div className='spacer'/>
                                    <div className='spacer'/>
                                    <div className='spacer'/>
                                    <div className='search'>
                                        <div className='symbol8'>􀊫</div>
                                        <div className='searchLabel'>Search</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showBookFront && (
                <img className="bookfront-display" alt="Bookfront displayed" src={bookfront} ref={bookfrontRef}/>
            )}
        </div>
    );
};

export default Os;
