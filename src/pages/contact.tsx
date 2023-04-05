import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'

import localFont from 'next/font/local'
import { Header, MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../layouts/';
import Image from 'next/image';
import { useState } from 'react';
import { compartir, copiarTexto } from '@/utils';
import { PorfolioLogo } from '../components/lottie/PorfolioLogo';


export default function Contact() {
  const [submit, setSubmit] = useState<boolean>(true);
  return (
    <MainLayout title='Contact'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Contact me!'>
              <>
              <p>You can contact me by many ways. I'm acttualy in my residense country Argentina (GTM-3), i try to reply as soon as posible your partilcar doubts. <br /><br />
              If you want to know more about me, you can follow me at Facebook or Instagram, in the near future i will have a personal blog to share my thougts and future projects.
              </p></>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 fade-up'>
            <section className='mt-10 p-5'>
              <div style={{widows:200, height:200}}>
                {/* <PorfolioLogo/> */}
              </div>
            </section>            
          </div>
          <div className="col-md-12 mb-5 br-3 bg-white-0">
            <div className="row">
            <div className="col-md-6 p-4">
              <h2>Get in Touch</h2>
              <p>You musn't doubt, i want to start a prokect with you!</p> <br />
              <form className='d-flex flex-wrap gap-5'>
                <input className='br-1 p-2 bg-purple-0' name="name" type="text" placeholder='Enter your name' required maxLength={30}/>
                <input className='br-1 p-2 bg-purple-0' name="email" type="email" placeholder='Enter your email address' required maxLength={30}/>
                <textarea className='br-1 p-2 bg-purple-0' name="message" id="message" cols={30} rows={20} placeholder="Enter your message" required maxLength={480}
                 style={{maxHeight:160}}></textarea>
                <label htmlFor="terms">
                  <input type="checkbox" name="terms" id="terms" onChange={(e)=>{
                    console.log(e.target.checked)
                    if(e.target.checked){
                      setSubmit(false);
                    }else {
                      setSubmit(true);
                    }
                  }}/>
                  &nbsp;Acepto Los Terminos y Condiciones
                </label>
                <button type='submit' className='btn-block p-3 bg-purple-1 text-center' disabled={submit}>Submit</button>
              </form>
            </div>
            <div className="col-md-6 p-5">
              <div className="flex justify-content-center text-center my-5">
                <Image width={200} height={200} src='https://picsum.photos/200' alt='Contact Image'/>
              </div>
              <h3>Other ways to contact with me</h3>
              <div className='d-flex flex-wrap gap-2 my-4'>
                <a href='https://www.linkedin.com/in/cristian021195' target='_blank' className='btn bg-blue-0 p-2'>Linkedin</a>
                <a href='https://www.upwork.com/freelancers/~017265291f06e31933' target='_blank' className='btn bg-green-1 p-2'>Upwork</a>
                <a href='https://wa.me/543865332311?phone=543865332311&text=Hola%2C+tengo+una+consulta+sobre+tus+servicios.' target='_blank' className='btn bg-green-0 p-2'>Whatsapp (Only Bussiness)</a>
                <a href="https://drive.google.com/file/d/1-bbig7kMAoD5GKT3uNpecqs6MCZqSIwO/view?usp=share_link" target="_blank" rel="noopener" className="btn p-2 bg-lblue-0">Resume</a>
                <a href="https://drive.google.com/file/d/12J3lBtxtGnumXmhQArdV0xGZigtWchUl/view?usp=share_link" target="_blank" rel="noopener" className="btn p-2 bg-lblue-0">Curriculum</a>
              </div>
              <br />
              <h3>Social media where you can find me</h3>
              <div className='d-flex flex-wrap gap-2 my-4'>
                <a href='https://www.facebook.com/cristianismael.gramajo' target='_blank' className='btn bg-blue-0 p-2'>Facebook</a>
                <a href='https://www.instagram.com/cristiangramajo015' target='_blank' className='btn bg-pink-1 p-2'>Instagram</a>
              </div>
              <br />
              <h3>Share with others</h3>
              <div className='d-flex flex-wrap gap-2 my-4'>
                <button className='btn bg-red-0 p-2' onClick={()=>compartir('Cristian Gramajo','He is a web developer, he makes good jobs you should contact him','https://cristian021195.github.io/portfolio/#contacto')}>Share</button>
                <button className='btn bg-pink-1 p-2' onClick={(e:any)=>{
                  if(copiarTexto('cristiangramajo015@gmail.com')){
                    e.target.textContent = 'Copy Mail, copied!';
                  }else{
                    e.target.textContent = 'Copy Mail, error to copy!';
                  }
                }}>Copy Mail</button>
              </div>
              <br />
              <h3>Working Information</h3>
              <ul className='p-2 ps-4'>
                <li><b>Tax Code: </b>20393567008</li>
                <li><b>Country of Residence: </b>Argentina (GTM-3)</li>
                <li><b>Tax Code: </b>20393567008</li>
              </ul>
              <br />
            </div>
            </div>
          </div>
      </NoHome>
    </MainLayout>
  ) // https://www.upwork.com/freelancers/~017265291f06e31933
}
