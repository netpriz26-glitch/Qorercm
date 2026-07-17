import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b1220",
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(37,99,235,0.35), transparent 55%), radial-gradient(circle at 85% 85%, rgba(6,182,212,0.28), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 20,
              backgroundImage: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              color: "#ffffff",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            Q
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#ffffff" }}>
            {siteConfig.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: 950,
          }}
        >
          {siteConfig.tagline}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#cbd5e1",
            maxWidth: 850,
          }}
        >
          {siteConfig.offer.headline}
        </div>
      </div>
    ),
    { ...size }
  );
}
