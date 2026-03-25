"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, CheckCircle, ChevronRight } from "lucide-react";

import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "../../lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const ChinFillerLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "chinFiller");

  const faqs = [
    {
      q: "Does chin filler hurt?",
      a: "Most people feel pressure and mild discomfort. Numbing methods help. Many clinics describe it as manageable.",
    },
    {
      q: "How long does chin filler last?",
      a: "A common estimate is 12 to 24 months, depending on filler type and your metabolism.",
    },
    {
      q: "What is the downtime after chin filler?",
      a: "Most people return to normal activity quickly. Mild swelling or bruising may last a few days.",
    },
    {
      q: "Is chin filler safe?",
      a: "It is generally considered safe when performed by an experienced medical professional using approved products, but all injectables carry risks.",
    },
    {
      q: "How much does chin filler cost in Kuala Lumpur?",
      a: "It depends on the brand and syringe count. Nexus Clinic KL lists Juvederm per 1 cc pricing, with chin included across several products.",
    },
    {
      q: "How many cc do I need for chin filler?",
      a: "Many people are around 1 cc, but it depends on your profile and goals. A consultation is the right way to confirm.",
    },
    {
      q: "Will chin filler make my face look slimmer?",
      a: "It can make the lower face look more structured by improving projection and proportions. Some clinics describe this as a 'sharper' look rather than true fat loss.",
    },
    {
      q: "Can chin filler reduce a double chin?",
      a: "Chin filler does not remove fat. But it can improve the profile line in some people by adding projection, which may reduce the appearance in photos.",
    },
    {
      q: "When can I exercise after chin filler?",
      a: "A common safety guideline is to avoid strenuous exercise for about 24 hours to reduce swelling and bruising risk.",
    },
    {
      q: "What should I avoid after chin filler?",
      a: "Avoid heavy exercise, alcohol, and heat exposure like saunas for a short period after treatment, as commonly advised in filler aftercare guidance.",
    },
    {
      q: "Can chin filler be reversed?",
      a: "If a hyaluronic acid filler is used, it can be dissolved with hyaluronidase when medically appropriate.",
    },
    {
      q: "Will chin filler migrate?",
      a: "Migration risk depends on product choice, injection depth, and aftercare. Proper technique and not pressing the area early help.",
    },
    {
      q: "How soon will I see results?",
      a: "You see improvement right away. The look refines as swelling settles.",
    },
    {
      q: "How long does chin swelling last?",
      a: "Many people settle within days, but small swelling can take longer. Plan ahead if you have an event.",
    },
    {
      q: "Is chin filler better than jawline filler?",
      a: "They solve different problems. Chin filler improves projection and profile balance. Jawline filler improves side definition. Many people combine both for a smooth lower-face contour.",
    },
    {
      q: "Can men do chin filler in Kuala Lumpur?",
      a: "Yes. The plan is usually different, focusing on structure and balance rather than a narrow 'V' look.",
    },
    {
      q: "What filler does Nexus Clinic KL use for chin?",
      a: "Nexus Clinic KL lists Allergan (US) Juvederm fillers and includes chin in several product indications on its published price guide.",
    },
    {
      q: "How do I choose the best chin filler clinic in KL?",
      a: "Look for doctor-led assessment, authentic products, clear pricing, and realistic planning. Directory listings can help compare options, but your consultation matters most.",
    },
  ];

  return (
    <div className="bg-light overflow-x-hidden">
      {/* Hero Section - ALL TEXT INCLUDED */}
      <section className="relative bg-cream pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-5 md:px-8 max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-brown leading-tight tracking-tight">
                Best Chin Filler in Malaysia{" "}
                <span className="text-wine">
                  Instant Results Without Surgery
                </span>{" "}
                at Nexus Clinic Kuala Lumpur
              </h1>
              <p className="text-taupe text-md mt-6 leading-relaxed">
                Trusted by thousands. Award-winning injectors and aesthetic
                doctors at Nexus Clinic KL deliver precise chin filler Kuala
                Lumpur results. Sharper profile, restored facial balance. No
                surgery. No downtime. Book today.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-wine hover:bg-rose transition-all text-white font-semibold px-8 py-3 rounded-full shadow-lg flex items-center gap-2">
                  Book Your Free Chin Profile Assessment at Nexus Clinic KL{" "}
                  <ChevronRight size={18} />
                </button>
                <button className="border border-wine text-wine hover:bg-wine/10 px-8 py-3 rounded-full font-medium transition">
                  Speak to a Doctor About Your Chin Profile | Book a Free
                  Assessment
                </button>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="hidden md:block relative">
              <div className="bg-glass rounded-2xl shadow-elegant p-4 backdrop-blur-sm border border-white/30">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Chin filler results at Nexus Clinic KL"
                  className="rounded-xl w-full object-cover shadow-md"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chin Filler Treatment Overview - COMPLETE TABLE TEXT */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-5 md:px-8 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brown">
              Chin Dermal Filler in Malaysia for a Sharper, Defined Profile
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto mt-4 rounded-full"></div>
            <p className="text-taupe mt-6 max-w-3xl mx-auto">
              Your side profile is the one angle you cannot control. Group
              photos, video calls, mirrors at the wrong moment. A chin that sits
              too far back makes your nose look bigger, your jaw look softer,
              and your entire face look off. Skincare does not fix this.
              Exercise does not fix this. It is structural.
            </p>
            <p className="text-brown mt-4 max-w-3xl mx-auto">
              Chin filler at Nexus Clinic Kuala Lumpur fixes it. One session, 20
              to 30 minutes, zero surgery. Our award-winning injectors and
              aesthetic doctors have performed over 5,000 facial filler
              procedures using technique built for Southeast Asian bone
              structure. The result looks like you. Just sharper.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-taupe/20"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-wine/10">
                  <tr>
                    <th
                      colSpan={2}
                      className="px-6 py-4 text-lg font-bold text-brown"
                    >
                      Chin Filler Treatment Overview
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-taupe/20">
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold bg-cream/40 w-2/5">
                      Treatment
                    </td>
                    <td className="px-6 py-4 text-brown/80">
                      Non-surgical chin augmentation using hyaluronic acid
                      dermal filler
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold bg-cream/40">
                      Session Time
                    </td>
                    <td className="px-6 py-4">20 to 30 minutes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold bg-cream/40">
                      Downtime may vary depending on the type of filler used.
                    </td>
                    <td className="px-6 py-4">
                      Minimal. Most patients return to normal activities the
                      same day
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold bg-cream/40">
                      Results
                    </td>
                    <td className="px-6 py-4">
                      Visible immediately. Fully settled within 5 to 7 days
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold bg-cream/40">
                      Longevity
                    </td>
                    <td className="px-6 py-4">
                      12 to 18 months on average. Radiesse can last up to 24
                      months
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold bg-cream/40">
                      Reversible
                    </td>
                    <td className="px-6 py-4">
                      Yes. HA fillers are fully dissolvable with hyaluronidase
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold bg-cream/40">
                      Anaesthesia
                    </td>
                    <td className="px-6 py-4">Topical numbing cream only</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold bg-cream/40">
                      Suitable For
                    </td>
                    <td className="px-6 py-4">
                      Recessed chin, flat side profile, age-related volume loss,
                      asymmetry
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
          <div className="text-center mt-8">
            <button className="text-wine underline font-medium">
              Speak to a Doctor About Your Chin Profile | Book a Free Assessment
            </button>
          </div>
        </div>
      </section>

      {/* The Side Profile Problem - COMPLETE TEXT */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-5 md:px-8 max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold text-brown">
                The Side Profile Problem Most Patients Get Wrong
              </h2>
              <div className="h-1 w-20 bg-wine my-5"></div>
              <p className="text-taupe leading-relaxed mb-4">
                Most patients arriving at Nexus Clinic KL thinking they need a
                nose job leave with a chin filler plan instead. This is not
                misdirection. It is proportion.
              </p>
              <p className="text-taupe leading-relaxed mb-4">
                When the chin sits too far back, the nose reads as large even if
                it is perfectly average. The jaw blurs into the neck. The lower
                face loses structure from every angle. Fixing the chin restores
                the proportion without touching the nose. Faster, cheaper, and
                with no recovery time.
              </p>
              <p className="text-brown/80 mb-4">
                A significant portion of patients in Malaysia and Southeast Asia
                have genetic chin underprojection. The bone simply did not
                develop with enough forward position. Others see the change
                gradually from their mid-twenties as fat pads thin and bone
                density decreases. Either way, the concern is real and it has a
                clinical solution.
              </p>
              <p className="text-sm text-wine font-semibold mt-2 italic">
                The International Society of Aesthetic Plastic Surgery (ISAPS)
                reported in 2024 that non-surgical chin and jawline augmentation
                saw a 34% increase in procedure volume across Southeast Asian
                markets over two years, making it one of the fastest-growing
                aesthetic categories in the region.
              </p>
              <p className="text-xs text-taupe mt-2">
                [Citation 1: ISAPS Global Statistics Report 2024]
              </p>
              <button className="mt-6 bg-wine/10 text-wine px-6 py-2 rounded-full flex items-center gap-1">
                Book a Consultation | Find Out If Chin Filler Is Right for You{" "}
                <ChevronRight size={16} />
              </button>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Chin profile assessment at Nexus Clinic KL"
                  className="w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Patients Who Benefit - ALL TEXT INCLUDED */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-5 max-w-5xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-brown">
              Patients Who Benefit Most from Chin Filler in KL
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-5"
          >
            {[
              "Fillers may help enhance the appearance of the chin. Side profile looks flat or recessed in photos and video calls",
              "Nose appears larger than expected because the chin does not balance it, affecting overall facial harmony.",
              "Jawline blurs into the neck from certain angles",
              "Double chin appearance caused by underprojection rather than excess weight",
              "Facial asymmetry stemming from the chin area",
              "Age-related lower face volume loss that softens definition over time",
              "Patients who want to trial the improvement before committing to surgery",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-taupe/20 flex items-start gap-3"
              >
                <CheckCircle size={20} className="text-wine shrink-0 mt-0.5" />
                <span className="text-brown/80 text-sm md:text-base">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-8 text-center text-taupe">
            Many patients who book for chin filler have not connected their
            concern to their chin at all. They describe feeling that something
            is off but cannot explain it. The chin is often the answer.
          </p>
          <p className="mt-4 text-center text-taupe">
            Patients interested in full lower face improvement often combine
            chin filler with fillers that add volume for enhanced aesthetics.{" "}
            <a href="#" className="text-wine underline">
              jawline filler in Malaysia
            </a>{" "}
            for a more complete result.
          </p>
          <div className="text-center mt-6">
            <button className="bg-wine text-white px-8 py-2 rounded-full">
              Not Sure If You Are a Candidate | Book a Free Clinical Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Nexus Clinic KL Difference - COMPLETE TEXT */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-5 max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl font-bold text-brown">
                Nexus Clinic KL | Award-Winning Injectors for Chin Filler
              </h2>
              <div className="h-1 w-16 bg-wine my-4"></div>
              <p className="mb-4 text-taupe">
                There are many aesthetic clinics in Kuala Lumpur. The filler
                brands across most of them are nearly identical. The experience
                of the hands placing those products is not.
              </p>
              <p className="font-bold text-brown mt-4">
                What makes Nexus Clinic KL different:
              </p>
              <ul className="space-y-2 mt-2">
                {[
                  "Over 5,000 facial filler procedures completed by licensed aesthetic doctors",
                  "15 or more years of combined aesthetic medicine experience across the clinical team specializing in effective treatments.",
                  "Specialist training in Southeast Asian facial anatomy and injection technique",
                  "Award-winning practitioners recognised for safety, precision and natural outcomes",
                  "Anatomy-first approach: the right amount placed correctly always outperforms excess volume",
                  "Honest consultations: if chin filler is not the right solution, you will be told clearly before committing to any aesthetic treatments.",
                  "Full aftercare support and structured follow-up included as standard",
                  "MOH-approved products used for every treatment without exception",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <Sparkles size={18} className="text-wine shrink-0 mt-0.5" />
                    <span className="text-brown/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm italic mt-3">
                Allergan/AbbVie Malaysia reported in 2023 that Juvederm Voluma
                remains the most prescribed chin and cheek filler brand in
                Malaysia. This reflects clinician confidence in its structural
                performance and patient preference for longevity.
              </p>
              <p className="text-xs text-taupe mt-1">
                [Citation 2: AbbVie Malaysia Aesthetic Market Summary Report,
                2023]
              </p>
              <p className="mt-3 text-taupe">
                Patients exploring full facial rejuvenation alongside chin
                filler often consider{" "}
                <a href="#" className="text-wine underline">
                  cheek filler in Malaysia
                </a>{" "}
                and nose filler at Nexus Clinic KL.
              </p>
              <button className="mt-4 text-wine underline">
                Book a Consultation | Speak to an Award-Winning Aesthetic Doctor
              </button>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl shadow-elegant"
            >
              <h3 className="text-xl font-bold text-wine">
                Filler Products Used for Chin Augmentation at Nexus Clinic
              </h3>
              <p className="text-sm text-taupe mt-2">
                All chin filler treatments at Nexus Clinic KL use MOH-approved
                hyaluronic acid dermal fillers from internationally recognised
                brands. HA is a substance your body already produces. It
                integrates naturally with tissue and carries a strong safety
                record backed by decades of clinical use.
              </p>
              <div className="space-y-5 mt-4">
                <div className="border-l-4 border-wine pl-4">
                  <p className="font-bold">Juvederm Voluma</p>
                  <p className="text-brown/80 text-sm">
                    High-density HA engineered for structural support and
                    forward projection. The most prescribed chin filler brand in
                    Malaysia. Results last 12 to 18 months.
                  </p>
                </div>
                <div className="border-l-4 border-wine pl-4">
                  <p className="font-bold">Restylane Lyft</p>
                  <p className="text-brown/80 text-sm">
                    Firm-consistency filler with strong lift and projection
                    capacity. Frequently chosen for patients needing structural
                    correction across both the chin and jawline.
                  </p>
                </div>
                <div className="border-l-4 border-wine pl-4">
                  <p className="font-bold">Belotero Volume</p>
                  <p className="text-brown/80 text-sm">
                    Softer HA that integrates naturally into tissue. Preferred
                    for lighter corrections or patients having chin filler for
                    the first time.
                  </p>
                </div>
                <div className="border-l-4 border-wine pl-4">
                  <p className="font-bold">Radiesse</p>
                  <p className="text-brown/80 text-sm">
                    Biostimulatory filler made from calcium hydroxylapatite.
                    Adds immediate volume and stimulates collagen production
                    over time. Results last 12 to 24 months. Not reversible with
                    hyaluronidase so patient assessment is more thorough before
                    use.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-taupe text-sm">
                The right product for your treatment is confirmed during your
                consultation based on your anatomy, the degree of correction
                needed, and the result you want to achieve.
              </p>
              <button className="mt-5 text-wine underline">
                Find Out Which Filler Suits Your Chin | Book a Free Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Chin Filler Procedure - COMPLETE TEXT */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-5 max-w-5xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brown">
              The Chin Filler Procedure at Nexus Clinic KL
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                stage: "Stage 01",
                title: "Full Facial Assessment",
                desc: "Your doctor reviews your chin in the context of the entire lower face. Front view, 45-degree oblique, and direct side profile are all assessed. Proportions of the nose, lips and jawline all inform the treatment plan.",
              },
              {
                stage: "Stage 02",
                title: "Personalised Treatment Plan",
                desc: "Exact placement, volume and product are mapped for your anatomy. Whether the correction needed is forward projection, vertical lengthening, asymmetry correction or a combination, the plan is built around your face. Most patients need 0.5 to 1.5ml. You will know the full plan before anything begins.",
              },
              {
                stage: "Stage 03",
                title: "Numbing and Precise Injection",
                desc: "Topical numbing cream is applied before treatment begins. Filler is placed at carefully chosen anatomical points using fine needles or a cannula. The session takes 20 to 30 minutes from start to finish.",
              },
              {
                stage: "Stage 04",
                title: "Review and Aftercare",
                desc: "The result is reviewed immediately after treatment to ensure the desired appearance of the chin. Your doctor explains what to expect as the filler settles, provides aftercare instructions and confirms the follow-up process. The shape you see on the day refines slightly over 5 to 7 days, as the filler settles around the chin.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="bg-wine/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-wine text-sm">
                    {item.stage}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-center">{item.title}</h3>
                <p className="text-taupe text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-wine text-white px-8 py-3 rounded-full">
              Ready to Get Started | Book Your Chin Filler Appointment at Nexus
              Clinic KL to explore the latest chin filler prices.
            </button>
          </div>
        </div>
      </section>

      {/* Chin Filler Results - COMPLETE TEXT */}
      <section className="py-20 bg-cream">
        <div className="container max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="text-3xl font-bold">
                Chin Filler Results Patients at Nexus Clinic KL Experience
              </h2>
              <ul className="mt-5 space-y-2">
                {[
                  "A sharper, more defined side profile that holds up in every light and every photo",
                  "Better proportion between the nose, lips, chin and jawline",
                  "A lower face that reads as naturally structured without looking done",
                  "Reduced appearance of a double chin caused by underprojection",
                  "Correction of mild to moderate chin asymmetry",
                  "Increased confidence in photographs, video calls, and face-to-face settings may be achieved through harmonious chin filler enhancements.",
                  "Non-surgical result with no scarring, no stitches and no anaesthesia beyond numbing cream",
                  "Full reversibility for patients who prefer a non-permanent option",
                ].map((r) => (
                  <li key={r} className="flex gap-2">
                    <Star size={18} className="text-wine shrink-0 mt-0.5" />
                    <span className="text-brown/80 text-sm">{r}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 bg-white p-4 rounded-lg">
                96% of patients at Nexus Clinic KL report satisfaction with
                their result at the 3-month review. Most patients need just 1 to
                1.5ml for a result that reads as natural and balanced.
              </p>
              <button className="mt-4 text-wine underline">
                See Results for Yourself | Book Your Consultation Today
              </button>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="text-3xl font-bold">
                Chin Filler Compared to Chin Implant and Thread Lift
              </h2>
              <div className="overflow-x-auto mt-5">
                <table className="min-w-full bg-white rounded-xl shadow-lg">
                  <thead className="bg-brown text-white">
                    <tr>
                      <th className="p-3 text-left">Aspect</th>
                      <th className="p-3 text-left">Chin Filler</th>
                      <th className="p-3 text-left">Chin Implant (Surgery)</th>
                      <th className="p-3 text-left">Thread Lift</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y">
                    <tr>
                      <td className="p-3 font-semibold">Procedure</td>
                      <td className="p-3">Non-surgical injection</td>
                      <td className="p-3">Surgery under general anaesthesia</td>
                      <td className="p-3">Non-surgical</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Downtime</td>
                      <td className="p-3">Same day return to activities</td>
                      <td className="p-3">1 to 2 weeks recovery</td>
                      <td className="p-3">2 to 5 days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Duration</td>
                      <td className="p-3">12 to 18 months</td>
                      <td className="p-3">Permanent</td>
                      <td className="p-3">6 to 12 months</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Reversible</td>
                      <td className="p-3">Yes (HA fillers)</td>
                      <td className="p-3">No. Removal surgery required</td>
                      <td className="p-3">Partially</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Anaesthesia</td>
                      <td className="p-3">Topical numbing cream</td>
                      <td className="p-3">General anaesthesia</td>
                      <td className="p-3">
                        Local anaesthesia is often used during aesthetic
                        treatments to ensure comfort during filler injections.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Scarring</td>
                      <td className="p-3">None</td>
                      <td className="p-3">Small incision scar</td>
                      <td className="p-3">Minimal entry points</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Correction Level</td>
                      <td className="p-3">Mild to moderate</td>
                      <td className="p-3">
                        Moderate to significant improvements in facial
                        aesthetics may be achieved with chin filler.
                      </td>
                      <td className="p-3">Limited</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">
                        Cost in Malaysia (2026)
                      </td>
                      <td className="p-3">RM 1,500 to RM 3,500</td>
                      <td className="p-3">RM 8,000 to RM 20,000+</td>
                      <td className="p-3">RM 2,000 to RM 4,500</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Best For</td>
                      <td className="p-3">
                        First-timers, non-surgical preference
                      </td>
                      <td className="p-3">
                        Patients wanting a permanent change
                      </td>
                      <td className="p-3">
                        Soft tissue lifting only may not achieve the desired
                        contour for facial harmony.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3 text-center">
                For patients comparing non-surgical options, our{" "}
                <a href="#" className="text-wine underline">
                  dermal filler Malaysia
                </a>{" "}
                page covers the full range of HA filler treatments available at
                Nexus Clinic KL.
              </p>
              <p className="text-center mt-2 text-sm">
                Compare your options in person at a clinic in Malaysia. | Book a
                No-Pressure Consultation to discuss the amount of filler used
                for your desired results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages and Limitations - COMPLETE TEXT */}
      <section className="py-20 bg-light">
        <div className="container max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-wine">
                Honest Advantages and Limitations of Chin Filler
              </h3>
              <h4 className="text-xl font-bold text-brown mt-4">Advantages</h4>
              <ul className="mt-3 space-y-1 list-disc pl-5 text-taupe">
                <li>
                  No surgery, no stitches, no scarring and no general
                  anaesthesia required
                </li>
                <li>Visible improvement immediately after treatment</li>
                <li>
                  Fully reversible with hyaluronidase for all HA-based fillers
                </li>
                <li>
                  Temporary result lets you experience the improvement before
                  committing to anything permanent
                </li>
                <li>
                  Can be combined with jawline filler or lip filler for full
                  lower face rebalancing
                </li>
                <li>
                  Natural-looking results when the right volume and technique
                  are used, especially with chin filler Malaysia.
                </li>
                <li>
                  Minimal downtime with effective treatment options available.
                  Most patients return to work the same day
                </li>
              </ul>
              <h4 className="text-xl font-bold text-brown mt-6">Limitations</h4>
              <ul className="list-disc pl-5 mt-2 text-taupe">
                <li>
                  Results are not permanent. Top-up treatments typically needed
                  every 12 to 18 months
                </li>
                <li>
                  Injector experience matters significantly. Wrong technique or
                  excess volume produces an unnatural result
                </li>
                <li>
                  Not suitable for patients with severe skeletal
                  underdevelopment who may need surgical assessment
                </li>
                <li>
                  Radiesse is not dissolvable and requires more thorough patient
                  screening
                </li>
                <li>
                  Mild bruising or swelling may occasionally be visible for
                  several days
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brown">
                Chin Filler Cost in Malaysia | Transparent 2026 Pricing
              </h3>
              <p className="bg-white p-4 rounded-lg mt-2 text-taupe">
                Chin filler in Malaysia costs between RM 1,500 and RM 3,500 per
                session in 2026. The range reflects real differences between
                patients rather than arbitrary pricing tiers.
              </p>
              <ul className="list-disc pl-5 mt-3 text-taupe">
                <li>
                  Filler brand and grade: Premium brands such as Juvederm Voluma
                  and Restylane Lyft carry a higher cost. The difference
                  reflects longevity, consistency and clinical track record
                </li>
                <li>
                  Volume required: Subtle forward projection may need 0.5 to
                  1ml. More significant underprojection or asymmetry may require
                  1.5 to 2ml of filler injections for optimal results.
                </li>
                <li>
                  Complexity of correction: A single forward projection differs
                  from a combined treatment addressing projection, vertical
                  length and asymmetry
                </li>
                <li>
                  Combination treatments: Chin filler is often performed
                  alongside jawline or lip filler. Combined sessions are priced
                  accordingly, especially for fillers may be more
                  cost-effective.
                </li>
              </ul>
              <p className="mt-3 text-taupe">
                Your quote at Nexus Clinic KL is confirmed after consultation.
                You leave knowing exactly what is included before any commitment
                is made.
              </p>
              <button className="mt-4 text-wine underline">
                Get Your Personalised Price | Book a Free Consultation at Nexus
                Clinic KL
              </button>

              <h3 className="text-2xl font-bold text-brown mt-8">
                Chin Filler Aftercare Instructions
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-sm mt-2 bg-cream p-4 rounded-xl">
                <li>
                  ✓ Avoid pressing, rubbing or massaging the chin area for at
                  least 48 hours
                </li>
                <li>✓ Avoid sleeping face-down for the first two nights</li>
                <li>✓ Skip intense exercise for the first 24 hours</li>
                <li>
                  ✓ Stay away from saunas, steam rooms and prolonged heat
                  exposure for 48 hours
                </li>
                <li>
                  ✓ Avoid alcohol for the first 24 hours to reduce bruising and
                  swelling risk
                </li>
                <li>
                  ✓ Do not book facial massages or skin treatments for at least
                  two weeks after treatment
                </li>
                <li>
                  ✓ Give the filler 5 to 7 days to fully settle before assessing
                  the final result
                </li>
              </ul>
              <p className="mt-3 text-sm text-taupe">
                Most patients see no visible signs of treatment within 24 to 48
                hours. The shape refines slightly over the first week as any
                mild swelling resolves.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-brown">
              How Long Chin Filler Lasts in Malaysia
            </h3>
            <p className="text-center mt-2 max-w-3xl mx-auto text-taupe">
              Chin filler results typically last 12 to 18 months in Malaysia.
              The exact duration depends on the filler brand used, the volume
              placed, your individual metabolism and lifestyle, as well as the
              benefits of chin filler.
            </p>
            <p className="text-center mt-2 max-w-3xl mx-auto text-taupe">
              HA fillers are gradually broken down by the body over time. Most
              Nexus Clinic patients schedule a top-up around the 12-month mark
              to maintain their result before the filler fully metabolises.
              Maintenance volume required is usually less than the original
              treatment, making top-up sessions more cost-efficient.
            </p>
            <p className="text-center mt-2 max-w-3xl mx-auto text-taupe">
              Radiesse may last up to 24 months in some patients and provides an
              additional benefit through collagen biostimulation. It is not
              reversible and requires careful patient selection.
            </p>
            <p className="text-center mt-2 text-taupe">
              Patients who want to maintain overall skin quality alongside their
              filler often explore{" "}
              <a href="#" className="text-wine underline">
                skin booster treatment in Malaysia
              </a>{" "}
              at Nexus Clinic KL.
            </p>

            <h3 className="text-2xl font-bold text-center mt-8 text-brown">
              Side Effects of Chin Filler | Temporary and Rare
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-white p-4 rounded-xl">
                <p className="font-bold text-wine">Common Temporary Effects</p>
                <ul className="list-disc pl-5 text-sm mt-2 text-taupe">
                  <li>
                    Mild swelling at the injection site, typically resolving
                    within 2 to 4 days
                  </li>
                  <li>
                    Light bruising, uncommon but possible, usually fading within
                    5 to 7 days
                  </li>
                  <li>
                    Tenderness or sensitivity in the treated area for 24 to 48
                    hours
                  </li>
                  <li>
                    Mild redness immediately after treatment, settling within a
                    few hours
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <p className="font-bold text-wine">Rare Risks</p>
                <ul className="list-disc pl-5 text-sm mt-2 text-taupe">
                  <li>
                    Lumpiness or irregular texture if filler is placed
                    incorrectly
                  </li>
                  <li>
                    Infection at the injection site, extremely rare when sterile
                    technique is used
                  </li>
                  <li>
                    Allergic reaction to filler material, very rare with HA
                    products
                  </li>
                  <li>
                    Vascular occlusion, a serious but rare complication
                    requiring an injector trained in complication management
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-4 text-taupe text-sm">
              All chin filler at Nexus Clinic KL is performed by licensed
              medical doctors trained in advanced facial anatomy. MOH-approved
              products are used for every treatment. Your full medical history
              is reviewed at consultation before any treatment is confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - ALL QUESTIONS AND ANSWERS INCLUDED */}
      <section className="py-20 bg-cream">
        <div className="container max-w-4xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions About Chin Filler in Malaysia
          </h2>
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="font-bold text-wine">
                How painful is chin filler in Malaysia? You may experience some
                discomfort during the procedure.
              </p>
              <p className="text-brown/70 mt-1">
                Most patients describe the experience as light pressure rather
                than pain. Numbing cream is applied before treatment begins. The
                injection itself takes only a few minutes once the area is numb,
                allowing for quick aesthetic treatments. The majority of
                patients are surprised by how manageable the process is.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="font-bold text-wine">
                How much does chin filler cost in Malaysia in 2026?
              </p>
              <p className="text-brown/70 mt-1">
                Chin filler in Malaysia ranges from RM 1,500 to RM 3,500 per
                session in 2026. The final figure depends on the filler brand,
                volume required and complexity of the correction. Pricing is
                confirmed after your consultation at Nexus Clinic KL so you know
                exactly what is included before committing.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="font-bold text-wine">
                How long do chin filler results last in Malaysia?
              </p>
              <p className="text-brown/70 mt-1">
                Results typically last 12 to 18 months. Hyaluronic acid fillers
                are gradually metabolised by the body over time. Radiesse may
                last up to 24 months in some patients. Most Nexus Clinic
                patients schedule a maintenance top-up around the 12-month mark.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="font-bold text-wine">
                Can chin filler results be reversed?
              </p>
              <p className="text-brown/70 mt-1">
                Hyaluronic acid chin fillers are fully dissolvable with
                hyaluronidase. This is one of the most significant safety
                advantages of HA-based products and a key reason many first-time
                patients prefer them. If you are unhappy with the outcome, the
                filler used can be completely removed to restore the original
                contour.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="font-bold text-wine">
                Will chin filler results look natural?
              </p>
              <p className="text-brown/70 mt-1">
                With the right technique and appropriate volume, the result
                reads as structural definition rather than obvious augmentation.
                Overfilling is the most common cause of an unnatural result. The
                doctors at Nexus Clinic KL use a restrained, anatomy-first
                approach where the right amount always outperforms more volume
                placed carelessly.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="font-bold text-wine">
                Can chin filler fix facial asymmetry?
              </p>
              <p className="text-brown/70 mt-1">
                Mild to moderate chin asymmetry caused by genetics, injury,
                dental extractions or jaw correction can often be improved
                significantly with filler. The doctor assesses the degree and
                origin of the asymmetry at consultation and gives an honest
                picture of what is achievable without surgery. Severe structural
                asymmetry may require a surgical opinion.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="font-bold text-wine">
                How quickly do results appear after chin filler treatments to
                reshape the chin contour?
              </p>
              <p className="text-brown/70 mt-1">
                The improvement is visible immediately after treatment. Mild
                swelling in the first 24 to 48 hours may slightly soften the
                appearance of the crease before the filler settles around the
                chin. The final result is typically clear within 5 to 7 days
                after the filler used settles. Most patients see their best
                outcome within one week.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="font-bold text-wine">
                Can chin filler be combined with other treatments?
              </p>
              <p className="text-brown/70 mt-1">
                Chin filler is regularly combined with jawline filler, lip
                filler or nose filler as part of full lower face balancing.
                Treating the chin in isolation when surrounding areas also
                contribute to the imbalance produces a partial result. Your
                doctor will recommend whether a single-area or combined
                treatment better serves your specific concern.
              </p>
              <p className="text-brown/70 mt-2">
                Patients who experience tear trough hollowing alongside a weak
                chin often benefit from addressing both in the same visit. Learn
                more about{" "}
                <a href="#" className="text-wine underline">
                  tear trough filler in Malaysia
                </a>{" "}
                at Nexus Clinic KL.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="font-bold text-wine">
                Is chin filler safe in Malaysia?
              </p>
              <p className="text-brown/70 mt-1">
                Chin filler is a safe, well-established treatment when performed
                by a licensed medical doctor using MOH-approved products in a
                proper clinical environment. The risks, including bruising,
                swelling and the rare risk of vascular complications, are
                directly related to injector skill and product quality. At Nexus
                Clinic KL, all treatments are performed by qualified doctors
                trained in facial anatomy and emergency complication management.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="font-bold text-wine">
                Who is a good candidate for chin filler in KL?
              </p>
              <p className="text-brown/70 mt-1">
                Chin filler works best for patients with a recessed or
                underprojected chin, age-related lower face volume loss, mild to
                moderate asymmetry, or those wanting a non-surgical option with
                minimal recovery. Patients with significant skeletal
                underdevelopment, active skin infections in the area, or those
                who are pregnant or breastfeeding are not suitable. A full
                medical assessment at consultation determines suitability for
                each individual.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-brown">
              Book Chin Filler Consultation at Nexus Clinic Kuala Lumpur Today
            </h3>
            <p className="text-taupe mt-3">
              One consultation is all it takes to understand exactly what chin
              filler can do for your profile and whether it is the right step
              for you. No pressure. No upselling. Just a clinical assessment, an
              honest plan, and transparent pricing confirmed before you commit
              to anything.
            </p>
            <p className="text-brown mt-2 font-semibold">
              Over 5,000 procedures. Award-winning injectors specializing in
              chin filler in Selangor. Results that look like you at your best.
            </p>
            <button className="mt-6 bg-wine text-white px-8 py-3 rounded-full font-semibold hover:bg-rose transition">
              Book Your Free Consultation Now to learn about the benefits of
              chin filler. | Limited Slots Available This Week
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChinFillerLanding;
