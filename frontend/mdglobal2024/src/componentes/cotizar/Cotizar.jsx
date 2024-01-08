import Footer from "../Footer";
import { isMobile } from "react-device-detect";
import Navbar from "../Navbar";
import peso from "../../assets/cotizar/peso.png"
import HamburguesaMenu from "../Menu";
import plataformas from "../../assets/cotizar/plataformas.png"
function cotizar() {
    return (<>
      <header>{isMobile ? <HamburguesaMenu /> : <Navbar />}</header>
            <main>
                <div>
                    <span>COTIZACIÓN DE NUESTROS SERVICIOS</span>
                    <span>Selecciona una de las siguientes opciones</span>
                </div>
                <div style={{display: 'flex' , flexDirection: 'row'}}>//hacer el stylecss para cambioar los tamaños responsive inside
                    <div style={{borderRadius: '1rem' , background: 'linear-gradient(180deg, #FFFFFF 0%, #EDEDED 100%)' , boxShadow: '0px 9px 4px 0px rgba(0, 0, 0, 0.25)' , height: '400px' , width: '400px'}}>
                        <img src={plataformas} alt="" />
                    </div >
                    <div style={{borderRadius: '1rem' , background: 'linear-gradient(180deg, #FFFFFF 0%, #EDEDED 100%)' , boxShadow: '0px 9px 4px 0px rgba(0, 0, 0, 0.25)'}}> <img src={peso} alt="" /></div>
                
                </div>
                <article>
                    <span>Ten en consideración los siguientes puntos:</span>
                    <p>* HONORARIOS PARA PEDIMENTO A1 MERCANCIA TRADICIONAL, NO PERECEDEROS, NO VULNERABLES, HAZMAT, NI DE DIFICIL IDENTIFICACION.</p>
                    <p>* NO INCLUYE MANIOBRAS, COMERCIALIZADORA, TRANSPORTE, SEGURO U OTROS SERVICIOS NO ESPECIFICADOS.</p>
                    <p>* NO INCLUYE IMPUESTOS, DERECHOS U OTROS CONCEPTOS ESTABLECIDOS POR LA AUTORIDAD.</p>
                    <p>* PRECIOS DE REFERECIA, NO GARANTIZAN QUE SE LLEVE A CABO EL SERVICIO, FAVOR DE COTIZAR PARA UNA OFERTA PERSONALIZADA.</p>
                    <p>* MV = MANIFESTACION DE VALOR HC = HOJA DE CALCULO.</p>

                </article>
            </main>
            <footer><Footer></Footer></footer></>  );
}

export default cotizar;



