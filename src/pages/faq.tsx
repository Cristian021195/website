import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'

import localFont from 'next/font/local'
import { Header, MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../layouts';
import Image from 'next/image';
import { Acordeon } from '@/components/other';
import Link from 'next/link';

export default function Faq() {
  return (
    <MainLayout title='FAQ'>
        <NoHome>
            <div className='col-md-6 d-flexfade-up flex-wrap'>
                <MainDesc title='Frecuented Asked Questions'></MainDesc>
            </div>
            <div className='col-md-6 offset-md-3 d-flex py-5 fade-up flex-wrap'>
                <Acordeon title='¿Qué es HoraBondi?'>
                  <p>Es una aplicación web para tener a mano los horarios, precios y publicaciones de las empresas más comunes de colectivos.</p>
                </Acordeon>
                <Acordeon title='¿Necesito tener datos móviles para usarla?'>
                  <p>Para las funciones básicas no, pero si querés recibir notificaciones y estar actualizado de seguro.</p>
                </Acordeon>
                <Acordeon title='¿Cómo se usa?'>
                  <p>Basta con ingresar a la página, pero para tener una mejor experiencia recomendamos que la instales desde el botón en el pie de pagina, o desde las opciones de tu navegador</p>
                </Acordeon>
                <Acordeon title='¿Para quienes está dirigido el uso de la aplicación?'>
                  <p>Cualquier persona (de cualquier edad) que requiera las funciones básicas, y si contratará servicios extras ser mayor de 18 años. </p>
                </Acordeon>
                <Acordeon title='¿Tienen algún medio de contacto?'>
                  <p>Si, en la sección de <Link href='/contact' legacyBehavior><a className='text-underline text-blue-6'>Contacto</a></Link>&nbsp; hay diversas formas de comunicarte según tu consulta.</p>
                </Acordeon>
                <Acordeon title='¿Se puede publicar contenido?'>
                  <p>No, en principio y por ahora es solo para consumir información.</p>
                </Acordeon>
            </div>
        </NoHome>
    </MainLayout>
  )
}
