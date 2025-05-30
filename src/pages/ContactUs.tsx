import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
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
                    Wir freuen
                  </motion.span>
                  <motion.span
                    className="block text-primary"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    uns auf Ihre
                  </motion.span>
                  <motion.span
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Nachricht
                  </motion.span>
                </h1>

                <motion.p
                  className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Haben Sie Fragen, Anregungen oder möchten Sie einfach nur Hallo sagen? 
                  Wir sind für Sie da und freuen uns darauf, von Ihnen zu hören.
                </motion.p>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { value: "24/7", label: "Erreichbar", icon: <PhoneIcon className="w-5 h-5" /> },
                    { value: "Schnell", label: "Antwort", icon: <EnvelopeIcon className="w-5 h-5" /> },
                    { value: "Lokal", label: "In Hamburg", icon: <MapPinIcon className="w-5 h-5" /> }
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

      {/* Contact Form & Info Section */}
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
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Kontaktieren Sie uns</h2>
                <p className="text-text/70">
                  Füllen Sie das untenstehende Formular aus und wir melden uns schnellstmöglich bei Ihnen.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text/70 mb-2">
                      Ihr Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text/70 mb-2">
                      E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text/70 mb-2">
                      Betreff
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text/70 mb-2">
                      Ihre Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/90 text-white py-4 rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Kontaktinformationen</h2>
                <p className="text-text/70">
                  Sie können uns über die untenstehenden Kontaktmöglichkeiten erreichen oder eine Nachricht über das Formular senden.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: <PhoneIcon className="w-6 h-6" />,
                    title: "Telefon",
                    info: "+49 1522 6879964",
                    subInfo: "Erreichbar während der Öffnungszeiten"
                  },
                  {
                    icon: <EnvelopeIcon className="w-6 h-6" />,
                    title: "E-Mail",
                    info: "info@sebastiansgemusekebap.de",
                    subInfo: "Antwort innerhalb von 24 Stunden"
                  },
                  {
                    icon: <MapPinIcon className="w-6 h-6" />,
                    title: "Adresse",
                    info: "Hörgensweg 4",
                    subInfo: "22523 Hamburg"
                  },
                  {
                    icon: <ClockIcon className="w-6 h-6" />,
                    title: "Öffnungszeiten",
                    info: "Mo-Fr: 11:00 - 21:00",
                    subInfo: "Sa-So: 12:00 - 21:00"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all group"
                  >
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-14 h-14 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-text/90 mb-1">{item.info}</p>
                      <p className="text-text/60 text-sm">{item.subInfo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
