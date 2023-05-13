import React from 'react'
import { Safe2, Secure2, Effective2, Ease2, Community2 } from "../assets"

import tw from 'tailwind-styled-components';
const BannerContainer = tw.div`
  flex items-center justify-center
  w-full h-20 bg-gray-100
`;

const BannerContent = tw.div`
  flex flex-col items-center justify-center
  w-full max-w-screen-lg
`;

const PartnersContainer = tw.div`
  flex items-center justify-center
  w-full h-full
`;

const PartnerLogo = tw.img`
  h-8 mx-4
`;
const partners = [
  {
    name: 'Partner 1',
    logo: Safe2,
    title: 'Safe',
  },
  {
    name: 'Partner 2',
    logo: Secure2,
    title: 'Secure',
  },
  {
    name: 'Partner 3',
    logo:  Effective2, 
    title: 'Effective',
  },
  {
    name: 'Partner 4',
    logo: Ease2,
    title: 'Ease Access',
  },
  {
    name: 'Partner 5',
    logo: Community2,
    title: 'Community',
  }
];

export default function SecureBanner() {
  return (
    <BannerContainer>
    <BannerContent>
      <h3>Our Sponsored Partners:</h3>
      <PartnersContainer>
        {partners.map((partner) => (
          <div>
          <PartnerLogo className='mx-auto m-10 md:m-20  object-cover sm:h-12 sm:w-12 lg:h-16 lg:w-16'
            key={partner.name}
            src={partner.logo}
            alt={`${partner.name} Logo`}
          />
          <h4 className="text-center text-lg font-medium md:text-xl lg:text-2xl">
          {partner.title}
          </h4>
          </div>
          
        ))}
      </PartnersContainer>
    </BannerContent>
  </BannerContainer>
    // <div>

/* sm:flex sm:gap-x-16 lg:gap-x-20 grid grid-col-5 md:grid-cols-5 gap-y-6 bg-primary-100/20 py-6  lg:py-10*/
      /*grid max-w-screen-xl grid-cols-2  mx-auto  sm:grid-cols-5 xl:grid-cols-5  sm:p-2  */
      /* <div className="w-[50%] flex flex-row grid-col-2 space-x-12 md:space-x-40 md:justify-center">
        <div>
          <img src={Safe2} alt="" className="mx-auto mb-2 h-8 w-8 object-cover sm:h-12 sm:w-12 lg:h-16 lg:w-16" />
          <h4 className="text-center text-lg font-medium md:text-xl lg:text-2xl">
            Safe
          </h4>
        </div>
        <div>
          <img src={Secure2} alt="" className="mx-auto mb-2 h-8 w-8 object-cover sm:h-12 sm:w-12 lg:h-16 lg:w-16" />
          <h4 className="text-center text-lg font-medium md:text-xl lg:text-2xl">
            Secure
          </h4>
        </div>
        <div>
          <img src={Effective2} alt="" className="mx-auto mb-2 h-8 w-8 object-cover sm:h-12 sm:w-12 lg:h-16 lg:w-16" />
          <h4 className="text-center text-lg font-medium md:text-xl lg:text-2xl">
            Effective
          </h4>
        </div>
        <div>
          <img src={Ease2} alt="" className="mx-auto mb-2 h-8 w-8 object-cover sm:h-12 sm:w-12 lg:h-16 lg:w-16" />
          <h4 className="text-center text-lg font-medium md:text-xl lg:text-2xl">
            Easy Access
          </h4>
        </div>
        <div>
          <img src={Community2} alt="" className="mx-auto mb-2 h-8 w-8 object-cover sm:h-12 sm:w-12 lg:h-16 lg:w-16" />
          <h4 className="text-center text-lg font-medium md:text-xl lg:text-2xl">
            Community
          </h4>
        </div>
      </div>
   
    </div> */
  )
}
