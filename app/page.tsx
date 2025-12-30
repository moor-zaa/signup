"use client";

import { useI18n } from "@/i18n/dictionary-provider";

export default function Home() {
  const { dictionary } = useI18n();

  return (
    <div className="h-screen flex items-center justify-center">
      {dictionary.email}
    </div>
  );
}
