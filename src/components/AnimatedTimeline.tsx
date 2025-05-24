import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  time: string;
  description: string;
}

interface Props {
  items: TimelineItem[];
}

const AnimatedTimeline: React.FC<Props> = ({ items }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-[#E5E7EB] md:block hidden" />

      {items.map((step, index) => (
        <div 
          key={index} 
          className="relative flex items-start md:items-center py-8 flex-col md:flex-row"
        >
          {/* Left Content */}
          <motion.div 
            className="md:w-[42%] w-full md:pr-12 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {index % 2 === 0 && (
              <div className="md:text-right text-left">
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                <div className="md:hidden">
                  <div className="inline-block bg-white shadow-sm rounded-full py-1 px-3 border border-gray-100">
                    <span className="text-xs font-medium text-primary">{step.time}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Center Column with Animated Line */}
          <div className="md:w-[16%] w-full flex justify-center relative md:static">
            <motion.div 
              className="w-3 h-3 bg-primary rounded-full hidden md:block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            />
            
            {/* Time Label - Left */}
            <motion.div 
              className="hidden md:block absolute right-1/2 mr-6 -translate-y-1/2 top-1/2 whitespace-nowrap"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
            >
              {index % 2 === 0 && (
                <div className="bg-white shadow-sm rounded-full py-1 px-3 border border-gray-100">
                  <span className="text-xs font-medium text-primary">{step.time}</span>
                </div>
              )}
            </motion.div>

            {/* Time Label - Right */}
            <motion.div 
              className="hidden md:block absolute left-1/2 ml-6 -translate-y-1/2 top-1/2 whitespace-nowrap"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
            >
              {index % 2 === 1 && (
                <div className="bg-white shadow-sm rounded-full py-1 px-3 border border-gray-100">
                  <span className="text-xs font-medium text-primary">{step.time}</span>
                </div>
              )}
            </motion.div>

            {/* Animated Progress Line */}
            <motion.div 
              className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-primary origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ 
                transformOrigin: 'top',
                height: '100%',
                transform: 'translateX(-50%)'
              }}
            />
          </div>

          {/* Right Content */}
          <motion.div 
            className="md:w-[42%] w-full md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {index % 2 === 1 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                <div className="md:hidden">
                  <div className="inline-block bg-white shadow-sm rounded-full py-1 px-3 border border-gray-100">
                    <span className="text-xs font-medium text-primary">{step.time}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedTimeline; 