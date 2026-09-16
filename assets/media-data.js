/*
 * aikyma.ai — Media & Presse
 * ---------------------------------------------------------------
 * Zentrale Datenquelle für:
 *   - den Media-Banner auf der Startseite (index.html / en/index.html)
 *   - die Media-Historie (media.html / en/media.html)
 *
 * Neuen Beitrag veröffentlichen: einfach ein neues Objekt GANZ OBEN
 * in das Array einfügen (neuester Eintrag zuerst). Der Banner zeigt
 * automatisch AIKYMA_MEDIA[0], die Media-Seite zeigt alle Einträge.
 *
 * Felder:
 *   type / typeEn       Kategorie, z.B. "Podcast", "Artikel", "Interview"
 *   title / titleEn      Titel des Beitrags
 *   source / sourceEn    Publikation / Sender / Podcast-Name (+ Folge, wenn vorhanden)
 *   date                 ISO-Datum (YYYY-MM-DD) für Sortierung & Anzeige.
 *                        TODO Alexander: exaktes Veröffentlichungsdatum prüfen/ergänzen.
 *   url                  Link zum Beitrag (öffnet in neuem Tab)
 *   thumbnail            Bild-URL (z.B. YouTube-Thumbnail) oder Pfad unter assets/
 */
const AIKYMA_MEDIA = [
  {
    type: "Podcast",
    typeEn: "Podcast",
    title: "KI legt Firmen lahm, versteht aber keine Bestellung",
    titleEn: "AI cripples companies, but still can't understand an order",
    source: "HUBER Business AI Podcast · Folge #34 · mit Marcel Rassinger, aikyma.ai",
    sourceEn: "HUBER Business AI Podcast · Episode #34 · with Marcel Rassinger, aikyma.ai",
    date: "2026-09", // TODO: exaktes Datum ergänzen (nicht öffentlich auffindbar)
    url: "https://www.youtube.com/watch?v=cNSUcltu31o",
    thumbnail: "https://i.ytimg.com/vi/cNSUcltu31o/hqdefault.jpg",
  },
];
