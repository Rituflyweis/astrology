import cosmicFlowImage from "../../assets/cosmicflowimage.png";

function AuthFrame({ onBack, onClose, title, subtitle, children, fullWidth = false }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${cosmicFlowImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Auth card */}
      <div className="relative z-10 w-full max-w-4xl mx-4 bg-white/95 rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.4)] overflow-hidden">
        {/* Header row */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <button
            type="button"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
            onClick={onBack}
          >
            <span className="text-lg">&#8592;</span>
            <span className="hidden sm:inline">Back</span>
          </button>
          <button
            type="button"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Layout */}
        {fullWidth ? (
          <div className="px-8 py-8">{children}</div>
        ) : (
          <div className="px-8 py-8 grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-8 items-start">
            <div className="space-y-3 text-left md:pr-4">
              <h1 className="text-2xl sm:text-3xl font-serif text-slate-900">
                {title}
              </h1>
              {subtitle && (
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            <div>{children}</div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AuthFrame;


