"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const beforeAfterItems = [
  {
    id: "nettoyage-sec",
    title: "Nettoyage à sec",
    description: "Shampoing, lavage et nettoyage du siège pour garantir un résultat à vos attentes.",
    beforeImage: "https://ext.same-assets.com/1367991669/4076793946.jpeg",
    afterImage: "https://ext.same-assets.com/1367991669/4076793946.jpeg",
  },
  {
    id: "suppression-taches",
    title: "Suppression des tâches",
    description: "Élimination complète des taches sur les sièges",
    beforeImage: "https://ext.same-assets.com/3815833663/223894838.jpeg",
    afterImage: "https://ext.same-assets.com/3815833663/223894838.jpeg",
  },
  {
    id: "nettoyage-coffre",
    title: "Nettoyage du coffre",
    description: "Aspiration complète du coffre",
    beforeImage: "https://ext.same-assets.com/1974197945/1219297245.jpeg",
    afterImage: "https://ext.same-assets.com/1974197945/1219297245.jpeg",
  },
  {
    id: "lavage-habitacle",
    title: "Lavage de l'habitacle",
    description: "Vous retrouverez votre véhicule comme neuf",
    beforeImage: "https://ext.same-assets.com/2551923659/3176992200.jpeg",
    afterImage: "https://ext.same-assets.com/2551923659/3176992200.jpeg",
  },
];

export function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState(beforeAfterItems[0].id);
  const [showBefore, setShowBefore] = useState(true);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h6 className="text-primary font-medium mb-3">Résultats Garantis</h6>
          <h2 className="section-title">
            Des résultats impressionnants pour votre véhicule
          </h2>
        </div>

        <Tabs defaultValue={beforeAfterItems[0].id} className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {beforeAfterItems.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className={cn(
                  "text-sm sm:text-base py-3 px-2 text-center",
                  activeTab === item.id ? "bg-primary text-white" : ""
                )}
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {beforeAfterItems.map((item) => (
            <TabsContent key={item.id} value={item.id} className="mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 relative">
                  <div className="relative w-full h-80 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 text-white font-bold text-2xl z-10">
                      {showBefore ? "AVANT" : "APRÈS"}
                    </div>
                    <div className="relative w-full h-full">
                      <Image
                        src={showBefore ? item.beforeImage : item.afterImage}
                        alt={`${showBefore ? "Avant" : "Après"} ${item.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => setShowBefore(true)}
                      className={cn(
                        "px-4 py-2 font-medium rounded-l-md transition-colors",
                        showBefore
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-700"
                      )}
                    >
                      Avant
                    </button>
                    <button
                      onClick={() => setShowBefore(false)}
                      className={cn(
                        "px-4 py-2 font-medium rounded-r-md transition-colors",
                        !showBefore
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-700"
                      )}
                    >
                      Après
                    </button>
                  </div>
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                    <div className="flex flex-col">
                      <h6 className="font-medium text-primary mb-2">Nettoyants Naturels</h6>
                      <p className="text-gray-600 text-sm">Utilisation de produits naturels et sans dégradation de vos sièges.</p>
                    </div>

                    <div className="flex flex-col">
                      <h6 className="font-medium text-primary mb-2">Propreté totale</h6>
                      <p className="text-gray-600 text-sm">Nous vous assurons des résultats qui dépassent toutes vos attentes en matière de propreté totale pour votre voiture.</p>
                    </div>

                    <div className="flex flex-col">
                      <h6 className="font-medium text-primary mb-2">Aromatisation</h6>
                      <p className="text-gray-600 text-sm">Nous prenons soin de l'aromatisation de vos sièges en éliminant les mauvaises odeurs et en diffusant un parfum frais et agréable.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
