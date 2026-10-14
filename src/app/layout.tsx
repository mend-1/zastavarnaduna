import type { Metadata } from "next";
import { business } from "@/config/business";
import "./globals.css";
export const metadata: Metadata = {
  title: "DUNASTAV – Zastavárna & Bazar Pardubice",
  description: `Zastavárna a bazar DUNASTAV v Pardubicích. Výkup a prodej zlata a stříbra. Najdete nás na adrese ${business.street}. Tel. ${business.phone}. Otevírací doba a kontakt.`,
  robots: { index: true, follow: true },
  openGraph: { title: "DUNASTAV – Zastavárna & Bazar Pardubice", description: "Zastavárna, bazar, výkup a prodej zlata a stříbra v Pardubicích.", locale: "cs_CZ", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="cs"><body>{children}</body></html>;
}
