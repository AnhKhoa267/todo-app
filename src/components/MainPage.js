import React from 'react';
import Navbar from './Navbar';
import NavPage from './NavPage';
import Sidebar from './Sidebar';

const MainPage = () => {
    return (
        <React.Fragment>
            {/* heading section */}
            <section>
                <div>
                    <Navbar />
                </div>
            </section>

            {/* sidebar section */}
            <section>
                <div className='grid grid-cols-12'>
                    <div className='col-span-3 bg-black h-screen md:col-span-2' >
                        <Sidebar />
                    </div>
                    <div className='col-span-9 color:#E9EEF6 h-screen md:col-span-10'>
                        <NavPage />    
                    </div> 
                </div>
            </section>
        </React.Fragment>
    )
};

export default MainPage;