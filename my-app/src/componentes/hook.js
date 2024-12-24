import { useNavigate } from "react-router-dom";
import React from "react";

export const BackButton = () =>{
    const navigate = useNavigate();

    const handleBack = () =>{
        navigate(-1);
    };

    return (
        <button onClick={handleBack}>
            Volver
        </button>
    )
}

