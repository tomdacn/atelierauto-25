"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

// Mock available time slots
const availableTimeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00"
];

// Mock closed days (Sundays)
const isDateDisabled = (date: Date) => {
  return date.getDay() === 0; // 0 is Sunday
};

interface DateTimeSelectorProps {
  selectedDate: Date | undefined;
  selectedTime: string | null;
  onSelectDate: (date: Date | undefined) => void;
  onSelectTime: (time: string) => void;
}

export function DateTimeSelector({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}: DateTimeSelectorProps) {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Get formatted date for display
  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Choisir l'heure & date
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onSelectDate}
              disabled={isDateDisabled}
              onMonthChange={setCurrentMonth}
              className="border-none"
            />
          </div>

          {selectedDate && (
            <p className="mt-4 text-gray-600 text-center">
              Date sélectionnée: <span className="font-medium">{formattedDate}</span>
            </p>
          )}
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h4 className="font-medium text-center mb-4">Horaires disponibles</h4>

            {!selectedDate ? (
              <p className="text-center text-gray-500">
                Veuillez d'abord sélectionner une date
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {availableTimeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => onSelectTime(time)}
                    className={cn(
                      "py-2 px-3 rounded-md text-center transition-colors",
                      selectedTime === time
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </div>

          {selectedTime && (
            <p className="mt-4 text-gray-600 text-center">
              Heure sélectionnée: <span className="font-medium">{selectedTime}</span>
            </p>
          )}

          <div className="mt-6 text-center text-gray-500 text-sm">
            <p>* Les heures de réservation sont approximatives et peuvent varier en 15 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
