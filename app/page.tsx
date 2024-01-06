import { Metadata } from "next";
import BorrowPage from "./borrow-page";
// import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "LX: Cards",
};
// const nuform = localFont({
//   src: [
//     {
//       path: './NuformSans-Regular.otf',
//       weight: '400',
//       style: 'normal',
//     },
//     // {
//     //   path: './NuformSans-Bold.otf',
//     //   weight: '400',
//     //   style: 'bold',
//     // },
//     // {
//     //   path: './NuformSans-Black.otf',
//     //   weight: '700',
//     //   style: 'normal',
//     // },
//     // {
//     //   path: './NuformSans-Semibold.otf',
//     //   weight: '700',
//     //   style: 'semibold',
//     // },
//     // {
//     //   path: './NuformSans-Medium.otf',
//     //   weight: '700',
//     //   style: 'normal',
//     // },
//   ]
// })
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-secondary px-8 justify-between font-nuform">
      <BorrowPage />
    </main>
  );
}
