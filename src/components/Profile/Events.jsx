import EventCard from "./EventCard";

export default function Events() {
  return (
    <div className="mt-5 px-5 flex flex-wrap gap-5">
      {[1, 1, 1].map((item, i) => (
        <EventCard key={i} />
      ))}
    </div>
  );
}
