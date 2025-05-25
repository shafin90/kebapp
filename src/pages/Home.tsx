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
  FireIcon
} from '@heroicons/react/24/outline'

// Add social media icons
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon
} from '../icons/SocialIcons'

import AnimatedTimeline from '../components/AnimatedTimeline'
import FoodCard from '../components/FoodCard'

const Home = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = React.useState(0);
  const [isQuickOrderOpen, setIsQuickOrderOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const { scrollY } = useScroll();
  
  // Parallax transformations
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.7, 0.2]);
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Food Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      comment: "The attention to detail in every dish is remarkable. The Rainbow Buddha Bowl was a perfect blend of flavors and textures. The ambiance adds to the whole experience!",
      rating: 5,
      dish: "Rainbow Buddha Bowl",
      date: "2 days ago"
    },
    {
      name: "Michael Chen",
      role: "Regular Customer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      comment: "Best vegetarian restaurant in the city! The Truffle Mushroom Risotto is absolutely divine. Great atmosphere and exceptional service every time I visit.",
      rating: 5,
      dish: "Truffle Mushroom Risotto",
      date: "1 week ago"
    },
    {
      name: "Emma Thompson",
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      comment: "Love their commitment to sustainability and local sourcing. The Mediterranean Platter is a must-try! Perfect for sharing and packed with authentic flavors.",
      rating: 5,
      dish: "Mediterranean Platter",
      date: "3 days ago"
    },
    {
      name: "David Wilson",
      role: "Vegetarian Chef",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      comment: "As a chef myself, I'm impressed by the innovative combinations and presentation. The flavors are authentic and the ingredients are clearly top-notch.",
      rating: 5,
      dish: "Seasonal Tasting Menu",
      date: "1 week ago"
    },
    {
      name: "Lisa Martinez",
      role: "Health Coach",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      comment: "Finally, a restaurant that understands healthy can be delicious! My clients love coming here. The Buddha Bowl is a perfect post-workout meal.",
      rating: 5,
      dish: "Energy Boost Bowl",
      date: "5 days ago"
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
      description: "A vibrant bowl of quinoa, roasted sweet potatoes, fresh avocado, crispy chickpeas, and seasonal vegetables.",
      price: "$18.99",
      image: "/IMG_0861-1536x1164.jpg",
      isPopular: true,
      tags: ["Vegetarian", "Gluten-Free"]
    },
    {
      name: "Mediterranean Platter",
      description: "A delightful assortment of hummus, falafel, tabbouleh, and warm pita bread, showcasing Mediterranean flavors.",
      price: "$21.99",
      image: "/IMG_0861-1536x1164.jpg",
      tags: ["Vegan", "Vegetarian"]
    },
    {
      name: "Truffle Mushroom Risotto",
      description: "Creamy Arborio rice cooked to perfection with wild mushrooms, finished with black truffle oil and fresh herbs.",
      price: "$24.99",
      image: "/IMG_0861-1536x1164.jpg",
      tags: ["Vegetarian"]
    }
  ];

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
                    Fresh &
                  </motion.span>
                  <motion.span 
                    className="block text-primary"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Healthy
                  </motion.span>
                  <motion.span 
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Cuisine
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Experience the finest selection of plant-based dishes crafted with love and care. 
                  Every bite tells a story of freshness and flavor.
                </motion.p>

                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-16"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { value: "4.9", label: "Customer Rating", icon: <StarIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
                    { value: "15+", label: "Years of Service", icon: <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
                    { value: "50+", label: "Unique Dishes", icon: <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5" /> }
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
      <section className="py-32 bg-transparent relative overflow-hidden">
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
        
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_theme(colors.primary/0.05),_transparent_70%)]"
        ></div>
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
              Why Choose Us
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-text mt-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Experience the Difference
            </motion.h2>
            <motion.p 
              className="text-xl text-text/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We bring you the perfect blend of taste, health, and sustainability in every dish we serve.
            </motion.p>
          </motion.div>

          {/* Features Content */}
          <div className="max-w-6xl mx-auto">
            {[
              {
                icon: <BeakerIcon className="w-8 h-8" />,
                title: "Fresh Ingredients",
                description: "We source the freshest local produce daily, featuring premium feta, ripe avocados, and crisp vegetables.",
                highlight: "100% Fresh",
                image: "/IMG_0861-1536x1164.jpg",
                stats: ["Daily Sourced", "Local Farms", "Seasonal Picks"]
              },
              {
                icon: <HeartIcon className="w-8 h-8" />,
                title: "Healthy Options",
                description: "Nutritionally balanced meals designed with fresh Mediterranean ingredients for your wellbeing.",
                highlight: "Balanced Diet",
                image: "/IMG_0861-1536x1164.jpg",
                stats: ["Nutrient Rich", "Diet Friendly", "Clean Eating"]
              },
              {
                icon: <SparklesIcon className="w-8 h-8" />,
                title: "Premium Quality",
                description: "From our locally sourced tomatoes to imported olives, we ensure exceptional quality in every bite.",
                highlight: "Top Rated",
                image: "/IMG_0861-1536x1164.jpg",
                stats: ["Best Quality", "Fresh Taste", "Pure Ingredients"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 mb-24 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
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
                        <motion.div
                          className="w-full h-full"
                          style={{
                            position: 'relative',
                            height: '100%',
                            width: '100%',
                            overflow: 'hidden'
                          }}
                        >
                          <motion.img 
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-[120%] object-cover absolute top-0 left-0"
                            style={{
                              y: useTransform(
                                useScroll({
                                  target: "element",
                                  offset: ["start end", "end start"]
                                }).scrollYProgress,
                                [0, 1],
                                ["0%", "-20%"]
                              )
                            }}
                          />
                        </motion.div>
                      </div>
                      <div className="absolute inset-0 bg-black/40" />
                      
                      {/* Stats Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
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
                    <button className="group flex items-center gap-2 text-primary font-medium hover:gap-4 hover:text-green-600 transition-all">
                      Learn More 
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
      <section className="py-24 bg-transparent">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium">Featured Menu</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Our Signature Dishes</h2>
            <p className="text-gray-600 text-lg">
              Experience our most loved dishes, crafted with fresh ingredients and served with care.
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
              View Full Menu 
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 bg-white relative">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary font-medium">What People Say</span>
            <h2 className="text-4xl font-bold text-text mt-2 mb-6">Our Happy Customers</h2>
            <p className="text-xl text-text/70">
              Real experiences shared by our valued customers who have enjoyed our cuisine and hospitality.
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
      <section className="py-32 bg-white relative">
        <div className="container px-6 mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium">Visual Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text mt-2 mb-6">Our Food Gallery</h2>
            <p className="text-xl text-text/70">
              Take a visual journey through our culinary masterpieces
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Featured Large Image */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                />
                <motion.img
                  src="/IMG_0861-1536x1164.jpg"
                  alt="Featured Dish"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* Content Overlay */}
                <motion.div 
                  className="absolute inset-0 p-8 flex flex-col justify-end z-20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.span 
                    className="bg-white/90 backdrop-blur-sm text-primary px-4 py-1 rounded-full text-sm font-medium inline-block w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    Featured Dish
                  </motion.span>
                  <motion.h3 
                    className="text-white text-2xl font-bold mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Signature Mediterranean Bowl
                  </motion.h3>
                  <motion.p 
                    className="text-white/90 mt-2 max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    A perfect blend of fresh vegetables, quinoa, and our house-made dressing
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Gallery Grid */}
            <div className="space-y-8">
              {/* Gallery Navigation */}
              <motion.div 
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold">Latest Captures</h3>
                <div className="flex gap-2">
                  <motion.button 
                    className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRightIcon className="w-5 h-5 text-primary rotate-180" />
                  </motion.button>
                  <motion.button 
                    className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRightIcon className="w-5 h-5 text-primary" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Gallery Grid */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, staggerChildren: 0.1 }}
              >
                {[
                  {
                    image: "/IMG_0861-1536x1164.jpg",
                    title: "Fresh Salads",
                    category: "Starters"
                  },
                  {
                    image: "/IMG_0861-1536x1164.jpg",
                    title: "Dessert Special",
                    category: "Desserts"
                  },
                  {
                    image: "/IMG_0861-1536x1164.jpg",
                    title: "Main Course",
                    category: "Main Dishes"
                  },
                  {
                    image: "/IMG_0861-1536x1164.jpg",
                    title: "Beverages",
                    category: "Drinks"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <motion.div 
                      className="absolute inset-0 p-4 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <motion.div 
                        className="bg-white/95 backdrop-blur-sm rounded-xl p-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <p className="text-xs text-primary font-medium">{item.category}</p>
                        <p className="text-gray-900 font-bold">{item.title}</p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Category Pills */}
              <motion.div 
                className="mt-16 flex flex-wrap justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {[
                  "All Photos",
                  "Main Dishes",
                  "Appetizers",
                  "Desserts",
                  "Drinks",
                  "Restaurant",
                  "Events"
                ].map((category, index) => (
                  <motion.button
                    key={index}
                    className="px-6 py-2 rounded-full bg-black/5 hover:bg-green-100 hover:text-green-700 text-text text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Catering Section */}
      <section className="py-32 bg-white relative">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-primary font-medium">Special Events</span>
              <h2 className="text-4xl font-bold text-text mt-2 mb-6">Events & Catering</h2>
              <p className="text-xl text-text/70">
                From intimate gatherings to grand celebrations, we offer customized catering solutions for all your special occasions.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Corporate Events",
                    description: "Impress your clients and team with our professional catering service"
                  },
                  {
                    title: "Private Parties",
                    description: "Celebrate your special moments with customized menu options"
                  },
                  {
                    title: "Wedding Receptions",
                    description: "Make your big day memorable with our elegant catering solutions"
                  }
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/5 p-3 rounded-xl hover:bg-green-100 transition-colors">
                      <SparklesIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">{service.title}</p>
                      <p className="text-text/70">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/IMG_0861-1536x1164.jpg"
                  alt="Event Catering"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:bg-green-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/5 p-3 rounded-lg hover:bg-green-100 transition-colors">
                    <CalendarDaysIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-medium">Book Early</p>
                    <p className="font-medium text-text">Special Packages Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Preparation Timeline */}
      <section className="py-32 bg-white relative">
        <div className="container px-6 mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-text mb-6">Our Process</h2>
            <p className="text-xl text-text/70">
              From farm to table, see how we prepare your food with care
            </p>
          </motion.div>

          <AnimatedTimeline
            items={[
              {
                title: "Ingredient Selection",
                time: "5:00 AM",
                description: "Fresh ingredients are carefully selected from local farms"
              },
              {
                title: "Kitchen Preparation",
                time: "7:00 AM",
                description: "Our chefs begin preparing ingredients for the day"
              },
              {
                title: "Quality Check",
                time: "10:00 AM",
                description: "Final quality checks before service begins"
              },
              {
                title: "Ready to Serve",
                time: "11:00 AM",
                description: "Doors open for lunch service"
              }
            ]}
          />
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-32 bg-white relative">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl font-bold text-text mb-6">Find Us</h2>
            <p className="text-xl text-text/70">
              Visit us today and experience our warm hospitality
            </p>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5380570145456!2d90.41279675981661!3d23.7639722804589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b88c7d668a21%3A0x5030f1f1919c289b!2sVeg%20Restaurant!5e0!3m2!1sen!2sbd!4v1647834587893!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>


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