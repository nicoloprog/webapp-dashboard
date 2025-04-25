import "@/app/ui/global.css";
import { encodeSans } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${encodeSans.className} antialiased`}>{children}</body>
    </html>
  );
}
