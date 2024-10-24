import "./globals.css";
import 'aos/dist/aos.css';


export const metadata = {
  title: "Riko Fernanda S.",
  description: "My Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
