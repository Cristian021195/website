import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'

import localFont from 'next/font/local'
import { Header, MainDesc } from '@/components/layout'
import Image from 'next/image'
import { MainLayout, NoHome } from '../../layouts/';
import { ServiceContainer } from '@/components/other'

export default function Services() {
  return (
    <MainLayout title='Services'>
      <NoHome>
      <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Services'>
              <p>This section will give you main information of what you probably need, any of the selected services will have and meeting with you to 
                set the bases of your project</p>
            </MainDesc>
          </div>
          <div className='offset-md-2 col-md-8 flex-wrap fade-up'>
            <ServiceContainer
             title='Web Design'
             desc='Bring a website to life in terms of design and good looking is crucial for get clients attention, the sizes, combination of colors, fonts and templates matters a lot and changes according to the product idea.'
             orientation='left' link='web-design'
            />
            <ServiceContainer
             title='Logos, Animations, and Brand creation'
             desc='Bring life to you already existing projects, an Logo gives you a strong first impression and is memorable. Animations makes people realize that is hard work in background and details matters. A brand means everything for you enterprise.'
             orientation='right' link='logos-animation-brand'
            />
            <ServiceContainer
             title='Static Web development'
             desc='Ocasionally you might only want an informative site, no registratión of clients, shopping cart, only share information, like special events, conecterts, presentations. This package include the all design process you only select the time you want the site on the web.'
             orientation='left' link='static'
            />
            <ServiceContainer
             title='Wordpress'
             desc='Include all the basics, manage of users and administrators, templates, custom designs, and pluggins instalation and configuration'
             orientation='right' link='wordpress'
            />            
            <ServiceContainer
             title='Dynamic Web Development'
             desc='Maybe you want more than a Static website or Landing page, if thats the case, this package include a all interactivity layer, if you or you enterprise already have an backend development but need to perform frontend, this package is for you.'
             orientation='left' link='dynamic'
            />
            <ServiceContainer
             title='Api Rest Application'
             desc='In case that you already have you frontend (mobile or web), i can provide you an Api Rest service for you to consume or manage data.'
             orientation='right' link='api-rest'
            />
            <ServiceContainer
             title='Web Application'
             desc='This is a all Full Stack Aplication, it depends of your project or idea, the manage of server and database, and an according frontend, i require to have a series of meetings an a project contract to settle the bases.'
             orientation='left' link='web-application'
            />
          </div>
      </NoHome>
    </MainLayout>
  )
}
