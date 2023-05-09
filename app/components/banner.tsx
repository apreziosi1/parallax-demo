import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'

const TitleBanner = () => {
    const background: BannerLayer = {
      image:
        '/banner-assets/background.png',
      translateY: [0, 50],
      opacity: [1, 0.3],
      scale: [1.05, 1, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: true,
    };
  
    const headline: BannerLayer = {
      translateY: [-10, 30],
      scale: [1, 1.05, 'easeOutCubic'],
      opacity: [1, 0, 'easeOutExpo'],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        <div className="absolute top-16 right-12 lg:top-32 lg:right-56">
          <h1 className="text-5xl lg:text-8xl text-sand">
            XPLORE:
          </h1>
          <h2 className="text-3xl lg:text-6xl text-sand">Distant worlds</h2>
        </div>
      ),
    };
  
    const foreground: BannerLayer = {
      image:
        '/banner-assets/foreground.png',
      translateY: [0, 15],
      scale: [1, 1.2, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: true,
    };
  
    const gradientOverlay: BannerLayer = {
      opacity: [0, 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: <div className="absolute inset-0 gradient-banner" />
    };
  
    return (
      <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay]}
        className="aspect-[2/1] w-full h-screen"
      />
    );
  };

  export default TitleBanner