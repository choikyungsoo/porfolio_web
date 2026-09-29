type IconProps = { className?: string };

export const ReactIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="9" fill="#61DAFB" />
    <ellipse cx="50" cy="50" rx="46" ry="17" stroke="#61DAFB" strokeWidth="3.5" />
    <ellipse cx="50" cy="50" rx="46" ry="17" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="46" ry="17" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(-60 50 50)" />
  </svg>
);

export const TypeScriptIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100">
    <rect width="100" height="100" rx="8" fill="#3178C6" />
    <path
      d="M56 54.5v5.1c.8.4 1.8.8 2.9 1 1.1.3 2.2.4 3.4.4 1.1 0 2.2-.1 3.2-.4 1-.2 1.9-.6 2.7-1.2.7-.5 1.3-1.2 1.8-2 .4-.8.7-1.8.7-2.9 0-.8-.1-1.5-.4-2.1-.2-.6-.6-1.1-1-1.6-.5-.5-1-.9-1.7-1.3-.7-.4-1.4-.7-2.3-1.1-.6-.2-1.2-.5-1.6-.7-.5-.2-.8-.5-1.1-.7-.3-.2-.5-.5-.6-.7-.1-.3-.2-.5-.2-.8 0-.3.1-.5.2-.7.1-.2.3-.4.5-.5.2-.1.5-.3.8-.3.3-.1.6-.1 1-.1.3 0 .6 0 1 .1.3.1.7.2 1 .3.3.1.6.3.9.5.3.2.5.4.7.6v-4.8c-.7-.3-1.5-.5-2.3-.6-.9-.1-1.8-.2-2.8-.2-1.1 0-2.1.1-3.1.4-1 .3-1.8.7-2.6 1.2-.7.5-1.3 1.2-1.7 2-.4.8-.6 1.7-.6 2.8 0 1.4.4 2.6 1.2 3.5.8 1 2 1.8 3.6 2.5.6.3 1.2.5 1.7.8.5.2.9.5 1.2.7.3.3.6.5.7.8.2.3.3.6.3 1 0 .3-.1.5-.2.8-.1.2-.3.4-.5.6-.2.2-.5.3-.9.4-.3.1-.7.1-1.1.1-1 0-2-.2-2.9-.6-.9-.5-1.7-1-2.4-1.7zm-12.3-14.1H30v4.1h7v20.5h4.8V44.5h7V40.4z"
      fill="white"
    />
  </svg>
);

export const JavaScriptIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100">
    <rect width="100" height="100" rx="8" fill="#F7DF1E" />
    <path
      d="M26 75.4l5-3c1 1.7 1.8 3.2 3.9 3.2 2 0 3.3-.8 3.3-3.8V48.2h6.1v23.7c0 6.3-3.7 9.1-9.1 9.1-4.9 0-7.7-2.5-9.2-5.6zm22 .7l5-2.9c1.3 2.1 3 3.6 6 3.6 2.5 0 4.1-1.3 4.1-3 0-2.1-1.6-2.8-4.4-4l-1.5-.6c-4.4-1.9-7.3-4.2-7.3-9.2 0-4.6 3.5-8 8.9-8 3.9 0 6.6 1.3 8.6 4.8l-4.7 3c-1-1.8-2.1-2.6-3.9-2.6-1.8 0-2.9 1.1-2.9 2.6 0 1.8 1.1 2.5 3.7 3.6l1.5.6c5.1 2.2 8.1 4.5 8.1 9.6 0 5.5-4.3 8.5-10.1 8.5-5.6 0-9.3-2.7-11.1-6z"
      fill="#323330"
    />
  </svg>
);

export const NextJsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="46" fill="#000" />
    <path d="M28 70V30l38 46c1 1 2 1 2.5 0l.5-1V30" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <path d="M62 30v25" stroke="white" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

export const TailwindIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#0F172A" />
    <path
      d="M50 25c-13 0-21.7 6.5-26 19.5 5.2-6.5 11.3-8.9 18.2-7.3 4 1 6.8 3.8 9.9 6.9C57 49 62.7 55 76 55c13 0 21.7-6.5 26-19.5-5.2 6.5-11.3 8.9-18.2 7.3-4-1-6.8-3.8-9.9-6.9C68.9 31 63.3 25 50 25zm-26 19.5C10.7 57.5 16.3 63.5 30 75c13 0 21.7-6.5 26-19.5-5.2 6.5-11.3 8.9-18.2 7.3-4-1-6.8-3.8-9.9-6.9C22.9 50.9 17.3 44.5 4 44.5z"
      fill="#38BDF8"
      transform="translate(-4 0) scale(1.08)"
    />
  </svg>
);

