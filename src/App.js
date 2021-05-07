import React from "react";
import "./styles.css";
import { useState } from "react";
import Api from "./api";

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
    " While 11 COVID-19 vaccines, including India's Covaxin, have already reached the market, at least 17 new COVID-19 vaccines are in the final stage of trials, including two from Indian vaccine makers.",
  Anxiety_before_taking_Vaccine:
    "The most challenging thing is to bring satisfaction to humankind as they might even doubt happiness.",
  Handling_Anxiety:
    "If you're feeling anxious about the COVID-19 vaccine and struggling to make a decision about getting vaccinated in the midst of your anxiety read below keynotes.",
  Vaccine_for_All: ""
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
      name: "Goal",
      rating:
        "The goal of a vaccine program for Covid-19 is not necessarily to get to Covid zero,but it's to tame this virus, to defang it,to remove its ability to cause serious disease, hospitalization, and death.It helps to look at the different outcomes of an exposure to Covid-19 like this: The best-case scenario is, you don’t get sick at all.The worst case is death.In between, there’s being hospitalized, severe-to-moderate symptoms,or having no symptoms at all.In the absolute best circumstances, vaccines give you protection all the way to here.But realistically, that isn’t the main objective of Covid-19 vaccines.The real purpose is to give your body enough protection to cover these possibilities,so if you do get an infection, it feels more like a cold than something you'd be hospitalized for.And this is one thing that every one of these Covid-19 vaccines do well.Efficacy matters. But it doesn’t matter the most.The question isn’t which vaccine will protect you from any Covid infection,but which one will keep you alive?Or out of the hospital?Which one will help end the pandemic?And that’s any of them.The best vaccine right now for you is the one that you're offered.With each shot that goes into someone's arm, we get closer to the end of this pandemic."
    },
    {
      name: "Efficacy = risk reduction",
      rating:
        "all vaccines are 100% effective from the disease, Pfizer with 95% efficacy doesn't mean there are 5% chance of people vaccinated with pfizer of getting sick but it is to benefit that you have 95% lesser chance of developing covid-19.So, one of the biggest considerations here, when we look at these numbers,is the timing in which these clinical trials were performed.This is the number of daily Covid-19 cases in the US since the pandemic began.The Moderna trial was done completely in the US, here, in the summer.The Pfizer/BioNTech trial was primarily based in the US, too, and at the same time.Johnson & Johnson, however, held their US trial at this time,when there were more opportunities for participants to be exposed to infections.And most of their trial took place in other countries, primarily South Africa and Brazil.And in these other countries, not only were case rates high,but the virus itself was different. The trials took place as variants of Covid-19 emerged,and became the dominant infections in these countries variants that are more likely to get participants sick.In South Africa, most of the cases in the Johnson & Johnson trial were that of the variant,not the original strain that was in the US over the summer.And despite that, it still significantly reduced infections.If you're trying to make one-to-one, head-to-head comparisons between vaccines,they need to have been studied in the same trial, with the same inclusion criteria,in the same parts of the world, at the same time."
    }
  ],
  Anxiety_before_taking_Vaccine: [
    {
      name:
        "Curiosity is but natural for the public, especially with an unprecedented illness and its prevention. Questions like, “Will the vaccine work, is it safe, when will I receive it, which one will I receive, can I choose not to be vaccinated,” etc., are common and flooding the daily discussions now that the vaccination roll has begun.",
      rating:
        "And you're not alone if you're feeling nervous about these brand new vaccines, despite the safety data that's available.We like to know what we're getting into, and we generally don't do well with a lot of uncertainty, especially when it comes to our health and our bodies.There are plenty of 'what-ifs' a person could ask themself before getting vaccinated. What if I have uniquely bad side effects? What if they rushed things too much? What if there are long-term side effects we don't yet know about? All of these what-ifs can, understandably, contribute to anxiety."
    }
  ],
  Handling_Anxiety: [
    {
      name:
        "Dealing with the fear of easily catching and spreading a deadly virus is new. Being forced to make extreme lifestyle sacrifices is new. Weighing the risks vs. the rewards of everything we do outside of our home is new. Coping with social isolation is new.",
      rating:
        "Now, we're faced with something else that's new: COVID-19 vaccines."
    },
    {
      name: "Face your anxiety rather than avoid it",
      rating:
        "First thing's first, there's nothing wrong with being anxious about something new.What can be problematic, however, is letting your anxiety automatically drive your decision-making process instead of you.If you're coping with your anxiety related to the COVID-19 vaccines by putting off a decision or avoiding even thinking about it altogether, you don't have control over your decision — your anxiety does,Similarly, if your anxiety is causing you to spiral through all the what-ifs without much progress, your overthinking may paralyze you from ever being able to make a decision.The best way to begin dealing your vaccine anxiety is to recognize and accept that it's real, and then make a conscious effort to handle it in a productive way.Think of anxiety as a signal to slow down and be thoughtful about how you want to respond. A productive way might be to start with researching what's known about the vaccines so you can accurately appraise the risk level. From there, you can make the decision that you feel is best and hold on to that feeling when you need reassurance when anxiety surfaces again.Keep in mind, however, if you hope to arrive at a place where you don't feel any anxiety or nervousness whatsoever about these new vaccines, you're not likely to ever actually make a decision at all."
    },
    {
      name: "Do your due diligence",
      rating:
        "Feeling that you've assessed the perceived risk level as thoroughly as possible can help ease your anxiety. But not all information about these new vaccines is created equal.While appraising the situation and how it might impact your health, make sure you're gathering your facts from a trusted source of information. Some good options are your primary care doctor, the vaccine web page or credible health websites.Be aware that headlines and personal opinions expressed on social media may be based on less credible news sources.Even after doing plenty of research, there are still some what-ifs that just won't come with answers right now. This is when it's helpful to weigh the known and unknown risks.For instance, if you're concerned about the potential for long-term side effects of COVID-19 vaccines, it may help to consider what we know about the side effects of COVID-19 , as well as the frequency and severity of long-term side effects of other common vaccines that have been studied for a long time."
    },
    {
      name: "Discuss your concerns with someone you trust",
      rating:
        "As mentioned, there's a lot of information to take in about the new COVID-19 vaccines. After trying to digest it all on, it may help to discuss your concerns with someone you trust.With any feeling of anxiety, it can be beneficial to turn to someone you trust for support. While this can be hard to do during the pandemic, even something simple as talking through your decision with someone on the phone can help reassure you.Let the person know you're nervous and give them space to constructively weigh in on your decision-making process if they have concerns."
    },
    {
      name: "Avoid generalizing fear of COVID-19 with fear of the vaccine.",
      rating:
        "Fear can be both very strong and easily generalizable.For example, after being bitten by a stray dog at a park, you've become afraid of dogs — all dogs, even the ones that are on a leash or wagging their tails affectionately. You might even be afraid to visit that same park, regardless of whether there are dogs present or not. Your fear has generalized from one dog and one event towards the things that are associated: all dogs and the park.In the case of vaccine anxiety, your mind has already identified that COVID-19 is a threat that's very real and dangerous. Now, your fear may generalize to the COVID-19 vaccine, and it may be an automatic, conditioned response you might not even realize is happening,While COVID-19 and the COVID-19 vaccine are related, they are distinctly separate. The threat from COVID-19 is real, while the threat you may feel from the COVID-19 vaccine could very well be perceived."
    },
    {
      name: "Ask yourself if you have a deeper motivation for being vaccinated",
      rating:
        "Look — we all, of course, want this pandemic to end. And we also know that vaccine-induced immunity is a huge step in the right direction. But this truth may not be enough as you make a decision that you feel is right for your health but is still anxiety-inducing.Make space beyond the obvious reasons for getting vaccinated and see if you can find other powerful sources of motivation to lean into. For instance, maybe getting vaccinated is important to you because it might reduce your risk of passing the virus to someone who's more likely to get very ill from COVID-19. There's always value in finding a deeper sense of purpose.One which i found is vaccine will give our body the required immunity to fight this virus as what this virus does is weaken our body and in that mean time if we get to suffer anyother health complications then that makes us critical in life and death situation."
    }
  ],
  Vaccine_for_All: [
    {
      name: "I’ve had coronavirus. Do I still need the vaccine?",
      rating:
        "If you have had COVID-19 then your body may have built up some natural immunity to the virus, however we don’t know how long this immunity lasts or if it fully protects you from catching COVID-19 again. It is likely that natural immunity won’t last as long as the immunity given to you by a vaccine, and there is no way of knowing if you have any protection. So, it is still very important to take up the offer of a COVID-19 vaccine when it becomes available to you."
    },
    {
      name:
        "How Long After Having Covid-19 Can You Get The Coronavirus Vaccine?",
      rating:
        "Remember the Covid-19 vaccine cannot give you Covid-19. Repeat, the vaccine cannot give you Covid-19. The vaccine does not even contain the whole virus. Instead, the vaccines simply get your cells to produce the spike protein that’s typically found on the surface of the SARS-CoV2.Remember, the SARS-CoV2 looks like a spiky massage ball, except you should never try to use this ball to massage your glutes. Think of the spike protein as a Jennifer Aniston haircut. While the haircut is part of Aniston and symbolic of Aniston, it alone is not Aniston. Having a date with Jennifer Aniston’s haircut would not be the same as having a date with the actress. A bunch of hair typically will not respond to your questions or laugh at your jokes.Similarly, the spike protein is only part of the virus and can’t by itself cause Covid-19.Therefore, to be safe, it’s best to wait at least 14 days after you were either diagnosed with Covid-19 or started having Covid-19 symptoms before getting a Covid-19 vaccine. This applies whether you are looking to get your first dose or your second dose of the vaccine. For example, say you’ve already gotten your first dose of either the Pfizer/BioNtech or Moderna Covid-19 vaccine and then develop a Covid-19 coronavirus infection before getting the second dose. Don’t simply get your second dose 21 or 28 days after the first dose as originally scheduled. Instead, put yourself in isolation for at least 10 days and wait until you have fully recovered from the infection before getting the second dose of the vaccine.Wait even longer if you have received monoclonal antibodies or convalescent plasma to treat your Covid-19. The CDC advises, in such situations, to wait at least 90 days before getting a Covid-19 vaccine. That’s because such antibodies may remain in your body for up to three months and bind to the spike protein produced by the vaccine. This could in turn reduce your immune system’s exposure to the spike protein and thus the response. In general, it’s a good idea to talk to your doctor about when you should get a Covid-19 vaccine if you’ve had Covid-19 recently, especially if you’ve received treatment for the infection."
    },
    {
      name:
        "Some have claimed that you don’t need the Covid-19 vaccine after having had Covid-19 !",
      rating:
        "Just because you’ve had Covid-19 doesn’t give you superpowers against the virus. Recovering from a Covid-19 coronavirus infection may not offer you the same level and duration of immunity that a vaccine would. A vaccine is a lot more direct and specific. An infection can be a bit like an Ocean’s 11 heist. Your immune system may not fully know what hit you and, in turn, may not develop all the defense mechanisms that it could. Whereas, a vaccine causing your cells to produce the spike protein is more like showing you pictures of Danny Ocean (played by George Clooney), Rusty Ryan (played by a constantly eating Brad Pitt), and others in the Ocean’s 11 gang and effectively saying,get ready for these specific people.This isn’t to say that Clooney is pointy-headed and looks like a spike protein. Instead, it means that when you show your immune system specific aspects of the enemy in a more controlled setting, it may be able to muster up better and longer-lasting protection."
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
      <footer>
        <p>
          सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामया, सर्वे भद्राणि पश्यन्तु मा
          कश्चिद् दुख भागभवेत।
        </p>
        <Api />
      </footer>
    </div>
  );
}
