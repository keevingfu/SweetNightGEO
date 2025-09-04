# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**SweetNightGEO** (also branded as "Dymesty AI Glasses - Content Intelligence Center") is a comprehensive web-based content intelligence platform built as a collection of standalone HTML pages with embedded CSS and JavaScript. The platform focuses on AI-driven content management, analytics, and performance monitoring for the Dymesty AI Glasses brand.

### High-Level Architecture
- **Client-Side Only**: No backend services - all logic runs in the browser
- **Modular Pages**: Each HTML file is self-contained with its own functionality
- **Shared Libraries**: Common utilities in `shared-components.js` and `shared-ui-components.css`
- **CDN Dependencies**: External libraries (ECharts, Font Awesome, AOS) loaded from CDNs
- **Authentication**: Client-side session management using localStorage
- **Data Visualization**: Heavy use of ECharts for analytics dashboards

## Quick Start Commands

```bash
# Run local development server (choose one)
python3 -m http.server 8000              # Python built-in (recommended)
python -m http.server 8000                # Alternative Python command
npx http-server -p 8000                   # Node.js alternative
php -S localhost:8000                     # PHP alternative

# Open application entry points
open http://localhost:8000/login.html     # Authentication entry point
open http://localhost:8000/index.html     # Main dashboard (requires auth)
open http://localhost:8000/geo-platform-Intr.html  # Landing page
```

## Architecture

### Technology Stack
- **Frontend Only**: Pure HTML5, CSS3, and vanilla JavaScript
- **No Build System**: Direct HTML files with inline styles and scripts
- **External Dependencies**: 
  - ECharts (v5.4.3) for data visualization
  - Font Awesome (v6.4.0) for icons
  - AOS (v2.3.4) for scroll animations

### Page Structure
The application consists of modular HTML pages organized by functionality:

1. **Core Platform Pages**
   - `index.html` - Main dashboard/home page with authentication
   - `login.html` - Authentication portal
   - `geo-platform-Intr.html` - Platform introduction/landing page

2. **Content Management Modules** (01-series)
   - `01a-question-collector.html` - Question collection interface
   - `01b-asset-creation-studio.html` - Asset creation tools
   - `01c-asset-library-management.html` - Asset library manager

3. **Analytics & Monitoring** (05-series)
   - Various analytics dashboards for brand performance, visibility, perception, citations, SEO, and social media

4. **Strategy & Configuration**
   - `00a-geo-channel-diagnostic.html` - Channel diagnostics
   - `00b-geo-strategy.html` - Strategy management
   - `03a-channel-config-manager.html` - Channel configuration

### Authentication System
- Client-side authentication using localStorage
- Session management with expiry timestamps
- Automatic redirect to login page for unauthenticated access
- Auth tokens stored as: `authToken`, `sessionExpiry`, `currentUser`

## Development Commands

Since this is a static HTML project without a build system:

### Running the Project
```bash
# Option 1: Use Python's built-in server
python3 -m http.server 8000

# Option 2: Use Node.js http-server (if available)
npx http-server -p 8000

# Option 3: Open files directly in browser
open index.html  # macOS
```

### Development Workflow
1. **Start local server** (see Quick Start Commands)
2. **Edit HTML files directly** using any text editor
3. **Refresh browser** to see changes (no build step needed)
4. **Use browser developer tools** for debugging:
   - Console tab for JavaScript errors
   - Network tab for CDN loading issues
   - Elements tab for CSS debugging
5. **Test authentication flow** on each modified page
6. **Validate responsive design** at different screen sizes

### Project Initialization (if needed)
```bash
# If starting fresh or need version control:
git init
git add .
git commit -m "Initial commit: SweetNightGEO platform"

# Optional: create .gitignore for common files
echo -e ".DS_Store\nThumbs.db\n*.log" > .gitignore
```

## Key Considerations

