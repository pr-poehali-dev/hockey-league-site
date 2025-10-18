import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { teamsInfo } from '@/data/teams';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface Match {
  id: number;
  team1: string;
  team2: string;
  team1Score: number;
  team2Score: number;
  matchType: 'regular' | 'ot' | 'shootout';
  date: string;
}

export default function AdminPanel() {
  const [selectedTab, setSelectedTab] = useState('matches');
  
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [team1Score, setTeam1Score] = useState('');
  const [team2Score, setTeam2Score] = useState('');
  const [matchType, setMatchType] = useState<'regular' | 'ot' | 'shootout'>('regular');
  const [matchDate, setMatchDate] = useState('');
  
  const [matches, setMatches] = useState<Match[]>([]);
  const [matchToDelete, setMatchToDelete] = useState<number | null>(null);
  
  const [playerName, setPlayerName] = useState('');
  const [playerTeam, setPlayerTeam] = useState('');
  const [playerNumber, setPlayerNumber] = useState('');
  const [playerPosition, setPlayerPosition] = useState<'Нападающий' | 'Защитник'>('Нападающий');
  const [playerGoals, setPlayerGoals] = useState('');
  const [playerAssists, setPlayerAssists] = useState('');
  
  const [goalieTeam, setGoalieTeam] = useState('');
  const [goalieName, setGoalieName] = useState('');
  const [goalieNumber, setGoalieNumber] = useState('');
  const [goalieCoefficient, setGoalieCoefficient] = useState('');

  const handleAddMatch = () => {
    if (!team1 || !team2 || !team1Score || !team2Score || !matchDate) {
      alert('Заполните все поля!');
      return;
    }
    
    const newMatch: Match = {
      id: Date.now(),
      team1,
      team2,
      team1Score: parseInt(team1Score),
      team2Score: parseInt(team2Score),
      matchType,
      date: matchDate,
    };
    
    setMatches([...matches, newMatch]);
    setTeam1('');
    setTeam2('');
    setTeam1Score('');
    setTeam2Score('');
    setMatchType('regular');
    setMatchDate('');
  };

  const handleDeleteMatch = (id: number) => {
    setMatches(matches.filter(m => m.id !== id));
    setMatchToDelete(null);
  };

  const handleAddPlayer = () => {
    if (!playerName || !playerTeam || !playerNumber) {
      alert('Заполните обязательные поля!');
      return;
    }
    
    alert(`Игрок ${playerName} добавлен в команду ${playerTeam}!`);
    setPlayerName('');
    setPlayerTeam('');
    setPlayerNumber('');
    setPlayerGoals('');
    setPlayerAssists('');
  };

  const handleAddGoalieStats = () => {
    if (!goalieName || !goalieTeam || !goalieCoefficient) {
      alert('Заполните все поля!');
      return;
    }
    
    alert(`Статистика вратаря ${goalieName} обновлена! Коэффициент: ${goalieCoefficient}`);
    setGoalieName('');
    setGoalieTeam('');
    setGoalieNumber('');
    setGoalieCoefficient('');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Icon name="ArrowLeft" size={24} className="text-primary" />
              <div className="flex items-center gap-3">
                <Icon name="Shield" size={36} className="text-primary" />
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Админ-панель</h1>
                  <p className="text-sm text-muted-foreground">Управление лигой</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50">
            <TabsTrigger value="matches" className="gap-2">
              <Icon name="CalendarPlus" size={16} />
              Матчи
            </TabsTrigger>
            <TabsTrigger value="players" className="gap-2">
              <Icon name="UserPlus" size={16} />
              Игроки
            </TabsTrigger>
            <TabsTrigger value="goalies" className="gap-2">
              <Icon name="Goal" size={16} />
              Вратари
            </TabsTrigger>
          </TabsList>

          <TabsContent value="matches" className="animate-fade-in">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-card/80 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Plus" size={24} className="text-primary" />
                    Добавить матч
                  </CardTitle>
                  <CardDescription>Введите данные о прошедшем матче</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Команда 1</Label>
                    <Select value={team1} onValueChange={setTeam1}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите команду" />
                      </SelectTrigger>
                      <SelectContent>
                        {teamsInfo.map(team => (
                          <SelectItem key={team.id} value={team.name}>{team.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Счёт команды 1</Label>
                    <Input 
                      type="number" 
                      value={team1Score} 
                      onChange={(e) => setTeam1Score(e.target.value)}
                      placeholder="0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Команда 2</Label>
                    <Select value={team2} onValueChange={setTeam2}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите команду" />
                      </SelectTrigger>
                      <SelectContent>
                        {teamsInfo.map(team => (
                          <SelectItem key={team.id} value={team.name}>{team.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Счёт команды 2</Label>
                    <Input 
                      type="number" 
                      value={team2Score} 
                      onChange={(e) => setTeam2Score(e.target.value)}
                      placeholder="0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Как закончился матч</Label>
                    <Select value={matchType} onValueChange={(val: 'regular' | 'ot' | 'shootout') => setMatchType(val)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="regular">Основное время</SelectItem>
                        <SelectItem value="ot">Овертайм</SelectItem>
                        <SelectItem value="shootout">Буллиты</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Дата матча</Label>
                    <Input 
                      type="date" 
                      value={matchDate} 
                      onChange={(e) => setMatchDate(e.target.value)}
                    />
                  </div>

                  <Button onClick={handleAddMatch} className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить матч
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="List" size={24} className="text-secondary" />
                    Добавленные матчи
                  </CardTitle>
                  <CardDescription>Список всех добавленных матчей</CardDescription>
                </CardHeader>
                <CardContent>
                  {matches.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">Пока нет добавленных матчей</p>
                  ) : (
                    <div className="space-y-3">
                      {matches.map(match => (
                        <div key={match.id} className="p-4 bg-muted/50 rounded-lg border border-border">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">{new Date(match.date).toLocaleDateString('ru-RU')}</span>
                            <span className="text-xs px-2 py-1 bg-primary/20 rounded">
                              {match.matchType === 'regular' ? 'ОВ' : match.matchType === 'ot' ? 'ОТ' : 'Б'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-semibold">{match.team1}</span>
                            <span className="text-lg font-bold">{match.team1Score} : {match.team2Score}</span>
                            <span className="font-semibold">{match.team2}</span>
                          </div>
                          <Button 
                            variant="destructive" 
                            size="sm" 
                            className="w-full"
                            onClick={() => setMatchToDelete(match.id)}
                          >
                            <Icon name="Trash2" size={14} className="mr-2" />
                            Удалить
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="players" className="animate-fade-in">
            <Card className="bg-card/80 backdrop-blur border-border max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="UserPlus" size={24} className="text-primary" />
                  Добавить игрока
                </CardTitle>
                <CardDescription>Добавьте нового игрока в команду</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Имя игрока</Label>
                  <Input 
                    value={playerName} 
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Иванов Алексей"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Команда</Label>
                  <Select value={playerTeam} onValueChange={setPlayerTeam}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите команду" />
                    </SelectTrigger>
                    <SelectContent>
                      {teamsInfo.map(team => (
                        <SelectItem key={team.id} value={team.name}>{team.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Номер игрока</Label>
                  <Input 
                    type="number" 
                    value={playerNumber} 
                    onChange={(e) => setPlayerNumber(e.target.value)}
                    placeholder="91"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Позиция</Label>
                  <Select value={playerPosition} onValueChange={(val: 'Нападающий' | 'Защитник') => setPlayerPosition(val)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Нападающий">Нападающий</SelectItem>
                      <SelectItem value="Защитник">Защитник</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Голы</Label>
                    <Input 
                      type="number" 
                      value={playerGoals} 
                      onChange={(e) => setPlayerGoals(e.target.value)}
                      placeholder="0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Передачи</Label>
                    <Input 
                      type="number" 
                      value={playerAssists} 
                      onChange={(e) => setPlayerAssists(e.target.value)}
                      placeholder="0"
                    />
                  </div>
                </div>

                <Button onClick={handleAddPlayer} className="w-full">
                  <Icon name="UserPlus" size={16} className="mr-2" />
                  Добавить игрока
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goalies" className="animate-fade-in">
            <Card className="bg-card/80 backdrop-blur border-border max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Goal" size={24} className="text-secondary" />
                  Статистика вратаря
                </CardTitle>
                <CardDescription>Добавьте статистику вратаря за матч</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Команда</Label>
                  <Select value={goalieTeam} onValueChange={setGoalieTeam}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите команду" />
                    </SelectTrigger>
                    <SelectContent>
                      {teamsInfo.map(team => (
                        <SelectItem key={team.id} value={team.name}>{team.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Имя вратаря</Label>
                  <Input 
                    value={goalieName} 
                    onChange={(e) => setGoalieName(e.target.value)}
                    placeholder="Новиков Иван"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Номер вратаря</Label>
                  <Input 
                    type="number" 
                    value={goalieNumber} 
                    onChange={(e) => setGoalieNumber(e.target.value)}
                    placeholder="31"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Коэффициент за матч (%)</Label>
                  <Input 
                    type="number" 
                    step="0.1"
                    value={goalieCoefficient} 
                    onChange={(e) => setGoalieCoefficient(e.target.value)}
                    placeholder="92.5"
                  />
                  <p className="text-xs text-muted-foreground">
                    Процент отбитых бросков будет автоматически рассчитан по итогу сезона
                  </p>
                </div>

                <Button onClick={handleAddGoalieStats} className="w-full">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить статистику
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <AlertDialog open={matchToDelete !== null} onOpenChange={() => setMatchToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Точно удалить?</AlertDialogTitle>
            <AlertDialogDescription>
              Вы уверены, что хотите удалить этот матч? Это действие нельзя отменить.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction onClick={() => matchToDelete && handleDeleteMatch(matchToDelete)}>
              Удалить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
