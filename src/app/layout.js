import "./globals.css";

export const metadata = {
  title: "Douc Lista de Asistencia",
  description: "lista semanal para la piscina",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="cupcake" lang="es" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
