/**
 * Actions Console Bootstrap
 * Initializes Sunday Framework for Actions Console
 * 
 * @version 1.0.0
 * @created 2025-12-23
 */

const BOOT_TIMEOUT = 30000;

function setBoot(msg) {
  const el = document.getElementById('boot-status');
  if (el) el.textContent = msg;
  console.log('[Actions Boot]', msg);
}

async function initApp() {
  const hangTimer = setTimeout(() => {
    setBoot('Startup taking too long - check console');
  }, BOOT_TIMEOUT);

  try {
    setBoot('Loading framework…');
    const { Sunday } = await import('/sundayapp/index.js');
    
    setBoot('Loading config…');
    const configModule = await import('./../app.config.js?v=20251223a');
    const config = configModule.default;
    
    // Wait for DOM ready
    if (document.readyState === 'loading') {
      await new Promise(resolve => {
        document.addEventListener('DOMContentLoaded', resolve);
      });
    }
    
    setBoot('Initializing console…');
    await Sunday.init(config);
    
    clearTimeout(hangTimer);
    
    // Hide boot screen, show app
    const bootScreen = document.getElementById('boot-screen');
    const appRoot = document.getElementById('app-root');
    
    if (bootScreen) bootScreen.style.display = 'none';
    if (appRoot) appRoot.style.display = 'block';
    
    console.log('[Actions Boot] ✅ Actions Console ready');
    
  } catch (error) {
    clearTimeout(hangTimer);
    console.error('[Actions Boot] ❌ Startup failed:', error);
    setBoot(`Startup failed: ${error.message}`);
    
    // Show error in boot screen
    const bootScreen = document.getElementById('boot-screen');
    if (bootScreen) {
      bootScreen.innerHTML = `
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 64px; margin-bottom: 20px;">❌</div>
          <h2 style="margin: 0 0 10px;">Actions Console Failed to Start</h2>
          <p style="color: #888; margin: 0 0 20px;">${error.message}</p>
          <button onclick="location.reload()" style="padding: 10px 20px; background: #8b5cf6; color: white; border: none; border-radius: 8px; cursor: pointer;">
            Retry
          </button>
        </div>
      `;
    }
  }
}

initApp();

