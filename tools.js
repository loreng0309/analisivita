// Registro degli strumenti dell'hub.
// Per aggiungerne uno: carica il file HTML in /tools/ e aggiungi un oggetto nell'array "tools".
// Per una nuova categoria: aggiungila in "categories" e usa il suo id nello strumento.
window.HUB = {
  title: "Hub dati",
  subtitle: "calcolatori e dashboard",

  categories: [
    { id: "immobiliare", name: "Immobiliare e finanza personale" }
  ],

  tools: [
    {
      id: "anticipo-o-mutuo",
      name: "Anticipo o mutuo al 100%?",
      category: "immobiliare",
      description: "Confronta un mutuo con anticipo e uno al 100% investendo la differenza: rata, patrimonio finale anno per anno e rendimento di pareggio.",
      tags: ["mutuo", "PAC", "detrazione interessi"],
      file: "anticipo-o-mutuo.html"
    },
    {
      id: "quadrante-liberta",
      name: "Il quadrante della libertà",
      category: "pianificazione",
      description: "Quando puoi smettere di lavorare, in euro: Italia (Milano), Svizzera (Ginevra, Losanna) o Italia poi Svizzera, con pensioni, figli e simulazioni di mercato.",
      tags: ["libertà finanziaria", "pensione", "Italia", "Svizzera"],
      file: "quadrante-liberta.html"
    }
  ]
};
