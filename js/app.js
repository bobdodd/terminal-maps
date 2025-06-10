// Main application controller
class TerminalMapApp {
    constructor() {
        this.filterManager = null;
        this.accessibilityManager = null;
        this.selectedFeature = null;
        
        this.initialize();
    }
    
    initialize() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        // Initialize managers
        this.filterManager = new FilterManager();
        this.accessibilityManager = new AccessibilityManager();
        
        // Create the SVG map
        this.createMap();
        
        // Set up event listeners
        this.attachEventListeners();
        
        // Apply initial filters
        this.filterManager.applyFilters();
    }
    
    createMap() {
        const svg = document.getElementById('terminalMap');
        const mapContent = document.getElementById('mapContent');
        
        // Clear placeholder content
        mapContent.innerHTML = '';
        
        // Update viewBox to match YVR terminal shape
        svg.setAttribute('viewBox', '0 0 2000 1200');
        
        // Create terminal outline
        this.createTerminalOutline(mapContent);
        
        // Create all features
        this.createGates(mapContent);
        this.createServices(mapContent);
        this.createAmenities(mapContent);
        this.createTransportation(mapContent);
    }
    
    createTerminalOutline(parent) {
        const g = this.createSVGGroup(parent, 'terminal-outline');
        
        // Main terminal building - dark blue area
        const mainTerminal = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        mainTerminal.setAttribute('d', `
            M 250 300
            C 200 280, 180 280, 150 300
            L 120 350
            L 120 400
            L 150 450
            L 300 550
            L 450 650
            L 600 720
            L 750 780
            L 900 820
            L 900 850
            L 850 900
            L 850 1000
            L 900 1050
            L 1100 1050
            L 1150 1000
            L 1150 900
            L 1100 850
            L 1100 820
            L 1250 780
            L 1400 720
            L 1550 650
            L 1700 550
            L 1850 450
            L 1880 400
            L 1880 350
            L 1850 300
            C 1820 280, 1800 280, 1750 300
            L 1650 350
            L 1500 420
            L 1350 480
            L 1200 540
            L 1100 580
            L 1050 600
            L 1000 610
            L 950 600
            L 900 580
            L 800 540
            L 650 480
            L 500 420
            L 350 350
            Z
        `);
        mainTerminal.setAttribute('fill', '#1e3a8a');
        mainTerminal.setAttribute('stroke', '#1e3a8a');
        mainTerminal.setAttribute('stroke-width', '2');
        g.appendChild(mainTerminal);
        
        // Inner terminal area - light blue
        const innerTerminal = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        innerTerminal.setAttribute('d', `
            M 320 380
            L 480 460
            L 640 520
            L 800 580
            L 900 620
            L 950 640
            L 1000 650
            L 1050 640
            L 1100 620
            L 1200 580
            L 1360 520
            L 1520 460
            L 1680 380
            L 1720 400
            L 1700 430
            L 1550 520
            L 1400 590
            L 1250 650
            L 1150 690
            L 1100 710
            L 1100 780
            L 1050 820
            L 1050 920
            L 1000 950
            L 950 920
            L 950 820
            L 900 780
            L 900 710
            L 850 690
            L 750 650
            L 600 590
            L 450 520
            L 300 430
            L 280 400
            Z
        `);
        innerTerminal.setAttribute('fill', '#3b82f6');
        innerTerminal.setAttribute('stroke', '#1e3a8a');
        innerTerminal.setAttribute('stroke-width', '1');
        g.appendChild(innerTerminal);
        
        // Central concourse area
        const centralConcourse = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        centralConcourse.setAttribute('x', '850');
        centralConcourse.setAttribute('y', '680');
        centralConcourse.setAttribute('width', '300');
        centralConcourse.setAttribute('height', '100');
        centralConcourse.setAttribute('rx', '10');
        centralConcourse.setAttribute('fill', '#60a5fa');
        centralConcourse.setAttribute('stroke', '#1e3a8a');
        centralConcourse.setAttribute('stroke-width', '1');
        g.appendChild(centralConcourse);
        
        // Add rotunda at center
        const rotunda = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        rotunda.setAttribute('cx', '1000');
        rotunda.setAttribute('cy', '650');
        rotunda.setAttribute('r', '40');
        rotunda.setAttribute('fill', '#93c5fd');
        rotunda.setAttribute('stroke', '#1e3a8a');
        rotunda.setAttribute('stroke-width', '2');
        g.appendChild(rotunda);
    }
    
    createGates(parent) {
        const gatesGroup = this.createSVGGroup(parent, 'gates-group');
        
        Object.entries(terminalData.gates).forEach(([letter, gates]) => {
            const letterGroup = this.createSVGGroup(gatesGroup, `gate-group-${letter.toLowerCase()}`);
            
            gates.forEach(gate => {
                const g = this.createSVGGroup(letterGroup, gate.id, 'gate');
                
                // Gate number text along terminal edge
                const text = this.createSVGText(g, {
                    x: gate.x,
                    y: gate.y,
                    text: gate.name.split(' ')[1], // Just the gate number
                    fontSize: 14,
                    textAnchor: 'middle',
                    fill: '#1e3a8a',
                    fontWeight: 'bold',
                    className: 'gate-number'
                });
                
                // Invisible clickable area around the gate number
                const clickArea = this.createSVGRect(g, {
                    x: gate.x - 15,
                    y: gate.y - 12,
                    width: 30,
                    height: 20,
                    fill: 'transparent',
                    cursor: 'pointer'
                });
                
                // Add ARIA label
                g.setAttribute('aria-label', `${gate.name}. Airlines: ${gate.airlines.join(', ')}. Destinations: ${gate.destinations.join(', ')}`);
                g.setAttribute('role', 'button');
                g.setAttribute('tabindex', '0');
                
                // Add click handler
                g.addEventListener('click', () => this.showFeatureInfo(gate));
                
                // Add hover handlers
                g.addEventListener('mouseenter', (e) => {
                    text.setAttribute('fill', '#fbbf24');
                    text.setAttribute('font-size', '16');
                    this.handleHover(e, g);
                });
                g.addEventListener('mouseleave', (e) => {
                    text.setAttribute('fill', '#1e3a8a');
                    text.setAttribute('font-size', '14');
                    this.handleHoverEnd(e, g);
                });
            });
        });
    }
    
    createServices(parent) {
        const servicesGroup = this.createSVGGroup(parent, 'services-group');
        
        Object.entries(terminalData.services).forEach(([type, services]) => {
            services.forEach(service => {
                const g = this.createSVGGroup(servicesGroup, service.id, type);
                
                // Service icon background
                const rect = this.createSVGRect(g, {
                    x: service.x - 15,
                    y: service.y - 15,
                    width: 30,
                    height: 30,
                    rx: 15,
                    ry: 15,
                    className: type.slice(0, -1) // Remove plural 's'
                });
                
                // Service icon (simplified)
                let icon = '';
                if (type === 'restrooms') {
                    icon = 'WC';
                } else if (type === 'information') {
                    icon = 'i';
                } else if (type === 'medical') {
                    icon = '+';
                }
                
                const text = this.createSVGText(g, {
                    x: service.x,
                    y: service.y + 5,
                    text: icon,
                    fontSize: 14,
                    textAnchor: 'middle',
                    fill: 'white',
                    fontWeight: 'bold',
                    pointerEvents: 'none'
                });
                
                // Add ARIA label
                let ariaLabel = service.name;
                if (service.accessible) {
                    ariaLabel += '. Wheelchair accessible';
                }
                if (service.family) {
                    ariaLabel += '. Family restroom available';
                }
                if (service.services) {
                    ariaLabel += `. Services: ${service.services.join(', ')}`;
                }
                g.setAttribute('aria-label', ariaLabel);
                
                // Add click handler
                g.addEventListener('click', () => this.showFeatureInfo(service));
                
                // Add hover handlers
                g.addEventListener('mouseenter', (e) => this.handleHover(e, g));
                g.addEventListener('mouseleave', (e) => this.handleHoverEnd(e, g));
            });
        });
    }
    
    createAmenities(parent) {
        const amenitiesGroup = this.createSVGGroup(parent, 'amenities-group');
        
        Object.entries(terminalData.amenities).forEach(([type, amenities]) => {
            amenities.forEach(amenity => {
                const g = this.createSVGGroup(amenitiesGroup, amenity.id, type.slice(0, -1));
                
                // Amenity shape
                const rect = this.createSVGRect(g, {
                    x: amenity.x - 20,
                    y: amenity.y - 15,
                    width: 40,
                    height: 30,
                    rx: 5,
                    ry: 5,
                    className: type.slice(0, -1)
                });
                
                // Amenity icon (simplified)
                let icon = '';
                if (type === 'restaurants') {
                    icon = '🍴';
                } else if (type === 'shops') {
                    icon = '🛍';
                } else if (type === 'lounges') {
                    icon = '✈';
                }
                
                const text = this.createSVGText(g, {
                    x: amenity.x,
                    y: amenity.y + 5,
                    text: icon,
                    fontSize: 16,
                    textAnchor: 'middle',
                    pointerEvents: 'none'
                });
                
                // Add ARIA label
                let ariaLabel = amenity.name;
                if (amenity.type) {
                    ariaLabel += `. Type: ${amenity.type}`;
                }
                if (amenity.access) {
                    ariaLabel += `. Access: ${amenity.access}`;
                }
                g.setAttribute('aria-label', ariaLabel);
                
                // Add click handler
                g.addEventListener('click', () => this.showFeatureInfo(amenity));
                
                // Add hover handlers
                g.addEventListener('mouseenter', (e) => this.handleHover(e, g));
                g.addEventListener('mouseleave', (e) => this.handleHoverEnd(e, g));
            });
        });
    }
    
    createTransportation(parent) {
        const transportGroup = this.createSVGGroup(parent, 'transportation-group');
        
        Object.entries(terminalData.transportation).forEach(([type, items]) => {
            items.forEach(item => {
                const g = this.createSVGGroup(transportGroup, item.id, type);
                
                // Transportation area
                const rect = this.createSVGRect(g, {
                    x: item.x - 30,
                    y: item.y - 20,
                    width: 60,
                    height: 40,
                    rx: 5,
                    ry: 5,
                    className: type
                });
                
                // Label
                const text = this.createSVGText(g, {
                    x: item.x,
                    y: item.y + 5,
                    text: type.charAt(0).toUpperCase(),
                    fontSize: 18,
                    textAnchor: 'middle',
                    fill: 'white',
                    fontWeight: 'bold',
                    pointerEvents: 'none'
                });
                
                // Add ARIA label
                let ariaLabel = item.name;
                if (item.type) {
                    ariaLabel += `. Type: ${item.type}`;
                }
                if (item.lanes) {
                    ariaLabel += `. ${item.lanes} lanes`;
                }
                if (item.carousels) {
                    ariaLabel += `. Carousels: ${item.carousels.join(', ')}`;
                }
                g.setAttribute('aria-label', ariaLabel);
                
                // Add click handler
                g.addEventListener('click', () => this.showFeatureInfo(item));
                
                // Add hover handlers
                g.addEventListener('mouseenter', (e) => this.handleHover(e, g));
                g.addEventListener('mouseleave', (e) => this.handleHoverEnd(e, g));
            });
        });
    }
    
    // SVG Helper methods
    createSVGGroup(parent, id, className = '') {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        if (id) g.setAttribute('id', id);
        if (className) g.setAttribute('class', className);
        parent.appendChild(g);
        return g;
    }
    
    createSVGRect(parent, attrs) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        if (attrs.x) rect.setAttribute('x', attrs.x);
        if (attrs.y) rect.setAttribute('y', attrs.y);
        if (attrs.width) rect.setAttribute('width', attrs.width);
        if (attrs.height) rect.setAttribute('height', attrs.height);
        if (attrs.rx) rect.setAttribute('rx', attrs.rx);
        if (attrs.ry) rect.setAttribute('ry', attrs.ry);
        if (attrs.fill) rect.setAttribute('fill', attrs.fill);
        if (attrs.stroke) rect.setAttribute('stroke', attrs.stroke);
        if (attrs.strokeWidth) rect.setAttribute('stroke-width', attrs.strokeWidth);
        if (attrs.className) rect.setAttribute('class', attrs.className);
        parent.appendChild(rect);
        return rect;
    }
    
    createSVGText(parent, attrs) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        if (attrs.x) text.setAttribute('x', attrs.x);
        if (attrs.y) text.setAttribute('y', attrs.y);
        if (attrs.fontSize) text.setAttribute('font-size', attrs.fontSize);
        if (attrs.fontWeight) text.setAttribute('font-weight', attrs.fontWeight);
        if (attrs.fill) text.setAttribute('fill', attrs.fill);
        if (attrs.textAnchor) text.setAttribute('text-anchor', attrs.textAnchor);
        if (attrs.pointerEvents) text.setAttribute('pointer-events', attrs.pointerEvents);
        text.textContent = attrs.text;
        parent.appendChild(text);
        return text;
    }
    
    // Event handlers
    attachEventListeners() {
        // Close button for info panel
        const closeButton = document.getElementById('closeInfo');
        closeButton.addEventListener('click', () => this.closeFeatureInfo());
    }
    
    handleHover(event, element) {
        if (this.accessibilityManager && this.accessibilityManager.rotorMode === 'none') {
            this.accessibilityManager.showFocusIndicator(element);
        }
    }
    
    handleHoverEnd(event, element) {
        if (this.accessibilityManager && this.accessibilityManager.rotorMode === 'none') {
            this.accessibilityManager.hideFocusIndicator();
        }
    }
    
    showFeatureInfo(feature) {
        const panel = document.getElementById('featureInfo');
        const nameEl = document.getElementById('featureName');
        const detailsEl = document.getElementById('featureDetails');
        
        nameEl.textContent = feature.name;
        
        let details = '';
        
        // Add feature-specific details
        if (feature.airlines) {
            details += `<p><strong>Airlines:</strong> ${feature.airlines.join(', ')}</p>`;
        }
        if (feature.destinations) {
            details += `<p><strong>Destinations:</strong> ${feature.destinations.join(', ')}</p>`;
        }
        if (feature.services) {
            details += `<p><strong>Services:</strong> ${feature.services.join(', ')}</p>`;
        }
        if (feature.type) {
            details += `<p><strong>Type:</strong> ${feature.type}</p>`;
        }
        if (feature.access) {
            details += `<p><strong>Access:</strong> ${feature.access}</p>`;
        }
        if (feature.accessible) {
            details += `<p><strong>♿ Wheelchair accessible</strong></p>`;
        }
        if (feature.family) {
            details += `<p><strong>👶 Family facilities available</strong></p>`;
        }
        if (feature.lanes) {
            details += `<p><strong>Lanes:</strong> ${feature.lanes}</p>`;
        }
        if (feature.carousels) {
            details += `<p><strong>Carousels:</strong> ${feature.carousels.join(', ')}</p>`;
        }
        
        detailsEl.innerHTML = details;
        panel.classList.add('active');
        
        // Announce to screen readers
        this.accessibilityManager.announce(`Showing information for ${feature.name}`);
        
        // Focus the close button for keyboard users
        document.getElementById('closeInfo').focus();
    }
    
    closeFeatureInfo() {
        const panel = document.getElementById('featureInfo');
        panel.classList.remove('active');
        
        // Return focus to the selected feature if it exists
        if (this.selectedFeature) {
            this.selectedFeature.focus();
        }
    }
}

// Initialize the app
const app = new TerminalMapApp();