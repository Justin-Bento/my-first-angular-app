import { Component } from '@angular/core';

interface Value {
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: {
    src: string;
    alt: string;
  };
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly values: readonly Value[] = [
    {
      title: 'Roasted to order',
      description:
        'We roast in small batches, days before your beans ship, so nothing sits on a shelf losing flavor.',
    },
    {
      title: 'Direct trade',
      description:
        'We visit our growers, agree prices above fair-trade minimums, and buy the same farms year after year.',
    },
    {
      title: 'Honest about origin',
      description:
        'Every bag lists the farm, altitude, and process it came from, not just a country and a blend name.',
    },
  ];

  protected readonly team: readonly TeamMember[] = [
    {
      name: 'Elena Martins',
      role: 'Founder & Head Roaster',
      bio: 'Elena started roasting on a 1kg drum in her garage before opening the shop on Maple Street in 2019.',
      photo: {
        src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Elena Martins standing beside the roaster',
      },
    },
    {
      name: 'Marcus Oduya',
      role: 'Green Coffee Buyer',
      bio: 'Marcus spends three months a year traveling to source farms, building the relationships behind every bag.',
      photo: {
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Marcus Oduya inspecting green coffee beans',
      },
    },
    {
      name: 'Priya Nair',
      role: 'Cafe Manager',
      bio: 'Priya runs the bar out front and trains every new hire on the brewing methods we stand behind.',
      photo: {
        src: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Priya Nair pouring a cup of coffee at the counter',
      },
    },
  ];
}