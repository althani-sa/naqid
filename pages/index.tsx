import { GetServerSideProps } from "next";
import Landing from "../Components/Sections/Landing";
import { HomepageProps } from "../public/Assets/Types/types";
import landingImage from "../public/Assets/Images/LandingImage.png";
import conditionsImage from "../public/Assets/Images/ConditionsImage.png";
import goalsImage from "../public/Assets/Images/GoalsImage.png";
import aboutImage from "../public/Assets/Images/AboutImage.png";
import targetImage from "../public/Assets/Images/TargetImage.png";
import sectionsImage from "../public/Assets/Images/Sections.png";
import outputsImage from "../public/Assets/Images/OutputsImage.png";
import icon1 from "../public/Assets/Svg/Details/1.svg";

import icon2 from "../public/Assets/Svg/Details/2.svg";
import icon3 from "../public/Assets/Svg/Details/3.svg";
import icon4 from "../public/Assets/Svg/Details/4.svg";
import icon5 from "../public/Assets/Svg/Details/5.svg";
import icon6 from "../public/Assets/Svg/Details/6.svg";
import icon7 from "../public/Assets/Svg/Details/7.svg";
import icon8 from "../public/Assets/Svg/Details/8.svg";
import white1 from "../public/Assets/Svg/Details/white1.svg";
import white2 from "../public/Assets/Svg/Details/white2.svg";
import white3 from "../public/Assets/Svg/Details/white3.svg";
import white4 from "../public/Assets/Svg/Details/white4.svg";
import white5 from "../public/Assets/Svg/Details/white5.svg";
import white6 from "../public/Assets/Svg/Details/white6.svg";
import white7 from "../public/Assets/Svg/Details/white7.svg";
import white8 from "../public/Assets/Svg/Details/white8.svg";
import personImage from "../public/Assets/Images/Person.png";
import About from "Components/Sections/About";
import Goals from "Components/Sections/Goals";
import Target from "Components/Sections/Target";
import Agenda from "Components/Sections/Agenda";
import Conditions from "Components/Sections/Conditions";
import Sections from "Components/Sections/Sections";
import Details from "Components/Sections/Details";
import Outputs from "Components/Sections/Outputs";
import Committe from "Components/Sections/Committe";
import Trainers from "Components/Sections/Trainers";
import Reviewers from "Components/Sections/Reviewers";
import Clerks from "Components/Sections/Clerks";
import clerksImage from "../public/Assets/Images/ClerksImage.png";
import FAQ from "Components/Sections/FAQ";
import { motion } from "framer-motion";
import rania from "../public/Assets/Images/Persons/rania.png";
import amani from "../public/Assets/Images/Persons/Amani.png";
import adel from "../public/Assets/Images/Persons/adel.png";
import mhd from "../public/Assets/Images/Persons/mhd.png";
import hosain from "../public/Assets/Images/Persons/hosain.png";
import abdul from "../public/Assets/Images/Persons/abdul.png";
import jaber from "../public/Assets/Images/Persons/jaber.png";
import ali from "../public/Assets/Images/Persons/aliN.png";
import baz3i from "../public/Assets/Images/Persons/baz3i.png";
import salehZ from "../public/Assets/Images/Persons/salehZ.png";
import logo from "../public/Assets/Svg/TextlessLogo.svg";
import Head from "next/head";

