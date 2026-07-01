import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_hguh42d";
const TEMPLATE_ID = "template_cf7j3z2";
const PUBLIC_KEY = "qGgJQ8Jxqo7GMJr6D";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
          zIndex: 1000,
        }}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1001,
          width: "min(480px, 92vw)",
          background: "#0D0D0D",
          border: "1px solid rgba(192, 132, 252, 0.25)",
          borderRadius: "16px",
          padding: "2rem",
          boxShadow: "0 0 60px rgba(124, 58, 237, 0.3)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
          <div>
            <p style={{ color: "#C084FC", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
              ✳ Contact
            </p>
            <h2 id="modal-title" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 800, fontFamily: "Antonio, sans-serif", textTransform: "uppercase", margin: 0 }}>
              On travaille ensemble ?
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer"
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.5)",
              fontSize: "1.5rem",
              cursor: "pointer",
              lineHeight: 1,
              padding: "0.25rem",
              marginLeft: "1rem",
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✳</div>
            <p style={{ color: "#C084FC", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>
              Message envoyé !
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
              Je te réponds sous 24h.
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: "1.5rem",
                padding: "0.6rem 1.5rem",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #C084FC, #7C3AED)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Fermer
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label style={labelStyle}>Ton prénom</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Marie"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Ton email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="marie@monentreprise.fr"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Ton projet</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Dis-moi ce que tu cherches..."
                style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
              />
            </div>

            {status === "error" && (
              <p style={{ color: "#f87171", fontSize: "0.85rem", margin: 0 }}>
                Une erreur s'est produite, réessaie ou écris-moi sur Instagram.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                padding: "0.85rem",
                borderRadius: "999px",
                background: status === "sending"
                  ? "rgba(192,132,252,0.3)"
                  : "linear-gradient(135deg, #C084FC, #7C3AED)",
                color: "#fff",
                border: "none",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                fontWeight: 700,
                fontSize: "1rem",
                transition: "opacity 0.2s",
              }}
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer →"}
            </button>
          </form>
        )}
      </div>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "rgba(255,255,255,0.6)",
  fontSize: "0.8rem",
  marginBottom: "0.4rem",
  letterSpacing: "0.05em",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(192,132,252,0.2)",
  borderRadius: "8px",
  padding: "0.75rem 1rem",
  color: "#fff",
  fontSize: "0.95rem",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};
