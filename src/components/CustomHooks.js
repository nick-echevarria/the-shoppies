import { useState } from 'react'; 

const useSearchBarInput = ( callback ) => {
    //initialize state variable and setter
    const [userInput, setUserInput ] = useState(""); 
    // function to manage input submission
    const handleSubmit = ( event ) => { 
        event ? event.preventDefault() : callback(); 
    }

    const handleUserInput = ( event ) => { 
        event.persist(); 
        setUserInput(event.target.value);
    }

    return {
        handleSubmit, 
        handleUserInput, 
        userInput
    } 
}

export default useSearchBarInput; 