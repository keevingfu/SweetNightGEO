# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**SweetNightGEO** (also branded as "Dymesty AI Glasses - Content Intelligence Center") is a comprehensive web-based content intelligence platform built as a collection of standalone HTML pages with embedded CSS and JavaScript. The platform focuses on AI-driven content management, analytics, and performance monitoring for the Dymesty AI Glasses brand.

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
1. Edit HTML files directly
2. Refresh browser to see changes
3. Use browser developer tools for debugging
4. Check console for JavaScript errors

## Key Considerations

### Security Notes
- Authentication is client-side only (localStorage based)
- No backend validation - suitable for demo/prototype only
- Credentials appear to be hardcoded in login.html

### Code Organization
- Each page is self-contained with its own styles and scripts
- Shared styling patterns use CSS custom properties (`:root` variables)
- Charts and visualizations primarily use ECharts library
- Responsive design with mobile-first approach

### Common Patterns
- Gradient themes using CSS variables (`--primary-gradient`)
- Animation effects using CSS keyframes and AOS library
- Modular card-based layouts for data presentation
- Sidebar navigation pattern across dashboard pages

## Important Files to Review

When making changes, pay special attention to:
- Authentication logic in each page's `<script>` section
- Shared CSS variables and design tokens
- ECharts initialization and configuration
- Navigation consistency across pages

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
1. Create HTML file following the naming convention (e.g., `05k-new-feature.html`)
2. Include authentication check script at the beginning
3. Use the standard header and sidebar navigation structure
4. Import ECharts for data visualization: `<script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>`
5. Follow the existing CSS variable patterns for consistent theming

### Modifying Chart Configurations
- ECharts instances are typically initialized in inline `<script>` tags
- Chart options follow the ECharts configuration format
- Common chart types used: line, bar, pie, radar, gauge
- Responsive behavior is handled through window resize listeners

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