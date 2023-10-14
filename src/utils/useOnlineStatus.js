import { useEffect,useState } from "react"

const useOnlineStatus = (() => {
    
    const [ status,setstatus] = useState(true)

    useEffect(() => {
        
        window.addEventListener("offline", () => {
            setstatus(false);
        })
        window.addEventListener("online", () => {
            setstatus(true); 
        })



    }, []) // it will render only once at the initial stage
    
    return status;

})

export default useOnlineStatus