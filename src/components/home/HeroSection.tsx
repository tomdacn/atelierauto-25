"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative bg-cover bg-center min-h-[600px] flex items-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://ext.same-assets.com/3958277099/667174435.jpeg')`
    }}>
      <div className="container-custom py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Atelier Auto
          </h1>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
            <p className="text-lg md:text-xl text-white mb-4">
              Attention : à partir du lundi 13 mai, nous vous accueillerons dans nos nouveaux locaux situés au 60 Rue Pierre Marti 25460 Étupes.
            </p>
            <p className="text-lg md:text-xl text-white">
              Nous avons le plaisir de vous informer que nous vous accueillons désormais à notre nouvelle adresse : <strong>60 Rue Pierre Marti, 25460 Étupes</strong>. Nous vous remercions pour votre compréhension et sommes impatients de vous servir dans nos nouveaux locaux.
            </p>
          </div>

          <Link href="/prendre-rendez-vous">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg">
              Prendre rendez-vous
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
