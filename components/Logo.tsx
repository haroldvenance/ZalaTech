import Image from "next/image";
import clsx from "clsx";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <span className={clsx("inline-flex items-center select-none", className)}>
      <Image
        src="/zala.png"
        alt="Zala Tech Logo"
        width={300}
        height={100}
        // Suppression du scale et de l'overflow. 
        // On garde une hauteur de 40px (h-10) sur mobile et 48px (h-12) sur PC.
        className="object-contain w-auto h-10 md:h-12" 
        priority
      />
    </span>
  );
}