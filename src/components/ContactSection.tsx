import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast({ title: "Failed to send", description: err.message, variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="py-24">
      <div className="container max-w-4xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />
        <p className="text-muted-foreground font-body max-w-lg mb-10">
          I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5">
            <a href="mailto:moh.shahid2004@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
              <Mail size={18} className="text-primary" /> moh.shahid2004@mail.com
            </a>
            <a href="tel:+917339110968" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
              <Phone size={18} className="text-primary" /> +91 73391 10968
            </a>
            <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
              <MapPin size={18} className="text-primary" /> Nagercoil, Tamilnadu
            </div>
            <div className="pt-4">
              <p className="text-sm text-foreground font-display font-semibold mb-4">Follow me</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/Shahid-cs22" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/infoshahid" },
                  { icon: Twitter, label: "Twitter", href: "https://x.com/mohd_shahid04" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-secondary border-border font-body"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-secondary border-border font-body"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-secondary border-border font-body resize-none"
            />
            <Button type="submit" disabled={sending} className="w-full gap-2 font-display">
              <Send size={16} />
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
