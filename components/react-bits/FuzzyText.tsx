type FuzzyTextProps = {
  children: string;
  className?: string;
};

export function FuzzyText({ children, className = "" }: FuzzyTextProps) {
  return (
    <span className={`fuzzy-text ${className}`} data-text={children}>
      {children}
    </span>
  );
}
