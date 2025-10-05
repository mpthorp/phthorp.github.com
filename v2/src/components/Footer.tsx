import React from 'react';
import Icon from './Icon';
import { H2, P } from './Typography';
import { Container } from './Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-800 text-secondary-300 px-5 pt-16 pb-8 md:px-8 md:pt-16 lg:pt-32 lg:px-16">
      <Container className="space-y-20">
        <div className="flex-1 md:flex space-y-12 md:space-y-0">
          <div className="flex-1">
            <H2 className="font-bold text-secondary-300 !mb-0">Peter Thorp</H2>
            <P.xl className="font-light text-secondary-300 !mb-2">Barrister</P.xl>
            <P.sm className="text-secondary-300">LLB (HONS)</P.sm>
          </div>
          <ul className="flex flex-col gap-3 mb-10 text-secondary-300">
            <li className="flex items-center gap-3"><Icon name="envelope" className="w-6 h-6" /><a href="mailto:peter@thorp.co.nz" className="hover:underline">peter@thorp.co.nz</a></li>
            <li className="flex items-center gap-3"><Icon name="phone" className="w-6 h-6" /><a href="tel:+6421950198" className="hover:underline">+64 (0) 21 950 198</a></li>
            <li className="flex items-center gap-3"><Icon name="mapPin" className="w-6 h-6" />Auckland, New Zealand</li>
            <li className="flex items-center gap-3"><Icon name="mailbox" className="w-6 h-6" />P.O. Box 1987, Auckland 1140</li>
          </ul>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <P.sm className="text-secondary-300 whitespace-nowrap !mb-0">
            Trusted Advocacy. Proven Expertise.
          </P.sm>
          <hr className="flex-1 border-t border-secondary-300 h-0" />
        </div>
      </Container>

    </footer>
  );
};

export default Footer;