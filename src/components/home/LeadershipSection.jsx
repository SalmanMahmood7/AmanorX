import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import DeckHeading from "./DeckHeading";

/**
 * "Leadership -- the hands on the wheel." -- deck slide 04. Dark navy stage,
 * two centred profile cards with gold serif names. Each card shows the
 * person's portrait (person.image, under /public/images/leadership/); anyone
 * without one falls back to the original gold monogram medallion.
 */
function initials(name) {
  const parts = name.split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function LeadershipSection({ content }) {
  return (
    <section className="bg-navy-950 text-white">
      <Container size="xl" className="py-16 sm:py-24">
        <DeckHeading dark accent={content.heading} sub={content.subheading} />

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-2">
          {content.people.map((person, i) => (
            <Reveal
              as="article"
              key={person.name}
              delay={i * 150}
              className="text-center"
            >
              <div className="mx-auto flex h-52 w-52 items-center justify-center overflow-hidden rounded-lg border border-gold-500/40 bg-navy-900">
                {person.image ? (
                  <img
                    src={person.image}
                    alt={`Portrait of ${person.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-display text-5xl font-semibold text-gold-400">
                    {initials(person.name)}
                  </span>
                )}
              </div>

              <span
                aria-hidden="true"
                className="mx-auto mt-6 flex max-w-[10rem] items-center gap-2"
              >
                <span className="h-px flex-1 bg-gold-500/60" />
                <span className="h-1 w-1 rotate-45 bg-gold-500" />
                <span className="h-px flex-1 bg-gold-500/60" />
              </span>

              <h3 className="mt-4 font-display text-xl font-semibold tracking-wide text-gold-400 uppercase">
                {person.name}
              </h3>
              <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
                {person.role}
              </p>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/70">
                {person.bio}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
