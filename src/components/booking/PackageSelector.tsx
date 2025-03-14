"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";

interface Package {
  id: string;
  title: string;
  price: number;
  discountedPrice?: number;
  features: string[];
  duration: number;
}

const packages: Record<string, Package[]> = {
  "berline": [
    {
      id: "interieur-standard",
      title: "Formule Intérieur Standard",
      price: 20,
      features: [
        "Aspiration complète de l'habitacle et du coffre.",
        "Nettoyage des tapis.",
        "Dégraissage des plastiques de l'habitacle.",
        "Nettoyage des vitres",
        "Shampoing des sièges, moquettes, coffres",
        "Dégraissage complet de l'habitacle.",
      ],
      duration: 60,
    },
    {
      id: "interieur-plus",
      title: "Formule Intérieur Plus",
      price: 40,
      features: [
        "Aspiration complète de l'habitacle et du coffre.",
        "Nettoyage des tapis.",
        "Dégraissage des plastiques de l'habitacle.",
        "Nettoyage des vitres",
        "Shampoing des sièges, moquettes, coffres",
        "Dégraissage, dépoussirage, détache et rénovation moquette, coffre.",
        "Dégraissage complet de l'habitacle.",
      ],
      duration: 90,
    },
    {
      id: "interieur-premium",
      title: "Formule Intérieur Premium",
      price: 90,
      discountedPrice: 80,
      features: [
        "Aspiration complète de l'habitacle et du coffre.",
        "Nettoyage des tapis.",
        "Dégraissage des plastiques de l'habitacle.",
        "Shampoing des sièges, moquettes, coffres",
        "Nettoyage des vitres",
        "Dégraissage, dépoussirage, détache et rénovation moquette, coffre.",
        "Dégraissage complet de l'habitacle.",
      ],
      duration: 90,
    },
  ],
  // Add more vehicle packages here
};

// Default to berline packages if vehicle type is not found
const getPackagesForVehicle = (vehicleType: string): Package[] => {
  return packages[vehicleType] || packages["berline"];
};

interface PackageSelectorProps {
  vehicleType: string;
  selectedPackage: string | null;
  onSelectPackage: (packageId: string) => void;
}

export function PackageSelector({
  vehicleType,
  selectedPackage,
  onSelectPackage
}: PackageSelectorProps) {
  const availablePackages = getPackagesForVehicle(vehicleType);

  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Choisir le forfait
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availablePackages.map((pkg) => (
          <Card
            key={pkg.id}
            className={cn(
              "overflow-hidden transition-all hover:shadow-md",
              selectedPackage === pkg.id ? "ring-2 ring-primary" : ""
            )}
          >
            <CardHeader className="bg-primary/5 pb-6">
              <CardTitle className="text-xl font-bold">
                {pkg.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-6">
              <div className="mb-4">
                {pkg.discountedPrice ? (
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">
                      {formatPrice(pkg.discountedPrice)}
                    </span>
                    <span className="text-xl line-through text-gray-400">
                      {formatPrice(pkg.price)}
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(pkg.price)}
                  </span>
                )}
              </div>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, index) => (
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
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-gray-500 text-sm">
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
                <span>{pkg.duration} minutes</span>
              </div>
            </CardContent>

            <CardFooter className="pt-2 pb-6">
              <Button
                className={cn(
                  "w-full",
                  selectedPackage === pkg.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-primary hover:text-white"
                )}
                onClick={() => onSelectPackage(pkg.id)}
              >
                {selectedPackage === pkg.id ? "Sélectionné" : "Choisir ce forfait"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
