"use client";

import en from "@/messages/en.json";
import uk from "@/messages/uk.json";

export default function ErrorPage() {
  const messages =
    typeof window !== "undefined" && window.location.pathname.startsWith("/uk")
      ? uk
      : en;

  return (
    <main className="container">
      <h1>{messages.events.errorTitle}</h1>
      <p>{messages.events.errorBody}</p>
    </main>
  );
}
