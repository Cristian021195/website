import { ICard } from '@/interfaces'
import Image from 'next/image';
import Link from 'next/link';

export const Card = ({title='Proyecto',link='/', desc='Descripcion de proyecto', state,maxWidth = 300, time='4 weeks', image='https://picsum.photos/300/200'}:ICard) => {
  return (
    <div className='br-2 b-shadow' style={{border:'solid 1px whitesmoke', maxWidth:maxWidth}}>
        <div className="card-header">
            <Image src={image} alt={title} width={maxWidth} height={200} style={{borderRadius:'1em 1em 0 0', objectFit:'fill'}}/>
        </div>
        <div className="card-body text-center gap-2">
            <small>{time}</small>
            <h3 className='mb-1'>{title}</h3>
            <p>{desc}</p>
        </div>
        <div className="card-stats d-flex justify-content-center">
            <Link href={link} className='btn p-2 bg-lblue-0 my-4'>
                Ver
            </Link>
        </div>
    </div>
  )
}
