"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import UserProfile from "@/components/layout/UserProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, ArrowUpRight, ArrowDownLeft, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user, fetchUser, isLoading } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    fetchUser();
  }, []);

  if (isLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <header className="bg-[#3C0366] text-white py-12 mb-8">
        <div className="standard-container">
          <h1 className="text-3xl font-bold">Hello, {user.fullName.split(' ')[0]}!</h1>
          <p className="opacity-80">Welcome to your CBE Digital Banking Portal</p>
        </div>
      </header>

      <main className="standard-container -mt-8 grid gap-8 md:grid-cols-12">
        {/* Profile Section */}
        <div className="md:col-span-4">
          <UserProfile />
        </div>

        {/* Financial Overview Section */}
        <div className="md:col-span-8 space-y-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="rounded-2xl border-none shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-[#FFDF20]">Total Balance</CardTitle>
                <Wallet className="h-4 w-4 text-[#00a651]" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-black">ETB 12,450.00</div>
                <p className="text-xs text-gray-500 mt-1">+2.5% from last month</p>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl border-none shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-[#FFDF20]">Queue Tokens</CardTitle>
                <Clock className="h-4 w-4 text-[#0067b1]" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-black">2 Active</div>
                <p className="text-xs text-[#0067b1] mt-1 font-medium">Est. Wait: 15 mins</p>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl border-none shadow-2xl bg-[#3C0366]">
            <CardHeader>
              <CardTitle className="text-[#FBFBF9">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${i % 2 === 0 ? 'bg-red-100' : 'bg-green-100'}`}>
                         {i % 2 === 0 ? <ArrowUpRight className="h-4 w-4 text-red-600" /> : <ArrowDownLeft className="h-4 w-4 text-green-600" />}
                      </div>
                      <div>
                        <p className="font-bold text-[#FFDF20]">{i % 2 === 0 ? 'Abay Market' : 'Internal Transfer'}</p>
                        <p className="text-xs text-gray-500">May 16, 2024</p>
                      </div>
                    </div>
                    <p className={`font-bold ${i % 2 === 0 ? 'text-red-600' : 'text-green-600'}`}>
                       {i % 2 === 0 ? '-' : '+'}ETB {500 * i}.00
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
