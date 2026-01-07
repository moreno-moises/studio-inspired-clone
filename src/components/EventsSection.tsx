import { motion } from "framer-motion";
import tourImage from "@/assets/new-tour-image.jpg";

const events = [
  {
    title: "In Motion World Tour - Auckland",
    date: "January 14, 2026",
    time: "7:30 pm",
    link: "#",
  },
  {
    title: "In Motion World Tour - Sydney",
    date: "January 16, 2026",
    time: "7:30 pm",
    link: "#",
  },
  {
    title: "In Motion World Tour - Melbourne",
    date: "January 17, 2026",
    time: "7:30 pm",
    link: "#",
  },
];

const EventsSection = () => {
  return (
    <section id="tour" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Upcoming Events
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
            In Motion tour 25
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Events List */}
          <div className="space-y-0 divide-y divide-border">
            {events.map((event, index) => (
              <motion.a
                key={event.title}
                href={event.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block py-6 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold group-hover:text-neon-pink transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {event.date} / {event.time}
                    </p>
                  </div>
                  <span className="text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    View →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Tour Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img
              src={tourImage}
              alt="In Motion Tour"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
