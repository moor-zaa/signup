import { Dictionary } from "@/i18n/types";

const AgreeTerms = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className="mt-8 pt-4 border-t border-(--border-color) text-center">
      <p className="text-[10px] text-(--text-secondary) leading-relaxed">
        <span>{dictionary.byContinueAgree}</span>
        <a href="#" className="underline hover:text-(--text-primary)">
          {`  ${dictionary.termsOfServices}  `}
        </a>
        <span>{`  ${dictionary.and}  `} </span>
        <a href="#" className="underline hover:text-(--text-primary)">
          {`  ${dictionary.privacyPolicy}  `}
        </a>
        .
      </p>
    </div>
  );
};

export default AgreeTerms;
