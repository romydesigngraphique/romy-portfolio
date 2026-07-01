import { useState } from "react";
import ContactModal from "./-ContactModal";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "romy.design.graphique — Portfolio" },
      { tagName: "link", rel: "icon", type: "image/png", href: "/favicon.png" },
      { name: "description", content: "Portfolio de Romy, graphiste freelance à Poitiers. Identité visuelle et sites vitrines pour entrepreneurs locaux." },
      { property: "og:title", content: "romy.design.graphique — Portfolio" },
      { property: "og:description", content: "Identité visuelle et sites vitrines pour entrepreneurs locaux." },
    ],
  }),
  component: Index,
});

const Star = ({ className = "" }: { className?: string }) => (
  <span className={`inline-block ${className}`} aria-hidden>✳</span>
);

const logoR = { url: "/images/logo.png" };

const RLogo = ({ className = "" }: { className?: string }) => (
  <img src={logoR.url} alt="Logo romy.design.graphique" className={`inline-block rounded-full object-cover ${className}`} />
);

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#projets", label: "Projets" },
    { href: "#prestations", label: "Prestations" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <RLogo className="w-9 h-9 text-sm" />
          <span className="hidden sm:inline text-xs tracking-[0.25em] uppercase text-muted-foreground">romy.design.graphique</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium hover:text-foreground/60 transition">{l.label}</a>
          ))}
          <a href="#contact" className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-brand text-white hover:opacity-90 transition">
            Demander un devis
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-6 h-0.5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-white px-5 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-base">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-center font-semibold px-4 py-3 rounded-full bg-gradient-brand text-white">Demander un devis</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 pt-20">
      {/* gradient blobs */}
      <div aria-hidden className="absolute top-1/4 -left-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-50" style={{ background: "radial-gradient(circle, #ff7ab8 0%, transparent 70%)" }} />
      <div aria-hidden className="absolute bottom-10 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-50" style={{ background: "radial-gradient(circle, #b56cff 0%, transparent 70%)" }} />
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, #5b8cff 0%, transparent 70%)" }} />

      <div className="relative z-10 text-center max-w-6xl">
        <div className="flex items-center justify-center gap-4 text-xs md:text-sm tracking-[0.4em] uppercase text-foreground/80 mb-8">
          <Star />
          <span>romy.design.graphique</span>
          <Star />
        </div>
        <h1 className="font-mega font-bold uppercase leading-[0.85] tracking-tight text-[22vw] md:text-[18vw] lg:text-[15rem]">
          <span className="text-gradient">Portfolio</span>
        </h1>
        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Graphiste freelance à Poitiers. Identité visuelle & sites vitrines pour entrepreneurs qui veulent une image à la hauteur.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <a href="#projets" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-semibold text-sm tracking-wide hover:scale-[1.02] transition shadow-lg shadow-pink-200/50">
            Voir mes projets
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="font-display font-black uppercase text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none flex items-start gap-3">
      <Star className="text-gradient text-2xl md:text-4xl mt-1" />
      <span>{children}</span>
    </h2>
  );
}

