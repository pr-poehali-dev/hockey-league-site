import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { teamsInfo } from '@/data/teams';

const teamLogos: Record<string, string> = {
  'Авангард': 'https://img.khl.ru/teams/ru/1288/34/80.png',
  'Автомобилист': 'https://img.khl.ru/teams/ru/1288/190/80.png',
  'Адмирал': 'https://img.khl.ru/teams/ru/1288/418/80.png',
  'Ак Барс': 'https://img.khl.ru/teams/ru/1288/53/80.png',
  'Амур': 'https://img.khl.ru/teams/ru/1369/54/80.png',
  'Барыс': 'https://img.khl.ru/teams/ru/1288/198/80.png',
  'Динамо-Минск': 'https://img.khl.ru/teams/ru/1288/207/80.png',
  'Динамо Москва': 'https://img.khl.ru/teams/ru/1288/719/80.png',
  'Драконы': 'https://img.khl.ru/teams/ru/1369/568/80.png',
  'Йокерит': 'https://img.khl.ru/teams/ru/1097/450/80.png',
  'Лада': 'https://img.khl.ru/teams/ru/1369/66/80.png',
  'Локомотив': 'https://img.khl.ru/teams/ru/1288/1/80.png',
  'Металлург': 'https://img.khl.ru/teams/ru/1288/37/80.png',
  'Нефтехимик': 'https://img.khl.ru/teams/ru/1369/71/80.png',
  'Салават Юлаев': 'https://img.khl.ru/teams/ru/1288/38/80.png',
  'Северсталь': 'https://img.khl.ru/teams/ru/1288/56/80.png',
  'Сибирь': 'https://img.khl.ru/teams/ru/1288/29/80.png',
  'Сочи': 'https://img.khl.ru/teams/ru/1369/451/80.png',
  'СКА': 'https://img.khl.ru/teams/ru/1369/24/80.png',
  'Спартак': 'https://img.khl.ru/teams/ru/1288/7/80.png',
  'Торпедо': 'https://img.khl.ru/teams/ru/1369/26/80.png',
  'Трактор': 'https://img.khl.ru/teams/ru/1288/25/80.png',
  'ЦСКА': 'https://img.khl.ru/teams/ru/1288/2/80.png'
};

export default function TeamDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const westTeams = teamsInfo.filter(t => t.conference === 'Запад');
  const eastTeams = teamsInfo.filter(t => t.conference === 'Восток');

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

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
        Клубы
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-card border border-border rounded-lg shadow-2xl p-6 min-w-[600px] z-50 backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary border-b border-border pb-2">
                Западная конференция
              </h3>
              <div className="space-y-1">
                {westTeams.map(team => (
                  <Link
                    key={team.id}
                    to={`/team/${team.name}`}
                    className="flex items-center gap-3 p-2 rounded hover:bg-muted/50 transition-colors group"
                  >
                    <img 
                      src={teamLogos[team.name]} 
                      alt={`лого ${team.name}`}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {team.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-secondary border-b border-border pb-2">
                Восточная конференция
              </h3>
              <div className="space-y-1">
                {eastTeams.map(team => (
                  <Link
                    key={team.id}
                    to={`/team/${team.name}`}
                    className="flex items-center gap-3 p-2 rounded hover:bg-muted/50 transition-colors group"
                  >
                    <img 
                      src={teamLogos[team.name]} 
                      alt={`лого ${team.name}`}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="font-medium group-hover:text-secondary transition-colors">
                      {team.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}