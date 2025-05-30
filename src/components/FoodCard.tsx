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
  image,
  isPopular = false
}) => {
  return (
    <motion.div
      className="relative aspect-[4/3] rounded-xl overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover"
      />
      
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
          ✦ Popular
        </div>
      )}
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
        <div className="text-green-400 font-medium">{price}</div>
      </div>
    </motion.div>
  );
};

export default FoodCard; 