import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'

import localFont from 'next/font/local'
import { Footer, Header } from '@/components/layout'
import Image from 'next/image'
import { MainLayout, NoHome } from '@/layouts'


export default function Home() {
  return (
    <MainLayout title='Home'>
      <section id='main-section' className='row'>
          <div className='col-md-12 col-lg-8 pt-5 fade-up '>
            <section className="d-flex flex-wrap main-hello">
              <div className="custom-grid offset-md-1 col-lg-8 col-md-10 p-3 hover-zoom">
                  <div id="caja1" style={{borderRadius:'0.2em'}} className="p-3 zoom">
                      <h2>Hola, Soy Cristian</h2>
                  </div>
                  <div id="caja2" style={{backgroundImage: "url('/images/horizontal.webp')", backgroundRepeat: "no-repeat", backgroundSize: 'cover'}} className="p-3 zoom">
                  </div>
                  <div id="caja3">
                      <Image src="/images/vertical.webp" alt="vertical" height={400} width={200} className='br-0 zoom' style={{objectFit:'contain'}}/>
                  </div>
                  <div id="caja4" className="p-3">
                      <p>Tengo 27 años y el Desarrollo Web es mi pasión.</p><br/>
                      <p>Desarrollo aplicaciones fullstack modernas. Me gusta enfocarme mucho en el diseño responsive para la
                          mejor experiencia de usuario en cualquier dispositivo.</p><br/><a
                          href="https://drive.google.com/file/d/12J3lBtxtGnumXmhQArdV0xGZigtWchUl/view?usp=sharing"
                          target="_blank" rel="noopener"
                          className="btn p-2 bg-lblue-0">Curriculum Vitae</a>
                  </div>
              </div>
            </section>
          </div>
          <div className='col-md-4 pt-5 bg-cyan-0 d-flex align-content-center justify-content-center px-5 d-none d-lg-block'>
            <div className='mt-15 fade-up'>
              <h1>Your legal advisers for the problems of this country</h1><br />
              <p>We offer solutions adapted to today's needs</p><br />
              <button className='btn px-4 py-2 bg-white-0 dark-0'>View More</button>
            </div>
          </div>
        </section>
        <section className='row'>
          <div className='container col-md-12 col-lg-5 offset-lg-1 mt-10 mb-5'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eum enim voluptate error culpa animi modi ut unde eius aliquam officiis tempora omnis iste blanditiis maxime nobis? Deleniti, dolor aliquam?</p>
          </div> 
          <div className='col-md-4 offset-md-1 bg-cyan-0 d-none d-lg-block'></div>
        </section>        
    </MainLayout>
  )
}
