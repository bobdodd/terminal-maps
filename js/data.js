// Terminal feature data
const terminalData = {
    gates: {
        // Domestic pier (gates along left wing)
        A: [
            { id: 'gate-1', name: 'Gate 1', x: 150, y: 280, airlines: ['Air Canada'], destinations: ['Toronto', 'Montreal'] },
            { id: 'gate-2', name: 'Gate 2', x: 180, y: 320, airlines: ['WestJet'], destinations: ['Calgary', 'Edmonton'] },
            { id: 'gate-3', name: 'Gate 3', x: 210, y: 360, airlines: ['Air Canada'], destinations: ['Ottawa', 'Halifax'] },
            { id: 'gate-4', name: 'Gate 4', x: 250, y: 390, airlines: ['Porter'], destinations: ['Toronto Billy Bishop'] },
            { id: 'gate-5', name: 'Gate 5', x: 290, y: 420, airlines: ['Air Canada'], destinations: ['Winnipeg', 'Regina'] },
            { id: 'gate-6', name: 'Gate 6', x: 330, y: 450, airlines: ['WestJet'], destinations: ['Saskatchewan'] },
            { id: 'gate-7', name: 'Gate 7', x: 370, y: 475, airlines: ['Air Canada'], destinations: ['Victoria'] },
            { id: 'gate-8', name: 'Gate 8', x: 410, y: 500, airlines: ['Pacific Coastal'], destinations: ['Regional'] },
            { id: 'gate-9', name: 'Gate 9', x: 450, y: 525, airlines: ['Air Canada'], destinations: ['Kelowna'] },
            { id: 'gate-10', name: 'Gate 10', x: 490, y: 545, airlines: ['WestJet'], destinations: ['Prince George'] },
            { id: 'gate-12', name: 'Gate 12', x: 530, y: 565, airlines: ['Air Canada'], destinations: ['Whitehorse'] },
            { id: 'gate-13', name: 'Gate 13', x: 570, y: 585, airlines: ['Air North'], destinations: ['Yukon'] },
            { id: 'gate-14', name: 'Gate 14', x: 610, y: 605, airlines: ['Central Mountain Air'], destinations: ['Regional'] },
            { id: 'gate-15', name: 'Gate 15', x: 650, y: 620, airlines: ['Air Canada'], destinations: ['Thunder Bay'] },
            { id: 'gate-16', name: 'Gate 16', x: 690, y: 635, airlines: ['WestJet'], destinations: ['Regina'] },
            { id: 'gate-17', name: 'Gate 17', x: 730, y: 650, airlines: ['Air Canada'], destinations: ['Edmonton'] },
            { id: 'gate-20', name: 'Gate 20', x: 770, y: 665, airlines: ['Air Canada'], destinations: ['Calgary'] },
            { id: 'gate-21', name: 'Gate 21', x: 810, y: 675, airlines: ['WestJet'], destinations: ['Vancouver Island'] },
            { id: 'gate-22', name: 'Gate 22', x: 820, y: 715, airlines: ['Air Canada'], destinations: ['Montreal'] },
            { id: 'gate-23', name: 'Gate 23', x: 820, y: 755, airlines: ['Porter'], destinations: ['Toronto'] },
            { id: 'gate-24', name: 'Gate 24', x: 820, y: 795, airlines: ['Air Canada'], destinations: ['Halifax'] },
            { id: 'gate-26', name: 'Gate 26', x: 820, y: 835, airlines: ['WestJet'], destinations: ['Winnipeg'] }
        ],
        // USA pier (gates along right wing)
        B: [
            { id: 'gate-52', name: 'Gate 52', x: 1180, y: 835, airlines: ['United'], destinations: ['San Francisco'] },
            { id: 'gate-51', name: 'Gate 51', x: 1180, y: 795, airlines: ['Alaska'], destinations: ['Seattle'] },
            { id: 'gate-50', name: 'Gate 50', x: 1180, y: 755, airlines: ['Delta'], destinations: ['Minneapolis'] },
            { id: 'gate-49', name: 'Gate 49', x: 1180, y: 715, airlines: ['American'], destinations: ['Dallas'] },
            { id: 'gate-48', name: 'Gate 48', x: 1190, y: 675, airlines: ['United'], destinations: ['Denver'] },
            { id: 'gate-47', name: 'Gate 47', x: 1230, y: 665, airlines: ['Alaska'], destinations: ['Portland'] },
            { id: 'gate-46', name: 'Gate 46', x: 1270, y: 650, airlines: ['Southwest'], destinations: ['Las Vegas'] },
            { id: 'gate-45', name: 'Gate 45', x: 1310, y: 635, airlines: ['Delta'], destinations: ['Los Angeles'] },
            { id: 'gate-44', name: 'Gate 44', x: 1350, y: 620, airlines: ['United'], destinations: ['Chicago'] },
            { id: 'gate-42', name: 'Gate 42', x: 1390, y: 605, airlines: ['American'], destinations: ['Phoenix'] },
            { id: 'gate-40', name: 'Gate 40', x: 1430, y: 585, airlines: ['JetBlue'], destinations: ['New York'] },
            { id: 'gate-38', name: 'Gate 38', x: 1470, y: 565, airlines: ['Alaska'], destinations: ['San Diego'] },
            { id: 'gate-37', name: 'Gate 37', x: 1510, y: 545, airlines: ['United'], destinations: ['Houston'] },
            { id: 'gate-36', name: 'Gate 36', x: 1550, y: 525, airlines: ['Delta'], destinations: ['Atlanta'] },
            { id: 'gate-35', name: 'Gate 35', x: 1590, y: 500, airlines: ['Southwest'], destinations: ['Phoenix'] },
            { id: 'gate-34', name: 'Gate 34', x: 1630, y: 475, airlines: ['Alaska'], destinations: ['Los Angeles'] },
            { id: 'gate-33', name: 'Gate 33', x: 1670, y: 450, airlines: ['United'], destinations: ['Newark'] },
            { id: 'gate-32', name: 'Gate 32', x: 1710, y: 420, airlines: ['American'], destinations: ['Miami'] },
            { id: 'gate-31', name: 'Gate 31', x: 1750, y: 390, airlines: ['Delta'], destinations: ['Detroit'] },
            { id: 'gate-30', name: 'Gate 30', x: 1790, y: 360, airlines: ['Alaska'], destinations: ['Anchorage'] },
            { id: 'gate-29', name: 'Gate 29', x: 1820, y: 320, airlines: ['United'], destinations: ['Washington'] },
            { id: 'gate-28', name: 'Gate 28', x: 1850, y: 280, airlines: ['American'], destinations: ['Charlotte'] }
        ],
        // International pier C (gates 71-75 on left side)
        C: [
            { id: 'gate-75', name: 'Gate 75', x: 830, y: 880, airlines: ['Air Canada'], destinations: ['London'] },
            { id: 'gate-74', name: 'Gate 74', x: 830, y: 920, airlines: ['British Airways'], destinations: ['London Heathrow'] },
            { id: 'gate-73', name: 'Gate 73', x: 830, y: 960, airlines: ['Lufthansa'], destinations: ['Frankfurt'] },
            { id: 'gate-72', name: 'Gate 72', x: 830, y: 1000, airlines: ['Air France'], destinations: ['Paris'] },
            { id: 'gate-71', name: 'Gate 71', x: 830, y: 1040, airlines: ['KLM'], destinations: ['Amsterdam'] }
        ],
        // International pier D (center gates 60-70)
        D: [
            { id: 'gate-70', name: 'Gate 70', x: 900, y: 1080, airlines: ['Cathay Pacific'], destinations: ['Hong Kong'] },
            { id: 'gate-69', name: 'Gate 69', x: 950, y: 1090, airlines: ['Japan Airlines'], destinations: ['Tokyo'] },
            { id: 'gate-68', name: 'Gate 68', x: 1000, y: 1095, airlines: ['Korean Air'], destinations: ['Seoul'] },
            { id: 'gate-67', name: 'Gate 67', x: 1050, y: 1090, airlines: ['China Airlines'], destinations: ['Taipei'] },
            { id: 'gate-66', name: 'Gate 66', x: 1100, y: 1080, airlines: ['EVA Air'], destinations: ['Taipei'] },
            { id: 'gate-65', name: 'Gate 65', x: 1100, y: 1040, airlines: ['ANA'], destinations: ['Tokyo'] },
            { id: 'gate-64', name: 'Gate 64', x: 1100, y: 1000, airlines: ['Singapore Airlines'], destinations: ['Singapore'] },
            { id: 'gate-63', name: 'Gate 63', x: 1100, y: 960, airlines: ['Philippine Airlines'], destinations: ['Manila'] },
            { id: 'gate-62', name: 'Gate 62', x: 1100, y: 920, airlines: ['Thai Airways'], destinations: ['Bangkok'] },
            { id: 'gate-61', name: 'Gate 61', x: 1100, y: 880, airlines: ['Qantas'], destinations: ['Sydney'] },
            { id: 'gate-60', name: 'Gate 60', x: 1170, y: 880, airlines: ['Air New Zealand'], destinations: ['Auckland'] }
        ],
        // International pier E (gates 53-59 on right side) 
        E: [
            { id: 'gate-59', name: 'Gate 59', x: 1170, y: 920, airlines: ['Emirates'], destinations: ['Dubai'] },
            { id: 'gate-58', name: 'Gate 58', x: 1170, y: 960, airlines: ['Air China'], destinations: ['Beijing'] },
            { id: 'gate-57', name: 'Gate 57', x: 1170, y: 1000, airlines: ['China Eastern'], destinations: ['Shanghai'] },
            { id: 'gate-56', name: 'Gate 56', x: 1170, y: 1040, airlines: ['China Southern'], destinations: ['Guangzhou'] },
            { id: 'gate-55', name: 'Gate 55', x: 1100, y: 920, airlines: ['Xiamen Air'], destinations: ['Xiamen'] },
            { id: 'gate-54', name: 'Gate 54', x: 1100, y: 880, airlines: ['Hainan Airlines'], destinations: ['Beijing'] },
            { id: 'gate-53', name: 'Gate 53', x: 1030, y: 880, airlines: ['Air India'], destinations: ['Delhi'] }
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