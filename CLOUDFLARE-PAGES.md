# Cloudflare Pages — statický export

## Kompatibilita

Projekt je kompatibilní se statickým hostingem. `next.config.ts` obsahuje `output: "export"`; `npm run build` spouští `next build` a vytváří `out/`. Není potřeba samostatný příkaz `next export`.

Web neobsahuje API routes, Server Actions, middleware, cookies vyhodnocované na serveru, dynamické serverové vykreslování ani službu optimalizace obrázků. React komponenty se předvykreslí při sestavení; mobilní menu funguje v prohlížeči. Nejsou potřeba Workers, Pages Functions, OpenNext ani adaptér `next-on-pages`.

## Přesná nastavení Cloudflare Pages

| Pole | Hodnota |
| --- | --- |
| Git provider | GitHub |
| Repository | `mend-1/zastavarnaduna` |
| Production branch | `main` |
| Framework preset | **Next.js (Static HTML Export)** |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | prázdné — kořen repozitáře (`./`) |
| Build environment variable | `NODE_VERSION` = `22` |
| Aplikační proměnné / secrets | žádné |

Node.js 22 je doporučená podporovaná verze pro cloudové sestavení. Lokální sestavení bylo ověřeno s nainstalovaným Node.js 26; skutečné sestavení na Cloudflare proběhne až při schváleném nasazení.

Cloudflare instaluje závislosti v rámci sestavení; `package-lock.json` musí zůstat v repozitáři. Pokud preset předvyplní jiný build příkaz, přepište ho na `npm run build`. Jako výstup nepoužívejte `.next`, `.vercel/output/static` ani složku `src`. Pro tento projekt nepotřebujete deploy command ani Wrangler konfiguraci.

## Postup po schválení zveřejnění

1. V Cloudflare otevřete **Workers & Pages**, zvolte vytvoření aplikace v části **Pages** a připojení existujícího Git repozitáře.
2. Autorizujte GitHub a omezte přístup na soukromý repozitář `mend-1/zastavarnaduna`.
3. Vyberte repozitář a vyplňte nastavení podle tabulky.
4. **Dokud není zveřejnění výslovně schválené, neklikejte na Save and Deploy.** První nasazení může zpřístupnit web na `pages.dev` i bez vlastní domény.
5. Po schválení nasaďte a ověřte produkční URL, mobilní menu, navigaci, telefon a kontaktní údaje.

Git integrace Cloudflare standardně spouští další nasazení při pushi. Pokud později nechcete automatická nasazení produkce nebo preview větví, upravte branch deployment controls projektu. Existující `vercel.json` chrání pouze před automatickými Git nasazeními na Vercel; Cloudflare jej nepoužívá. V rámci této přípravy nebyl vytvořen ani propojen Cloudflare projekt a nebylo provedeno nasazení.

## Lokální sestavení a kontrola

```powershell
npm.cmd ci
npm.cmd run typecheck
npm.cmd run build
npm.cmd run preview
```

Otevřete http://127.0.0.1:3000. Výstup `out/` obsahuje `index.html`, `404.html`, `icon.svg`, JavaScript a CSS v `_next/` a doprovodná data exportu. `out/` je generovaný a záměrně ignorovaný Gitem; Cloudflare jej vytvoří ze zdrojů při sestavení.

Před zveřejněním doplňte údaje provozovatele, IČO, sídlo, relevantní rejstříkové informace, informace o ochraně osobních údajů a příslušné spotřebitelské informace. Schvalte finální znění právního bloku. Kontrolní seznam je v `README.md`. Design, český obsah, adresa, telefon a otevírací doba nebyly kvůli přípravě hostingu změněny.

## Oficiální dokumentace

- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- https://developers.cloudflare.com/pages/configuration/build-configuration/
- https://developers.cloudflare.com/pages/configuration/build-image/
- https://nextjs.org/docs/app/guides/static-exports
