import React from "react";
import errorImg from "../../../public/img/si.png";
import { useParams } from "react-router-dom";

const Error = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <img src={errorImg} alt="Imagen de error 404" style={{ maxWidth: "400px" }} />
            <h2>Página no encontrada</h2>
        </div>
    );
};

export default Error;
