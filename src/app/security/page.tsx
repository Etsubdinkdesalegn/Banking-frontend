import { ShieldCheck, Lock, Eye, AlertTriangle, CheckCircle } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-[#3C0366] rounded-3xl mb-4">
             <ShieldCheck className="h-12 w-12 text-[#FFDF20]" />
          </div>
          <h1 className="text-4xl font-black text-[#3C0366] mb-4">Your Security is Our Priority</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At CBE Dessie Branch, we implement state-of-the-art security measures to ensure your data and money are always protected.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
           <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-300 flex gap-6">
              <div className="p-4 bg-blue-50 rounded-2xl h-fit">
                 <Lock className="h-8 w-8 text-[#0067b1]" />
              </div>
              <div className="space-y-2">
                 <h3 className="text-xl font-bold text-[#3C0366]">End-to-End Encryption</h3>
                 <p className="text-gray-500 text-sm">All data transmitted between your device and our servers is secured using bank-grade AES-256 encryption.</p>
              </div>
           </div>
           
           <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-300 flex gap-6">
              <div className="p-4 bg-green-50 rounded-2xl h-fit">
                 <Eye className="h-8 w-8 text-[#00a651]" />
              </div>
              <div className="space-y-2">
                 <h3 className="text-xl font-bold text-[#3C0366]">24/7 Monitoring</h3>
                 <p className="text-gray-500 text-sm">Our automated systems and security experts monitor for suspicious activity around the clock.</p>
              </div>
           </div>
        </div>

        <div className="bg-[#3C0366] rounded-3xl p-12 text-white relative overflow-hidden">
           <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-bold mb-6 text-[#FFDF20]">Security Best Practices</h2>
              <ul className="space-y-4">
                 {[
                   "Never share your password or OTP with anyone, including bank staff.",
                   "Ensure your mobile device is locked with a PIN or biometric security.",
                   "Always log out from public computers.",
                   "Check your transaction history regularly for unauthorized actions."
                 ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <CheckCircle className="h-5 w-5 text-[#00a651] shrink-0 mt-1" />
                       <p className="text-white/80">{tip}</p>
                    </li>
                 ))}
              </ul>
           </div>
           <ShieldCheck className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 opacity-10 rotate-12" />
        </div>

        <div className="mt-16 text-center">
           <p className="text-gray-800 text-sm">
             Found a security vulnerability? Reported it to <span className="text-[#0067b1] font-bold">security@cbe.com.et</span>
           </p>
        </div>
      </div>
    </div>
  );
}
