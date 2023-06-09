import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
//import styles from '@/styles/Home.module.css'

import localFont from 'next/font/local'
import { Header, MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { SquareImg } from '@/components/other';

import {GalleryPortfolio} from '../../components/ui/';
import { useState } from 'react';

import {listacompras} from '../../../myassets'

export default function ListaCompras() { // yarn remove react-grid-gallery
  const [open, setOpen] = useState(false);
  return (
    <MainLayout title='ListaCompras'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='ListaCompras'>
              <div>
              <p className=''>
              This application was made for a single personal purpose, sometimes I just need a simple 
              application to have control of my purchases in the supermarket, without having to fill the entire screen with advertising.<br /><br />
              <br />
              <i><b>Application delivered time: </b>1 week</i><br /></p>
              </div>
              <div className='mt-5'>
                <a className="btn p-2 bg-pink-0" target='_blank' href='https://listacompras-omega.vercel.app/'>¡Try It!</a>
                <a className="btn p-2 bg-lblue-0 m-2" target='_blank' href='https://github.com/Cristian021195/compras'>Go to repository</a>
              </div>
            </MainDesc>
          </div>
          <div className='col-md-6 col-sm-12 d-flex fade-up row d-flex justify-content-center'>
            <section className='mt-10 row col-sm-12'>
              <div className="col-sm-12">
                <h2 className='fs-2 mb-4'>Resources</h2>
                <h3>Gallery</h3>
              </div>
              
              <div className="d-flex overflow-x h-scroll p-2 my-4 view-gallery br-1">
                <SquareImg alt='Photo' src={listacompras[2]}  />
                <SquareImg alt='Photo' src={listacompras[1]}  />
                <SquareImg alt='Photo' src={listacompras[0]}  />
                <button className='btn bg-pink-0 p-1' style={{position:'absolute'}} onClick={()=>setOpen(true)}>Ver Fotos</button>
              </div>
              <div>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={listacompras}
                render={{ slide: GalleryPortfolio }}
              />
              </div>

              <h3>Technologies and other resources</h3>
              <div className="d-flex flex-wrap p-4 gap-6 mb-4">
                <ul>
                  <li><b>Library: </b>ReactJS</li>
                  <li><b>Programing Languajes: </b>JavaScript + HTML + CSS</li>
                  <li><b>Database Engine: </b>Indexed Database (client side only)</li>
                  <li><b>Deploy Platform: </b>Vercel</li>
                  <li><b>Additional Packages: </b>React Router DOM, uuid, Dexie JS, dexie-react-hooks, react-qr-code</li>
                </ul>
              </div>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
