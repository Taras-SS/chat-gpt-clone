import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const SnackBar = ({ message }: { message: string }) => {
    const [hideSnackBar, setShowSnackBar] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            
            setShowSnackBar(true);
            
        }, 3000)

        return () => {setShowSnackBar(false);}
    }, [])
    
    return (
        ReactDOM.createPortal(
            <>{
                hideSnackBar ? <></> : <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative absolute" role="alert">
                <span className="block sm:inline">{message}</span>
            </div>
            }</>
        ,
        document.querySelector('#snackbar-root')!
        )

    )
}

export default SnackBar