### Critical Architecture Notes
- **No Git Repository**: Project is not under version control - consider `git init` for tracking changes
- **No Build System**: All changes are immediately live (no compilation step)
- **Static Assets Only**: No backend services, databases, or server-side logic
- **CDN Dependencies**: External libraries loaded from CDN (internet required for full functionality)

### Security Notes
- Authentication is client-side only (localStorage based)
- No backend validation - suitable for demo/prototype only
- Credentials appear to be hardcoded in login.html
- Session expires after a set duration (check `sessionExpiry` in localStorage)
- **CSRF Protection**: Not applicable (no server-side state)
- **XSS Risk**: Validate any user input before rendering

### Code Organization
- Each page is self-contained with its own styles and scripts
- Shared styling patterns use CSS custom properties (`:root` variables)
- Charts and visualizations primarily use ECharts library
- Responsive design with mobile-first approach
- **No Module System**: All JavaScript is in `<script>` tags (no imports/exports)

### Common Patterns
- Gradient themes using CSS variables (`--primary-gradient`)
- Animation effects using CSS keyframes and AOS library
- Modular card-based layouts for data presentation
- Sidebar navigation pattern across dashboard pages

### CSS Design System
```css
/* Common CSS variables used across pages */
:root {
    --primary: #667eea;
    --primary-dark: #5a67d8;
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.15);
}
```

## Important Files to Review

When making changes, pay special attention to:
- Authentication logic in each page's `<script>` section
- Shared CSS variables and design tokens
- ECharts initialization and configuration
- Navigation consistency across pages

### Shared Resources
- **`shared-components.js`**: JavaScript utility library with authentication, UI components, charts, data utilities
- **`shared-ui-components.css`**: CSS design system with variables, components, responsive design patterns

## Navigation Structure

The application uses a consistent sidebar navigation pattern across dashboard pages. The main navigation routes are:

- **Platform Introduction**: `geo-platform-Intr.html` (landing page)
- **Authentication**: `login.html` → `index.html` (main dashboard)
- **Strategy & Configuration**: 00-series pages
- **Content Management**: 01-series pages 
- **Orchestration**: 02-series pages
- **Channel Management**: 03-series pages
- **User Journey**: 04-series pages
- **Analytics & Monitoring**: 05-series pages

## Common Development Tasks

### Adding New Dashboard Pages
1. **Create HTML file** following the naming convention (e.g., `05k-new-feature.html`)
2. **Copy base structure** from an existing page (e.g., `index.html` for dashboard layout)
3. **Include authentication check** script at the beginning (copy from any existing page)
4. **Import required dependencies**:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   ```
5. **Update navigation** in sidebar to include new page link
6. **Follow CSS variable patterns** for consistent theming

### Modifying Chart Configurations
- ECharts instances are typically initialized in inline `<script>` tags
- Chart options follow the ECharts configuration format
- Common chart types used: line, bar, pie, radar, gauge
- Responsive behavior is handled through window resize listeners

### Common ECharts Patterns
```javascript
// Initialize chart
const myChart = echarts.init(document.getElementById('chartId'));

// Basic option structure
const option = {
    title: { text: 'Chart Title' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Series1', 'Series2'] },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed'] },
    yAxis: { type: 'value' },
    series: [{ name: 'Series1', type: 'line', data: [120, 200, 150] }]
};

