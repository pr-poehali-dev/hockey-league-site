import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const westernTeams = [
  { id: 1, name: 'Северные Волки', games: 24, wins: 18, losses: 4, ot: 2, points: 38, goalsFor: 92, goalsAgainst: 54, conference: 'Запад' },
  { id: 2, name: 'Стальные Акулы', games: 24, wins: 16, losses: 6, ot: 2, points: 34, goalsFor: 88, goalsAgainst: 61, conference: 'Запад' },
  { id: 3, name: 'Молнии', games: 24, wins: 15, losses: 7, ot: 2, points: 32, goalsFor: 79, goalsAgainst: 65, conference: 'Запад' },
  { id: 4, name: 'Красные Драконы', games: 24, wins: 14, losses: 8, ot: 2, points: 30, goalsFor: 76, goalsAgainst: 68, conference: 'Запад' },
  { id: 5, name: 'Снежные Барсы', games: 24, wins: 12, losses: 9, ot: 3, points: 27, goalsFor: 71, goalsAgainst: 70, conference: 'Запад' },
  { id: 6, name: 'Титаны', games: 24, wins: 11, losses: 10, ot: 3, points: 25, goalsFor: 68, goalsAgainst: 72, conference: 'Запад' },
  { id: 7, name: 'Ледяные Медведи', games: 24, wins: 9, losses: 12, ot: 3, points: 21, goalsFor: 62, goalsAgainst: 78, conference: 'Запад' },
  { id: 8, name: 'Рыцари', games: 24, wins: 5, losses: 17, ot: 2, points: 12, goalsFor: 51, goalsAgainst: 95, conference: 'Запад' },
];

const easternTeams = [
  { id: 9, name: 'Огненные Лисы', games: 24, wins: 17, losses: 5, ot: 2, points: 36, goalsFor: 87, goalsAgainst: 58, conference: 'Восток' },
  { id: 10, name: 'Полярные Совы', games: 24, wins: 15, losses: 7, ot: 2, points: 32, goalsFor: 81, goalsAgainst: 63, conference: 'Восток' },
  { id: 11, name: 'Грозные Орлы', games: 24, wins: 14, losses: 8, ot: 2, points: 30, goalsFor: 74, goalsAgainst: 66, conference: 'Восток' },
  { id: 12, name: 'Металлурги', games: 24, wins: 13, losses: 9, ot: 2, points: 28, goalsFor: 72, goalsAgainst: 68, conference: 'Восток' },
  { id: 13, name: 'Черные Пантеры', games: 24, wins: 11, losses: 10, ot: 3, points: 25, goalsFor: 69, goalsAgainst: 71, conference: 'Восток' },
  { id: 14, name: 'Ураганы', games: 24, wins: 10, losses: 11, ot: 3, points: 23, goalsFor: 65, goalsAgainst: 74, conference: 'Восток' },
  { id: 15, name: 'Горные Львы', games: 24, wins: 7, losses: 14, ot: 3, points: 17, goalsFor: 58, goalsAgainst: 82, conference: 'Восток' },
  { id: 16, name: 'Кометы', games: 24, wins: 4, losses: 18, ot: 2, points: 10, goalsFor: 48, goalsAgainst: 98, conference: 'Восток' },
];

const allTeams = [...westernTeams, ...easternTeams];

