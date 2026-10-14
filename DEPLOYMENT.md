# GitHub → Vercel: příprava bez zveřejnění

## Stav a kořen projektu

Kořenem samostatného repozitáře je složka `dunastav`, ve které jsou `package.json`, `package-lock.json`, `next.config.ts`, `vercel.json` a `src/`. Nenahrávejte nadřazenou složku celé konverzace.

Projekt nevyžaduje žádné proměnné prostředí ani API klíče. `node_modules/`, `.next/`, `out/`, `.vercel/`, `.env*`, logy a běžné soubory soukromých klíčů jsou ignorovány. Samotné ignorování souborů nenahrazuje kontrolu před commitem.

`vercel.json` vypíná automatická nasazení z Gitu pomocí `git.deploymentEnabled: false`. Toto nastavení není ochrana přístupu a nezabrání ručnímu nasazení. Dokud vlastník neschválí zveřejnění, neklikejte na Deploy a nepoužívejte příkazy `vercel deploy` ani `vercel --prod`.

## 1. Doplnit a schválit před spuštěním

- Oficiální provozovatel, IČO, sídlo, příslušné rejstříkové údaje a schválený název webu.
- Správce osobních údajů a jeho kontakt; schválené informace odpovídající skutečnému zpracování a hostingu, včetně serverových logů.
- Příslušné spotřebitelské informace, reklamace a mimosoudní řešení sporů podle skutečného provozu.
- Potvrdit adresu, telefon, otevírací dobu a umístění vstupu v navigaci.
- Nahradit přípravný text v rozbalovacím právním bloku zápatí finálním zněním.
- Vybrat doménu a hostingový tarif vhodný pro komerční web; doplnit canonical URL po určení domény.

Údaje se doplňují v `src/config/business.ts`, text právního bloku v `src/app/page.tsx` a SEO metadata v `src/app/layout.tsx`.

## 2. Vytvořit soukromý GitHub repozitář

1. Přihlaste se na https://github.com/new.
2. Vyberte vlastníka a název, například `dunastav-web`.
3. Zvolte **Private**. Nezaškrtávejte vytvoření README, licence ani .gitignore; projekt je již obsahuje.
4. Klikněte na **Create repository**. Tím vznikne soukromý repozitář kódu, nikoli veřejný web. Nezapínejte GitHub Pages.
5. Ve Windows PowerShell přejděte do projektu:

```powershell
cd "C:\Users\DIEGO\Documents\Codex\2026-10-14\you-are-an-expert-senior-web\outputs\dunastav"
git status
git add .
git diff --cached --stat
git diff --cached
git commit -m "Prepare DUNASTAV website for review"
```

Pokud Git požaduje identitu, nastavte své skutečné jméno a svůj GitHub commit e-mail přes `git config user.name` a `git config user.email`. Identitu nelze odhadnout. Poté opakujte commit.

6. Z nové stránky GitHubu zkopírujte přesnou HTTPS adresu svého repozitáře. Nahraďte `OWNER` skutečným vlastníkem:

```powershell
git remote add origin https://github.com/OWNER/dunastav-web.git
git push -u origin main
```

Přihlášení dokončete v oficiálním přihlašovacím dialogu GitHubu. Nevkládejte token do adresy repozitáře ani do zdrojových souborů. Pokud již `origin` existuje, nejdříve ověřte `git remote -v`; nevytvářejte druhý remote naslepo.

## 3. Připravit propojení s Vercel — před Deploy se zastavit

1. Přihlaste se do Vercel a otevřete **Add New → Project**.
2. Připojte GitHub. Oprávnění Vercel GitHub App omezte na repozitář `dunastav-web`.
3. Vyberte repozitář přes **Import** a zkontrolujte následující nastavení na konfigurační obrazovce.

| Nastavení | Hodnota |
| --- | --- |
| Framework Preset | Next.js |
| Root Directory | `./` (kořen samostatného repozitáře) |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | ponechat výchozí automatickou hodnotu Next.js |
| Environment Variables | žádné |
| Production Branch | `main` |

`next.config.ts` záměrně zachovává `output: "export"`. Next.js vytváří statický web; nepřepínejte framework na Other a nevkládejte do Root Directory složku `out` ani `.next`. Pokud místo doporučeného samostatného repozitáře nahrajete nadřazený projekt, Root Directory musí odpovídat skutečné cestě `outputs/dunastav` v repozitáři.

4. **ZASTAVTE SE před tlačítkem Deploy.** Úvodní import může vytvořit veřejně dostupnou adresu `vercel.app`, i bez vlastní domény a i u soukromého GitHub repozitáře. Nejde o dokončené připojení nasazeného projektu; dokončení ponechte až po schválení.
5. Po doplnění údajů a výslovném souhlasu vlastníka se lze vrátit k nasazení. Povolení automatických nasazení (`git.deploymentEnabled: true`) je samostatné rozhodnutí; bez něj lze později zvolit ruční nasazení.

Vercel Hobby je určen pro osobní nekomerční použití. Pro tento komerční web je nutné zvolit odpovídající plán; v rámci přípravy nebyl žádný tarif zakoupen.

## Lokální ověření

```powershell
npm.cmd ci
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd run preview
```

Lokální náhled: http://127.0.0.1:3000. Pokud již běží, nespouštějte druhý server na stejném portu. Pro vývoj slouží `npm.cmd run dev`. Produkční build byl ověřen lokálně ve Windows; skutečný build na Vercel lze ověřit až při povoleném nasazení.

## Oficiální návody

- https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
- https://vercel.com/docs/git
- https://vercel.com/docs/project-configuration/git-configuration
- https://vercel.com/docs/plans/hobby
