import { useI18n } from "@src/hooks";
import { BannerCarouselContainer } from "../containers";

import { bannerImgs } from "@src/utils/const";

export const MainBanner = () => {
  const { t } = useI18n();

  return (
    <>
      <div className="relative h-[500px] overflow-hidden">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/20250728_0959_Crypto+Celebration+Goal_simple_compose_01k18hv5fzeqsaemph0rn6jg81.mp4"
        />

        <div className="absolute inset-0 z-[1] bg-black/50" />

        <BannerCarouselContainer
          showDots={false}
          arrows={false}
          autoPlaySpeed={5000}
        >
          {bannerImgs.map((banner, index) => (
            <div
              key={index}
              className="relative w-full md:w-3/4 h-full flex flex-col justify-center items-start shadow rounded-2xl"
            >
              <div className="text-white text-left px-8 md:px-14 z-20">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">
                  {t(banner.title)}
                </h1>
                <p className="text-base sm:text-lg md:text-xl">
                  {t(banner.description)}
                </p>
              </div>
            </div>
          ))}
        </BannerCarouselContainer>
      </div>
    </>
  );
};
