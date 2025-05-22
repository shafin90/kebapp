import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  StarIcon
} from '@heroicons/react/24/outline'

// Add social media icons
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon
} from '../icons/SocialIcons'

const Home = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = React.useState(0);
  const [isQuickOrderOpen, setIsQuickOrderOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

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

  return (
    <div className="pt-16 relative">
      {/* Quick Order Button */}
      <button
        onClick={() => setIsQuickOrderOpen(true)}
        className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-40 group"
      >
        <ShoppingBagIcon className="w-6 h-6" />
        <span className="absolute right-full mr-2 bg-white text-primary px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Quick Order
        </span>
      </button>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-green-50 via-white to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-primary/[0.02] rounded-bl-[100px]"></div>
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-primary/[0.02] rounded-tr-[100px]"></div>
        </div>

        <div className="container relative z-10 px-6 py-16 mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-2xl space-y-12">
              <div className="space-y-6">
                <span className="text-primary font-medium">Welcome to Veg</span>
                <h1 className="text-5xl lg:text-6xl font-bold text-text leading-[1.2]">
                  <span className="block mb-3">Fresh & Healthy</span>
                  <span className="block text-primary mb-3">Vegetarian</span>
                  <span className="block">Cuisine</span>
                </h1>
                <p className="text-xl text-text/70 leading-relaxed max-w-xl">
                  Experience the finest selection of plant-based dishes crafted with love and care.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <button
                  onClick={() => navigate('/menu')}
                  className="group bg-primary text-white flex items-center gap-2 text-lg px-8 py-4 rounded-xl hover:bg-primary/90 transition-all">
                  View Menu
                  <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('/reservation')}
                  className="group border-2 border-text/5 text-text flex items-center gap-2 text-lg px-8 py-4 rounded-xl hover:bg-primary/5 transition-all">
                  Book a Table
                  <ChevronRightIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-12">
                {[
                  { value: "4.9", label: "Customer Rating" },
                  { value: "15+", label: "Years of Service" },
                  { value: "50+", label: "Unique Dishes" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-primary/[0.02] rounded-xl transition-colors group-hover:bg-primary/[0.05]"></div>
                    <div className="relative p-4">
                      <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                      <p className="text-sm text-text/70">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/IMG_0861-1536x1164.jpg"
                    alt="Fresh Mediterranean Ingredients"
                    className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <SparklesIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-primary font-medium">Fresh Daily</p>
                      <p className="font-medium text-text">Premium Ingredients</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <BeakerIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-primary font-medium">Quality First</p>
                      <p className="font-medium text-text">Local & Organic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container px-6 mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary font-medium">Why Choose Us</span>
            <h2 className="text-4xl font-bold text-text mt-2 mb-6">Experience the Difference</h2>
            <p className="text-xl text-text/70">
              We bring you the perfect blend of taste, health, and sustainability in every dish we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <BeakerIcon className="w-7 h-7" />,
                title: "Fresh Ingredients",
                description: "We source the freshest local produce daily, featuring premium feta, ripe avocados, and crisp vegetables.",
                highlight: "100% Fresh",
                image: "/IMG_0861-1536x1164.jpg"
              },
              {
                icon: <HeartIcon className="w-7 h-7" />,
                title: "Healthy Options",
                description: "Nutritionally balanced meals designed with fresh Mediterranean ingredients for your wellbeing.",
                highlight: "Balanced Diet",
                image: "/IMG_0861-1536x1164.jpg"
              },
              {
                icon: <SparklesIcon className="w-7 h-7" />,
                title: "Premium Quality",
                description: "From our locally sourced tomatoes to imported olives, we ensure exceptional quality in every bite.",
                highlight: "Top Rated",
                image: "/IMG_0861-1536x1164.jpg"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl bg-white hover:bg-primary/[0.02] 
                             transition-all duration-300 border-2 border-primary/10 hover:border-primary/20 overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="relative p-8">
                    <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 
                                text-primary group-hover:bg-primary/10 transition-colors">
                      {feature.icon}
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-primary 
                                   bg-primary/10 rounded-full">
                        {feature.highlight}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-text/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Menu & Chef's Note Section */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50/30">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium">Our Menu</span>
            <h2 className="text-4xl font-bold text-text mt-2 mb-6">Special Menu</h2>
            <p className="text-xl text-text/70">
              Discover our chef's handcrafted selection, featuring seasonal ingredients and innovative recipes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Rainbow Buddha Bowl",
                description: "A vibrant bowl of quinoa, roasted sweet potatoes, fresh avocado, crispy chickpeas, and seasonal vegetables.",
                price: "$18.99",
                tag: "Chef's Choice",
                image: "/IMG_0861-1536x1164.jpg"
              },
              {
                name: "Truffle Mushroom Risotto",
                description: "Creamy Arborio rice cooked to perfection with wild mushrooms, finished with black truffle oil and fresh herbs.",
                price: "$24.99",
                tag: "New",
                image: "/IMG_0861-1536x1164.jpg"
              },
              {
                name: "Mediterranean Platter",
                description: "A delightful assortment of hummus, falafel, tabbouleh, and warm pita bread, showcasing Mediterranean flavors.",
                price: "$21.99",
                tag: "Popular",
                image: "/IMG_0861-1536x1164.jpg"
              }
            ].map((dish, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-primary">{dish.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{dish.name}</h3>
                  <p className="text-text/70 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{dish.price}</span>
                    <button className="group bg-primary/5 hover:bg-primary/10 text-primary px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                      Order Now
                      <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chef's Note */}
          <div className="bg-white rounded-2xl p-12 max-w-4xl mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full"></div>
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full"></div>

            <SparklesIcon className="w-12 h-12 text-primary mx-auto mb-8" />
            <h3 className="text-3xl font-bold mb-6">A Note from Our Chef</h3>
            <p className="text-xl text-text/70 italic mb-12 leading-relaxed max-w-2xl mx-auto">
              "Each dish in our menu is crafted with passion and precision, using the finest seasonal ingredients. We believe in creating not just meals, but memorable dining experiences that celebrate the beauty of vegetarian cuisine."
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <ClockIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-medium text-lg">Fresh Daily</p>
                <p className="text-text/70 text-sm">Made fresh every morning</p>
              </div>
              <div className="text-center">
                <HeartIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-medium text-lg">Made with Love</p>
                <p className="text-text/70 text-sm">Passion in every dish</p>
              </div>
              <div className="text-center">
                <GlobeAltIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-medium text-lg">Locally Sourced</p>
                <p className="text-text/70 text-sm">Supporting local farmers</p>
              </div>
            </div>
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
                  className="bg-white p-8 rounded-2xl relative group hover:bg-primary/[0.02] transition-all duration-300 border-2 border-primary/10 hover:border-primary/20"
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
                className="group bg-white border-2 border-primary/10 text-primary hover:bg-primary/5 transition-all duration-300 p-4 rounded-full"
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
                className="group bg-white border-2 border-primary/10 text-primary hover:bg-primary/5 transition-all duration-300 p-4 rounded-full"
              >
                <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Farm to Table Section */}
      <section className="py-32 bg-gradient-to-b from-white to-green-50/30 relative">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-24 px-4">
            <span className="text-primary font-medium">Our Process</span>
            <h2 className="text-4xl font-bold text-text mt-2 mb-6">Farm to Table Fresh</h2>
            <p className="text-base sm:text-lg md:text-xl text-text/70 max-w-2xl mx-auto">
              Experience the journey of our ingredients from local farms to your plate.
            </p>
          </div>

          {/* Main Image and Stats Section */}
          <div className="relative mb-12 sm:mb-24 px-4 sm:px-0">
            <div className="relative rounded-xl sm:rounded-3xl overflow-hidden">
              <img
                src="/IMG_0861-1536x1164.jpg"
                alt="Fresh Farm Ingredients"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  {[
                    { value: "15+", label: "Local Farms", icon: <GlobeAltIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> },
                    { value: "4", label: "Seasonal Menus", icon: <CalendarDaysIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> },
                    { value: "95%", label: "Waste Reduced", icon: <BeakerIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> },
                    { value: "2x", label: "Daily Delivery", icon: <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-white text-center"
                    >
                      <div className="bg-white/10 backdrop-blur-sm w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                        {stat.icon}
                      </div>
                      <p className="text-lg sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">{stat.value}</p>
                      <p className="text-white/80 text-xs sm:text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 px-4 sm:px-0">
            <div className="space-y-6 sm:space-y-12">
              {[
                {
                  title: "Local Partnership",
                  description: "We work directly with organic farmers within 50 miles to ensure the freshest ingredients.",
                  icon: <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                },
                {
                  title: "Seasonal Selection",
                  description: "Our menu evolves with the seasons, featuring the best produce nature has to offer.",
                  icon: <CalendarDaysIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                },
                {
                  title: "Zero Waste Initiative",
                  description: "We're committed to sustainable practices and minimal food waste in our operations.",
                  icon: <BeakerIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                },
                {
                  title: "Fresh Delivery",
                  description: "Ingredients are delivered fresh every morning for the best quality and taste.",
                  icon: <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 sm:gap-6 group"
                >
                  <div className="bg-primary/5 p-3 sm:p-4 rounded-lg sm:rounded-xl shrink-0 group-hover:bg-primary/10 transition-colors">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Tags Section */}
            <div className="relative">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  src="/IMG_0861-1536x1164.jpg"
                  alt="Fresh Ingredients Quality"
                  className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Floating Tags */}
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8">
                  <div className="h-full flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 content-center">
                    {[
                      "100% Organic", "Seasonal", "Local",
                      "Zero Waste", "Fresh", "Premium"
                    ].map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white/90 backdrop-blur-sm text-primary px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full 
                                 text-xs sm:text-sm font-medium hover:bg-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="absolute -bottom-4 sm:-bottom-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-lg max-w-[calc(100%-2rem)] sm:max-w-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/5 p-2 sm:p-3 rounded-lg shrink-0">
                    <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Quality Assurance</h4>
                    <p className="text-text/70 text-xs sm:text-sm">
                      Every ingredient is carefully selected and quality-checked to ensure the best dining experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium">Visual Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text mt-2 mb-6">Our Food Gallery</h2>
            <p className="text-xl text-text/70">
              Take a visual journey through our culinary masterpieces
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Featured Large Image */}
            <div className="relative group">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
                <img
                  src="/IMG_0861-1536x1164.jpg"
                  alt="Featured Dish"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-white/90 backdrop-blur-sm text-primary px-4 py-1 rounded-full text-sm font-medium">
                      Featured Dish
                    </span>
                    <h3 className="text-white text-2xl font-bold mt-4">Signature Mediterranean Bowl</h3>
                    <p className="text-white/90 mt-2 max-w-md">
                      A perfect blend of fresh vegetables, quinoa, and our house-made dressing
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            </div>

            {/* Gallery Grid */}
            <div className="space-y-8">
              {/* Gallery Navigation */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Latest Captures</h3>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors">
                    <ChevronRightIcon className="w-5 h-5 text-primary rotate-180" />
                  </button>
                  <button className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors">
                    <ChevronRightIcon className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 gap-4">
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
                  <div
                    key={index}
                    className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs text-primary font-medium">{item.category}</p>
                        <p className="text-gray-900 font-bold">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Link */}
              <div className="text-center">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                >
                  View All Photos
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {[
              "All Photos",
              "Main Dishes",
              "Appetizers",
              "Desserts",
              "Drinks",
              "Restaurant",
              "Events"
            ].map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full bg-primary/5 hover:bg-primary/10 text-primary text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Catering Section */}
      <section className="py-32 bg-gradient-to-b from-white to-green-50/30 relative">
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
                    <div className="bg-primary/5 p-3 rounded-xl">
                      <SparklesIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">{service.title}</p>
                      <p className="text-text/70">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-primary text-white flex items-center gap-2 text-lg px-8 py-4 rounded-xl hover:bg-primary/90 transition-all">
                Inquire Now
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/IMG_0861-1536x1164.jpg"
                  alt="Event Catering"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/5 p-3 rounded-lg">
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

      {/* Newsletter & Social Media Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white"></div>
          <div className="absolute w-[500px] h-[500px] -right-48 -bottom-48 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute w-[300px] h-[300px] -left-20 -top-20 bg-green-100/40 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="bg-white rounded-[2.5rem] p-12 shadow-xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full"></div>
            <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-primary/5 rounded-full"></div>

            <div className="text-center space-y-6 relative">
              <div>
                <span className="text-primary font-medium">Newsletter</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  Stay Connected
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Subscribe to our newsletter for exclusive offers, recipes, and culinary inspiration delivered to your inbox.
                </p>
              </div>

              <div className="max-w-xl mx-auto mt-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 rounded-full border-2 border-gray-100 focus:border-primary focus:outline-none pr-12 bg-white/50 backdrop-blur-sm transition-all duration-300"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap font-medium">
                    Subscribe Now
                  </button>
                </div>
              </div>

              <div className="pt-12 mt-12 border-t border-gray-100">
                <p className="text-gray-600 mb-6">Follow us on social media</p>
                <div className="flex justify-center gap-6">
                  {[
                    { icon: <FacebookIcon className="w-6 h-6" />, name: 'Facebook', link: 'https://facebook.com', color: 'hover:text-blue-600' },
                    { icon: <InstagramIcon className="w-6 h-6" />, name: 'Instagram', link: 'https://instagram.com', color: 'hover:text-pink-600' },
                    { icon: <TwitterIcon className="w-6 h-6" />, name: 'Twitter', link: 'https://twitter.com', color: 'hover:text-blue-400' },
                    { icon: <YoutubeIcon className="w-6 h-6" />, name: 'YouTube', link: 'https://youtube.com', color: 'hover:text-red-600' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-white/80 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md ${social.color}`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <div className="text-gray-600 group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-12 mt-12 border-t border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { text: "Weekly Updates", icon: <CalendarDaysIcon className="w-6 h-6" /> },
                    { text: "Exclusive Offers", icon: <SparklesIcon className="w-6 h-6" /> },
                    { text: "Recipe Collection", icon: <BeakerIcon className="w-6 h-6" /> },
                    { text: "Community Access", icon: <UserGroupIcon className="w-6 h-6" /> }
                  ].map((badge, index) => (
                    <div key={index} className="flex items-center justify-center gap-3 text-gray-600">
                      <div className="text-primary">{badge.icon}</div>
                      <span className="text-sm font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-32 bg-gradient-to-b from-white to-green-50/30 relative">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-primary font-medium">Visit Us</span>
              <h2 className="text-4xl font-bold text-text mt-2 mb-6">Find Us Today</h2>
              <p className="text-xl text-text/70">
                Experience our warm hospitality and exceptional cuisine in a welcoming atmosphere.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/5 p-3 rounded-xl">
                    <PhoneIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text/70">Call Us</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/5 p-3 rounded-xl">
                    <ClockIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text/70">Opening Hours</p>
                    <p className="font-medium">Mon-Sun: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/5 p-3 rounded-xl">
                    <CalendarDaysIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text/70">Reservations</p>
                    <p className="font-medium">Book a table in advance</p>
                  </div>
                </div>
              </div>

              <button className="bg-primary text-white flex items-center gap-2 text-lg px-8 py-4 rounded-xl hover:bg-primary/90 transition-all">
                Make a Reservation
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/IMG_0861-1536x1164.jpg"
                  alt="Restaurant Interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl">
                <p className="font-medium text-lg mb-2">Sebastian's Gemüse Kebap</p>
                <p className="text-text/70">123 Culinary Street, Foodie City, FC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section with Categories */}
      <section className="py-32 bg-white relative">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-text mb-6">Our Menu</h2>
            <div className="flex justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full capitalize transition-all ${selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-primary/5 text-primary hover:bg-primary/10'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Buddha Bowl",
                category: "main",
                price: "$16.99",
                image: "/IMG_0861-1536x1164.jpg",
                description: "Quinoa, roasted vegetables, avocado, chickpeas with tahini dressing"
              },
              {
                name: "Spring Rolls",
                category: "starters",
                price: "$8.99",
                image: "/IMG_0861-1536x1164.jpg",
                description: "Fresh vegetables wrapped in rice paper with peanut sauce"
              },
              {
                name: "Mushroom Risotto",
                category: "main",
                price: "$18.99",
                image: "/IMG_0861-1536x1164.jpg",
                description: "Creamy arborio rice with wild mushrooms and truffle oil"
              },
              {
                name: "Green Smoothie",
                category: "drinks",
                price: "$7.99",
                image: "/IMG_0861-1536x1164.jpg",
                description: "Spinach, banana, mango, and coconut water"
              },
              {
                name: "Vegan Cheesecake",
                category: "desserts",
                price: "$9.99",
                image: "/IMG_0861-1536x1164.jpg",
                description: "Cashew-based cheesecake with berry compote"
              },
              {
                name: "Mediterranean Platter",
                category: "starters",
                price: "$14.99",
                image: "/IMG_0861-1536x1164.jpg",
                description: "Hummus, falafel, tabbouleh, and pita bread"
              }
            ].filter(item => selectedCategory === 'all' || item.category === selectedCategory)
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-primary font-medium">{item.price}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-text/70 mb-4">{item.description}</p>
                    <button className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Order Now
                      <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* See Full Menu Link */}
          <div className="mt-16 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl 
                         hover:bg-primary/90 transition-all group text-lg font-medium"
            >
              See Full Menu
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-4 text-text/70">
              Discover our complete selection of dishes and beverages
            </p>
          </div>
        </div>
      </section>

      {/* Food Preparation Timeline */}
      <section className="py-32 bg-gradient-to-b from-white to-green-50/30 relative">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl font-bold text-text mb-6">Our Process</h2>
            <p className="text-xl text-text/70">
              From farm to table, see how we prepare your food with care
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-[#E5E7EB] md:block hidden" />

            {[
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
            ].map((step, index) => (
              <div key={index} className="relative flex items-start md:items-center py-8 flex-col md:flex-row">
                {/* Left Content */}
                <div className="md:w-[42%] w-full md:pr-12 mb-4 md:mb-0">
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
                </div>

                {/* Center Column */}
                <div className="md:w-[16%] w-full flex justify-center relative md:static">
                  <div className="w-3 h-3 bg-primary rounded-full hidden md:block" />
                  <div className="hidden md:block absolute right-1/2 mr-6 -translate-y-1/2 top-1/2 whitespace-nowrap">
                    {index % 2 === 0 && (
                      <div className="bg-white shadow-sm rounded-full py-1 px-3 border border-gray-100">
                        <span className="text-xs font-medium text-primary">{step.time}</span>
                      </div>
                    )}
                  </div>
                  <div className="hidden md:block absolute left-1/2 ml-6 -translate-y-1/2 top-1/2 whitespace-nowrap">
                    {index % 2 === 1 && (
                      <div className="bg-white shadow-sm rounded-full py-1 px-3 border border-gray-100">
                        <span className="text-xs font-medium text-primary">{step.time}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Content */}
                <div className="md:w-[42%] w-full md:pl-12">
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
                </div>
              </div>
            ))}
          </div>
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

      {/* Quick Order Modal */}
      {isQuickOrderOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Quick Order</h3>
              <button
                onClick={() => setIsQuickOrderOpen(false)}
                className="text-text/50 hover:text-text"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* Add your quick order form here */}
              <p className="text-text/70">
                Choose your favorite dishes for quick ordering
              </p>
              {/* Add form elements */}
            </div>
          </div>
        </div>
      )}
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