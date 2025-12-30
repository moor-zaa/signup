"use client";

import { useI18n } from "@/i18n/dictionary-provider";

const Welcome = () => {
  const { dictionary } = useI18n();

  return (
    <div className="flex items-center justify-center h-screen">
      {dictionary.welcome}
    </div>
  );
};

export default Welcome;
