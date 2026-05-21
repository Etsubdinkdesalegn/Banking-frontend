import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, ShieldCheck, Clock, HeartHandshake, 
  TrendingUp, Users, Smartphone, MapPin, 
  CheckCircle2, Briefcase, Landmark, Info
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-white via-white to-[#3C0366] relative">
          <div className="standard-container relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#0067b1]/10 text-[#3C0366] border border-[#0067b1]/20">
                <span className="flex h-2 w-2 rounded-full bg-[#3C0366] mr-2 animate-pulse" />
                CBE Dessie Branch - Digital Evolution
              </div>
              <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl text-[#3C0366] leading-tight">
                Secure Banking <br />
                <span className="text-[#C420E8]">Built for You</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl lg:text-2xl leading-relaxed">
                Empowering the Dessie community with world-class digital banking solutions. 
                Skip the queues, digitalize your transactions, and bank with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/signup">
                  <Button className="bg-[#3C0366] hover:bg-[#C420E8] text-white px-10 py-7 text-lg rounded-full shadow-2xl shadow-[#0067b1]/30 group transition-all">
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/queue">
                  <Button variant="outline" className="border-2 border-[#00a651] text-[#00a651] bg-[#FFDF2f] hover:bg-[#3C0366]/5 px-10 py-7 text-lg rounded-full transition-all">
                    Book Queuing Token
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#0067b1]/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00a651]/5 rounded-full blur-3xl -z-10" />
        </section>

        {/* About Us Section */}
        <section className="py-24 bg-white border-y border-gray-50">
          <div className="standard-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block p-3 bg-[#3C0366]/10 rounded-2xl">
                  <Info className="h-8 w-8 text-[#3C0366]" />
                </div>
                <h2 className="text-4xl font-bold text-[#3C0366] leading-tight">
                  About CBE Dessie <br />Branch (Piyasa)
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Located in the heart of Dessie, our Piyasa branch has been a cornerstone of the community for decades. 
                  We are now evolving into a digital-first hub to solve the long-standing challenges of physical banking.
                </p>
                <ul className="space-y-4">
                  {[
                    "Decades of trusted community service",
                    "Dedicated support for the Dessie trade market",
                    "Pivoting to modern, customer-centric digital solutions",
                    "Committed to financial inclusion for all sectors"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#C420E8]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <div className="bg-[#3C0366] p-8 rounded-3xl text-white shadow-2xl">
                    <h4 className="text-4xl font-black">80+</h4>
                    <p className="text-sm opacity-80 mt-1">Years of Legacy</p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <h4 className="text-4xl font-black text-[#00a651]">24/7</h4>
                    <p className="text-sm text-gray-500 mt-1">Digital Support</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <h4 className="text-4xl font-black text-[#0067b1]">99%</h4>
                    <p className="text-sm text-gray-500 mt-1">Uptime Secure</p>
                  </div>
                  <div className="bg-[#C420E8] p-8 rounded-3xl text-white shadow-xl">
                    <h4 className="text-4xl font-black">1M+</h4>
                    <p className="text-sm opacity-80 mt-1">Active Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="standard-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#3C0366]">Comprehensive Banking Services</h2>
              <p className="text-lg text-gray-600">Tailored solutions for every financial need, from personal accounts to large-scale business operations.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {[
                { icon: Landmark, title: "Personal Banking", desc: "Savings, current accounts, and tailored fixed deposits." },
                { icon: Briefcase, title: "Business Banking", desc: "Commercial loans, trade finance, and payroll services." },
                { icon: Smartphone, title: "Mobile Banking", desc: "Instant transfers and bill payments via CBE Birr." },
                { icon: TrendingUp, title: "Loan Services", desc: "Competitive rates for homes, cars, and investments." }
              ].map((service, i) => (
                <div key={i} className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#3C0366] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C420E8] transition-colors">
                    <service.icon className="h-6 w-6 text-[#C420E8] group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-700">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="standard-container">
            <div className="flex flex-col items-center gap-16">
              <div className="text-center max-w-3xl">
                <h2 className="text-4xl font-bold mb-4 text-[#3C0366]">Why Choose CBE Digital?</h2>
                <p className="text-lg text-gray-600">We combine the strength of Ethiopia&apos;s largest bank with cutting-edge technology to solve real-world problems.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-5 bg-blue-50 rounded-full">
                    <ShieldCheck className="h-10 w-10 text-[#0067b1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#3C0366]">Unmatched Security</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">Bank-grade encryption and multi-factor authentication protect your assets 24/7.</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-5 bg-green-50 rounded-full">
                    <Clock className="h-10 w-10 text-[#00a651]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#3C0366]">Zero Wait Time</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">Digitalize your walk-ins with our smart queue management system.</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-5 bg-red-50 rounded-full">
                    <HeartHandshake className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#3C0366]">Inclusion First</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">Simple, Amharic-supported UI designed for the elderly and first-time users.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#3C0366] relative overflow-hidden">
          <div className="standard-container relative z-10 text-center">
            <h2 className="text-4xl font-black text-white mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Join thousands of customers in Dessie who are already enjoying the speed and security of CBE Digital Banking.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <Button className="bg-white text-[#0067b1] hover:bg-gray-100 px-10 py-7 text-lg rounded-full font-bold shadow-xl">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/support">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-7 text-lg rounded-full font-bold">
                  Contact Branch Staff
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-y-1/2" />
        </section>

        {/* Branch Info Section */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="standard-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <MapPin className="h-6 w-6 text-[#00a651]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#C420E8]">Visit Us</h4>
                  <p className="text-sm text-gray-500">Piyasa, Dessie, Wollo, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <Users className="h-6 w-6 text-[#0067b1]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#C420E8]">Staff Working Hours</h4>
                  <p className="text-sm text-gray-500">Mon - Sat: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <p className="text-xs text-gray-400 font-medium text-[#C420E8]">Licensed by National Bank of Ethiopia</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
