// Filter management module
class FilterManager {
    constructor() {
        this.filters = new Map();
        this.filterCheckboxes = document.querySelectorAll('.filter-checkbox');
        this.initializeFilters();
        this.attachEventListeners();
    }
    
    initializeFilters() {
        // Set initial filter states
        this.filterCheckboxes.forEach(checkbox => {
            this.filters.set(checkbox.dataset.filter, checkbox.checked);
        });
    }
    
    attachEventListeners() {
        this.filterCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.handleFilterChange(e));
        });
    }
    
    handleFilterChange(event) {
        const filterName = event.target.dataset.filter;
        const isChecked = event.target.checked;
        
        this.filters.set(filterName, isChecked);
        
        // Handle parent/child relationships
        if (filterName.endsWith('-all')) {
            this.handleParentFilter(filterName, isChecked);
        } else {
            this.checkParentFilter(filterName);
        }
        
        this.applyFilters();
        this.announceFilterChange(filterName, isChecked);
    }
    
    handleParentFilter(parentFilter, isChecked) {
        const category = parentFilter.replace('-all', '');
        
        // Find all child filters
        this.filterCheckboxes.forEach(checkbox => {
            const filter = checkbox.dataset.filter;
            if (filter !== parentFilter && this.isChildFilter(filter, category)) {
                checkbox.checked = isChecked;
                this.filters.set(filter, isChecked);
            }
        });
    }
    
    checkParentFilter(childFilter) {
        // Determine parent category
        let parentCategory = null;
        
        if (childFilter.startsWith('gates-')) {
            parentCategory = 'gates';
        } else if (['restrooms', 'information', 'medical'].includes(childFilter)) {
            parentCategory = 'services';
        } else if (['restaurants', 'shops', 'lounges'].includes(childFilter)) {
            parentCategory = 'amenities';
        } else if (['security', 'customs', 'baggage'].includes(childFilter)) {
            parentCategory = 'transport';
        }
        
        if (parentCategory) {
            this.updateParentCheckbox(parentCategory);
        }
    }
    
    updateParentCheckbox(category) {
        const parentCheckbox = document.querySelector(`[data-filter="${category}-all"]`);
        if (!parentCheckbox) return;
        
        let allChecked = true;
        let someChecked = false;
        
        this.filterCheckboxes.forEach(checkbox => {
            const filter = checkbox.dataset.filter;
            if (filter !== `${category}-all` && this.isChildFilter(filter, category)) {
                if (checkbox.checked) {
                    someChecked = true;
                } else {
                    allChecked = false;
                }
            }
        });
        
        parentCheckbox.checked = allChecked;
        parentCheckbox.indeterminate = someChecked && !allChecked;
        this.filters.set(`${category}-all`, allChecked);
    }
    
    isChildFilter(filter, category) {
        if (category === 'gates') {
            return filter.startsWith('gates-') && filter !== 'gates-all';
        } else if (category === 'services') {
            return ['restrooms', 'information', 'medical'].includes(filter);
        } else if (category === 'amenities') {
            return ['restaurants', 'shops', 'lounges'].includes(filter);
        } else if (category === 'transport') {
            return ['security', 'customs', 'baggage'].includes(filter);
        }
        return false;
    }
    
    applyFilters() {
        // Apply visibility to SVG elements based on filters
        const svg = document.getElementById('terminalMap');
        if (!svg) return;
        
        // Gates
        ['a', 'b', 'c', 'd', 'e'].forEach(letter => {
            const filterActive = this.filters.get(`gates-${letter}`);
            const elements = svg.querySelectorAll(`.gate-group-${letter}`);
            elements.forEach(el => {
                el.style.display = filterActive ? 'block' : 'none';
            });
        });
        
        // Services
        ['restrooms', 'information', 'medical'].forEach(service => {
            const filterActive = this.filters.get(service);
            const elements = svg.querySelectorAll(`.${service}`);
            elements.forEach(el => {
                el.style.display = filterActive ? 'block' : 'none';
            });
        });
        
        // Amenities
        ['restaurants', 'shops', 'lounges'].forEach(amenity => {
            const filterActive = this.filters.get(amenity);
            const elements = svg.querySelectorAll(`.${amenity}`);
            elements.forEach(el => {
                el.style.display = filterActive ? 'block' : 'none';
            });
        });
        
        // Transportation
        ['security', 'customs', 'baggage'].forEach(transport => {
            const filterActive = this.filters.get(transport);
            const elements = svg.querySelectorAll(`.${transport}`);
            elements.forEach(el => {
                el.style.display = filterActive ? 'block' : 'none';
            });
        });
    }
    
    announceFilterChange(filterName, isChecked) {
        const announcement = document.getElementById('announcements');
        const action = isChecked ? 'shown' : 'hidden';
        const readableName = this.getReadableFilterName(filterName);
        
        announcement.textContent = `${readableName} ${action}`;
    }
    
    getReadableFilterName(filterName) {
        const nameMap = {
            'gates-all': 'All gates',
            'gates-a': 'A gates',
            'gates-b': 'B gates',
            'gates-c': 'C gates',
            'gates-d': 'D gates',
            'gates-e': 'E gates',
            'services-all': 'All services',
            'restrooms': 'Restrooms',
            'information': 'Information desks',
            'medical': 'Medical services',
            'amenities-all': 'All amenities',
            'restaurants': 'Restaurants',
            'shops': 'Shops',
            'lounges': 'Lounges',
            'transport-all': 'All transportation',
            'security': 'Security checkpoints',
            'customs': 'Customs',
            'baggage': 'Baggage claim'
        };
        
        return nameMap[filterName] || filterName;
    }
}

// Export for use in app.js
window.FilterManager = FilterManager;