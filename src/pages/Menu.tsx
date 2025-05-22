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

  const categories = ['all', 'gemüse kebap', 'chicken kebap', 'falafel', 'salads', 'sides', 'drinks']
  const dietaryFilters = ['all', 'vegan', 'vegetarian', 'gluten-free']

  const menuItems: MenuItem[] = [
    {
      name: "Classic Gemüse Kebap",
      category: "gemüse kebap",
      price: "€7.50",
      description: "Fresh vegetables, homemade sauces, served in Turkish bread",
      dietary: ["vegetarian"],
      image: "/IMG_0861-1536x1164.jpg",
      popular: true
    },
    {
      name: "Spicy Chicken Kebap",
      category: "chicken kebap",
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-green-50 via-white to-primary/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-primary/[0.02] rounded-bl-[100px] backdrop-blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-primary/[0.02] rounded-tr-[100px] backdrop-blur-3xl"></div>
          {/* Decorative circles */}
          <div className="absolute left-1/4 top-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl"></div>
          <div className="absolute right-1/4 bottom-1/4 w-40 h-40 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-2xl"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-full shadow-md">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="text-primary text-sm font-medium">Our Menu</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-text leading-[1.2] tracking-tight">
              Discover Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Delicious Options
              </span>
            </h1>
            
            <p className="text-xl text-text/70 leading-relaxed max-w-2xl mx-auto">
              From our signature Gemüse Kebap to fresh salads and sides, explore our full menu of authentic Turkish-inspired dishes.
            </p>
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute left-10 top-1/4">
          <div className="w-20 h-20 rounded-full bg-primary/5 backdrop-blur-xl"></div>
        </div>
        <div className="absolute right-10 bottom-1/4">
          <div className="w-16 h-16 rounded-full bg-primary/5 backdrop-blur-xl"></div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_theme(colors.primary/0.05),_transparent_70%)]"></div>
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

                    <button 
                      className="text-primary font-medium flex items-center gap-2 transition-all group hover:gap-3"
                    >
                      Order Now
                      <ChevronRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50/30 relative overflow-hidden">
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
      </section>
    </div>
  )
}

export default Menu
