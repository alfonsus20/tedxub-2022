import { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqs = [
  {
    question: "Apakah main event TEDxUniversitasBrawijaya diselenggarakan secara luring?",
    answer: "Benar! Main event TEDxUniversitasBrawijaya 2022 diselenggarakan secara luring di venue yang ada di dalam Universitas Brawijaya.",
  },
  {
    question: "Apakah saya bisa membeli lebih dari satu tiket?",
    answer: "Yap! Kamu bisa membeli lebih dari satu tiket sekaligus dalam sekali transaksi.",
  },
  {
    question: "Bisakah saya memesankan tiket untuk orang lain?",
    answer: "Kamu bisa memesankan tiket untuk orang lain pada transaksimu dengan mengisikan data dirinya untuk mendapatkan barcode yang berbeda.",
  },
  {
    question: "Bagaimana cara penukaran tiket untuk akses masuk di main event nanti?",
    answer: "Setelah transaksi selesai, kamu akan mendapatkan barcode yang wajib kamu tukarkan dengan akses masuk di hari H nanti."
  },
  {
    question: "Apa saja yang akan saya dapatkan pada pembelian tiket main event TEDxUniversitasBrawijaya?",
    answer: "Kamu akan mendapatkan akses masuk ke dalam venue dan juga TEDx kit yang akan diberikan pada hari H saat penukaran barcode ke tiket fisik."
  },
  {
    question: "Kemana saya harus menghubungi jika menemukan kendala dalam pembelian tiket?",
    answer: "Kamu bisa menghubungi kami melalui direct message Instagram @tedxuniversitasbrawijaya atau melalui: \n1. Sekar (081553215041)\n2. Hamzah (081287591157)"
  },
];

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <ul className="accordion list-none">
      {faqs.map((faq, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          faq={faq}
        />
      ))}
    </ul>
  );
};

export default Accordion;