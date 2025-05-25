import React from 'react';
import { motion } from 'framer-motion';

interface FoodCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  isPopular?: boolean;
  tags?: string[];
}

const FoodCard: React.FC<FoodCardProps> = ({
  name,
  description,
  price,
  image,
  isPopular = false,
  tags = []
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Image */}
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            ✦ Popular
          </div>
        )}
        
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white text-green-600 px-3 py-1 rounded-full text-sm font-medium shadow-md">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FoodCard; 