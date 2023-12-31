import React, { useContext } from 'react';
import { authProvider } from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
  
    const location = useLocation();
    const {user, loader} = useContext(authProvider);

    if(loader){
        return(<div className='flex justify-center my-10 p-5'>
          <button type="button" disabled>
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"> </svg>
            Processing...
          </button>
      </div>);
    }
    if(!user?.emailVerified){
      return(<Navigate to='/signIn' state={{from: location}}  replace></Navigate>)
    }

    return (children);
};

export default PrivateRoutes;