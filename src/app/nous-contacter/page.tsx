import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Nous contacter - Atelier Auto",
  description: "Contactez Atelier Auto pour toutes vos questions concernant nos services de nettoyage automobile.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Nous contacter
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Coordonnées</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Adresse</h3>
                      <p className="text-gray-600">60 Rue Pierre Marti, 25460 Étupes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Téléphone</h3>
                      <p className="text-gray-600">03 81 XX XX XX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-600">contact@atelierauto-25.fr</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
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
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Horaires d'ouverture</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>Lundi - Vendredi: 9h00 - 18h00</li>
                        <li>Samedi: 9h00 - 18h00</li>
                        <li>Dimanche: Fermé</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.433759342162!2d6.879!3d47.523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMxJzIyLjgiTiA2wrA1MiczMS4yIkU!5e0!3m2!1sfr!2sfr!4v1615564951666!5m2!1sfr!2sfr"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Formulaire de contact</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
