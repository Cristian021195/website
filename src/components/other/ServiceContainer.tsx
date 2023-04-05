import { IServiceContainer } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'

export const ServiceContainer = ({title = "Servicio", desc = "Descripcion del servicio", orientation = 'left', src='https://picsum.photos/200', link='/'}:IServiceContainer) => {
    
    if(orientation === 'left'){
        return (
            <section className='service-card my-5 b-shadow br-0 row d-flex align-items-center' style={{border:'solid 1px whitesmoke'}}>
                <article className='col-md-6 py-5'>
                    <Image alt='image' src={src} height={200} width={200}/>
                </article>
                <article className='col-md-6 py-5'>
                    <h2  className='mb-2'>{title}</h2>
                    <p className='mb-4'>{desc}</p>
                    <Link legacyBehavior href={'/services/'+link}>
                         <a className='bg-blue-0 p-2 btn mt-4'>Ver mas</a>
                    </Link>
                </article>                
            </section>
          )
    }else{
        return (
            <section className='service-card scl my-5 b-shadow br-0 row d-flex align-items-center' style={{border:'solid 1px whitesmoke'}}>
                <article className='col-md-6 py-5'>
                    <h2  className='mb-2'>{title}</h2>
                    <p className='mb-4'>{desc}</p>
                    <Link legacyBehavior href={'/services/'+link}>
                         <a className='bg-blue-0 p-2 btn mt-4'>Ver mas</a>
                    </Link>
                </article>   
                <article className='col-md-6 py-5 text-end'>
                    <Image alt='image' src={src} height={200} width={200}/>
                </article>
            </section>
          )
    }
}