function About() {
  return (
    <section className="px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
      <SectionTitle>Et si on faisait les présentations&nbsp;?</SectionTitle>
      <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/90">
          <p>
            Moi c'est <span className="text-gradient font-semibold">Romy</span>, graphiste freelance basée à Poitiers. J'ai travaillé 6 ans dans l'assistanat de direction où j'ai développé de bonnes compétences en gestion de projets et création de support de communication. J'ai adoré la partie créative. J'ai beaucoup appris sur le tas, mais j'ai voulu concrétiser mes connaissances en passant un BAC+2 graphiste multimédia en 2023.
          </p>
          <p>
            Mon truc à moi, c'est de créer des univers visuels qui ont du sens et qui donnent envie. Pas juste un joli logo, mais une image qui parle pour toi, qui attire les bonnes personnes et qui impose ta marque dans ton secteur.
          </p>
          <p>
            J'aime travailler avec les entrepreneurs passionnés, ceux qui savent ce qu'ils veulent transmettre mais qui n'arrivent pas encore à le montrer visuellement.
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-brand-soft border border-border flex items-center justify-center">
          {/* ↓ REMPLACE src="" par le chemin de ta photo, ex: src="/images/romy-photo.jpg" */}
          <img
            src="/images/romy-photo.jpg"
            alt="Photo de Romy"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <span className="absolute text-muted-foreground text-sm"></span>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/30" />
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
      <SectionTitle>Pourquoi je peux aider ta marque&nbsp;?</SectionTitle>
      <div className="mt-16 grid lg:grid-cols-2 gap-16">
        <div>
          <p style={{ fontFamily: "BulgaryRose", fontSize: "6rem", color: "#1A1A1A", marginLeft: "1.5rem", marginBottom: "-1.5rem" }} className="leading-none relative z-10">j'apporte</p>
          <div className="font-mega font-bold uppercase leading-[0.9] text-6xl md:text-7xl lg:text-8xl">
            <div>du style</div>
            <div className="text-gradient">du sens</div>
            <div>du design</div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="font-display font-black uppercase text-2xl md:text-3xl">Parce qu'un logo ne fait pas vendre.</h3>
            <p className="mt-3 text-foreground/80">Ce dont tu as besoin, c'est un système visuel pensé pour convertir.</p>
          </div>
          <ul className="space-y-3">
            {[
              "attire les bonnes personnes",
              "transmet instantanément les bonnes émotions",
              "renforce ta crédibilité au premier regard",
              "s'imprime dans la mémoire des gens",
            ].map(item => (
              <li key={item} className="flex gap-3 items-start">
                <Star className="text-gradient mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-display font-black uppercase text-2xl">Pourquoi ça marche&nbsp;?</h3>
            <p className="mt-3 text-foreground/80 leading-relaxed">
              Parce qu'une identité forte ne repose pas sur la chance ou l'intuition. Je construis ton univers visuel à partir de&nbsp;: la psychologie des couleurs, l'association typographique adaptée à ton positionnement, des symboles alignés avec tes valeurs et ton secteur, un univers visuel cohérent sur tous les supports, une hiérarchie graphique pensée pour capter l'attention.
            </p>
          </div>
          <p className="text-xl md:text-2xl font-display font-black uppercase text-gradient leading-tight">
            Chaque décision graphique est justifiée et orientée business.
          </p>
        </div>
      </div>
    </section>
  );
}

type Project = {
  num: string;
  name: string;
  desc: string;
  palette: string[];
  bgClass: string;
  textClass: string;
  mockups: string[]; // mettre le chemin de tes images ici, ex: "/images/meca1.jpg"
};

const PROJECTS: Project[] = [
  {
    num: "PROJET 01",
    name: "MECA TECH AUTO",
    desc: "Garage automobile toutes marques. Inspirée par la mécanique de précision. Un logo minimaliste et immédiatement reconnaissable.",
    palette: ["#0a0a0a", "#1f1f1f", "#c4c4c4", "#ff3b30"],
    bgClass: "bg-[#0a0a0a]",
    textClass: "text-white",
    mockups: ["/images/mecatech-1.png", "/images/mecatech-2.png", "/images/mecatech-3.png"], // ← remplace "" par "/images/meca1.jpg" etc.
  },
  {
    num: "PROJET 02",
    name: "NOVA",
    desc: "Une identité visuelle céleste, raffinée et apaisante pour une marque de bougies artisanales qui transforme chaque instant en rituel de douceur.",
    palette: ["#1B2A4A", "#2c3e63", "#C9A96E", "#f0e3c7"],
    bgClass: "bg-[#1B2A4A]",
    textClass: "text-white",
    mockups: ["/images/nova-1.png", "/images/nova-2.png", "/images/nova-3.png"], // ← remplace "" par "/images/nova1.jpg" etc.
  },
  {
    num: "PROJET 03",
    name: "ATELIER ARTÉA",
    desc: "Ateliers d'aquarelle à Poitiers. Une identité douce et naturelle, entre créativité et bienveillance. Un site clair et accueillant, pensé pour inspirer la détente et la confiance.",
    palette: ["#1B2A4A", "#7ba7c9", "#cfe2ee", "#f5efe4"],
    bgClass: "bg-[#cfe2ee]",
    textClass: "text-[#1B2A4A]",
    mockups: ["/images/artea-1.png", "/images/artea-2.png", "/images/artea-3.png"], // ← remplace "" par "/images/artea1.jpg" etc.
  },
];

function Projects() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="projets" className="px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
      <SectionTitle>Projets</SectionTitle>
      <div className="mt-16 space-y-6">
        {PROJECTS.map((p, i) => {
          const isOpen = open === i;
          return (
            <article key={p.name} className={`rounded-3xl overflow-hidden border border-border transition-all ${isOpen ? "shadow-xl" : ""}`}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className={`w-full ${p.bgClass} ${p.textClass} px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left`}
              >
                <div className="flex items-baseline gap-6 flex-wrap">
                  <span className="text-xs tracking-[0.3em] opacity-70">{p.num}</span>
                  <h3 className="font-display font-black uppercase text-3xl md:text-5xl">{p.name}</h3>
                </div>
                <span className={`shrink-0 w-10 h-10 rounded-full border border-current flex items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>
              {isOpen && (
                <div className={`${p.bgClass} ${p.textClass} px-6 md:px-10 pb-10`}>
                  <p className="max-w-2xl opacity-90 leading-relaxed mb-8">{p.desc}</p>
                  <div className="flex gap-2 mb-8">
                    {p.palette.map(c => (
                      <div key={c} className="w-12 h-12 rounded-full border border-white/20" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {p.mockups.map((src, n) => (
                      <div key={n} className="aspect-[4/3] rounded-2xl overflow-hidden">
                        {src
                          ? <img src={src} alt={`${p.name} mockup ${n + 1}`} className="w-full h-full object-cover" />
                          : <span className="opacity-60">📷 Mockup {n + 1}</span>
                        }
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
      <div className="mt-12 flex justify-center">
        <a href="#contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-semibold text-sm">Demander un devis →</a>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { t: "Prise de contact", d: "Tu m'envoies un message (DM, mail ou WhatsApp). Je te réponds sous 24h et je pose quelques questions pour cerner ton activité." },
    { t: "Appel découverte (15-20 min)*", d: "On se retrouve en appel pour qu'on parle de ton univers, tes références, ce que tu veux transmettre. Je te propose ensuite la prestation qui correspond." },
    { t: "Devis & validation", d: "Je t'envoie un devis clair. Tu valides et règles un acompte de 50% pour que je démarre." },
    { t: "Création", d: "Je travaille sur ta prestation et je te livre une première version. Tu disposes de 2 à 3 ajustements selon la formule choisie." },
    { t: "Livraison & suivi", d: "Je te livre tous les fichiers finaux et t'explique comment les utiliser. Le solde est réglé à la livraison." },
  ];
  return (
    <section id="process" className="px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto rounded-3xl" style={{ backgroundColor: "var(--cream)" }}>
      <div className="flex items-end justify-between flex-wrap gap-4">
        <SectionTitle>Processus client</SectionTitle>
        <p style={{ fontFamily: "BulgaryRose", color: "#1A1A1A", fontSize: "5rem", lineHeight: "1" }} className="self-center mt-6"></p>
      </div>
      <div className="mt-16 grid lg:grid-cols-2 gap-12">
       <div className="rounded-2xl overflow-hidden">
  <img src="/images/CG.png" alt="Charte graphique" className="w-full h-full object-cover rounded-2xl" />
</div>
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <li key={s.t} className="flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg bg-gradient-brand text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h4 className="font-display font-black uppercase text-xl tracking-tight">{s.t}</h4>
                <p className="text-foreground/80 mt-1 leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-8 text-sm text-muted-foreground italic">*selon prestation choisie</p>
    </section>
  );
}

const ALACARTE = [
  ["Logo simple (2 propositions, 2 révisions)", "100€", "2-3 jours"],
  ["Identité visuelle (Logo, palette, typographies, guide)", "200€", "3-5 jours"],
  ["Bannière réseaux sociaux (FB, LinkedIn, YouTube)", "50€", "1-2 jours"],
  ["3 publications réutilisables (Instagram, FB ou LinkedIn)", "70€", "2-3 jours"],
  ["Flyer A5 recto/verso", "70€", "2-3 jours"],
  ["Carte de visite recto/verso", "60€", "2-3 jours"],
  ["Google Business — refonte complète (photos & infos)", "90€", "2-3 jours"],
  ["Site vitrine clé en main (SEO & optimisé mobile)", "350€", "7-10 jours"],
];

function Prestations() {
  return (
    <section id="prestations" className="px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
      <SectionTitle>Mes prestations</SectionTitle>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
        Des prestations pensées pour les entrepreneurs locaux qui veulent enfin une image pro, sans se prendre la tête.
      </p>

      <div className="mt-12">
        <h3 className="font-display font-black uppercase text-2xl md:text-3xl mb-6 tracking-wide">À la carte</h3>
        <div className="rounded-3xl bg-[#1e1e1e] text-white overflow-hidden">
          <div className="hidden md:grid grid-cols-[1fr_120px_140px] gap-4 px-8 py-5 text-xs tracking-[0.25em] uppercase text-white/50 border-b border-white/10">
            <div>Prestation</div><div>Prix</div><div>Délai</div>
          </div>
          {ALACARTE.map(([p, pr, d]) => (
            <div key={p} className="grid md:grid-cols-[1fr_120px_140px] gap-2 md:gap-4 px-6 md:px-8 py-5 border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition">
              <div className="flex gap-3 items-start">
                <span className="text-pink-300">✦</span>
                <span className="text-sm md:text-base">{p}</span>
              </div>
              <div className="text-gradient font-display font-bold text-xl md:pl-0 pl-7">{pr}</div>
              <div className="text-white/60 text-sm md:pl-0 pl-7">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Pack = { name: string; price: string; old: string; off: string; tag: string; items: string[] };
const PACKS: Pack[] = [
  {
    name: "Je démarre", price: "200€", old: "236€", off: "-15%",
    tag: "Pour enfin avoir une image à la hauteur de ton travail.",
    items: [
      "Logo — 2 propositions, 2 révisions",
      "Carte de visite recto/verso prête à imprimer",
      "Bannière réseaux sociaux (FB + LinkedIn)",
      "Photo de profil pro cohérente",
      "Livré en 5 à 7 jours",
    ],
  },
  {
    name: "Positionnement", price: "160€", old: "236€", off: "-32%",
    tag: "Tu as déjà un logo mais personne ne te trouve en ligne.",
    items: [
      "Refonte complète Google Business",
      "Mots-clés locaux pour remonter sur Google",
      "Bannière réseaux sociaux cohérente",
      "Photo de profil pro retravaillée",
      "Optimisation photos & description",
      "3 templates publications réseaux réutilisables",
      "Livré en 3 à 5 jours",
    ],
  },
  {
    name: "Clé en main", price: "500€", old: "638€", off: "-22%",
    tag: "La totale pour partir sur une image pro et être présent en ligne.",
    items: [
      "Identité visuelle complète — 2 déclinaisons de logo, 2 ajustements, palette, typographies, guide (SVG, PNG)",
      "Site vitrine — accueil + services + contact",
      "Adapté mobile & tablette",
      "Optimisé pour apparaître sur Google",
      "Refonte Google Business complète",
      "Formulaire de contact intégré",
      "Livré en 10 à 14 jours",
    ],
  },
];

function Packs() {
  return (
    <section className="px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <SectionTitle>Les packs</SectionTitle>
      </div>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
        L'essentiel du graphisme réuni dans des formules claires et accessibles.
      </p>

      <div className="relative mt-16">
        <div aria-hidden className="hidden lg:block absolute top-1/2 left-8 right-8 h-px bg-gradient-brand opacity-40" />
        <div className="relative grid md:grid-cols-3 gap-6">
          {PACKS.map(p => (
            <div key={p.name} className="rounded-3xl bg-[#1e1e1e] text-white p-7 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.3em] uppercase text-white/50">Pack</span>
                <span className="px-3 py-1 rounded-full bg-gradient-brand text-xs font-bold">{p.off}</span>
              </div>
              <h3 className="font-display font-black uppercase text-3xl mb-3">{p.name}</h3>
              <p className="text-white/70 text-sm mb-6 min-h-[3rem]">{p.tag}</p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-gradient font-display font-black text-5xl">{p.price}</span>
                <span className="text-white/40 line-through text-lg">{p.old}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.items.map(it => (
                  <li key={it} className="flex gap-3 text-sm text-white/90">
                    <span className="text-pink-300 shrink-0">✓</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-auto inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-brand text-white font-semibold text-sm hover:scale-[1.02] transition">
                Je choisis ce pack →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ onOpen }: { onOpen: () => void }) {
  return (
    <section id="contact" className="relative px-5 md:px-10 py-28 md:py-40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-gradient-brand" />
      <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 30%, #fff 0%, transparent 50%)" }} />
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <Star className="text-4xl mb-6 inline-block" />
        <h2 className="font-mega font-bold uppercase leading-[0.85] tracking-tight" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
          On travaille<br /><span className="mt-4 block">ensemble&nbsp;?</span>&nbsp;
        </h2>
        <p className="mt-8 text-lg md:text-xl text-white/90">
          Envoie-moi un message, je réponds sous 24h.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button onClick={onOpen} className="px-8 py-4 rounded-full bg-white text-foreground font-semibold hover:scale-[1.03] transition">
  Me contacter
</button>
        </div>
        <div className="mt-10 text-sm text-white/90 text-center">
  <a href="https://instagram.com/romy.design.graphique" target="_blank" rel="noreferrer" className="hover:text-white">@romy.design.graphique</a>
</div>
    </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 md:px-10 py-10 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <RLogo className="w-8 h-8 text-xs text-foreground" />
          <span>© romy.design.graphique — Tous droits réservés</span>
        </div>
        <span>Poitiers, France</span>
      </div>
    </footer>
  );
}

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Why />
        <Projects />
        <Process />
        <Prestations />
        <Packs />
       <Contact onOpen={() => setModalOpen(true)} />
          <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </main>
        <Footer />
    </div>
  );
}
