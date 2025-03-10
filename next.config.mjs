let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // Dodaj tę opcję dla statycznego eksportu, co może pomóc z deploymentem
  output: 'export',
}

// Popraw funkcję mergeConfig, aby zwracała zmodyfikowany obiekt
function mergeConfig(config, userConfig) {
  if (!userConfig) {
    return config;
  }

  const mergedConfig = { ...config };
  
  for (const key in userConfig) {
    if (
      typeof mergedConfig[key] === 'object' &&
      !Array.isArray(mergedConfig[key])
    ) {
      mergedConfig[key] = {
        ...mergedConfig[key],
        ...userConfig[key],
      }
    } else {
      mergedConfig[key] = userConfig[key]
    }
  }
  
  return mergedConfig;
}

// Przypisz wynik funkcji mergeConfig do finalConfig
const finalConfig = mergeConfig(nextConfig, userConfig);

// Eksportuj finalną konfigurację
export default finalConfig;