import React, { useState } from 'react'
import { 
  ChevronRightIcon,
  SparklesIcon,
  FireIcon,
  HeartIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  FunnelIcon,
  XMarkIcon,
  ChevronLeftIcon,
  CurrencyEuroIcon
} from '@heroicons/react/24/outline'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
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
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const { scrollY } = useScroll()
  const contentY = useTransform(scrollY, [0, 500], [0, -100])

  const categories = [
    { id: 'all', name: 'Alle' },
    { id: 'popular', name: 'Beliebte Gerichte' },
    { id: 'bowls', name: 'Bowls' },
    { id: 'kebab-durum', name: 'Kebab und Dürüm' },
    { id: 'grill', name: 'Grillspezialitäten' },
    { id: 'veggie', name: 'Veggie Spezialitäten' },
    { id: 'beilagen', name: 'Beilagen' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Alkoholfreie Getränke' }
  ];

  const menuItems: MenuItem[] = [
    // Bowls
    {
      name: "Sebastians Chicken Gemüse Bowl",
      description: "Alle Gerichte werden mit 2 Saucen nach Wahl zubereitet.",
      price: "15,90 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "bowls",
      isPopular: true,
      tags: []
    },
    {
      name: "Sebastians Gemüse Bowl",
      description: "Alle Gerichte werden mit 2 Saucen nach Wahl zubereitet.",
      price: "10,90 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "bowls",
      isPopular: true,
      tags: ["Vegetarisch"]
    },

    // Kebab und Dürüm
    {
      name: "Chicken Gemüse Kebab",
      description: "Mit Salat-Mix nach Wahl, gelber Paprika, roter Paprika, Zucchini und Karotten",
      price: "9,90 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "kebab-durum",
      isPopular: true,
      tags: []
    },
    {
      name: "Chicken Gemüse Dürüm",
      description: "Mit Salat-Mix nach Wahl, gelber Paprika, roter Paprika, Zucchini und Karotten",
      price: "9,90 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "kebab-durum",
      isPopular: true,
      tags: []
    },
    {
      name: "Gemüse Kebab",
      description: "Mit Salat-Mix nach Wahl, gelber Paprika, roter Paprika, Zucchini und Karotten",
      price: "9,90 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "kebab-durum",
      tags: ["Vegetarisch"]
    },
    {
      name: "Gemüse Dürüm",
      description: "Mit Salat-Mix nach Wahl, gelber Paprika, roter Paprika, Zucchini und Karotten",
      price: "9,90 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "kebab-durum",
      tags: ["Vegetarisch"]
    },

    // Grillspezialitäten
    {
      name: "Sebastians Sucuk Ekmek",
      description: "Alle Gerichte werden mit einem Salat-Mix und 2 Saucen nach Wahl zubereitet.",
      price: "9,90 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "grill",
      tags: []
    },
    {
      name: "Rinderwurst mit Hausgemachten Pommes frites",
      description: "Alle Gerichte werden mit einem Salat-Mix und 2 Saucen nach Wahl zubereitet.",
      price: "9,50 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "grill",
      tags: []
    },

    // Veggie Spezialitäten
    {
      name: "Hausgemachter Falafel Kebab",
      description: "Alle Gerichte werden mit einem Salat-Mix und 2 Saucen nach Wahl zubereitet.",
      price: "9,90 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "veggie",
      isPopular: true,
      tags: ["Vegan"]
    },
    {
      name: "Hausgemachte Falafel Dürüm",
      description: "Alle Gerichte werden mit einem Salat-Mix und 2 Saucen nach Wahl zubereitet.",
      price: "9,90 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "veggie",
      tags: ["Vegan"]
    },
    {
      name: "Halloumi Kebab",
      description: "Alle Gerichte werden mit einem Salat-Mix und 2 Saucen nach Wahl zubereitet.",
      price: "9,90 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "veggie",
      tags: ["Vegetarisch"]
    },
    {
      name: "Halloumi Dürüm",
      description: "Alle Gerichte werden mit einem Salat-Mix und 2 Saucen nach Wahl zubereitet.",
      price: "9,90 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "veggie",
      tags: ["Vegetarisch"]
    },

    // Beilagen
    {
      name: "Gegrilltes Gemüse",
      description: "",
      price: "4,00 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "beilagen",
      tags: ["Vegan"]
    },
    {
      name: "Hausgemachte Pommes frites",
      description: "",
      price: "4,00 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "beilagen",
      tags: ["Vegan"]
    },
    {
      name: "Hausgemachte Falafel (1 Stück)",
      description: "",
      price: "2,50 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "beilagen",
      tags: ["Vegan"]
    },

    // Desserts
    {
      name: "Söbiyet",
      description: "",
      price: "2,00 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "desserts",
      tags: ["Vegetarisch"]
    },
    {
      name: "Churros (5 Stück)",
      description: "",
      price: "4,50 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "desserts",
      tags: ["Vegetarisch"]
    },
    {
      name: "Churros mit Obst, Zimt und Zucker (5 Stück)",
      description: "",
      price: "6,50 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "desserts",
      tags: ["Vegetarisch"]
    },
    {
      name: "Churros mit Schokoladensauce (5 Stück)",
      description: "",
      price: "7,50 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "desserts",
      tags: ["Vegetarisch"]
    },

    // Getränke
    {
      name: "fritz-kola® classic light",
      description: "0,33l",
      price: "2,92 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "drinks",
      tags: ["Vegan"]
    },
    {
      name: "fritz-kola® superzero",
      description: "0,33l",
      price: "2,92 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "drinks",
      tags: ["Vegan"]
    },
    {
      name: "fritz-limo® orange",
      description: "0,33l",
      price: "2,92 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "drinks",
      tags: ["Vegan"]
    },
    {
      name: "fritz-limo® zitrone",
      description: "0,33l",
      price: "2,92 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "drinks",
      tags: ["Vegan"]
    },
    {
      name: "fritz-limo® apfel-kirsch-holunder",
      description: "0,33l",
      price: "2,92 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "drinks",
      tags: ["Vegan"]
    },
    {
      name: "fritz-limo® honigmelone",
      description: "0,33l",
      price: "2,92 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "drinks",
      tags: ["Vegan"]
    },
    {
      name: "fritz-spritz® bio-apfelschorle",
      description: "0,33l",
      price: "2,92 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "drinks",
      tags: ["Vegan"]
    },
    {
      name: "MISCHMASCH® fritz-kola® mit orange",
      description: "0,33l",
      price: "2,92 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "drinks",
      tags: ["Vegan"]
    },
    {
      name: "Anjola® bio ananas-limette",
      description: "0,33l",
      price: "2,92 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "drinks",
      tags: ["Vegan"]
    },
    {
      name: "Gazi Ayran",
      description: "0,2l",
      price: "2,50 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "drinks",
      tags: ["Vegetarisch"]
    },
    {
      name: "Salgam Rübensaft",
      description: "0,2l",
      price: "4,00 €",
      image: "/IMG_0861-1536x1164.jpg",
      category: "drinks",
      tags: ["Vegan"]
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems.filter(item => {
        const price = parseFloat(item.price.replace(',', '.').replace('€', '').trim())
        return price >= priceRange[0] && price <= priceRange[1]
      })
    : activeCategory === 'popular'
    ? menuItems.filter(item => {
        const price = parseFloat(item.price.replace(',', '.').replace('€', '').trim())
        return item.isPopular && price >= priceRange[0] && price <= priceRange[1]
      })
    : menuItems.filter(item => {
        const price = parseFloat(item.price.replace(',', '.').replace('€', '').trim())
        return item.category === activeCategory && price >= priceRange[0] && price <= priceRange[1]
      })

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    // Scroll to menu section smoothly
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Floating Order Button */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div
          animate={{
            y: [-4, 4, -4],
            rotate: [-2, 2, -2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <a
            href="https://www.lieferando.de/en/menu/sebastians-gemusekebab#category_popular-items"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-4 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
          >
            <ShoppingBagIcon className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

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
                    Entdecken
                  </motion.span>
                  <motion.span 
                    className="block text-primary"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Sie unsere
                  </motion.span>
                  <motion.span 
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Speisekarte
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Entdecken Sie unser sorgfältig zusammengestelltes Menü mit frischen, saisonalen Zutaten und innovativen pflanzlichen Gerichten.
                </motion.p>

                {/* Menu Categories */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { value: "Kebab und Dürüm", label: "Traditionelle Spezialitäten", icon: <SparklesIcon className="w-5 h-5" /> },
                    { value: "Grillspezialitäten", label: "Vom Holzkohlegrill", icon: <FireIcon className="w-5 h-5" /> },
                    { value: "Veggie Spezialitäten", label: "Pflanzliche Optionen", icon: <HeartIcon className="w-5 h-5" /> }
                  ].map((category, index) => (
                    <motion.div
                      key={index}
                      className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 min-w-[280px] flex-1"
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-primary">
                          {category.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{category.value}</h3>
                      </div>
                      <p className="text-sm text-white/80 mt-2">{category.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu-section" className="py-24 bg-white relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Unsere Speisekarte</h2>
            <p className="text-gray-600 text-lg mb-8">
              Entdecken Sie unsere große Auswahl an pflanzlichen Gerichten, zubereitet mit frischen Zutaten und Liebe.
            </p>

            {/* Filters */}
            <div className="space-y-6">
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id)
                      setCurrentPage(1)
                    }}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                    } border-2 border-primary/10`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Price Range Filter */}
              <div className="max-w-sm mx-auto bg-white p-4 rounded-xl border-2 border-primary/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 text-primary">
                    <CurrencyEuroIcon className="w-5 h-5" />
                    <span className="font-medium">Preisfilter</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {priceRange[0].toFixed(2)}€ - {priceRange[1].toFixed(2)}€
                  </div>
                </div>
                <div className="relative pt-1">
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="0.5"
                    value={priceRange[1]}
                    onChange={(e) => {
                      const newValue = parseFloat(e.target.value)
                      setPriceRange([priceRange[0], newValue])
                      setCurrentPage(1)
                    }}
                    className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>0€</span>
                    <span>5€</span>
                    <span>10€</span>
                    <span>15€</span>
                    <span>20€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            layout
          >
            <AnimatePresence mode="wait">
              {paginatedItems.length > 0 ? (
                paginatedItems.map((item) => (
                  <motion.div
                    key={item.name}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FoodCard {...item} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12"
                >
                  <p className="text-gray-500 text-lg">
                    Keine Gerichte in dieser Preisklasse gefunden.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-white border-2 border-primary/10 text-primary hover:bg-green-50 disabled:opacity-50 disabled:hover:bg-white transition-colors"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`w-10 h-10 rounded-full font-medium transition-all ${
                      currentPage === index + 1
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                    } border-2 border-primary/10`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-white border-2 border-primary/10 text-primary hover:bg-green-50 disabled:opacity-50 disabled:hover:bg-white transition-colors"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Menu
