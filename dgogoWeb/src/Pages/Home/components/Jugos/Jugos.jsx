import React from "react";
import { CardSection } from "../../../../components/CardSection/cardSection";;
import imagenes from "../../../../Imagenes/Imagenes";;

export function Jugos () {
    return (
        <>
            <div className="Jugo">
                <CardSection Card1Name='En agua'
                Card1image={imagenes.exotica}
                Card1Price={4.000} 

                Card2Name='En leche'
                Card2image={imagenes.exotica}
                Card2Price={6.000}

                Card3Name='Especial'
                Card3image={imagenes.exotica}
                Card3Price={7.500}

                Card4Name='Jarra'
                Card4image={imagenes.exotica}
                Card4Price={10.000}/>
            </div>
        </>
    )
}

