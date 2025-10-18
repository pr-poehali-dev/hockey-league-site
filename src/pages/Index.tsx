import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TeamDropdown from '@/components/TeamDropdown';

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

const westernTeams = [
  { id: 1, name: 'СКА', games: 24, wins: 16, losses: 5, ot: 2, sob: 1, points: 51, goalsFor: 95, goalsAgainst: 52, conference: 'Запад' },
  { id: 2, name: 'ЦСКА', games: 24, wins: 15, losses: 6, ot: 2, sob: 1, points: 48, goalsFor: 89, goalsAgainst: 58, conference: 'Запад' },
  { id: 3, name: 'Динамо Москва', games: 24, wins: 14, losses: 7, ot: 2, sob: 1, points: 45, goalsFor: 81, goalsAgainst: 63, conference: 'Запад' },
  { id: 4, name: 'Локомотив', games: 24, wins: 13, losses: 8, ot: 2, sob: 1, points: 42, goalsFor: 74, goalsAgainst: 66, conference: 'Запад' },
  { id: 5, name: 'Спартак', games: 24, wins: 12, losses: 9, ot: 2, sob: 1, points: 39, goalsFor: 72, goalsAgainst: 68, conference: 'Запад' },
  { id: 6, name: 'Динамо-Минск', games: 24, wins: 11, losses: 10, ot: 2, sob: 1, points: 36, goalsFor: 69, goalsAgainst: 71, conference: 'Запад' },
  { id: 7, name: 'Торпедо', games: 24, wins: 10, losses: 11, ot: 2, sob: 1, points: 33, goalsFor: 65, goalsAgainst: 74, conference: 'Запад' },
  { id: 8, name: 'Северсталь', games: 24, wins: 9, losses: 12, ot: 2, sob: 1, points: 30, goalsFor: 62, goalsAgainst: 78, conference: 'Запад' },
  { id: 9, name: 'Сочи', games: 24, wins: 7, losses: 14, ot: 2, sob: 1, points: 24, goalsFor: 58, goalsAgainst: 82, conference: 'Запад' },
  { id: 10, name: 'Драконы', games: 24, wins: 6, losses: 15, ot: 2, sob: 1, points: 21, goalsFor: 54, goalsAgainst: 88, conference: 'Запад' },
  { id: 11, name: 'Барыс', games: 24, wins: 5, losses: 16, ot: 2, sob: 1, points: 18, goalsFor: 51, goalsAgainst: 92, conference: 'Запад' },
  { id: 12, name: 'Йокерит', games: 24, wins: 4, losses: 16, ot: 3, sob: 1, points: 16, goalsFor: 45, goalsAgainst: 98, conference: 'Запад' },
];

const easternTeams = [
  { id: 13, name: 'Трактор', games: 24, wins: 15, losses: 6, ot: 2, sob: 1, points: 48, goalsFor: 92, goalsAgainst: 54, conference: 'Восток' },
  { id: 14, name: 'Салават Юлаев', games: 24, wins: 14, losses: 5, ot: 3, sob: 2, points: 47, goalsFor: 88, goalsAgainst: 61, conference: 'Восток' },
  { id: 15, name: 'Адмирал', games: 24, wins: 13, losses: 7, ot: 2, sob: 2, points: 43, goalsFor: 79, goalsAgainst: 65, conference: 'Восток' },
  { id: 16, name: 'Металлург', games: 24, wins: 12, losses: 8, ot: 3, sob: 1, points: 40, goalsFor: 76, goalsAgainst: 68, conference: 'Восток' },
  { id: 17, name: 'Авангард', games: 24, wins: 11, losses: 9, ot: 2, sob: 2, points: 37, goalsFor: 71, goalsAgainst: 70, conference: 'Восток' },
  { id: 18, name: 'Автомобилист', games: 24, wins: 10, losses: 10, ot: 3, sob: 1, points: 34, goalsFor: 68, goalsAgainst: 72, conference: 'Восток' },
  { id: 19, name: 'Ак Барс', games: 24, wins: 9, losses: 11, ot: 2, sob: 2, points: 31, goalsFor: 62, goalsAgainst: 78, conference: 'Восток' },
  { id: 20, name: 'Сибирь', games: 24, wins: 8, losses: 12, ot: 3, sob: 1, points: 28, goalsFor: 51, goalsAgainst: 85, conference: 'Восток' },
  { id: 21, name: 'Амур', games: 24, wins: 7, losses: 13, ot: 2, sob: 2, points: 25, goalsFor: 58, goalsAgainst: 88, conference: 'Восток' },
  { id: 22, name: 'Лада', games: 24, wins: 6, losses: 14, ot: 3, sob: 1, points: 22, goalsFor: 54, goalsAgainst: 92, conference: 'Восток' },
  { id: 23, name: 'Нефтехимик', games: 24, wins: 5, losses: 15, ot: 2, sob: 2, points: 19, goalsFor: 48, goalsAgainst: 95, conference: 'Восток' },
];

