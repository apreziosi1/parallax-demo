import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'

const Cave = () => {
    const background: BannerLayer = {
      image:
        '/cave-assets/background.png',
      
      scale: [2, 1, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: true,
      shouldDisableScalingTranslations: true      
    };
  
    const detail: BannerLayer = {
      image:
        '/cave-assets/detail.png',
      translateY: [-20, -10],
      shouldAlwaysCompleteAnimation: true,
      shouldDisableScalingTranslations: true
    };
  
    const foreground: BannerLayer = {
      image:
        '/cave-assets/foreground.png',
        scale: [1, 1.2, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        shouldDisableScalingTranslations: true
    };

    const gradientOverlay: BannerLayer = {
        opacity: [0, 1, "easeInSine"],
        shouldAlwaysCompleteAnimation: false,
        expanded: true,
        children: <div className="absolute inset-0 gradient" />
      };

    const text: BannerLayer = {
        opacity: [0, 2, "easeInSine"],
        shouldAlwaysCompleteAnimation: true,
        shouldDisableScalingTranslations: true,
        children: (
        <div className=' px-24 py-12 lg:px-48 lg:py-24 text-sand'>
            <h2 className=" text-5xl lg:text-8xl">...and the <br/> undergroud</h2>
            <p className='mt-12'>Delve into the depths of the unknown. <br />
            Explore the depths of alien planets and discover the secrets buried deep underground: <br />
            uncover traces of ancient civilizations and unravel the mysteries of lost technologies. <br />
            Tailor your exploration experience and uncover the secrets of each planet at your own pace.</p>
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

  export default Cave