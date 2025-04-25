import { Inter, Lusitana, Encode_Sans } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const encodeSans = Encode_Sans({
  weight: ["400", "700"], // add or change weights as needed
  subsets: ["latin"],
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
