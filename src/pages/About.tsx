import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  HeartIcon,
  SparklesIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'

const About = () => {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);

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
                    Unsere
                  </motion.span>
                  <motion.span 
                    className="block text-primary"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Geschichte &
                  </motion.span>
                  <motion.span 
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Leidenschaft
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Entdecken Sie die Geschichte hinter unserem Engagement für außergewöhnliche vegetarische Küche und nachhaltige Essenserlebnisse.
                </motion.p>

                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { value: "2008", label: "Gegründet", icon: <SparklesIcon className="w-5 h-5" /> },
                    { value: "100%", label: "Pflanzlich", icon: <HeartIcon className="w-5 h-5" /> },
                    { value: "Regional", label: "Zutaten", icon: <GlobeAltIcon className="w-5 h-5" /> }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="backdrop-blur-sm bg-white/10 rounded-2xl p-6"
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-primary">
                          {stat.icon}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{stat.value}</h3>
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
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container px-6 mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Unsere Geschichte</h2>
              <div className="space-y-6 text-text/70">
                <p>
                  Gegründet im Jahr 2020, begann unser Restaurant mit einer einfachen Mission: die authentischen Aromen des türkischen Street Foods zu teilen und dabei moderne kulinarische Innovationen zu integrieren.
                </p>
                <p>
                  Was als kleines Familienunternehmen begann, hat sich zu einem beliebten Restaurant entwickelt, bekannt für unsere Signature-Kebabs und unser Engagement für hochwertige Zutaten.
                </p>
                <p>
                  Heute ehren wir weiterhin traditionelle Rezepte und erkunden gleichzeitig neue, aufregende Geschmacksrichtungen, die unsere sich entwickelnde Küche widerspiegeln.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/IMG_0861-1536x1164.jpg" 
                  alt="Die Geschichte unseres Restaurants" 
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
        
        <div className="container px-6 mx-auto relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Unsere Werte</h2>
            <p className="text-text/70">
              Diese Grundprinzipien leiten alles, was wir tun - vom Einkauf der Zutaten bis zum Service für unsere Gäste.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <HeartIcon className="w-6 h-6" />,
                title: "Leidenschaft",
                description: "Liebe zu authentischen Aromen und kulinarischer Exzellenz"
              },
              {
                icon: <SparklesIcon className="w-6 h-6" />,
                title: "Qualität",
                description: "Premium-Zutaten und sorgfältige Zubereitung"
              },
              {
                icon: <GlobeAltIcon className="w-6 h-6" />,
                title: "Nachhaltigkeit",
                description: "Umweltfreundliche Praktiken und regionale Beschaffung"
              },
              {
                icon: <UserGroupIcon className="w-6 h-6" />,
                title: "Gemeinschaft",
                description: "Verbindungen schaffen durch Essen und Kultur"
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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Unser Team</h2>
            <p className="text-text/70">
              Die leidenschaftlichen Menschen hinter unserem köstlichen Essen und der herzlichen Gastfreundschaft.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mehmet Yilmaz",
                role: "Küchenchef",
                image: "/IMG_0861-1536x1164.jpg"
              },
              {
                name: "Ayşe Demir",
                role: "Restaurantleiterin",
                image: "/IMG_0861-1536x1164.jpg"
              },
              {
                name: "Can Öztürk",
                role: "Souschef",
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
