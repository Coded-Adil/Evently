import "../styles/globals.css";

export const metadata = {
  title: "Evently",
  description: "Event management made easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
