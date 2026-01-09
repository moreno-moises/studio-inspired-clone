import { motion } from "framer-motion";
import tourImage from "@/assets/new-tour-image.jpg";

const events = [
  {
    title: "TBA",
    date: "TBA",
    time: "TBA",
    link: "#",
  },
];

const EventsSection = () => {
  return (
    <section 
      id="tour" 
      className="relative min-h-[120vh] flex items-center justify-center px-6 md:px-12 group/section"
      style={{
        backgroundImage: `url(${tourImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Black and white filter overlay - removes on hover */}
      <div className="absolute inset-0 bg-background/60 transition-all duration-500" />
      <div className="absolute inset-0 grayscale group-hover/section:grayscale-0 transition-all duration-500 pointer-events-none"
        style={{
          backgroundImage: `url(${tourImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          mixBlendMode: 'overlay',
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Upcoming Events
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
            In Motion Tour '26
          </h2>
        </motion.div>

        {/* Events List */}
        <div className="space-y-6 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">
                {event.title}
              </h3>
              <p className="text-muted-foreground">
                {event.date} / {event.time}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#"
            className="inline-block px-8 py-4 bg-foreground text-background font-display text-sm tracking-widest uppercase hover:bg-neon-pink hover:text-foreground transition-all duration-300"
          >
            Get Tickets
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
