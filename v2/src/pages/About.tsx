import React from 'react';
import { H2, H3, P } from '../components/Typography';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import CTACard from '../components/CTACard';
import { IconName } from '../components/Icon';
import SEO from '../components/SEO';
import { aboutPageStructuredData } from '../utils/structuredData';

interface CTA {
  iconName: IconName;
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
}

const About: React.FC = () => {
  const cta: CTA[] = [
    {
      iconName: "gavel",
      title: "Practice & Experience",
      description: "Learn more about Peter's wide-ranging expertise across commercial litigation and other key areas.",
      buttonLabel: "Learn more",
      buttonLink: "/practice"
    },
    {
      iconName: "usersThree",
      title: "Community & Leadership",
      description: "Discover Peter's long-standing leadership roles in sport, education, and charitable organisations beyond the courtroom.",
      buttonLabel: "Learn more",
      buttonLink: "/community"
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
        title="About Peter Thorp | Experienced Auckland Barrister"
        description="Learn about Peter Thorp's professional philosophy, 50+ years of legal experience, and personal background. Admitted to the Bar in 1973, serving clients with clarity and insight."
        keywords={[
          "about Peter Thorp",
          "Peter Thorp biography",
          "Auckland barrister experience",
          "legal philosophy",
          "barrister background",
          "trial advocate",
          "appellate advocate",
          "High Court experience",
          "Court of Appeal",
          "legal career"
        ]}
        canonicalUrl="https://peterthorp.co.nz/about"
        structuredData={aboutPageStructuredData}
      />
      {/* Hero Section */}
      <Section className="pt-6">
        <Container>
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20">
            <div className="flex flex-col gap-4">
              <div>
              <H2>About</H2>
              <P>
                Peter is a respected barrister sole with over five decades of experience in trial and appellate advocacy. Admitted to the Bar in 1973, Peter was a litigation and managing partner at Auckland law firm Martelli McKegg Wells & Cormack until moving to the independent Bar in 1991. He has built a reputation for clear, timely, and commercially focused advocacy, appearing most frequently before the High Court and Court of Appeal.
              </P>
              </div>
              <div>
              <H3>Professional Philosophy</H3>
              <P>
                Clients and colleagues alike value his ability to cut through complexity with clarity, reliability, and practical insight. Known for his collaborative style, Peter is easy to work with while maintaining an unwavering focus on detail, strategy, and outcomes. His professional philosophy is simple: to equip every client with clear legal advice, a strong strategy, and the best possible chance of a successful outcome.
              </P>
              </div>
              <div>
              <H3>Beyond Legal Practice</H3>
              <P>
                Peter is married with six children and enjoys tennis, skiing, and playing his piano. He has long been active in community and sporting leadership, including significant roles with Ponsonby Rugby Club, Mount Albert Grammar School, and the Kimberley Trusts.
              </P>
              </div>

            </div>

            <div className="relative md:min-w-[40%] lg:min-w-[35%] h-auto mx-auto">
              <img
                src="/v2/images/peter-chair.png"
                alt="Peter Thorp, Auckland barrister, in his office discussing legal strategy and client matters"
                className="hidden md:block w-auto h-auto rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  (target.nextSibling as HTMLElement).style.display = 'flex';
                }}
              />
              <img
                src="/v2/images/peter-chair-landscape.png"
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

export default About;