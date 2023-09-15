import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemProps = {
    label: string
    href: string
}

export const NavItem = ({label, href}: NavItemProps) => {
    const pathname = usePathname();  // hooks do next para pegar o pathname da página atual

    const isActive = pathname === href;

    return (
        <Link href={href} className={cn(
            "text-gray-400 flex items-center grap-2 font-medium font-mono",
            isActive && "text-gray-50"
        )}>
            <span className="text-emerald-400">#</span>
            {label}
        </Link>
    )
}