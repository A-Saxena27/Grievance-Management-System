import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="w-full py-16 px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold mb-2">Contact Us</h2>

        <p className="text-gray-500 mb-6">We'd love to hear from you.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 pl-10"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 pl-10"
            />
          </div>

          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 pl-10 min-h-[120px]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg py-3 hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
