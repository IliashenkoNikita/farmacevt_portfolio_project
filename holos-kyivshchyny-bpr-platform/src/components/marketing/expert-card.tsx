import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getMessages } from "@/lib/i18n/config";

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
  const messages = getMessages(locale);

  return (
    <Card className="card-interactive">
      <div className="expert-mark" aria-hidden="true">
        {expert.name
          .split(" ")
          .map((part) => part[0])
          .join("")
          .slice(0, 2)}
      </div>
      <h3 className="text-xl font-bold">{expert.name}</h3>
      <p className="font-semibold text-emerald-800">{expert.position}</p>
      <p>{expert.specialization}</p>
      <p className="text-slate-600">{expert.bio}</p>
      <Link
        className="font-semibold text-emerald-800"
        href={"/" + locale + "/experts/" + expert.slug}
      >
        {messages.experts.profile}
      </Link>
    </Card>
  );
}
