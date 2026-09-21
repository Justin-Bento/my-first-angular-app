import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface featuredBean {
  title: string,
  media: {
    src: string,
    alt: string
  }
  details: {
    origin: string,
    roast: string,
    notes: string,
    price: number,
    weight: number
  }
}
interface features {
  title: string,
  description: string
}
interface testimonials {
  quote: string
  author: string
  role: string
}

interface blogPosts {
  title: string,
  summary: string,
  readTime: number,
  slug: string
}

@Component({
  imports: [RouterLink],
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
      },
      details: {
        origin: "Colombia & Brazil",
        roast: "Medium",
        notes: "milk chocolate, toasted almond, caramel",
        price: 16.50,
        weight: 340
      }
    },
    {
      title: "Highland Reserve",
      media: {
        src: "https://images.unsplash.com/photo-1608519498408-9e3ff4da34c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Bag of Highland Reserve coffee beans"
      },
      details: {
        origin: "Ethiopia, Yirgacheffe",
        roast: "Light",
        notes: "blueberry, jasmine, lemon zest",
        price: 19.00,
        weight: 340
      }
    },
    {
      title: "Midnight Roast",
      media: {
        src: "https://images.unsplash.com/photo-1672854824506-da82b4191b18?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZmZlJTIwYmFnfGVufDB8fDB8fHww",
        alt: "Bag of Midnight Roast coffee beans"
      },
      details: {
        origin: "Sumatra",
        roast: "Dark",
        notes: "dark cocoa, cedar, brown sugar",
        price: 17.00,
        weight: 340
      }
    }
  ]
  protected readonly features: readonly features[] = [
    {
      title: "Roasted to Order",
      description: "Your beans are roasted the week you order, never sitting on a shelf."
    },
    {
      title: "Ethically Sourced",
      description: "We pay above fair-trade prices and know every farm by name."
    },
    {
      title: "Local & Sustainable",
      description: "Compostable packaging and bike delivery within the city."
    },
    {
      title: "Flexible Subscriptions",
      description: "Weekly, biweekly, or monthly. Pause anytime."
    },
  ]
  protected readonly testimonials: readonly testimonials[] = [
    {
      quote: "The Sunrise Blend has completely replaced my morning café run. Smooth, rich, and always fresh",
      author: "Maya R",
      role: "subscriber since 2024"
    },
    {
      quote: "Ember & Bean supplies our cafe, and our customers ask what changed. It's the beans",
      author: "Daniel K",
      role: "owner of The Corner Table"
    },
    {
      quote: "The Highland Reserve tastes like a fruit bowl in the best way. Absolutely worth it.",
      author: "Priya S",
      role: "home brewer"
    }
  ]
  protected readonly blogPosts: readonly blogPosts[] = [
    {
      title: "How to Brew the Perfect Pour-Over at Home",
      summary: "A step-by-step guide with ratios and timing.",
      readTime: 5,
      slug: ""
    },
    {
      title: "From Farm to Cup: Visiting Our Partners in Ethiopia",
      summary: "What we learned on this year's sourcing trip.",
      readTime: 7,
      slug: ""
    },
    {
      title: "Light vs. Dark Roast: What's the Real Difference?",
      summary: "It's not about caffeine. Here's what actually changes.",
      readTime: 4,
      slug: ""
    },

  ]
}
