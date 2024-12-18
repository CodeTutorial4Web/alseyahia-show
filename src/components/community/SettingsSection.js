
import UserAvatar from './../general/UserAvatar';
import ".././../assets/css/settings.css"
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { BiInfoCircle, BiSolidInfoCircle, BiUser } from 'react-icons/bi';
import Header from './../general/Header';



export default function SettingsSection() {



    // useStates
    const [showInfo, setShowInfo] = useState(false)
    const [disable, setDisable] = useState(true);
    const [enablePrivateChat, setEnablePrivateChat] = useState(false)
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme") != null ? localStorage.getItem("theme") : "theme1");
    // useRefs


    const checkBoxInput = useRef();
    useEffect(() => {
        if (!disable) {
            const handleBeforeUnload = (event) => {
                event.preventDefault();
                event.returnValue = "";
            };

            window.addEventListener("beforeunload", handleBeforeUnload);

            // Cleanup function
            return () => {
                window.removeEventListener("beforeunload", handleBeforeUnload);
            };
        }


        return () => { };
    }, [disable]);





    // functions
    const setTheme = (theme) => {
        document.body.className = theme;
    };

    const themes = [
        "theme1",
        "theme2",
        "theme3",

    ];

    const changeTheme = (index) => {
        setTheme(themes[index]);
        setCurrentTheme(themes[index])
        localStorage.setItem("theme", themes[index]);
    };

    function setActiveTheme() {
        const themeBoxes = document.querySelectorAll(".theme__box");

        themeBoxes.forEach(el => {
            if (el.classList.contains(currentTheme)) {
                el.classList.add("active")
            } else {
                el.classList.remove("active")
            }
        })
    }


    useEffect(() => {

        setActiveTheme()
    }, [currentTheme])



    return (

        <section className="p-inline settingsSection">
            <div className="profile-settings">
                <div className="userAvatar">
                    <UserAvatar scale={3.5} avatarImage={""} />

                    <button className="changeAvatarBtn">
                        <i>
                            <BiUser />

                        </i>
                        <span>Change Profile Picture</span>
                    </button>
                </div>
                <div className="displayname-desc">
                    <label htmlFor="displayName">
                        Display name
                    </label>
                    <input className="displayname" onInput={(e) => {
                        if (e.target.value != e.target.defaultValue) {
                            setDisable(false);
                            return;

                        } else {
                            setDisable(true)
                        }
                    }} id="displayname" defaultValue={"Mostafa Ahmed"} type="text" />
                    <label htmlFor="userDesc">
                        Description
                    </label>
                    <textarea maxLength={700} onInput={(e) => {
                        if (e.target.value != e.target.defaultValue) {
                            setDisable(false);
                            return;

                        } else {
                            setDisable(true)
                        }
                    }} spellCheck={false} defaultValue={"Culpa nisi occaecat irure voluptate voluptate cupidatat. Ex tempor eu anim officia officia consectetur do sunt est. Quis ut dolor reprehenderit reprehenderit cillum amet. Ea eu voluptate anim laborum irure. Qui enim tempor ea culpa."} className="userDesc" id="userDesc"></textarea>

                    <button disabled={disable} className="saveBtn"> save </button>

                </div>
            </div>



            <div className={showInfo ? "enablePrivateChat show" : "enablePrivateChat"} >

                <div className="enablePrivateChat-text">
                    <h3>Enable private chats with students.</h3>
                    <p>
                        Toggle this option to control whether
                        other students can send you private messages.
                        When enabled, your peers will be able to reach
                        out to you directly for private conversations.
                        If you prefer not to receive private chats,
                        simply turn this option off to disable the feature.
                        Use the toggle button
                        below to manage your privacy settings.</p>

                </div>

                <div className={enablePrivateChat ? "switch enabled" : "switch"}>

                    <label htmlFor="privateChat" className="switch-slider"> </label>
                    <input onChange={(e) => {
                        setEnablePrivateChat(!enablePrivateChat)
                    }} type="checkbox" id="privateChat" />
                </div>

                <i className="infoBtn" onClick={() => {
                    setShowInfo(!showInfo);
                }}><BiSolidInfoCircle /></i>
            </div>


            <div className="themesContainer-wrapper">
                <Header text={"Themes"} />
                <p className="explan">The theme of this website is automatically aligned with your device's settings. Whether your device is set to dark mode or light mode, the website will seamlessly adapt to match, ensuring a consistent and comfortable experience that suits your preferences.</p>
                <div className="themesContainer">
                    {/* <div className="theme__box theme1 active" onClick={(e) => {
                        changeTheme(0);

                    }}>
                        <div className="theme__box-preview">
                            <div className="sideNavbarPreview"></div>
                            <div className="dashboardSection">
                                <div className="communityActivityData">

                                </div>
                                <div className="videosWatched">

                                </div>
                                <div className="notifications">
                                </div>
                                <div className="badges">
                                </div>
                                <div className="pointsLeaderboard"> </div>
                            </div>
                        </div>

                        <p>Theme mogalia 150</p>

                        <label>colors</label>
                        <div className="theme__box-colors">
                            <div className="theme__box-color">

                            </div>

                            <div className="theme__box-color">

                            </div>

                            <div className="theme__box-color">

                            </div>
                            <div className="theme__box-color">

                            </div>
                        </div>
                    </div>

                    <div onClick={(e) => {
                        changeTheme(1);
                    }} className="theme__box theme2" >
                        <div className="theme__box-preview">
                            <div className="sideNavbarPreview"></div>
                            <div className="dashboardSection">
                                <div className="communityActivityData">

                                </div>
                                <div className="videosWatched">

                                </div>
                                <div className="notifications">
                                </div>
                                <div className="badges">
                                </div>
                                <div className="pointsLeaderboard"> </div>
                            </div>
                        </div>

                        <p>Theme mogalia 150</p>

                        <label>colors</label>
                        <div className="theme__box-colors">
                            <div className="theme__box-color">

                            </div>

                            <div className="theme__box-color">

                            </div>

                            <div className="theme__box-color">

                            </div>
                            <div className="theme__box-color">

                            </div>
                        </div>
                    </div>

                    <div onClick={(e) => {
                        changeTheme(2);
                    }} className="theme__box theme3" >
                        <div className="theme__box-preview">
                            <div className="sideNavbarPreview"></div>
                            <div className="dashboardSection">
                                <div className="communityActivityData">

                                </div>
                                <div className="videosWatched">

                                </div>
                                <div className="notifications">
                                </div>
                                <div className="badges">
                                </div>
                                <div className="pointsLeaderboard"> </div>
                            </div>
                        </div>

                        <p>Theme mogalia 150</p>

                        <label>colors</label>
                        <div className="theme__box-colors">
                            <div className="theme__box-color">

                            </div>

                            <div className="theme__box-color">

                            </div>

                            <div className="theme__box-color">

                            </div>
                            <div className="theme__box-color">

                            </div>
                        </div>
                    </div> */}


                    {
                        themes.map((el, index) => {
                            return (

                                <div onClick={(e) => {
                                    changeTheme(index);
                                }} className={"theme__box " + el} >
                                    <div className="theme__box-preview">
                                        <div className="sideNavbarPreview"></div>
                                        <div className="dashboardSection">
                                            <div className="communityActivityData">

                                            </div>
                                            <div className="videosWatched">

                                            </div>
                                            <div className="notifications">
                                            </div>
                                            <div className="badges">
                                            </div>
                                            <div className="pointsLeaderboard"> </div>
                                        </div>
                                    </div>

                                    <p>Theme {index + 1}</p>

                                    <label>colors</label>
                                    <div className="theme__box-colors">
                                        <div className="theme__box-color">

                                        </div>

                                        <div className="theme__box-color">

                                        </div>

                                        <div className="theme__box-color">

                                        </div>
                                        <div className="theme__box-color">

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}