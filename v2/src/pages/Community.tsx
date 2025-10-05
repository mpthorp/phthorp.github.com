import React from 'react';
import { H2, H3, P } from '../components/Typography';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import CTACard from '../components/CTACard';
import { IconName } from '../components/Icon';
import SEO from '../components/SEO';
import { communityPageStructuredData } from '../utils/structuredData';

interface CTA {
  iconName: IconName;
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
}

const Community: React.FC = () => {
  const cta: CTA[] = [
    {
      iconName: "gavel",
      title: "Practice & Experience",
      description: "Learn more about Peter's wide-ranging expertise across commercial litigation and other key areas.",
      buttonLabel: "Learn more",
      buttonLink: "/practice"
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
        title="Community & Leadership | Peter Thorp Barrister"
        description="Discover Peter Thorp's extensive community leadership roles in education, sport, and charitable organizations including MAGS Board of Trustees and Ponsonby Rugby Club."
        keywords={[
          "Peter Thorp community",
          "MAGS Board of Trustees",
          "Ponsonby Rugby Club",
          "Mount Albert Grammar School",
          "Auckland community leader",
          "educational leadership",
          "sports governance",
          "charitable work Auckland",
          "community service"
        ]}
        canonicalUrl="https://peterthorp.co.nz/community"
        structuredData={communityPageStructuredData}
      />
      {/* Hero Section */}
      <Section className="pt-6">
        <Container>
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20">
            <div className="flex flex-col gap-4">
              <div>
                <H2>Community & Leadership</H2>
                <P>
                  Peter's leadership extends beyond his legal work. He has held governance and leadership roles in education, sport, and charitable organisations. This strong record of community leadership reflects Peter's belief in service and long-term commitment beyond his professional life.
                </P>
              </div>
              <div>
                <H3>Mount Albert Grammar School</H3>
                <P>
                  Mount Albert Grammar School (1989 to date) Under Peter's leadership, the school introduced co-education and developed projects including the Mount Albert Aquatic Centre.
                </P>
                <ul className="flex flex-col gap-4 mb-10">
                  <li><span className="text-primary-500">1990 to 1993</span> - President of the Albertians Association</li>
                  <li><span className="text-primary-500">1995 to 2006</span> - Chair of the MAGS Board of Trustees</li>
                  <li><span className="text-primary-500">1997</span> - Albertian of the Year</li>
                  <li><span className="text-primary-500">2006</span> - Member of the MAGS Hall of Distinction</li>
                  <li><span className="text-primary-500">2015 to date</span> - Chair of Trustees of the MAGS Foundation</li>
                </ul>
              </div>
              <div>
                <H3>Ponsonby Rugby Club</H3>
                <P>
                  Ponsonby Rugby Club (1990 to date) Under Peter's leadership, the club achieved unprecedented success, including eight consecutive and ten out of eleven years of Gallaher Shield wins.
                </P>
                <ul className="flex flex-col gap-4 mb-10">
                  <li><span className="text-primary-500">1999 to 2011</span> - Chair of the Club's Management Committee</li>
                  <li><span className="text-primary-500">2020 to 2022</span> - Club President</li>
                  <li><span className="text-primary-500">2008 to date</span> - Chair of the Club's Trustees</li>
                  <li><span className="text-primary-500">2011</span> - Life Member</li>
                  <li><span className="text-primary-500">2014 to date</span> - Chair of Ponies Association</li>
                </ul>
              </div>
              <div>
                <H3>Kimberley Trusts</H3>
                <ul className="flex flex-col gap-4 mb-10">
                  <li><span className="text-primary-500">2011 to 2025</span> - Chair of Trustees, overseeing commercial property development and two early childcare centres.</li>
                </ul>
              </div>
            </div>
            <div className="relative md:min-w-[40%] lg:min-w-[35%] h-auto mx-auto">
              <img
                src="/images/peter-ponsonby.png"
                alt="Peter Thorp wearing his Ponsonby Rugby tie and badge."
                className="hidden md:block w-auto h-auto rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  (target.nextSibling as HTMLElement).style.display = 'flex';
                }}
              />
              <img
                src="/images/peter-ponsonby-landscape.png"
                alt="Peter Thorp wearing his Ponsonby Rugby tie and badge."
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
    </div >
  );
};

export default Community;