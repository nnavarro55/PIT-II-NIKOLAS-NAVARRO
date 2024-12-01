type FilterButtonProps = {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  compact?: boolean;
};

export function FilterButton({ active, onClick, icon, label, compact = false }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 rounded-lg border transition-colors whitespace-nowrap
        ${compact ? 'px-3 py-2 text-sm' : 'p-4'}
        ${active 
          ? 'bg-[#FF8000] text-white border-[#FF8000] hover:bg-[#FF8000]/90' 
          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
        }
      `}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
} 