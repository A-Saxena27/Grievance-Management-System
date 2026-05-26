import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#e9eef9] py-20 px-6 flex justify-center">
      <div className="w-full max-w-7xl">
        {/* CONTACT CONTAINER */}
        <div className="bg-[#111827] rounded-[32px] overflow-hidden shadow-2xl border border-[#1f2937]">
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="p-10 md:p-16">
              <h1 className="text-5xl font-bold text-white mb-12">
                Get in touch.
              </h1>

              <form className="space-y-6">
                <div>
                  <label className="text-gray-400 text-sm">Name</label>

                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full mt-2 bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm">Email</label>

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mt-2 bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm">Phone</label>

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full mt-2 bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm">Message</label>

                  <textarea
                    rows="5"
                    placeholder="Enter your message"
                    className="w-full mt-2 bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-gradient-to-br from-[#1e293b] to-[#111827] p-10 md:p-16 flex flex-col justify-center">
              <div className="space-y-12">
                <div className="flex items-start gap-5">
                  <div className="bg-blue-600/20 p-4 rounded-2xl">
                    <MapPin className="text-blue-400" size={24} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      Address
                    </h3>

                    <p className="text-gray-400 mt-2 leading-relaxed">
                      KIIT University, Bhubaneswar, Odisha, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-blue-600/20 p-4 rounded-2xl">
                    <Mail className="text-blue-400" size={24} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white">Email</h3>

                    <p className="text-gray-400 mt-2">
                      support@smartgrievance.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-blue-600/20 p-4 rounded-2xl">
                    <Phone className="text-blue-400" size={24} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white">Phone</h3>

                    <p className="text-gray-400 mt-2">+91 9876543210</p>
                  </div>
                </div>

                {/* EXTRA CARD */}
                <div className="mt-10 bg-[#0f172a] border border-gray-800 rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Smart University
                  </h2>

                  <p className="text-gray-400 leading-relaxed">
                    A centralized grievance platform helping students track
                    complaints, communicate efficiently, and improve campus
                    support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
