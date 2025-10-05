import React from 'react';
import Icon, { IconName } from './Icon';
import { H4, P } from './Typography';

interface ServiceCardProps {
  iconName: IconName;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconName, title, description, className = '' }) => {
  return (
    <div className={`max-w-[70%] md:max-w-full ${className}`}>
      <div className="flex flex-col items-center text-center">
        {/* Icon Container */}
        <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-secondary-300 rounded-lg mb-6">
          <Icon name={iconName} className="w-8 h-8" />
        </div>
        
        {/* Title */}
        <H4 className="font-bold">{title}</H4>
        
        {/* Description */}
        <P>{description}</P>
      </div>
    </div>
  );
};

export default ServiceCard;
