import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import DonationForm from "@/components/DonationForm";
import { Card, CardContent } from "@/components/ui/card";

const Donate = () => {
  return (
    <div className="min-h-screen bg-houg-background">
      <Navbar />
      
      <PageHeader 
        title="Donate" 
        subtitle="Support our mission to create sustainable solutions for unemployment in Uganda."
        backgroundImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-houg-primary text-center">Make a Difference Today</h2>
          <p className="text-lg text-center mb-8">
            Your contribution helps us continue our work in empowering communities, creating sustainable livelihoods, and protecting the environment for future generations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">How Your Donation Helps</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-houg-primary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Support Youth Training</h4>
                    <p>Your donation helps provide vocational and entrepreneurship training to unemployed youth.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-houg-primary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Fund Community Projects</h4>
                    <p>Support sustainable agriculture, environmental conservation, and community development initiatives.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-houg-primary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Empower Women</h4>
                    <p>Help women gain economic independence through training, microloans, and business support.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-houg-primary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Protect the Environment</h4>
                    <p>Support tree planting, environmental education, and sustainable resource management.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <DonationForm />
            </div>
          </div>
        </div>
        
        {/* Other Ways to Support */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-houg-primary text-center">Other Ways to Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-md border-houg-secondary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Volunteer With Us</h3>
                <p className="mb-4">
                  Share your skills and time by volunteering with our projects in Uganda. We welcome both local and international volunteers.
                </p>
                <a href="/contact" className="text-houg-primary font-medium hover:underline">
                  Learn More
                </a>
              </CardContent>
            </Card>
            
            <Card className="shadow-md border-houg-secondary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Corporate Partnerships</h3>
                <p className="mb-4">
                  Partner with us to create joint initiatives that align with your corporate social responsibility goals.
                </p>
                <a href="/contact" className="text-houg-primary font-medium hover:underline">
                  Contact Us
                </a>
              </CardContent>
            </Card>
            
            <Card className="shadow-md border-houg-secondary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Monthly Giving</h3>
                <p className="mb-4">
                  Become a monthly supporter and help us plan and sustain our programs with reliable funding.
                </p>
                <a href="/contact" className="text-houg-primary font-medium hover:underline">
                  Sign Up
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Donate;
