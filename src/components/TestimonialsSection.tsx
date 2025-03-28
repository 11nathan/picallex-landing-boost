
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: t("testimonial1_text"),
      name: t("testimonial1_name"),
      company: t("testimonial1_company"),
      stars: 5,
      result: t("testimonial1_result")
    },
    {
      text: t("testimonial2_text"),
      name: t("testimonial2_name"),
      company: t("testimonial2_company"),
      stars: 5,
      result: t("testimonial2_result")
    },
    {
      text: t("testimonial3_text"),
      name: t("testimonial3_name"),
      company: t("testimonial3_company"),
      stars: 5,
      result: t("testimonial3_result")
    }
  ];
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-picallex-black text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("testimonials_title")}</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto mb-6">{t("testimonials_subtitle")}</p>
          <div className="w-24 h-1 bg-picallex-red mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial slider */}
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out flex"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl">
                      <div className="flex justify-between items-center mb-6">
                        <Quote className="h-12 w-12 text-picallex-red opacity-80" />
                        <div className="flex">
                          {Array(testimonial.stars).fill(0).map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-lg md:text-xl mb-8">{testimonial.text}</p>
                      <div>
                        <h4 className="text-xl font-bold">{testimonial.name}</h4>
                        <p className="text-gray-400">{testimonial.company}</p>
                      </div>
                      <div className="mt-6 bg-picallex-red/20 p-3 rounded-lg">
                        <p className="text-sm font-medium">{t("businessResult")}: <span className="text-picallex-red font-bold">{testimonial.result}</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === activeTestimonial ? 'bg-picallex-red' : 'bg-gray-500'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          {/* Company logos */}
          <div className="mt-20">
            <p className="text-center text-gray-400 mb-8 uppercase text-sm tracking-wider">
              {t("trustedBy")}
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {Array(5).fill(0).map((_, i) => (
                <div key={i} className="h-12 flex items-center">
                  <div className="bg-white h-6 w-24 md:w-32 rounded-lg opacity-80"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
