export const business = {
  brand: "DUNASTAV",
  name: "DUNASTAV – Zastavárna & Bazar",
  street: "17. listopadu 236",
  city: "Pardubice",
  country: "Česká republika",
  phone: "732 100 975",
  internationalPhone: "+420 732 100 975",
  phoneHref: "tel:+420732100975",
  directionsHref: "https://www.google.com/maps/dir/?api=1&destination=17.%20listopadu%20236%2C%20Pardubice%2C%20Czech%20Republic",
  hours: [
    { day: "Pondělí", time: "10:00–17:00" },
    { day: "Úterý", time: "10:00–17:00" },
    { day: "Středa", time: "10:00–17:00" },
    { day: "Čtvrtek", time: "10:00–17:00" },
    { day: "Pátek", time: "10:00–17:00" },
    { day: "Sobota", time: "Zavřeno" },
    { day: "Neděle", time: "Zavřeno" },
  ],
  // Doplňte pouze ověřené údaje před zveřejněním. Null se zobrazuje jako „K doplnění“.
  legal: { operator: null as string | null, companyId: null as string | null, registeredOffice: null as string | null, register: null as string | null, privacyContact: null as string | null },
};
export const navigation = [
  { href: "#uvod", label: "Úvod" },
  { href: "#sluzby", label: "Služby" },
  { href: "#jak-to-funguje", label: "Jak to funguje" },
  { href: "#kontakt", label: "Kontakt" },
];
