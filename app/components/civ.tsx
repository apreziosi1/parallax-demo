import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'

const Civ = () => {
    const background: BannerLayer = {
      image:
        '/civ-assets/background.png',
      opacity:[1, 0.2, 'easeOutCubic'],
      scale: [2, 1, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: true,
      shouldDisableScalingTranslations: true      
    };
  
    const detail: BannerLayer = {
      image:
        '/civ-assets/detail.png',
        scale: [1.5, 1.1, 'easeOutCubic'],
        translateX: [-20, -10],
        translateY: [20, 10],
        shouldAlwaysCompleteAnimation: true,
        shouldDisableScalingTranslations: true
    };

    const detail_1: BannerLayer = {
        image:
          '/civ-assets/detail_1.png',
          scale: [1.3, 1, 'easeOutCubic'],
          translateY: [20, 10],
          shouldAlwaysCompleteAnimation: true,
          shouldDisableScalingTranslations: true
      };
  
    const foreground: BannerLayer = {
      image:
        '/civ-assets/foreground.png',
        scale: [1, 1.2, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        shouldDisableScalingTranslations: true
    };

    const text: BannerLayer = {
        opacity: [0, 5, "easeInSine"],
        shouldAlwaysCompleteAnimation: true,
        shouldDisableScalingTranslations: true,
        children: (
        <div className='text-right px-24 py-12 lg:px-48 lg:py-24 opacity-100 text-[#000]'>
          <h2 className="text-5xl lg:text-8xl">Develop your own <br /> settlement</h2>
          <p className='mt-12 lg:w-1/2 ml-auto text-sm md:text-lg'>Breathtaking landscapes and alien terrains awaits you.
          From vast deserts to lush forests, each planet has its unique environment waiting to be discovered.
          Use advanced equipment to traverse rugged terrain and uncover hidden pathways.
          With a variety of vehicles and tools at your disposal, choose your exploration experience on each planet.</p>
        </div>)
      };
    
    return (
      <>
        <ParallaxBanner
          layers={[ background, detail, detail_1, foreground,  text]}
          className="relative aspect-[2/1] w-2/3 lg:w-full h-screen"
        />
      </>
    );
  };

  export default Civ