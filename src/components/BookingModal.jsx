import { Calendar, Clock, Video, MapPin, User,IndianRupee } from "lucide-react";
import { useState } from "react";

const BookingModal = ({ isOpen, onClose, service }) => {
  const today = new Date();
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [origin, setOrigin] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 5 }, (_, i) => today.getFullYear() + i);

  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  ).getDay();

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      const start = hour > 12 ? `${hour - 12}pm` : `${hour}am`;
      const end = hour + 1 > 12 ? `${hour + 1 - 12}pm` : `${hour + 1}am`;
      slots.push(`${start}-${end}`);
    }
    return slots;
  };

  const times = generateTimeSlots();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const close = () => {
    setStep(0);
    setSelectedOption("");
    setSelectedDate(null);
    setSelectedTime(null);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setAge("");
    setOrigin("");
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-800">
              Step 1 - Therapist Details
            </h4>

            {/* Therapist Details Card */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8 relative">
              <div className="absolute top-4 right-4 bg-blue-100 px-4 py-2 rounded-lg">
                <span className="font-bold text-blue-800">
                  ₹{service?.consultationFee === 0 ? "Free" : `${service?.consultationFee}`}/session
                </span>
                <span className="text-sm text-blue-600 ml-2">
                  ({service?.duration})
                </span>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4">{service?.name}</h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-blue-700 mb-2">
                    <span className="font-semibold">Languages:</span>{" "}
                    {service?.languages?.join(", ")}
                  </p>
                  <p className="text-sm text-blue-700">
                    <span className="font-semibold">Follow-up:</span>{" "}
                    ₹{service?.followUpFee}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-blue-700">
                    <span className="font-semibold">Availability:</span>{" "}
                    {service?.sessionType === "both"
                      ? "Online & Offline"
                      : service?.sessionType}
                  </p>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-6 text-blue-800">
              Select Service Type
            </h4>
            <div className="grid grid-cols-2 gap-6">
              {service.sessionType === "both" ? (
                <>
                  <div
                    className={`flex flex-col items-center justify-center p-6 border-2 text-lg font-medium text-gray-700 rounded-xl cursor-pointer transition-all ${
                      selectedOption === "online"
                        ? "shadow-lg border-blue-400 bg-blue-50"
                        : "border-gray-200 hover:bg-blue-50"
                    }`}
                    onClick={() => setSelectedOption("online")}
                  >
                    <Video className="w-8 h-8 mb-3 text-blue-600" />
                    <span>Online Session</span>
                  </div>
                  <div
                    className={`flex flex-col items-center justify-center p-6 border-2 text-lg font-medium text-gray-700 rounded-xl cursor-pointer transition-all ${
                      selectedOption === "offline"
                        ? "shadow-lg border-blue-400 bg-blue-50"
                        : "border-gray-200 hover:bg-blue-50"
                    }`}
                    onClick={() => setSelectedOption("offline")}
                  >
                    <MapPin className="w-8 h-8 mb-3 text-blue-600" />
                    <span>In-Person Session</span>
                  </div>
                </>
              ) : (
                <div
                  className={`flex items-center justify-center px-4 py-8 border-2 text-lg font-medium text-gray-700 rounded-xl cursor-pointer transition-all ${
                    selectedOption === service.sessionType
                      ? "shadow-lg border-blue-400 bg-blue-50"
                      : "border-gray-200 hover:bg-blue-50"
                  }`}
                  onClick={() => setSelectedOption(service.sessionType)}
                >
                  <span>
                    {service.sessionType.charAt(0).toUpperCase() +
                      service.sessionType.slice(1).toLowerCase()}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      case 1:
        if (selectedOption === "offline") {
          return (
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-800">
                Step 2 - Select Location
              </h4>
              <div className="space-y-4">
                <div className="flex items-center px-4 py-8 border-2 text-lg font-medium text-gray-700 rounded-xl cursor-pointer bg-blue-50 border-blue-400 shadow-lg">
                  <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                  <span>Pune</span>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-6 text-blue-800">
                  Step 2 - Select Date
                </h4>
                <div className="bg-white rounded-3xl p-6 border-2 border-blue-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-blue-900">Date</h2>
                    <div className="bg-blue-600 p-2 rounded-xl">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6">
                    <select
                      className="w-32 bg-blue-50 border-2 border-blue-200 text-blue-900 text-sm font-semibold rounded-lg block p-2.5"
                      defaultValue={today.getMonth()}
                    >
                      {months.map((month, index) => (
                        <option key={month} value={index}>
                          {month}
                        </option>
                      ))}
                    </select>

                    <select
                      className="w-24 bg-blue-50 border-2 border-blue-200 text-blue-900 text-sm font-semibold rounded-lg block p-2.5"
                      defaultValue={today.getFullYear()}
                    >
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center font-medium text-sm p-2 text-blue-900"
                        >
                          {day}
                        </div>
                      )
                    )}

                    {Array.from({ length: firstDayOfMonth }, (_, i) => (
                      <div key={`empty-${i}`} className="p-2"></div>
                    ))}

                    {Array.from({ length: daysInMonth }, (_, i) => {
                      const day = i + 1;
                      const currentDate = new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        day
                      );
                      const isPast = currentDate <= today.setHours(0, 0, 0, 0);
                      const formattedDate = `${today.getFullYear()}/${(
                        today.getMonth() + 1
                      )
                        .toString()
                        .padStart(2, "0")}/${day.toString().padStart(2, "0")}`;

                      return (
                        <button
                          key={day}
                          onClick={() => !isPast && setSelectedDate(formattedDate)}
                          disabled={isPast}
                          className={`text-center p-2 rounded-full font-semibold hover:bg-blue-100 transition-all
                            ${
                              selectedDate === formattedDate
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : ""
                            }
                            ${
                              isPast
                                ? "text-gray-500 cursor-not-allowed"
                                : "text-blue-900"
                            }
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-blue-800">
                  Available Times
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {times.map((time) => (
                    <button
                      key={time}
                      className={`p-4 border-2 rounded-xl transition-all ${
                        selectedTime === time
                          ? "shadow-lg border-blue-400 bg-blue-50"
                          : "bg-white hover:bg-blue-50"
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      case 2:
        if (selectedOption === "offline") {
          return (
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-6 text-blue-800">
                  Step 3 - Select Date
                </h4>
                <div className="bg-white rounded-3xl p-6 border-2 border-blue-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-blue-900">Date</h2>
                    <div className="bg-blue-600 p-2 rounded-xl">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6">
                    <select
                      className="w-32 bg-blue-50 border-2 border-blue-200 text-blue-900 text-sm font-semibold rounded-lg block p-2.5"
                      defaultValue={today.getMonth()}
                    >
                      {months.map((month, index) => (
                        <option key={month} value={index}>
                          {month}
                        </option>
                      ))}
                    </select>

                    <select
                      className="w-24 bg-blue-50 border-2 border-blue-200 text-blue-900 text-sm font-semibold rounded-lg block p-2.5"
                      defaultValue={today.getFullYear()}
                    >
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center font-medium text-sm p-2 text-blue-900"
                        >
                          {day}
                        </div>
                      )
                    )}

                    {Array.from({ length: firstDayOfMonth }, (_, i) => (
                      <div key={`empty-${i}`} className="p-2"></div>
                    ))}

                    {Array.from({ length: daysInMonth }, (_, i) => {
                      const day = i + 1;
                      const currentDate = new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        day
                      );
                      const isPast = currentDate <= today.setHours(0, 0, 0, 0);
                      const formattedDate = `${today.getFullYear()}/${(
                        today.getMonth() + 1
                      )
                        .toString()
                        .padStart(2, "0")}/${day.toString().padStart(2, "0")}`;

                      return (
                        <button
                          key={day}
                          onClick={() => !isPast && setSelectedDate(formattedDate)}
                          disabled={isPast}
                          className={`text-center p-2 rounded-full font-semibold hover:bg-blue-100 transition-all
                            ${
                              selectedDate === formattedDate
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : ""
                            }
                            ${
                              isPast
                                ? "text-gray-500 cursor-not-allowed"
                                : "text-blue-900"
                            }
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-blue-800">
                  Available Times
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {times.map((time) => (
                    <button
                      key={time}
                      className={`p-4 border-2 rounded-xl transition-all ${
                        selectedTime === time
                          ? "shadow-lg border-blue-400 bg-blue-50"
                          : "bg-white hover:bg-blue-50"
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-800">
                Step 3 - Contact Info
              </h4>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-900">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-1 block w-full border-2 border-blue-200 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-900">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-1 block w-full border-2 border-blue-200 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 block w-full border-2 border-blue-200 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full border-2 border-blue-200 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              
              </div>
            </div>
          );
        }
      case 3:
        if (selectedOption === "offline") {
          return (
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-800">
                Step 4 - Contact Info
              </h4>
              <div className="space-y-4">
                      {/* Add session charges display */}
              <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                <IndianRupee className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-sm text-blue-800">Session Charges</p>
                  <p className="font-medium">
                    {service?.consultationFee === 0
                      ? "Free"
                      : `₹${service?.consultationFee}`}
                  </p>
                </div>
              </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-900">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-1 block w-full border-2 border-blue-200 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-900">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-1 block w-full border-2 border-blue-200 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 block  border-2 border-blue-200 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block  border-2 border-blue-200 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900">
                    Address
                  </label>
                  <input
                    type="address"
                    value={email}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-1 block w-full border-2 border-blue-200 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div>
              <h2 className="text-2xl font-bold text-blue-900">
                Booking Confirmation
              </h2>
              <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <IndianRupee className="text-blue-600 w-6 h-6" />
                  <div>
                    <p className="text-sm text-blue-800">Session Charges</p>
                    <p className="font-medium">
                      {service?.consultationFee === 0
                        ? "Free"
                        : `₹${service?.consultationFee}`}
                    </p>
                  </div>
                </div>
                <p className="text-blue-800 mb-4">
                  Please review your booking details.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="text-blue-600 w-6 h-6" />
                    <div>
                      <p className="text-sm text-blue-800">Therapist</p>
                      <p className="font-medium">{service?.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {selectedOption === "online" ? (
                      <Video className="text-blue-600 w-6 h-6" />
                    ) : (
                      <MapPin className="text-blue-600 w-6 h-6" />
                    )}
                    <div>
                      <p className="text-sm text-blue-800">Session Type</p>
                      <p className="font-medium"> {selectedOption}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-blue-600 w-6 h-6" />
                    <div>
                      <p className="text-sm text-blue-800">Date</p>
                      <p className="font-medium">{selectedDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-blue-600 w-6 h-6" />
                    <div>
                      <p className="text-sm text-blue-800">Time</p>
                      <p className="font-medium">{selectedTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="text-sm text-blue-800">First Name</p>
                      <p className="font-medium">{firstName}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="text-sm text-blue-800">Last Name</p>
                      <p className="font-medium">{lastName}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="text-sm text-blue-800">Phone</p>
                      <p className="font-medium">{phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="text-sm text-blue-800">Email</p>
                      <p className="font-medium">{email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
        }
      case 4:
        return (
          <div>
            <h2 className="text-2xl font-bold text-blue-900">
              Booking Confirmation
            </h2>
            <div className="p-6">
              <p className="text-blue-800 mb-4">
                Please review your booking details.
              </p>
              <div className="space-y-4">
                  {/* Add charges to final confirmation */}
              <div className="flex items-center space-x-3">
                <IndianRupee className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-sm text-blue-800">Session Charges</p>
                  <p className="font-medium">
                    {service?.consultationFee === 0
                      ? "Free"
                      : `₹${service?.consultationFee}`}
                  </p>
                </div>
              </div>
                <div className="flex items-center space-x-3">
                  <User className="text-blue-600 w-6 h-6" />
                  <div>
                    <p className="text-sm text-blue-800">Therapist</p>
                    <p className="font-medium">{service?.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600 w-6 h-6" />
                  <div>
                    <p className="text-sm text-blue-800">Location</p>
                    <p className="font-medium">Pune</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-blue-600 w-6 h-6" />
                  <div>
                    <p className="text-sm text-blue-800">Date</p>
                    <p className="font-medium">{selectedDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-blue-600 w-6 h-6" />
                  <div>
                    <p className="text-sm text-blue-800">Time</p>
                    <p className="font-medium">{selectedTime}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <p className="text-sm text-blue-800">First Name</p>
                    <p className="font-medium">{firstName}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <p className="text-sm text-blue-800">Last Name</p>
                    <p className="font-medium">{lastName}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <p className="text-sm text-blue-800">Phone</p>
                    <p className="font-medium">{phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <p className="text-sm text-blue-800">Email</p>
                    <p className="font-medium">{email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-blue-50 to-white flex flex-col justify-between rounded-2xl p-8 w-full max-w-6xl h-[95vh] shadow-xl border-2 border-blue-100">
        {/* Progress Indicators */}
        <div className="flex justify-center mb-8 space-x-2">
          {Array.from(
            { length: selectedOption === "offline" ? 5 : 4 },
            (_, i) => i
          ).map((s) => (
            <div
              key={s}
              className={`w-3 h-3 rounded-full transition-all ${
                step === s ? "bg-blue-600" : "bg-blue-100"
              }`}
            />
          ))}
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-blue-900">
            Booking with {service?.name}
          </h3>
          <button
            onClick={close}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-2">{renderStep()}</div>

        {/* Navigation */}
        <div className="flex justify-between mt-6 border-t border-blue-100 pt-6">
          {step > 0 && (
            <button
              onClick={handleBack}
              className="px-6 py-2.5 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
            >
              ← Back
            </button>
          )}
          <button
            onClick={step < (selectedOption === "offline" ? 4 : 3) ? handleNext : close}
            className="ml-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center"
          >
            {step < (selectedOption === "offline" ? 4 : 3) ? (
              <>
                Next Step
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </>
            ) : (
              "Pay & Confirm Booking"
            )}
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default BookingModal;