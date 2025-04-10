
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import SectionHeader from "./common/SectionHeader";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-marketing-50">
      <div className="section-container">
        <SectionHeader 
          title="Let's Connect" 
          description="Ready to transform your marketing strategy? Reach out and let's discuss how I can help your business grow."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