const allTeams = [...westernTeams, ...easternTeams];

const upcomingGames = [
  { id: 1, date: '2025-10-20', homeTeam: 'СКА', awayTeam: 'ЦСКА', time: '19:00', arena: 'Ледовый дворец' },
  { id: 2, date: '2025-10-20', homeTeam: 'Трактор', awayTeam: 'Салават Юлаев', time: '19:30', arena: 'Арена Трактор' },
  { id: 3, date: '2025-10-20', homeTeam: 'Динамо Москва', awayTeam: 'Локомотив', time: '20:00', arena: 'ВТБ Арена' },
];

const players = [
  { id: 1, name: 'Иванов Алексей', team: 'СКА', position: 'Нападающий', number: 91, games: 24, goals: 28, assists: 35, points: 63, pim: 12, captain: true },
  { id: 2, name: 'Петров Дмитрий', team: 'ЦСКА', position: 'Нападающий', number: 87, games: 24, goals: 24, assists: 32, points: 56, pim: 18, captain: true },
  { id: 3, name: 'Смирнов Сергей', team: 'Трактор', position: 'Нападающий', number: 19, games: 24, goals: 22, assists: 29, points: 51, pim: 8, captain: false },
  { id: 4, name: 'Козлов Андрей', team: 'СКА', position: 'Защитник', number: 44, games: 24, goals: 8, assists: 28, points: 36, pim: 24, captain: false },
  { id: 5, name: 'Морозов Павел', team: 'Металлург', position: 'Нападающий', number: 71, games: 24, goals: 19, assists: 23, points: 42, pim: 14, captain: true },
  { id: 6, name: 'Федоров Максим', team: 'Авангард', position: 'Нападающий', number: 13, games: 24, goals: 17, assists: 21, points: 38, pim: 22, captain: true },
  { id: 7, name: 'Соколов Артем', team: 'Динамо Москва', position: 'Защитник', number: 27, games: 24, goals: 6, assists: 24, points: 30, pim: 30, captain: true },
  { id: 8, name: 'Васильев Николай', team: 'Локомотив', position: 'Нападающий', number: 88, games: 24, goals: 26, assists: 30, points: 56, pim: 10, captain: false },
  { id: 9, name: 'Кузнецов Сергей', team: 'Спартак', position: 'Защитник', number: 7, games: 24, goals: 10, assists: 26, points: 36, pim: 18, captain: false },
  { id: 10, name: 'Лебедев Максим', team: 'Салават Юлаев', position: 'Нападающий', number: 17, games: 24, goals: 20, assists: 24, points: 44, pim: 6, captain: true },
  
  { id: 11, name: 'Новиков Иван', team: 'ЦСКА', position: 'Вратарь', number: 31, games: 22, wins: 16, losses: 6, svPct: 92.5, shutouts: 3, goalsAgainst: 48, captain: false },
  { id: 12, name: 'Григорьев Александр', team: 'СКА', position: 'Вратарь', number: 1, games: 22, wins: 17, losses: 5, svPct: 93.2, shutouts: 4, goalsAgainst: 45, captain: false },
  { id: 13, name: 'Романов Дмитрий', team: 'Трактор', position: 'Вратарь', number: 30, games: 21, wins: 15, losses: 6, svPct: 91.8, shutouts: 2, goalsAgainst: 52, captain: false },
  { id: 14, name: 'Павлов Андрей', team: 'Динамо Москва', position: 'Вратарь', number: 35, games: 20, wins: 13, losses: 7, svPct: 90.9, shutouts: 2, goalsAgainst: 58, captain: false },
  { id: 15, name: 'Белов Евгений', team: 'Локомотив', position: 'Вратарь', number: 29, games: 21, wins: 14, losses: 7, svPct: 91.5, shutouts: 1, goalsAgainst: 54, captain: false },
];

