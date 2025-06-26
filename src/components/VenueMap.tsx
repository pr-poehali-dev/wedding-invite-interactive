import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const VenueMap = () => {
  const [showRoute, setShowRoute] = useState(false);

  const venueInfo = {
    name: 'Усадьба "Архангельское"',
    address: "Красногорский район, пос. Архангельское",
    coordinates: "55.7998, 37.2855",
    directions: [
      "От Москвы по Волоколамскому шоссе (А-108)",
      'Поворот направо на указателе "Архангельское"',
      "Далее 3 км до главного входа в усадьбу",
      "Парковка доступна на территории",
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-4xl text-gray-800 mb-4">
            Место проведения
          </h2>
          <div className="w-16 h-px bg-purple-300 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-cormorant text-2xl text-gray-800 flex items-center">
                <Icon name="MapPin" className="w-6 h-6 text-purple-500 mr-2" />
                {venueInfo.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="Home" className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <p className="font-medium text-gray-700">Адрес:</p>
                    <p className="text-gray-600">{venueInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Clock" className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <p className="font-medium text-gray-700">Время:</p>
                    <p className="text-gray-600">Регистрация в 17:00</p>
                    <p className="text-gray-600">Банкет в 18:30</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50/50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Усадьба находится в 25 км от МКАД. Рекомендуем выехать
                  заранее.
                </p>
                <Button
                  onClick={() => setShowRoute(!showRoute)}
                  variant="outline"
                  className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  <Icon name="Route" className="w-4 h-4 mr-2" />
                  {showRoute ? "Скрыть маршрут" : "Показать маршрут"}
                </Button>
              </div>

              {showRoute && (
                <div className="bg-white border border-purple-100 rounded-lg p-4 space-y-3">
                  <h4 className="font-medium text-gray-700 flex items-center">
                    <Icon
                      name="Navigation"
                      className="w-4 h-4 text-purple-500 mr-2"
                    />
                    Как добраться:
                  </h4>
                  <ol className="space-y-2">
                    {venueInfo.directions.map((step, index) => (
                      <li key={index} className="text-sm text-gray-600 flex">
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-purple-100 text-purple-600 rounded-full text-xs font-medium mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-80 bg-gradient-to-br from-purple-100 to-purple-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Icon
                      name="Map"
                      className="w-16 h-16 text-purple-400 mx-auto"
                    />
                    <div>
                      <h3 className="font-cormorant text-xl text-gray-700 mb-2">
                        Интерактивная карта
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Кликните для открытия карты с маршрутом
                      </p>
                      <Button
                        asChild
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <a
                          href={`https://yandex.ru/maps/?text=${encodeURIComponent(venueInfo.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
                          Открыть в Яндекс.Картах
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Icon name="MapPin" className="w-4 h-4 text-purple-500" />
                    <span>25 км от МКАД</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VenueMap;
