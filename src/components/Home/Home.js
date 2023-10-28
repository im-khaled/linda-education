import React from 'react';
import "./Home.css"
import { useLoaderData } from 'react-router-dom';
import PopularCourse from '../PopularCourses/PopularCourse';

const Home = () => {
    const popularCourses = useLoaderData();
    
    return ( 
        <div>
            <div className='flex justify-between p-12 bg-blue-400 mx-16 my-10 custom'>
                <div className='h-auto  border-r '>
                    <img src="Images/header.png" alt="" />

                </div>
                <div className='w-2/3 pr-5'>
                    <h1 className='text-5xl text-white'>Linda - Improve Your Online Learning Experience Better Instantly</h1>
                    <p className='text-white pt-5 text-xl'>We have 50k+ Online courses & 600K+ Online registered student. <br />Find your desired  Courses from them.</p>
                    <div className='mt-10'>
                    <button className='btn px-5 p-2 text-slate-600 text-3xl bg-amber-300 hover:bg-amber-400'>View Courses</button>
                    </div>
                </div>
            </div>
            <div className='text-center mt-20'>
                    <p>DISCOVER OUR POPULAR COURSES</p>
                    <h2 className='text-4xl my-3'>Expand Your Career Opportunity <br /> With Our Courses</h2>
            </div>
            <div className='grid grid-cols-3 gap-5 mx-48 my-10 text-center h-auto'>
                
                
                    {
                        popularCourses.map(singleCourse => <PopularCourse course ={singleCourse} key={singleCourse.id}></PopularCourse>)
                    }
                
            </div>

         </div>
        
    );
};

export default Home;