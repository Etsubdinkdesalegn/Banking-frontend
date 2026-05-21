"use client";

import { useState, useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Send, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Wallet, 
  RefreshCcw,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Banknote,
  Receipt
} from "lucide-react";
import api from "@/api/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Account {
  id: number;
  accountNumber: string;
  balance: number;
  accountType: string;
}

type TransactionType = 'transfer' | 'cash-transfer' | 'withdraw' | 'deposit';

export default function TransactionsPage() {
  const { user, fetchUser, isLoading: userLoading } = useUserStore();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [activeTab, setActiveTab] = useState<TransactionType>('transfer');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // Form State
  const [formData, setFormData] = useState({
    senderAccountNumber: "",
    receiverAccountNumber: "",
    amount: "",
    description: ""
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    fetchUser();
    loadAccounts();
  }, []);

  const loadAccounts = async () => {
    try {
      const { data } = await api.get("/banking/accounts");
      setAccounts(data);
      if (data.length > 0) {
        setFormData(prev => ({ ...prev, senderAccountNumber: data[0].accountNumber }));
      }
    } catch (error) {
      console.error("Failed to load accounts", error);
      toast.error("Could not load your accounts");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      let endpoint = "/banking/transfer";
      if (activeTab === 'withdraw') endpoint = "/banking/withdraw";
      if (activeTab === 'deposit') endpoint = "/banking/deposit";
      if (activeTab === 'cash-transfer') endpoint = "/banking/cash-transfer";

      const payload = {
        ...formData,
        amount: parseFloat(formData.amount)
      };

      await api.post(endpoint, payload);
      setSuccess(true);
      toast.success("Transaction completed successfully!");
      loadAccounts(); // Refresh balances
      
      // Reset form but keep sender account
      setFormData(prev => ({
        ...prev,
        receiverAccountNumber: "",
        amount: "",
        description: ""
      }));
    } catch (error) {
      const err = error as any;
      toast.error(err.response?.data?.message || "Transaction failed. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  if (userLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-[#3C0366]" />
      </div>
    );
  }

  const tabs: { id: TransactionType, label: string, icon: React.ElementType, desc: string }[] = [
    { id: 'transfer', label: 'Transfer', icon: RefreshCcw, desc: 'Account-to-Account Transfer' },
    { id: 'cash-transfer', label: 'Cash Transfer', icon: Send, desc: 'Send cash to any account' },
    { id: 'withdraw', label: 'Withdraw', icon: ArrowUpRight, desc: 'Cash Withdrawal from your account' },
    { id: 'deposit', label: 'Deposit', icon: ArrowDownLeft, desc: 'Cash to Account Deposit' },
  ];

  return (
    <div className="standard-container py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-[#3C0366] mb-2 tracking-tight">Financial Transactions</h1>
            <p className="text-gray-500 font-medium">Manage your money safely and instantly.</p>
          </div>
          <div className="bg-[#3C0366]/5 p-4 rounded-2xl border border-[#3C0366]/10 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#3C0366] rounded-xl flex items-center justify-center shadow-lg shadow-[#3C0366]/20">
              <Wallet className="text-white h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-[#3C0366] font-bold uppercase tracking-wider">Total Balance</p>
              <p className="text-2xl font-black text-[#3C0366]">
                ETB {accounts.reduce((sum, acc) => sum + acc.balance, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </header>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSuccess(false);
              }}
              className={`flex flex-col items-center justify-center p-6 rounded-3xl transition-all border-2 ${
                activeTab === tab.id 
                ? 'bg-[#3C0366] text-white border-[#3C0366] shadow-xl shadow-[#3C0366]/20 scale-[1.02]' 
                : 'bg-white text-gray-400 border-gray-100 hover:border-[#3C0366]/30 hover:bg-gray-50'
              }`}
            >
              <tab.icon className={`h-8 w-8 mb-3 ${activeTab === tab.id ? 'text-[#FFDF20]' : 'text-gray-300'}`} />
              <span className="font-bold text-sm text-center leading-tight">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <Card className="rounded-[2.5rem] border-none shadow-2xl overflow-hidden bg-white">
              <CardHeader className="bg-gradient-to-r from-[#3C0366] to-[#C420E8] text-white p-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                    {(() => {
                      const ActiveIcon = tabs.find(t => t.id === activeTab)?.icon;
                      return ActiveIcon ? <ActiveIcon className="h-6 w-6" /> : null;
                    })()}
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">{tabs.find(t => t.id === activeTab)?.label}</CardTitle>
                    <CardDescription className="text-white/70 font-medium">
                      {tabs.find(t => t.id === activeTab)?.desc}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                {success ? (
                  <div className="py-12 flex flex-col items-center text-center space-y-6 animate-in zoom-in-95 duration-300">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-800">Transaction Complete!</h3>
                      <p className="text-gray-500 max-w-xs">Your transaction has been processed and your account reflects the new balance.</p>
                    </div>
                    <Button 
                      onClick={() => setSuccess(false)}
                      className="bg-[#3C0366] hover:bg-[#C420E8] rounded-full px-8 py-6 text-lg"
                    >
                      Make Another Transaction
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* SENDER ACCOUNT - Shown for Transfer, Withdraw, and Cash Transfer FROM account */}
                    {(activeTab === 'transfer' || activeTab === 'withdraw' || activeTab === 'cash-transfer') && (
                      <div className="space-y-2">
                        <Label className="text-sm font-bold text-gray-700 ml-1">From Account</Label>
                        <select 
                          name="senderAccountNumber"
                          value={formData.senderAccountNumber}
                          onChange={handleInputChange}
                          className="w-full h-14 px-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#3C0366] focus:ring-0 transition-all outline-none font-medium text-gray-800"
                          required
                        >
                          {accounts.length === 0 ? (
                            <option value="">No accounts available</option>
                          ) : (
                            accounts.map(acc => (
                              <option key={acc.id} value={acc.accountNumber}>
                                {acc.accountNumber} - ({acc.accountType}) - ETB {acc.balance.toLocaleString()}
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    )}

                    {/* RECEIVER ACCOUNT - Shown for Transfer, Deposit, and Cash Transfer TO account */}
                    {(activeTab === 'transfer' || activeTab === 'deposit' || (activeTab === 'cash-transfer' && !formData.senderAccountNumber)) && (
                      <div className="space-y-2">
                        <Label className="text-sm font-bold text-gray-700 ml-1">
                          {activeTab === 'deposit' ? 'Target Account Number' : 'Recipient Account Number'}
                        </Label>
                        <div className="relative">
                          <Input 
                            name="receiverAccountNumber"
                            placeholder="Enter account number"
                            value={formData.receiverAccountNumber}
                            onChange={handleInputChange}
                            className="h-14 pl-12 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#3C0366] transition-all"
                            required
                          />
                          <Receipt className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-gray-700 ml-1">Amount (ETB)</Label>
                      <div className="relative">
                        <Input 
                          name="amount"
                          type="number"
                          placeholder="0.00"
                          value={formData.amount}
                          onChange={handleInputChange}
                          className="h-14 pl-12 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#3C0366] transition-all font-black text-xl text-[#3C0366]"
                          required
                          min="0.1"
                          step="0.01"
                        />
                        <Banknote className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-400 font-medium ml-1">Transaction fees may apply depending on your account type.</p>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-gray-700 ml-1">Reference / Description (Optional)</Label>
                      <Input 
                        name="description"
                        placeholder="What is this for?"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="h-14 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#3C0366] transition-all"
                      />
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full h-16 bg-[#3C0366] hover:bg-[#C420E8] text-white rounded-2xl text-lg font-bold shadow-xl shadow-[#3C0366]/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Processing Transaction...
                          </>
                        ) : (
                          <>
                            Confirm {tabs.find(t => t.id === activeTab)?.label}
                            <Send className="h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-4 space-y-6">
            <Card className="rounded-3xl border-none shadow-xl bg-gray-50 border border-gray-100">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#3C0366] flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-[#C420E8]" />
                  Safety Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 space-y-4">
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3C0366] mt-1.5 shrink-0" />
                  <p>Always double-check the recipient&apos;s account number before confirming.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3C0366] mt-1.5 shrink-0" />
                  <p>Large transactions may require additional verification via SMS OTP.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3C0366] mt-1.5 shrink-0" />
                  <p>Never share your digital banking PIN or password with anyone.</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-[#FFDF20]/10 p-6 rounded-3xl border border-[#FFDF20]/30">
              <h4 className="font-bold text-[#3C0366] mb-2 flex items-center gap-2">
                <Banknote className="h-4 w-4" />
                Limits & Fees
              </h4>
              <ul className="text-xs space-y-2 text-gray-700 font-medium">
                <li className="flex justify-between">
                  <span>Daily Transfer Limit:</span>
                  <span className="font-bold">ETB 100,000.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Withdrawal Fee:</span>
                  <span className="font-bold">ETB 5.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Deposit Fee:</span>
                  <span className="font-bold text-green-600">Free</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
