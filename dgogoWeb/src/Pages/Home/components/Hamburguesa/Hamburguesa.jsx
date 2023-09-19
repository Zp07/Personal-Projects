import React from "react";
import { CardSection } from "../../../../components/CardSection/cardSection";;
import imagenes from "../../../../Imagenes/Imagenes";;

export function Hamburguesa () {
    return (
        <>
            <div className="Hambur">
                <CardSection Card1Name='Sencilla'
                Card1image={imagenes.exotica}
                Card1Price={16.000} 

                Card2Name='Especial'
                Card2image={imagenes.exotica}
                Card2Price={18.000}

                Card3Name='Doble'
                Card3image={imagenes.exotica}
                Card3Price={22.000}

                Card4Name='Full'
                Card4image={imagenes.exotica}
                Card4Price={30.000}/>
            </div>
        </>
    )
}

