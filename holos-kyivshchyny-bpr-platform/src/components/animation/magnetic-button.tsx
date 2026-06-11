import Link from "next/link";

export function MagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link className="primary-link" href={href}>
      {children}
    </Link>
  );
}
