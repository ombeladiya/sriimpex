import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SRI Impex | Quality is our Pride",
  description: "Leading exporter of high-quality onion's products, garlic's products, tomatoes, cumin, coconuts, and peanuts from India. Committed to quality, sustainability, and customer satisfaction. Contact us for premium agricultural products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
