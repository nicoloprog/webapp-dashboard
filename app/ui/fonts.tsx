import { Lusitana } from "next/font/google";

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const fonts = [lusitana.className].join(" ");