export const ViteIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1a1a2e" />
    <polygon points="50,12 80,35 70,35 50,68 30,35 20,35" fill="#BD34FE" />
    <polygon points="50,12 65,35 50,68 35,35" fill="url(#vite-mid)" />
    <polygon points="30,35 50,68 8,55" fill="#FFD62E" opacity="0.9" />
    <defs>
      <linearGradient id="vite-mid" x1="50" y1="12" x2="50" y2="68" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BD34FE" />
        <stop offset="1" stopColor="#9B59FF" />
      </linearGradient>
    </defs>
  </svg>
);

export const SpringIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#0a1628" />
    <path
      d="M75 18c-4 7-10 12-18 13.5C45.5 33.3 36 41 34 52c-2 11 4 22 14 26-3-4-4-9-3-14 1-5 4-9 9-12 4-2.5 8-3 13-2 9 1.5 16-1 21-8 1-1.5 2-3 2.5-4.5-3.5 1-7.5 1-10.5-.5-2-1-3-2.5-3.5-4.5-.5-2 .5-4 2.5-5 1.5-1 3.5-1 5.5-.5-4-5.5-10-9-18-11.5-1.5-.4-3-.6-4-.5z"
      fill="#6DB33F"
    />
    <circle cx="75" cy="25" r="5" fill="#6DB33F" />
  </svg>
);

export const JavaIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1a1a2e" />
    <path
      d="M37 67s-3 1.5 2 2c6 .5 9 .5 16-1 0 0 2 1 4.5 2C46 74 25 70 37 67zm-2-8s-3 2 2 2c6 .5 10.5 .5 18.5-1 0 0 1.5 1.5 3.5 2C43.5 66.5 20 62 35 59z"
      fill="#0074BD"
    />
    <path
      d="M53 42s7 3.5-6.5 9c-10.5 4-2.5 9.5 0 9.5-8.5-4.5-14.5-8.5-10.5-13.5C40.5 42 55.5 40 53 42z"
      fill="#EA2D2E"
    />
    <path
      d="M37 79s-2 1.5 2.5 2c7 1.5 22.5 .5 29.5-2.5 0 0 2 2 4 3C60 86 25 85 37 79zm-1-5s-2 2 2.5 2c7 1.5 22 1 29-2 0 0 1.5 1.5 3 2.5C57 81 25 80 36 74z"
      fill="#0074BD"
    />
    <path
      d="M64 54.5s4 3.5-4.5 4.5c-16.5 2.5-17.5-5-6.5-5.5C57.5 53 64 54.5 64 54.5z"
      fill="#EA2D2E"
    />
    <path
      d="M58 24s8.5 8.5-8 21.5c-13 10.5-3 16.5 0 23.5-8-7-13.5-13-9.5-18.5C46 43 61 39 58 24z"
      fill="#EA2D2E"
    />
    <path
      d="M43 88s1.5 1 -2 1.5c-7 1-30 .5-26-1.5 1-1 3-1.5 4.5-1.5-2 1.5 17 1 23.5 1.5z"
      fill="#0074BD"
    />
  </svg>
);

export const GitHubIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#161B22" />
    <path
      d="M50 10C27.9 10 10 27.9 10 50c0 17.7 11.5 32.8 27.4 38.1 2 .4 2.7-.9 2.7-1.9 0-1-.04-4.2-.05-7.6-11.1 2.4-13.5-4.7-13.5-4.7-1.8-4.6-4.5-5.8-4.5-5.8-3.6-2.5.3-2.4.3-2.4 4 .3 6.1 4.1 6.1 4.1 3.6 6.1 9.4 4.3 11.7 3.3.4-2.6 1.4-4.3 2.5-5.3-8.9-1-18.3-4.5-18.3-19.8 0-4.4 1.6-8 4.1-10.8-.4-1-1.8-5.1.4-10.6 0 0 3.4-1.1 11 4.1 3.2-.9 6.6-1.3 10-1.4 3.4 0 6.8.5 10 1.4 7.6-5.2 11-4.1 11-4.1 2.2 5.5.8 9.6.4 10.6 2.6 2.8 4.1 6.4 4.1 10.8 0 15.4-9.4 18.8-18.3 19.8 1.4 1.2 2.7 3.7 2.7 7.4 0 5.3-.05 9.6-.05 10.9 0 1 .7 2.3 2.7 1.9C78.5 82.8 90 67.7 90 50 90 27.9 72.1 10 50 10z"
      fill="#C9D1D9"
    />
  </svg>
);

