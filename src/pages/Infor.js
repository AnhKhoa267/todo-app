import React from 'react';
import * as FaIcons from "react-icons/fa";

const Infor = () => {
    return (
        <React.Fragment>
            <section>
                {/* <div className='centered text-4x1 h-screen'>Welcome to Infor Page</div> */}
                <div className='container'>
                    <div className='left-slide'>
                        <div className='profileText'>
                            <h2>Trần Anh Khoa<br/><span>Student of Ho Chi Minh city University of Education</span></h2>
                        </div>
                        <div className="profileText">
                            <h3 className="title">Skills</h3>
                            <div className="skills">
                                <ul>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="icon">
                                                <FaIcons.FaHtml5/>
                                            </div>
                                            <div className="text">HTML</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="icon">
                                            <FaIcons.FaCss3Alt/>
                                            </div>
                                            <div className="text">CSS</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="icon">
                                            <FaIcons.FaJs/>
                                            </div>
                                            <div className="text">JS</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="icon">
                                            <FaIcons.FaPhp/>
                                            </div>
                                            <div className="text">PHP</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="icon">
                                            <FaIcons.FaGitAlt/>
                                            </div>
                                            <div className="text">GIT</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="icon">
                                                <i className="fa-solid fa-user-group"></i>
                                            </div>
                                            <div className="text">TEAM</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="contactInfo">
                                <h3 className="title">Contact Info</h3>
                                <ul>
                                    <li>
                                        <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                        <span className="text">0775-15-xxxx</span>
                                    </li>

                                    <li>
                                        <span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                        <span className="text">t.a.khoa260702@gmail.com</span>
                                    </li>

                                    <li>
                                        <span className="icon"><i className="fa fa-facebook" aria-hidden="true"></i></span>
                                        <span className="text"><a href="https://www.facebook.com/t.a.khoa267/" target="_blank" rel="noopener noreferrer">www.facebook.com</a></span>
                                    </li>

                                    <li>
                                        <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                        <span className="text">TpHCM VietNam</span>
                                    </li>                        
                                </ul>
                            </div>

                            <div className="contactInfo hobbies">
                                <h3 className="title">Hobbies</h3>
                                <ul>
                                    <li>
                                        <span className="icon1"><i className="fa fa-gamepad" aria-hidden="true"></i></span>                        
                                        <span className="text"><center style={{"fontSize": "25px"}}>Game</center></span>
                                    </li>

                                    <li>
                                        <span className="icon1"><i className="fa fa-film" aria-hidden="true"></i></span>
                                        <span className="text"><center style={{"fontSize": "25px"}}>Film</center></span>
                                    </li>

                                <li>
                                        <span className="icon1"><i className="fa fa-plane" aria-hidden="true"></i></span>
                                        <span className="text"><center style={{"fontSize": "25px"}}>Travel</center></span>
                                    </li>                        
                                </ul>
                            </div>

                            {/* <p style={{"background-color": "#0B1320", "color": "#ccc", "text-align": "center"}}>Copyright 2022</p> */}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Infor;