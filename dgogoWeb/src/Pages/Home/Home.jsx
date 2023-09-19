import React from 'react'
import { Header } from '../../components/Header/Header'
import { Salchipapa } from "./components/Salchipapa/Salchipapa";  
import { Hamburguesa } from './components/Hamburguesa/Hamburguesa';
import { Perros } from './components/Perros/Perros';
import { Jugos } from './components/Jugos/Jugos';

function Home() {
  return (
    <>
        <Header/>
        <h2>Salchipapa</h2>
        <Salchipapa />
        <br></br>
        <h2>Hamburguesa</h2>
        <Hamburguesa />
        <br></br>
        <h2>Perros Calientes</h2>
        <Perros />
        <br></br>
        <h2>Jugos</h2>
        <Jugos />
    </>
  )
}

export default Home