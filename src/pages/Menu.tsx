import React, { useState } from 'react'
import { 
  ChevronRightIcon,
  SparklesIcon,
  BeakerIcon,
  HeartIcon,
  StarIcon,
  FireIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import { motion, useScroll, useTransform } from 'framer-motion'
import FoodCard from '../components/FoodCard'

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
  category: string
  isPopular?: boolean
  tags: string[]
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Course' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' }
  ];

  const menuItems: MenuItem[] = [
    {
      name: "Rainbow Buddha Bowl",
      description: "A vibrant bowl of quinoa, roasted sweet potatoes, fresh avocado, crispy chickpeas, and seasonal vegetables.",
      price: "$18.99",
      image: "/IMG_0861-1536x1164.jpg",
      isPopular: true,
      category: "mains",
      tags: ["Vegetarian", "Gluten-Free"]
    },
    {
      name: "Mediterranean Platter",
      description: "A delightful assortment of hummus, falafel, tabbouleh, and warm pita bread.",
      price: "$21.99",
      image: "/IMG_0861-1536x1164.jpg",
      category: "starters",
      tags: ["Vegan", "Vegetarian"]
    },
    {
      name: "Truffle Mushroom Risotto",
      description: "Creamy Arborio rice with wild mushrooms, finished with black truffle oil and fresh herbs.",
      price: "$24.99",
      image: "/IMG_0861-1536x1164.jpg",
      category: "mains",
      tags: ["Vegetarian"]
    },
    {
      name: "Green Goddess Salad",
      description: "Fresh mixed greens, avocado, cucumber, and our signature green goddess dressing.",
      price: "$16.99",
      image: "/IMG_0861-1536x1164.jpg",
      category: "starters",
      tags: ["Vegan", "Gluten-Free"]
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
      price: "$12.99",
      image: "/IMG_0861-1536x1164.jpg",
      category: "desserts",
      isPopular: true,
      tags: ["Vegetarian"]
    },
    {
      name: "Fresh Mint Lemonade",
      description: "Freshly squeezed lemons with mint leaves and natural sweetener.",
      price: "$6.99",
      image: "/IMG_0861-1536x1164.jpg",
      category: "drinks",
      tags: ["Vegan"]
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Fixed Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/IMG_0861-1536x1164.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Fixed Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl relative pt-24 md:pt-0">
              {/* Animated Accent Line */}
              <motion.div 
                className="w-24 h-1 bg-primary mb-6 md:mb-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
              
              {/* Main Content */}
              <div className="space-y-6 md:space-y-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] md:leading-tight">
                  <motion.span 
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Explore
                  </motion.span>
                  <motion.span 
                    className="block text-primary"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Our Menu
                  </motion.span>
                  <motion.span 
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Selection
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Discover our carefully curated menu featuring fresh, seasonal ingredients and innovative plant-based dishes.
                </motion.p>

                {/* Menu Categories */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { value: "Starters", label: "Fresh Beginnings", icon: <SparklesIcon className="w-5 h-5" /> },
                    { value: "Mains", label: "Chef's Specials", icon: <FireIcon className="w-5 h-5" /> },
                    { value: "Desserts", label: "Sweet Endings", icon: <HeartIcon className="w-5 h-5" /> }
                  ].map((category, index) => (
                    <motion.div
                      key={index}
                      className="backdrop-blur-sm bg-white/10 rounded-2xl p-6"
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-primary">
                          {category.icon}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{category.value}</h3>
                      </div>
                      <p className="text-sm text-white/80">{category.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 w-full h-full opacity-5"
          style={{
            backgroundImage: 'url("/IMG_0861-1536x1164.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu</h2>
            <p className="text-gray-600 text-lg mb-8">
              Discover our wide selection of plant-based dishes, crafted with fresh ingredients and love.
            </p>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FoodCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Menu
