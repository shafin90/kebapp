import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'

const Contact = () => {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        <motion.div 
          className="relative z-10 min-h-screen flex items-center"
          style={{ y: contentY }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl relative">
              {/* Animated Accent Line */}
              <motion.div 
                className="w-24 h-1 bg-primary mb-8"
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
                    Get in
                  </motion.span>
                  <motion.span 
                    className="block text-primary"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Touch
                  </motion.span>
                  <motion.span 
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    With Us
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-xl text-white/90 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Have questions or want to make a reservation? We're here to help you with anything you need.
                </motion.p>

                {/* Contact Info */}
                <motion.div 
                  className="grid grid-cols-3 gap-8 mt-16"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { value: "Call Us", label: "+1 234 567 890", icon: <PhoneIcon className="w-5 h-5" /> },
                    { value: "Visit Us", label: "123 Food Street", icon: <MapPinIcon className="w-5 h-5" /> },
                    { value: "Hours", label: "Mon-Sun: 10-22", icon: <ClockIcon className="w-5 h-5" /> }
                  ].map((info, index) => (
                    <motion.div
                      key={index}
                      className="backdrop-blur-sm bg-white/10 rounded-2xl p-6"
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-primary">
                          {info.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white">{info.value}</h3>
                      </div>
                      <p className="text-sm text-white/80">{info.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white relative">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Make a Reservation</h2>
                <p className="text-text/70">
                  Book your table online and we'll get back to you with a confirmation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      required
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Special Requests</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Any special requests or dietary requirements?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  Book Table
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-16 space-y-12">
              <div>
                <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
                <p className="text-text/70">
                  Get in touch with us for any inquiries or assistance.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: <PhoneIcon className="w-6 h-6" />,
                    title: "Phone",
                    info: "+1 234 567 890",
                    subInfo: "Mon-Sun 10:00-22:00"
                  },
                  {
                    icon: <EnvelopeIcon className="w-6 h-6" />,
                    title: "Email",
                    info: "info@kebapp.com",
                    subInfo: "We reply within 24 hours"
                  },
                  {
                    icon: <MapPinIcon className="w-6 h-6" />,
                    title: "Location",
                    info: "123 Food Street",
                    subInfo: "New York, NY 10001"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="bg-primary/5 p-4 rounded-xl text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-text/70">{item.info}</p>
                      <p className="text-sm text-text/50">{item.subInfo}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Quick Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <CalendarDaysIcon className="w-5 h-5" />, text: "Book a Table" },
                    { icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />, text: "FAQ" }
                  ].map((link, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      <div className="text-primary">{link.icon}</div>
                      <span className="font-medium">{link.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5380570145456!2d90.41279675981661!3d23.7639722804589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b88c7d668a21%3A0x5030f1f1919c289b!2sVeg%20Restaurant!5e0!3m2!1sen!2sbd!4v1647834587893!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="absolute inset-0"
        />
      </section>
    </div>
  )
}

export default Contact 