import Link from "next/link";
import { Mail, Phone, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3C0366] text-white pt-16 pb-8">
      <div className="standard-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#C420E8] rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">CBE</span>
              </div>
              <span className="font-bold text-xl">Digital Banking</span>
            </Link>
            <p className="text-gray-[3FBFBF9] text-sm leading-relaxed">
              Empowering the people of Ethiopia with secure, modern, and traditional banking values. CBE Dessie Branch (Piyasa) – Your trusted partner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#FFDF20] ">
              <li><Link href="/dashboard" className="hover:text-[#FBFBF9] transition-colors">Dashboard</Link></li>
              <li><Link href="/login" className="hover:text-[#FBFBF9] transition-colors">Sign In</Link></li>
              <li><Link href="/signup" className="hover:text-[#FBFBF9] transition-colors">Register</Link></li>
              <li><Link href="/queue" className="hover:text-[#FBFBF9] transition-colors">Online Queue</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#FFDF20] ">
              <li><Link href="#" className="hover:text-[#FBFBF9] transition-colors">Money Transfer</Link></li>
              <li><Link href="#" className="hover:text-[#FBFBF9] transition-colors">Bill Payment</Link></li>
              <li><Link href="#" className="hover:text-[#FBFBF9] transition-colors">CBE Birr</Link></li>
              <li><Link href="#" className="hover:text-[#FBFBF9] transition-colors">Loan Requests</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#FFDF20]" />
                <span>951 (Customer Service)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#FFDF20]" />
                <span>support@cbe.com.et</span>
              </li>
              <li className="flex gap-4 pt-2">
                <Globe className="h-5 w-5 hover:text-[#0067b1] cursor-pointer" />
                <MessageCircle className="h-5 w-5 hover:text-[#0067b1] cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#FBFBF9">
          <p>© 2026 Commercial Bank of Ethiopia. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <Link href="/security" className="hover:underline">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
