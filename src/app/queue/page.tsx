"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, Users, Ticket, Bell } from "lucide-react";
import { toast } from "sonner";

export default function QueuePage() {
  const [isBooking, setIsBooking] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleBookToken = () => {
    setIsBooking(true);
    // Simulate API call
    setTimeout(() => {
      setToken("CBE-D042");
      setIsBooking(false);
      toast.success("Queue token booked successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-[#3C0366] mb-4">Smart Queue Management</h1>
          <p className="text-lg text-gray-600">Save your time. Book a digital token and visit us only when it's your turn.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-12">
             {!token ? (
                <Card className="rounded-3xl border-none shadow-xl overflow-hidden">
                  <div className="bg-[#3C0366] p-8 text-center text-white">
                    <Ticket className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <h2 className="text-2xl font-bold">Ready to Visit?</h2>
                    <p className="opacity-80">Generate a digital token for CBE Dessie Branch</p>
                  </div>
                  <CardContent className="p-8 text-center">
                    <div className="grid sm:grid-cols-3 gap-6 mb-8">
                       <div className="p-4 bg-gray-50 rounded-2xl">
                          <Users className="h-6 w-6 text-[#0067b1] mx-auto mb-2" />
                          <p className="text-xs text-[#FFDF20]">People Ahead</p>
                          <p className="text-2xl font-bold text-black">12</p>
                       </div>
                       <div className="p-4 bg-gray-50 rounded-2xl">
                          <Clock className="h-6 w-6 text-[#00a651] mx-auto mb-2" />
                          <p className="text-xs text-[#FFDF20]">Est. Wait Time</p>
                          <p className="text-2xl font-bold text-black">25m</p>
                       </div>
                       <div className="p-4 bg-gray-50 rounded-2xl">
                          <MapPin className="h-6 w-6 text-red-500 mx-auto mb-2" />
                          <p className="text-xs text-[#ffdf20]">Branch Status</p>
                          <p className="text-2xl font-bold text-green-600">Open</p>
                       </div>
                    </div>
                    <Button 
                      onClick={handleBookToken}
                      className="bg-[#3C0366] hover:bg-[#3C036f] px-12 py-7 text-lg rounded-full font-bold transition-all shadow-lg shadow-[#0067b1]/20"
                      disabled={isBooking}
                    >
                      {isBooking ? "Generating Token..." : "Get My Token Now"}
                    </Button>
                  </CardContent>
                </Card>
             ) : (
                <Card className="rounded-3xl border-2 border-[#3C0366] shadow-2xl relative overflow-hidden bg-[#FBFBF9]">
                  <div className="absolute top-0 right-0 p-4">
                     <div className="bg-[#3C0366]/10 text-[#3C0366] px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        LIVE TOKEN
                     </div>
                  </div>
                  <CardContent className="p-12 text-center">
                    <CheckCircle2 className="h-16 w-16 text-[#00a651] mx-auto mb-6" />
                    <p className="text-gray-500 font-medium mb-2">YOUR TOKEN NUMBER</p>
                    <h2 className="text-6xl font-black text-gray-900 mb-8">{token}</h2>
                    
                    <div className="bg-gray-50 rounded-3xl p-6 mb-8 grid grid-cols-2 gap-4">
                       <div className="text-left border-r border-gray-200">
                          <p className="text-xs text-gray-400">Position</p>
                          <p className="text-xl font-bold text-black">13th in Line</p>
                       </div>
                       <div className="text-left">
                          <p className="text-xs text-gray-400">Notify me via</p>
                          <p className="text-xl font-bold text-black">SMS Enabled</p>
                       </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                       <Button variant="outline" className="rounded-full gap-2 px-8 bg-[#3C0366] hover:bg-[#3C036f]">
                          <Bell className="h-4 w-4" />
                          Remind Me
                       </Button>
                       <Button className="bg-[#3C0366] hover:bg-[#3C036f] rounded-full px-8">
                          Download PDF
                       </Button>
                    </div>
                  </CardContent>
                  <div className="bg-[#3C0366] h-2 w-full absolute bottom-0" />
                </Card>
             )}
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-3xl border border-gray-300 shadow-lg">
           <h3 className="text-2xl font-bold mb-6 text-[#3C0366]">How it works</h3>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                 <div className="w-10 h-10 bg-[#3C0366] text-white flex items-center justify-center rounded-full font-bold">1</div>
                 <h4 className="font-bold text-[#FFDF20]">Book Online</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">Book your token from anywhere in Dessie using this portal.</p>
              </div>
              <div className="space-y-3">
                 <div className="w-10 h-10 bg-[#3C0366] text-white flex items-center justify-center rounded-full font-bold">2</div>
                 <h4 className="font-bold text-[#FFDF20]">Track Status</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">Receive live updates on your position and estimated waiting time.</p>
              </div>
              <div className="space-y-3">
                 <div className="w-10 h-10 bg-[#3C0366] text-white flex items-center justify-center rounded-full font-bold">3</div>
                 <h4 className="font-bold text-[#FFDF20]">Visit Branch</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">Walk into the branch only when you receive your "Next Up" notification.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
