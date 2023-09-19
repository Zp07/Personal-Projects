import React from "react";
import { CardSection } from "../../../../components/CardSection/cardSection";;
import imagenes from "../../../../Imagenes/Imagenes";;

export function Perros () {
    return (
        <>
            <div className="Perro">
                <CardSection Card1Name='Sencillo'
                Card1image={imagenes.exotica}
                Card1Price={8.000} 

                Card2Name='Especial'
                Card2image={imagenes.exotica}
                Card2Price={12.000}

                Card3Name='Doble'
                Card3image={imagenes.exotica}
                Card3Price={16.000}

                Card4Name='Full'
                Card4image={imagenes.exotica}
                Card4Price={20.000}/>
            </div>
        </>
    )
}

