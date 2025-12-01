import ProductCards from './ProductCards';

const cardImages = [
  '/hero images/1.jpg',
  '/hero images/2.jpg',
  '/hero images/3.jpg',
  '/hero images/4.jpg',
]

export default function Hero() {
  return (
    <section className='relative px-4 pt-30 pb-10 text-center md:px-8 md:py-30 flex flex-col justify-center font-poppins'>

      <img src="/back pagina.png" alt="background" className='absolute top-10 left-10 w-[35%] object-cover z-0 opacity-15' />

      <div className='z-99'>
        <div className='flex flex-col items-center justify-center pt-12'>
          <h1 className='flex max-w-3xl text-[5rem] leading-none py-3 md:py-4 text-surf-white bg-surf-blue rounded-3xl md:rounded-[3rem] px-5 md:px-6 font-surf-font text-stroke-blue tracking-wide md:text-[9rem]'>
            <p className="-mb-4 md:-mb-5">SU<span className='text-surf-red text-stroke-black flip-x tracking-tight'>R</span>FSAFARI</p>
          </h1>
          <p className='mx-auto mt-4 px-4 text-xl md:px-0 md:text-2xl text-black font-medium'>
            "Nosotros hacemos el buzo y ustedes la historia."
          </p>
        </div>

        <div className='mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
          { cardImages.map(( image, index ) => <ProductCards key={ index } cardImage={ image } />) }
        </div>
      </div>
    </section>
  );
}
