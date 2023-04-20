import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata = {
	title: "ShowRite from Alltech",
	description: "An App for Show Anaimals",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
        <Navbar />
        {children}
      </body>
		</html>
	);
}
