import React, { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import SingleCourse from '../SingleCourse';



const Computer = () => {
    const AllCourses = useOutletContext();
    const courseName = 'Computer Science';
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

export default Computer;