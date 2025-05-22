import React, { useState } from 'react'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-green-50 via-white to-primary/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-primary/[0.02] rounded-bl-[100px] backdrop-blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-primary/[0.02] rounded-tr-[100px] backdrop-blur-3xl"></div>
          <div className="absolute left-1/4 top-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl"></div>
          <div className="absolute right-1/4 bottom-1/4 w-40 h-40 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-2xl"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-full shadow-md">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="text-primary text-sm font-medium">Get in Touch</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-text leading-[1.2] tracking-tight">
              We'd Love to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Hear From You
              </span>
            </h1>
            
            <p className="text-xl text-text/70 leading-relaxed max-w-2xl mx-auto">
              Have questions, suggestions, or just want to say hello? We're here to help and would love to hear from you.
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

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container px-6 mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Send us a Message</h2>
                <p className="text-text/70">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text/70 mb-2">
                      Your Name
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
                      Email Address
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
                      Subject
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
                      Message
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
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Contact Information</h2>
                <p className="text-text/70">
                  Find us using the information below or send us a message using the form.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: <PhoneIcon className="w-6 h-6" />,
                    title: "Phone",
                    info: "+1 (555) 123-4567",
                    subInfo: "Mon-Fri from 8am to 8pm"
                  },
                  {
                    icon: <EnvelopeIcon className="w-6 h-6" />,
                    title: "Email",
                    info: "contact@yourrestaurant.com",
                    subInfo: "We'll respond within 24 hours"
                  },
                  {
                    icon: <MapPinIcon className="w-6 h-6" />,
                    title: "Location",
                    info: "123 Restaurant Street",
                    subInfo: "City, State 12345"
                  },
                  {
                    icon: <ClockIcon className="w-6 h-6" />,
                    title: "Hours",
                    info: "Mon-Sun: 11:00 - 22:00",
                    subInfo: "Kitchen closes at 21:30"
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
