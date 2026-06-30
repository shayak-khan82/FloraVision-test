// import { Poppins } from "next/font/google";
// import "./globals.css";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });

// export const metadata = {
//   title: "FloraVision",
//   description: "Modern Plant Store",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={poppins.className}>
//         {children}
//       </body>
//     </html>
//   );
// }

import "./globals.css";
export const metadata = {
  title: "FloraVision - Earth's Exhale | Premium Indoor Plants & Greenery",
  description: "Discover beautiful, hand-crafted indoor plants, air-purifying O2 plants, and decorative greenery for your home and workspace.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}