import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  HeartIcon,
  SparklesIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const About = () => {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Fixed Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          data-scroll
          data-scroll-speed="-4"
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
          data-scroll-speed="2"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl relative">
              {/* Animated Accent Line */}
              <motion.div 
                className="w-24 h-1 bg-primary mb-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
              
              {/* Main Content */}
              <div className="space-y-8">
                <h1 className="text-7xl font-bold text-white leading-tight">
                  <motion.span 
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Our Story
                  </motion.span>
                  <motion.span 
                    className="block text-primary"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Our Passion
                  </motion.span>
                  <motion.span 
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Our Journey
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-xl text-white/90 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Discover the story behind our commitment to exceptional vegetarian cuisine and sustainable dining experiences.
                </motion.p>

                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-3 gap-8 mt-16"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { value: "2008", label: "Founded", icon: <SparklesIcon className="w-5 h-5" /> },
                    { value: "100%", label: "Plant Based", icon: <HeartIcon className="w-5 h-5" /> },
                    { value: "Local", label: "Ingredients", icon: <GlobeAltIcon className="w-5 h-5" /> }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="backdrop-blur-md bg-white/10 rounded-2xl p-6"
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-primary">
                          {stat.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                      </div>
                      <p className="text-sm text-white/80">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container px-6 mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Our Journey</h2>
              <div className="space-y-6 text-text/70">
                <p>
                  Founded in 2020, our restaurant began with a simple mission: to share the authentic flavors of Turkish street food while embracing modern culinary innovations.
                </p>
                <p>
                  What started as a small family venture has grown into a beloved establishment, known for our signature kebaps and commitment to quality ingredients.
                </p>
                <p>
                  Today, we continue to honor traditional recipes while exploring new, exciting flavors that reflect our evolving culinary landscape.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/IMG_0861-1536x1164.jpg" 
                  alt="Our restaurant story" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container px-6 mx-auto relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-text/70">
              These core principles guide everything we do, from sourcing ingredients to serving our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <HeartIcon className="w-6 h-6" />,
                title: "Passion",
                description: "Love for authentic flavors and culinary excellence"
              },
              {
                icon: <SparklesIcon className="w-6 h-6" />,
                title: "Quality",
                description: "Premium ingredients and meticulous preparation"
              },
              {
                icon: <GlobeAltIcon className="w-6 h-6" />,
                title: "Sustainability",
                description: "Eco-friendly practices and local sourcing"
              },
              {
                icon: <UserGroupIcon className="w-6 h-6" />,
                title: "Community",
                description: "Creating connections through food and culture"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-text/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container px-6 mx-auto relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-text/70">
              The passionate people behind our delicious food and warm hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mehmet Yilmaz",
                role: "Head Chef",
                image: "/IMG_0861-1536x1164.jpg"
              },
              {
                name: "Ayşe Demir",
                role: "Restaurant Manager",
                image: "/IMG_0861-1536x1164.jpg"
              },
              {
                name: "Can Öztürk",
                role: "Sous Chef",
                image: "/IMG_0861-1536x1164.jpg"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-text/70">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
