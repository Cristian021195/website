import localFont from 'next/font/local'
import Link from 'next/link';
import { useRouter } from 'next/router';
const myFont = localFont({ src: '../../fonts/PTSans-Regular.woff2' })
export const Footer = () => {
    const router = useRouter();
    console.log(router.asPath)
  return ( // router.asPath === '/' ? 'col-12 col-md-4 col-sm-6 bg-cyan-0 white-0 p-5' : 'col-12 col-md-4 col-sm-6 p-5'
    <footer className={router.asPath === '/' ? myFont.className+' container-fluid' : myFont.className+' container-fluid s-top'} style={{backgroundColor:'var(--aux-3)'}}>
        <div className="row">
            <section className={router.asPath === '/' ? 'col-12 col-md-8 col-sm-6 s-top py-5 d-flex align-items-center' : 'col-12 col-md-8 py-5 col-sm-6 d-flex align-items-center'}>
                <div className='d-flex flex-wrap footer-buttons'>
                    <Link href='/terms' legacyBehavior>
                        <a className='m-2 cyan-0 btn bg-white-0 p-2'>Términos y Condiciones</a>
                    </Link>
                    <Link href='/privacy' legacyBehavior>
                        <a className='m-2 cyan-0 btn bg-white-0 p-2'>Política de privacidad</a>
                    </Link>
                    <Link href='/faq' legacyBehavior>
                        <a className='m-2 cyan-0 btn bg-white-0 p-2'>Preguntas Frecuentes</a>
                    </Link>
                </div>                
            </section>
            <section className={router.asPath === '/' ? 'col-12 col-md-4 py-5 col-sm-6 bg-cyan-0 white-0' : 'col-12 py-5 col-md-4 col-sm-6'}>
                <div className='p-3'>
                    <p>&copy; 2022 Cristian Ismael Gramajo - todos los derechos reservados. &nbsp;
                    <a href="#top" className='white-0'>Volver</a></p>
                </div>
            </section>
        </div>
    </footer>
  )
}
