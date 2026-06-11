import Link from "next/link";
import { Card } from "@/components/ui/card";
export function ExpertCard({
  expert,
  locale,
}: {
  expert: {
    slug: string;
    name: string;
    position: string;
    specialization: string;
    bio: string;
  };
  locale: string;
}) {
  return (
    <Card>
      <div className="mb-4 h-28 rounded-md bg-gradient-to-br from-emerald-100 to-sky-100" />
      <h3 className="text-xl font-bold">{expert.name}</h3>
      <p className="font-semibold text-emerald-800">{expert.position}</p>
      <p>{expert.specialization}</p>
      <p className="text-slate-600">{expert.bio}</p>
      <Link
        className="font-semibold text-emerald-800"
        href={"/" + locale + "/experts/" + expert.slug}
      >
        Профіль
      </Link>
    </Card>
  );
}
