"use client";

import { useUserStore } from "@/store/userStore";
import UserProfile from "@/components/layout/UserProfile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2, Save } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user, fetchUser, updateUser } = useUserStore();
  const [fullName, setFullName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setFullName(user.fullName);
    }
  }, [user]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateUser({ fullName });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-[#3C0366]">Your Profile</h1>
        
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <UserProfile />
          </div>

          <div className="md:col-span-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-400">
              <form onSubmit={handleUpdate} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#FFDF20]">Phone Number (Fixed)</Label>
                    <Input id="phone" value={user.phoneNumber} disabled className="bg-gray-50 border border-2 border-gray-600 text-black" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-[#FFDF20]">Full Name</Label>
                    <Input 
                      className="bg-gray-50 border border-2 border-gray-600 text-black"
                      id="fullName" 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-[#FFDF20]">Account Type</Label>
                    <Input id="role" value={user.role} disabled className="bg-gray-50 border border-2 border-gray-600 text-black" />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button 
                    type="submit" 
                    className="bg-[#3C0366] hover:bg-[#3c036f] gap-2 px-8"
                    disabled={isSaving}
                  >
                    {isSaving ? <Loader2 className="h-4 w-4 animate-spin bg-[#3C0366]" /> : <Save className="h-4 w-4 bg-[#3C0366]" />}
                    Save Changes
                  </Button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-bold text-red-600 mb-2">Account Security</h3>
                <p className="text-sm text-gray-500 mb-4">Manage your password and security settings below.</p>
                <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                  Change Password
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
