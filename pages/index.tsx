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

export default function Home({
  homepageData,
}: {
  homepageData: HomepageProps;
}) {
  return (
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
      <motion.div
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
      </motion.div>
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
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  let homepageData: HomepageProps = {
    landingImage: landingImage.src,
    landingSupportingText: "ناقد: برنامج التدريب المكثف في النقد الأدبي",
    aboutUsText:
      "يركز هذا البرنامج على عرض وتقديم النقد الأدبي ومهاراته للمهتمين من المتخصصين وغير المتخصصين، كما يسعى إلى نشر ثقافة النقد والتحليل الفني للنصوص والأعمال الفنية من خلال المحاور التالية: ",
    aboutUsSections: [
      "إبراز أهمية الممارسة النقدية والوقوف على تحيزات النقد",
      "طبيق آليات الكتابة النقدية والتحليل.",
      "التدريب على اختيار الموضوعات والقضايا النقدية. ",
      "تقديم تاريخ النقد الأدبي، وعدة الناقد، واستراتيجيات القراءة النقدية.",
      "تأسيس لثقافة الفكر الناقد وتعميمه كممارسة يومية مستمرة. ",
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
      "يبدأ البرنامج بتاريخ من ٩ يوليو وينتهي بتاريخ ٣ أغسطس 2023م، ويفتتح بمحاضرة عامة بتاريخ 6 يوليو 2023م.",
    agendaDetails: [
      {
        title: "الإعلان عن بدء التسجيل",
        days: "1 يونيو",
      },
      {
        title: "المحور الأول للبرنامج (ماهو النقد؟)",
        days: "9-10 يوليو",
      },
      {
        title: "المحور الثاني للبرنامج (من هو الناقد؟)",
        days: "12-13 يوليو",
      },
      {
        title: "المحور الثالث للبرنامج  (كيف يقرأ الناقد؟ )",
        days: "16-17 يوليو",
      },
      {
        title: "المحور  الرابع للبرنامج (أين ذهب النقد؟)",
        days: "19-20 يوليو",
      },
      {
        title: "المحور الخامس للبرنامج (أين ذهب النقد؟ )",
        days: "23-24 يوليو",
      },
      {
        title: " المحور السادس للبرنامج ( لقاءات النقاد والمبدعين)",
        days: "26-27 يوليو",
      },
      {
        title: "المحور السابع للبرنامج (ورش عمل تطبيقية)",
        days: "30- 31 يوليو",
      },
      {
        title: "المحور الثامن للبرنامج (مراجعة المشاريع النقدية)",
        days: "2-3 أغسطس",
      },
      {
        title: "(نشر المشاريع النقدية في نشرة خاصة)",
        days: "20 أغسطس",
      },
    ],
    conditionsHeadline: "شروط التسجيل في البرنامج:",
    conditions: [
      "استكمال نموذج التسجيل بكافة البيانات المطلوبة",
      "الموافقة على الشروط والأحكام.",
      "إرفاق السيرة الذاتية للمتقدم.",
      "أرفاق المتقدم لخطاب الغرض من الانضمام للبرنامج، يوضح فيه فكرة المشروع النقدي الذي يخطط المتقدم للعمل عليها خلال البرنامج",
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
        whiteIcon: icon1.src,
        title: "المحور الأول",
        subTitle: "ما هو النقد؟",
        brief:
          "يركز المحور الأول من هذا البرنامج على مناقشة أسئلة النقد الملحة ومشكلاته، والعلاقة بين النقد والتخصصات المتداخلة به، ويستعرض تاريخ النقد كتخصص أكاديمي.",
      },
      {
        icon: icon2.src,
        whiteIcon: icon2.src,
        title: "المحور الثاني",
        subTitle: "من هو الناقد؟",
        brief:
          "يركز هذا المحور من البرنامج على مناقشة عقدة النقد وأدواته من المهارات اللغوية والتفكير الناقد والتأسيس المعرفي.",
      },
      {
        icon: icon3.src,
        whiteIcon: icon3.src,
        title: "المحور الثالث",
        subTitle: "كيف يقرأ الناقد؟ ",
        brief:
          "يركز هذا المحور من البرنامج على مناقشة التحيزات النقدية والقراءات بعدسات نقدية معينة: (الذات والنص، دراسات المرأة، الاقتصاد والنص، المجتمع والنص، التاريخ والنص، اللغة والنص، والقومية والنص). ",
      },
      {
        icon: icon4.src,
        whiteIcon: icon4.src,
        title: "المحور الرابع",
        subTitle: "أين ذهب النقد؟ ",
        brief:
          "تناقش جلسات هذا المحور الحداثة وامتداداتها من منظور نقدي، وكذلك سياقات ما بعد الحداثة، والوضع الراهن للحركة النقدية (ما بعد النقد)، النقد والبيئة، ما بعد الإنسانية، الإنسانيات الرقمية، الديستوبيا. ",
      },
      {
        icon: icon5.src,
        whiteIcon: icon5.src,
        title: "المحور الخامس",
        subTitle: "ما هو مشروعك النقدي؟ ",
        brief:
          "تركز جلسات هذا المحور على دراسات حالات نقدية وتحليلها، بهدف الوصول إلى تصور عن اهتمامات المتدربين النقدية من خلال حلقات نقاش متخصصة. ",
      },
      {
        icon: icon6.src,
        whiteIcon: icon6.src,
        title: "المحور السادس",
        subTitle: "لقاءات بنقاد ومبدعين",
        brief:
          "تنظم في جلسات هذا المحور لقاءات مع نقاد متخصصين وكتاب مبدعين وفنانين من كافة المجالات لاستعراض وجهات النظر المختلفة حول العمل الأدبي/الفني واستقباله نقدياً.",
      },
      {
        icon: icon7.src,
        whiteIcon: icon7.src,
        title: "المحور السابع",
        subTitle: "ورش عمل تطبيقية",
        brief:
          "تركز ورش العمل في هذا المحور على تحليل مسودات المشاريع النقدية المقدمة من قبل المتدربين، وتقديم ملاحظات متخصصة وخطة لتطوير تلك المشاريع إلى أعمال نقدية قابلة للنشر. ",
      },
      {
        icon: icon8.src,
        whiteIcon: icon8.src,
        title: "المحور الثامن",
        subTitle: "مراجعة المشاريع النقدية ",
        brief:
          "تركز جلسات هذا المحور على مراجعة المشاريع النقدية النهائية للمتدربين ووضع اللمسات الأخيرة عليها وتحديد الجاهز منها للنشر وتاريخ النشر المتوقع، بالإضافة إلى تعيين متخصص يعمل مع المتدربين للوصول إلى ذلك الهدف.",
      },
    ],
    programOutputsHeadline: "مخرجات البرنامج",
    programOutputsText:
      "نشر الأعمال المتميزة للمتدربين في عدد خاص من نشرة سياق الثقافية الصادرة عن الجمعية السعودية للأدب المقارن. ",
    committeeHeadline: "اللجنة الاستشارية للبرنامج: ",
    committeeMembers: [
      {
        name: "أ.د. سعد بن عبد الرحمن البازعي",
        image: personImage.src,
      },
      {
        name: "أ. د. محمد الشحات عبد المجيد",
        image: personImage.src,
      },
      {
        name: "د. رانية محمد العرضاوي",
        image: personImage.src,
      },
    ],
    trainersTeamHeadline: "فريق البرنامج من المدربين :",
    trainersTeam: [
      {
        image: personImage.src,
        name: "أ. د. محمد الشحات عبدالمجيد",
      },
      {
        image: personImage.src,
        name: "د. صالح الزهراني",
      },
      {
        image: personImage.src,
        name: "د. عبدالله العقيبي",
      },
      {
        image: personImage.src,
        name: "أ. بثينة محمد الجرب",
      },
      {
        image: personImage.src,
        name: "د. أماني أبو رحمة",
      },
      {
        image: personImage.src,
        name: "د. علي النهابي",
      },
      {
        image: personImage.src,
        name: "د. رانية العرضاوي",
      },
      {
        image: personImage.src,
        name: "د. مصعب باجابر ",
      },
      {
        image: personImage.src,
        name: "د. عادل الزهراني ",
      },
    ],
    reviewersHeadline: "فريق البرنامج من المراجعين :",
    reviewers: [
      "د. ماجد العنزي",
      "أ. د. علاء الغامدي",
      "د. أماني أبو رحمة",
      "د. رانية العرضاوي",
      "د. سارة العتيبي",
      "د. سماهر الضامن",
      "د. إبراهيم الفريح",
      "أ. حسين إسماعيل",
      "أ. نورة السبيعي",
      "أ. إبراهيم الثاني",
    ],
    cretiqueClerksHeadline: "المستكتبون للنماذج النقدية: ",
    cretiqueClerks: [
      "أ. د. بسمة عروس",
      "د. مرفت العرضاوي",
      "د. أمل السعيدي",
      "أ. عبدالله التويجري",
      "د. عبدالله العقيبي",
      "د. در صاف الحمداني",
    ],
    profileClerksHeadline: "المستكتبون للملفات التعريفية: ",
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
          "يعتبر البرنامج الأول من نوعه في المملكة العربية السعودية لدعم حركة النقد والتحليل الإبداعي وتنمية مهارات التعامل مع الأعمال الإبداعية، وبوفر فرصة اللقاء والحوار بين المبدعين والنقاد، وهو أول برنامج نقدي مدعوم من قبل وزارة الثقافة ممثلة بهيئة الأدب والترجمة والنقد. ",
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
          "يمكن للمتدربين اختيار محور واحد أو عدد مختار من المحاور، إلا أن شهادة إتمام البرنامج تستوجب حضور جميع جلسات البرنامج. ",
      },
      {
        question: "كم رسوم الانضمام للبرنامج؟ ",
        answer: "البرنامج مجاني بالكامل ",
      },
      {
        question: "هل أنا مؤهل للتسجيل في البرنامج؟ ",
        answer:
          "يستهدف البرنامج المهتمين بالدراسات النقدية من المختصين وغير المختصين بشرط وجود مشروع نقدي يتم تطويره أثناء البرنامج، وسيتم التواصل مع جميع المتقدمين للتأكد من أهليتهم للبرنامج. ",
      },
      {
        question: "هل سأحصل على شهادة في نهاية البرنامج؟ ",
        answer:
          "سيحصل المتدربون على شهادة حضور لكل محور، وشهادة إتمام لمن يتم البرنامج كاملا ",
      },
      {
        question: "من هم المشاركون في تنفيذ البرنامج؟ ",
        answer:
          "مجموعة من المتخصصين والنقاد والمبدعين من المملكة وخارجها (رابط فريق البرنامج)",
      },
      {
        question: "كيف اتواصل مع فريق البرنامج؟ ",
        answer: "معلومات التواصل ورقم الهاتف ",
      },
    ],
  };

  return {
    props: { homepageData },
  };
};
