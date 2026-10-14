# DUNASTAV – Zastavárna & Bazar

Český responzivní web v Next.js App Router, Reactu, TypeScriptu a Tailwind CSS 4. Statický export bez databáze, formulářů, analytiky a externě načítaných písem. Ilustrace v úvodu je abstraktní CSS grafika, nikoli fotografie zboží nebo provozovny.

Pro připravené nasazení na Cloudflare Pages použijte [CLOUDFLARE-PAGES.md](CLOUDFLARE-PAGES.md). Nasazení dosud není schváleno. Původní postup pro Vercel zůstává v `DEPLOYMENT.md` jako alternativa.

## Spuštění ve Windows PowerShell

Je potřeba Node.js 20.9 nebo novější podporovaná verze a npm. V této složce spusťte:

```powershell
npm.cmd ci
npm.cmd run dev
```

Otevřete http://127.0.0.1:3000. Server ukončíte pomocí Ctrl+C. Pokud už na portu běží jiný server, vývojový server vypíše použitou adresu.

## Kontroly a produkční náhled

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd run preview
```

Produkční náhled je na http://127.0.0.1:3000 (nejdříve ukončete vývojový server). `preview` je pouze lokální server navázaný na 127.0.0.1. Produkční soubory vzniknou v `out/`; tuto složku lze po schválení publikovat na statickém hostingu. Web nebyl nasazen.

## Údržba

- `src/config/business.ts`: obchodní údaje, telefonní odkazy, navigace, otevírací doba a neověřené údaje provozovatele.
- `src/app/page.tsx`: texty a sekce stránky.
- `src/app/globals.css`: barvy, typografie a responzivní rozvržení; Tailwind je zapojen přes PostCSS a lze používat jeho utility.
- `src/components/`: opakovaně použitelné menu, ikony a otevírací doba.
- `src/app/layout.tsx`: české SEO metadata.
- `package-lock.json`: přesné verze závislostí pro opakovatelné instalace.

Stránka používá sémantické nadpisy, odkaz pro přeskočení navigace, viditelné zaměření klávesnicí, ovládání mobilního menu klávesou Escape a respektuje omezení pohybu. Telefonní odkazy používají `tel:`, navigace na adresu otevírá Google Maps až po kliknutí; není vložena neověřená mapa. Přesnost umístění vyhledaného službou Google Maps ověřte před spuštěním.

## Před zveřejněním potvrdit

- Oficiální název provozovatele, vztah k pracovnímu názvu DUNASTAV, IČO, sídlo a případné rejstříkové údaje.
- Adresu provozovny, telefon, otevírací dobu a správný cíl navigace podle skutečného vstupu.
- Identitu a kontakt správce osobních údajů; informace o zpracování odpovídající skutečnému hostingu a provozu (včetně serverových logů, příjemců, účelů, právních základů, uchování a práv návštěvníků).
- Příslušné spotřebitelské informace, reklamace a mimosoudní řešení sporů podle skutečně poskytovaných služeb. Nejsou zde vymyšlené smluvní ani finanční podmínky.
- Nahradit zástupné údaje a přípravný text v rozbalovacím bloku zápatí potvrzeným zněním.
- Po výběru domény doplnit canonical URL, případně sitemap, a nastavit HTTPS a bezpečnostní hlavičky na hostingu.

Cookie lišta není přidána: aplikace sama žádné cookies nepoužívá. Při změně hostingu či přidání externích služeb znovu posuďte skutečné chování webu. Žádná služba nebyla zakoupena a zveřejnění vyžaduje vaše schválení.

## Provedené ověření

- ESLint bez chyb a varování, `tsc --noEmit`, úspěšný produkční build Next.js 16.4.0.
- Audit produkčních závislostí při předání: 0 hlášených zranitelností.
- Produkční export: HTTP 200; automatizované kontroly v headless Microsoft Edge při šířkách 320, 390, 768, 1024 a 1440 px.
- Bez vodorovného přetečení; platné cíle všech interních odkazů, správné telefonní odkazy a adresa navigace, sedm dní otevírací doby.
- Mobilní menu: otevření, zavření odkazem, Escape a návrat zaměření na tlačítko; fungující rozbalení právních informací.
- Bez JavaScriptových chyb, neúspěšných síťových požadavků, externích požadavků při načtení či cookies. Vizuálně zkontrolován mobilní a desktopový snímek.
- Telefonní hovor nebyl uskutečněn; poloha skutečného vstupu nebyla nezávisle ověřena. Nejde o úplný audit přístupnosti ani test všech prohlížečů.
