// Terminal feature data
const terminalData = {
    gates: {
        // Domestic pier (gates 1-28)
        A: [
            { id: 'gate-1', name: 'Gate 1', x: 180, y: 200, airlines: ['Air Canada'], destinations: ['Toronto', 'Montreal'] },
            { id: 'gate-2', name: 'Gate 2', x: 220, y: 220, airlines: ['WestJet'], destinations: ['Calgary', 'Edmonton'] },
            { id: 'gate-3', name: 'Gate 3', x: 260, y: 240, airlines: ['Air Canada'], destinations: ['Ottawa', 'Halifax'] },
            { id: 'gate-4', name: 'Gate 4', x: 300, y: 260, airlines: ['Porter'], destinations: ['Toronto Billy Bishop'] },
            { id: 'gate-5', name: 'Gate 5', x: 340, y: 280, airlines: ['Air Canada'], destinations: ['Winnipeg', 'Regina'] },
            { id: 'gate-6', name: 'Gate 6', x: 380, y: 300, airlines: ['WestJet'], destinations: ['Saskatchewan'] },
            { id: 'gate-7', name: 'Gate 7', x: 420, y: 320, airlines: ['Air Canada'], destinations: ['Victoria'] },
            { id: 'gate-8', name: 'Gate 8', x: 460, y: 340, airlines: ['Pacific Coastal'], destinations: ['Regional'] },
            { id: 'gate-9', name: 'Gate 9', x: 500, y: 360, airlines: ['Air Canada'], destinations: ['Kelowna'] },
            { id: 'gate-10', name: 'Gate 10', x: 540, y: 380, airlines: ['WestJet'], destinations: ['Prince George'] },
            { id: 'gate-12', name: 'Gate 12', x: 580, y: 400, airlines: ['Air Canada'], destinations: ['Whitehorse'] },
            { id: 'gate-13', name: 'Gate 13', x: 620, y: 420, airlines: ['Air North'], destinations: ['Yukon'] },
            { id: 'gate-14', name: 'Gate 14', x: 660, y: 440, airlines: ['Central Mountain Air'], destinations: ['Regional'] },
            { id: 'gate-15', name: 'Gate 15', x: 700, y: 460, airlines: ['Air Canada'], destinations: ['Thunder Bay'] }
        ],
        // USA pier (gates 29-49)
        B: [
            { id: 'gate-29', name: 'Gate 29', x: 1820, y: 200, airlines: ['United'], destinations: ['San Francisco'] },
            { id: 'gate-30', name: 'Gate 30', x: 1780, y: 220, airlines: ['Alaska'], destinations: ['Seattle'] },
            { id: 'gate-31', name: 'Gate 31', x: 1740, y: 240, airlines: ['Delta'], destinations: ['Minneapolis'] },
            { id: 'gate-32', name: 'Gate 32', x: 1700, y: 260, airlines: ['American'], destinations: ['Dallas'] },
            { id: 'gate-33', name: 'Gate 33', x: 1660, y: 280, airlines: ['United'], destinations: ['Denver'] },
            { id: 'gate-34', name: 'Gate 34', x: 1620, y: 300, airlines: ['Alaska'], destinations: ['Portland'] },
            { id: 'gate-35', name: 'Gate 35', x: 1580, y: 320, airlines: ['Southwest'], destinations: ['Las Vegas'] },
            { id: 'gate-36', name: 'Gate 36', x: 1540, y: 340, airlines: ['Delta'], destinations: ['Los Angeles'] },
            { id: 'gate-37', name: 'Gate 37', x: 1500, y: 360, airlines: ['United'], destinations: ['Chicago'] },
            { id: 'gate-38', name: 'Gate 38', x: 1460, y: 380, airlines: ['American'], destinations: ['Phoenix'] },
            { id: 'gate-40', name: 'Gate 40', x: 1420, y: 400, airlines: ['JetBlue'], destinations: ['New York'] },
            { id: 'gate-42', name: 'Gate 42', x: 1380, y: 420, airlines: ['Alaska'], destinations: ['San Diego'] },
            { id: 'gate-44', name: 'Gate 44', x: 1340, y: 440, airlines: ['United'], destinations: ['Houston'] },
            { id: 'gate-45', name: 'Gate 45', x: 1300, y: 460, airlines: ['Delta'], destinations: ['Atlanta'] }
        ],
        // International pier C (gates 50-59)
        C: [
            { id: 'gate-50', name: 'Gate 50', x: 850, y: 850, airlines: ['Air Canada'], destinations: ['London'] },
            { id: 'gate-51', name: 'Gate 51', x: 850, y: 890, airlines: ['British Airways'], destinations: ['London Heathrow'] },
            { id: 'gate-52', name: 'Gate 52', x: 850, y: 930, airlines: ['Lufthansa'], destinations: ['Frankfurt'] },
            { id: 'gate-53', name: 'Gate 53', x: 850, y: 970, airlines: ['Air France'], destinations: ['Paris'] },
            { id: 'gate-54', name: 'Gate 54', x: 850, y: 1010, airlines: ['KLM'], destinations: ['Amsterdam'] }
        ],
        // International pier D (gates 60-69)
        D: [
            { id: 'gate-60', name: 'Gate 60', x: 950, y: 850, airlines: ['Cathay Pacific'], destinations: ['Hong Kong'] },
            { id: 'gate-61', name: 'Gate 61', x: 950, y: 890, airlines: ['Japan Airlines'], destinations: ['Tokyo'] },
            { id: 'gate-62', name: 'Gate 62', x: 950, y: 930, airlines: ['Korean Air'], destinations: ['Seoul'] },
            { id: 'gate-63', name: 'Gate 63', x: 950, y: 970, airlines: ['China Airlines'], destinations: ['Taipei'] },
            { id: 'gate-64', name: 'Gate 64', x: 950, y: 1010, airlines: ['EVA Air'], destinations: ['Taipei'] }
        ],
        // International pier E (gates 70-75)
        E: [
            { id: 'gate-70', name: 'Gate 70', x: 1050, y: 850, airlines: ['Emirates'], destinations: ['Dubai'] },
            { id: 'gate-71', name: 'Gate 71', x: 1050, y: 890, airlines: ['Air China'], destinations: ['Beijing'] },
            { id: 'gate-72', name: 'Gate 72', x: 1050, y: 930, airlines: ['Philippine Airlines'], destinations: ['Manila'] },
            { id: 'gate-73', name: 'Gate 73', x: 1050, y: 970, airlines: ['Singapore Airlines'], destinations: ['Singapore'] },
            { id: 'gate-75', name: 'Gate 75', x: 1050, y: 1010, airlines: ['Qantas'], destinations: ['Sydney'] }
        ]
    },
    
    services: {
        restrooms: [
            { id: 'restroom-1', name: 'Restroom - Domestic Gates 1-10', x: 400, y: 350, accessible: true },
            { id: 'restroom-2', name: 'Restroom - Domestic Gates 10-20', x: 600, y: 450, accessible: true },
            { id: 'restroom-3', name: 'Restroom - USA Gates 30-40', x: 1600, y: 350, accessible: true },
            { id: 'restroom-4', name: 'Restroom - USA Gates 40-49', x: 1400, y: 450, accessible: true },
            { id: 'restroom-5', name: 'Restroom - International C', x: 850, y: 920, accessible: true },
            { id: 'restroom-6', name: 'Restroom - International D', x: 950, y: 920, accessible: true },
            { id: 'restroom-7', name: 'Restroom - International E', x: 1050, y: 920, accessible: true },
            { id: 'restroom-8', name: 'Family Restroom - Central', x: 1000, y: 650, accessible: true, family: true }
        ],
        information: [
            { id: 'info-1', name: 'Information Desk - Main Terminal', x: 1000, y: 600, services: ['general', 'tourism', 'translation'] },
            { id: 'info-2', name: 'Information Desk - International', x: 950, y: 800, services: ['customs', 'immigration'] },
            { id: 'info-3', name: 'Information Desk - Domestic', x: 500, y: 400, services: ['general', 'connections'] },
            { id: 'info-4', name: 'Information Desk - USA', x: 1500, y: 400, services: ['general', 'customs'] }
        ],
        medical: [
            { id: 'medical-1', name: 'Medical Center - Main', x: 1000, y: 700, services: ['first-aid', 'pharmacy'] },
            { id: 'medical-2', name: 'First Aid - Domestic', x: 450, y: 400, services: ['first-aid'] }
        ]
    },
    
    amenities: {
        restaurants: [
            { id: 'restaurant-1', name: 'White Spot - Domestic', x: 500, y: 420, type: 'casual' },
            { id: 'restaurant-2', name: 'Tim Hortons - Central', x: 1000, y: 620, type: 'quick-service' },
            { id: 'restaurant-3', name: 'Starbucks - Central', x: 950, y: 620, type: 'coffee' },
            { id: 'restaurant-4', name: 'White Spot - USA', x: 1500, y: 420, type: 'casual' },
            { id: 'restaurant-5', name: 'Starbucks - USA', x: 1550, y: 380, type: 'coffee' },
            { id: 'restaurant-6', name: 'Tim Hortons - International', x: 1000, y: 850, type: 'quick-service' },
            { id: 'restaurant-7', name: 'Vino Volo - International', x: 900, y: 850, type: 'full-service' }
        ],
        shops: [
            { id: 'shop-1', name: 'World Duty Free - International', x: 1000, y: 800, type: 'duty-free' },
            { id: 'shop-2', name: 'Hudson News - Domestic', x: 450, y: 380, type: 'news-gifts' },
            { id: 'shop-3', name: 'Hudson News - USA', x: 1550, y: 400, type: 'news-gifts' },
            { id: 'shop-4', name: 'Tech on the Go - Central', x: 1050, y: 650, type: 'electronics' },
            { id: 'shop-5', name: 'Discover YVR Store', x: 1000, y: 680, type: 'souvenirs' }
        ],
        lounges: [
            { id: 'lounge-1', name: 'Maple Leaf Lounge - Domestic', x: 550, y: 400, access: 'Air Canada, Star Alliance' },
            { id: 'lounge-2', name: 'Plaza Premium Lounge - USA', x: 1450, y: 400, access: 'Pay-per-use, Priority Pass' },
            { id: 'lounge-3', name: 'Plaza Premium Lounge - International', x: 1000, y: 750, access: 'Pay-per-use, Priority Pass' },
            { id: 'lounge-4', name: 'Maple Leaf Lounge - International', x: 950, y: 750, access: 'Air Canada, Star Alliance' }
        ]
    },
    
    transportation: {
        security: [
            { id: 'security-1', name: 'Security Checkpoint A - Domestic', x: 750, y: 550, type: 'domestic', lanes: 6 },
            { id: 'security-2', name: 'Security Checkpoint B - USA/International', x: 1250, y: 550, type: 'international', lanes: 8 },
            { id: 'security-3', name: 'Security Checkpoint C - International', x: 1000, y: 750, type: 'international', lanes: 6 },
            { id: 'security-4', name: 'NEXUS/TSA PreCheck', x: 1000, y: 550, type: 'trusted-traveler', lanes: 2 }
        ],
        customs: [
            { id: 'customs-1', name: 'USA Pre-clearance', x: 1350, y: 500, type: 'usa-preclearance' },
            { id: 'customs-2', name: 'Canada Customs - International Arrivals', x: 1000, y: 1100, type: 'arrivals' },
            { id: 'customs-3', name: 'NEXUS - Arrivals', x: 1050, y: 1100, type: 'nexus' }
        ],
        baggage: [
            { id: 'baggage-1', name: 'Baggage Claim - Domestic', x: 650, y: 550, carousels: [1, 2, 3] },
            { id: 'baggage-2', name: 'Baggage Claim - USA', x: 1350, y: 550, carousels: [4, 5] },
            { id: 'baggage-3', name: 'Baggage Claim - International', x: 1000, y: 1150, carousels: [6, 7, 8, 9] }
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