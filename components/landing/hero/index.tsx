import { ArrowRight, Send, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-20 ">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-float mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
          <span className="text-xs text-zinc-300 tracking-wide font-light ">
            {/* Customer support, resolved in one minute. */}
            version 1.0.0 is avaiable now
          </span>
        </div>

        <h1 className="text-5xl md:text-[62px] font-medium tracking-tight text-white mb-8">
          <span className="md:whitespace-nowrap">
            {/* Support that feels human, */}
            Instant, human-friendly support.
          </span>
          <br />
          <span className="text-zinc-500">powered by AI.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Instantly resolved customer questions with an assistant that reads
          your docs and speaks with empathy. No robotic replies, just answers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
          <button className="h-11 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2 cursor-pointer">
            Start for free
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="h-11 px-8 rounded-full border border-white/20 text-zinc-300 text-sm font-medium hover:border-white transition-all hover:text-white bg-black backdrop-blur-sm cursor-pointer">
            View demo
          </button>
        </div>
      </div>

      {/* floating chat interface  */}
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Glow background */}
        <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="rounded-2xl p-1 md:p-2 relative overflow-hidden ring-1 ring-white/10 bg-[#0a0a0a] shadow-2xl">
          <div className="flex flex-col h-[500px] md:h-[600px] w-full bg-[#0a0a0e] rounded-xl overflow-hidden">
            {/* Header */}
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0E0E12] shrink-0">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-zinc-300">
                  OneMinuteCare Inc.
                </span>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-zinc-950/30">
              {/* Agent Message */}
              <div className="flex w-full items-start gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="https://res.cloudinary.com/djbpo9xg5/image/upload/v1725030217/qnheigwgqbwldduangmo.jpg"
                    alt="Support agent"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <div className="p-4 rounded-2xl rounded-tl-sm text-sm leading-relaxed shadow-md bg-white text-zinc-900">
                    Hi there! How can I help you today?
                  </div>

                  {/* Quick Replies */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["FAQ", "Pricing", "Support"].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-xs font-medium cursor-pointer hover:bg-zinc-800 transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* User Message */}
              <div className="flex w-full justify-end">
                <div className="flex max-w-[85%] gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/5 bg-zinc-800">
                    <User className="w-4 h-4 text-zinc-400" />
                  </div>

                  <div className="p-4 rounded-2xl rounded-tr-sm text-sm leading-relaxed shadow-sm bg-zinc-800 text-zinc-200">
                    I need some information about OneMinuteCare
                  </div>
                </div>
              </div>

              <div className="flex w-full items-start gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="https://res.cloudinary.com/djbpo9xg5/image/upload/v1725030217/qnheigwgqbwldduangmo.jpg"
                    alt="Support agent"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <div className="p-4 rounded-2xl rounded-tl-sm text-sm leading-relaxed shadow-md bg-white text-zinc-900">
                    OneMinute Care is an intregrated ecosystem designed to
                    enhance developer efficiency. It includes tools like
                    OneMinute logs for real-time monitoring and community
                    support.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#050509] border-t border-white/5 shrink-0">
              <div className="relative">
                <div className="min-h-12.5 w-full px-4 py-3 text-sm bg-zinc-900/50 border border-white/10 rounded-xl text-zinc-500 flex items-center justify-between gap-2">
                  <textarea
                    rows={1}
                    placeholder="Type a message..."
                    className="
        w-full resize-none px-4 py-3 text-sm
        bg-zinc-900/50 border border-white/10
        rounded-xl text-zinc-200
        focus:outline-none focus:ring-2 focus:ring-indigo-500/40
      "
                  />
                  <button className="w-12 h-11 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500 cursor-pointer">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
