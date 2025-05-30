import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  BeakerIcon,
  HeartIcon,
  SparklesIcon,
  ClockIcon,
  UserGroupIcon,
  GlobeAltIcon,
  PhoneIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
  StarIcon,
  FireIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'

// Add social media icons
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon
} from '../icons/SocialIcons'

import AnimatedTimeline from '../components/AnimatedTimeline'
import FoodCard from '../components/FoodCard'

interface GalleryImage {
  id: number
  src: string
  title: string
  category: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/IMG_0861-1536x1164.jpg",
    title: "Mediterranean Bowl",
    category: "main"
  },
  {
    id: 2,
    src: "/IMG_0861-1536x1164.jpg",
    title: "Fresh Salad",
    category: "appetizers"
  },
  {
    id: 3,
    src: "/IMG_0861-1536x1164.jpg",
    title: "Chocolate Cake",
    category: "desserts"
  },
  {
    id: 4,
    src: "/IMG_0861-1536x1164.jpg",
    title: "Fresh Juice",
    category: "drinks"
  },
  {
    id: 5,
    src: "/IMG_0861-1536x1164.jpg",
    title: "Veggie Pasta",
    category: "main"
  },
  {
    id: 6,
    src: "/IMG_0861-1536x1164.jpg",
    title: "Bruschetta",
    category: "appetizers"
  },
  {
    id: 7,
    src: "/IMG_0861-1536x1164.jpg",
    title: "Tiramisu",
    category: "desserts"
  },
  {
    id: 8,
    src: "/IMG_0861-1536x1164.jpg",
    title: "Smoothie",
    category: "drinks"
  }
]

