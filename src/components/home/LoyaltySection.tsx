"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LoyaltySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">10 lavages achetés 11ème offert</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Profitez de notre programme de fidélité pour économiser sur vos nettoyages.
            Demandez votre carte de fidélité lors de votre prochaine visite.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-10">
          <Image
            src="https://ext.same-assets.com/860861705/323637573.png"
            alt="Carte de fidélité Atelier Auto"
            width={300}
            height={180}
            className="rounded-lg shadow-md"
          />
          <Image
            src="https://ext.same-assets.com/1714010545/3441685867.png"
            alt="Carte de fidélité Atelier Auto"
            width={300}
            height={180}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="text-center">
          <Link href="/prendre-rendez-vous">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8">
              Prendre rendez-vous
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
