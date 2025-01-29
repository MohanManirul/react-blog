import React from 'react';

const Parent = () => {

    
function useUserStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const userStatus = localStorage.getItem('userLoggedIn');
      setIsLoggedIn(userStatus === 'true');
    }, []);
  
    // formatter function দিয়ে মান format করা
    useDebugValue(isLoggedIn, (value) => (value ? 'Logged In' : 'Logged Out'));
  
    return isLoggedIn;
  }
  
    return (
        <div>
            
        </div>
    );
};

export default Parent;