const Home = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = React.useState(0);
  const [isQuickOrderOpen, setIsQuickOrderOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentGalleryPage, setCurrentGalleryPage] = useState(0);

  const { scrollY } = useScroll();

  // Parallax transformations
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.7, 0.2]);
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Feinschmeckerin",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      comment: "Die Liebe zum Detail in jedem Gericht ist bemerkenswert. Die Rainbow Buddha Bowl war eine perfekte Mischung aus Geschmack und Texturen. Das Ambiente rundet das Gesamterlebnis ab!",
      rating: 5,
      dish: "Rainbow Buddha Bowl",
      date: "vor 2 Tagen"
    },
    {
      name: "Michael Chen",
      role: "Stammkunde",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      comment: "Bestes vegetarisches Restaurant in der Stadt! Das Trüffel-Pilz-Risotto ist absolut himmlisch. Großartiges Ambiente und außergewöhnlicher Service bei jedem Besuch.",
      rating: 5,
      dish: "Trüffel-Pilz-Risotto",
      date: "vor 1 Woche"
    },
    {
      name: "Emma Thompson",
      role: "Food-Bloggerin",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      comment: "Ich liebe ihr Engagement für Nachhaltigkeit und lokale Beschaffung. Die Mediterrane Platte ist ein Muss! Perfekt zum Teilen und voller authentischer Aromen.",
      rating: 5,
      dish: "Mediterrane Platte",
      date: "vor 3 Tagen"
    },
    {
      name: "David Wilson",
      role: "Vegetarischer Koch",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      comment: "Als Koch selbst bin ich von den innovativen Kombinationen und der Präsentation beeindruckt. Die Aromen sind authentisch und die Zutaten sind eindeutig erstklassig.",
      rating: 5,
      dish: "Saisonales Degustationsmenü",
      date: "vor 1 Woche"
    },
    {
      name: "Lisa Martinez",
      role: "Gesundheitscoach",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      comment: "Endlich ein Restaurant, das versteht, dass gesund auch lecker sein kann! Meine Klienten lieben es, hierher zu kommen. Die Buddha Bowl ist eine perfekte Mahlzeit nach dem Training.",
      rating: 5,
      dish: "Energy Boost Bowl",
      date: "vor 5 Tagen"
    }
  ];

  const nextReview = () => {
    setCurrentReviewIndex((prev) =>
      prev + 3 >= reviews.length ? 0 : prev + 3
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) =>
      prev - 3 < 0 ? Math.max(0, reviews.length - 3) : prev - 3
    );
  };

  const visibleReviews = reviews.slice(currentReviewIndex, currentReviewIndex + 3);

  // Categories for menu
  const categories = ['all', 'starters', 'main', 'desserts', 'drinks'];

  const menuItems = [
    {
      name: "Rainbow Buddha Bowl",
      description: "Eine lebendige Schüssel mit Quinoa, gerösteten Süßkartoffeln, frischer Avocado, knusprigen Kichererbsen und Saisongemüse.",
      price: "18,99 €",
      image: "/IMG_0861-1536x1164.jpg",
      isPopular: true,
      tags: ["Vegetarisch", "Glutenfrei"]
    },
    {
      name: "Mediterrane Platte",
      description: "Eine köstliche Auswahl an Hummus, Falafel, Taboulé und warmem Pitabrot, die mediterrane Aromen präsentiert.",
      price: "21,99 €",
      image: "/IMG_0861-1536x1164.jpg",
      tags: ["Vegan", "Vegetarisch"]
    },
    {
      name: "Trüffel-Pilz-Risotto",
      description: "Cremiger Arborio-Reis, perfekt gekocht mit Waldpilzen, verfeinert mit schwarzem Trüffelöl und frischen Kräutern.",
      price: "24,99 €",
      image: "/IMG_0861-1536x1164.jpg",
      tags: ["Vegetarisch"]
    }
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const currentImages = filteredImages.slice(currentGalleryPage * 4, (currentGalleryPage * 4) + 4)
  const totalPages = Math.ceil(filteredImages.length / 4)

  const nextGalleryPage = () => {
    if (currentGalleryPage < totalPages - 1) {
      setCurrentGalleryPage(prev => prev + 1)
    }
  }

  const prevGalleryPage = () => {
    if (currentGalleryPage > 0) {
      setCurrentGalleryPage(prev => prev - 1)
    }
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
          <div className="container mx-auto px-6 pt-24 md:pt-0">
            <div className="max-w-4xl relative">
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
                    Frisch &
                  </motion.span>
                  <motion.span
                    className="block text-primary"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Gesund
                  </motion.span>
                  <motion.span
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Küche
                  </motion.span>
                </h1>

                <motion.p
                  className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Sebastian's Gemüsekebap ist neu in Hamburg! Wir haben gerade unsere Türen mit einer aufregenden Speisekarte von über 30 köstlichen Gerichten geöffnet. Entdecken Sie unser vollständiges Angebot auf Lieferando und erleben Sie unsere frischen, geschmackvollen Kebabs.
                </motion.p>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-16"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { value: "4,9", label: "Kundenbewertung", icon: <StarIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
                    { value: "15+", label: "Jahre Erfahrung", icon: <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
                    { value: "50+", label: "Einzigartige Gerichte", icon: <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5" /> }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="backdrop-blur-sm bg-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-green-50/10 transition-all duration-300"
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        <div className="text-primary">
                          {stat.icon}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{stat.value}</h3>
                      </div>
                      <p className="text-xs md:text-sm text-white/80">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
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
        <div className="container px-6 mx-auto relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-primary font-medium inline-block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Warum uns wählen
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-text mt-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Erleben Sie den Unterschied
            </motion.h2>
            <motion.p
              className="text-xl text-text/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Wir bieten Ihnen die perfekte Mischung aus Geschmack, Gesundheit und Nachhaltigkeit in jedem Gericht.
            </motion.p>
          </motion.div>

          {/* Features Content */}
          <div className="max-w-6xl mx-auto">
            {[
              {
                icon: <BeakerIcon className="w-8 h-8" />,
                title: "Frische Zutaten",
                description: "Wir beziehen täglich frische Produkte von lokalen Bauernhöfen, darunter Premium-Feta, reife Avocados und knackiges Gemüse.",
                highlight: "100% Frisch",
                image: "/IMG_0861-1536x1164.jpg",
                stats: ["Täglich bezogen", "Lokale Bauernhöfe", "Saisonale Auswahl"]
              },
              {
                icon: <HeartIcon className="w-8 h-8" />,
                title: "Gesunde Optionen",
                description: "Ausgewogene Mahlzeiten, zubereitet mit frischen mediterranen Zutaten für Ihr Wohlbefinden.",
                highlight: "Ausgewogene Ernährung",
                image: "/IMG_0861-1536x1164.jpg",
                stats: ["Nährstoffreich", "Diätfreundlich", "Clean Eating"]
              },
              {
                icon: <SparklesIcon className="w-8 h-8" />,
                title: "Premium Qualität",
                description: "Von unseren lokal bezogenen Tomaten bis zu importierten Oliven garantieren wir außergewöhnliche Qualität in jedem Bissen.",
                highlight: "Bestbewertet",
                image: "/IMG_0861-1536x1164.jpg",
                stats: ["Beste Qualität", "Frischer Geschmack", "Reine Zutaten"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 mb-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                {/* Image Column */}
                <div className="md:w-1/2">
                  <motion.div
                    className="relative rounded-3xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative">
                      <div className="aspect-square rounded-2xl overflow-hidden">
                        <div className="relative w-full h-full overflow-hidden">
                          <motion.div
                            className="absolute inset-0 h-[140%] w-full"
                            animate={{
                              y: ["0%", "-20%"]
                            }}
                            transition={{
                              repeat: Infinity,
                              repeatType: "reverse",
                              duration: 20,
                              ease: "linear"
                            }}
                          >
                            <img
                              src={feature.image}
                              alt={feature.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          <div className="absolute inset-0 bg-black/40" />

                          {/* Stats Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                            <div className="flex gap-4">
                              {feature.stats.map((stat, idx) => (
                                <motion.div
                                  key={idx}
                                  className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                                >
                                  <span className="text-black text-sm font-medium">{stat}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Column */}
                <div className="md:w-1/2 space-y-6">
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-black/5 p-4 rounded-2xl">
                      {feature.icon}
                    </div>
                    <span className="text-primary text-sm font-medium px-4 py-1 rounded-full bg-black/5">
                      {feature.highlight}
                    </span>
                  </motion.div>

                  <motion.h3
                    className="text-3xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-lg text-text/70 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>

                  <motion.div
                    className="pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <button
                      onClick={() => {
                        window.open("https://www.lieferando.de/en/menu/sebastians-gemusekebab#category_popular-items", "_blank");
                      }}
                      className="group flex items-center gap-2 text-primary font-medium hover:gap-4 hover:text-green-600 transition-all">
                      Mehr erfahren
                      <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Menu & Chef's Note Section */}
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
        <div className="container px-6 mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium">Ausgewähltes Menü</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Unsere Signature Gerichte</h2>
            <p className="text-gray-600 text-lg">
              Erleben Sie unsere beliebtesten Gerichte, zubereitet mit frischen Zutaten und serviert mit Liebe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <FoodCard
                key={index}
                {...item}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-green-700 transition-colors"
            >
              Gesamtes Menü anzeigen
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 bg-white relative overflow-hidden">
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container px-6 mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary font-medium">Was Menschen sagen</span>
            <h2 className="text-4xl font-bold text-text mt-2 mb-6">Unsere zufriedenen Kunden</h2>
            <p className="text-xl text-text/70">
              Echte Erfahrungen unserer geschätzten Kunden, die unsere Küche und Gastfreundschaft genossen haben.
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {visibleReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl relative group hover:bg-green-50/20 transition-all duration-300 border-2 border-primary/10 hover:border-green-200"
                >
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <SparklesIcon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-primary/10 rounded-full p-1">
                        <span className="block w-4 h-4 bg-primary rounded-full"></span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{review.name}</h3>
                      <p className="text-text/70 text-sm">{review.role}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <SparklesIcon key={i} className="w-5 h-5 text-primary" />
                      ))}
                    </div>
                    <p className="text-text/70 italic">"{review.comment}"</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-primary/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-medium">
                        {review.dish}
                      </span>
                      <span className="text-text/50">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={prevReview}
                className="group bg-white border-2 border-primary/10 text-primary hover:bg-green-50 transition-all duration-300 p-4 rounded-full"
              >
                <ChevronRightIcon className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(currentReviewIndex / 3) === idx
                      ? 'bg-primary scale-125'
                      : 'bg-primary/20'
                      }`}
                  />
                ))}
              </div>
              <button
                onClick={nextReview}
                className="group bg-white border-2 border-primary/10 text-primary hover:bg-green-50 transition-all duration-300 p-4 rounded-full"
              >
                <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-32 bg-white relative overflow-hidden">
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container px-6 mx-auto relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium">Visuelle Erfahrung</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text mt-2 mb-6">Unsere Galerie</h2>
            <p className="text-xl text-text/70">
              Begeben Sie sich auf eine visuelle Reise durch unsere kulinarischen Meisterwerke
            </p>
          </motion.div>

          {/* Category Pills - Moved to top */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              { id: "all", name: "Alle Fotos" },
              { id: "main", name: "Hauptgerichte" },
              { id: "appetizers", name: "Vorspeisen" },
              { id: "desserts", name: "Desserts" },
              { id: "drinks", name: "Getränke" }
            ].map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setCurrentGalleryPage(0)
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-black/5 hover:bg-green-100 hover:text-green-700 text-text'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-3 md:gap-4 lg:gap-6 items-start">
            {/* Left Column - Video */}
            <div className="lg:col-span-6 h-full w-full">
              <div
                className="relative h-[400px] md:h-[500px] lg:h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                style={{
                  contain: 'content',
                  willChange: 'transform',
                  perspective: '1000px',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    transform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/UMqMhWc6dEs?autoplay=1&mute=1&controls=0&loop=1&playlist=UMqMhWc6dEs&playsinline=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1&version=3&allowsInlineMediaPlayback=true"
                    title="Restaurant Ambiance Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      border: 'none',
                      pointerEvents: 'none',
                      transform: 'translate3d(0, 0, 0)',
                      backfaceVisibility: 'hidden'
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Gallery Grid */}
            <div className="lg:col-span-6 h-full">
              <motion.div
                className="grid grid-cols-2 gap-2 sm:gap-3 h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, staggerChildren: 0.1 }}
              >
                {currentImages.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="group relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden aspect-square cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedImage(item)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.div
                      className="relative w-full h-full overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 h-[150%] w-full"
                        animate={{
                          y: ["0%", "-20%"]
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "reverse",
                          duration: 20,
                          ease: "linear"
                        }}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <motion.div
                        className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <p className="text-xs sm:text-sm text-primary font-medium capitalize mb-0.5 sm:mb-1">{item.category}</p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-900 font-bold">{item.title}</p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Catering Section */}
      <section className="py-32 bg-white relative overflow-hidden">
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container px-6 mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium">Besondere Anlässe</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Events & Catering</h2>
            <p className="text-gray-600 text-lg">
              Von intimen Zusammenkünften bis hin zu großen Feiern bieten wir maßgeschneiderte Catering-Lösungen für alle Ihre besonderen Anlässe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <FoodCard
                key={index}
                {...item}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/catering"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-green-700 transition-colors"
            >
              Gesamtes Menü anzeigen
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Food Preparation Timeline */}
      <section className="py-32 bg-white relative overflow-hidden">
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
        <div className="container px-6 mx-auto relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-text mb-6">Unser Prozess</h2>
            <p className="text-xl text-text/70">
              Vom Bauernhof bis auf den Tisch - sehen Sie, wie wir Ihr Essen mit Sorgfalt zubereiten
            </p>
          </motion.div>

          <AnimatedTimeline
            items={[
              {
                title: "Zutatenauswahl",
                time: "5:00 Uhr",
                description: "Frische Zutaten werden sorgfältig von lokalen Bauernhöfen ausgewählt"
              },
              {
                title: "Küchenvorbereitung",
                time: "7:00 Uhr",
                description: "Unsere Köche beginnen mit der Vorbereitung der Zutaten für den Tag"
              },
              {
                title: "Qualitätskontrolle",
                time: "10:00 Uhr",
                description: "Letzte Qualitätskontrollen vor Beginn des Service"
              },
              {
                title: "Bereit zum Servieren",
                time: "11:00 Uhr",
                description: "Türen öffnen für den Mittagsservice"
              }
            ]}
          />
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-32 bg-white relative overflow-hidden">
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container px-6 mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl font-bold text-text mb-6">Finden Sie uns</h2>
            <p className="text-xl text-text/70">
              Besuchen Sie uns heute und erleben Sie unsere herzliche Gastfreundschaft
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-text">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Hörgensweg 4, 22523 Hamburg</span>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.2696767285567!2d9.901843776677682!3d53.6046245711497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18912a599faad%3A0x27957839c6c31e5d!2sH%C3%B6rgensweg%204%2C%2022523%20Hamburg%2C%20Germany!5e0!3m2!1sen!2s!4v1709697547239!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      <Dialog
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/90" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-5xl w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            {selectedImage && (
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Buttons */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
                      const prevImage = currentImages[currentIndex - 1];
                      if (prevImage) {
                        setSelectedImage(prevImage);
                      } else if (currentGalleryPage > 0) {
                        setCurrentGalleryPage(prev => prev - 1);
                        setSelectedImage(currentImages[currentImages.length - 1]);
                      }
                    }}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentImages.findIndex(img => img.id === selectedImage.id) === 0 && currentGalleryPage === 0}
                  >
                    <ChevronRightIcon className="w-6 h-6 text-white rotate-180" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
                      const nextImage = currentImages[currentIndex + 1];
                      if (nextImage) {
                        setSelectedImage(nextImage);
                      } else if (currentGalleryPage < totalPages - 1) {
                        setCurrentGalleryPage(prev => prev + 1);
                        setSelectedImage(currentImages[0]);
                      }
                    }}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentImages.findIndex(img => img.id === selectedImage.id) === currentImages.length - 1 && currentGalleryPage === totalPages - 1}
                  >
                    <ChevronRightIcon className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
                  <p className="text-white/80 capitalize">{selectedImage.category}</p>
                </div>

                {/* Current Image Indicator */}
                <div className="absolute top-6 left-0 right-0 flex justify-center gap-1.5">
                  {currentImages.map((img, idx) => (
                    <div
                      key={img.id}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${img.id === selectedImage.id
                        ? 'bg-white scale-125'
                        : 'bg-white/40'
                        }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>

    </div>
  )
}

const FeatureCard = ({ title, description, icon }: {
  title: string
  description: string
  icon: React.ReactNode
}) => (
  <div className="bg-background p-8 rounded-lg text-center">
    <div className="text-primary mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-text/70">{description}</p>
  </div>
)

export default Home 