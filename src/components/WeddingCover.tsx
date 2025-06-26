import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const WeddingCover = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-peach-50 p-4">
      <Card className="max-w-2xl w-full bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardContent className="p-12 text-center">
          <div className="mb-8">
            <div className="inline-block w-20 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-6"></div>
            <h1 className="font-cormorant text-5xl md:text-6xl font-light text-gray-800 mb-2">
              Свадьба
            </h1>
            <div className="inline-block w-20 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-8"></div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-cormorant text-3xl md:text-4xl text-purple-600 font-medium">
                Анна & Михаил
              </h2>
              <p className="text-gray-600 text-lg">
                приглашают вас разделить с ними радость
              </p>
            </div>

            <div className="bg-purple-50/50 rounded-lg p-6 space-y-2">
              <p className="text-gray-700 font-medium">25 августа 2024</p>
              <p className="text-gray-600">17:00</p>
              <p className="text-gray-600">Усадьба "Архангельское"</p>
            </div>

            <div className="pt-4">
              <p className="text-gray-500 italic text-sm">
                "Любовь — это не просто чувство. Это искусство."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default WeddingCover;
