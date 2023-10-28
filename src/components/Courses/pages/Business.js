import React from 'react';
import SingleCourse from '../SingleCourse';
import { useOutletContext } from 'react-router-dom';

const Business = () => {
    const AllCourses = useOutletContext();
    const courseName = 'Business & Management';
    const CoursesArray = AllCourses[0].AllCourses;

    
    
    return (
        <div className='grid grid-cols-2 gap-10'>
            {
                CoursesArray.map((course, idx) => {
                    
                    if(courseName === course.category){
                        return (<SingleCourse course={course} key={idx}></SingleCourse>);
                    }
                    
                })
            }
        </div>
    );
};

export default Business;