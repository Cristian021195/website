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

import {horabondi} from '../../assets/images'

export default function Portfolio() { // yarn remove react-grid-gallery
  const [open, setOpen] = useState(false);
  return (
    <MainLayout title='Horabondi'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Horabondi'>
              <>
              <p className=''>It's an awsome and very util web app, that makes you have control about the buses schedule and travel fees. <br />
              With the power of service workers and PWA implementations, this app could be acceded on an offline or bad mobile data connection. <br /><br />
              It has a very low data comsumption and the main benefit of have an centralized data, that way everyone is up to date.
              </p>
              <br />
              <i><b>Application delivered time: </b>3 months</i>
              </>
            </MainDesc>
          </div>
          <div className='col-md-6 col-sm-12 d-flex fade-up row d-flex justify-content-center'>
            <section className='mt-10 row col-sm-12'>
              <div className="col-sm-12">
                <h2 className='fs-2 mb-4'>Resources</h2>
                <h3>Gallery</h3>
              </div>
              
              <div className="d-flex overflow-x h-scroll p-2 overflow-y gap-1 my-4 view-gallery br-1">
                <SquareImg alt='Photo' src={horabondi[0]}  />
                <SquareImg alt='Photo' src={horabondi[1]}  />
                <SquareImg alt='Photo' src={horabondi[2]}  />
                <button className='btn bg-pink-0 p-1' style={{position:'absolute'}} onClick={()=>setOpen(true)}>Ver Fotos</button>
              </div>
              <div>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={horabondi}
                render={{ slide: GalleryPortfolio }}
              />
              </div>

              <h3>Technologies and other resources</h3>
              <div className="d-flex flex-wrap p-4 gap-6 mb-4">
                <ul>
                  <li><b>Framework: </b>NextJS</li>
                  <li><b>Database Engine: </b>MySQL</li>
                  <li><b>Deploy Platform: </b>Vercel</li>
                  <li><b>Backend Platform: </b>Railway</li>
                  <li><b>Additional Packages: </b>NextAuth</li>
                </ul>
              </div>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
