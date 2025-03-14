"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: "nettoyage-interieur",
    title: "Nettoyage intérieur",
    duration: "30 min",
    features: [
      "Aspiration complète de l'habitacle et du coffre",
      "Nettoyage des tapis",
      "Dégraissage des plastiques de l'habitacle",
      "Nettoyage des vitres",
      "Shampoing des moquettes coffres",
    ],
  },
  {
    id: "lavage-sieges",
    title: "Lavage des sièges",
    duration: "30 min",
    features: [
      "Nettoyage complet des tissus",
      "Élimination des taches tenaces",
      "Shampoing spécial pour textiles",
      "Séchage rapide",
      "Aromatisation",
    ],
  },
  {
    id: "nettoyage-exterieur",
    title: "Nettoyage extérieur",
    duration: "30 min",
    features: [
      "Lavage de la carrosserie",
      "Nettoyage des jantes",
      "Traitement des vitres",
      "Polissage de la carrosserie",
      "Protection hydrophobe",
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 dark-section">
      <div className="container-custom">
        <h6 className="text-primary font-medium mb-3 text-center">Nos Services</h6>
        <h2 className="section-title text-center text-white mb-12">
          Un véhicule propre à vos attentes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-white rounded-lg overflow-hidden flex flex-col">
              <CardHeader className="bg-primary/5 pb-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  {service.title}
                </CardTitle>
                <div className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {service.duration}
                </div>
              </CardHeader>

              <CardContent className="flex-grow pt-6">
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4 pb-6">
                <Link href="/prendre-rendez-vous" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Prendre Rendez-vous
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