const games = [
  { id: 1, date: '2025-10-20', homeTeam: 'СКА', awayTeam: 'ЦСКА', homeScore: null, awayScore: null, time: '19:00' },
  { id: 2, date: '2025-10-20', homeTeam: 'Трактор', awayTeam: 'Салават Юлаев', homeScore: null, awayScore: null, time: '19:30' },
  { id: 3, date: '2025-10-20', homeTeam: 'Динамо Москва', awayTeam: 'Локомотив', homeScore: null, awayScore: null, time: '20:00' },
  { id: 4, date: '2025-10-18', homeTeam: 'СКА', awayTeam: 'Торпедо', homeScore: 5, awayScore: 2, time: '19:00' },
  { id: 5, date: '2025-10-18', homeTeam: 'Автомобилист', awayTeam: 'Трактор', homeScore: 3, awayScore: 4, time: '18:30' },
  { id: 6, date: '2025-10-17', homeTeam: 'ЦСКА', awayTeam: 'Спартак', homeScore: 4, awayScore: 3, time: '19:00' },
];

const playoffBracket = [
  { round: '1/8 финала', matches: [
    { team1: 'СКА', seed1: 1, team2: 'Йокерит', seed2: 16, score1: null, score2: null },
    { team1: 'Трактор', seed1: 2, team2: 'Сочи', seed2: 15, score1: null, score2: null },
    { team1: 'ЦСКА', seed1: 3, team2: 'Барыс', seed2: 14, score1: null, score2: null },
    { team1: 'Салават Юлаев', seed1: 4, team2: 'Драконы', seed2: 13, score1: null, score2: null },
    { team1: 'Динамо Москва', seed1: 5, team2: 'Северсталь', seed2: 12, score1: null, score2: null },
    { team1: 'Адмирал', seed1: 6, team2: 'Торпедо', seed2: 11, score1: null, score2: null },
    { team1: 'Металлург', seed1: 7, team2: 'Спартак', seed2: 10, score1: null, score2: null },
    { team1: 'Авангард', seed1: 8, team2: 'Локомотив', seed2: 9, score1: null, score2: null },
  ]},
  { round: '1/4 финала', matches: [
    { team1: 'TBD', seed1: null, team2: 'TBD', seed2: null, score1: null, score2: null },
    { team1: 'TBD', seed1: null, team2: 'TBD', seed2: null, score1: null, score2: null },
    { team1: 'TBD', seed1: null, team2: 'TBD', seed2: null, score1: null, score2: null },
    { team1: 'TBD', seed1: null, team2: 'TBD', seed2: null, score1: null, score2: null },
  ]},
  { round: 'Полуфинал', matches: [
    { team1: 'TBD', seed1: null, team2: 'TBD', seed2: null, score1: null, score2: null },
    { team1: 'TBD', seed1: null, team2: 'TBD', seed2: null, score1: null, score2: null },
  ]},
  { round: 'Финал', matches: [
    { team1: 'TBD', seed1: null, team2: 'TBD', seed2: null, score1: null, score2: null },
  ]},
];

const ticketGames = [
  { id: 1, date: '2025-10-20', homeTeam: 'СКА', awayTeam: 'ЦСКА', time: '19:00', arena: 'Ледовый дворец', prices: [1500, 2500, 3500, 5000] },
  { id: 2, date: '2025-10-20', homeTeam: 'Трактор', awayTeam: 'Салават Юлаев', time: '19:30', arena: 'Арена Трактор', prices: [1200, 2000, 3000, 4500] },
  { id: 3, date: '2025-10-21', homeTeam: 'Динамо Москва', awayTeam: 'Локомотив', time: '20:00', arena: 'ВТБ Арена', prices: [1800, 2800, 4000, 6000] },
  { id: 4, date: '2025-10-22', homeTeam: 'ЦСКА', awayTeam: 'Спартак', time: '19:00', arena: 'ЦСКА Арена', prices: [2000, 3000, 4500, 7000] },
  { id: 5, date: '2025-10-23', homeTeam: 'Металлург', awayTeam: 'Авангард', time: '18:30', arena: 'Арена Металлург', prices: [1000, 1800, 2500, 3500] },
];

