import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<div className="bg-black text-white text-2xl flex justify-between pl-10 py-3 font-serif">
			<div className="hover:bg-white hover:text-black">TODO.</div>
			<div className="flex gap-28 pr-7">
				<Link href={"/"} className="hover:bg-white hover:text-black">
					HOME
				</Link>
				<Link href={"/about"} className="hover:bg-white hover:text-black">
					ABOUT
				</Link>
				<Link href={"/login"} className="hover:bg-white hover:text-black">
					LOGIN
				</Link>
			</div>
		</div>
	);
};

export default Header;
