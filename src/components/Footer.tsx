"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark-section py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://ext.same-assets.com/711422529/1788618429.png"
              alt="Atelier Auto"
              width={180}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Spécialiste du nettoyage professionnel de voitures
            </p>
            <p className="text-gray-300">
              60 Rue Pierre Marti, 25460 Étupes
            </p>
          </div>

          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Nos services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/prendre-rendez-vous"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Nettoyage intérieur
                </Link>
              </li>
              <li>
                <Link
                  href="/prendre-rendez-vous"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Nettoyage extérieur
                </Link>
              </li>
              <li>
                <Link
                  href="/prendre-rendez-vous"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Formules complètes
                </Link>
              </li>
              <li>
                <Link
                  href="/prendre-rendez-vous"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Options supplémentaires
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Horaires</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Lundi: 9h00 - 18h00</li>
              <li>Mardi: 9h00 - 18h00</li>
              <li>Mercredi: 9h00 - 18h00</li>
              <li>Jeudi: 9h00 - 18h00</li>
              <li>Vendredi: 9h00 - 18h00</li>
              <li>Samedi: 9h00 - 18h00</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>60 Rue Pierre Marti, 25460 Étupes</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>03 81 xx xx xx</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@atelierauto-25.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>© {currentYear} Atelier Auto. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
