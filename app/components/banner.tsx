import { ParallaxBanner } from "react-scroll-parallax"
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types"

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
      translateY: [0, 103],
      scale: [1, 1.05, 'easeOutCubic'],
      opacity: [1, 0, 'easeOutExpo'],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        <div className="absolute top-16 right-32">
          <h1 className="text-lg md:text-5xl lg:text-8xl">
            Venture into<br />the universe
          </h1>
        </div>
      ),
    };
  
    const foreground: BannerLayer = {
      image:
        '/banner-assets/foreground.png',
      translateY: [0, 15],
      scale: [1, 1.1, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: true,
    };
  
    const gradientOverlay: BannerLayer = {
        opacity: [0, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="z-100 absolute inset-0 bg-gradient-to-t from-blue-900 to-dark" />
      };
  
    return (
      <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay]}
        className="aspect-[2/1] w-full h-screen"
      />
    );
  };

  export default TitleBanner