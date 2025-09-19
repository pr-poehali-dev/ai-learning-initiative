import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard')

  const statsData = [
    { label: 'Курсы пройдено', value: 12, total: 20, icon: 'BookOpen' },
    { label: 'Часов обучения', value: 48, total: 100, icon: 'Clock' },
    { label: 'Задач решено', value: 156, total: 250, icon: 'CheckCircle' },
    { label: 'Уровень ИИ', value: 75, total: 100, icon: 'Brain' }
  ]

  const courses = [
    {
      title: 'Основы машинного обучения',
      description: 'Изучите базовые концепции ML и нейронных сетей',
      progress: 65,
      level: 'Начинающий',
      duration: '8 часов',
      icon: 'Bot'
    },
    {
      title: 'Глубокое обучение',
      description: 'Продвинутые техники deep learning и CNN',
      progress: 30,
      level: 'Продвинутый',
      duration: '12 часов',
      icon: 'Network'
    },
    {
      title: 'NLP и обработка текста',
      description: 'Natural Language Processing с Python',
      progress: 90,
      level: 'Средний',
      duration: '6 часов',
      icon: 'MessageSquare'
    },
    {
      title: 'Компьютерное зрение',
      description: 'Анализ изображений и видео с помощью ИИ',
      progress: 0,
      level: 'Средний',
      duration: '10 часов',
      icon: 'Eye'
    }
  ]

  const practiceProjects = [
    {
      title: 'Классификация изображений',
      difficulty: 'Легко',
      points: 100,
      completed: true
    },
    {
      title: 'Чат-бот поддержки',
      difficulty: 'Средне',
      points: 250,
      completed: true
    },
    {
      title: 'Прогнозирование цен',
      difficulty: 'Сложно',
      points: 500,
      completed: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center">
                <Icon name="Brain" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  AI Академия
                </h1>
                <p className="text-sm text-muted-foreground">Платформа изучения ИИ</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              {[
                { id: 'dashboard', label: 'Дашборд', icon: 'BarChart3' },
                { id: 'courses', label: 'Курсы', icon: 'BookOpen' },
                { id: 'practice', label: 'Практика', icon: 'Code' },
                { id: 'profile', label: 'Профиль', icon: 'User' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <Button variant="outline" size="sm">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'dashboard' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-2">Добро пожаловать в AI Академию! 🚀</h2>
              <p className="text-muted-foreground">Отслеживайте свой прогресс в изучении искусственного интеллекта</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-200 animate-scale-in">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center">
                        <Icon name={stat.icon as any} size={24} className="text-white" />
                      </div>
                      <Badge variant="secondary">{Math.round((stat.value / stat.total) * 100)}%</Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}<span className="text-sm text-muted-foreground">/{stat.total}</span></p>
                      <Progress value={(stat.value / stat.total) * 100} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Activity" size={20} />
                  <span>Недавняя активность</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: 'Завершен урок "Введение в нейронные сети"', time: '2 часа назад', type: 'course' },
                    { action: 'Решена задача по классификации данных', time: '5 часов назад', type: 'practice' },
                    { action: 'Получен сертификат "Основы ML"', time: '1 день назад', type: 'achievement' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'course' ? 'bg-blue-100 text-blue-600' :
                        activity.type === 'practice' ? 'bg-green-100 text-green-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        <Icon name={
                          activity.type === 'course' ? 'BookOpen' :
                          activity.type === 'practice' ? 'Code' : 'Award'
                        } size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'courses' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-2">Каталог курсов</h2>
              <p className="text-muted-foreground">Выберите курс для изучения искусственного интеллекта</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">Все курсы</TabsTrigger>
                <TabsTrigger value="beginner">Начинающий</TabsTrigger>
                <TabsTrigger value="intermediate">Средний</TabsTrigger>
                <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-200 group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon name={course.icon as any} size={24} className="text-white" />
                          </div>
                          <Badge variant={course.level === 'Начинающий' ? 'default' : course.level === 'Средний' ? 'secondary' : 'destructive'}>
                            {course.level}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Icon name="Clock" size={14} />
                              <span>{course.duration}</span>
                            </span>
                            <span>{course.progress}% завершено</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                          <Button className="w-full" variant={course.progress > 0 ? 'default' : 'outline'}>
                            {course.progress > 0 ? 'Продолжить' : 'Начать курс'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'practice' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-2">Практические задания</h2>
              <p className="text-muted-foreground">Применяйте знания на реальных проектах</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      {project.completed && (
                        <Icon name="CheckCircle" size={20} className="text-green-600" />
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={
                        project.difficulty === 'Легко' ? 'default' :
                        project.difficulty === 'Средне' ? 'secondary' : 'destructive'
                      }>
                        {project.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{project.points} баллов</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant={project.completed ? 'outline' : 'default'}>
                      {project.completed ? 'Повторить' : 'Начать'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'profile' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-2">Профиль пользователя</h2>
              <p className="text-muted-foreground">Ваши достижения и настройки</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Информация о пользователе</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Александр Иванов</h3>
                      <p className="text-muted-foreground">AI энтузиаст</p>
                      <p className="text-sm text-muted-foreground">Участник с января 2024</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Статистика</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-2xl font-bold">1250</p>
                        <p className="text-sm text-muted-foreground">Общий рейтинг</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">15</p>
                        <p className="text-sm text-muted-foreground">Стрик дней</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Достижения</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: 'Первые шаги', icon: 'Footprints', unlocked: true },
                      { name: 'ML мастер', icon: 'Award', unlocked: true },
                      { name: 'Код ниндзя', icon: 'Zap', unlocked: false },
                      { name: 'ИИ гуру', icon: 'Crown', unlocked: false }
                    ].map((achievement, index) => (
                      <div key={index} className={`flex items-center space-x-3 p-2 rounded-lg ${
                        achievement.unlocked ? 'bg-muted' : 'bg-muted/50 opacity-50'
                      }`}>
                        <Icon name={achievement.icon as any} size={20} className={achievement.unlocked ? 'text-yellow-600' : 'text-muted-foreground'} />
                        <span className="text-sm font-medium">{achievement.name}</span>
                        {achievement.unlocked && <Icon name="Check" size={16} className="text-green-600 ml-auto" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Index