// Terminal feature data
const terminalData = {
    gates: {
        A: [
            { id: 'gate-a1', name: 'Gate A1', x: 200, y: 300, airlines: ['Air Canada'], destinations: ['Toronto', 'Montreal'] },
            { id: 'gate-a2', name: 'Gate A2', x: 250, y: 300, airlines: ['WestJet'], destinations: ['Calgary', 'Edmonton'] },
            { id: 'gate-a3', name: 'Gate A3', x: 300, y: 300, airlines: ['Air Canada'], destinations: ['Ottawa', 'Halifax'] },
            { id: 'gate-a4', name: 'Gate A4', x: 350, y: 300, airlines: ['Porter'], destinations: ['Toronto Billy Bishop'] },
            { id: 'gate-a5', name: 'Gate A5', x: 400, y: 300, airlines: ['Air Canada'], destinations: ['Winnipeg', 'Regina'] }
        ],
        B: [
            { id: 'gate-b1', name: 'Gate B1', x: 500, y: 300, airlines: ['United'], destinations: ['San Francisco', 'Los Angeles'] },
            { id: 'gate-b2', name: 'Gate B2', x: 550, y: 300, airlines: ['Alaska'], destinations: ['Seattle', 'Portland'] },
            { id: 'gate-b3', name: 'Gate B3', x: 600, y: 300, airlines: ['Delta'], destinations: ['Minneapolis', 'Detroit'] },
            { id: 'gate-b4', name: 'Gate B4', x: 650, y: 300, airlines: ['American'], destinations: ['Dallas', 'Chicago'] },
            { id: 'gate-b5', name: 'Gate B5', x: 700, y: 300, airlines: ['Southwest'], destinations: ['Las Vegas', 'Phoenix'] }
        ],
        C: [
            { id: 'gate-c1', name: 'Gate C1', x: 800, y: 300, airlines: ['Air Canada'], destinations: ['London', 'Paris'] },
            { id: 'gate-c2', name: 'Gate C2', x: 850, y: 300, airlines: ['Lufthansa'], destinations: ['Frankfurt', 'Munich'] },
            { id: 'gate-c3', name: 'Gate C3', x: 900, y: 300, airlines: ['British Airways'], destinations: ['London Heathrow'] },
            { id: 'gate-c4', name: 'Gate C4', x: 950, y: 300, airlines: ['KLM'], destinations: ['Amsterdam'] },
            { id: 'gate-c5', name: 'Gate C5', x: 1000, y: 300, airlines: ['Air France'], destinations: ['Paris CDG'] }
        ],
        D: [
            { id: 'gate-d1', name: 'Gate D1', x: 200, y: 500, airlines: ['Cathay Pacific'], destinations: ['Hong Kong'] },
            { id: 'gate-d2', name: 'Gate D2', x: 250, y: 500, airlines: ['Japan Airlines'], destinations: ['Tokyo Narita'] },
            { id: 'gate-d3', name: 'Gate D3', x: 300, y: 500, airlines: ['Korean Air'], destinations: ['Seoul'] },
            { id: 'gate-d4', name: 'Gate D4', x: 350, y: 500, airlines: ['China Airlines'], destinations: ['Taipei'] },
            { id: 'gate-d5', name: 'Gate D5', x: 400, y: 500, airlines: ['Singapore Airlines'], destinations: ['Singapore'] }
        ],
        E: [
            { id: 'gate-e1', name: 'Gate E1', x: 500, y: 500, airlines: ['Emirates'], destinations: ['Dubai'] },
            { id: 'gate-e2', name: 'Gate E2', x: 550, y: 500, airlines: ['Qantas'], destinations: ['Sydney', 'Melbourne'] },
            { id: 'gate-e3', name: 'Gate E3', x: 600, y: 500, airlines: ['Air New Zealand'], destinations: ['Auckland'] },
            { id: 'gate-e4', name: 'Gate E4', x: 650, y: 500, airlines: ['Philippine Airlines'], destinations: ['Manila'] },
            { id: 'gate-e5', name: 'Gate E5', x: 700, y: 500, airlines: ['ANA'], destinations: ['Tokyo Haneda'] }
        ]
    },
    
    services: {
        restrooms: [
            { id: 'restroom-1', name: 'Restroom - A Gates', x: 225, y: 250, accessible: true },
            { id: 'restroom-2', name: 'Restroom - B Gates', x: 575, y: 250, accessible: true },
            { id: 'restroom-3', name: 'Restroom - C Gates', x: 875, y: 250, accessible: true },
            { id: 'restroom-4', name: 'Restroom - D Gates', x: 275, y: 450, accessible: true },
            { id: 'restroom-5', name: 'Restroom - E Gates', x: 575, y: 450, accessible: true },
            { id: 'restroom-6', name: 'Restroom - Central', x: 600, y: 400, accessible: true, family: true }
        ],
        information: [
            { id: 'info-1', name: 'Information Desk - Main', x: 600, y: 350, services: ['general', 'tourism', 'translation'] },
            { id: 'info-2', name: 'Information Desk - International', x: 900, y: 350, services: ['customs', 'immigration'] },
            { id: 'info-3', name: 'Information Desk - Domestic', x: 300, y: 350, services: ['general', 'connections'] }
        ],
        medical: [
            { id: 'medical-1', name: 'Medical Center', x: 600, y: 450, services: ['first-aid', 'pharmacy'] }
        ]
    },
    
    amenities: {
        restaurants: [
            { id: 'restaurant-1', name: 'Maple Leaf Lounge Restaurant', x: 300, y: 200, type: 'full-service' },
            { id: 'restaurant-2', name: 'White Spot', x: 600, y: 200, type: 'casual' },
            { id: 'restaurant-3', name: 'Tim Hortons', x: 900, y: 200, type: 'quick-service' },
            { id: 'restaurant-4', name: 'Starbucks - A Gates', x: 350, y: 250, type: 'coffee' },
            { id: 'restaurant-5', name: 'Starbucks - C Gates', x: 850, y: 250, type: 'coffee' }
        ],
        shops: [
            { id: 'shop-1', name: 'Duty Free - International', x: 900, y: 400, type: 'duty-free' },
            { id: 'shop-2', name: 'Hudson News', x: 450, y: 350, type: 'news-gifts' },
            { id: 'shop-3', name: 'Tech on the Go', x: 750, y: 350, type: 'electronics' },
            { id: 'shop-4', name: 'YVR Store', x: 600, y: 300, type: 'souvenirs' }
        ],
        lounges: [
            { id: 'lounge-1', name: 'Maple Leaf Lounge', x: 400, y: 200, access: 'Air Canada, Star Alliance' },
            { id: 'lounge-2', name: 'Plaza Premium Lounge', x: 800, y: 200, access: 'Pay-per-use, Priority Pass' }
        ]
    },
    
    transportation: {
        security: [
            { id: 'security-1', name: 'Security Checkpoint - Domestic', x: 400, y: 400, type: 'domestic', lanes: 6 },
            { id: 'security-2', name: 'Security Checkpoint - International', x: 800, y: 400, type: 'international', lanes: 8 },
            { id: 'security-3', name: 'Security - NEXUS/TSA Pre', x: 600, y: 380, type: 'trusted-traveler', lanes: 2 }
        ],
        customs: [
            { id: 'customs-1', name: 'Canada Customs - Primary', x: 1100, y: 400, type: 'primary' },
            { id: 'customs-2', name: 'Canada Customs - NEXUS', x: 1100, y: 450, type: 'nexus' }
        ],
        baggage: [
            { id: 'baggage-1', name: 'Baggage Claim - Domestic', x: 300, y: 600, carousels: [1, 2, 3] },
            { id: 'baggage-2', name: 'Baggage Claim - International', x: 900, y: 600, carousels: [4, 5, 6, 7] }
        ]
    }
};

// Feature categories for filters
const featureCategories = {
    gates: ['gates-a', 'gates-b', 'gates-c', 'gates-d', 'gates-e'],
    services: ['restrooms', 'information', 'medical'],
    amenities: ['restaurants', 'shops', 'lounges'],
    transportation: ['security', 'customs', 'baggage']
};

// Export for use in other modules
window.terminalData = terminalData;
window.featureCategories = featureCategories;