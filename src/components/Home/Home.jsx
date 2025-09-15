import React from 'react'

const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh", // centrado vertical
                textAlign: "center" // centrado horizontal
            }}
        >
            <h1>Bienvenido a 🥑ConPalta 🥑 </h1>

            <div style={{ marginBottom: "20px" }}>
                <h2>¡¡Siéntase libre para navegar por el sitio!!</h2>
            </div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem
                adipisci quis libero placeat tempora cupiditate. Neque hic illum aut
                eaque iste, facere natus ipsa quam, necessitatibus culpa corporis
                voluptates.
            </p>
        </div>
    )
}

export default Home
