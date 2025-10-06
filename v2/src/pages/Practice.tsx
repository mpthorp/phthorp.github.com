import React from 'react';
import { H2, P } from '../components/Typography';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import CTACard from '../components/CTACard';
import { IconName } from '../components/Icon';
import Icon from '../components/Icon';
import SEO from '../components/SEO';
import { practicePageStructuredData } from '../utils/structuredData';

interface CTA {
  iconName: IconName;
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
}

const Practice: React.FC = () => {
  const cta: CTA[] = [
    {
      iconName: "usersThree",
      title: "Community & Leadership",
      description: "Discover Peter's long-standing leadership roles in sport, education, and charitable organisations beyond the courtroom.",
      buttonLabel: "Learn more",
      buttonLink: "/community"
    },
    {
      iconName: "user",
      title: "About",
      description: "Explore Peter's professional philosophy and core values of service and leadership to understand the integrity he brings to his practice.",
      buttonLabel: "Learn more",
      buttonLink: "/about"
    },
    {
      iconName: "phone",
      title: "Contact Peter",
      description: "Get in touch with Peter to discuss your legal needs and learn how his experience can help you achieve the best possible outcome.",
      buttonLabel: "Contact",
      buttonLink: "/contact"
    }
  ];

  return (
    <div>
      <SEO 
        title="Practice & Experience | Peter Thorp Barrister"
        description="Explore Peter Thorp's extensive legal practice areas including commercial litigation, administrative law, company law, contract disputes, and more. 50+ years of expertise."
        keywords={[
          "Peter Thorp practice areas",
          "commercial litigation NZ",
          "administrative law Auckland",
          "company law barrister",
          "contract disputes",
          "tort law New Zealand",
          "survey law",
          "construction law",
          "insurance law",
          "intellectual property disputes"
        ]}
        canonicalUrl="https://peterthorp.co.nz/practice"
        structuredData={practicePageStructuredData}
      />
      {/* Hero Section */}
      <Section className="pt-6">
        <Container>
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20">
            <div className="flex flex-col">
              <H2>Practice & Experience</H2>
              <P>
                Peter has extensive experience before all Courts and a wide range of
                Tribunals and other bodies. Since commencing practice as a Barrister
                in 1991, Peter has specialized in general civil commercial advice and
                dispute resolution and appeared principally in the High Court and
                Court of Appeal.
              </P>
              <P>
                Peter's specialist expertise in civil commercial advice and dispute
                resolution includes litigation, mediation, arbitration and negotiation
                and involves a wide range of legal areas including:
              </P>
              <ul className="flex flex-col gap-2 mb-10">
                <li className="flex gap-3"><Icon name="bullet" className="w-4 h-4 text-secondary-500 mt-1 lg:mt-2" />Commercial Litigation</li>
                <li className="flex gap-3"><Icon name="bullet" className="w-4 h-4 text-secondary-500 mt-1 lg:mt-2" />Administrative Law</li>
                <li className="flex gap-3"><Icon name="bullet" className="w-4 h-4 text-secondary-500 mt-1 lg:mt-2" />Company Law and Trusts</li>
                <li className="flex gap-3"><Icon name="bullet" className="w-4 h-4 text-secondary-500 mt-1 lg:mt-2" />Contract and Tort</li>
                <li className="flex gap-3"><Icon name="bullet" className="w-4 h-4 text-secondary-500 mt-1 lg:mt-2" />Survey Law</li>
                <li className="flex gap-3"><Icon name="bullet" className="w-4 h-4 text-secondary-500 mt-1 lg:mt-2" />Construction Law</li>
                <li className="flex gap-3"><Icon name="bullet" className="w-4 h-4 text-secondary-500 mt-1 lg:mt-2" />Land Law</li>
                <li className="flex gap-3"><Icon name="bullet" className="w-4 h-4 text-secondary-500 mt-1 lg:mt-2" />Insurance Law</li>
                <li className="flex gap-3"><Icon name="bullet" className="w-4 h-4 text-secondary-500 mt-1 lg:mt-2" />Intellectual Property</li>
              </ul>
              <P>Peter has been retained as lead counsel in a number of cases involving novel questions of law,
                some of which are leading cases in their field. Peter has also been retained in cases in Australia and the Cook Islands.</P>

            </div>

            <div className="relative md:min-w-[40%] lg:min-w-[35%] h-auto mx-auto">
              <img
                src="/v2/images/tools.png"
                alt="Legal scales and tools"
                className="hidden md:block w-auto h-auto rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  (target.nextSibling as HTMLElement).style.display = 'flex';
                }}
              />
              <img
                src="/v2/images/tools-landscape.png"
                alt="Legal scales and tools"
                className="md:hidden w-auto h-auto rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  (target.nextSibling as HTMLElement).style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="hidden w-full aspect-[4/5] bg-stone-200 rounded-2xl items-center justify-center text-stone-500">
                <span>Legal Tools</span>
              </div>

            </div>
          </div>
        </Container>
        {/* Bottom CTAs */}
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cta.map((cta, index) => (
              <CTACard
                key={index}
                iconName={cta.iconName}
                title={cta.title}
                description={cta.description}
                buttonLabel={cta.buttonLabel}
                buttonLink={cta.buttonLink}
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Practice;