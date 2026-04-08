export default function SectionBg({ delay = "0s" }: { delay?: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {/* Fine grid — same intensity both modes */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Primary scan line — indigo, same opacity both modes */}
      <div
        className="absolute left-0 right-0 h-[2px]
          bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent
          animate-[scan_8s_linear_infinite]"
        style={{ animationDelay: delay }}
      />

      {/* Secondary scan line — cyan, offset by half period */}
      <div
        className="absolute left-0 right-0 h-[1px]
          bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent
          animate-[scan_8s_linear_infinite]"
        style={{ animationDelay: `calc(${delay} + 4s)` }}
      />

      {/* Left edge glow */}
      <div className="absolute top-0 bottom-0 left-0 w-[200px]
        bg-gradient-to-r from-indigo-400/8 to-transparent" />

      {/* Right edge glow */}
      <div className="absolute top-0 bottom-0 right-0 w-[200px]
        bg-gradient-to-l from-cyan-400/8 to-transparent" />

    </div>
  );
}
