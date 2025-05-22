import React, { useState } from 'react'
import {
  CalendarDaysIcon,
  UserGroupIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Reservation submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="pt-36">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-green-50 via-white to-primary/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-primary/[0.02] rounded-bl-[100px] backdrop-blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-primary/[0.02] rounded-tr-[100px] backdrop-blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-full shadow-md">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="text-primary text-sm font-medium">Book a Table</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-text leading-[1.2] tracking-tight">
              Reserve Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Perfect Table
              </span>
            </h1>
            
            <p className="text-xl text-text/70 leading-relaxed max-w-2xl mx-auto">
              Join us for a memorable dining experience. Book your table now and enjoy our delicious cuisine.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_theme(colors.primary/0.05),_transparent_70%)]"></div>
        <div className="container px-6 mx-auto relative">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-lg">
              <div className="space-y-6 mb-8">
                <h2 className="text-3xl font-bold text-center">Make a Reservation</h2>
                <p className="text-text/70 text-center">
                  Fill out the form below to reserve your table. We'll confirm your reservation via email.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                    <label htmlFor="phone" className="block text-sm font-medium text-text/70 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-text/70 mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-text/70 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-text/70 mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-text/70 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Any dietary restrictions or special requests?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/90 text-white py-4 rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  Reserve Table
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <PhoneIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Need Help?</p>
                      <p className="text-text/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <ClockIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Opening Hours</p>
                      <p className="text-text/70">11:00 - 22:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <EnvelopeIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Email Us</p>
                      <p className="text-text/70">reservations@restaurant.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reservation 