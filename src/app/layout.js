import styles from "@/styles/index.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>cricflix | Home of premium quality highlights</title>
      <body>{children}</body>
    </html>
  );
}
