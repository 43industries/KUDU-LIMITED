const required = ['VITE_ADMIN_INVITE_CODE'];
const missing = required.filter((key) => !String(process.env[key] || '').trim());

const isVercelBuild = Boolean(process.env.VERCEL);

if (missing.length && isVercelBuild) {
  console.warn(
    `[env] Missing env vars: ${missing.join(', ')}. Build will continue, but admin setup stays disabled until you add them in Vercel → Settings → Environment Variables.`,
  );
}

if (missing.length && !isVercelBuild) {
  console.warn(
    `[env] Missing optional local env vars: ${missing.join(', ')}. Build continues for UI work.`,
  );
}
