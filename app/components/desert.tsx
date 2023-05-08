import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'

const Desert = () => {
    const background: BannerLayer = {
      image:
        '/desert-assets/background.png',
      translateY: [0, -10],
      scale: [1, 1.5, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: true      
    };
  
    const detail: BannerLayer = {
      image:
        '/desert-assets/detail.png',
      translateY: [-20, -10],
      scale: [1.3, 1, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: false,
      shouldDisableScalingTranslations: true
    };
  
    const foreground: BannerLayer = {
      image:
        '/desert-assets/foreground.png',
        scale: [1, 1.25, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: false
    };

    const gradientOverlay: BannerLayer = {
        opacity: [0, 1, "easeInSine"],
        shouldAlwaysCompleteAnimation: false,
        expanded: true,
        children: <div className="absolute inset-0 gradient" />
      };

    const text: BannerLayer = {
      opacity: [0, 5, "easeInSine"],
      shouldAlwaysCompleteAnimation: true,
      children: (
      <div className='text-right px-24 py-12 lg:px-48 lg:py-24 opacity-1 text-dark'>
        <h2 className="text-5xl lg:text-8xl">Explore the surface...</h2>
        <p className='mt-12 lg:w-1/2 ml-auto text-sm md:text-base'>Breathtaking landscapes and alien terrains awaits you.
        From vast deserts to lush forests, each planet has its unique environment waiting to be discovered.
        Use advanced equipment to traverse rugged terrain and uncover hidden pathways.
        With a variety of vehicles and tools at your disposal, choose your exploration experience on each planet.</p>
      </div>)
    };
    
    return (
      <>
        <ParallaxBanner
          layers={[background, foreground, text, detail, gradientOverlay]}
          className="relative aspect-[2/1] w-2/3 lg:w-full h-screen"
        />
      </>
    );
  };

  export default Desert