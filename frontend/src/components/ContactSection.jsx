import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-black py-20 px-6 flex justify-center items-center">
      <div className="w-full max-w-6xl rounded-3xl border border-zinc-800 bg-[#0b0b0b] p-10 md:p-16 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-14">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-5xl font-bold text-white mb-10">
              Get in touch.
            </h1>

            <form className="space-y-6">
              <div>
                <label className="text-zinc-400 text-sm">Name</label>

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full mt-2 bg-transparent border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-zinc-400 text-sm">Email</label>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mt-2 bg-transparent border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-zinc-400 text-sm">Phone</label>

                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full mt-2 bg-transparent border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-zinc-400 text-sm">Message</label>

                <textarea
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full mt-2 bg-transparent border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition-all text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center space-y-10">
            <div className="flex gap-4">
              <MapPin className="text-white mt-1" size={24} />

              <div>
                <h3 className="text-2xl text-white font-semibold">Address</h3>

                <p className="text-zinc-400 mt-2">Your address here</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-white mt-1" size={24} />

              <div>
                <h3 className="text-2xl text-white font-semibold">E mail</h3>

                <p className="text-zinc-400 mt-2">example@email.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-white mt-1" size={24} />

              <div>
                <h3 className="text-2xl text-white font-semibold">Phone</h3>

                <p className="text-zinc-400 mt-2">+91 9876543210</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-white font-semibold mb-5">
                Follow Us
              </h3>

              <div className="flex gap-4">
                <div className="bg-zinc-800 hover:bg-orange-500 transition-all p-3 rounded-full cursor-pointer">
                  <Instagram className="text-white" />
                </div>

                <div className="bg-zinc-800 hover:bg-orange-500 transition-all p-3 rounded-full cursor-pointer">
                  <Facebook className="text-white" />
                </div>

                <div className="bg-zinc-800 hover:bg-orange-500 transition-all p-3 rounded-full cursor-pointer">
                  <Youtube className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
