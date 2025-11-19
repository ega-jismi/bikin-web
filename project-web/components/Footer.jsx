export default function Footer(){
  return (
    <footer className="mt-12 border-t bg-transparent">
      <div className="container py-6 text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Gramedia Pro — Demo site. All rights reserved.
      </div>
    </footer>
  )
}
