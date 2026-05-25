import { ImageResponse } from "next/og";

export const alt =
  "Kortex Consulting — AI that knows your business. Built into your environment.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#07090C",
          color: "#E8E9F0",
          padding: "72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.7,
          }}
        />

        {/* Teal radial glow on the right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 55% at 78% 50%, rgba(94,234,212,0.20), transparent 65%)",
          }}
        />

        {/* Logo + wordmark, top-left */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="1.5"
              width="21"
              height="21"
              rx="4"
              stroke="#E8E9F0"
              strokeOpacity="0.35"
              strokeWidth="1"
              fill="none"
            />
            <line
              x1="5"
              y1="9"
              x2="19"
              y2="9"
              stroke="#E8E9F0"
              strokeOpacity="0.55"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
            <line
              x1="5"
              y1="15"
              x2="19"
              y2="15"
              stroke="#5EEAD4"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <circle cx="12" cy="15" r="2" fill="#5EEAD4" />
            <circle cx="12" cy="15" r="4" fill="#5EEAD4" fillOpacity="0.15" />
          </svg>
          <span
            style={{ fontSize: "30px", fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            Kortex
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            marginTop: "32px",
          }}
        >
          <div
            style={{
              fontSize: "96px",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              fontFamily: "serif",
            }}
          >
            AI that knows
          </div>
          <div
            style={{
              fontSize: "96px",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              fontFamily: "serif",
              fontStyle: "italic",
              color: "#5EEAD4",
              marginTop: "6px",
            }}
          >
            your business.
          </div>
          <div
            style={{
              fontSize: "26px",
              lineHeight: 1.4,
              color: "#B6BAC5",
              marginTop: "36px",
              maxWidth: "780px",
            }}
          >
            Custom AI &amp; Automation Solutions — engineered into your own
            systems and data. From small business to enterprise.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "20px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#8A8F9A",
            }}
          >
            kortexconsulting.com
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #2A2E42",
              background: "rgba(18,20,28,0.7)",
              borderRadius: "999px",
              padding: "10px 18px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#5EEAD4",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "14px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B6BAC5",
              }}
            >
              AI &amp; Automation Engineering
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
