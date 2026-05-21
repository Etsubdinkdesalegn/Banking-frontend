"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Registration failed");

      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      
      toast.success("Account created successfully!");
      router.push("/dashboard");
    } catch (error) {
      const err = error as Error;
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-[#3C0366] rounded-lg flex items-center justify-center mb-4">
            <span className="text-white font-bold text-xl">CBE</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-gray-600">Join CBE Digital Banking Piyasa Branch</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName"className="text-[#FFDF20]">Full Name</Label>
              <Input
                id="fullName"
                required
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#FFDF20]">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="0911..."
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#FFDF20]">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="rounded-xl"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#3C0366] hover:bg-[#3c036f] py-6 rounded-xl transition-all"
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Create Account"}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-[#0067b1] hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
