import Button from '../components/Button';
import React, { useState, FormEvent } from 'react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { H2, H3, P } from '../components/Typography';
import Icon from '../components/Icon';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import { contactPageStructuredData } from '../utils/structuredData';

// Initialize EmailJS with your actual credentials
const EMAILJS_SERVICE_ID = 'service_f4kwlqb';
const EMAILJS_TEMPLATE_ID = 'template_jg44o2k';
const EMAILJS_PUBLIC_KEY = 'CHySN79zluBv8qeXb';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string; // Hidden field for bot detection
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '' // Honeypot field - should remain empty
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formStartTime, setFormStartTime] = useState<number>(Date.now());
  const [interactionCount, setInteractionCount] = useState(0);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Regular form validation first (so users see proper error messages)
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    // Set errors first so red borders show
    setErrors(newErrors);

    // If there are basic validation errors, return false
    if (Object.keys(newErrors).length > 0) {
      return false;
    }

    // Bot protection checks (after basic validation passes)
    if (formData.honeypot) {
      // Bot filled the honeypot field
      console.log('Bot detected: honeypot field filled');
      return false;
    }

    const timeTaken = Date.now() - formStartTime;
    if (timeTaken < 3000) {
      // Form submitted too quickly (less than 3 seconds)
      console.log('Bot detected: form submitted too quickly');
      return false;
    }

    if (interactionCount < 3) {
      // Not enough user interactions
      console.log('Bot detected: insufficient interactions');
      return false;
    }

    // Check for spam patterns
    const spamPatterns = [
      /https?:\/\//gi, // URLs
      /\b(buy now|click here|free|winner|congratulations)\b/gi,
      /\b\d{10,}\b/g, // Long numbers
    ];

    const allText = `${formData.name} ${formData.email} ${formData.message}`.toLowerCase();
    for (const pattern of spamPatterns) {
      if (pattern.test(allText)) {
        console.log('Potential spam detected');
        // Don't show error to user, just fail silently
        return false;
      }
    }

    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Track user interactions for bot detection
    setInteractionCount(prev => prev + 1);

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS (exclude honeypot field)
      const emailData = {
        to_email: 'mark.thorp@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: 'Website Enquiry'
      };


      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailData,
        EMAILJS_PUBLIC_KEY
      );


      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confirmation component
  const ConfirmationMessage = () => (
    <div className="text-center p-12 border border-secondary-300 bg-secondary-100 rounded-2xl mb-20">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 text-secondary-300 rounded-full mb-6">
        <Icon name="check" className="w-10 h-10" />
      </div>

      <H3>Thank you for your message!</H3>
      <P>
        Your message has been sent successfully to Peter Thorp. We will get back to you as soon as possible, typically within 1-2 business days.
      </P>
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
          setFormStartTime(Date.now());
          setInteractionCount(0);
        }}
      >
        Send another message
      </Button>

    </div>
  );

  return (
    <div>
      <SEO
        title="Contact Peter Thorp | Auckland Barrister"
        description="Contact Peter Thorp, experienced Auckland barrister. Get in touch for legal consultation and representation. Phone: +64 21 950 198 | Email: peter@thorp.co.nz"
        keywords={[
          "contact Peter Thorp",
          "Auckland barrister contact",
          "legal consultation Auckland",
          "barrister phone number",
          "legal advice New Zealand",
          "commercial litigation lawyer",
          "Peter Thorp email",
          "legal representation Auckland"
        ]}
        canonicalUrl="https://peterthorp.co.nz/contact"
        structuredData={contactPageStructuredData}
      />
      {/* Hero Section */}
      <Section className="pt-6">
        <Container>
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20 lg:gap-40">
            <div className="flex flex-col">
              <H2>Contact</H2>
              <P>
                Peter welcomes enquiries from clients, lawyers and organisations seeking experienced advice and advocacy.
              </P>

              {/* Show confirmation message or contact form */}
              {isSubmitted ? (
                <ConfirmationMessage />
              ) : (
                <form onSubmit={handleSubmit} className="mb-20">
                  <div className="mb-8 md:mb-10">
                    <label htmlFor="name" className="block mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`bg-secondary-100 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent ${errors.name ? 'border-secondary-400' : 'border-secondary-400'
                        }`}
                      style={errors.name ? { borderColor: '#951A37' } : {}}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm" style={{ color: '#951A37' }}>{errors.name}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-10">
                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`bg-secondary-100 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent ${errors.email ? 'border-secondary-400' : 'border-secondary-400'
                          }`}
                        style={errors.email ? { borderColor: '#951A37' } : {}}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm" style={{ color: '#951A37' }}>{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-secondary-100 w-full px-4 py-3 border border-secondary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="message" className="block mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`text-sm bg-secondary-100 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent resize-none ${errors.message ? 'border-secondary-400' : 'border-secondary-400'
                        }`}
                      style={errors.message ? { borderColor: '#951A37' } : {}}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm" style={{ color: '#951A37' }}>{errors.message}</p>
                    )}
                  </div>

                  {/* Honeypot field - hidden from users but visible to bots */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website (leave blank):</label>
                    <input
                      type="text"
                      id="website"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </Button>
                </form>
              )}
            </div>

            <div className="relative md:min-w-[40%] lg:min-w-[35%] h-auto mx-auto">
              <img
                src="/images/artwork.png"
                alt="Legal scales and tools"
                className="hidden md:block w-auto h-auto rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  (target.nextSibling as HTMLElement).style.display = 'flex';
                }}
              />
              <img
                src="/images/artwork-landscape.png"
                alt="Legal scales and tools"
                className="md:hidden w-auto h-auto rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  (target.nextSibling as HTMLElement).style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="hidden w-full aspect-[4/5] bg-secondary-100 rounded-2xl flex items-center justify-center text-neutral-500">
                <span>Legal Tools</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
