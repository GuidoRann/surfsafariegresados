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

      <h1 className='mx-auto max-w-3xl text-5xl text-surf-blue text-shadow-lg font-cal-sans font-bold md:text-7xl pt-12'>
        SURFSAFARI
      </h1>
      <p className='mx-auto mt-4 px-4 text-lg md:px-0 md:text-2xl text-black font-light md:font-extralight'>
        Nosotros hacemos el buzo y ustedes la historia.
      </p>

      <div className='mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
        { cardImages.map(( image, index ) => <ProductCards key={ index } cardImage={ image } />) }
      </div>
    </section>
  );
}
