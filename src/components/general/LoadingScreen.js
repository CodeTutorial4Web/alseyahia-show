import { useEffect, useState } from "react"



export default function LoadingScreen() {


    const [hideLoadingScreen, setHideLoadingScreen] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setHideLoadingScreen(!hideLoadingScreen)
        }, 2000)
    }, [])

    return (

        <div className={hideLoadingScreen ? "loadingScreen hide" : "loadingScreen"}>
            <b>
                Welcome To ALseyahia Communities.
            </b>

        </div>

    )

}