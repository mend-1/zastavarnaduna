import { business } from "@/config/business";
export function Hours({ compact = false }: { compact?: boolean }) {
  return <dl className={compact ? "hours hours-compact" : "hours"}>{business.hours.map(({ day, time }) => <div key={day} className={time === "Zavřeno" ? "closed" : ""}><dt>{day}</dt><dd>{time}</dd></div>)}</dl>;
}
