# aikyma.ai — Website-Quellen

Stand: April 2026 · Kontaktformular neu strukturiert (4 Sektionen)

## Struktur

```
aikyma-website/
├── index.html, produkt.html, approach.html, team.html, kontakt.html   ← DE
├── en/                                                                ← EN
│   └── index.html, produkt.html, approach.html, team.html, kontakt.html
├── README.md
└── assets/
    ├── shared.css
    ├── logos/         → Kundenlogos
    ├── factsheets/    → 4 PDFs
    └── video/         → Oskar & Petra Videos
```

## Kontaktformular: Neue 4-Sektionen-Struktur

Statt vorab "Bist du Kunde oder Partner?" zu fragen, ist das Formular jetzt
linear und intuitiv aufgebaut:

**1. Über Sie / About you**
- Vorname, Nachname, E-Mail (Pflicht), Funktion (optional)

**2. Über Ihre Firma / About your company**
- Firmenname (Pflicht), Website (optional)

**3. Ihr Backend / Your backend**
- Dropdown: Microsoft Dynamics BC, SAP, Abacus, Navision, Infor,
  Odoo, NetSuite, Custom, Mehrere Systeme, Anderes/Unklar
- Begriff "Backend" statt "ERP" — neutraler, passt für alle Anfrager

**4. Ihr Anliegen / Your inquiry**
- Beschreibung des Anliegens (Pflicht, immer)
- Checkbox "Ich interessiere mich für eine Partnerschaft" (optional)
- Bei aktiver Partnerschafts-Checkbox: zusätzliches Pflichtfeld
  "Beschreiben Sie kurz Ihr Angebot"

Plus: Datenschutz-Einverständnis (Pflicht), Submit-Button

## Formular-Routing (Formspree)

**Wenn Partnerschafts-Checkbox AUS** (Default):
- Form sendet an STANDARD-Endpoint → contact@aikyma.ai
- E-Mail-Subject: "Neue Anfrage über das Kontaktformular"

**Wenn Partnerschafts-Checkbox AN**:
- Form sendet an PARTNER-Endpoint → alexander.buech@aikyma.ai +
  marcel.rassinger@aikyma.ai
- E-Mail-Subject: "Neue Partner-Anfrage über das Kontaktformular"

## Formspree-Setup

✅ Eingerichtet (April 2026):
- **"Standard inquiry"** → `https://formspree.io/f/mdayjoeb` → contact@aikyma.ai
- **"Partner inquiry"** → `https://formspree.io/f/xkokenrr` → alexander.buech@aikyma.ai (+ marcel.rassinger@aikyma.ai)

Endpoints sind in `kontakt.html` (DE) und `en/kontakt.html` eingesetzt.

## Cal.com

Event: `alexander-buch-sbw9zu/discover-call` · Popup auf allen CTA-Buttons

## Factsheets

| Sprache | Kunden | Partner |
|---|---|---|
| DE | aikyma-factsheet-kunden-de.pdf | aikyma-factsheet-partner-de.pdf |
| EN | aikyma-factsheet-customers-en.pdf | aikyma-factsheet-partners-en.pdf |

## Kundenlogos (Trust-Bar Home)

Jauch (jauch.com), Apfelkiste (apfelkiste.ch), Medidor (medidor.ch),
Aproda (aproda.ch — Partner)

## Status

- ✅ Cal.com: Popup-Trigger
- ✅ Logos: 4 Firmen, verlinkt
- ✅ Factsheets: 4 PDFs (DE+EN, Kunden+Partner)
- ✅ Kontaktseite: aufgeräumt + Formular neu strukturiert
- ✅ Fotos Alex & Marcel (in assets/team/)
- ✅ Formspree: Endpoints eingesetzt (Standard + Partner)
