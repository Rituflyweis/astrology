import { useNavigate } from "react-router-dom";
import pandit1 from "../../assets/pandit1.png";
import pandit2 from "../../assets/pandit2.png";
import pandit3 from "../../assets/pandit3.png";

function ChatPage() {
  const navigate = useNavigate();
  return (
    <section className="py-10 min-h-screen bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.12)] overflow-hidden flex min-h-[600px]">
          {/* Chats sidebar */}
          <aside className="w-64 border-r border-slate-100 bg-slate-50 flex flex-col">
            <div className="px-5 py-4 border-b border-slate-100">
              <h2 className="text-sm font-semibold text-slate-800">Chats</h2>
            </div>

            <div className="flex-1 overflow-y-auto">
              {[
                { id: 1, name: "Aria", role: "Astrologer · 2h", avatar: pandit1 },
                { id: 2, name: "Dr. Maya", role: "Ayurveda Doctor · 1d", avatar: pandit2 },
                { id: 3, name: "Sarah", role: "Vedic Astrologer · 3d", avatar: pandit3 },
              ].map((c, idx) => (
                <button
                  key={c.id}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left text-xs ${
                    idx === 0
                      ? "bg-white shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                      : "hover:bg-slate-100"
                  } transition`}
                >
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 text-sm">{c.name}</p>
                    <p className="text-[11px] text-slate-500">{c.role}</p>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* Conversation panel */}
          <div className="flex-1 flex flex-col bg-[#F7F7FB]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
              <div className="space-y-0.5">
                <p className="text-xs text-slate-500">Live Chat with</p>
                <p className="text-base font-semibold text-slate-900">
                  Astrologer
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-xs">
              {/* Astrologer message 1 */}
              <div className="flex items-start gap-3 max-w-md">
                <img
                  src={pandit1}
                  alt="Aria"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="space-y-1">
                  <p className="text-[11px] text-slate-500">Aria</p>
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                    <p className="text-xs text-slate-700">
                      Hello! I&apos;m Aria, your astrologer. How can I assist you
                      today?
                    </p>
                  </div>
                </div>
              </div>

              {/* User message 1 */}
              <div className="flex justify-end">
                <div className="flex items-end gap-3 max-w-md">
                  <div className="rounded-2xl bg-[#4f46e5] px-4 py-3 text-white shadow-md">
                    <p className="text-xs">
                      Hi Aria, I&apos;m curious about my career prospects for the
                      next year. Can you provide some insights based on my birth
                      chart?
                    </p>
                  </div>
                  <img
                    src={pandit3}
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Astrologer message 2 */}
              <div className="flex items-start gap-3 max-w-md">
                <img
                  src={pandit1}
                  alt="Aria"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="space-y-1">
                  <p className="text-[11px] text-slate-500">Aria</p>
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                    <p className="text-xs text-slate-700">
                      Of course! To give you the most accurate reading, I&apos;ll
                      need your birth date, time, and location. Once I have that,
                      I can analyze your chart and discuss your career prospects.
                    </p>
                  </div>
                </div>
              </div>

              {/* User message 2 */}
              <div className="flex justify-end">
                <div className="flex items-end gap-3 max-w-md">
                  <div className="rounded-2xl bg-[#4f46e5] px-4 py-3 text-white shadow-md">
                    <p className="text-xs">
                      My birth date is July 15, 1998, at 3:30 PM in San
                      Francisco, CA.
                    </p>
                  </div>
                  <img
                    src={pandit3}
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Astrologer long message */}
              <div className="flex items-start gap-3 max-w-md">
                <img
                  src={pandit1}
                  alt="Aria"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="space-y-1">
                  <p className="text-[11px] text-slate-500">Aria</p>
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                    <p className="text-xs text-slate-700">
                      Thank you! Let me take a look at your chart. Based on your
                      birth chart, it appears you have a strong alignment in your
                      career houses, suggesting significant opportunities for
                      growth and advancement in the coming year. There&apos;s
                      also a positive focus on leadership, meaning that
                      communication and networking will be key to building strong
                      professional relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Input area */}
            <div className="border-t border-slate-200 bg-white px-6 py-4 space-y-3">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 h-10 rounded-full border border-slate-200 px-4 text-xs outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
                />
                <button
                  type="button"
                  className="w-9 h-9 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white flex items-center justify-center text-sm shadow-[0_10px_20px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(79,70,229,0.65)] transition"
                >
                  ➤
                </button>
              </div>

              <div className="flex flex-wrap gap-3 text-[11px]">
                <button
                  type="button"
                  className="px-4 h-8 rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition"
                >
                  Daily Horoscope
                </button>
                <button
                  type="button"
                  className="px-4 h-8 rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition"
                >
                  Ask a Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatPage;


