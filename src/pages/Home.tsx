import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import { IconName } from '../components/Icon';
import Icon from '../components/Icon';
import { H1, H2, H4, P } from '../components/Typography';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import SEO from '../components/SEO';
import { homePageStructuredData } from '../utils/structuredData';

interface Service {
  iconName: IconName;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect for Peter's photo
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  // Calculate parallax offset (photo moves slower than scroll)
  const parallaxOffset = scrollY * 0.1; // Adjust multiplier to control speed

  const services: Service[] = [
    {
      iconName: "buildingApartment",
      title: "Commercial Litigation",
      description: "Resolving complex business disputes with commercially viable strategies."
    },
    {
      iconName: "bank",
      title: "Administrative Law",
      description: "Judicially reviewing public bodies and regulatory authorities."
    },
    {
      iconName: "buildings",
      title: "Company Law and Trusts",
      description: "Resolving disputes involving directors, shareholders, and trustees."
    },
    {
      iconName: "scroll",
      title: "Contract and Tort",
      description: "Resolving contract, tort and damages disputes."
    },
    {
      iconName: "fileText",
      title: "Survey Law",
      description: "Resolving survey issues including accretion, adverse possession and statutory compensation claims."
    },
    {
      iconName: "craneTower",
      title: "Construction Law",
      description: "Resolving building disputes."
    },
    {
      iconName: "farm",
      title: "Land Law",
      description: "Resolving property and land disputes."
    },
    {
      iconName: "shield",
      title: "Insurance Law",
      description: "Resolving policy disputes."
    },
    {
      iconName: "brain",
      title: "Intellectual Property",
      description: "Resolving IP-related disputes."
    }
  ];

  return (
    <div>
      <SEO
        title="Peter Thorp - Experienced Barrister | Auckland, New Zealand"
        description="Peter Thorp is an experienced barrister with over 50 years of expertise in commercial litigation, administrative law, and civil disputes. Based in Auckland, New Zealand."
        keywords={[
          "Peter Thorp",
          "barrister Auckland",
          "New Zealand barrister",
          "commercial litigation",
          "administrative law",
          "civil litigation",
          "legal advocate",
          "court representation",
          "Auckland lawyer",
          "experienced barrister"
        ]}
        canonicalUrl="https://peterthorp.co.nz"
        structuredData={homePageStructuredData}
      />
      {/* Hero Header Section - Clean with just name, title, and image */}
      <Section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-end !py-0"
        style={{
          backgroundImage: `url('/images/header-background.png')`
        }}
      >
        <Container className="relative">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center">
            {/* Left Content - Clean and Simple */}

            <div className="pt-16 md:pt-0 text-center md:text-left">
              <H1>
                Peter Thorp
              </H1>
              <H2 className="text-primary-500 font-light !mb-2">Barrister</H2>
              <P className="text-primary-500 uppercase tracking-wider mb-0">LLB (HONS)</P>
            </div>

            {/* Right Image - Peter's Photo */}
            <div className="relative overflow-hidden">
              <div
                className="ml-20 md:ml-0 relative lg:w-full max-w-md mx-auto transition-transform duration-100 ease-out"
                style={{
                  transform: `translateY(${parallaxOffset}px)`
                }}
              >
                <img
                  src="/images/header-peter.png"
                  alt="Peter Thorp, experienced Auckland barrister with over 50 years of legal expertise"
                  className="w-auto h-auto"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback placeholder */}
                <div
                  className="hidden w-full aspect-[4/5] bg-secondary-100 rounded-lg flex items-center justify-center text-neutral-500"
                  style={{
                    transform: `translateY(${parallaxOffset}px)`
                  }}
                >
                  <span>Peter's Photo</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Introduction Section */}
      <Section className="!pb-0">
        <Container>
          <div className="text-center space-y-8 md:space-y-16 text-neutral-500">
            <P.xl>
              Peter is a trial and appellate advocate with over five decades of experience, principally before New Zealand's senior civil courts but also in Australia and the Cook Islands.
            </P.xl>
            <hr className="border-t border-secondary-500 w-24 h-0 mx-auto" />
          </div>
        </Container>
      </Section>

