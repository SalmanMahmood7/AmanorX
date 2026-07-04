import Container from "./Container";
import Reveal from "./Reveal";

const BACKGROUND = {
  white: "bg-white",
  tint: "bg-navy-50",
  navy: "bg-navy-900 text-white",
};

/**
 * Standard vertical-rhythm wrapper for a full-bleed page section. Used by
 * the homepage's bespoke marketing layout -- every other page uses
 * <PageShell>'s sidebar layout instead of stacked full-width bands.
 */
export default function Section({
  background = "white",
  containerSize = "xl",
  reveal = true,
  className = "",
  containerClassName = "",
  children,
}) {
  const body = reveal ? <Reveal>{children}</Reveal> : children;

  return (
    <section className={`${BACKGROUND[background]} py-16 sm:py-20 ${className}`}>
      <Container size={containerSize} className={containerClassName}>
        {body}
      </Container>
    </section>
  );
}