const players = [
  { id: 1, name: 'Иванов Алексей', team: 'Северные Волки', position: 'Нападающий', number: 91, games: 24, goals: 28, assists: 35, points: 63, pim: 12, captain: true },
  { id: 2, name: 'Петров Дмитрий', team: 'Стальные Акулы', position: 'Нападающий', number: 87, games: 24, goals: 24, assists: 32, points: 56, pim: 18, captain: true },
  { id: 3, name: 'Смирнов Сергей', team: 'Молнии', position: 'Нападающий', number: 19, games: 24, goals: 22, assists: 29, points: 51, pim: 8, captain: false },
  { id: 4, name: 'Козлов Андрей', team: 'Северные Волки', position: 'Защитник', number: 44, games: 24, goals: 8, assists: 28, points: 36, pim: 24, captain: false },
  { id: 5, name: 'Морозов Павел', team: 'Красные Драконы', position: 'Нападающий', number: 71, games: 24, goals: 19, assists: 23, points: 42, pim: 14, captain: true },
  { id: 6, name: 'Федоров Максим', team: 'Снежные Барсы', position: 'Нападающий', number: 13, games: 24, goals: 17, assists: 21, points: 38, pim: 22, captain: true },
  { id: 7, name: 'Соколов Артем', team: 'Молнии', position: 'Защитник', number: 27, games: 24, goals: 6, assists: 24, points: 30, pim: 30, captain: true },
  { id: 8, name: 'Васильев Николай', team: 'Огненные Лисы', position: 'Нападающий', number: 88, games: 24, goals: 26, assists: 30, points: 56, pim: 10, captain: false },
  { id: 9, name: 'Кузнецов Сергей', team: 'Полярные Совы', position: 'Защитник', number: 7, games: 24, goals: 10, assists: 26, points: 36, pim: 18, captain: false },
  { id: 10, name: 'Лебедев Максим', team: 'Огненные Лисы', position: 'Нападающий', number: 17, games: 24, goals: 20, assists: 24, points: 44, pim: 6, captain: true },
  
  { id: 11, name: 'Новиков Иван', team: 'Стальные Акулы', position: 'Вратарь', number: 31, games: 22, wins: 16, losses: 6, svPct: 92.5, shutouts: 3, goalsAgainst: 48, captain: false },
  { id: 12, name: 'Григорьев Александр', team: 'Северные Волки', position: 'Вратарь', number: 1, games: 22, wins: 17, losses: 5, svPct: 93.2, shutouts: 4, goalsAgainst: 45, captain: false },
  { id: 13, name: 'Романов Дмитрий', team: 'Огненные Лисы', position: 'Вратарь', number: 30, games: 21, wins: 15, losses: 6, svPct: 91.8, shutouts: 2, goalsAgainst: 52, captain: false },
  { id: 14, name: 'Павлов Андрей', team: 'Молнии', position: 'Вратарь', number: 35, games: 20, wins: 13, losses: 7, svPct: 90.9, shutouts: 2, goalsAgainst: 58, captain: false },
  { id: 15, name: 'Белов Евгений', team: 'Полярные Совы', position: 'Вратарь', number: 29, games: 21, wins: 14, losses: 7, svPct: 91.5, shutouts: 1, goalsAgainst: 54, captain: false },
];

const games = [
  { id: 1, date: '2025-10-20', homeTeam: 'Северные Волки', awayTeam: 'Стальные Акулы', homeScore: null, awayScore: null, time: '19:00' },
  { id: 2, date: '2025-10-20', homeTeam: 'Молнии', awayTeam: 'Красные Драконы', homeScore: null, awayScore: null, time: '19:30' },
  { id: 3, date: '2025-10-20', homeTeam: 'Огненные Лисы', awayTeam: 'Полярные Совы', homeScore: null, awayScore: null, time: '20:00' },
  { id: 4, date: '2025-10-18', homeTeam: 'Северные Волки', awayTeam: 'Рыцари', homeScore: 5, awayScore: 2, time: '19:00' },
  { id: 5, date: '2025-10-18', homeTeam: 'Титаны', awayTeam: 'Молнии', homeScore: 3, awayScore: 4, time: '18:30' },
  { id: 6, date: '2025-10-17', homeTeam: 'Стальные Акулы', awayTeam: 'Снежные Барсы', homeScore: 4, awayScore: 3, time: '19:00' },
];

