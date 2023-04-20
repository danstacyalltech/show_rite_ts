"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
	const router = useRouter();

	return (
		<Image
			alt="Alltech Logo"
			className="hidden md:block cursor-pointer"
			height={150}
			width={150}
			src="/images/AlltechLogo.png"
		/>
	);
};

export default Logo;
