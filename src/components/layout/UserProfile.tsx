"use client";

import { useProfile } from "@/hooks/useProfile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import { Loader2, Upload, User as UserIcon } from "lucide-react";
import { toast } from "sonner";

export default function UserProfile() {
  const { user, uploadAvatar, isUploading } = useProfile();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const getInitials = (name: string) => {
    if (!name) return "??";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        await uploadAvatar(file);
        toast.success("Avatar updated!");
      } catch (error) {
        toast.error("Failed to upload image");
      }
    }
  };

  if (!user) return null;

  const getImageUrl = (path: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `http://localhost:8080${path}`;
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center">
      <div className="relative group">
        <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
          {user.profileImage && <AvatarImage src={getImageUrl(user.profileImage)} alt={user.fullName} />}
          <AvatarFallback className="bg-[#0067b1] text-white text-3xl font-bold">
            {getInitials(user.fullName)}
          </AvatarFallback>
        </Avatar>
        
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          disabled={isUploading}
        >
          {isUploading ? <Loader2 className="text-white animate-spin" /> : <Upload className="text-white" />}
        </button>
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          className="hidden" 
          accept="image/*"
        />
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">{user.fullName}</h2>
        <p className="text-gray-500">{user.phoneNumber}</p>
        <div className="mt-2 inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
          {user.role}
        </div>
      </div>
    </div>
  );
}
