import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Tool {
  id: number;
  name: string;
  category: string;
  pricePerHour: number;
  image: string;
  power: string;
  features: string[];
}

const tools: Tool[] = [
  {
    id: 1,
    name: 'Дрель ударная',
    category: 'Сверление',
    pricePerHour: 150,
    image: 'https://cdn.poehali.dev/projects/2204a4c1-27a4-4326-8748-95fd9a1f6272/files/14abe036-f755-444d-9656-47d11379a4f9.jpg',
    power: '850 Вт',
    features: ['Ударный режим', 'Реверс', 'Подсветка']
  },
  {
    id: 2,
    name: 'Болгарка 125мм',
    category: 'Резка',
    pricePerHour: 180,
    image: 'https://cdn.poehali.dev/projects/2204a4c1-27a4-4326-8748-95fd9a1f6272/files/758323ac-f753-4016-8660-9ef699005d1c.jpg',
    power: '1200 Вт',
    features: ['Плавный пуск', 'Защита от заклинивания', 'Регулировка оборотов']
  },
  {
    id: 3,
    name: 'Лобзик электрический',
    category: 'Распил',
    pricePerHour: 140,
    image: 'https://cdn.poehali.dev/projects/2204a4c1-27a4-4326-8748-95fd9a1f6272/files/6baf0589-1f2e-4e07-9560-233351b6e3ca.jpg',
    power: '650 Вт',
    features: ['Маятниковый ход', 'Подсветка', 'Быстрозажимное крепление']
  },
  {
    id: 4,
    name: 'Перфоратор SDS-plus',
    category: 'Сверление',
    pricePerHour: 200,
    image: 'https://cdn.poehali.dev/projects/2204a4c1-27a4-4326-8748-95fd9a1f6272/files/14abe036-f755-444d-9656-47d11379a4f9.jpg',
    power: '950 Вт',
    features: ['3 режима работы', 'Антивибрация', 'Предохранительная муфта']
  },
  {
    id: 5,
    name: 'Болгарка 230мм',
    category: 'Резка',
    pricePerHour: 250,
    image: 'https://cdn.poehali.dev/projects/2204a4c1-27a4-4326-8748-95fd9a1f6272/files/758323ac-f753-4016-8660-9ef699005d1c.jpg',
    power: '2400 Вт',
    features: ['Плавный пуск', 'Система защиты', 'Антивибрация']
  },
  {
    id: 6,
    name: 'Циркулярная пила',
    category: 'Распил',
    pricePerHour: 190,
    image: 'https://cdn.poehali.dev/projects/2204a4c1-27a4-4326-8748-95fd9a1f6272/files/6baf0589-1f2e-4e07-9560-233351b6e3ca.jpg',
    power: '1800 Вт',
    features: ['Регулировка глубины', 'Направляющая', 'Пылеотвод']
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [rentalHours, setRentalHours] = useState<number>(3);

  const filteredTools = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  const calculatePrice = (pricePerHour: number) => {
    return pricePerHour * rentalHours;
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-orange-50/30">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <span className="font-heading font-bold text-2xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                РентаТул
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">
                Каталог
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('terms')} className="text-sm font-medium hover:text-primary transition-colors">
                Условия
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all">
                Забронировать
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20">
              🎉 Минимальная аренда от 3 часов
            </Badge>
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Аренда электроинструмента
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Профессиональное оборудование для ваших задач. От 3 часов до 3 суток.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl transition-all text-lg px-8"
                onClick={() => scrollToSection('catalog')}
              >
                <Icon name="Search" className="mr-2" size={20} />
                Смотреть каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-lg px-8"
                onClick={() => scrollToSection('contacts')}
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/30 transition-all hover:shadow-lg animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon name="Clock" className="text-white" size={24} />
                </div>
                <CardTitle className="font-heading">Гибкие сроки</CardTitle>
                <CardDescription>От 3 часов до 3 суток</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-secondary/30 transition-all hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-white" size={24} />
                </div>
                <CardTitle className="font-heading">Надёжность</CardTitle>
                <CardDescription>Качественное оборудование</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-accent/30 transition-all hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                  <Icon name="Headphones" className="text-white" size={24} />
                </div>
                <CardTitle className="font-heading">Поддержка 24/7</CardTitle>
                <CardDescription>Всегда на связи</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Каталог инструментов
            </h2>
            <p className="text-muted-foreground text-lg">Выберите необходимое оборудование</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
            >
              Все категории
            </Button>
            <Button 
              variant={selectedCategory === 'Сверление' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Сверление')}
              className={selectedCategory === 'Сверление' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
            >
              Сверление
            </Button>
            <Button 
              variant={selectedCategory === 'Резка' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Резка')}
              className={selectedCategory === 'Резка' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
            >
              Резка
            </Button>
            <Button 
              variant={selectedCategory === 'Распил' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Распил')}
              className={selectedCategory === 'Распил' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
            >
              Распил
            </Button>
          </div>

          <div className="mb-8 max-w-md mx-auto">
            <Label className="text-base font-medium mb-3 block">Срок аренды: {rentalHours} {rentalHours === 3 ? 'часа' : rentalHours <= 24 ? 'часов' : rentalHours === 48 ? 'суток' : 'суток'}</Label>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setRentalHours(3)}
                className={rentalHours === 3 ? 'border-primary bg-primary/5' : ''}
              >
                3 часа
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setRentalHours(6)}
                className={rentalHours === 6 ? 'border-primary bg-primary/5' : ''}
              >
                6 часов
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setRentalHours(12)}
                className={rentalHours === 12 ? 'border-primary bg-primary/5' : ''}
              >
                12 часов
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setRentalHours(24)}
                className={rentalHours === 24 ? 'border-primary bg-primary/5' : ''}
              >
                1 сутки
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setRentalHours(48)}
                className={rentalHours === 48 ? 'border-primary bg-primary/5' : ''}
              >
                2 суток
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setRentalHours(72)}
                className={rentalHours === 72 ? 'border-primary bg-primary/5' : ''}
              >
                3 суток
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <Card key={tool.id} className="overflow-hidden border-2 hover:border-primary/30 transition-all hover:shadow-xl group">
                <div className="aspect-square bg-gradient-to-br from-purple-50 to-orange-50 relative overflow-hidden">
                  <img 
                    src={tool.image} 
                    alt={tool.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                    {tool.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{tool.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Zap" size={16} />
                    {tool.power}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Separator className="my-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Стоимость</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {calculatePrice(tool.pricePerHour)} ₽
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-secondary">
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Тарифы и цены
            </h2>
            <p className="text-muted-foreground text-lg">Прозрачное ценообразование без скрытых платежей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/30 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Clock3" className="text-primary" size={24} />
                </div>
                <CardTitle className="font-heading">Почасовая</CardTitle>
                <CardDescription>От 3 до 12 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-2">100% </p>
                <p className="text-muted-foreground text-sm">базовой ставки</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/50 hover:border-secondary transition-all shadow-lg scale-105">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-gradient-to-r from-primary to-secondary text-white border-0">
                  Популярно
                </Badge>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Calendar" className="text-secondary" size={24} />
                </div>
                <CardTitle className="font-heading">Суточная</CardTitle>
                <CardDescription>24 часа</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-2">×20</p>
                <p className="text-muted-foreground text-sm">почасовой ставки</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/30 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mb-4">
                  <Icon name="CalendarRange" className="text-accent" size={24} />
                </div>
                <CardTitle className="font-heading">Многосуточная</CardTitle>
                <CardDescription>До 3 суток</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-2">×18</p>
                <p className="text-muted-foreground text-sm">почасовой × количество суток</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <Icon name="Sparkles" className="text-primary" />
                Дополнительные услуги
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Доставка по городу</span>
                <span className="font-semibold">от 500 ₽</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span>Консультация специалиста</span>
                <span className="font-semibold text-primary">Бесплатно</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span>Залог (возвратный)</span>
                <span className="font-semibold">30% от стоимости</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="terms" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Условия аренды
            </h2>
            <p className="text-muted-foreground text-lg">Всё просто и прозрачно</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 border-border rounded-lg px-6 bg-white">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Icon name="FileText" className="text-primary" size={20} />
                  </div>
                  <span className="font-heading font-semibold">Как оформить аренду?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Для оформления аренды необходим паспорт и залог 30% от стоимости инструмента. 
                Минимальный срок аренды — 3 часа, максимальный — 3 суток. Бронирование возможно 
                онлайн или по телефону.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-border rounded-lg px-6 bg-white">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                    <Icon name="Shield" className="text-secondary" size={20} />
                  </div>
                  <span className="font-heading font-semibold">Что входит в стоимость?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                В стоимость аренды включены: полностью исправный инструмент, базовый комплект 
                расходников, инструкция по эксплуатации, консультация специалиста и техническая 
                поддержка на весь период аренды.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-border rounded-lg px-6 bg-white">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                    <Icon name="Truck" className="text-accent" size={20} />
                  </div>
                  <span className="font-heading font-semibold">Доставка и возврат</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Доставка по городу — от 500 ₽. Самовывоз бесплатный. Возврат инструмента возможен 
                в пункте выдачи или курьером. При досрочном возврате пересчет не производится.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-border rounded-lg px-6 bg-white">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Icon name="AlertCircle" className="text-primary" size={20} />
                  </div>
                  <span className="font-heading font-semibold">Правила использования</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Запрещено использование инструмента лицами без соответствующих навыков. 
                При повреждении по вине арендатора взимается стоимость ремонта. Техническая 
                неисправность по гарантии устраняется бесплатно с заменой инструмента.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Контакты
            </h2>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-2 hover:border-primary/30 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="Phone" className="text-white" size={24} />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-lg">Телефон</CardTitle>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-secondary/30 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                      <Icon name="Mail" className="text-white" size={24} />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-lg">Email</CardTitle>
                      <p className="text-muted-foreground">info@rentatool.ru</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/30 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <Icon name="MapPin" className="text-white" size={24} />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-lg">Адрес</CardTitle>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Icon name="Clock" className="text-primary" />
                    Режим работы
                  </CardTitle>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Пн-Пт: 08:00 - 20:00</p>
                    <p>Сб-Вс: 09:00 - 18:00</p>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="font-heading">Форма обратной связи</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Опишите ваш вопрос..." rows={4} />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <span className="font-heading font-bold text-2xl">РентаТул</span>
              </div>
              <p className="text-slate-300">
                Профессиональная аренда электроинструмента. От 3 часов до 3 суток.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2 text-slate-300">
                <li><button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Тарифы</button></li>
                <li><button onClick={() => scrollToSection('terms')} className="hover:text-primary transition-colors">Условия</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@rentatool.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Примерная, 123
                </li>
              </ul>
            </div>
          </div>
          <Separator className="bg-slate-700 mb-8" />
          <div className="text-center text-slate-400">
            <p>© 2024 РентаТул. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