const playoffBracket = [
  { round: '1/8 финала', matches: [
    { team1: 'Северные Волки', seed1: 1, team2: 'Кометы', seed2: 16, score1: null, score2: null },
    { team1: 'Огненные Лисы', seed1: 2, team2: 'Рыцари', seed2: 15, score1: null, score2: null },
    { team1: 'Стальные Акулы', seed1: 3, team2: 'Горные Львы', seed2: 14, score1: null, score2: null },
    { team1: 'Полярные Совы', seed1: 4, team2: 'Ледяные Медведи', seed2: 13, score1: null, score2: null },
    { team1: 'Молнии', seed1: 5, team2: 'Ураганы', seed2: 12, score1: null, score2: null },
    { team1: 'Грозные Орлы', seed1: 6, team2: 'Титаны', seed2: 11, score1: null, score2: null },
    { team1: 'Красные Драконы', seed1: 7, team2: 'Черные Пантеры', seed2: 10, score1: null, score2: null },
    { team1: 'Металлурги', seed1: 8, team2: 'Снежные Барсы', seed2: 9, score1: null, score2: null },
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

export default function Index() {
  const [selectedTab, setSelectedTab] = useState('standings');
  const [playerFilter, setPlayerFilter] = useState('all');
  const [positionFilter, setPositionFilter] = useState('all');
  const [sortBy, setSortBy] = useState('points');

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
              <TableHead className="text-center">П</TableHead>
              <TableHead className="text-center">ОТ</TableHead>
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
                  <div className="flex items-center gap-2">
                    {team.name}
                    {index < 8 && <Badge variant="default" className="bg-primary/20 text-primary">Плей-офф</Badge>}
                  </div>
                </TableCell>
                <TableCell className="text-center">{team.games}</TableCell>
                <TableCell className="text-center text-green-500">{team.wins}</TableCell>
                <TableCell className="text-center text-red-500">{team.losses}</TableCell>
                <TableCell className="text-center text-yellow-500">{team.ot}</TableCell>
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
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Trophy" size={32} className="text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Хоккейная Лига</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid mb-8 bg-muted/50">
            <TabsTrigger value="standings" className="gap-2">
              <Icon name="Table" size={16} />
              Таблица
            </TabsTrigger>
            <TabsTrigger value="playoffs" className="gap-2">
              <Icon name="Award" size={16} />
              Плей-офф
            </TabsTrigger>
            <TabsTrigger value="stats" className="gap-2">
              <Icon name="BarChart3" size={16} />
              Статистика
            </TabsTrigger>
            <TabsTrigger value="calendar" className="gap-2">
              <Icon name="Calendar" size={16} />
              Календарь
            </TabsTrigger>
            <TabsTrigger value="players" className="gap-2">
              <Icon name="Users" size={16} />
              Игроки
            </TabsTrigger>
            <TabsTrigger value="rules" className="gap-2">
              <Icon name="FileText" size={16} />
              Регламент
            </TabsTrigger>
          </TabsList>

          <TabsContent value="standings" className="animate-fade-in">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                  Турнирная таблица
                </CardTitle>
                <CardDescription>Регулярный сезон 2025</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {renderTeamTable(westernTeams, 'Западная Конференция')}
                {renderTeamTable(easternTeams, 'Восточная Конференция')}
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
                                <span className="font-semibold">{match.team1}</span>
                              </div>
                              {match.score1 !== null && (
                                <Badge variant="outline" className="text-lg px-3">{match.score1}</Badge>
                              )}
                            </div>
                            <div className="text-center text-muted-foreground text-sm">VS</div>
                            <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                              <div className="flex items-center gap-2">
                                {match.seed2 && <Badge variant="outline" className="text-xs">{match.seed2}</Badge>}
                                <span className="font-semibold">{match.team2}</span>
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
                          <TableCell className="text-sm text-muted-foreground">{player.team}</TableCell>
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
                          <TableCell className="text-sm text-muted-foreground">{player.team}</TableCell>
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
                          <TableCell className="text-sm text-muted-foreground">{player.team}</TableCell>
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
                          <TableCell className="text-sm text-muted-foreground">{player.team}</TableCell>
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
                            <span className="font-semibold text-right flex-1">{game.homeTeam}</span>
                            {game.homeScore !== null ? (
                              <div className="flex items-center gap-2">
                                <Badge className="bg-primary text-lg px-3">{game.homeScore}</Badge>
                                <span className="text-muted-foreground">:</span>
                                <Badge className="bg-primary text-lg px-3">{game.awayScore}</Badge>
                              </div>
                            ) : (
                              <span className="text-muted-foreground px-4">VS</span>
                            )}
                            <span className="font-semibold text-left flex-1">{game.awayTeam}</span>
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
                          <TableCell className="text-muted-foreground">{player.team}</TableCell>
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

          <TabsContent value="rules" className="animate-fade-in">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="FileText" size={24} className="text-primary" />
                  Регламент лиги
                </CardTitle>
                <CardDescription>Правила и положения турнира</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Trophy" size={20} className="text-primary" />
                      1. Формат турнира
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Лига состоит из 16 команд, разделенных на две конференции (Западная и Восточная) по 8 команд в каждой. 
                      Регулярный сезон проводится по системе "каждый с каждым" в 3 круга. 
                      По итогам регулярного чемпионата все 16 команд выходят в плей-офф.
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
                        <span>Победа в основное время - 3 очка</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Clock" size={16} className="text-yellow-500 mt-1" />
                        <span>Победа в овертайме/буллитах - 2 очка</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="MinusCircle" size={16} className="text-orange-500 mt-1" />
                        <span>Поражение в овертайме/буллитах - 1 очко</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="XCircle" size={16} className="text-red-500 mt-1" />
                        <span>Поражение в основное время - 0 очков</span>
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
                      В плей-офф выходят все 16 команд. Сетка составляется по принципу: 1 место против 16, 2 против 15 и т.д.
                      Все серии проводятся до 4 побед. При равенстве счета в матче плей-офф 
                      назначается овертайм без ограничения времени до первой заброшенной шайбы.
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
              <span className="font-semibold">Хоккейная Лига 2025</span>
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
