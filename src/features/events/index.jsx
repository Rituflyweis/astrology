import {
  EventsHeader,
  EventsSearch,
  EventsGrid,
} from "./components";

function EventsContent() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF]">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4">
        <EventsHeader />
        <EventsSearch />
        <EventsGrid />
      </div>
    </section>
  );
}

export default EventsContent;

