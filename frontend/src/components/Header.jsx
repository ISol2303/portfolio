import { Code2 } from 'lucide-react';

const navigation = ['Skills', 'Projects', 'Contact'];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3 font-semibold text-slate-950">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-white">
            <Code2 size={21} aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">TRAN PHUONG NAM</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
