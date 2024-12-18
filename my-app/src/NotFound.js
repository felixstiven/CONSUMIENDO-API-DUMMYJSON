
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="not-found">
            <div>
                <h1>404: Page Not Found</h1>
            </div>
            <div>
                <button className="btn" onClick={()=> navigate('/')}>Inicio</button>
            </div>
        </div>
    )
}

export default NotFound;