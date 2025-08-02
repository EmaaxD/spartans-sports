import Image from "next/image";

import SponsorOne from "@src/assets/img/sponsors/nasdaq-light.svg";
import SponsorTwo from "@src/assets/img/sponsors/box-light.svg";
import SponsorThree from "@src/assets/img/sponsors/eventbrite-light.svg";
import SponsorFour from "@src/assets/img/sponsors/netapp-light.svg";
import { useI18n } from "@src/hooks";

const sponsors = [
  {
    name: "Sponsor 1",
    logo: SponsorOne,
    link: "https://www.google.com",
  },
  {
    name: "Sponsor 2",
    logo: SponsorTwo,
    link: "https://www.google.com",
  },
  {
    name: "Sponsor 3",
    logo: SponsorThree,
    link: "https://www.google.com",
  },
  {
    name: "Sponsor 4",
    logo: SponsorFour,
    link: "https://www.google.com",
  },
  {
    name: "Sponsor 5",
    logo: SponsorFour,
    link: "https://www.google.com",
  },
  {
    name: "Sponsor 6",
    logo: SponsorThree,
    link: "https://www.google.com",
  },
  {
    name: "Sponsor 1",
    logo: SponsorOne,
    link: "https://www.google.com",
  },
  {
    name: "Sponsor 2",
    logo: SponsorTwo,
    link: "https://www.google.com",
  },
  {
    name: "Sponsor 3",
    logo: SponsorThree,
    link: "https://www.google.com",
  },
  {
    name: "Sponsor 4",
    logo: SponsorFour,
    link: "https://www.google.com",
  },
  {
    name: "Sponsor 5",
    logo: SponsorFour,
    link: "https://www.google.com",
  },
  {
    name: "Sponsor 6",
    logo: SponsorThree,
    link: "https://www.google.com",
  },
];

export const SponsorsSection = () => {
  const { t } = useI18n();

  return (
    <>
      <section
        id="sponsorsSection"
        className="flex flex-col justify-center items-center gap-4 mt-10 md:mt-20"
      >
        <h4
          className="text-white text-2xl lg:text-3xl font-bold capitalize"
          data-aos="zoom-in"
        >
          {t("sponsors")}
        </h4>

        <div className="flex flex-row justify-center items-center flex-wrap gap-4 px-7 sm:px-14 md:px-28 lg:px-36">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay={`${index + 1 * 2}00`}
            >
              <div className="w-20 md:w-28">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};
