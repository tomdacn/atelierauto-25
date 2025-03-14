"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image
              src="https://ext.same-assets.com/1264940687/1769838806.jpeg"
              alt="Atelier Auto Nettoyage"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="md:w-1/2">
            <h6 className="text-primary font-medium mb-3">Nettoyage Moderne</h6>
            <h2 className="section-title">
              Atelier Auto, le nettoyage professionnel de voiture
            </h2>
            <p className="text-gray-600 mb-6">
              Chez Atelier Auto, nous savons que votre voiture est bien plus qu'un simple moyen de transport.
              C'est un investissement qui mérite d'être entretenu avec soin. Nous sommes là pour vous aider à
              garder votre voiture dans son meilleur état possible. Notre équipe de professionnels de nettoyage
              de voiture utilise des produits de qualité supérieure et des techniques de nettoyage de pointe pour
              garantir que votre voiture est toujours impeccablement propre, à l'intérieur comme à l'extérieur.
              Profitez d'une voiture étincelante et comme neuve. Faites confiance à Atelier Auto pour tous vos
              besoins de nettoyage de voiture !
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col">
                <h6 className="font-medium text-primary mb-2">Lavage sans contact</h6>
                <p className="text-gray-600 text-sm">Nous nettoyons votre voiture avec soin.</p>
              </div>

              <div className="flex flex-col">
                <h6 className="font-medium text-primary mb-2">Matériel de sécurité</h6>
                <p className="text-gray-600 text-sm">Atelier Auto garantit l'utilisation de matériel de nettoyage ou produit qui ne dégrade pas le véhicule.</p>
              </div>

              <div className="flex flex-col">
                <h6 className="font-medium text-primary mb-2">Équipement moderne</h6>
                <p className="text-gray-600 text-sm">Utilisation de matériel à la pointe de la technique pour garantir un résultat époustouflant.</p>
              </div>

              <div className="flex flex-col">
                <h6 className="font-medium text-primary mb-2">Nettoyage approfondi</h6>
                <p className="text-gray-600 text-sm">Nous appliquons un lavage approfondi dans les parties difficiles d'accès (Bas de siège, habitacle etc...).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
