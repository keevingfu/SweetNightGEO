/**
 * SweetNightGEO Shared JavaScript Components Library
 * Common utilities and interactive components
 */

// ==========================================================================
// Authentication Utilities
// ==========================================================================

const AuthManager = {
    // Check authentication status
    checkAuth: function() {
        const authToken = localStorage.getItem('authToken');
        const sessionExpiry = localStorage.getItem('sessionExpiry');
        
        if (!authToken || !sessionExpiry || new Date().getTime() > parseInt(sessionExpiry)) {
            this.logout();
            return false;
        }
        return true;
    },
    
    // Logout user
    logout: function() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('sessionExpiry');
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    },
    
    // Get current user info
    getCurrentUser: function() {
        const userStr = localStorage.getItem('currentUser');
        return userStr ? JSON.parse(userStr) : null;
    },
    
    // Set user session
    setSession: function(token, expiry, user) {
        localStorage.setItem('authToken', token);
        localStorage.setItem('sessionExpiry', expiry);
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
};

// ==========================================================================
// UI Components
// ==========================================================================

const UIComponents = {
    // Show notification
    showNotification: function(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Add to page
        let container = document.getElementById('notification-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notification-container';
            container.className = 'notification-container';
            document.body.appendChild(container);
        }
        
        container.appendChild(notification);
        
        // Auto remove
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, duration);
    },
    
    // Get notification icon
    getNotificationIcon: function(type) {
        const icons = {
            'success': 'check-circle',
            'error': 'exclamation-circle',
            'warning': 'exclamation-triangle',
            'info': 'info-circle'
        };
        return icons[type] || 'info-circle';
    },
    
    // Show modal
    showModal: function(title, content, options = {}) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h2 class="modal-title">${title}</h2>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                <div class="modal-footer">
                    ${options.showCancel !== false ? '<button class="btn btn-secondary modal-cancel">Cancel</button>' : ''}
                    <button class="btn btn-primary modal-confirm">${options.confirmText || 'Confirm'}</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Event listeners
        const cancelBtn = modal.querySelector('.modal-cancel');
        const confirmBtn = modal.querySelector('.modal-confirm');
        
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                modal.remove();
                if (options.onCancel) options.onCancel();
            });
        }
        
        confirmBtn.addEventListener('click', () => {
            modal.remove();
            if (options.onConfirm) options.onConfirm();
        });
        
        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                if (options.onCancel) options.onCancel();
            }
        });
        
        return modal;
    },
    
    // Show loading overlay
    showLoading: function(message = 'Loading...') {
        const loading = document.createElement('div');
        loading.id = 'loading-overlay';
        loading.className = 'loading-overlay';
        loading.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <p>${message}</p>
            </div>
        `;
        document.body.appendChild(loading);
        return loading;
    },
    
    // Hide loading overlay
    hideLoading: function() {
        const loading = document.getElementById('loading-overlay');
        if (loading) {
            loading.remove();
        }
    }
};

// ==========================================================================
// Chart Utilities
// ==========================================================================

const ChartUtils = {
    // Common chart options
    getDefaultOptions: function() {
        return {
            grid: {
                top: 60,
                left: 50,
                right: 50,
                bottom: 60,
                containLabel: true
            },
            textStyle: {
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            },
            color: ['#667eea', '#764ba2', '#48bb78', '#f6ad55', '#fc8181', '#4299e1']
        };
    },
    
    // Create responsive chart
    createResponsiveChart: function(containerId, options) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Chart container ${containerId} not found`);
            return null;
        }
        
        const chart = echarts.init(container);
        const mergedOptions = { ...this.getDefaultOptions(), ...options };
        chart.setOption(mergedOptions);
        
        // Make responsive
        window.addEventListener('resize', () => {
            chart.resize();
        });
        
        return chart;
    },
    
    // Format number for display
    formatNumber: function(num, decimals = 0) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(decimals) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(decimals) + 'K';
        }
        return num.toFixed(decimals);
    },
    
    // Generate gradient colors
    generateGradient: function(color1, color2) {
        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: color1 },
            { offset: 1, color: color2 }
        ]);
    }
};

// ==========================================================================
// Data Utilities
// ==========================================================================

