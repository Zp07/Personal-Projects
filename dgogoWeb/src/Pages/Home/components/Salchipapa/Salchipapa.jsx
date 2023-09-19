import React from "react";
import { CardSection } from "../../../../components/CardSection/cardSection";;
import imagenes from "../../../../Imagenes/Imagenes";;

export function Salchipapa () {
    return (
        <>
            <div className="Salchi">
                <CardSection Card1Name='Exotica'
                Card1image={imagenes.exotica}
                Card1Price={15.000} 

                Card2Name='Express'
                Card2image={imagenes.exotica}
                Card2Price={12.500}

                Card3Name='Maiz'
                Card3image={imagenes.exotica}
                Card3Price={11.500}

                Card4Name='Mar y Tierra'
                Card4image={imagenes.exotica}
                Card4Price={16.500}/>
            </div>
        </>
    )
}

