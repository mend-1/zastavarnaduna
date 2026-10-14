export type IconName = "phone" | "arrow" | "pin" | "clock" | "shield" | "bag" | "gold" | "silver" | "spark";
const paths: Record<IconName, React.ReactNode> = {
  phone: <path d="m8 3 2 5-3 2a15 15 0 0 0 7 7l2-3 5 2v4a2 2 0 0 1-2 2C9 21 3 15 2 5a2 2 0 0 1 2-2h4Z" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  shield: <><path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z" /><path d="m8 12 3 3 5-6" /></>,
  bag: <><path d="M4 7h16l1 14H3L4 7Z" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /></>,
  gold: <><path d="m6 7 12 0 4 11H2L6 7Z" /><path d="m6 7 3 11M18 7l-3 11M9 12h6" /></>,
  silver: <><path d="m4 10 11-5 7 9-15 7-5-6 2-5Z" /><path d="m4 10 5 5 13-1M9 15l-2 6" /></>,
  spark: <><circle cx="10" cy="14" r="7" /><path d="m18 2 1.2 3.8L23 7l-3.8 1.2L18 12l-1.2-3.8L13 7l3.8-1.2L18 2Z" /></>,
};
export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
