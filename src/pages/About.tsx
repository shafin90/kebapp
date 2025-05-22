import React from 'react'
import {
  HeartIcon,
  SparklesIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const About: React.FC = () => {
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
              <span className="text-primary text-sm font-medium">Our Story</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-text leading-[1.2] tracking-tight">
              Bringing 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Turkish Flavors to You
              </span>
            </h1>
            
            <p className="text-xl text-text/70 leading-relaxed max-w-2xl mx-auto">
              We're more than just a restaurant - we're a family bringing authentic Turkish cuisine with a modern twist to your neighborhood.
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
      <section className="py-24 bg-gradient-to-b from-white to-green-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_theme(colors.primary/0.05),_transparent_70%)]"></div>
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
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
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
