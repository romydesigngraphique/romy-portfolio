import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
const Star = ({
  className = ""
}) => /* @__PURE__ */ jsx("span", { className: `inline-block ${className}`, "aria-hidden": true, children: "✳" });
const logoR = {
  url: "/images/logo.png"
};
const RLogo = ({
  className = ""
}) => /* @__PURE__ */ jsx("img", { src: logoR.url, alt: "Logo romy.design.graphique", className: `inline-block rounded-full object-cover ${className}` });
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [{
    href: "#projets",
    label: "Projets"
  }, {
    href: "#prestations",
    label: "Prestations"
  }, {
    href: "#process",
    label: "Process"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-border/60", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("a", { href: "#hero", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(RLogo, { className: "w-9 h-9 text-sm" }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline text-xs tracking-[0.25em] uppercase text-muted-foreground", children: "romy.design.graphique" })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [
        links.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, className: "text-sm font-medium hover:text-foreground/60 transition", children: l.label }, l.href)),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "text-sm font-semibold px-4 py-2 rounded-full bg-gradient-brand text-white hover:opacity-90 transition", children: "Demander un devis" })
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(!open), className: "md:hidden p-2", "aria-label": "Menu", children: [
        /* @__PURE__ */ jsx("div", { className: "w-6 h-0.5 bg-foreground mb-1.5" }),
        /* @__PURE__ */ jsx("div", { className: "w-6 h-0.5 bg-foreground mb-1.5" }),
        /* @__PURE__ */ jsx("div", { className: "w-6 h-0.5 bg-foreground" })
      ] })
    ] }),
    open && /* @__PURE__ */ jsxs("div", { className: "md:hidden border-t border-border bg-white px-5 py-4 flex flex-col gap-3", children: [
      links.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, onClick: () => setOpen(false), className: "py-2 text-base", children: l.label }, l.href)),
      /* @__PURE__ */ jsx("a", { href: "#contact", onClick: () => setOpen(false), className: "text-center font-semibold px-4 py-3 rounded-full bg-gradient-brand text-white", children: "Demander un devis" })
    ] })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "hero", className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 pt-20", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute top-1/4 -left-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-50", style: {
      background: "radial-gradient(circle, #ff7ab8 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute bottom-10 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-50", style: {
      background: "radial-gradient(circle, #b56cff 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-30", style: {
      background: "radial-gradient(circle, #5b8cff 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 text-xs md:text-sm tracking-[0.4em] uppercase text-foreground/80 mb-8", children: [
        /* @__PURE__ */ jsx(Star, {}),
        /* @__PURE__ */ jsx("span", { children: "romy.design.graphique" }),
        /* @__PURE__ */ jsx(Star, {})
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "font-mega font-bold uppercase leading-[0.85] tracking-tight text-[22vw] md:text-[18vw] lg:text-[15rem]", children: /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Portfolio" }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-base md:text-lg text-muted-foreground max-w-xl mx-auto", children: "Graphiste freelance à Poitiers. Identité visuelle & sites vitrines pour entrepreneurs qui veulent une image à la hauteur." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 flex items-center justify-center", children: /* @__PURE__ */ jsxs("a", { href: "#projets", className: "inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-semibold text-sm tracking-wide hover:scale-[1.02] transition shadow-lg shadow-pink-200/50", children: [
        "Voir mes projets",
        /* @__PURE__ */ jsx("span", { className: "text-lg", children: "→" })
      ] }) })
    ] })
  ] });
}
function SectionTitle({
  children,
  id
}) {
  return /* @__PURE__ */ jsxs("h2", { id, className: "font-display font-black uppercase text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none flex items-start gap-3", children: [
    /* @__PURE__ */ jsx(Star, { className: "text-gradient text-2xl md:text-4xl mt-1" }),
    /* @__PURE__ */ jsx("span", { children })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxs("section", { className: "px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(SectionTitle, { children: "Et si on faisait les présentations ?" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 grid md:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-base md:text-lg leading-relaxed text-foreground/90", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Moi c'est ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient font-semibold", children: "Romy" }),
          ", graphiste freelance basée à Poitiers. J'ai travaillé 6 ans dans l'assistanat de direction où j'ai développé de bonnes compétences en gestion de projets et création de support de communication. J'ai adoré la partie créative. J'ai beaucoup appris sur le tas, mais j'ai voulu concrétiser mes connaissances en passant un BAC+2 graphiste multimédia en 2023."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Mon truc à moi, c'est de créer des univers visuels qui ont du sens et qui donnent envie. Pas juste un joli logo, mais une image qui parle pour toi, qui attire les bonnes personnes et qui impose ta marque dans ton secteur." }),
        /* @__PURE__ */ jsx("p", { children: "J'aime travailler avec les entrepreneurs passionnés, ceux qui savent ce qu'ils veulent transmettre mais qui n'arrivent pas encore à le montrer visuellement." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-brand-soft border border-border flex items-center justify-center", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/romy-photo.jpg", alt: "Photo de Romy", className: "w-full h-full object-cover", onError: (e) => {
          e.target.style.display = "none";
        } }),
        /* @__PURE__ */ jsx("span", { className: "absolute text-muted-foreground text-sm" }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/30" })
      ] })
    ] })
  ] });
}
function Why() {
  return /* @__PURE__ */ jsxs("section", { className: "px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(SectionTitle, { children: "Pourquoi je peux aider ta marque ?" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 grid lg:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "BulgaryRose",
          fontSize: "6rem",
          color: "#1A1A1A",
          marginLeft: "1.5rem",
          marginBottom: "-1.5rem"
        }, className: "leading-none relative z-10", children: "j'apporte" }),
        /* @__PURE__ */ jsxs("div", { className: "font-mega font-bold uppercase leading-[0.9] text-6xl md:text-7xl lg:text-8xl", children: [
          /* @__PURE__ */ jsx("div", { children: "du style" }),
          /* @__PURE__ */ jsx("div", { className: "text-gradient", children: "du sens" }),
          /* @__PURE__ */ jsx("div", { children: "du design" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display font-black uppercase text-2xl md:text-3xl", children: "Parce qu'un logo ne fait pas vendre." }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-foreground/80", children: "Ce dont tu as besoin, c'est un système visuel pensé pour convertir." })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: ["attire les bonnes personnes", "transmet instantanément les bonnes émotions", "renforce ta crédibilité au premier regard", "s'imprime dans la mémoire des gens"].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 items-start", children: [
          /* @__PURE__ */ jsx(Star, { className: "text-gradient mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: item })
        ] }, item)) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display font-black uppercase text-2xl", children: "Pourquoi ça marche ?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-foreground/80 leading-relaxed", children: "Parce qu'une identité forte ne repose pas sur la chance ou l'intuition. Je construis ton univers visuel à partir de : la psychologie des couleurs, l'association typographique adaptée à ton positionnement, des symboles alignés avec tes valeurs et ton secteur, un univers visuel cohérent sur tous les supports, une hiérarchie graphique pensée pour capter l'attention." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-display font-black uppercase text-gradient leading-tight", children: "Chaque décision graphique est justifiée et orientée business." })
      ] })
    ] })
  ] });
}
const PROJECTS = [{
  num: "PROJET 01",
  name: "MECA TECH AUTO",
  desc: "Garage automobile toutes marques. Inspirée par la mécanique de précision. Un logo minimaliste et immédiatement reconnaissable.",
  palette: ["#0a0a0a", "#1f1f1f", "#c4c4c4", "#ff3b30"],
  bgClass: "bg-[#0a0a0a]",
  textClass: "text-white",
  mockups: ["/images/mecatech-1.png", "/images/mecatech-2.png", "/images/mecatech-3.png"]
  // ← remplace "" par "/images/meca1.jpg" etc.
}, {
  num: "PROJET 02",
  name: "NOVA",
  desc: "Une identité visuelle céleste, raffinée et apaisante pour une marque de bougies artisanales qui transforme chaque instant en rituel de douceur.",
  palette: ["#1B2A4A", "#2c3e63", "#C9A96E", "#f0e3c7"],
  bgClass: "bg-[#1B2A4A]",
  textClass: "text-white",
  mockups: ["/images/nova-1.png", "/images/nova-2.png", "/images/nova-3.png"]
  // ← remplace "" par "/images/nova1.jpg" etc.
}, {
  num: "PROJET 03",
  name: "ATELIER ARTÉA",
  desc: "Ateliers d'aquarelle à Poitiers. Une identité douce et naturelle, entre créativité et bienveillance. Un site clair et accueillant, pensé pour inspirer la détente et la confiance.",
  palette: ["#1B2A4A", "#7ba7c9", "#cfe2ee", "#f5efe4"],
  bgClass: "bg-[#cfe2ee]",
  textClass: "text-[#1B2A4A]",
  mockups: ["/images/artea-1.png", "/images/artea-2.png", "/images/artea-3.png"]
  // ← remplace "" par "/images/artea1.jpg" etc.
}];
function Projects() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsxs("section", { id: "projets", className: "px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(SectionTitle, { children: "Projets" }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 space-y-6", children: PROJECTS.map((p, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxs("article", { className: `rounded-3xl overflow-hidden border border-border transition-all ${isOpen ? "shadow-xl" : ""}`, children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(isOpen ? null : i), className: `w-full ${p.bgClass} ${p.textClass} px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left`, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-6 flex-wrap", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs tracking-[0.3em] opacity-70", children: p.num }),
            /* @__PURE__ */ jsx("h3", { className: "font-display font-black uppercase text-3xl md:text-5xl", children: p.name })
          ] }),
          /* @__PURE__ */ jsx("span", { className: `shrink-0 w-10 h-10 rounded-full border border-current flex items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`, children: "+" })
        ] }),
        isOpen && /* @__PURE__ */ jsxs("div", { className: `${p.bgClass} ${p.textClass} px-6 md:px-10 pb-10`, children: [
          /* @__PURE__ */ jsx("p", { className: "max-w-2xl opacity-90 leading-relaxed mb-8", children: p.desc }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2 mb-8", children: p.palette.map((c) => /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full border border-white/20", style: {
            background: c
          } }, c)) }),
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: p.mockups.map((src, n) => /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] rounded-2xl overflow-hidden", children: src ? /* @__PURE__ */ jsx("img", { src, alt: `${p.name} mockup ${n + 1}`, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxs("span", { className: "opacity-60", children: [
            "📷 Mockup ",
            n + 1
          ] }) }, n)) })
        ] })
      ] }, p.name);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsx("a", { href: "#contact", className: "inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-semibold text-sm", children: "Demander un devis →" }) })
  ] });
}
function Process() {
  const steps = [{
    t: "Prise de contact",
    d: "Tu m'envoies un message (DM, mail ou WhatsApp). Je te réponds sous 24h et je pose quelques questions pour cerner ton activité."
  }, {
    t: "Appel découverte (15-20 min)*",
    d: "On se retrouve en appel pour qu'on parle de ton univers, tes références, ce que tu veux transmettre. Je te propose ensuite la prestation qui correspond."
  }, {
    t: "Devis & validation",
    d: "Je t'envoie un devis clair. Tu valides et règles un acompte de 50% pour que je démarre."
  }, {
    t: "Création",
    d: "Je travaille sur ta prestation et je te livre une première version. Tu disposes de 2 à 3 ajustements selon la formule choisie."
  }, {
    t: "Livraison & suivi",
    d: "Je te livre tous les fichiers finaux et t'explique comment les utiliser. Le solde est réglé à la livraison."
  }];
  return /* @__PURE__ */ jsxs("section", { id: "process", className: "px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto rounded-3xl", style: {
    backgroundColor: "var(--cream)"
  }, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4", children: [
      /* @__PURE__ */ jsx(SectionTitle, { children: "Processus client" }),
      /* @__PURE__ */ jsx("p", { style: {
        fontFamily: "BulgaryRose",
        color: "#1A1A1A",
        fontSize: "5rem",
        lineHeight: "1"
      }, className: "self-center mt-6" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "/images/CG.png", alt: "Charte graphique", className: "w-full h-full object-cover rounded-2xl" }) }),
      /* @__PURE__ */ jsx("ol", { className: "space-y-6", children: steps.map((s, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg bg-gradient-brand text-white", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display font-black uppercase text-xl tracking-tight", children: s.t }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-1 leading-relaxed", children: s.d })
        ] })
      ] }, s.t)) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 text-sm text-muted-foreground italic", children: "*selon prestation choisie" })
  ] });
}
const ALACARTE = [["Logo simple (2 propositions, 2 révisions)", "100€", "2-3 jours"], ["Identité visuelle (Logo, palette, typographies, guide)", "200€", "3-5 jours"], ["Bannière réseaux sociaux (FB, LinkedIn, YouTube)", "50€", "1-2 jours"], ["3 publications réutilisables (Instagram, FB ou LinkedIn)", "70€", "2-3 jours"], ["Flyer A5 recto/verso", "70€", "2-3 jours"], ["Carte de visite recto/verso", "60€", "2-3 jours"], ["Google Business — refonte complète (photos & infos)", "90€", "2-3 jours"], ["Site vitrine clé en main (SEO & optimisé mobile)", "350€", "7-10 jours"]];
function Prestations() {
  return /* @__PURE__ */ jsxs("section", { id: "prestations", className: "px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(SectionTitle, { children: "Mes prestations" }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl", children: "Des prestations pensées pour les entrepreneurs locaux qui veulent enfin une image pro, sans se prendre la tête." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-display font-black uppercase text-2xl md:text-3xl mb-6 tracking-wide", children: "À la carte" }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-[#1e1e1e] text-white overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "hidden md:grid grid-cols-[1fr_120px_140px] gap-4 px-8 py-5 text-xs tracking-[0.25em] uppercase text-white/50 border-b border-white/10", children: [
          /* @__PURE__ */ jsx("div", { children: "Prestation" }),
          /* @__PURE__ */ jsx("div", { children: "Prix" }),
          /* @__PURE__ */ jsx("div", { children: "Délai" })
        ] }),
        ALACARTE.map(([p, pr, d]) => /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[1fr_120px_140px] gap-2 md:gap-4 px-6 md:px-8 py-5 border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-pink-300", children: "✦" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm md:text-base", children: p })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-gradient font-display font-bold text-xl md:pl-0 pl-7", children: pr }),
          /* @__PURE__ */ jsx("div", { className: "text-white/60 text-sm md:pl-0 pl-7", children: d })
        ] }, p))
      ] })
    ] })
  ] });
}
const PACKS = [{
  name: "Je démarre",
  price: "200€",
  old: "236€",
  off: "-15%",
  tag: "Pour enfin avoir une image à la hauteur de ton travail.",
  items: ["Logo — 2 propositions, 2 révisions", "Carte de visite recto/verso prête à imprimer", "Bannière réseaux sociaux (FB + LinkedIn)", "Photo de profil pro cohérente", "Livré en 5 à 7 jours"]
}, {
  name: "Positionnement",
  price: "160€",
  old: "236€",
  off: "-32%",
  tag: "Tu as déjà un logo mais personne ne te trouve en ligne.",
  items: ["Refonte complète Google Business", "Mots-clés locaux pour remonter sur Google", "Bannière réseaux sociaux cohérente", "Photo de profil pro retravaillée", "Optimisation photos & description", "3 templates publications réseaux réutilisables", "Livré en 3 à 5 jours"]
}, {
  name: "Clé en main",
  price: "500€",
  old: "638€",
  off: "-22%",
  tag: "La totale pour partir sur une image pro et être présent en ligne.",
  items: ["Identité visuelle complète — 2 déclinaisons de logo, 2 ajustements, palette, typographies, guide (SVG, PNG)", "Site vitrine — accueil + services + contact", "Adapté mobile & tablette", "Optimisé pour apparaître sur Google", "Refonte Google Business complète", "Formulaire de contact intégré", "Livré en 10 à 14 jours"]
}];
function Packs() {
  return /* @__PURE__ */ jsxs("section", { className: "px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between flex-wrap gap-4", children: /* @__PURE__ */ jsx(SectionTitle, { children: "Les packs" }) }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl", children: "L'essentiel du graphisme réuni dans des formules claires et accessibles." }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-16", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "hidden lg:block absolute top-1/2 left-8 right-8 h-px bg-gradient-brand opacity-40" }),
      /* @__PURE__ */ jsx("div", { className: "relative grid md:grid-cols-3 gap-6", children: PACKS.map((p) => /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-[#1e1e1e] text-white p-7 flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs tracking-[0.3em] uppercase text-white/50", children: "Pack" }),
          /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full bg-gradient-brand text-xs font-bold", children: p.off })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display font-black uppercase text-3xl mb-3", children: p.name }),
        /* @__PURE__ */ jsx("p", { className: "text-white/70 text-sm mb-6 min-h-[3rem]", children: p.tag }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gradient font-display font-black text-5xl", children: p.price }),
          /* @__PURE__ */ jsx("span", { className: "text-white/40 line-through text-lg", children: p.old })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8 flex-1", children: p.items.map((it) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-white/90", children: [
          /* @__PURE__ */ jsx("span", { className: "text-pink-300 shrink-0", children: "✓" }),
          /* @__PURE__ */ jsx("span", { children: it })
        ] }, it)) }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "mt-auto inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-brand text-white font-semibold text-sm hover:scale-[1.02] transition", children: "Je choisis ce pack →" })
      ] }, p.name)) })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative px-5 md:px-10 py-28 md:py-40 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-gradient-brand" }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 opacity-30", style: {
      background: "radial-gradient(circle at 20% 30%, #fff 0%, transparent 50%)"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl mx-auto text-center text-white", children: [
      /* @__PURE__ */ jsx(Star, { className: "text-4xl mb-6 inline-block" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-mega font-bold uppercase leading-[0.85] tracking-tight", style: {
        fontSize: "clamp(3.5rem, 10vw, 8rem)"
      }, children: [
        "On travaille",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "mt-4 block", children: "ensemble ?" }),
        " "
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg md:text-xl text-white/90", children: "Envoie-moi un message, je réponds sous 24h." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: /* @__PURE__ */ jsx("a", { href: "mailto:hello@romy-design.fr", className: "px-8 py-4 rounded-full bg-white text-foreground font-semibold hover:scale-[1.03] transition shadow-xl", children: "Me contacter" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-sm text-white/90 text-center", children: /* @__PURE__ */ jsx("a", { href: "https://instagram.com/romy.design.graphique", target: "_blank", rel: "noreferrer", className: "hover:text-white", children: "@romy.design.graphique" }) })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "px-5 md:px-10 py-10 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(RLogo, { className: "w-8 h-8 text-xs text-foreground" }),
      /* @__PURE__ */ jsx("span", { children: "© romy.design.graphique — Tous droits réservés" })
    ] }),
    /* @__PURE__ */ jsx("span", { children: "Poitiers, France" })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Why, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx(Prestations, {}),
      /* @__PURE__ */ jsx(Packs, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
