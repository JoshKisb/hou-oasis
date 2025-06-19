
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-houg-background">
      <Navbar />
      
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you. Reach out with questions, partnership opportunities, or to get involved."
        backgroundImage="/lovable-uploads/50b9b00d-7b96-4db8-b13c-574b7300a14c.png"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-houg-primary">Get In Touch</h2>
              
              <p className="text-lg mb-8">
                We welcome your questions, feedback, and inquiries. Whether you'd like to learn more about our work, explore partnership opportunities, or find out how you can get involved, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-houg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-houg-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Visit Us</h4>
                    <p>Hands On Unemployment Uganda</p>
                    <p>Wakiso District, Uganda</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-houg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-houg-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email Us</h4>
                    <p>info@houuganda.org</p>
                    <p>support@houuganda.org</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-houg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-houg-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Call Us</h4>
                    <p>+256 704-159-210</p>
                    <p>+971 554-628-399</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-houg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-houg-primary shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Office Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-lg mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {/* Social media icons/links would go here */}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-houg-primary">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
          
          {/* Project Images Gallery */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-houg-primary text-center">Our Work in the Community</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <img 
                src="/lovable-uploads/a04d781f-aec5-42a1-bfdf-9e601f179ba2.png" 
                alt="Tree nursery project"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img 
                src="/lovable-uploads/8734d552-cf95-4c8c-a4e9-80868b00a762.png" 
                alt="Community farming"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img 
                src="/lovable-uploads/6a0a4d5b-f257-4e21-a461-164e5a2f4311.png" 
                alt="Training session"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img 
                src="/lovable-uploads/689cfc81-71db-407b-9bc3-aec928b1d6e1.png" 
                alt="Community center"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-houg-primary text-center">Our Location</h3>
            <div className="bg-gray-200 h-[400px] rounded-lg">
              {/* An actual map integration would go here */}
              <div className="h-full flex items-center justify-center text-gray-500">
                <p>Map placeholder - In a real implementation, a Google Maps or OpenStreetMap integration would be placed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
