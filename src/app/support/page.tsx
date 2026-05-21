"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Phone, Mail, HelpCircle, UserCheck, Video } from "lucide-react";
import { toast } from "sonner";

export default function SupportPage() {
  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Support ticket created. A staff member will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-[#3C0366] mb-4">Customer Support Center</h1>
          <p className="text-lg text-gray-600">How can we help you today? Our Dessie branch staff is ready to assist.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
           {[
             { icon: MessageSquare, title: "Live Chat", desc: "Average response: 2 mins", action: "Start Chat" },
             { icon: Video, title: "Video Call", desc: "For ID verification & help", action: "Request Meet" },
             { icon: Phone, title: "Phone Support", desc: "Available 8 AM - 5 PM", action: "Call 951" }
           ].map((method, i) => (
             <Card key={i} className="rounded-3xl border-none shadow-lg hover:shadow-xl transition-all p-8 text-center bg-gray-100 group">
                <div className="w-16 h-16 bg-[#3C0366]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3C0366] transition-colors">
                   <method.icon className="h-8 w-8 text-[#3C0366] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#3C0366]">{method.title}</h3>
                <p className="text-sm text-gray-500 mb-6">{method.desc}</p>
                <Button variant="outline" className="rounded-full w-full border-[#3C0366] text-[#FFDF20] bg-[#3C0366]  transition-all">
                  {method.action}
                </Button>
             </Card>
           ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
           {/* FAQ Section */}
           <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-[#3C0366]">
                 <HelpCircle className="h-6 w-6 text-[#3C0366]" />
                 Common Questions
              </h2>
              <div className="space-y-4">
                 {[
                   { q: "How do I reset my transaction PIN?", a: "You can reset your PIN via the profile settings or by visiting our Dessie branch with your ID." },
                   { q: "What is the daily transfer limit?", a: "The default daily limit is 100,000 ETB, which can be increased upon request." },
                   { q: "Is CBE digital banking available on weekends?", a: "Yes, our digital banking services are available 24/7, even when the branch is closed." }
                 ].map((faq, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
                       <h4 className="font-bold mb-2 text-gray-900">{faq.q}</h4>
                       <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                 ))}
              </div>
           </div>

           {/* Contact Form */}
           <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#3C0366]">
                 <UserCheck className="h-6 w-6 text-[#3C0366]" />
                 Send us a Message
              </h2>
              <form onSubmit={handleContact} className="space-y-4">
                 <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <Label className="text-[#FFDF20]">Full Name</Label>
                       <Input placeholder="Abebe Bikila" className="text-black" required />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[#FFDF20]">Phone Number</Label>
                       <Input placeholder="09..." className="text-black" required />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <Label className="text-[#FFDF20]">Issue Category</Label>
                    <select className=" text-black flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                       <option>Transaction Issue</option>
                       <option>Queue Management</option>
                       <option>Account Access</option>
                       <option>General Inquiry</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <Label className="text-[#FFDF20]">Message</Label>
                    <textarea 
                      className=" text-black flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="Describe your issue in detail..."
                      required
                    ></textarea>
                 </div>
                 <Button type="submit" className="w-full bg-[#3C0366] hover:bg-[#3C036f] py-6 rounded-xl font-bold">
                    Submit Support Ticket
                 </Button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
}
