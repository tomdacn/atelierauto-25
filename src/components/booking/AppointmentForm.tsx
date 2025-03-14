"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { VehicleSelector } from "./VehicleSelector";
import { PackageSelector } from "./PackageSelector";
import { DateTimeSelector } from "./DateTimeSelector";
import { formatPrice } from "@/lib/utils";

export function AppointmentForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [additionalOptions, setAdditionalOptions] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialInstructions: "",
  });

  const totalSteps = 5;

  // Additional options with prices
  const options = [
    { id: "lustrage", name: "Lustrage extérieur", price: 80, duration: 60 },
    { id: "phares", name: "Rénovation des optiques de phares", price: 30, duration: 20 },
    { id: "traitement-cuir", name: "Traitement d'intérieur cuir & siège", price: 10, duration: 15 },
    { id: "shampooing", name: "Shampooing des sièges uniquement", price: 20, duration: 10 },
    { id: "poils-animaux", name: "Traitement de poils d'animaux", price: 10, duration: 15 },
    { id: "tres-sale", name: "Voiture très sale", price: 20, duration: 25 },
  ];

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle additional option selection
  const toggleOption = (optionId: string) => {
    setAdditionalOptions((prev) => {
      if (prev.includes(optionId)) {
        return prev.filter((id) => id !== optionId);
      } else {
        return [...prev, optionId];
      }
    });
  };

  // Calculate total price (simplified for demo)
  const calculatePrice = () => {
    let total = 0;

    // Add package price (simplified)
    if (selectedPackage === "interieur-standard") total += 20;
    if (selectedPackage === "interieur-plus") total += 40;
    if (selectedPackage === "interieur-premium") total += 80;

    // Add options
    additionalOptions.forEach(optionId => {
      const option = options.find(opt => opt.id === optionId);
      if (option) total += option.price;
    });

    return total;
  };

  // Calculate total duration (simplified for demo)
  const calculateDuration = () => {
    let totalMinutes = 0;

    // Add package duration (simplified)
    if (selectedPackage) {
      if (selectedPackage.includes("standard")) totalMinutes += 60;
      else totalMinutes += 90;
    }

    // Add options duration
    additionalOptions.forEach(optionId => {
      const option = options.find(opt => opt.id === optionId);
      if (option) totalMinutes += option.duration;
    });

    return totalMinutes;
  };

  // Move to next step if validation passes
  const nextStep = () => {
    if (currentStep === 1 && !selectedVehicle) {
      alert("Veuillez sélectionner un type de véhicule");
      return;
    }
    if (currentStep === 2 && !selectedPackage) {
      alert("Veuillez sélectionner un forfait");
      return;
    }
    if (currentStep === 4 && (!selectedDate || !selectedTime)) {
      alert("Veuillez sélectionner une date et une heure");
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  // Move to previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // Here you would typically send data to a server
    alert("Votre rendez-vous a été pris en compte. Vous recevrez une confirmation par email.");

    // Reset form after submission
    setCurrentStep(1);
    setSelectedVehicle(null);
    setSelectedPackage(null);
    setSelectedDate(undefined);
    setSelectedTime(null);
    setAdditionalOptions([]);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      specialInstructions: "",
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
      {/* Progress indicator */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-lg">Étape {currentStep} sur {totalSteps}</h3>
          <span className="text-sm text-gray-500">
            {currentStep === 1 && "Type de véhicule"}
            {currentStep === 2 && "Forfait"}
            {currentStep === 3 && "Options"}
            {currentStep === 4 && "Date et Heure"}
            {currentStep === 5 && "Confirmation"}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {/* Step 1: Vehicle Selection */}
        {currentStep === 1 && (
          <VehicleSelector
            selectedVehicle={selectedVehicle}
            onSelectVehicle={setSelectedVehicle}
          />
        )}

        {/* Step 2: Package Selection */}
        {currentStep === 2 && selectedVehicle && (
          <PackageSelector
            vehicleType={selectedVehicle}
            selectedPackage={selectedPackage}
            onSelectPackage={setSelectedPackage}
          />
        )}

        {/* Step 3: Additional Options */}
        {currentStep === 3 && (
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Options (les prix peuvent varier en fonction du véhicule)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {options.map((option) => (
                <div key={option.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id={option.id}
                      checked={additionalOptions.includes(option.id)}
                      onCheckedChange={() => toggleOption(option.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <label
                        htmlFor={option.id}
                        className="text-base font-medium cursor-pointer block"
                      >
                        {option.name}
                      </label>
                      <p className="text-gray-600 text-sm mt-1">{option.price} €</p>
                      <div className="flex items-center text-gray-500 text-xs mt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1"
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
                        <span>{option.duration} minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Date and Time Selection */}
        {currentStep === 4 && (
          <DateTimeSelector
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onSelectDate={setSelectedDate}
            onSelectTime={setSelectedTime}
          />
        )}

        {/* Step 5: Customer Information and Summary */}
        {currentStep === 5 && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Sommaire & Confirmation
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-lg mb-4">Vos informations</h4>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        Prénom *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700 mb-1">
                      Instructions spéciales
                    </label>
                    <Textarea
                      id="specialInstructions"
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    Vos données sont sécurisées. Aucun partage ni utilisation à des fins publicitaires ou de spam.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-4">Récapitulatif de la réservation</h4>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type de véhicule</span>
                      <span className="font-medium">{selectedVehicle || "Non sélectionné"}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Forfait</span>
                      <span className="font-medium">{selectedPackage || "Non sélectionné"}</span>
                    </div>

                    {additionalOptions.length > 0 && (
                      <div>
                        <span className="text-gray-600 block mb-2">Options supplémentaires</span>
                        <ul className="list-disc list-inside pl-2 space-y-1 text-sm">
                          {additionalOptions.map(optId => {
                            const option = options.find(o => o.id === optId);
                            return option ? (
                              <li key={optId} className="text-gray-700">
                                {option.name} ({formatPrice(option.price)})
                              </li>
                            ) : null;
                          })}
                        </ul>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-gray-600">Date</span>
                      <span className="font-medium">
                        {selectedDate
                          ? selectedDate.toLocaleDateString("fr-FR")
                          : "Non sélectionnée"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Heure</span>
                      <span className="font-medium">{selectedTime || "Non sélectionnée"}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée estimée</span>
                      <span className="font-medium">{calculateDuration()} minutes</span>
                    </div>

                    <div className="flex justify-between pt-3 border-t border-gray-200 mt-3">
                      <span className="text-gray-800 font-medium">Prix Total</span>
                      <span className="text-primary font-bold text-xl">
                        {formatPrice(calculatePrice())}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Confirmer le rendez-vous
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <Button
              type="button"
              onClick={prevStep}
              variant="outline"
            >
              Retour
            </Button>
          )}

          {currentStep < totalSteps && (
            <Button
              type="button"
              onClick={nextStep}
              className="ml-auto bg-primary hover:bg-primary/90 text-white"
            >
              Continuer
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
