import Image from 'next/image'
import authorImage from '@/public/images/authors/named.jpg'


export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Vinter.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m UI/UX Designer and Developer based in Nairobi, Kenya. 
          I help businesses connect with their audiences through intuitive, responsive digital experiences.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Vinter Achieno'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}