"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, subscribe: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          subscribe: false,
        });
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      {submitSuccess ? (
        <div className="text-center py-8">
          <div className="bg-green-100 text-green-600 p-4 rounded-lg mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Message envoyé!</h3>
            <p>Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet *
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
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
              Téléphone
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Sujet *
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              required
            />
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="subscribe"
              checked={formData.subscribe}
              onCheckedChange={handleCheckboxChange}
            />
            <label
              htmlFor="subscribe"
              className="text-sm text-gray-600 leading-snug cursor-pointer"
            >
              J'accepte de recevoir des informations concernant les services et offres d'Atelier Auto.
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Vos données sont sécurisées. Aucun partage ni utilisation à des fins publicitaires ou de spam.
          </p>
        </form>
      )}
    </div>
  );
}
