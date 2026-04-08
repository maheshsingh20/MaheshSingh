import { useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
  symbol: string;
  type: "dot" | "symbol";
}

const SYMBOLS = [
  "{ }", "=>", "[]", "()", "//", "&&", "||", "++",
  "01", "10", "λ", "∑", "fn", "AI", "</>", "git",
  "npm", "api", "sql", "ssh", "∞", "≡", "⊕", "π",
];

export default function ProjectsBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => { themeRef.current = theme; }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, raf = 0;

    const setSize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W;
      canvas.height = H;
    };
    setSize();

    const COUNT = Math.max(30, Math.floor((W * H) / 14000));
    const nodes: Node[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2.5 + 1.5,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.025 + 0.008,
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      type: Math.random() > 0.45 ? "dot" : "symbol",
    }));

    const MAX_DIST = 140;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, W, H);

      const dark = themeRef.current === "dark";
      // Same palette both modes — indigo/cyan, just opacity differs
      const nodePrimary = dark ? "99,102,241" : "79,70,229";
      const nodeAccent = dark ? "34,211,238" : "6,182,212";
      const lineRgb = dark ? "99,102,241" : "99,102,241";
      const lineMaxAlpha = dark ? 0.18 : 0.10;
      const dotAlphaScale = dark ? 1 : 0.7;
      const symAlphaScale = dark ? 0.55 : 0.28;

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > MAX_DIST) continue;
          const alpha = (1 - d / MAX_DIST) * lineMaxAlpha;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${lineRgb},${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // Nodes
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < -30) n.x = W + 30;
        if (n.x > W + 30) n.x = -30;
        if (n.y < -30) n.y = H + 30;
        if (n.y > H + 30) n.y = -30;

        const po = 0.65 + 0.35 * Math.sin(n.pulse);

        if (n.type === "dot") {
          // outer glow
          const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 5);
          g.addColorStop(0, `rgba(${nodePrimary},${0.25 * po * dotAlphaScale})`);
          g.addColorStop(1, `rgba(${nodePrimary},0)`);
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 5, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
          // core dot — alternate indigo / cyan by index
          const core = Math.sin(n.pulse * 0.3) > 0 ? nodePrimary : nodeAccent;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${core},${0.8 * po * dotAlphaScale})`;
          ctx.fill();
        } else {
          ctx.font = `600 ${9 + n.radius * 1.8}px 'JetBrains Mono','Fira Code',monospace`;
          ctx.fillStyle = `rgba(${nodeAccent},${po * symAlphaScale})`;
          ctx.fillText(n.symbol, n.x, n.y);
        }
      }
    };

    tick();

    const ro = new ResizeObserver(setSize);
    ro.observe(canvas.parentElement!);

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
