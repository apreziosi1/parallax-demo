import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'

const Space = () => {
    const background: BannerLayer = {
      image:
        '/space-assets/background.png',
      translateX: [-10, 20],
      opacity: [1, 0.1],
      scale: [1, 1.5, 'easeOutExpo'],
      shouldAlwaysCompleteAnimation: true      
    };
  
    const detail: BannerLayer = {
      image:
        '/space-assets/detail.png',
      translateY: [0, 10],
      opacity: [1, 0.1],
      shouldAlwaysCompleteAnimation: true,
      shouldDisableScalingTranslations: true
    };
  
    const foreground: BannerLayer = {
      image:
        '/space-assets/foreground.png',
        scale: [1, 1.25, 'easeOutExpo'],
        opacity: [1, 0.1],
        shouldAlwaysCompleteAnimation: true,
        shouldDisableScalingTranslations: true
    };

    const text: BannerLayer = {
      opacity: [0, 3, "easeInSine"],
      shouldAlwaysCompleteAnimation: true,
      shouldDisableScalingTranslations: true,
      children: (
      <div className='sticky top-0 px-24 py-12 lg:px-48 lg:py-24 opacity-100 text-sand'>
        <h2 className="text-5xl lg:text-8xl w-1/2">Travel to distant planets</h2>
        <p className='mt-12'>Embark on a thrilling adventure and explore the vastness of space. <br />
        With advanced technologies, you can travel to distant planets <br /> and discover new worlds: 
        experience the rush of piloting a spacecraft <br /> through the galaxy 
        and witness stunning interstellar vistas along the way.</p>
      </div>)
    };

    const gradientOverlay: BannerLayer = {
      opacity: [0, 1, "easeInSine"],
      shouldAlwaysCompleteAnimation: false,
      expanded: true,
      children: <div className="absolute inset-0 gradient" />
    };
    
    return (
      <>
        <ParallaxBanner
          layers={[text, background, detail, foreground, gradientOverlay]}
          className="sticky top-0 aspect-[2/1] w-full h-screen"
        />
      </>
    );
  };

  export default Space