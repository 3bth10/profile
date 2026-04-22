// components/footer.tsx
export default function Footer() {
  return (
    <footer className="w-full border-t border-cyan-500/40 mt-10 py-6 flex flex-col items-center gap-3 text-gray-400 text-sm">
      <div className="flex gap-6">
        <a href="https://github.com/3bth10" className="hover:text-cyan-400 transition">GitHub</a>
        <a href="your-linkedin-url" className="hover:text-cyan-400 transition">LinkedIn</a>
        <a href="bnalbkry@email.com" className="hover:text-cyan-400 transition">Email</a>
      </div>
      <p className="text-gray-600">© 2026 Mussa Abo Bakrien · Backend Developer</p>
    </footer>
  )
}