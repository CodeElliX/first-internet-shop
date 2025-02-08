'use client'

import "./globals.css";
import Header from "../../components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="body_layout">
          <Provider store={store}>
          <Header />
          {children}
          </Provider>
        </body>
    </html>
  );
}