export default function Index() {
  const [selectedTab, setSelectedTab] = useState('standings');
  const [selectedConference, setSelectedConference] = useState<'west' | 'east'>('west');
  const [playerFilter, setPlayerFilter] = useState('all');
  const [positionFilter, setPositionFilter] = useState('all');
  const [sortBy, setSortBy] = useState('points');
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [selectedSector, setSelectedSector] = useState<number>(0);

  const filteredPlayers = players
    .filter(p => playerFilter === 'all' || p.team === playerFilter)
    .filter(p => positionFilter === 'all' || p.position === positionFilter)
    .sort((a, b) => {
      if (sortBy === 'points') return (b.points || 0) - (a.points || 0);
      if (sortBy === 'goals') return (b.goals || 0) - (a.goals || 0);
      if (sortBy === 'assists') return (b.assists || 0) - (a.assists || 0);
      return 0;
    });

  const topScorers = players.filter(p => p.position === 'Нападающий').sort((a, b) => b.points - a.points).slice(0, 5);
  const topDefenders = players.filter(p => p.position === 'Защитник').sort((a, b) => b.points - a.points).slice(0, 5);
  const topGoalies = players.filter(p => p.position === 'Вратарь').sort((a, b) => (b.svPct || 0) - (a.svPct || 0)).slice(0, 5);
  const topSnipers = players.filter(p => p.position === 'Нападающий').sort((a, b) => b.goals - a.goals).slice(0, 5);

  const renderTeamTable = (teams: typeof westernTeams, title: string) => (
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Icon name="MapPin" size={20} className="text-primary" />
        {title}
      </h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-border">
              <TableHead className="w-12">#</TableHead>
              <TableHead>Команда</TableHead>
              <TableHead className="text-center">И</TableHead>
              <TableHead className="text-center">В</TableHead>
              <TableHead className="text-center">ВБ</TableHead>
              <TableHead className="text-center">ПБ</TableHead>
              <TableHead className="text-center">П</TableHead>
              <TableHead className="text-center font-bold">О</TableHead>
              <TableHead className="text-center">Ш</TableHead>
              <TableHead className="text-center">ПШ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teams.map((team, index) => (
              <TableRow key={team.id} className="hover:bg-muted/50 transition-colors border-border">
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-semibold">
                  <div className="flex items-center gap-3">
                    <img 
                      src={teamLogos[team.name]} 
                      alt={`лого ${team.name}`}
                      className="w-8 h-8 object-contain"
                    />
                    <span>{team.name}</span>
                    {index < 8 && <Badge variant="default" className="bg-primary/20 text-primary">Плей-офф</Badge>}
                  </div>
                </TableCell>
                <TableCell className="text-center">{team.games}</TableCell>
                <TableCell className="text-center text-green-500">{team.wins}</TableCell>
                <TableCell className="text-center text-emerald-400">{team.ot}</TableCell>
                <TableCell className="text-center text-orange-400">{team.sob}</TableCell>
                <TableCell className="text-center text-red-500">{team.losses}</TableCell>
                <TableCell className="text-center font-bold text-lg text-primary">{team.points}</TableCell>
                <TableCell className="text-center">{team.goalsFor}</TableCell>
                <TableCell className="text-center">{team.goalsAgainst}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Trophy" size={36} className="text-primary" />
              <div>
                <h1 className="text-3xl font-bold text-foreground">VPHL</h1>
                <p className="text-sm text-muted-foreground">Virtual Puck Hockey League</p>
              </div>
            </div>
            <nav className="flex items-center gap-1">
              <button
                onClick={() => setSelectedTab('standings')}
                className={`px-4 py-2 text-foreground hover:text-primary transition-colors font-medium ${selectedTab === 'standings' ? 'text-primary' : ''}`}
              >
                Таблица
              </button>
              <button
                onClick={() => setSelectedTab('stats')}
                className={`px-4 py-2 text-foreground hover:text-primary transition-colors font-medium ${selectedTab === 'stats' ? 'text-primary' : ''}`}
              >
                Статистика
              </button>
              <button
                onClick={() => setSelectedTab('players')}
                className={`px-4 py-2 text-foreground hover:text-primary transition-colors font-medium ${selectedTab === 'players' ? 'text-primary' : ''}`}
              >
                Игроки
              </button>
              <TeamDropdown />
              <button
                onClick={() => setSelectedTab('calendar')}
                className={`px-4 py-2 text-foreground hover:text-primary transition-colors font-medium ${selectedTab === 'calendar' ? 'text-primary' : ''}`}
              >
                Календарь
              </button>
              <button
                onClick={() => setSelectedTab('tickets')}
                className={`px-4 py-2 text-foreground hover:text-primary transition-colors font-medium ${selectedTab === 'tickets' ? 'text-primary' : ''}`}
              >
                Билеты
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-border">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Icon name="Clock" size={20} className="text-primary" />
            Ближайшие матчи
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {upcomingGames.map((game) => (
              <Card key={game.id} className="bg-card/80 backdrop-blur border-border hover:bg-card transition-all">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {new Date(game.date).toLocaleDateString('ru-RU', { day: '2-digit', month: 'long' })}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      {game.time}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-16 h-16 flex items-center justify-center mb-2">
                        <img 
                          src={teamLogos[game.homeTeam]} 
                          alt={`лого ${game.homeTeam}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-bold text-center text-sm">{game.homeTeam}</span>
                    </div>
                    <div className="text-xl font-bold text-muted-foreground">VS</div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-16 h-16 flex items-center justify-center mb-2">
                        <img 
                          src={teamLogos[game.awayTeam]} 
                          alt={`лого ${game.awayTeam}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-bold text-center text-sm">{game.awayTeam}</span>
                    </div>
                  </div>
                  <div className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                    <Icon name="MapPin" size={12} />
                    {game.arena}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">

          <TabsContent value="standings" className="animate-fade-in">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                  Турнирная таблица
                </CardTitle>

              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-2 justify-center">
                  <Button 
                    variant={selectedConference === 'west' ? 'default' : 'outline'}
                    onClick={() => setSelectedConference('west')}
                    className="gap-2"
                  >
                    <Icon name="MapPin" size={16} />
                    Западная конференция
                  </Button>
                  <Button 
                    variant={selectedConference === 'east' ? 'default' : 'outline'}
                    onClick={() => setSelectedConference('east')}
                    className="gap-2"
                  >
                    <Icon name="MapPin" size={16} />
                    Восточная конференция
                  </Button>
                </div>
                {selectedConference === 'west' && renderTeamTable(westernTeams, 'Западная Конференция')}
                {selectedConference === 'east' && renderTeamTable(easternTeams, 'Восточная Конференция')}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="playoffs" className="animate-fade-in">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Award" size={24} className="text-secondary" />
                  Сетка плей-офф
                </CardTitle>
                <CardDescription>Борьба за главный трофей — 16 лучших команд</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {playoffBracket.map((stage, stageIndex) => (
                  <div key={stageIndex}>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Icon name="Zap" size={20} className="text-secondary" />
                      {stage.round}
                    </h3>
                    <div className={`grid gap-4 ${stage.matches.length === 8 ? 'md:grid-cols-2 lg:grid-cols-4' : stage.matches.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : stage.matches.length === 2 ? 'md:grid-cols-2' : ''}`}>
                      {stage.matches.map((match, matchIndex) => (
                        <Card key={matchIndex} className="bg-muted/30 border-border hover:bg-muted/50 transition-all">
                          <CardContent className="p-4 space-y-3">
                            <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                              <div className="flex items-center gap-2">
                                {match.seed1 && <Badge variant="outline" className="text-xs">{match.seed1}</Badge>}
                                {match.team1 !== 'TBD' && (
                                  <img 
                                    src={teamLogos[match.team1]} 
                                    alt={`лого ${match.team1}`}
                                    className="w-6 h-6 object-contain"
                                  />
                                )}
                                <span className="font-semibold text-sm">{match.team1}</span>
                              </div>
                              {match.score1 !== null && (
                                <Badge variant="outline" className="text-lg px-3">{match.score1}</Badge>
                              )}
                            </div>
                            <div className="text-center text-muted-foreground text-xs">VS</div>
                            <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                              <div className="flex items-center gap-2">
                                {match.seed2 && <Badge variant="outline" className="text-xs">{match.seed2}</Badge>}
                                {match.team2 !== 'TBD' && (
                                  <img 
                                    src={teamLogos[match.team2]} 
                                    alt={`лого ${match.team2}`}
                                    className="w-6 h-6 object-contain"
                                  />
                                )}
                                <span className="font-semibold text-sm">{match.team2}</span>
                              </div>
                              {match.score2 !== null && (
                                <Badge variant="outline" className="text-lg px-3">{match.score2}</Badge>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="animate-fade-in">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-card/50 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Target" size={20} className="text-primary" />
                    Топ-5 Бомбардиры
                  </CardTitle>
                  <CardDescription>Лидеры по набранным очкам</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent border-border">
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Игрок</TableHead>
                        <TableHead className="text-center">№</TableHead>
                        <TableHead>Клуб</TableHead>
                        <TableHead className="text-center">И</TableHead>
                        <TableHead className="text-center">Г</TableHead>
                        <TableHead className="text-center">П</TableHead>
                        <TableHead className="text-center font-bold">О</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topScorers.map((player, index) => (
                        <TableRow key={player.id} className="hover:bg-muted/50 transition-colors border-border">
                          <TableCell className="font-bold text-primary">{index + 1}</TableCell>
                          <TableCell className="font-semibold">{player.name}</TableCell>
                          <TableCell className="text-center text-muted-foreground">{player.number}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <img 
                                src={teamLogos[player.team]} 
                                alt={`лого ${player.team}`}
                                className="w-6 h-6 object-contain"
                              />
                              <span className="text-sm text-muted-foreground">{player.team}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">{player.games}</TableCell>
                          <TableCell className="text-center text-primary">{player.goals}</TableCell>
                          <TableCell className="text-center text-secondary">{player.assists}</TableCell>
                          <TableCell className="text-center font-bold text-lg">{player.points}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Shield" size={20} className="text-primary" />
                    Топ-5 Бомбардиры-Защитники
                  </CardTitle>
                  <CardDescription>Лучшие защитники по очкам</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent border-border">
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Игрок</TableHead>
                        <TableHead className="text-center">№</TableHead>
                        <TableHead>Клуб</TableHead>
                        <TableHead className="text-center">И</TableHead>
                        <TableHead className="text-center">Г</TableHead>
                        <TableHead className="text-center">П</TableHead>
                        <TableHead className="text-center font-bold">О</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topDefenders.map((player, index) => (
                        <TableRow key={player.id} className="hover:bg-muted/50 transition-colors border-border">
                          <TableCell className="font-bold text-primary">{index + 1}</TableCell>
                          <TableCell className="font-semibold">{player.name}</TableCell>
                          <TableCell className="text-center text-muted-foreground">{player.number}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <img 
                                src={teamLogos[player.team]} 
                                alt={`лого ${player.team}`}
                                className="w-6 h-6 object-contain"
                              />
                              <span className="text-sm text-muted-foreground">{player.team}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">{player.games}</TableCell>
                          <TableCell className="text-center text-primary">{player.goals}</TableCell>
                          <TableCell className="text-center text-secondary">{player.assists}</TableCell>
                          <TableCell className="text-center font-bold text-lg">{player.points}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Goal" size={20} className="text-secondary" />
                    Топ-5 Вратари (%ОБ)
                  </CardTitle>
                  <CardDescription>Лучшие вратари по проценту отбитых бросков</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent border-border">
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Игрок</TableHead>
                        <TableHead className="text-center">№</TableHead>
                        <TableHead>Клуб</TableHead>
                        <TableHead className="text-center">И</TableHead>
                        <TableHead className="text-center">В</TableHead>
                        <TableHead className="text-center">П</TableHead>
                        <TableHead className="text-center font-bold">%ОБ</TableHead>
                        <TableHead className="text-center">КН</TableHead>
                        <TableHead className="text-center">И"0"</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topGoalies.map((player, index) => (
                        <TableRow key={player.id} className="hover:bg-muted/50 transition-colors border-border">
                          <TableCell className="font-bold text-primary">{index + 1}</TableCell>
                          <TableCell className="font-semibold">{player.name}</TableCell>
                          <TableCell className="text-center text-muted-foreground">{player.number}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <img 
                                src={teamLogos[player.team]} 
                                alt={`лого ${player.team}`}
                                className="w-6 h-6 object-contain"
                              />
                              <span className="text-sm text-muted-foreground">{player.team}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">{player.games}</TableCell>
                          <TableCell className="text-center text-green-500">{player.wins}</TableCell>
                          <TableCell className="text-center text-red-500">{player.losses}</TableCell>
                          <TableCell className="text-center font-bold text-lg text-primary">{player.svPct?.toFixed(1)}%</TableCell>
                          <TableCell className="text-center">{player.goalsAgainst}</TableCell>
                          <TableCell className="text-center text-secondary">{player.shutouts}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Zap" size={20} className="text-secondary" />
                    Топ-5 Снайперы
                  </CardTitle>
                  <CardDescription>Лидеры по забитым шайбам</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent border-border">
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Игрок</TableHead>
                        <TableHead className="text-center">№</TableHead>
                        <TableHead>Клуб</TableHead>
                        <TableHead className="text-center">И</TableHead>
                        <TableHead className="text-center font-bold">Г</TableHead>
                        <TableHead className="text-center">П</TableHead>
                        <TableHead className="text-center">О</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topSnipers.map((player, index) => (
                        <TableRow key={player.id} className="hover:bg-muted/50 transition-colors border-border">
                          <TableCell className="font-bold text-primary">{index + 1}</TableCell>
                          <TableCell className="font-semibold">{player.name}</TableCell>
                          <TableCell className="text-center text-muted-foreground">{player.number}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <img 
                                src={teamLogos[player.team]} 
                                alt={`лого ${player.team}`}
                                className="w-6 h-6 object-contain"
                              />
                              <span className="text-sm text-muted-foreground">{player.team}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">{player.games}</TableCell>
                          <TableCell className="text-center font-bold text-lg text-secondary">{player.goals}</TableCell>
                          <TableCell className="text-center">{player.assists}</TableCell>
                          <TableCell className="text-center">{player.points}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="animate-fade-in">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="CalendarDays" size={24} className="text-primary" />
                  Календарь игр
                </CardTitle>
                <CardDescription>Расписание матчей сезона</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {games.map((game) => (
                    <Card key={game.id} className="bg-muted/30 border-border hover:bg-muted/50 transition-all">
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-sm">
                              {new Date(game.date).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' })}
                            </Badge>
                            <span className="text-muted-foreground">{game.time}</span>
                          </div>
                          <div className="flex items-center gap-4 flex-1 justify-center">
                            <div className="flex items-center gap-2 flex-1 justify-end">
                              <span className="font-semibold">{game.homeTeam}</span>
                              <img 
                                src={teamLogos[game.homeTeam]} 
                                alt={`лого ${game.homeTeam}`}
                                className="w-8 h-8 object-contain"
                              />
                            </div>
                            {game.homeScore !== null ? (
                              <div className="flex items-center gap-2">
                                <Badge className="bg-primary text-lg px-3">{game.homeScore}</Badge>
                                <span className="text-muted-foreground">:</span>
                                <Badge className="bg-primary text-lg px-3">{game.awayScore}</Badge>
                              </div>
                            ) : (
                              <span className="text-muted-foreground px-4">VS</span>
                            )}
                            <div className="flex items-center gap-2 flex-1">
                              <img 
                                src={teamLogos[game.awayTeam]} 
                                alt={`лого ${game.awayTeam}`}
                                className="w-8 h-8 object-contain"
                              />
                              <span className="font-semibold">{game.awayTeam}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="players" className="animate-fade-in">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Users" size={24} className="text-primary" />
                  Статистика игроков
                </CardTitle>
                <CardDescription>Детальная статистика с фильтрацией</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <Select value={playerFilter} onValueChange={setPlayerFilter}>
                    <SelectTrigger className="w-full md:w-[200px] bg-muted border-border">
                      <SelectValue placeholder="Команда" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все команды</SelectItem>
                      {allTeams.map(team => (
                        <SelectItem key={team.id} value={team.name}>{team.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={positionFilter} onValueChange={setPositionFilter}>
                    <SelectTrigger className="w-full md:w-[200px] bg-muted border-border">
                      <SelectValue placeholder="Позиция" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все позиции</SelectItem>
                      <SelectItem value="Нападающий">Нападающий</SelectItem>
                      <SelectItem value="Защитник">Защитник</SelectItem>
                      <SelectItem value="Вратарь">Вратарь</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full md:w-[200px] bg-muted border-border">
                      <SelectValue placeholder="Сортировка" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="points">По очкам</SelectItem>
                      <SelectItem value="goals">По голам</SelectItem>
                      <SelectItem value="assists">По передачам</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline" onClick={() => {
                    setPlayerFilter('all');
                    setPositionFilter('all');
                    setSortBy('points');
                  }}>
                    <Icon name="RotateCcw" size={16} />
                    Сброс
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent border-border">
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Игрок</TableHead>
                        <TableHead>Команда</TableHead>
                        <TableHead>Позиция</TableHead>
                        <TableHead className="text-center">№</TableHead>
                        <TableHead className="text-center">И</TableHead>
                        <TableHead className="text-center">Г</TableHead>
                        <TableHead className="text-center">П</TableHead>
                        <TableHead className="text-center font-bold">О</TableHead>
                        <TableHead className="text-center">Штр</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPlayers.map((player, index) => (
                        <TableRow key={player.id} className="hover:bg-muted/50 transition-colors border-border">
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell className="font-semibold">
                            <div className="flex items-center gap-2">
                              {player.name}
                              {player.captain && <Badge variant="secondary" className="bg-secondary/20 text-secondary">К</Badge>}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <img 
                                src={teamLogos[player.team]} 
                                alt={`лого ${player.team}`}
                                className="w-6 h-6 object-contain"
                              />
                              <span className="text-muted-foreground">{player.team}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="bg-muted/50">
                              {player.position}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center text-muted-foreground">{player.number}</TableCell>
                          <TableCell className="text-center">{player.games}</TableCell>
                          <TableCell className="text-center text-primary">{player.goals || '-'}</TableCell>
                          <TableCell className="text-center text-secondary">{player.assists || '-'}</TableCell>
                          <TableCell className="text-center font-bold text-lg">{player.points || '-'}</TableCell>
                          <TableCell className="text-center text-muted-foreground">{player.pim || '-'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tickets" className="animate-fade-in">
            <div className="grid gap-6">
              <Card className="bg-card/50 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Ticket" size={24} className="text-primary" />
                    Купить билеты
                  </CardTitle>
                  <CardDescription>Выберите матч и приобретите билеты онлайн</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ticketGames.map((game) => (
                      <Card 
                        key={game.id} 
                        className={`cursor-pointer transition-all ${selectedGame === game.id ? 'bg-primary/10 border-primary' : 'bg-muted/30 border-border hover:bg-muted/50'}`}
                        onClick={() => setSelectedGame(game.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="outline" className="text-xs">
                              {new Date(game.date).toLocaleDateString('ru-RU', { day: '2-digit', month: 'long' })}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Icon name="Clock" size={14} />
                              {game.time}
                            </div>
                          </div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="font-bold text-sm">{game.homeTeam}</span>
                            <span className="text-muted-foreground">-</span>
                            <span className="font-bold text-sm">{game.awayTeam}</span>
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <Icon name="MapPin" size={12} />
                            {game.arena}
                          </div>
                          <div className="mt-3 pt-3 border-t border-border">
                            <div className="text-xs text-muted-foreground mb-1">От</div>
                            <div className="text-lg font-bold text-primary">{game.prices[0]} ₽</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {selectedGame && (
                    <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/50 animate-scale-in">
                      <CardHeader>
                        <CardTitle className="text-xl">Выбор сектора</CardTitle>
                        <CardDescription>
                          {ticketGames.find(g => g.id === selectedGame)?.homeTeam} - {ticketGames.find(g => g.id === selectedGame)?.awayTeam}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-4 gap-3">
                          {ticketGames.find(g => g.id === selectedGame)?.prices.map((price, index) => (
                            <Card 
                              key={index}
                              className={`cursor-pointer transition-all ${selectedSector === index ? 'bg-primary border-primary' : 'bg-muted/50 border-border hover:bg-muted'}`}
                              onClick={() => setSelectedSector(index)}
                            >
                              <CardContent className="p-4 text-center">
                                <div className="text-sm text-muted-foreground mb-1">Сектор {['A', 'B', 'C', 'VIP'][index]}</div>
                                <div className="text-2xl font-bold">{price} ₽</div>
                                <Badge variant="outline" className="mt-2 text-xs">
                                  {['Стандарт', 'Улучшенный', 'Премиум', 'VIP-ложа'][index]}
                                </Badge>
                              </CardContent>
                            </Card>
                          ))}
                        </div>

                        <div className="space-y-3 pt-4 border-t border-border">
                          <div className="grid md:grid-cols-2 gap-3">
                            <div>
                              <label className="text-sm text-muted-foreground mb-1 block">Количество билетов</label>
                              <Input type="number" min="1" max="10" defaultValue="1" className="bg-muted border-border" />
                            </div>
                            <div>
                              <label className="text-sm text-muted-foreground mb-1 block">Email для билетов</label>
                              <Input type="email" placeholder="your@email.com" className="bg-muted border-border" />
                            </div>
                          </div>
                          
                          <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                            <Icon name="ShoppingCart" size={20} className="mr-2" />
                            Купить билеты
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rules" className="animate-fade-in">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="FileText" size={24} className="text-primary" />
                  Регламент лиги
                </CardTitle>
                <CardDescription>Правила и положения турнира VPHL</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Trophy" size={20} className="text-primary" />
                      1. Формат турнира
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      VPHL состоит из 23 команд, разделенных на две конференции (Западная - 12 команд, Восточная - 11 команд). 
                      Регулярный сезон проводится по системе "каждый с каждым" в 2 круга. 
                      По итогам регулярного чемпионата 16 лучших команд выходят в плей-офф.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Calculator" size={20} className="text-primary" />
                      2. Начисление очков
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-green-500 mt-1" />
                        <span>Победа в основное время (В) - 3 очка</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Clock" size={16} className="text-emerald-400 mt-1" />
                        <span>Победа в овертайме/буллитах (ВБ) - 2 очка</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="MinusCircle" size={16} className="text-orange-400 mt-1" />
                        <span>Поражение в овертайме/буллитах (ПБ) - 1 очко</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="XCircle" size={16} className="text-red-500 mt-1" />
                        <span>Поражение в основное время (П) - 0 очков</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Users" size={20} className="text-primary" />
                      3. Составы команд
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      В заявке команды может быть не более 25 игроков, включая 3 вратарей. 
                      Каждая команда должна иметь капитана и двух ассистентов капитана.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Award" size={20} className="text-secondary" />
                      4. Плей-офф
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      В плей-офф выходят 16 лучших команд. Сетка составляется по принципу: 1 место против 16, 2 против 15 и т.д.
                      Все серии проводятся до 4 побед. При равенстве счета в матче плей-офф 
                      назначается овертайм без ограничения времени до первой заброшенной шайбы (внезапная смерть).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border mt-16 bg-card/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Trophy" size={24} className="text-primary" />
              <span className="font-semibold">VPHL 2025</span>
            </div>
            <div className="flex gap-6 text-muted-foreground text-sm">
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
              <a href="#" className="hover:text-primary transition-colors">О лиге</a>
              <a href="#" className="hover:text-primary transition-colors">Партнеры</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}