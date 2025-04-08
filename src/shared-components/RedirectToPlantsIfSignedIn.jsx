import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import SessionContext from "contexts/SessionContext";

const RedirectToPlantsIfSigned = (props) => {
    const {username} = useContext(SessionContext);
    const navigate = useNavigate()
    useEffect(() => {
        if (username !== null) {
            return navigate("/plants")
        }
    }, [username])
    
    return <div>{props.children}</div>
};

export default RedirectToPlantsIfSigned;