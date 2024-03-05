import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export type SnackBarconfig = {
    message: string
    success?: boolean
}

const SnackBar = ({ config }: { config: SnackBarconfig }) => {
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
                hideSnackBar ? <></> : <div className={`m-auto w-8/12  border mt-5 ${config.success ? 'border-green-400 text-green-700 bg-green-100' : 'border-red-400 text-red-700 bg-red-100'} px-4 py-3 rounded relative absolute`} role="alert">
                <span className="block sm:inline">{config.message}</span>
            </div>
            }</>
        ,
        document.querySelector('#snackbar-root')!
        )

    )
}

export default SnackBar