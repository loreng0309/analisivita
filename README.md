# Hub dati

Raccolta dei miei calcolatori e dashboard, in un sito statico (GitHub Pages).

## Struttura

```
index.html      l'hub (sidebar, home a card, tema chiaro/scuro)
tools.js        registro degli strumenti: l'unico file da modificare per aggiungerne
tools/          un file HTML autonomo per ogni strumento
.nojekyll       dice a GitHub Pages di servire i file così come sono
```

## Pubblicare su GitHub Pages (una volta sola)

1. Crea un repository su GitHub (es. `hub-dati`) e carica tutti questi file, cartella `tools/` compresa.
2. Vai su **Settings → Pages**.
3. In **Build and deployment** scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`, poi **Save**.
4. Dopo un minuto circa il sito è su `https://TUO-UTENTE.github.io/hub-dati/`.

## Aggiungere uno strumento

1. Carica il file HTML in `tools/` (nome senza spazi, es. `calcolatore-pac.html`).
2. Apri `tools.js` e aggiungi un oggetto all'array `tools`:

```js
{
  id: "calcolatore-pac",            // univoco, senza spazi: finisce nell'indirizzo
  name: "Calcolatore PAC",
  category: "investimenti",         // id di una categoria
  description: "Una riga che spiega cosa fa.",
  tags: ["ETF", "PAC"],
  file: "calcolatore-pac.html"
}
```

3. Se la categoria è nuova, aggiungila prima in `categories`:
   `{ id: "investimenti", name: "Investimenti" }`

Sidebar, card, ricerca e conteggi si aggiornano da soli.

## Requisiti per gli strumenti

- Un solo file HTML con CSS e JavaScript dentro (i Google Fonts vanno bene).
- Per seguire il pulsante Dark/Light dell'hub, lo strumento deve cambiare tema con l'attributo
  `data-theme="dark"` / `"light"` sull'elemento `<html>`. Gli strumenti che non lo supportano
  funzionano lo stesso, mantengono solo il proprio tema.

## Attenzione: il sito è pubblico

Con GitHub Pages su un repository gratuito chiunque può leggere i file. Non mettere dati di clienti
o dati riservati di lavoro né nel codice né nei valori di default dei cursori.

## Provarlo in locale

Apri `index.html` con doppio clic, oppure (meglio, il tema si sincronizza anche negli strumenti) da terminale:

```
python3 -m http.server 8000
```

e vai su http://localhost:8000.
