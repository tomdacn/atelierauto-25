import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppointmentForm } from "@/components/booking/AppointmentForm";

export const metadata = {
  title: "Prendre rendez-vous - Atelier Auto",
  description: "Réservez votre rendez-vous pour un nettoyage professionnel de votre véhicule chez Atelier Auto.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Prendre rendez-vous
            </h1>
            <div className="max-w-5xl mx-auto">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
