"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/userStore";
import { Menu, X, Bell, User, Terminal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { user, setUser } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8080/api/v1/auth/logout", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      router.push("/login");
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Transactions", href: "/transactions" },
    { name: "Queue", href: "/queue" },
    { name: "Support", href: "/support" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="standard-container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#3C0366] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">CBE</span>
          </div>
          <span className="font-bold text-lg text-[#3C0366] hidden sm:block">Digital Banking</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#C420E8]",
                pathname === link.href ? "text-[#C420E8]" : "text-[#3C0366]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-[#3C0366]">
                <Bell className="h-5 w-5" />
              </Button>
              <Link href="/profile">
                <Button variant="outline" className="rounded-full gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">{user.fullName.split(" ")[0]}</span>
                </Button>
              </Link>
              <Button variant="ghost" onClick={handleLogout} className="text-red-600 hover:text-red-700 hover:bg-red-50">
                Log Out
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" className="bg-[#3C0366] hover:bg-[#C420E8]">Login</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-[#3C0366] hover:bg-[#C420E8]">Register</Button>
              </Link>
            </div>
          )}

          <Button variant="ghost" size="icon" className="text-[#3C0366] hover:text-[#C420E8] ml-2" title="Developer Tools">
            <Terminal className="h-5 w-5" />
          </Button>

          {/* Mobile Menu Button Status */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-gray-500 hover:text-[#0067b1]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {user && (
            <Button variant="ghost" onClick={handleLogout} className="w-full text-red-600 justify-start">
               Log Out
            </Button>
          )}
          {!user && (
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#0067b1]">Register</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
