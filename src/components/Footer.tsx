
import { Link } from "react-router-dom";
import { Mail, Phone, Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-houg-primary text-white mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Hands On Unemployment Uganda</h3>
            <p className="mb-4">
              Empowering communities through sustainable development and creating opportunities for the unemployed.
            </p>
            <div className="flex space-x-4">
              {/* Social media links could go here */}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-houg-accent">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-houg-accent">About Us</Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-houg-accent">Our Work</Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-houg-accent">Donate</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-houg-accent">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Home size={18} />
                <span>Kamuli District, Uganda</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+256704159210</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+971554628399</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>houuganda@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Hands On Unemployment Uganda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
