# Voice-Over-Produktion für Oskar-Video

Dieses Verzeichnis enthält (bzw. erwartet) die Audio-Dateien für das Oskar-Video.
Wenn die MP3s hier liegen, nutzt der Video-Player sie automatisch. Fehlen sie,
springt er auf Browser-TTS zurück — ohne Fehler.

## Erwartete Dateien (8 Stück)

| Dateiname | Dauer (max) | Text |
|-----------|-------------|------|
| `oskar-01-intro.mp3` | ~3s | Oskar bearbeitet eingehende Bestellungen vollautomatisch — vom Posteingang bis ins ERP. |
| `oskar-02-eingang.mp3` | ~7s | Eine E-Mail von Huber AG mit einem PDF-Bestellformular. Oskar erkennt sofort, dass es sich um eine Bestellung handelt. |
| `oskar-03-erfassen.mp3` | ~7s | Aus dem PDF werden Kundendaten, Artikel, Mengen und Liefertermine strukturiert erfasst. |
| `oskar-04-abgleich.mp3` | ~9s | Der Kunde wird mit der ERP-Kundennummer gematcht, alle drei Artikel werden in den Stammdaten gefunden. |
| `oskar-05-pruefung.mp3` | ~9s | Die Geschäftsregeln werden geprüft. Eine Position hat einen knappen Lagerbestand. |
| `oskar-06-klaerung.mp3` | ~7s | Oskar stellt eine gezielte Rückfrage an den Innendienst. Die Antwort kommt in unter einer Minute und fließt direkt in die Wissensbasis ein. |
| `oskar-07-uebergabe.mp3` | ~7s | Der validierte Auftrag wird direkt ins Business Central übernommen. Der Kunde erhält automatisch seine Bestätigung. |
| `oskar-08-outro.mp3` | ~4s | Von der eingehenden E-Mail bis zum verarbeiteten Auftrag im ERP: zwölf Sekunden. Tag und Nacht. Vollautomatisch. |

## Empfohlene Produktion

### Option 1: ElevenLabs (empfohlen)

1. Konto erstellen auf https://elevenlabs.io (Free Tier reicht für den ersten Test)
2. Unter "Voices" eine deutsche Stimme wählen. Gute Kandidaten für B2B/Mittelstand:
   - **Rachel** (weiblich, warm, professionell)
   - **Charlie** (männlich, ruhig, kompetent)
   - **Nicole** (weiblich, sachlich)
3. Modell: **eleven_multilingual_v2** oder **eleven_v3**
4. Settings:
   - Stability: 40-50% (natürlich, nicht zu monoton)
   - Similarity: 75%
   - Style Exaggeration: 0-20%
5. Jeden der 8 Sätze einzeln generieren
6. Als MP3 in diesen Ordner speichern mit den exakten Dateinamen

### Option 2: Microsoft Azure Neural Voices

1. Azure-Konto (500.000 Zeichen gratis/Monat im Free Tier)
2. Speech Studio → https://speech.microsoft.com/audiocontentcreation
3. Empfohlene Stimmen für Deutsch:
   - **de-DE-KatjaNeural** (weiblich, Standard)
   - **de-DE-ConradNeural** (männlich, sehr natürlich)
   - **de-DE-FlorianMultilingualNeural** (männlich, hochwertig)
4. SSML für präzise Pausen nutzen (Beispiel in `ssml-examples.xml`)

### Option 3: Selbst aufnehmen

1. Mikrofon: Handy oder AirPods in ruhiger Umgebung reicht
2. Apps: Audacity (kostenlos), Voice Memos (macOS/iOS)
3. Je Satz 2-3 Takes aufnehmen, den besten wählen
4. Nachbearbeitung: Pegel normalisieren, Anfang/Ende beschneiden
5. Export als MP3 mit 128 kbps

## Technische Anforderungen

- **Format**: MP3 (empfohlen) oder WAV
- **Bitrate**: 128 kbps oder höher
- **Sample Rate**: 44.1 kHz oder 48 kHz
- **Kanäle**: Mono reicht völlig (schont Dateigröße)
- **Pegel**: -3 dB Peak, -16 LUFS integriert (für Web-Streaming standard)

## Testen

Nach dem Einlegen der MP3s:
1. `aikyma-test.html` öffnen → Produkt-Seite → zum Oskar-Video scrollen
2. Browser-Console öffnen (F12 → Console)
3. Erwartete Meldung: "Oskar-Video: Alle 8 MP3-Dateien gefunden. Nutze hochwertiges Voice-Over."
4. Play klicken, "Voice an" aktivieren → die MP3s werden abgespielt statt Browser-TTS

## Fallback-Verhalten

- MP3 vorhanden → wird abgespielt
- MP3 fehlt → Browser-TTS springt ein
- Einige MP3s vorhanden, andere nicht → Mix aus beiden
- Kein Problem für Test oder Deployment
