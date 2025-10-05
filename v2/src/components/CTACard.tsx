import React from 'react';
import Icon, { IconName } from './Icon';
import { H4, P } from './Typography';
import Button from './Button';

interface CTACardProps {
  iconName: IconName;
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  className?: string;
}

const CTACard: React.FC<CTACardProps> = ({ iconName, title, description, buttonLabel, buttonLink, className = '' }) => {
  return (
    <div className={`flex flex-col h-full p-8 rounded-lg border border-secondary-400 ${className}`}>
      {/* Icon Container */}
      <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-secondary-300 rounded-lg mb-6">
        <Icon name={iconName} className="w-8 h-8" />
      </div>

      {/* Title */}
      <H4 className="font-bold">{title}</H4>

      {/* Description - This will grow to fill available space */}
      <P.sm className="flex-grow">{description}</P.sm>
      
      {/* Button - This will be pushed to the bottom */}
      <div className="flex justify-start">
        <Button variant="primary" size="md" href={buttonLink}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default CTACard;
