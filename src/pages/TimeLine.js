import React from 'react';

const TimeLine = () => {
    return (
        <React.Fragment>
            <section>
                <div className="main">
                    <h3 className="heading">Responsive Timeline</h3>
                    <div className="side">
                        <ul>
                            <li>
                                <h3 className="title">Primary School</h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p> */}
                                
                                <span className="date">2008-2012</span>
                            </li>
                            <li>
                                <h3 className="title">Junior High School</h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>                          */}
                                
                                <span className="date">2013-2016</span>
                            </li>
                            <li>
                                <h3 className="title">High School</h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>                     */}
                                
                                <span className="date">2017-2020</span>
                            </li>
                            <li>
                                <h3 className="title">University</h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>         */}
                                
                                <span className="date">2020-Now</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </React.Fragment>
    );
};

export default TimeLine;