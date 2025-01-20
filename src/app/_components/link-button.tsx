import type { ButtonHTMLAttributes } from "react"

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export function LinkButton({ children, href, ...props }: LinkButtonProps) {
  return (
    <a
      href={href}
      className="block w-full rounded-lg bg-white px-4 py-2 text-center font-medium text-blue-600 shadow-md transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}

