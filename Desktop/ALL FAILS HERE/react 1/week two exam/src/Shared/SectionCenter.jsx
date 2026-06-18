import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import MapIcon from "@mui/icons-material/Map";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import PublicIcon from "@mui/icons-material/Public";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const categories = [
  { id: "tours", label: "Tours Booking", icon: <MapIcon className="text-xl" /> },
  { id: "activities", label: "Activities", icon: <LocalActivityIcon className="text-xl" /> },
  { id: "destinations", label: "Destinations", icon: <PublicIcon className="text-xl" /> },
  { id: "hotels", label: "Hotels Booking", icon: <HotelIcon className="text-xl" /> },
  { id: "car", label: "Rental Car", icon: <DirectionsCarIcon className="text-xl" /> },
  { id: "property", label: "Property", icon: <ApartmentIcon className="text-xl" /> },
  { id: "tickets", label: "Tickets Booking", icon: <ConfirmationNumberIcon className="text-xl" /> },
];

const staticFaqData = [
  { id: "01", question: "How do I make a reservation on your website?", answer: "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals." },
  { id: "02", question: "What documents do I need for my trip, and how do I obtain them?", answer: "Depending on your destination, you may need a valid passport, visa, or specific medical certificates. We recommend checking requirements at least a month in advance." },
  { id: "03", question: "In the event that I need to modify or cancel my reservation, what are the policies in place?", answer: "Cancellation and modification policies depend on the specific tour operator and package. Most standard bookings can be modified up to 72 hours before departure." },
  { id: "04", question: "Can you specify the types of credit/debit cards, digital wallets, or other online payment methods accepted?", answer: "We accept all major credit cards including Visa, Mastercard, and American Express, as well as digital options like PayPal and Apple Pay." },
  { id: "05", question: "What are the working hours, and what can I expect in terms of response times?", answer: "Our support team works 24/7. Live chat responses are usually immediate, while email inquiries are handled within 2 to 4 hours." }
];

export  function SectionCenter() {
  const [activeTab, setActiveTab] = useState("tours");
  const [expanded, setExpanded] = useState("panel-01"); // Саволи аввал ба таври пешфарз кушода аст

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-[40px] font-bold text-black tracking-tight mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-[#64748b] text-[15px]">
          You need to come at least once in your life
        </p>
      </div>


      <div className="max-w-4xl mx-auto flex flex-col items-center gap-3 mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.slice(0, 4).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-medium transition-all duration-200 border border-[#e2e8f0] ${
                activeTab === tab.id
                  ? "bg-black text-white border-black shadow-sm"
                  : "bg-white text-black hover:bg-gray-50"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.slice(4).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-medium transition-all duration-200 border border-[#e2e8f0] ${
                activeTab === tab.id
                  ? "bg-black text-white border-black shadow-sm"
                  : "bg-white text-black hover:bg-gray-50"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto border border-[#e2e8f0] rounded-2xl overflow-hidden bg-white shadow-sm">
        {staticFaqData.map((faq, index) => {
          const panelId = `panel-${faq.id}`;
          const isOpen = expanded === panelId;

          return (
            <Accordion
              key={faq.id}
              expanded={isOpen}
              onChange={handleChange(panelId)}
              elevation={0}
              square
              className={`transition-colors duration-200 ${isOpen ? "!bg-[#f1f5f9]" : "!bg-white"}`}
              style={{
                borderBottom: index !== staticFaqData.length - 1 ? "1px solid #e2e8f0" : "none",
              }}
            >
              <AccordionSummary
                className="!py-4 !px-10"
                classes={{ content: "!items-center !justify-between !m-0" }}
              >
                <div className="flex items-center gap-10">
                  <span className="text-[32px] font-bold text-black min-w-[45px]">
                    {faq.id}
                  </span>
                  <span className="text-[20px] font-bold text-black tracking-tight">
                    {faq.question}
                  </span>
                </div>

                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  isOpen ? "bg-black text-white" : "bg-[#f1f5f9] text-black"
                }`}>
                  {isOpen ? (
                    <CloseIcon style={{ fontSize: "18px" }} />
                  ) : (
                    <AddIcon style={{ fontSize: "18px" }} />
                  )}
                </div>
              </AccordionSummary>

              <AccordionDetails className="!pb-8 !pr-24 !pl-[125px] !pt-0 text-[#64748b] text-[15px] leading-[1.6]">
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
