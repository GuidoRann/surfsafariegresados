import ProductCards from './ProductCards';

const cardImages = [
  '/hero images/1.jpg',
  '/hero images/2.jpg',
  '/hero images/3.jpg',
  '/hero images/4.jpg',
]

export default function Hero() {
  return (
    <section className='relative px-4 pt-30 pb-10 text-center md:px-8 md:py-30 flex flex-col justify-center'>
      {/* <div
        className='absolute left-0 top-0 h-64 w-72  md:h-1/2 md:w-1/3 bg-amber-200 -z-10'
        style={{clipPath: "polygon(0 0, 100% 0, 0 100%)"}}></div>
      <div className='absolute right-0 top-0 h-32 w-32 -z-10'>
        <div className='relative h-full w-full'>
          <div className='absolute right-6 bottom-2 h-4 w-4 rounded-full bg-amber-300'></div>
          <div className='absolute right-12 bottom-8 h-4 w-4 rounded-full bg-amber-300'></div>
          <div className='absolute right-20 bottom-4 h-4 w-4 rounded-full bg-amber-300'></div>
        </div>
      </div> */}

      <h1 className='mx-auto max-w-3xl text-5xl text-secondary-blue text-shadow-lg font-cal-sans font-bold md:text-7xl pt-12'>
        SURFSAFARI
      </h1>
      <p className='mx-auto mt-4 px-4 text-lg md:px-0 md:text-2xl font-poppins text-black font-light md:font-extralight'>
        Nosotros hacemos el buzo y ustedes la historia.
      </p>

      <div className='mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
        { cardImages.map(( image, index ) => <ProductCards key={ index } cardImage={ image } />) }
      </div>
    </section>
  );
}
