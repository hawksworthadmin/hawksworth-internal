'use client'
import localFont from "next/font/local";
import '../../public/template/css/bootstrap.min.css'
import '../../public/template/css/style.min.css'
import '../../public/template/css/responsive.css'
import "./globals.css";
import DefaultProviders from "@/components/DefaultProviders";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Hawksworth",
//   description: "Hawksworth Internal",
// };

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className="select-none">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ overflowX: 'hidden' }}
      >
        <DefaultProviders>
          {children}
        </DefaultProviders>
        <div>
          <Script
            src="/template/vendor/jquery.min.js"
          />
          {/* <Script
            src="/template/vendor/bootstrap/js/bootstrap.bundle.min.js"
          /> */}

          
          <Script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossOrigin="anonymous" />
          {/* <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossOrigin="anonymous"
          /> */}


          {/* <Script
            src="/template/vendor/wow/wow.min.js"
          />
          <Script
            src="/template/vendor/slick/slick.min.js"
          />
          <Script
            src="/template/vendor/fancybox/dist/jquery.fancybox.min.js"
          />
          <Script
            src="/template/vendor/jquery.lazy.min.js"
          />
          <Script
            src="/template/vendor/jquery.counterup.min.js"
          />
          <Script
            src="/template/vendor/jquery.waypoints.min.js"
          />
          <Script
            src="/template/vendor/validator.js"
          />
          <Script
            src="/template/js/theme.js"
          /> */}
         

         
          {/* <Script
            src="/template/vendor/isotope.pkgd.min.js"
          /> */}
          
         
         
        </div>
      </body>
    </html>
  );
}
