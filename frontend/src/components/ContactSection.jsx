import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Replace this with API call
  };

  return (
    <section className="w-full flex justify-center items-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-500 mb-6">
              We’d love to hear from you. Send us a message below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="pl-10 min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

export default ContactSection;