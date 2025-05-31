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
  price,
  image
}) => {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      {/* Content Container */}
      <div className="p-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[3rem]">{name}</h3>
          <div className="text-xl font-bold text-primary">{price}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard; 