import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const RSVPForm = () => {
  const [attendance, setAttendance] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (attendance && fullName.trim()) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <Icon
                name="CheckCircle2"
                className="w-16 h-16 text-green-500 mx-auto mb-6"
              />
              <h3 className="font-cormorant text-3xl text-gray-800 mb-4">
                Спасибо за ответ!
              </h3>
              <p className="text-gray-600 text-lg mb-2">
                Ваш ответ получен, {fullName}
              </p>
              <p className="text-gray-500">
                {attendance === "yes"
                  ? "Мы очень рады, что вы будете с нами!"
                  : "Нам жаль, что вы не сможете присутствовать."}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-cormorant text-4xl text-gray-800 mb-4">
            Подтверждение присутствия
          </h2>
          <div className="w-16 h-px bg-purple-300 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Пожалуйста, сообщите нам о своем решении до 15 августа
          </p>
        </div>

        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="font-cormorant text-2xl text-gray-800">
              RSVP
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label className="text-lg font-medium text-gray-700">
                  Сможете ли вы присутствовать на нашей свадьбе?
                </Label>
                <RadioGroup
                  value={attendance}
                  onValueChange={setAttendance}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50/50 transition-colors">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="flex-1 cursor-pointer">
                      Да, обязательно буду! ✨
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50/50 transition-colors">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="flex-1 cursor-pointer">
                      К сожалению, не смогу присутствовать
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="fullName"
                  className="text-lg font-medium text-gray-700"
                >
                  Ваше полное имя
                </Label>
                <div className="relative">
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Введите ваше полное имя"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="text-base py-3 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-medium transition-colors"
                disabled={!attendance || !fullName.trim()}
              >
                Отправить ответ
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RSVPForm;