// Set option and make responsive
myChart.setOption(option);
window.addEventListener('resize', () => myChart.resize());
```

### Authentication Flow
1. User submits credentials on `login.html`
2. On successful login, store in localStorage:
   - `authToken`: Authentication token
   - `sessionExpiry`: Timestamp for session expiration
   - `currentUser`: User information
3. All protected pages check authentication status on load
4. Expired sessions redirect to login page

## File Naming Convention

- **00-series**: Configuration and strategy tools
- **01-series**: Content creation and management
- **02-series**: Content orchestration
- **03-series**: Channel configuration
- **04-series**: User journey and tracking
- **05-series**: Analytics and monitoring dashboards

## Performance Considerations

- Each page loads independently with its own resources
- No JavaScript bundling or minification - keep code readable
- External libraries loaded from CDNs for better caching
- Large data visualizations should implement data pagination or lazy loading

## Language Requirements

- **Code Generation**: All code should be written in English
- **UI Content**: All user-facing text, labels, buttons, and messages must be in English
- **Comments**: Code comments should be in English
- **Variable Names**: Use English for all variable names, function names, and identifiers

## Testing and Validation

Since this is a static HTML project without automated testing:

### Manual Testing Checklist
1. **Authentication Flow**: Test login/logout functionality across all pages
2. **Chart Rendering**: Verify all ECharts visualizations load correctly
3. **Responsive Design**: Test on mobile (375px), tablet (768px), and desktop (1440px)
4. **Navigation**: Ensure all sidebar links work correctly
5. **Data Mock**: Charts use hardcoded demo data - update as needed
6. **CDN Dependencies**: Test with/without internet to identify loading failures
7. **LocalStorage**: Clear browser storage and verify auth flow works

### Testing Commands
```bash
# Test local server is working
curl http://localhost:8000/index.html

# Check if all pages load (replace with actual server port)
python3 -c "
import requests
pages = ['index.html', 'login.html', 'geo-platform-Intr.html']
for page in pages:
    try:
        response = requests.get(f'http://localhost:8000/{page}')
        print(f'{page}: {response.status_code}')
    except Exception as e:
        print(f'{page}: Error - {e}')
"
```

### Browser Compatibility
- Chrome/Edge (latest) - Primary target
- Firefox (latest) - Secondary target
- Safari (latest) - Secondary target  
- Mobile browsers on iOS/Android - Responsive design tested
- **Note**: Internet Explorer not supported (uses modern CSS features)

## Git Workflow

### Auto-Sync Feature
The project includes an automatic sync feature that monitors file changes and commits/pushes to GitHub automatically:

```bash
# Start auto-sync (continuous development mode)
./start-dev.sh  # Starts both auto-sync and development server

# Or use auto-sync directly:
./scripts/auto-sync.sh watch  # Start monitoring
./scripts/auto-sync.sh stop   # Stop monitoring
./scripts/auto-sync.sh sync   # Manual sync

# Check sync status
tail -f .auto-sync.log
```

### Manual Git Operations
- Pre-commit hook validates file formatting
- Post-commit hook automatically pushes to GitHub
- GitHub token stored in `.env` file (protected by .gitignore)
- Alternative secure push: `./scripts/git-push-secure.sh main`

### Important Files
- **`.env`**: Contains GitHub credentials (never commit)
- **`WORKFLOW.md`**: Detailed git workflow documentation
- **`.auto-sync.pid`**: Process ID for running file watcher
- **`.auto-sync.log`**: Log of automatic sync operations

## Common Issues and Solutions

### Chart Not Displaying
- Ensure ECharts library is loaded before initialization
- Check that the container element has defined dimensions
- Verify chart data format matches ECharts requirements

### Authentication Redirect Loop
- Clear localStorage and try logging in again
- Check that `sessionExpiry` timestamp is set correctly
- Ensure the authentication check script runs before page content loads

### Styling Inconsistencies
- Use CSS custom properties defined in `:root` for consistent theming
- Follow the existing gradient patterns for brand consistency
- Test responsive behavior at common breakpoints (768px, 1024px, 1400px)

## Recent Pages Added

### New Analytics Pages (05-series)
- **`05l-mattress-keyword-strategy.html`**: Keyword strategy analysis for mattress content
- **`05m-jsonld-content-strategy.html`**: JSON-LD structured data strategy dashboard
- **`05n-competitor-keyword-analysis.html`**: Competitor keyword analysis and comparison

These new pages follow the same authentication pattern and dashboard layout as existing pages.

