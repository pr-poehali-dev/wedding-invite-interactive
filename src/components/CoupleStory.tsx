import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import PhotoGallery from "@/components/PhotoGallery";

const CoupleStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-4xl text-gray-800 mb-4">
            Наша история
          </h2>
          <div className="w-16 h-px bg-purple-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white">
            <CardHeader className="text-center pb-4">
              <Icon
                name="Heart"
                className="w-8 h-8 text-purple-400 mx-auto mb-2"
              />
              <CardTitle className="font-cormorant text-2xl text-gray-800">
                Первая встреча
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Мы познакомились три года назад в кофейне на Арбате. Михаил
                случайно опрокинул свой капучино, и Анна помогла ему убраться. С
                тех пор мы неразлучны.
              </p>
              <div className="text-purple-500 font-medium">Сентябрь 2021</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-peach-50 to-white">
            <CardHeader className="text-center pb-4">
              <Icon
                name="Gem"
                className="w-8 h-8 text-purple-400 mx-auto mb-2"
              />
              <CardTitle className="font-cormorant text-2xl text-gray-800">
                Предложение
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Прошлой весной, во время прогулки по Патриарших прудам, Михаил
                встал на одно колено и произнес те самые слова. Анна сказала
                "Да!" со слезами счастья на глазах.
              </p>
              <div className="text-purple-500 font-medium">Май 2024</div>
            </CardContent>
          </Card>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="font-cormorant text-3xl text-gray-800 mb-4">
              Наши моменты
            </h3>
            <div className="w-12 h-px bg-purple-300 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Поделитесь с нами вашими любимыми фотографиями
            </p>
          </div>
          <PhotoGallery />
        </div>

        <div className="mt-12 text-center">
          <div className="bg-purple-50/50 rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed italic">
              "Теперь мы готовы начать новую главу нашей жизни вместе, и нам
              очень важно, чтобы самые дорогие нам люди были рядом в этот
              особенный день."
            </p>
            <div className="mt-4 text-purple-600 font-cormorant text-xl">
              — Анна и Михаил
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleStory;
