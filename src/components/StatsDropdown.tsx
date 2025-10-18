import { useState, useEffect, useRef } from 'react';

interface StatsDropdownProps {
  onSelect: (tab: string) => void;
  selectedTab: string;
}

export default function StatsDropdown({ onSelect, selectedTab }: StatsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const statsOptions = [
    { id: 'stats', label: 'Общая статистика' },
    { id: 'bombers', label: 'Топ бомбардиров' },
    { id: 'snipers', label: 'Топ снайперов' },
    { id: 'goalies', label: 'Топ вратарей' },
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className={`px-4 py-2 text-foreground hover:text-primary transition-colors font-medium ${selectedTab === 'stats' ? 'text-primary' : ''}`}
      >
        Статистика
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-card border border-border rounded-lg shadow-2xl p-4 min-w-[220px] z-50 backdrop-blur-sm">
          <div className="space-y-1">
            {statsOptions.map(option => (
              <button
                key={option.id}
                onClick={() => {
                  onSelect(option.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left p-2 rounded hover:bg-muted/50 transition-colors ${
                  selectedTab === option.id ? 'bg-primary/20 text-primary' : ''
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