const DataUtils = {
    // Format date
    formatDate: function(date, format = 'YYYY-MM-DD') {
        if (!date) return '';
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hour = String(d.getHours()).padStart(2, '0');
        const minute = String(d.getMinutes()).padStart(2, '0');
        
        return format
            .replace('YYYY', year)
            .replace('MM', month)
            .replace('DD', day)
            .replace('HH', hour)
            .replace('mm', minute);
    },
    
    // Generate mock data
    generateMockData: function(days = 30) {
        const data = [];
        const baseDate = new Date();
        baseDate.setDate(baseDate.getDate() - days);
        
        for (let i = 0; i < days; i++) {
            const date = new Date(baseDate);
            date.setDate(date.getDate() + i);
            data.push({
                date: this.formatDate(date),
                value: Math.floor(Math.random() * 1000) + 100,
                growth: (Math.random() - 0.5) * 20
            });
        }
        
        return data;
    },
    
    // Calculate percentage change
    calculatePercentage: function(current, previous) {
        if (previous === 0) return 0;
        return ((current - previous) / previous) * 100;
    },
    
    // Debounce function
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// ==========================================================================
// Navigation Utilities
// ==========================================================================

const NavigationUtils = {
    // Set active navigation item
    setActiveNav: function(currentPage) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const link = item.querySelector('a');
            if (link && link.getAttribute('href') === currentPage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    },
    
    // Generate breadcrumbs
    generateBreadcrumbs: function(items) {
        const container = document.getElementById('breadcrumbs');
        if (!container) return;
        
        const breadcrumbsHtml = items.map((item, index) => {
            const isLast = index === items.length - 1;
            return `
                <span class="breadcrumb-item">
                    ${item.href && !isLast ? `<a href="${item.href}">${item.text}</a>` : item.text}
                </span>
                ${!isLast ? '<span class="breadcrumb-separator">/</span>' : ''}
            `;
        }).join('');
        
        container.innerHTML = breadcrumbsHtml;
    }
};

// ==========================================================================
// Form Utilities
// ==========================================================================

const FormUtils = {
    // Validate form
    validateForm: function(formId, rules) {
        const form = document.getElementById(formId);
        if (!form) return false;
        
        let isValid = true;
        const formData = new FormData(form);
        
        for (const [field, rule] of Object.entries(rules)) {
            const value = formData.get(field);
            const fieldElement = form.querySelector(`[name="${field}"]`);
            const errorElement = form.querySelector(`[data-error="${field}"]`);
            
            let fieldValid = true;
            let errorMessage = '';
            
            // Required validation
            if (rule.required && (!value || value.trim() === '')) {
                fieldValid = false;
                errorMessage = rule.messages?.required || 'This field is required';
            }
            
            // Min length validation
            if (fieldValid && rule.minLength && value.length < rule.minLength) {
                fieldValid = false;
                errorMessage = rule.messages?.minLength || `Minimum length is ${rule.minLength}`;
            }
            
            // Email validation
            if (fieldValid && rule.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                fieldValid = false;
                errorMessage = rule.messages?.email || 'Please enter a valid email';
            }
            
            // Update UI
            if (fieldElement) {
                if (fieldValid) {
                    fieldElement.classList.remove('error');
                } else {
                    fieldElement.classList.add('error');
                    isValid = false;
                }
            }
            
            if (errorElement) {
                errorElement.textContent = fieldValid ? '' : errorMessage;
                errorElement.style.display = fieldValid ? 'none' : 'block';
            }
        }
        
        return isValid;
    },
    
    // Serialize form data
    serializeForm: function(formId) {
        const form = document.getElementById(formId);
        if (!form) return {};
        
        const formData = new FormData(form);
        const data = {};
        
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        return data;
    }
};

// ==========================================================================
// Storage Utilities
// ==========================================================================

const StorageUtils = {
    // Set item with expiry
    setWithExpiry: function(key, value, ttl) {
        const now = new Date();
        const item = {
            value: value,
            expiry: now.getTime() + ttl
        };
        localStorage.setItem(key, JSON.stringify(item));
    },
    
    // Get item with expiry check
    getWithExpiry: function(key) {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;
        
        const item = JSON.parse(itemStr);
        const now = new Date();
        
        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        
        return item.value;
    },
    
    // Clear expired items
    clearExpired: function() {
        const now = new Date().getTime();
        const keysToRemove = [];
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const itemStr = localStorage.getItem(key);
            
            try {
                const item = JSON.parse(itemStr);
                if (item.expiry && now > item.expiry) {
                    keysToRemove.push(key);
                }
            } catch (e) {
                // Not a JSON item with expiry, skip
            }
        }
        
        keysToRemove.forEach(key => localStorage.removeItem(key));
    }
};

// ==========================================================================
// API Utilities
// ==========================================================================

const ApiUtils = {
    // Make API request with loading
    request: async function(url, options = {}) {
        const loading = options.showLoading !== false ? UIComponents.showLoading() : null;
        
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    ...options.headers
                },
                ...options
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const data = await response.json();
            
            if (loading) UIComponents.hideLoading();
            return data;
            
        } catch (error) {
            if (loading) UIComponents.hideLoading();
            
            if (options.showError !== false) {
                UIComponents.showNotification(
                    error.message || 'An error occurred',
                    'error'
                );
            }
            
            throw error;
        }
    }
};

// ==========================================================================
// Initialize shared components
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Clear expired storage items
    StorageUtils.clearExpired();
    
    // Add global styles for components
    const style = document.createElement('style');
    style.textContent = `
        .notification-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
        }
        
        .notification {
            background: white;
            border-radius: 8px;
            margin-bottom: 12px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            border-left: 4px solid var(--primary);
            animation: slideInRight 0.3s ease-out;
        }
        
        .notification-success { border-left-color: var(--success); }
        .notification-error { border-left-color: var(--error); }
        .notification-warning { border-left-color: var(--warning); }
        .notification-info { border-left-color: var(--info); }
        
        .notification-content {
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .notification-close {
            margin-left: auto;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--gray-500);
            padding: 4px;
        }
        
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }
        
        .loading-content {
            background: white;
            padding: 32px;
            border-radius: 12px;
            text-align: center;
        }
        
        .loading-spinner {
            width: 32px;
            height: 32px;
            border: 3px solid var(--gray-200);
            border-top: 3px solid var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 16px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    
    document.head.appendChild(style);
});

// Export for use in other scripts
window.AuthManager = AuthManager;
window.UIComponents = UIComponents;
window.ChartUtils = ChartUtils;
window.DataUtils = DataUtils;
window.NavigationUtils = NavigationUtils;
window.FormUtils = FormUtils;
window.StorageUtils = StorageUtils;
window.ApiUtils = ApiUtils;