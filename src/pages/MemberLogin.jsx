import { Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function MemberLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/dcb6c81e0_atlglobal_org_ATL-Global-Logo-2-256x61_65470698.png"
            alt="ATL Global"
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="bg-white border border-border p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 border border-gold/40 flex items-center justify-center">
              <Lock className="w-4 h-4 text-gold" />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold text-navy leading-none">Member Portal</h1>
              <p className="text-muted-foreground text-xs mt-1">For ATL Global members only</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="email" className="text-[10px] font-bold tracking-widest uppercase text-navy mb-2 block">Email Address</Label>
              <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required className="border-border focus:border-gold rounded-none h-12" />
            </div>
            <div>
              <Label htmlFor="password" className="text-[10px] font-bold tracking-widest uppercase text-navy mb-2 block">Password</Label>
              <Input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••••" required className="border-border focus:border-gold rounded-none h-12" />
            </div>
            <div className="flex items-center justify-end">
              <a href="#" className="text-xs text-gold hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full bg-navy text-white py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-navy/20">
              Access Portal
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-xs">Not yet a member?{" "}
              <Link to="/join-us" className="text-gold hover:underline font-semibold">Apply to Join ATL</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}