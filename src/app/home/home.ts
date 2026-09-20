import { Component } from '@angular/core';

interface featuredBean {
  title: string,
  media: {
    src: string,
    alt: string
  }
}
@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly featuredBeans: readonly featuredBean[] = [
    {
      title: "Sunrise Blend",
      media: {
        src: "https://images.unsplash.com/photo-1610899510324-268e41ac648c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Bag of Sunrise Blend coffee beans"
      }
    },
    {
      title: "Highland Reserve",
      media: {
        src: "https://images.unsplash.com/photo-1608519498408-9e3ff4da34c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Bag of Highland Reserve coffee beans"
      }
    },
    {
      title: "Midnight Roast",
      media: {
        src: "https://images.unsplash.com/photo-1672854824506-da82b4191b18?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZmZlJTIwYmFnfGVufDB8fDB8fHww",
        alt: "Bag of Midnight Roast coffee beans"
      }
    }
  ]
}
