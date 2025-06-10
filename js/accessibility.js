// Accessibility management module
class AccessibilityManager {
    constructor() {
        this.rotorMode = 'none';
        this.focusableElements = [];
        this.currentFocusIndex = -1;
        this.focusIndicator = null;
        
        this.initializeAccessibility();
        this.attachEventListeners();
    }
    
    initializeAccessibility() {
        // Set up rotor controls
        const rotorRadios = document.querySelectorAll('input[name="rotor"]');
        rotorRadios.forEach(radio => {
            radio.addEventListener('change', (e) => this.handleRotorChange(e));
        });
        
        // Clear rotor button
        const clearButton = document.getElementById('clearRotor');
        clearButton.addEventListener('click', () => this.clearRotor());
        
        // High contrast toggle
        const highContrastToggle = document.getElementById('highContrast');
        highContrastToggle.addEventListener('change', (e) => this.toggleHighContrast(e));
        
        // Show labels toggle
        const showLabelsToggle = document.getElementById('showLabels');
        showLabelsToggle.addEventListener('change', (e) => this.toggleLabels(e));
        
        // Initialize focus indicator
        this.createFocusIndicator();
        
        // Set up keyboard navigation
        this.setupKeyboardNavigation();
    }
    
    attachEventListeners() {
        // Close info panel with Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeInfoPanel();
            }
        });
    }
    
    handleRotorChange(event) {
        this.rotorMode = event.target.value;
        this.updateFocusableElements();
        this.announceRotorChange();
    }
    
    clearRotor() {
        const noneRadio = document.querySelector('input[name="rotor"][value="none"]');
        noneRadio.checked = true;
        this.rotorMode = 'none';
        this.updateFocusableElements();
        this.announce('Keyboard navigation cleared');
    }
    
    updateFocusableElements() {
        const svg = document.getElementById('terminalMap');
        if (!svg) return;
        
        // Remove existing tabindex attributes
        svg.querySelectorAll('[tabindex]').forEach(el => {
            el.removeAttribute('tabindex');
        });
        
        this.focusableElements = [];
        
        if (this.rotorMode === 'none') {
            return;
        }
        
        // Add tabindex based on rotor mode
        let elements = [];
        
        switch (this.rotorMode) {
            case 'gates':
                elements = svg.querySelectorAll('.gate:not([style*="display: none"])');
                break;
            case 'services':
                elements = svg.querySelectorAll('.restroom:not([style*="display: none"]), .information:not([style*="display: none"]), .medical:not([style*="display: none"])');
                break;
            case 'amenities':
                elements = svg.querySelectorAll('.restaurant:not([style*="display: none"]), .shop:not([style*="display: none"]), .lounge:not([style*="display: none"])');
                break;
            case 'all':
                elements = svg.querySelectorAll('.gate:not([style*="display: none"]), .restroom:not([style*="display: none"]), .information:not([style*="display: none"]), .medical:not([style*="display: none"]), .restaurant:not([style*="display: none"]), .shop:not([style*="display: none"]), .lounge:not([style*="display: none"]), .security:not([style*="display: none"]), .customs:not([style*="display: none"]), .baggage:not([style*="display: none"])');
                break;
        }
        
        elements.forEach((el, index) => {
            el.setAttribute('tabindex', '0');
            el.setAttribute('role', 'button');
            this.focusableElements.push(el);
            
            // Add keyboard event listeners
            el.addEventListener('keydown', (e) => this.handleElementKeydown(e, el));
            el.addEventListener('focus', (e) => this.handleElementFocus(e, el));
            el.addEventListener('blur', (e) => this.handleElementBlur(e, el));
        });
        
        this.currentFocusIndex = -1;
    }
    
    setupKeyboardNavigation() {
        const svg = document.getElementById('terminalMap');
        if (!svg) return;
        
        svg.addEventListener('keydown', (e) => {
            if (this.rotorMode === 'none' || this.focusableElements.length === 0) {
                return;
            }
            
            switch (e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    this.focusNext();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.focusPrevious();
                    break;
            }
        });
    }
    
    focusNext() {
        this.currentFocusIndex = (this.currentFocusIndex + 1) % this.focusableElements.length;
        this.focusableElements[this.currentFocusIndex].focus();
    }
    
    focusPrevious() {
        this.currentFocusIndex = this.currentFocusIndex - 1;
        if (this.currentFocusIndex < 0) {
            this.currentFocusIndex = this.focusableElements.length - 1;
        }
        this.focusableElements[this.currentFocusIndex].focus();
    }
    
    handleElementKeydown(event, element) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            element.click();
        }
    }
    
    handleElementFocus(event, element) {
        this.showFocusIndicator(element);
        
        // Update current focus index
        const index = this.focusableElements.indexOf(element);
        if (index !== -1) {
            this.currentFocusIndex = index;
        }
    }
    
    handleElementBlur(event, element) {
        this.hideFocusIndicator();
    }
    
    createFocusIndicator() {
        const focusGroup = document.getElementById('focusIndicator');
        if (!focusGroup) return;
        
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('class', 'focus-outline');
        rect.setAttribute('rx', '4');
        rect.setAttribute('ry', '4');
        focusGroup.appendChild(rect);
        
        this.focusIndicator = rect;
    }
    
    showFocusIndicator(element) {
        if (!this.focusIndicator || !element) return;
        
        const bbox = element.getBBox();
        const padding = 5;
        
        this.focusIndicator.setAttribute('x', bbox.x - padding);
        this.focusIndicator.setAttribute('y', bbox.y - padding);
        this.focusIndicator.setAttribute('width', bbox.width + (padding * 2));
        this.focusIndicator.setAttribute('height', bbox.height + (padding * 2));
        this.focusIndicator.style.display = 'block';
    }
    
    hideFocusIndicator() {
        if (this.focusIndicator) {
            this.focusIndicator.style.display = 'none';
        }
    }
    
    toggleHighContrast(event) {
        document.body.classList.toggle('high-contrast', event.target.checked);
        this.announce(event.target.checked ? 'High contrast mode enabled' : 'High contrast mode disabled');
    }
    
    toggleLabels(event) {
        const svg = document.getElementById('terminalMap');
        if (svg) {
            svg.classList.toggle('hide-labels', !event.target.checked);
        }
        this.announce(event.target.checked ? 'Labels shown' : 'Labels hidden');
    }
    
    announceRotorChange() {
        let message = '';
        const count = this.focusableElements.length;
        
        switch (this.rotorMode) {
            case 'none':
                message = 'Keyboard navigation disabled';
                break;
            case 'gates':
                message = `Navigating gates. ${count} gates available`;
                break;
            case 'services':
                message = `Navigating services. ${count} services available`;
                break;
            case 'amenities':
                message = `Navigating amenities. ${count} amenities available`;
                break;
            case 'all':
                message = `Navigating all features. ${count} features available`;
                break;
        }
        
        this.announce(message);
    }
    
    announce(message) {
        const announcement = document.getElementById('announcements');
        announcement.textContent = message;
    }
    
    closeInfoPanel() {
        const panel = document.getElementById('featureInfo');
        if (panel.classList.contains('active')) {
            panel.classList.remove('active');
            this.announce('Information panel closed');
        }
    }
}

// Export for use in app.js
window.AccessibilityManager = AccessibilityManager;