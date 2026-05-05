const paths = {
  book: <path d="M5 4h12a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Zm0 0H4a2 2 0 0 0-2 2v11a3 3 0 0 0 3 3h3M9 8h7M9 12h6" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  cup: <path d="M7 4h10v3a5 5 0 0 1-10 0V4Zm10 2h3a3 3 0 0 1-3 3M7 6H4a3 3 0 0 0 3 3m3 8h4m-5 4h6" />,
  flame: <path d="M12 22a7 7 0 0 0 7-7c0-4-3-6.5-4.5-8.5-.4 2.5-1.7 4-3.2 5.1C9.9 9.8 9.6 7.6 10 5c-2.5 2-5 5-5 10a7 7 0 0 0 7 7Z" />,
  logout: <path d="M10 17l5-5-5-5M15 12H3M11 21h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7" />,
  rank: <path d="M8 21V10m4 11V3m4 18v-7M5 21h14" />,
  setting: <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8-3.5 2-1.5-2-3.5-2.4 1a8.2 8.2 0 0 0-1.6-.9L15.7 4h-4l-.3 2.6c-.6.2-1.1.5-1.6.9L7.4 6.5l-2 3.5 2 1.5a7.7 7.7 0 0 0 0 1.9l-2 1.5 2 3.5 2.4-1c.5.4 1 .7 1.6.9l.3 2.6h4l.3-2.6c.6-.2 1.1-.5 1.6-.9l2.4 1 2-3.5-2-1.5c.1-.6.1-1.3 0-1.9Z" />,
  spark: <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Zm6 12 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />,
  star: <path d="m12 3 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.5l-5.7 3 1.1-6.3-4.6-4.5 6.4-.9L12 3Z" />,
  user: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />,
};

export default function Icon({ name, className = '', ...props }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.book}
    </svg>
  );
}
