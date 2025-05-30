import React from 'react'
import { Link } from 'react-router-dom'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon
} from '../icons/SocialIcons'

const Footer = () => {
  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="bg-[#e5f5ee] from-primary/5 to-white border-t border-primary/10 py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_theme(colors.primary/0.1),_transparent_70%)]"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-6">
              <Link to="/" className="inline-block group">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <SparklesIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Sebastian's Kebap</h3>
                </div>
              </Link>
              <p className="text-text/70 leading-relaxed">
                Entdecken Sie die perfekte Mischung aus traditionellem Kebap und frischem Gemüse.
                Unser Engagement für hochwertige Zutaten und authentische Aromen macht jeden Bissen besonders.
                🌿 Frisch • Bunt • Geschmackvoll 🥙
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <FacebookIcon className="w-5 h-5" />, link: "https://facebook.com", label: "Facebook" },
                  { icon: <InstagramIcon className="w-5 h-5" />, link: "https://instagram.com", label: "Instagram" },
                  { icon: <TwitterIcon className="w-5 h-5" />, link: "https://twitter.com", label: "Twitter" },
                  { icon: <YoutubeIcon className="w-5 h-5" />, link: "https://youtube.com", label: "YouTube" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 p-2.5 rounded-lg hover:bg-primary/10 transition-all group border border-primary/10 hover:scale-110"
                    aria-label={social.label}
                  >
                    <div className="text-text/70 group-hover:text-primary transition-colors">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-lg text-[#22c55e] font-bold">Navigation</h4>
              <div className="space-y-4">
                <FooterLink to="/">Startseite</FooterLink>
                <FooterLink to="/menu">Speisekarte</FooterLink>
                <FooterLink to="/about">Über uns</FooterLink>
                <FooterLink to="/contact">Kontakt</FooterLink>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-lg text-[#22c55e] font-bold">Besuchen Sie uns</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text/70 hover:text-primary transition-colors group">
                  <div className="bg-primary/5 p-1.5 rounded-lg group-hover:bg-primary/10 transition-colors mt-1">
                    <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                  </div>
                  <span>Hörgensweg 4, 22523 Hamburg</span>
                </li>
                <li>
                  <a
                    href="tel:+4915226879964"
                    className="flex items-center gap-3 text-text/70 hover:text-primary transition-colors group"
                  >
                    <div className="bg-primary/5 p-1.5 rounded-lg group-hover:bg-primary/10 transition-colors">
                      <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                    </div>
                    <span>+49 1522 6879964</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@sebastiansgemusekebap.de"
                    className="flex items-center gap-3 text-text/70 hover:text-primary transition-colors group"
                  >
                    <div className="bg-primary/5 p-1.5 rounded-lg group-hover:bg-primary/10 transition-colors">
                      <EnvelopeIcon className="w-4 h-4 flex-shrink-0" />
                    </div>
                    <span>info@sebastiansgemusekebap.de</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-lg text-[#22c55e] font-bold">Öffnungszeiten</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-text/70 group">
                  <div className="bg-primary/5 p-1.5 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <ClockIcon className="w-4 h-4 flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-medium">Mo - Fr</p>
                    <p>11:00 - 22:00</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-text/70 group">
                  <div className="bg-primary/5 p-1.5 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <ClockIcon className="w-4 h-4 flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-medium">Samstag</p>
                    <p>12:00 - 22:00</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-text/70 group">
                  <div className="bg-primary/5 p-1.5 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <ClockIcon className="w-4 h-4 flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-medium">Sonntag</p>
                    <p>13:00 - 21:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-primary/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-text/60">
                <HeartIcon className="w-4 h-4 text-primary" />
                <div className="text-center text-text/60 text-sm">
                  <p>&copy; {new Date().getFullYear()} Sebastian's Kebap. Mit Liebe gemacht in Hamburg.</p>
                </div>
              </div>
              <div className="flex gap-6 text-sm">
                <Link to="/privacy" className="text-text/60 hover:text-primary transition-colors">Datenschutz</Link>
                <Link to="/terms" className="text-text/60 hover:text-primary transition-colors">AGB</Link>
                <Link to="/imprint" className="text-text/60 hover:text-primary transition-colors">Impressum</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({ to, children, className = "" }: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => (

  <Link
    to={to}
    className={`text-text/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group ${className}`}
  >
    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
    {children}
  </Link>

)

export default Footer 