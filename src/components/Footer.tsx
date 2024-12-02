import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center">
          <Image
            src="/img/logo-dark.svg" // Update with the actual path to your logo image
            alt="Keensight Analytics Logo"
            width={250} // Adjust the width as needed
            height={200} // Adjust the height as needed
            className="object-contain transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </footer>
  );
}
