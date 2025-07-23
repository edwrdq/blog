"use client";

import NeuralNetworkBackground from '../components/NeuralNetworkBackground';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NeuralNetworkBackground />
      {children}
    </>
  );
}