export const FigmaIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1E1E2E" />
    <rect x="31" y="12" width="19" height="19" rx="9.5" fill="#F24E1E" />
    <rect x="50" y="12" width="19" height="19" rx="9.5" fill="#FF7262" />
    <rect x="31" y="31" width="19" height="19" fill="#A259FF" />
    <rect x="31" y="50" width="19" height="19" rx="9.5" fill="#0ACF83" />
    <circle cx="59.5" cy="50.5" r="9.5" fill="#1ABCFE" />
  </svg>
);

export const NodeIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1a2a1a" />
    <path
      d="M50 15L18 33v34l32 18 32-18V33L50 15z"
      stroke="#83CD29"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M50 15v52M18 33l32 18 32-18"
      stroke="#83CD29"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="38" y="56" fill="#83CD29" fontSize="14" fontWeight="bold" fontFamily="monospace">
      JS
    </text>
  </svg>
);

export const ZustandIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1C1C2E" />
    <circle cx="50" cy="42" r="16" stroke="#FF6B35" strokeWidth="3.5" />
    <circle cx="50" cy="42" r="7" fill="#FF6B35" />
    <path d="M30 65 Q50 55 70 65 Q50 80 30 65z" fill="#FF6B35" opacity="0.7" />
    <circle cx="26" cy="50" r="5" fill="#FF6B35" opacity="0.5" />
    <circle cx="74" cy="50" r="5" fill="#FF6B35" opacity="0.5" />
  </svg>
);

export const TanstackIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1a1a2e" />
    <path d="M20 50 Q35 25 50 50 Q65 75 80 50" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M20 35 Q35 10 50 35 Q65 60 80 35" stroke="#F97316" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M20 65 Q35 40 50 65 Q65 90 80 65" stroke="#EAB308" strokeWidth="5" strokeLinecap="round" fill="none" />
  </svg>
);

/* ── IDE / Editor Icons ── */

export const VSCodeIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1e1e2e" />
    <path d="M72 18L42 48 25 34 18 40 38 57 18 74 25 80 42 66 72 96 82 90V24L72 18z" fill="#007ACC" />
    <path d="M72 18L42 48 72 76V57L52 50 72 43V18z" fill="#1BA1E2" opacity="0.6" />
    <path d="M18 40L38 57 18 74 25 80 42 66 42 48 25 34z" fill="#0065A9" opacity="0.7" />
  </svg>
);

export const WebStormIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1C1C1E" />
    <rect x="12" y="12" width="76" height="76" rx="6" fill="url(#ws-grad)" />
    <rect x="18" y="72" width="30" height="6" rx="2" fill="black" opacity="0.7" />
    <path d="M22 28h15M22 40h25M22 52h18" stroke="white" strokeWidth="5" strokeLinecap="round" />
    <path d="M55 55 Q62 42 70 55 Q78 42 85 55" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
    <defs>
      <linearGradient id="ws-grad" x1="12" y1="12" x2="88" y2="88" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00BCD4" />
        <stop offset="1" stopColor="#1565C0" />
      </linearGradient>
    </defs>
  </svg>
);

export const IntelliJIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1C1C1E" />
    <rect x="12" y="12" width="76" height="76" rx="6" fill="url(#ij-grad)" />
    <rect x="18" y="72" width="30" height="6" rx="2" fill="black" opacity="0.7" />
    <path d="M22 28h12M22 40h22M22 52h16" stroke="white" strokeWidth="5" strokeLinecap="round" />
    <path d="M52 30 L68 50 L52 70" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <defs>
      <linearGradient id="ij-grad" x1="12" y1="12" x2="88" y2="88" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5370" />
        <stop offset="0.5" stopColor="#E91E8C" />
        <stop offset="1" stopColor="#C000FA" />
      </linearGradient>
    </defs>
  </svg>
);

export const AndroidStudioIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1C2B1C" />
    {/* Android head */}
    <ellipse cx="50" cy="42" rx="22" ry="20" fill="#3DDC84" />
    <circle cx="42" cy="40" r="3" fill="#1C2B1C" />
    <circle cx="58" cy="40" r="3" fill="#1C2B1C" />
    {/* Antennae */}
    <line x1="40" y1="23" x2="34" y2="15" stroke="#3DDC84" strokeWidth="3" strokeLinecap="round" />
    <line x1="60" y1="23" x2="66" y2="15" stroke="#3DDC84" strokeWidth="3" strokeLinecap="round" />
    {/* Body */}
    <rect x="28" y="58" width="44" height="26" rx="8" fill="#3DDC84" />
    <rect x="18" y="58" width="10" height="20" rx="5" fill="#3DDC84" />
    <rect x="72" y="58" width="10" height="20" rx="5" fill="#3DDC84" />
    {/* Legs */}
    <rect x="34" y="80" width="10" height="12" rx="5" fill="#3DDC84" />
    <rect x="56" y="80" width="10" height="12" rx="5" fill="#3DDC84" />
  </svg>
);

