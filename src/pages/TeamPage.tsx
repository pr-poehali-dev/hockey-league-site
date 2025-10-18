import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';
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

export default function TeamPage() {
  const { teamName } = useParams<{ teamName: string }>();
  const team = teamsInfo.find(t => t.name === teamName);
  
  if (!team) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <Icon name="AlertCircle" size={48} className="mx-auto mb-4 text-destructive" />
            <h2 className="text-2xl font-bold mb-2">Команда не найдена</h2>
            <p className="text-muted-foreground mb-4">Команда "{teamName}" не существует</p>
            <Link to="/">
              <Button>
                <Icon name="Home" size={16} className="mr-2" />
                На главную
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const teamPlayers = players.filter(p => p.team === team.name);
  const forwards = teamPlayers.filter(p => p.position === 'Нападающий');
  const defenders = teamPlayers.filter(p => p.position === 'Защитник');
  const goalies = teamPlayers.filter(p => p.position === 'Вратарь');

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Icon name="ArrowLeft" size={24} className="text-primary" />
              <div className="flex items-center gap-3">
                <Icon name="Trophy" size={36} className="text-primary" />
                <div>
                  <h1 className="text-3xl font-bold text-foreground">VPHL</h1>
                  <p className="text-sm text-muted-foreground">Virtual Puck Hockey League</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8 bg-card/80 backdrop-blur border-border overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 flex items-center justify-center">
                <img 
                  src={teamLogos[team.name]} 
                  alt={`лого ${team.name}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">{team.fullName}</h1>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    <span>Конференция: {team.conference}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    <span>Основан: {team.founded}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Building" size={16} />
                    <span>{team.arena}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="BookOpen" size={20} className="text-primary" />
                  История клуба
                </h3>
                <p className="text-muted-foreground leading-relaxed">{team.history}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="User" size={20} className="text-primary" />
                  Главный тренер
                </h3>
                <p className="text-2xl font-bold text-primary">{team.headCoach}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Users" size={24} className="text-primary" />
              Состав команды
            </CardTitle>
          </CardHeader>
          <CardContent>
            {teamPlayers.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                Информация о составе команды пока недоступна
              </p>
            ) : (
              <div className="space-y-8">
                {forwards.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Badge variant="outline" className="bg-primary/20 text-primary">
                        Нападающие
                      </Badge>
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent border-border">
                          <TableHead className="w-12">#</TableHead>
                          <TableHead>Игрок</TableHead>
                          <TableHead className="text-center">И</TableHead>
                          <TableHead className="text-center">Г</TableHead>
                          <TableHead className="text-center">П</TableHead>
                          <TableHead className="text-center font-bold">О</TableHead>
                          <TableHead className="text-center">Штр</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {forwards.map((player) => (
                          <TableRow key={player.id} className="hover:bg-muted/50 transition-colors border-border">
                            <TableCell className="font-medium">{player.number}</TableCell>
                            <TableCell className="font-semibold">
                              <div className="flex items-center gap-2">
                                {player.name}
                                {player.captain && <Badge variant="secondary" className="bg-secondary/20 text-secondary">К</Badge>}
                              </div>
                            </TableCell>
                            <TableCell className="text-center">{player.games}</TableCell>
                            <TableCell className="text-center text-primary">{player.goals}</TableCell>
                            <TableCell className="text-center text-secondary">{player.assists}</TableCell>
                            <TableCell className="text-center font-bold text-lg">{player.points}</TableCell>
                            <TableCell className="text-center text-muted-foreground">{player.pim}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}

                {defenders.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Badge variant="outline" className="bg-secondary/20 text-secondary">
                        Защитники
                      </Badge>
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent border-border">
                          <TableHead className="w-12">#</TableHead>
                          <TableHead>Игрок</TableHead>
                          <TableHead className="text-center">И</TableHead>
                          <TableHead className="text-center">Г</TableHead>
                          <TableHead className="text-center">П</TableHead>
                          <TableHead className="text-center font-bold">О</TableHead>
                          <TableHead className="text-center">Штр</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {defenders.map((player) => (
                          <TableRow key={player.id} className="hover:bg-muted/50 transition-colors border-border">
                            <TableCell className="font-medium">{player.number}</TableCell>
                            <TableCell className="font-semibold">
                              <div className="flex items-center gap-2">
                                {player.name}
                                {player.captain && <Badge variant="secondary" className="bg-secondary/20 text-secondary">К</Badge>}
                              </div>
                            </TableCell>
                            <TableCell className="text-center">{player.games}</TableCell>
                            <TableCell className="text-center text-primary">{player.goals}</TableCell>
                            <TableCell className="text-center text-secondary">{player.assists}</TableCell>
                            <TableCell className="text-center font-bold text-lg">{player.points}</TableCell>
                            <TableCell className="text-center text-muted-foreground">{player.pim}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}

                {goalies.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Badge variant="outline" className="bg-accent/20 text-accent">
                        Вратари
                      </Badge>
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent border-border">
                          <TableHead className="w-12">#</TableHead>
                          <TableHead>Игрок</TableHead>
                          <TableHead className="text-center">И</TableHead>
                          <TableHead className="text-center">В</TableHead>
                          <TableHead className="text-center">П</TableHead>
                          <TableHead className="text-center">%ОБ</TableHead>
                          <TableHead className="text-center">НА</TableHead>
                          <TableHead className="text-center">ПШ</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {goalies.map((player) => (
                          <TableRow key={player.id} className="hover:bg-muted/50 transition-colors border-border">
                            <TableCell className="font-medium">{player.number}</TableCell>
                            <TableCell className="font-semibold">
                              <div className="flex items-center gap-2">
                                {player.name}
                                {player.captain && <Badge variant="secondary" className="bg-secondary/20 text-secondary">К</Badge>}
                              </div>
                            </TableCell>
                            <TableCell className="text-center">{player.games}</TableCell>
                            <TableCell className="text-center text-green-500">{player.wins}</TableCell>
                            <TableCell className="text-center text-red-500">{player.losses}</TableCell>
                            <TableCell className="text-center font-bold">{player.svPct}%</TableCell>
                            <TableCell className="text-center text-primary">{player.shutouts}</TableCell>
                            <TableCell className="text-center text-muted-foreground">{player.goalsAgainst}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
