import { Header } from "@/components/header";
import { Hours } from "@/components/hours";
import { Icon, type IconName } from "@/components/icon";
import { business, navigation } from "@/config/business";

const services: { title: string; text: string; icon: IconName; tag: string }[] = [
  { title: "Zastavárna", text: "Přineste předmět, který chcete zastavit. Možnosti a podmínky s vámi probereme při individuálním posouzení.", icon: "shield", tag: "INDIVIDUÁLNÍ POSOUZENÍ" },
  { title: "Bazar", text: "Věci mohou najít nové využití. Přijďte si prohlédnout aktuální nabídku nebo se informovat o možnostech výkupu.", icon: "bag", tag: "VÝKUP A PRODEJ" },
  { title: "Výkup zlata", text: "Máte zájem o výkup zlata v Pardubicích? Přineste jej na provozovnu a seznamte se s individuální nabídkou.", icon: "gold", tag: "ZLATO" },
  { title: "Výkup stříbra", text: "O možnostech výkupu stříbra se informujte osobně. Konkrétní nabídka vychází z posouzení předloženého předmětu.", icon: "silver", tag: "STŘÍBRO" },
  { title: "Prodej zlata a stříbra", text: "Zajímá vás zlato nebo stříbro? Na aktuální nabídku se zeptejte telefonicky nebo přímo u nás na provozovně.", icon: "spark", tag: "AKTUÁLNÍ NABÍDKA NA PROVOZOVNĚ" },
];
const steps = [
  ["Kontaktujte nás nebo přijďte na provozovnu", "Zavolejte nám se svým dotazem nebo nás navštivte během otevírací doby."],
  ["Přineste zboží k individuálnímu posouzení", "Předmět si prohlédneme a probereme s vámi dostupné možnosti."],
  ["Seznamte se s nabídkou a rozhodněte se", "Projděte si konkrétní nabídku a její podmínky. Rozhodnutí je na vás."],
];
export default function Home() {
  return <>
    <a className="skip-link" href="#obsah">Přejít na obsah</a>
    <Header />
    <main id="obsah">
      <section id="uvod" className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span />VAŠE ZASTAVÁRNA V PARDUBICÍCH</p>
            <h1 id="hero-title">Zastavárna &<br />Bazar <span>Pardubice</span></h1>
            <p className="hero-subtitle">Výkup a prodej zlata a stříbra</p>
            <p className="hero-description">Dejte věcem další příležitost. Navštivte nás v Pardubicích — možnosti zástavy, výkupu i prodeje s vámi probereme osobně.</p>
            <div className="hero-actions"><a className="button button-yellow" href={business.phoneHref}><Icon name="phone" />Zavolat: {business.phone}</a><a className="button button-outline" href="#kontakt">Kde nás najdete<Icon name="arrow" /></a></div>
            <div className="hero-details"><span><Icon name="pin" />{business.street}, {business.city}</span><a href="#kontakt"><Icon name="clock" />Otevírací doba</a></div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-top"><span>D / PARDUBICE</span><span>VĚCI S HODNOTOU</span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="metal-ring ring-silver" /><div className="metal-ring ring-gold" />
            <div className="art-bottom"><span>ZLATO<br />& STŘÍBRO</span><span className="art-plus">+</span></div>
          </div>
        </div>
        <div className="hero-strip"><div className="container"><span>Zástava a výkup</span><span>Bazar v Pardubicích</span><span>Zlato a stříbro</span><a href="#sluzby">Prohlédnout služby <Icon name="arrow" /></a></div></div>
      </section>

      <section id="sluzby" className="section services" aria-labelledby="services-title"><div className="container">
        <div className="section-heading"><div><p className="eyebrow dark">01 / NAŠE SLUŽBY</p><h2 id="services-title">Co pro vás můžeme udělat</h2></div><p>Zástava, výkup i prodej na jednom místě.<br />Konkrétní možnosti s vámi rádi probereme.</p></div>
        <div className="service-grid">{services.map((service, index) => <article className={`service-card service-${index}`} key={service.title}><div className="service-card-top"><span className="service-icon"><Icon name={service.icon} /></span><span className="service-number">0{index + 1}</span></div><h3>{service.title}</h3><p>{service.text}</p><span className="service-tag">{service.tag}</span></article>)}<aside className="service-help"><span className="eyebrow dark">NEJSTE SI JISTÍ?</span><h3>Začněme<br />jedním telefonátem.</h3><p>Zeptejte se nás na vše, co vás zajímá.</p><a href={business.phoneHref}>{business.phone}<Icon name="arrow" /></a></aside></div>
      </div></section>

      <section id="jak-to-funguje" className="section process" aria-labelledby="process-title"><div className="container"><div className="section-heading"><div><p className="eyebrow dark">02 / JAK TO FUNGUJE</p><h2 id="process-title">Tři kroky. Osobní přístup.</h2></div><p>Vše podstatné vyřešíme společně<br />přímo na naší provozovně.</p></div><ol className="steps">{steps.map(([title, description], index) => <li key={title}><div className="step-top"><span>0{index + 1}</span><Icon name="arrow" /></div><h3>{title}</h3><p>{description}</p></li>)}</ol><p className="process-note">Možnost přijetí zboží i konkrétní podmínky závisí na individuálním posouzení.</p></div></section>

      <section id="kontakt" className="section contact" aria-labelledby="contact-title"><div className="container"><div className="section-heading"><div><p className="eyebrow dark">03 / KONTAKT</p><h2 id="contact-title">Zastavte se u nás.</h2></div><p>Najdete nás na ulici 17. listopadu v Pardubicích.<br />Těšíme se na vaši návštěvu.</p></div><div className="contact-grid"><div className="contact-location"><span className="contact-label"><Icon name="pin" />NAŠE PROVOZOVNA</span><h3>{business.street}<br /><span>{business.city}</span></h3><p>{business.name}</p><a className="button button-yellow" href={business.directionsHref} target="_blank" rel="noopener noreferrer">Navigovat na provozovnu<Icon name="arrow" /><span className="sr-only"> (Google Maps, nové okno)</span></a><div className="contact-phone"><span>Zavolejte nám</span><a href={business.phoneHref}><Icon name="phone" />{business.phone}</a></div></div><div className="contact-hours"><h3><Icon name="clock" />Otevírací doba</h3><Hours /></div></div></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-grid"><div><a href="#uvod" className="footer-brand">{business.brand}<span>—</span></a><p>Zastavárna & Bazar</p><p>{business.street}, {business.city}<br /><a href={business.phoneHref}>{business.internationalPhone}</a></p></div><div><h2>Na webu</h2><nav aria-label="Navigace v zápatí">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></div><div><h2>Otevírací doba</h2><Hours compact /></div></div><div className="legal"><details><summary>Údaje o provozovateli a ochrana osobních údajů</summary><div className="legal-content"><p>Údaje k doplnění před zveřejněním webu:</p><dl>{[["Provozovatel", business.legal.operator], ["IČO", business.legal.companyId], ["Sídlo", business.legal.registeredOffice], ["Zápis v rejstříku (je-li relevantní)", business.legal.register], ["Kontakt pro ochranu osobních údajů", business.legal.privacyContact]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value ?? "K doplnění"}</dd></div>)}</dl><p>Tento web neobsahuje kontaktní formulář, analytiku ani reklamní sledování a sám neukládá cookies. Odkaz na navigaci otevře službu Google Maps.</p><p>Před spuštěním je nutné doplnit informace o správci a případném zpracování osobních údajů provozovatelem a poskytovatelem hostingu, včetně účelů, právních základů, dob uchování, příjemců a práv návštěvníků. Podle skutečného provozu doplňte také příslušné spotřebitelské a právní informace.</p></div></details></div><div className="footer-bottom"><span>{business.name}</span><span>Pardubice, Česká republika</span></div></div></footer>
  </>;
}
