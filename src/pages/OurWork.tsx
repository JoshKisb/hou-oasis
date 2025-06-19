
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { TreePine, Users, Sprout, GraduationCap, Target, Heart } from "lucide-react";

const OurWork = () => {
  return (
    <div className="min-h-screen bg-houg-background">
      <Navbar />
      
      <PageHeader 
        title="Our Work" 
        subtitle="Discover our projects and initiatives that are making a difference across Uganda."
        backgroundImage="/lovable-uploads/6a0a4d5b-f257-4e21-a461-164e5a2f4311.png"
      />
      
      <div className="container mx-auto px-4 pb-16">
        {/* The Problem Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-houg-primary text-center">The Problem</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-houg-secondary">Rampant Deforestation</h3>
                <p className="text-gray-700 mb-4">
                  The rampant deforestation rates by school dropouts and unemployed youths has crippled food production due to less and unpredictable rains. We have therefore dedicated ourselves to empowering communities to build sustainable livelihoods while protecting the environment.
                </p>
                <p className="text-gray-700">
                  We work with out-of-school youths to plant trees in communities as well as training smallholder farmers on how to integrate tree planting and beekeeping into their daily farming practices. Our goal is to create a future where communities thrive in harmony with nature through practical solutions that address economic and environmental challenges.
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/689cfc81-71db-407b-9bc3-aec928b1d6e1.png" 
                  alt="School and community buildings"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Focal Areas Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-houg-primary text-center">Our Focal Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-houg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Sprout className="text-houg-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-houg-secondary">Sustainable Farming Practices</h3>
              </div>
              <p className="text-gray-700">
                We train and equip farmers with skills to incorporate tree planting and beekeeping into their farming systems. These practices help improve soil fertility, increase crop yields, and diversify incomes while combating climate change.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-houg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <TreePine className="text-houg-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-houg-secondary">Tree Planting Initiatives</h3>
              </div>
              <p className="text-gray-700">
                We promote agroforestry by supporting farmers in planting and nurturing trees on their farms. This not only helps restore degraded ecosystems but also provides resources such as timber, firewood, and shade for crops and livestock.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-houg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Target className="text-houg-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-houg-secondary">Beekeeping Training</h3>
              </div>
              <p className="text-gray-700">
                Through our comprehensive beekeeping programs, we provide farmers and youth with the knowledge and tools needed to establish and manage beekeeping enterprises. Beekeeping serves as an additional source of income and plays a crucial role in pollination, improving crop productivity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-houg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-houg-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-houg-secondary">Capacity Building and Support</h3>
              </div>
              <p className="text-gray-700">
                We organize workshops, training sessions, and mentorship programs to empower communities with the knowledge and tools they need to succeed. Our team ensures ongoing support to help participants integrate these practices effectively into their farming systems.
              </p>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-houg-primary text-center">Our Projects in Action</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/9ceb2fc2-6052-4ce1-88d4-4dbbac3b5022.png" 
                alt="Tree seedling preparation"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Seedling Preparation</h3>
                <p className="text-gray-700 text-sm">Preparing tree seedlings for community distribution and planting programs.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/ce31a932-df85-4075-965e-28532643a93a.png" 
                alt="Charcoal production management"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Sustainable Resource Management</h3>
                <p className="text-gray-700 text-sm">Training communities on sustainable charcoal production and alternative energy sources.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/c939a1b3-8bea-40b9-b5c5-ac0a14badc0c.png" 
                alt="Community training sessions"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Community Workshops</h3>
                <p className="text-gray-700 text-sm">Interactive training sessions on sustainable farming and environmental conservation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Impact Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-houg-primary">Our Impact</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              We are building a movement toward sustainable development. By integrating environmentally friendly practices into agriculture, we are helping communities combat climate change, improve their livelihoods, and create a lasting legacy for future generations.
            </p>
            <p className="text-xl font-semibold text-houg-primary">
              Together, we are transforming lives, 1 tree and 1 hive at a time.
            </p>
          </div>
        </div>

        {/* Why We Do It Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-houg-primary text-center">Why We Do It</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Forest Gardens End Poverty</h3>
              <p className="text-gray-700 text-sm">
                Our approach ensures opportunity otherwise inaccessible to rural families, breaking generational cycles of poverty.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Forest Gardens Protect Our Planet</h3>
              <p className="text-gray-700 text-sm">
                By diversifying production and protecting their soils, Forest Gardeners farm with nature, rather than against it, serving both people and planet.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Forest Gardens Feed Communities</h3>
              <p className="text-gray-700 text-sm">
                On their own land, Forest Gardeners reliably grow a wide variety of food crops – enough for their family's and their communities' food security.
              </p>
            </div>
          </div>
        </div>

        {/* Sustainable Development Goals Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-houg-primary">2030 Sustainable Development Goals</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              Our work spans urban and rural areas, addressing local employment challenges through tailored programs. By partnering with communities and businesses, we strive to create lasting opportunities for economic empowerment.
            </p>
            <p className="text-gray-700">
              Discover our years of progress and achievements in our annual impact reports.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurWork;
