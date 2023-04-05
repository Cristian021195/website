import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'

import localFont from 'next/font/local'
import { Header, MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../layouts/';
import Image from 'next/image';

export default function Privacy() {
  return (
    <MainLayout title='Privacy Policy'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Privacy Policy'></MainDesc>
          </div>
          <div className='col-md-6 offset-md-3 d-flex p-5 fade-up flex-wrap'>
            <section>
            <h1>Politica de Privacidad</h1>
          <br />
          <h2>USO DE INFORMACIÓN</h2>
            <p>
              La Aplicación Web no necesita de registro para muchas de sus funciones. Aún asi a nosotros nos gustaría que cada usuario este registrado para tener acceso a todas las funciones correspondientes.<br/><br/>
              Mas allá de esto, tenemos que informarte que los datos almacenados serán pura y exclusivamente para:
            </p><br/>
              <ul className='list-circle'>
                <li>Guardar preferencias de la aplicación, como favoritos, tamaño de fuente y tema.</li>
                <li>Guardar texto que es necesario para el uso offline de la aplicación.</li>
                <li>Cookies de sesión en caso de haberse registrado.</li>
                <li>Datos de cuenta como nombre, email en caso de haberse registrado.</li>
                <li>Texto en el portapapeles de su dispositivo en caso de copiar CVU / CBU en &quot;Donaciones&quot;.</li>
              </ul>
              <br/>
              <p>
                En el caso del apartado de &quot;Donaciones&quot;, se harán uso de procesadores de pago de servicios externos, por lo tanto, los datos que uses no serán procesados ni guardados por nuestro servicio.
              </p>
              <br/>
              <p>
                La Aplicación Web es de uso personal, no funciona como blog, ni como red social, por lo tanto, no podrás ver quienes están registrados, comentarios de otros usuarios, a lo único que estarás habilitado es a la función de &quot;Compartir&quot; la app en caso de alguien necesitarla.
              </p>
            </section>
          </div>
        </NoHome>
    </MainLayout>
  )
}
