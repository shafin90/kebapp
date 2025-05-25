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

interface MenuItem {
  name: string
  category: string
  price: string
  description: string
  dietary: string[]
  image: string
  popular?: boolean
  spicy?: boolean
}

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDietaryFilter, setSelectedDietaryFilter] = useState<string>('all')
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);

  const categories = ['all', 'kebap', 'chicken', 'falafel', 'salads', 'sides', 'drinks']
  const dietaryFilters = ['all', 'vegan', 'vegetarian', 'gluten-free']

  const menuItems: MenuItem[] = [
    {
      name: "Classic Kebap",
      category: "kebap",
      price: "$12.99",
      description: "Fresh vegetables and herbs wrapped in warm flatbread",
      dietary: ["vegetarian"],
      image: "/IMG_0861-1536x1164.jpg",
      popular: true
    },
    {
      name: "Spicy Chicken Kebap",
      category: "chicken",
      price: "€8.50",
      description: "Grilled chicken, spicy sauce, fresh vegetables",
      dietary: [],
      image: "/IMG_0861-1536x1164.jpg",
      spicy: true
    },
    {
      name: "Falafel Wrap",
      category: "falafel",
      price: "€7.00",
      description: "Crispy falafel, hummus, tahini sauce, fresh vegetables",
      dietary: ["vegan", "vegetarian"],
      image: "/IMG_0861-1536x1164.jpg"
    },
    {
      name: "Mediterranean Salad",
      category: "salads",
      price: "€8.00",
      description: "Mixed greens, feta cheese, olives, cherry tomatoes",
      dietary: ["vegetarian", "gluten-free"],
      image: "/IMG_0861-1536x1164.jpg"
    },
    {
      name: "Sweet Potato Fries",
      category: "sides",
      price: "€4.50",
      description: "Crispy sweet potato fries with special seasoning",
      dietary: ["vegan", "vegetarian", "gluten-free"],
      image: "/IMG_0861-1536x1164.jpg"
    },
    {
      name: "Fresh Mint Lemonade",
      category: "drinks",
      price: "€3.50",
      description: "Homemade lemonade with fresh mint leaves",
      dietary: ["vegan", "vegetarian", "gluten-free"],
      image: "/IMG_0861-1536x1164.jpg"
    }
  ]

  const filteredItems = menuItems.filter(item => 
    (selectedCategory === 'all' || item.category === selectedCategory) &&
    (selectedDietaryFilter === 'all' || item.dietary.includes(selectedDietaryFilter))
  )

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Fixed Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          data-scroll
          data-scroll-speed="-6"
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
        <div 
          className="relative z-10 min-h-screen flex items-center"
          data-scroll
          data-scroll-speed="4"
        >
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
                  className="grid grid-cols-3 gap-8 mt-16"
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
                        <h3 className="text-3xl font-bold text-white">{category.value}</h3>
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
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_theme(colors.primary/0.05),_transparent_70%)]"
          data-scroll
          data-scroll-speed="-2"
        ></div>
        <div className="container px-6 mx-auto relative">
          {/* Filters */}
          <div className="mb-16 space-y-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full capitalize transition-all shadow-sm ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-primary/20'
                      : 'bg-white text-primary hover:bg-primary/5 border border-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Dietary Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {dietaryFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedDietaryFilter(filter)}
                  className={`px-4 py-2 rounded-full capitalize text-sm transition-all border shadow-sm ${
                    selectedDietaryFilter === filter
                      ? 'border-primary bg-primary/5 text-primary shadow-primary/20'
                      : 'border-gray-200 hover:border-primary/30 hover:bg-primary/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg">
                      <span className="text-primary font-medium">{item.price}</span>
                    </div>
                    {item.popular && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                        <StarIcon className="w-4 h-4" />
                        Popular
                      </div>
                    )}
                    {item.spicy && (
                      <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                        <FireIcon className="w-4 h-4" />
                        Spicy
                      </div>
                    )}
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-text/70">{item.description}</p>
                    
                    {/* Dietary Tags */}
                    {item.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.dietary.map((diet) => (
                          <span 
                            key={diet}
                            className="text-xs px-2 py-1 rounded-full bg-primary/5 text-primary capitalize border border-primary/10"
                          >
                            {diet}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-24 bg-gradient-to-b from-white to-green-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container px-6 mx-auto relative">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BeakerIcon className="w-6 h-6" />,
                title: "Fresh Ingredients",
                description: "We source the freshest ingredients daily from local suppliers"
              },
              {
                icon: <HeartIcon className="w-6 h-6" />,
                title: "Made with Love",
                description: "Each dish is prepared with care and attention to detail"
              },
              {
                icon: <GlobeAltIcon className="w-6 h-6" />,
                title: "Sustainable Practices",
                description: "We maintain eco-friendly practices in all our operations"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-text/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Menu
