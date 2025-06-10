# YVR Terminal Map - Basic Interactive Implementation Plan

## Simplified Scope
Create a basic, static, accessible SVG terminal map focusing on helping users understand the geography of YVR's terminal layout. Future enhancements will add dynamic features.

## Phase 1 Goals (Current Focus)

### Core Features
1. **Static SVG Map** of YVR main terminal
2. **Basic Interactive Elements**:
   - Hover effects to highlight areas
   - Click to show area information
   - Keyboard navigation between major sections
3. **Filter System** for basic categories:
   - Gates (by letter: A, B, C, D, E)
   - Services (restrooms, information)
   - Amenities (shops, restaurants)
   - Transportation (security, customs)
4. **Rotor Navigation** for keyboard users
5. **Accessibility Features**:
   - Screen reader descriptions
   - Focus indicators
   - High contrast mode

### Simplified Architecture

```
terminal-map/
├── index.html              # Main page
├── css/
│   └── styles.css         # All styles
├── js/
│   ├── app.js            # Main application
│   ├── filters.js        # Filter management
│   ├── accessibility.js  # Accessibility features
│   └── data.js          # Terminal feature data
├── assets/
│   └── terminal-map.svg  # Main terminal SVG
└── README.md             # Documentation
```

### Key Components

1. **app.js**
   - Initialize map
   - Handle interactions
   - Coordinate managers

2. **filters.js**
   - Manage filter checkboxes
   - Show/hide SVG elements
   - Update UI state

3. **accessibility.js**
   - Keyboard navigation
   - Focus management
   - Screen reader announcements
   - Rotor functionality

4. **data.js**
   - Static data for terminal features
   - Feature categories
   - Descriptions and labels

### Implementation Steps

#### Step 1: Project Setup
- Create GitHub repository
- Set up basic file structure
- Create initial HTML template

#### Step 2: SVG Creation
- Convert terminal PDF to simplified SVG
- Add semantic IDs and classes
- Group elements by category

#### Step 3: Basic Interactivity
- Implement hover effects
- Add click handlers
- Display feature information

#### Step 4: Filter System
- Create filter UI
- Implement show/hide logic
- Add category toggles

#### Step 5: Accessibility
- Add keyboard navigation
- Implement rotor system
- Add ARIA labels
- Create focus indicators

#### Step 6: Styling
- Apply consistent visual design
- Ensure sufficient contrast
- Add responsive considerations

### Terminal Feature Categories

**Gates**
- Group A Gates
- Group B Gates  
- Group C Gates
- Group D Gates
- Group E Gates

**Services**
- Restrooms
- Information Desks
- Currency Exchange
- Medical Services

**Amenities**
- Restaurants/Cafes
- Retail Shops
- Duty Free
- Lounges

**Transportation**
- Security Checkpoints
- Customs/Immigration
- Baggage Claim
- Ground Transportation

### SVG Structure Example

```svg
<svg id="terminal-map" viewBox="0 0 1200 800">
  <!-- Background -->
  <g id="background">
    <rect class="terminal-outline" />
  </g>
  
  <!-- Gates -->
  <g id="gates" class="feature-group">
    <g id="gates-a" class="gate-group">
      <rect id="gate-a1" class="gate" />
      <text>A1</text>
    </g>
  </g>
  
  <!-- Services -->
  <g id="services" class="feature-group">
    <g id="restroom-1" class="restroom">
      <rect class="service-icon" />
    </g>
  </g>
</svg>
```

### Accessibility Approach

1. **Semantic Structure**
   - Logical grouping of elements
   - Descriptive IDs and classes
   - Proper heading hierarchy

2. **Keyboard Navigation**
   - Tab through major sections
   - Arrow keys within sections
   - Enter/Space to activate

3. **Screen Reader Support**
   - ARIA labels on all features
   - Live region for announcements
   - Descriptive text alternatives

4. **Visual Accessibility**
   - High contrast colors
   - Clear focus indicators
   - Sufficient text size

### Future Enhancements (Not in Phase 1)
- Real-time flight information
- Route planning
- Multiple terminal maps
- Search functionality
- Mobile app version
- Indoor positioning

### Success Criteria for Phase 1
1. User can understand terminal layout
2. All features keyboard accessible
3. Screen reader compatible
4. Filters work correctly
5. Clear visual feedback
6. Page loads quickly