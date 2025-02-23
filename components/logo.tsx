import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
        YN
      </div>
      <span className="font-semibold">Your Name</span>
    </Link>
  )
}

