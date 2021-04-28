import React from "react";
import "./styles.css";
import { useState } from "react";

const quotes = {
  Covishield:
    " the Astrazeneca-Oxford vaccine, or AZD1222, has shown to be 70% effective after first dose and is increased to nearing 80 after the second dose.",
  Covaxin:
    "The vaccine has an efficacy rate of 81%, preliminary data from its phase 3 trial shows.",
  Sputnik: "Sputnik V gives around 91.6% protection against Covid-19.",
  About:
    "A widely used COVID-19 vaccine that's at least 50% effective could help control the pandemic.",
  Ingredients_in_a_vaccine:
    "Vaccines contain tiny fragments of the disease-causing organism or the blueprints for making the tiny fragments. They also contain other ingredients to keep the vaccine safe and effective. These latter ingredients are included in most vaccines and have been used for decades in billions of doses of vaccine.",
  vaccine_in_queue:
    " While 11 COVID-19 vaccines, including India's Covaxin, have already reached the market, at least 17 new COVID-19 vaccines are in the final stage of trials, including two from Indian vaccine makers."
};

const vaccineDB = {
  Covishield: [
    {
      name: "type",
      rating: "viral vector"
    },
    {
      name: "info",
      rating:
        "The Oxford-AstraZeneca vaccine is being manufactured locally by the Serum Institute of India, the world's largest vaccine manufacturer. It says it is producing more than 60 million doses a month. The vaccine is made from a weakened version of a common cold virus (known as an adenovirus) from chimpanzees. It has been modified to look more like coronavirus - although it can't cause illness.When the vaccine is injected into a patient, it prompts the immune system to start making antibodies and primes it to attack any coronavirus infection."
    },
    {
      name: "timeline",
      rating:
        "The jab is administered in two doses given between four and 12 weeks apart."
    }
  ],

  Covaxin: [
    {
      name: "type",
      rating: "Inactivated virus"
    },
    {
      name: "info",
      rating:
        "Bharat Biotech says it has a stockpile of 20 million doses of Covaxin, and is aiming to make 700 million doses out of its four facilities in two cities by the end of the year. Covaxin is an inactivated vaccine which means that it is made up of killed coronaviruses, making it safe to be injected into the body.When administered, immune cells can still recognise the dead virus, prompting the immune system to make antibodies against the pandemic virus.      "
    },
    {
      name: "timeline",
      rating: "The two doses are given four weeks apart."
    }
  ],
  Sputnik: [
    {
      name: "type",
      rating: "viral vector"
    },
    {
      name: "info",
      rating:
        "Russia's Sputnik V has been deemed to be safe, and works in a way similar to the Oxford-AstraZeneca jab which is being made in India as Covishield.        It uses a cold-type virus, engineered to be harmless, as a carrier to deliver a small fragment of the coronavirus to the body.Safely exposing the body to a part of the virus's genetic code in this way allows it to recognise the threat and learn to fight it off, without the risk of becoming ill.After being vaccinated, the body starts to produce antibodies especially tailored to the coronavirus.This means that the immune system is primed to fight coronavirus when it encounters it for real.        "
    },
    {
      name: "timeline",
      rating:
        "Unlike other similar vaccines, the Sputnik jab uses two slightly different versions of the vaccine for the first and the second dose - given 21 days apart.      They both target the coronavirus's distinctive spike, but use different vectors - the neutralised virus that carries the spike to the body.The idea is that using two different formulas boosts the immune system even more than using the same version twice - and may give longer-lasting protection."
    }
  ],
  About: [
    {
      name: "The different types of vaccines",
      rating:
        "There are three main approaches to designing a vaccine. Their differences lie in whether they use a whole virus or bacterium; just the parts of the germ that triggers the immune system; or just the genetic material that provides the instructions for making specific proteins and not the whole virus."
    },
    {
      name: "The whole-microbe approach",
      rating:
        "1.Inactivated vaccine (how flu & #polio vaccines are made), 2.Live-attenuated vaccine, 3.Viral vector vaccine (how #Ebola vaccine is made)"
    },
    {
      name: "The subunit approach",
      rating:
        "A subunit vaccine is one that only uses the very specific parts (the subunits) of a virus or bacterium that the immune system needs to recognize. It doesn't contain the whole microbe or use a safe virus as a vector. The subunits may be proteins or sugars. Most of the vaccines on the childhood schedule are subunit vaccines, protecting people from diseases such as whooping cough, tetanus, diphtheria and meningococcal meningitis."
    },
    {
      name: "The genetic approach (nucleic acid vaccine)",
      rating:
        "Unlike vaccine approaches that use either a weakened or dead whole microbe or parts of one, a nucleic acid vaccine just uses a section of genetic material that provides the instructions for specific proteins, not the whole microbe. DNA and RNA are the instructions our cells use to make proteins. In our cells, DNA is first turned into messenger RNA, which is then used as the blueprint to make specific proteins."
    }
  ],
  Ingredients_in_a_vaccine: [
    {
      name: "Antigen",
      rating:
        "All vaccines contain an active component (the antigen) which generates an immune response, or the blueprint for making the active component. The antigen may be a small part of the disease-causing organism, like a protein or sugar, or it may be the whole organism in a weakened or inactive form."
    },
    {
      name: "Preservatives",
      rating:
        "Preservatives prevent the vaccine from becoming contaminated once the vial has been opened, if it will be used for vaccinating more than one person. Some vaccines don’t have preservatives because they are stored in one-dose vials and are discarded after the single dose is administered. The most commonly used preservative is 2-phenoxyethanol. It has been used for many years in a number of vaccines, is used in a range of baby care products and is safe for use in vaccines, as it has little toxicity in humans."
    },
    {
      name: "Stabilizers",
      rating:
        "Stabilizers prevent chemical reactions from occurring within the vaccine and keep the vaccine components from sticking to the vaccine vial. Stabilizers can be sugars (lactose, sucrose), amino acids (glycine), gelatin, and proteins (recombinant human albumin, derived from yeast)."
    },
    {
      name: "Surfactants",
      rating:
        "Surfactants keep all the ingredients in the vaccine blended together. They prevent settling and clumping of elements that are in the liquid form of the vaccine. They are also often used in foods like ice cream.      "
    },
    {
      name: "Residuals",
      rating:
        "Residuals are tiny amounts of various substances used during manufacturing or production of vaccines that are not active ingredients in the completed vaccine. Substances will vary depending on the manufacturing process used and may include egg proteins, yeast or antibiotics. Residual traces of these substances which may be present in a vaccine are in such small quantities that they need to be measured as parts per million or parts per billion.      "
    },
    {
      name: "Diluent",
      rating:
        "A diluent is a liquid used to dilute a vaccine to the correct concentration immediately prior to use. The most commonly used diluent is sterile water.      "
    },
    {
      name: "Adjuvant",
      rating:
        "Some vaccines also contain adjuvants. An adjuvant improves the immune response to the vaccine, sometimes by keeping the vaccine at the injection site for a little longer or by stimulating local immune cells.The adjuvant may be a tiny amount of aluminium salts (like aluminium phosphate, aluminium hydroxide or potassium aluminium sulphate). Aluminium has been shown not to cause any long-term health problems, and humans ingest aluminium regularly through eating and drinking.      "
    }
  ],
  vaccine_in_queue: [
    {
      name: "Covavax",
      rating:
        "Covovax is Serum Institute of India's version of NVX-CoV2373, the protein-based Covid-19 vaccine developed by Novavax, headquartered in USA. Trials in india have been started and likely to be launched in september 2021."
    },
    {
      name: "HGCO19",
      rating:
        "A vaccine being developed by the Pune-based Gennova has become India's first homemade mRNA candidate.The vaccines developed by American companies Pfizer and Moderna, which are said to have over 90 percent efficacy, use the mRNA model."
    },
    {
      name: "ZyCoV-D",
      rating:
        "Being developed by Zydus Cadila and has been approved by Drugs Controller General of India (DCGI) for the conduct of a Phase III clinical trial, ZyCoV-D would be the second indigenous vaccine developed in India."
    },
    {
      name: "Janssen Ad26.COV2.S",
      rating:
        "It is a single dose non replicating human adenovirus vector vaccine. In India, J&J has a manufacturing partner in Hyderabad-based Biological E.So far, any approval to start clinical trials has not been granted to the firm."
    }
  ],
  Are_some_vaccines_better_than_others: [
    {
      name: "",
      rating:
        "The goal of a vaccine program for Covid-19 is not necessarily to get to Covid zero,but it's to tame this virus, to defang it,to remove its ability to cause serious disease, hospitalization, and death.It helps to look at the different outcomes of an exposure to Covid-19 like this: The best-case scenario is, you don’t get sick at all.The worst case is death.In between, there’s being hospitalized, severe-to-moderate symptoms,or having no symptoms at all.In the absolute best circumstances, vaccines give you protection all the way to here.But realistically, that isn’t the main objective of Covid-19 vaccines.The real purpose is to give your body enough protection to cover these possibilities,so if you do get an infection, it feels more like a cold than something you'd be hospitalized for.And this is one thing that every one of these Covid-19 vaccines do well.Efficacy matters. But it doesn’t matter the most.The question isn’t which vaccine will protect you from any Covid infection,but which one will keep you alive?Or out of the hospital?Which one will help end the pandemic?And that’s any of them.The best vaccine right now for you is the one that you're offered.With each shot that goes into someone's arm, we get closer to the end of this pandemic."
    },
    {
      name: "Efficacy = risk reduction",
      rating:
        "all vaccines are 100% effective from the disease, Pfizer with 95% efficacy doesn't mean there are 5% chance of people vaccinated with pfizer of getting sick but it is to benefit that you have 95% lesser chance of developing covid-19.So, one of the biggest considerations here, when we look at these numbers,is the timing in which these clinical trials were performed.This is the number of daily Covid-19 cases in the US since the pandemic began.The Moderna trial was done completely in the US, here, in the summer.The Pfizer/BioNTech trial was primarily based in the US, too, and at the same time.Johnson & Johnson, however, held their US trial at this time,when there were more opportunities for participants to be exposed to infections.And most of their trial took place in other countries, primarily South Africa and Brazil.And in these other countries, not only were case rates high,but the virus itself was different. The trials took place as variants of Covid-19 emerged,and became the dominant infections in these countries variants that are more likely to get participants sick.In South Africa, most of the cases in the Johnson & Johnson trial were that of the variant,not the original strain that was in the US over the summer.And despite that, it still significantly reduced infections.If you're trying to make one-to-one, head-to-head comparisons between vaccines,they need to have been studied in the same trial, with the same inclusion criteria,in the same parts of the world, at the same time."
    }
  ]
};

export default function App() {
  const [selectedType, setType] = useState("About");
  const [quote, setQuote] = useState(
    "A widely used COVID-19 vaccine that's at least 50% effective could help control the pandemic. . . ."
  );

  function typeClickHandler(type) {
    setType(type);
    setQuote(quotes[type]);
  }
  return (
    <div className="App">
      <h1> 💉 Vaccines </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout all to be made available vaccines. Select a type to get started{" "}
      </p>

      <div>
        {Object.keys(vaccineDB).map((type) => (
          <button
            onClick={() => typeClickHandler(type)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              backgroundColor: "lightgrey"
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <p>{quote}</p>
      <hr />
      <div className="container" style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {vaccineDB[selectedType].map((vaccine) => (
            <li
              key={vaccine.name}
              style={{
                listStyle: "none",
                padding: "0.9rem",
                border: "1px solid #D1D5DB",
                width: "88%",
                margin: "1rem 1rem",
                borderRadius: "0.2rem",
                backgroundColor: "white"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {vaccine.name} </div>
              <div style={{ fontSize: "medium" }}> {vaccine.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