export default function Home({
  homepageData,
}: {
  homepageData: HomepageProps;
}) {
  return (
    <>
      <Head>
        <title>ناقد | الجمعية السعودية للأدب المقارن</title>
      </Head>
      <div>
        <Landing
          landingImage={homepageData.landingImage}
          landingSupportingText={homepageData.landingSupportingText}
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <About
            aboutUsImage={aboutImage.src}
            aboutUsSections={homepageData.aboutUsSections}
            aboutUsText={homepageData.aboutUsText}
          />
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Goals
            goalsHeadline={homepageData.goalsHeadline}
            goalsText={homepageData.goalsText}
            goalsImage={goalsImage.src}
          />
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Target
            durationHeadline={homepageData.durationHeadline}
            durationText={homepageData.durationText}
            targetHeadline={homepageData.targetHeadline}
            targetText={homepageData.targetText}
            targetImage={targetImage.src}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Agenda
            agendaHeadline={homepageData.agendaHeadline}
            agendaDetails={homepageData.agendaDetails}
            agendaText={homepageData.agendaText}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Conditions
            conditions={homepageData.conditions}
            conditionsHeadline={homepageData.conditionsHeadline}
            conditionsImage={homepageData.conditionsImage}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Sections
            programSections={homepageData.programSections}
            programSectionsHeadline={homepageData.programSectionsHeadline}
            programSectionsImage={sectionsImage.src}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Details
            programDetails={homepageData.programDetails}
            programDetailsHeadline={homepageData.programDetailsHeadline}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Outputs
            programOutputsHeadline={homepageData.programOutputsHeadline}
            programOutputsImage={outputsImage.src}
            programOutputsText={homepageData.programOutputsText}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Committe
            committeeHeadline={homepageData.committeeHeadline}
            committeeMembers={homepageData.committeeMembers}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Trainers
            trainersTeam={homepageData.trainersTeam}
            trainersTeamHeadline={homepageData.trainersTeamHeadline}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Reviewers
            reviewers={homepageData.reviewers}
            reviewersHeadline={homepageData.reviewersHeadline}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Clerks
            cretiqueClerks={homepageData.cretiqueClerks}
            cretiqueClerksHeadline={homepageData.cretiqueClerksHeadline}
            profileClerks={homepageData.profileClerks}
            profileClerksHeadline={homepageData.profileClerksHeadline}
            clerksImage={clerksImage.src}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <FAQ
            faqs={homepageData.faqs}
            faqsHeadline={homepageData.faqsHeadline}
          />
        </motion.div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  let homepageData: HomepageProps = {
    landingImage: landingImage.src,
    landingSupportingText: "ناقد: برنامج التدريب المكثف في النقد الأدبي",
    aboutUsText:
      "يركز هذا البرنامج على عرض وتقديم النقد الأدبي ومهاراته للمهتمين من المتخصصين وغير المتخصصين، كما يسعى إلى نشر ثقافة النقد والتحليل الفني للنصوص والأعمال الفنية من خلال المحاور التالية: ",
    aboutUsSections: [
      "إبراز أهمية الممارسة النقدية والوقوف على تحيزات النقد.",
      "تطبيق آليات الكتابة النقدية والتحليل.",
      "التدريب على اختيار الموضوعات والقضايا النقدية. ",
      "تقديم تاريخ النقد الأدبي، وعدة الناقد، وإستراتيجيات القراءة النقدية.",
      "تأسيس ثقافة الفكر الناقد وتعميمه ممارسة يومية مستمرة. ",
    ],
    goalsHeadline: "أهداف البرنامج",
    goalsText:
      "يستهدف هذا البرنامج شرائح متعددة من المثقفين المهتمين بتنمية التفكير النقدي والتحليل والنقد الأدبي والفني من غير المتخصصين في الدراسات النقدية.",
    targetHeadline: "الشريحة المستهدفة:",
    targetText:
      "يستهدف هذا البرنامج شرائح متعددة من المثقفين المهتمين بمجالات التفكير النقدي والتحليل والنقد الأدبي والفني من غير المتخصصين في الدراسات النقدية.",
    durationHeadline: "مدة البرنامج:",
    durationText:
      " (48) ساعة تدريبية، موزعة على (4) أسابيع، بمعدل (3) ساعات تدريبية يومياً.",
    agendaHeadline: "تاريخ تنفيذ البرنامج",
    agendaText:
      "يبدأ البرنامج ٩ يوليو وينتهي ٣ أغسطس 2023م، ويفتتح بمحاضرة عامة بتاريخ 6 يوليو 2023م.",
    agendaDetails: [
      {
        title: "إعلان بدء التسجيل",
        days: "1 يونيو",
      },
      {
        title: "المحور الأول للبرنامج (ما النقد؟)",
        days: "10-9 يوليو",
      },
      {
        title: "المحور الثاني للبرنامج (من الناقد؟)",
        days: "13-12 يوليو",
      },
      {
        title: "المحور الثالث للبرنامج  (كيف يقرأ الناقد؟ )",
        days: "17-16 يوليو",
      },
      {
        title: "المحور  الرابع للبرنامج (أين ذهب النقد؟)",
        days: "20-19 يوليو",
      },
      {
        title: "المحور الخامس للبرنامج (ما مشروعك النقدي؟ )",
        days: "24-23 يوليو",
      },
      {
        title: " المحور السادس للبرنامج ( لقاءات النقاد والمبدعين)",
        days: "27-26 يوليو",
      },
      {
        title: "المحور السابع للبرنامج (ورش عمل تطبيقية)",
        days: "31- 30 يوليو",
      },
      {
        title: "المحور الثامن للبرنامج (مراجعة المشروعات النقدية)",
        days: "3-2 أغسطس",
      },
      {
        title: "(نشر المشروعات النقدية في نشرة خاصة)",
        days: "20 أغسطس",
      },
    ],
    conditionsHeadline: "شروط التسجيل في البرنامج:",
    conditions: [
      "استكمال نموذج التسجيل بالبيانات المطلوبة كافة.",
      "الموافقة على الشروط والأحكام.",
      "إرفاق السيرة الذاتية للمتقدم.",
      "إرفاق المتقدم لخطاب الغرض من الانضمام للبرنامج، يوضح فيه فكرة المشروع النقدي الذي يخطط المتقدم للعمل عليها خلال البرنامج.",
      "الالتزام بحضور البرنامج التدريبي.",
      "حضور المقابلة الشخصية التالية لمرحلة التقديم.",
    ],
    conditionsImage: conditionsImage.src,
    programSectionsHeadline: "مكونات البرنامج:",
    programSections: [
      "ورش تدريبية",
      "محاضرات علمية",
      "لقاءات بنقاد ومبدعين",
      "نماذج نقدية يقدمها نقاد محترفون",
      "ملفات تعريفية بأسماء نقدية عربية وعالمية",
      "نقاشات جماعية",
      "مراجعة الأفكار النقدية",
    ],
    programDetailsHeadline: "تفاصيل البرنامج:",
    programDetailsText:
      "يتكون البرنامج من ورش عمل تدريبية حول محاور متصلة في موضوعاتها، على النحو التالي: ",
    programDetails: [
      {
        icon: icon1.src,
        whiteIcon: white1.src,
        title: "المحور الأول",
        subTitle: "ما النقد؟",
        brief:
          "يركز المحور الأول من هذا البرنامج على مناقشة أسئلة النقد الملحة ومشكلاته، والعلاقة بين النقد والتخصصات المتداخلة به، ويستعرض تاريخ النقد تخصص أكاديمي.",
      },
      {
        icon: icon2.src,
        whiteIcon: white2.src,
        title: "المحور الثاني",
        subTitle: "من الناقد؟",
        brief:
          "يركز هذا المحور من البرنامج على مناقشة عقدة النقد وأدواته من المهارات اللغوية والتفكير الناقد والتأسيس المعرفي.",
      },
      {
        icon: icon3.src,
        whiteIcon: white3.src,
        title: "المحور الثالث",
        subTitle: "كيف يقرأ الناقد؟ ",
        brief:
          "يركز هذا المحور من البرنامج على مناقشة التحيزات النقدية والقراءات بعدسات نقدية معينة: (الذات والنص، دراسات المرأة، الاقتصاد والنص، المجتمع والنص، التاريخ والنص، اللغة والنص، القومية والنص). ",
      },
      {
        icon: icon4.src,
        whiteIcon: white4.src,
        title: "المحور الرابع",
        subTitle: "أين ذهب النقد؟ ",
        brief:
          "تناقش جلسات هذا المحور الحداثة وامتداداتها من منظور نقدي، وكذلك سياقات ما بعد الحداثة، والوضع الراهن للحركة النقدية (ما بعد النقد)، النقد والبيئة، ما بعد الإنسانية، الإنسانيات الرقمية، الديستوبيا. ",
      },
      {
        icon: icon5.src,
        whiteIcon: white5.src,
        title: "المحور الخامس",
        subTitle: "ما مشروعك النقدي؟ ",
        brief:
          "تركز جلسات هذا المحور على دراسة حالات نقدية وتحليلها، بهدف الوصول إلى تصور عن اهتمامات المتدربين النقدية من خلال حلقات نقاش متخصصة. ",
      },
      {
        icon: icon6.src,
        whiteIcon: white6.src,
        title: "المحور السادس",
        subTitle: "لقاءات بنقاد ومبدعين",
        brief:
          "تنظم في جلسات هذا المحور لقاءات بنقاد متخصصين وكتاب مبدعين وفنانين من المجالات كافة لاستعراض وجهات النظر المختلفة حول العمل الأدبي/الفني واستقباله نقدياً.",
      },
      {
        icon: icon7.src,
        whiteIcon: white7.src,
        title: "المحور السابع",
        subTitle: "ورش عمل تطبيقية",
        brief:
          "تركز ورش العمل في هذا المحور على تحليل مسودات المشروعات النقدية المقدمة من المتدربين، وتقديم ملاحظات متخصصة وخطة لتطوير تلك المشروعات إلى أعمال نقدية قابلة للنشر. ",
      },
      {
        icon: icon8.src,
        whiteIcon: white8.src,
        title: "المحور الثامن",
        subTitle: "مراجعة المشروعات النقدية ",
        brief:
          "تركز جلسات هذا المحور على مراجعة المشروعات النقدية النهائية للمتدربين ووضع اللمسات الأخيرة عليها وتحديد الجاهز منها للنشر وتاريخ النشر المتوقع، بالإضافة إلى تعيين متخصص يعمل مع المتدربين للوصول إلى ذلك الهدف.",
      },
    ],
    programOutputsHeadline: "مخرجات البرنامج",
    programOutputsText:
      "نشر الأعمال المتميزة للمتدربين في عدد خاص من نشرة سياق الثقافية الصادرة عن الجمعية السعودية للأدب المقارن. ",
    committeeHeadline: "اللجنة الاستشارية للبرنامج: ",
    committeeMembers: [
      {
        name: "أ.د. سعد بن عبد الرحمن البازعي",
        image: baz3i.src,
      },
      {
        name: "أ. د. محمد الشحات عبد المجيد",
        image: mhd.src,
      },
      {
        name: "د. رانية محمد العرضاوي",
        image: rania.src,
      },
    ],
    trainersTeamHeadline: "فريق المدربين وكتاب الحقائب التدريبية:",
    trainersTeam: [
      {
        image: mhd.src,
        name: "أ. د. محمد الشحات عبدالمجيد",
      },
      {
        image: salehZ.src,
        name: "د. صالح الزهراني",
      },
      {
        image: abdul.src,
        name: "د. عبدالله العقيبي",
      },
      {
        image: logo.src,
        name: "أ. بثينة محمد الجرب",
        noBg: true,
      },
      {
        image: amani.src,
        name: "د. أماني أبو رحمة",
      },
      {
        image: ali.src,
        name: "د. علي النهابي",
      },
      {
        image: rania.src,
        name: "د. رانية العرضاوي",
      },
      {
        image: jaber.src,
        name: "د. مصعب باجابر ",
      },
      {
        image: adel.src,
        name: "أ.د. عادل الزهراني ",
      },
    ],
    reviewersHeadline: "فريق البرنامج:",
    reviewers: [
      "د. ماجد العنزي",
      "أ. د. علاء الغامدي",
      // "د. أماني أبو رحمة",
      "د. رانية العرضاوي",
      "د. سارة العتيبي",
      "د. سماهر الضامن",
      "د. إبراهيم الفريح",
      "أ. حسين إسماعيل",
      "أ. نورة السبيعي",
      "أ. إبراهيم الثاني",
    ],
    cretiqueClerksHeadline: " كتاب النماذج النقدية: ",
    cretiqueClerks: [
      "أ. د. بسمة عروس",
      // "د. مرفت العرضاوي",
      "د. أمل السعيدي",
      "أ. عبدالله التويجري",
      "د. عبدالله العقيبي",
      "د. در صاف الحمداني",
    ],
    profileClerksHeadline: "كتاب الملفات التعريفية: ",
    profileClerks: [
      "أ. محمد الحرز ",
      "د. رانية العرضاوي",
      "د. زكية العتيبي",
      "د. حصة المفرح",
      "أ. محمد الماجد",
      "أ. خالد ربيع السيد",
      "أ. عبدالله الدحيلان",
    ],
    faqsHeadline: "الأسئلة الشائعة",
    faqs: [
      {
        question: "لماذا برنامج ناقد؟ ",
        answer:
          "يُعد البرنامج الأول من نوعه في المملكة العربية السعودية لدعم حركة النقد والتحليل الإبداعي وتنمية مهارات التعامل مع الأعمال الإبداعية، ويوفر فرصة اللقاء والحوار بين المبدعين والنقاد، وهو أول برنامج نقدي مدعوم من وزارة الثقافة ممثلة بهيئة الأدب والنشر والترجمة. ",
      },
      {
        question: "كيف سينفذ البرنامج؟ ",
        answer: "البرنامج حضوري بالكامل",
      },
      {
        question: "أين سيقام البرنامج؟ ",
        answer:
          "في مقر الجمعية السعودية للأدب المقارن بجامعة الملك سعود، الرياض. ",
      },
      {
        question: "هل يمكن حضور محور واحد أو عدد مختار من المحاور؟ ",
        answer:
          "يمكن للمتدربين اختيار محور واحد أو عدد مختار من المحاور، إلا أن شهادة إتمام البرنامج تستوجب حضور جلسات البرنامج جميعها. ",
      },
      {
        question: "كم رسوم الانضمام للبرنامج؟ ",
        answer: "البرنامج مجاني بالكامل ",
      },
      {
        question: "هل أنا مؤهل للتسجيل في البرنامج؟ ",
        answer:
          "يستهدف البرنامج المهتمين بالدراسات النقدية من المختصين وغير المختصين بشرط وجود مشروع نقدي يُطور أثناء البرنامج، وسيُتواصل مع المتقدمين جميعهم للتأكد من أهليتهم للبرنامج. ",
      },
      {
        question: "هل سأحصل على شهادة في نهاية البرنامج؟ ",
        answer:
          "سيحصل المتدربون على شهادة حضور لكل محور، وشهادة إتمام لمن يُكمل البرنامج ",
      },
      {
        question: "من المشاركون في تنفيذ البرنامج؟ ",
        answer: "مجموعة من المتخصصين والنقاد والمبدعين من المملكة وخارجها",
      },
      {
        question: "كيف أتواصل مع فريق البرنامج؟ ",
        answer: `
        <a href="tel:+966114679968">
         رقم الهاتف: <span style='direction:rtl;'>9968 467 11 966+ </span>
         </a>
         <br />
         <a href="mailto:naqid@scl.sa"> 
         البريد الإلكتروني: naqid@scl.sa
         </a>
        `,
      },
    ],
  };

  return {
    props: { homepageData },
  };
};
