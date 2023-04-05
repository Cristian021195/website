import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'

import localFont from 'next/font/local'
import { Header, MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { Card } from '@/components/other';


export default function Portfolio() {
  return (
    <MainLayout title='Portfolio'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Satisfies your customers easily'>
              <><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad autem accusantium quibusdam ea repellat esse, voluptatibus vero porro dolorum?</p></>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 fade-up'>
            <section>
            </section>
          </div>
          
          <div className='col-md-10 offset-md-1 py-5 fade-up'>
            <h2 className='fs-2 p-4'>Web Projects</h2>
            <div className="d-flex gap-10 horizontal-sm h-scroll p-2">
              <Card title='Horabondi' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Panerita' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Notas' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Climap' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Romano' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Escritos' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='ListaCompras' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Radio App' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='HoraBondi (Beta)' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
            </div>
            <h2 className='fs-2 mt-5 p-4'>Logo and Animations</h2>
            <div className="d-flex gap-10 horizontal-sm h-scroll p-2">
              <Card title='Horabondi' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Panerita' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Notas' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Climap' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Romano' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Escritos' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='ListaCompras' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Radio App' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='HoraBondi (Beta)' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
            </div>
            <h2 className='fs-2 mt-5 p-4'>Api Rest Projects</h2>
            <div className="d-flex gap-10 horizontal-sm h-scroll p-2">
              <Card title='Horabondi' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Panerita' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
              <Card title='Notas' desc='App para viajes urbanos' time='4 weeks' link='/portfolio/horabondi' maxWidth={240}/>
            </div>
          </div>
      </NoHome>
    </MainLayout>
  )
}