      {/* Professional Approach Section */}
      <Section>
        <Container className="!max-w-5xl">
          <div>
            <div className="text-center mb-8 lg:mb-16">
              <H2>
                Your Partner in Complex Disputes
              </H2>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-16">
              <div>
                <P.lg>
                  Clients value Peter's unwavering commitment to achieving the best possible outcome. He is known for:
                </P.lg>
                <ul>
                  <li className="flex flex-row gap-3">
                    <Icon name="bullet" className="min-w-4 w-4 h-4 text-secondary-500 mt-1 lg:mt-2" />
                    <div>
                      <H4>A Collaborative Approach</H4>
                      <P>An approachable style making complex legal matters manageable.</P>
                    </div>
                  </li>
                  <li className="flex flex-row gap-3">
                    <Icon name="bullet" className="min-w-4 w-4 h-4 text-secondary-500 mt-1 lg:mt-2" />
                    <div>
                      <H4>Strategic Insight</H4>
                      <P>A thorough, analytical approach ensuring every legal strategy is grounded in fact and law.</P>
                    </div>
                  </li>
                  <li className="flex flex-row gap-3">
                    <Icon name="bullet" className="min-w-4 w-4 h-4 text-secondary-500 mt-1 lg:mt-2" />
                    <div>
                      <H4>Commercially Driven Advice</H4>
                      <P>Delivering tailored advice designed to achieve practical, commercially viable outcomes.</P>
                    </div>
                  </li>
                </ul>
                <div className="flex justify-center md:justify-start">
                  <Button variant="primary" size="lg" href="/practice">
                    Learn More
                  </Button>
                </div>
              </div>
              <div>
                {/* Desktop image */}
                <img
                  src="/images/books.png"
                  alt="Legal reference books and law texts used by Peter Thorp for commercial litigation research"
                  className="hidden md:block w-auto h-auto rounded-lg"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Mobile image */}
                <img
                  src="/images/books-landscape.png"
                  alt="Legal reference books and law texts used by Peter Thorp for commercial litigation research"
                  className="block md:hidden w-full h-auto rounded-lg"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden w-full aspect-[4/5] bg-secondary-100 rounded-lg flex items-center justify-center text-neutral-500">
                  <span>Photo of law books</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trusted Advocacy Banner */}
      <Section className="bg-primary-500 !py-12 md:!py-20 lg:!py-20">
        <Container>
          <div className="text-center flex justify-center items-center gap-4 md:gap-8">
            <hr className="border-t border-secondary-300 h-0 w-24" />
            <P.xl className="text-secondary-300 mb-0">Trusted Advocacy. Proven Expertise.</P.xl>
            <hr className="border-t border-secondary-300 h-0 w-24" />
          </div>
        </Container>
      </Section>

      {/* Key Services Section */}
      <Section>
        <Container>
          <div className="text-center mb-16 lg:mb-20">
            <H2 className="mb-4">Key Services</H2>
            <P.lg>
              Peter's practice covers a wide range of commercial disputes, always with a focus on practical,
              commercially driven outcomes tailored to each client's goals. His expertise includes:
            </P.lg>
          </div>

          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:place-items-stretch gap-6 md:gap-6 lg:grid-cols-3 lg:gap-10 ">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                iconName={service.iconName}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action Section */}
      <Section className="bg-secondary-300">
        <Container>
          <div className="text-center space-y-6">
            <H2 className="font-bold">
              Ready to Seek Experienced Advocacy?
            </H2>
            <P.lg className="pb-4 md:pb-5">
              Peter welcomes inquiries from clients, lawyers, and organizations seeking experienced advice.
              He is available to accept briefs through an instructing solicitor, though you may also contact him
              directly and he will make all necessary arrangements.
            </P.lg>
            <Button variant="primary" size="lg" href="/contact">
              Contact
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;