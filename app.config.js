/**
 * Actions Console - App Configuration
 * Slice Flow Automation Center
 * 
 * @version 1.0.0
 * @created 2025-12-23
 */
export default {
  name: 'Actions Console',
  version: '1.0.0',
  icon: '🎬',
  tagline: 'Slice Flow Automation Center',
  apiBase: '/api',
  
  // Authentication
  auth: {
    required: true,
    loginPath: '/login',
    provider: 'sunday-gateway'
  },
  
  // Routes
  routes: {
    dashboard: { page: 'dashboard', title: 'Dashboard', fallback: './html/dashboard.html' },
    flows: { page: 'flows', title: 'Flows', fallback: './html/flows.html' },
    library: { page: 'library', title: 'Library', fallback: './html/library.html' },
    logs: { page: 'logs', title: 'Logs', fallback: './html/logs.html' },
    settings: { page: 'settings', title: 'Settings', fallback: './html/settings.html' }
  },
  
  // Navigation tabs
  tabs: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'flows', label: 'Flows', icon: '⏩' },
    { id: 'library', label: 'Library', icon: '📚' },
    { id: 'logs', label: 'Logs', icon: '📋' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ],
  
  // Slice categories
  sliceCategories: [
    { id: 'ai', name: 'AI & LLM', icon: '🤖', color: '#8b5cf6' },
    { id: 'docker', name: 'Docker', icon: '🐳', color: '#2496ed' },
    { id: 'gitlab', name: 'GitLab', icon: '🦊', color: '#fc6d26' },
    { id: 'system', name: 'System', icon: '🖥️', color: '#10b981' },
    { id: 'git', name: 'Git', icon: '📦', color: '#f1502f' },
    { id: 'node', name: 'Node.js', icon: '🟢', color: '#339933' }
  ],
  
  // Featured flows (shown on dashboard)
  featuredFlows: [
    {
      id: 'setup-open-webui',
      name: 'Setup Open WebUI',
      description: 'Deploy Open WebUI with Ollama for local AI chat',
      icon: '🤖',
      category: 'ai'
    },
    {
      id: 'setup-gitlab-complete',
      name: 'Setup GitLab',
      description: 'Deploy self-hosted GitLab CE with Docker',
      icon: '🦊',
      category: 'gitlab'
    },
    {
      id: 'install-ollama',
      name: 'Install Ollama',
      description: 'Install and configure Ollama LLM runtime',
      icon: '🦙',
      category: 'ai'
    }
  ],
  
  // Quick actions (one-click slices)
  quickActions: [
    { id: 'open-webui-detect', label: 'Check Open WebUI', icon: '🔍' },
    { id: 'ollama-detect', label: 'Check Ollama', icon: '🔍' },
    { id: 'open-webui-start', label: 'Start Open WebUI', icon: '▶️' },
    { id: 'open-webui-stop', label: 'Stop Open WebUI', icon: '⏹️' }
  ],
  
  // Theme
  theme: {
    accentColor: '#8b5cf6',
    mode: 'auto'
  }
};

