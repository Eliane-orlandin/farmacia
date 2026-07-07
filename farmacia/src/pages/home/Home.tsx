import { Link } from 'react-router-dom'
import imagemHome from '../../assets/image-home.png'

function Home() {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#0f766e", 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",    
                    minHeight: "80vh"
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr", 
                        color: "white",
                        width: "100%",
                        maxWidth: "1280px",
                        padding: "2rem",        
                        alignItems: "center" 
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem", 
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: "1rem", 
                            paddingBottom: "1rem"
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "2.5rem", 
                                fontWeight: "bold"
                            }}
                        >
                            Seja Bem Vinde!
                        </h2>

                        <p
                            style={{
                                fontSize: "1.1rem",
                                textAlign: "center",
                                maxWidth: "400px" 
                            }}
                        >
                            Encontre aqui os melhores medicamentos e produtos de saúde.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                gap: "1rem"
                            }}
                        >
                            {/* 🌟 Tag fechada corretamente com </Link> aqui embaixo */}
                            <Link
                                to="/produtos"
                                style={{
                                    borderRadius: "0.5rem",
                                    color: "white",
                                    border: "2px solid white",
                                    padding: "0.5rem 1rem",
                                    cursor: "pointer",
                                    textDecoration: "none", 
                                    fontWeight: "600",
                                    transition: "all 0.2s"
                                }}
                            >
                                Ver Produtos
                            </Link>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center" 
                        }}
                    >
                       
                        <img
                            src={imagemHome} 
                            alt="Imagem Página Home Farmácia"
                            style={{
                                width: "150%",
                                height: "auto",
                                borderRadius: "50px"
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;