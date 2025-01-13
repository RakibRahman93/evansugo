import Faq from "@/components/common/Faq";
import { faqs } from "@/data/faqs";

export default function Faqs() {
  return (
    <div className="call-action-2-text mb-50 mb-sm-40">
      {/* Accordion */}
      <dl className="accordion">
        <Faq faqData={faqs} />
      </dl>
      {/* End Accordion */}
    </div>
  );
}
