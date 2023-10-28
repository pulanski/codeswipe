import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return <Link href="/">
        <div className="relative z-20 flex items-center text-lg font-medium space-x-2">
            <Image src="/logo.png" alt="koalab" width={60} height={60} />
            <span className="font-bold text-transparent bg-gradient-to-r from-[#c25656] to-[#b2971f] text-edge-outline bg-clip-text">CodeSwipe</span>
        </div>
    </Link>
}

export default Logo;
