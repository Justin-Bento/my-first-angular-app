import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  features: readonly string[];
}

interface Plan {
  name: string;
  frequency: string;
  price: number;
  weight: number;
  features: readonly string[];
  featured: boolean;
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly services: readonly Service[] = [
    {
      title: 'Wholesale',
      description: 'We supply cafes and restaurants that want a roaster who answers the phone.',
      features: [
        'Custom blends built around your bar and your customers',
        'Delivery within the city, twice a week',
        'Barista training included for new accounts',
      ],
    },
    {
      title: 'Coffee subscriptions',
      description: 'Weekly, biweekly, or monthly bags delivered to your door, roasted a few days before shipping.',
      features: [
        'Choose one bean or let us rotate through the seasonal lineup',
        'Pause, skip, or cancel anytime, no fees',
        '10% off every bag versus buying one at a time',
      ],
    },
    {
      title: 'Brewing workshops',
      description: 'Hands-on classes at the shop, covering pour-over, espresso, and home cupping.',
      features: [
        'Small groups, six people or fewer',
        'All equipment provided, plus a bag of beans to take home',
        'Private sessions available for teams and groups',
      ],
    },
    {
      title: 'Events & catering',
      description: 'A staffed coffee bar for weddings, offices, and pop-ups.',
      features: [
        'Espresso bar or batch brew, depending on your space',
        'Custom cups and menu cards with your event name',
        'Booked up to six months out in peak wedding season',
      ],
    },
  ];

  protected readonly plans: readonly Plan[] = [
    {
      name: 'Weekly',
      frequency: 'Every week',
      price: 15,
      weight: 340,
      features: ['One bag a week', 'Free local delivery', 'Swap beans anytime'],
      featured: false,
    },
    {
      name: 'Biweekly',
      frequency: 'Every two weeks',
      price: 15.5,
      weight: 340,
      features: ['One bag every two weeks', 'Free local delivery', 'Swap beans anytime', 'Most popular with regulars'],
      featured: true,
    },
    {
      name: 'Monthly',
      frequency: 'Once a month',
      price: 16,
      weight: 340,
      features: ['One bag a month', 'Free local delivery', 'Swap beans anytime'],
      featured: false,
    },
  ];
}