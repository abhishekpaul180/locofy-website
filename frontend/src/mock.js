// Mock data for Locofy landing page

export const mockTestimonials = [
  {
    id: 1,
    name: "Rajesh Kumar", 
    business: "Zam Zam Bakery",
    location: "Koramangala, Bengaluru",
    avatar: "/api/placeholder/60/60",
    quote: "Locofy increased our foot traffic by 40% in just 2 months. The story format really connects with customers emotionally. We've seen people come in specifically asking for items they saw in our stories.",
    rating: 5,
    beforeStats: { footTraffic: 150, revenue: 25000 },
    afterStats: { footTraffic: 210, revenue: 35000 }
  },
  {
    id: 2,
    name: "Priya Sharma",
    business: "Team Rare Rabbit", 
    location: "Indiranagar, Bengaluru",
    avatar: "/api/placeholder/60/60",
    quote: "Amazing reach! Our fashion stories get 2x more engagement than traditional ads. The AI targeting brings exactly the customers who love our style. It's like having a personal marketing team.",
    rating: 5,
    beforeStats: { engagement: 200, sales: 45000 },
    afterStats: { engagement: 400, sales: 72000 }
  },
  {
    id: 3,
    name: "Arjun Menon",
    business: "Pickle Ball Arena",
    location: "Whitefield, Bengaluru", 
    avatar: "/api/placeholder/60/60",
    quote: "The AI-driven personalization brought us exactly the right customers. Revenue up 60% since joining Locofy. Young professionals now know we exist and book courts regularly.",
    rating: 5,
    beforeStats: { bookings: 120, revenue: 80000 },
    afterStats: { bookings: 192, revenue: 128000 }
  },
  {
    id: 4,
    name: "Kavitha Reddy",
    business: "Adiwasher Cocktail Bar",
    location: "HSR Layout, Bengaluru",
    avatar: "/api/placeholder/60/60", 
    quote: "Our cocktail preparation videos on Locofy went viral locally! We've become the go-to spot for craft cocktails in HSR. Weekend bookings are always full now.",
    rating: 5,
    beforeStats: { weekendBookings: 30, avgBill: 1200 },
    afterStats: { weekendBookings: 85, avgBill: 1600 }
  }
];

export const mockAppScreenshots = [
  {
    id: 1,
    url: "/api/placeholder/280/500",
    title: "Discover Local Stories",
    description: "Swipe through engaging stories from local businesses"
  },
  {
    id: 2, 
    url: "/api/placeholder/280/500",
    title: "Business Analytics",
    description: "Track your story performance and customer engagement"
  },
  {
    id: 3,
    url: "/api/placeholder/280/500", 
    title: "Customer Insights",
    description: "Understand your audience and optimize content"
  }
];

export const mockBusinessFeatures = [
  {
    icon: "Eye",
    title: "Short-Form Stories",
    description: "Create engaging, swipeable content that customers love to discover",
    benefits: ["Easy story creation", "Professional templates", "Video & image support"]
  },
  {
    icon: "MapPin", 
    title: "Hyperlocal Targeting",
    description: "Reach customers within walking distance of your business",
    benefits: ["Location-based discovery", "Neighborhood targeting", "Foot traffic analytics"]
  },
  {
    icon: "TrendingUp",
    title: "AI-Powered Rankings", 
    description: "Smart algorithms match your business with ideal local customers",
    benefits: ["Intelligent targeting", "Customer preference matching", "Optimized visibility"]
  },
  {
    icon: "Users",
    title: "Community Building",
    description: "Build a loyal local customer base through authentic storytelling", 
    benefits: ["Customer loyalty programs", "Regular engagement", "Word-of-mouth growth"]
  }
];

export const mockStats = [
  { 
    number: "300+", 
    label: "Active Businesses", 
    growth: "+40%",
    detail: "Verified local businesses on platform"
  },
  { 
    number: "1.5M", 
    label: "Story Views", 
    growth: "+120%",
    detail: "Monthly story engagement across Bengaluru"
  },
  { 
    number: "2x", 
    label: "Customer Growth", 
    growth: "avg.",
    detail: "Average increase in foot traffic for businesses"
  },
  { 
    number: "8.1%", 
    label: "Engagement Rate", 
    growth: "+2%",
    detail: "Story interaction rate vs industry standard"
  }
];

export const mockProblemStats = [
  {
    percentage: "73%",
    description: "of local customers never discover nearby businesses that would be perfect for them",
    impact: "high"
  },
  {
    percentage: "5x", 
    description: "more expensive than it should be for local businesses to reach nearby customers",
    impact: "high"
  },
  {
    percentage: "80%",
    description: "of small businesses feel completely invisible in their local market online", 
    impact: "high"
  }
];

export const mockAppStoreData = {
  iosRating: 4.8,
  iosReviews: 2300,
  androidRating: 4.7, 
  androidReviews: 1800,
  totalDownloads: "10K+",
  averageRating: 4.75
};

export const mockCompanyInfo = {
  founded: "2023",
  location: "Bengaluru, India",
  team: "12 passionate locals",
  mission: "Empowering local businesses through engaging storytelling and hyperlocal discovery",
  vision: "A world where every local business can thrive by connecting authentically with their community"
};