export const EclipseIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1a1a2e" />
    <circle cx="50" cy="50" r="32" stroke="#F7941E" strokeWidth="4" fill="none" />
    <ellipse cx="44" cy="50" rx="22" ry="32" fill="#1a1a2e" stroke="#F7941E" strokeWidth="3" />
    <circle cx="50" cy="50" r="10" fill="#F7941E" opacity="0.3" />
    <circle cx="50" cy="50" r="5" fill="#F7941E" />
  </svg>
);

/* ── Communication Tools ── */

export const SlackIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1a1a2e" />
    {/* Slack hash/logo simplified */}
    <rect x="20" y="38" width="24" height="10" rx="5" fill="#E01E5A" />
    <rect x="20" y="28" width="10" height="24" rx="5" fill="#E01E5A" />
    <circle cx="20" cy="62" r="7" fill="#E01E5A" />
    <rect x="56" y="38" width="24" height="10" rx="5" fill="#36C5F0" />
    <rect x="70" y="28" width="10" height="24" rx="5" fill="#36C5F0" />
    <circle cx="90" cy="48" r="7" fill="#36C5F0" />
    <rect x="44" y="52" width="10" height="24" rx="5" fill="#2EB67D" />
    <rect x="34" y="66" width="24" height="10" rx="5" fill="#2EB67D" />
    <circle cx="68" cy="76" r="7" fill="#2EB67D" />
    <rect x="44" y="24" width="10" height="24" rx="5" fill="#ECB22E" />
    <rect x="34" y="24" width="24" height="10" rx="5" fill="#ECB22E" />
    <circle cx="34" cy="24" r="7" fill="#ECB22E" />
  </svg>
);

export const NotionIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#191919" />
    <path
      d="M28 22h30l16 16v40c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4V26c0-2.2 1.8-4 4-4z"
      fill="white"
      stroke="#333"
      strokeWidth="1"
    />
    <path d="M58 22v12a2 2 0 002 2h12" stroke="#ccc" strokeWidth="1.5" fill="none" />
    <rect x="32" y="44" width="36" height="3" rx="1.5" fill="#999" />
    <rect x="32" y="52" width="28" height="3" rx="1.5" fill="#bbb" />
    <rect x="32" y="60" width="32" height="3" rx="1.5" fill="#aaa" />
    <rect x="32" y="68" width="20" height="3" rx="1.5" fill="#bbb" />
  </svg>
);

export const DiscordIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1a1a2e" />
    <path
      d="M38 30c-3 0-10 2-16 8C16 44 14 56 14 56s4 6 10 8c2-2 4-5 4-5s-6-2-8-5c2 1 4 2 7 3 5 2 11 2 13 2s8 0 13-2c3-1 5-2 7-3-2 3-8 5-8 5s2 3 4 5c6-2 10-8 10-8s-2-12-8-18c-6-6-13-8-16-8l-2 3c-2 0-4-1-6-1-2 0-4 1-6 1l-2-3z"
      fill="#5865F2"
    />
    <circle cx="39" cy="51" r="6" fill="#1a1a2e" />
    <circle cx="61" cy="51" r="6" fill="#1a1a2e" />
    <circle cx="39" cy="51" r="4" fill="#5865F2" opacity="0.7" />
    <circle cx="61" cy="51" r="4" fill="#5865F2" opacity="0.7" />
  </svg>
);

/* ── AI Tools ── */

export const ClaudeIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#1a1512" />
    {/* Claude logo — stylized C / coral diamond */}
    <path
      d="M50 18 L68 34 L68 66 L50 82 L32 66 L32 34 Z"
      fill="none"
      stroke="#D97757"
      strokeWidth="3.5"
    />
    <path d="M50 18 L50 82" stroke="#D97757" strokeWidth="2" opacity="0.3" />
    <path d="M32 34 L68 66" stroke="#D97757" strokeWidth="2" opacity="0.3" />
    <path d="M68 34 L32 66" stroke="#D97757" strokeWidth="2" opacity="0.3" />
    <circle cx="50" cy="50" r="10" fill="#D97757" opacity="0.9" />
    <circle cx="50" cy="50" r="5" fill="#1a1512" />
  </svg>
);

export const CodexIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="8" fill="#0d1117" />
    {/* OpenAI-style minimal logo */}
    <circle cx="50" cy="50" r="28" stroke="white" strokeWidth="3" fill="none" />
    <path
      d="M50 22 L61 38 L78 38 L65 50 L70 67 L50 58 L30 67 L35 50 L22 38 L39 38 Z"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="50" r="6" fill="white" opacity="0.9" />
  </svg>
);
