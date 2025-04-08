import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import SessionContext from "contexts/SessionContext";

const RedirectToPlantsIfSignedIn = (props) => {
    const {username} = useContext(SessionContext);
    const navigate = useNavigate()
    useEffect(() => {
        if (username === null) {
            return navigate("/")
        }
    }, [username])
    
    return <div>{props.children}</div>
};

export default RedirectToPlantsIfSignedIn;