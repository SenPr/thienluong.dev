"use client";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
];

const linkItems = [
  { label: "GitHub", href: "https://github.com/senpr"},
  { label: "LinkedIn", href: "https://linkedin.com/in/thiennluong"}
]

export function ProfileSidebar() {
  return (
    <header className="relative flex min-h-screen flex-col lg:justify-between overflow-hidden bg-background-dark px-6 py-4 sm:px-10 lg:sticky lg:top-0 lg:h-screen lg:min-h-0 lg:px-12 lg:py-8 xl:px-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div className="relative">
        <div className="mt-20 max-w-md lg:mt-24">
          <h1 className="text-4xl text-shadow-black text-shadow-[0_2px_8px] font-semibold leading-[0.98] text-text-primary sm:text-5xl xl:text-6xl">
            Thien Luong
          </h1>
          <p className="mt-2 text-accent-primary text-xl">Aspiring Software Engineer</p>
          <p className="mt-7 max-w-sm text-base leading-7 text-text-muted">
            I build things!
          </p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex border border-accent-primary/50 px-4 py-3 text-sm text-accent-primary transition-colors hover:bg-accent-primary hover:text-background-dark">
            View / download resume <span aria-hidden="true" className="ml-3">↓</span>
          </a>
        </div>
        <nav aria-label="Page sections" className="relative mt-16 hidden lg:block">
          <div className="space-y-3 border-l border-text-primary/15 pl-5">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-sm text-text-muted transition-colors hover:text-accent-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {linkItems.map((item) => (
          <li className="mr-5 shrink-0" key={item.label}>
            <a className="mr-5 shrink-0" target="_blank" href={item.href} aria-label={item.label} title={item.label}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}