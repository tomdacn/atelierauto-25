"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const vehicleTypes = [
  { id: "berline", name: "Berline", image: "https://ext.same-assets.com/647526313/2588152964.png" },
  { id: "familiale", name: "Familiale", image: "https://ext.same-assets.com/1305917492/3715059898.png" },
  { id: "pickup", name: "Pickup", image: "https://ext.same-assets.com/662055614/4207426661.png" },
  { id: "minibus", name: "Minibus", image: "https://ext.same-assets.com/3359733412/3162308709.png" },
  { id: "boxer-camion", name: "Boxer/Camion", image: "https://ext.same-assets.com/3916537697/279194435.png" },
];

interface VehicleSelectorProps {
  selectedVehicle: string | null;
  onSelectVehicle: (vehicleId: string) => void;
}

export function VehicleSelector({ selectedVehicle, onSelectVehicle }: VehicleSelectorProps) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Choisir le type de véhicule
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {vehicleTypes.map((vehicle) => (
          <button
            key={vehicle.id}
            onClick={() => onSelectVehicle(vehicle.id)}
            className={cn(
              "flex flex-col items-center p-4 rounded-lg border-2 transition-all",
              selectedVehicle === vehicle.id
                ? "border-primary bg-primary/5"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <div className="mb-3 h-24 w-24 relative">
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="font-medium">{vehicle.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
