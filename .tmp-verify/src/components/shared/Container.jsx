const MAX_WIDTH = {
  xl: "max-w-6xl",
  lg: "max-w-4xl",
};

/**
 * Shared max-width + gutter wrapper. `size="lg"` matches the narrower,
 * reading-width pages (Who We Are, Governance, etc.); `size="xl"` (default)
 * matches the wider grid pages (Home, Sectors, Portfolio).
 */
export default function Container({
  as: Tag = "div",
  size = "xl",
  className = "",
  children,
}) {
  return (
    <Tag className={`mx-auto w-full ${MAX_WIDTH[size]} px-4 sm:px-6 ${className}`}>
      {children}
    </Tag>
  );
}
