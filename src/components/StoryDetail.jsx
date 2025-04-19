import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Check, BookOpen, Book, BookText } from 'lucide-react';

const StoryDetail = ({ isDarkMode, glassmorphismClass }) => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  // Handle copying answers to clipboard
  const handleCopyAnswer = (answer, index) => {
    navigator.clipboard.writeText(answer)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  // Hard-coded stories data with direct questions and answers
  useEffect(() => {
    // Simulating data fetch with setTimeout
    setTimeout(() => {
      const storiesData = {
        "10": {
          id: "1",
          title: "दो कलाकार",
          author: "मन्नू भंडारी",
          coverImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          description: "कला, सृजन और कलाकारों के आंतरिक संघर्ष पर प्रकाश डालती एक प्रेरणादायक कहानी।",
          questions: [
            {
              id: "q1-1",
              question: "(क) 'अरे, यह क्या ?' - वाक्य का वक्ता और श्रोता कौन है? उपर्युक्त कथन का संदर्भ सपष्ट कीजिए।",
              answer: "उत्तर : वाक्य का वक्ता अरुणा है तथा श्रोता चित्रा है। चित्रा सो रही अरुणा को उठाकर अपने द्वारा बनाया गया चित्र दिखा रही है। चित्र देखकर अरुणा को कुछ समझ में नहीं आया कि चित्र में क्या बनाया गया है।"
            },
            {
              id: "q1-2",
              question: "(ख) चित्र को चारों ओर घुमाते हुए वक्ता ने श्रीता को चित्रों के संबंध में क्या सुझाव दिया था ?",
              answer: "उत्तर: चित्र को चारों ओर घुमाते हुए अरुणा ने चित्रा को सुझाव दिया कि जब भी वह चित्र बनाए, तो उस पर नाम लिख दिया करे, जिससे कि गलतफहमी न हो। तस्वीर को ध्यान से देखते हुए अरुणा बोली कि उसे कुछ भी समझ में नहीं आ रहा है कि चौरासी लाख योनियों में से आखिर यह किस जीव की तस्वीर है?"
            },
            {
              id: "q1-3",
              question: "(ग) 'खिचड़ी पकाकर' और 'चक्कर' शब्दों का आशय स्पष्ट करते हुए बताइए कि इनका प्रयोग किस संदर्भ में किया गया है और क्यों ?",
              answer: "उत्तर: 'खिचड़ी पकाकर' का अर्थ है - कुछ भी स्पष्ट न होना अर्थात सब कुछ मिला हुआ होना। 'चक्कर' शब्द का अर्थ है - चक्कर में डालना वाला। अर्थात चित्र बनाए गए चित्र में सड़क, आदमी, पशु, बस, मोटर, मकान आदि सब एक-दूसरे से मिले हुए थे, ऐसे लगता था कि खिचड़ी पकी हुई हो। यह तस्वीर चक्कर में डालने वाली थी। इन शब्दों का प्रयोग इसलिए किया गया है क्योंकि चित्रा द्वारा बनाया गया चित्र 'कम्पूजन' का प्रतीक था।"
            },
            {
              id: "q1-4",
              question: "(घ) श्रीता ने अपने चित्र को किसका प्रतीक बताया? वक्ता ने उसकी खिल्ली किस प्रकार उड़ाई?",
              answer: "उत्तर: चित्रा ने अपने चित्र को आज की दुनिया में कंफ्यूजन का प्रतीक बताया परंतु अरुणा ने चित्रा को बेवकूफी का प्रतीक बताया।"
            },
            {
              id: "q1-5",
              question: "(क) वक्ता को किसकी कला निरर्थक लगी थी और क्यों?",
              answer: "उत्तर: अरुणा को चित्रा की कला निरर्थक लगती थी क्योंकि उसके अनुसार ऐसी कला किस काम की, जो आदमी को आदमी न रहने दे। ऐसी कला निरर्थक होती है।"
            },
            {
              id: "q1-6",
              question: "(ख) वक्ता ने उसकी कला पर व्यंग्य करते हुए क्या कहा और उसे क्या सलाह दी?",
              answer: "उत्तर: वक्ता अर्थात अरुणा ने चित्रा से कहा कि तुझे दुनिया से कोई मतलब नहीं, तू बस चौबीस घंटे अपने रंग और तूलिकाओं में डूबी रहती है। दुनिया में कुछ घट रहा है, पर तुझे उससे तेरे चित्रों की चिंता है। तेरे लिए वह घटना कोई महत्व नहीं रखती क्योंकि तू अपने बनाए मॉडल खोजती है। वह यह स्पष्ट करती है, शायद है, कि कागज पर सुंदर चित्रों को बनाने की बजाय दो-चार की जिंदगी क्यों नहीं बदल देती।"
            },
            {
              id: "q1-7",
              question: "(ग) वक्ता की बात पर श्रीता ने क्या प्रतिक्रिया व्यक्त की और क्यों?",
              answer: "उत्तर: अरुणा की बात सुनकर चित्रा को मानो दर्द का काँटा सा उसके दिल को चुभ गया। जब वह विदेश चली जाएगी तो जल्दी से सारी दुनिया का कल्याण करने के लिए झंडा लेकर निकल पड़ेगी। चित्रा जानती थी कि अरुणा के जीवन का उद्देश्य समाज के उपेक्षित और असहाय वर्ग की सेवा करना है। उसने भी अपने चित्रों के माध्यम से दुनिया को बेहतर बनाना चाहा।"
            },
            {
              id: "q1-8",
              question: "(घ) आपके अनुसार सच्ची कला की क्या पहचान है?",
              answer: "उत्तर: हमारे अनुसार जो कला जीवन को महत्व न दे, वह कला नहीं है। कला और कलाकार वही सार्थक है, जो अरुणा की तरह संवेदना से भरा हो। चित्रा जैसी भावनात्मक कलाकार मानवता के लिए व्यर्थ है।"
            },
            {
              id: "q1-9",
              question: "(क) वक्ता और श्रीता का परिचय दीजिए।",
              answer: "उत्तर: वक्ता चित्रा है। वह एक धर्मी पिता की इकलौती बेटी है। चित्र बनाना ही उसका एकमात्र शौक है। उसमें भावुकता और संवेदनशीलता नाममात्र की है। श्रीता अरुणा है। वह चित्रा की सहेली और सहभाविनी है। उसके जीवन का उद्देश्य समाज के निर्धन, असहाय और शोषित वर्ग को ऊंचे जीवन की बेहतर मंज़िल बनाना है।"
            },
            {
              id: "q1-10",
              question: "(ख) 'वह काम' से वक्ता का संकेत किस ओर है? वक्ता और श्रीता में अपने-अपने कामों को लेकर किस प्रकार की नोंक-झोंक चलती रहती है?",
              answer: "उत्तर: 'वह काम' का तात्पर्य अरुणा द्वारा समाज के निर्धन, असहाय और शोषित वर्ग की सहायता करना है। चित्रा का एकमात्र शौक चित्र बनाना है, जबकि अरुणा भावुक और संवेदनशीलता से भरी थी। इसी कारण वह समाज-सेवा के कार्यों में व्यस्त रहना बेहतर कार्य समझती थी।"
            },

            {
              id: "q1-11",
              question: "(ग) वक्ता कहाँ जा रही थी और क्यों?",
              answer: "उत्तर: चित्रा विदेश जा रही थी। वह चित्रकला के संबंध में विदेश जा रही थी।"
            },
            {
              id: "q1-12",
              question: "(घ) 'वक्ता और श्रीता के जीवन उद्देश्यों में अंतर होते हुए भी उनमें घनिष्ठ मित्रता थी' स्पष्ट कीजिए।",
              answer: "उत्तर: अरुणा और चित्रा के जीवन उद्देश्यों और विचारों में भिन्नता होते हुए भी वे एक-दूसरे से प्यार करती थीं। सारा हॉस्टल इन दोनों की मित्रता को ईर्ष्या की नजर से देखता था। अरुणा अवसर चित्रा को डाँट देती थी, पर चित्रा को कभी इस बात का बुरा नहीं लगता। विदा लेते समय वह अरुणा की आँसू-भरी आँखों को ही ढूँढ रही थी।"
            },
            {
              id: "q1-13",
              question: "(क) 'कहा तो मेरे' - वाक्य का सन्दर्भ स्पष्ट कीजिए।",
              answer: "उत्तर: तीन वर्ष बाद जब चित्रा भारत लौटी, तो अखबारों में उसकी कला पर अनेक लेख छपे। दिल्ली में उसके चित्रों की प्रदर्शनी का आयोजन किया गया। उस प्रदर्शनी में चित्रा की भेंट अरुणा से हो गई। उसके साथ दो प्यारे से बच्चे– दस साल का लड़का और कोई आठ साल की लड़की देखकर चित्रा ने पूछा कि ये बच्चे किसके हैं, तब अरुणा ने कहा कि वे मेरे बच्चे हैं।"
            },
            {
              id: "q1-14",
              question: "(ख) 'मुझे ही बेवकूफ बनाने चली है' - वाक्य का सन्दर्भ स्पष्ट करते हुए बताइए कि वक्ता को श्रीता की किस बात का विश्वास नहीं हुआ और क्यों?",
              answer: "उत्तर: बच्चों को देखकर जब चित्रा ने कहा कि ये बच्चे उसके अपने हैं, तो चित्रा को अरुणा की बात पर विश्वास नहीं हुआ क्योंकि उसे पता था कि समाज सेवा में अपने आपको समर्पित देने वाली अरुणा कभी भी पारिवारिक जीवन नहीं जी सकती।"
            },

            {
              id: "q1-14",
              question: "(ग) अरुणा की कौन-सी बात सुनकर चित्रा की आँखें कैसी हो गईं?",
              answer: "उत्तर: जब अरुणा ने कहा आए बच्चों को बता दें कि जब चित्रा ने बालकालपन बताया, तब वह अरुणा ने बताया कि वे दोनों उसकी रक्षिता हैं, जिसकी माँ के मरने के बाद अरुणा ने उन्हें अपने बच्चे मानकर पाला। यह सुनकर चित्रा आँखें भर आईं।"
            },
            {
              id: "q1-15",
              question: "(घ) चित्रा को किस चित्र से प्रसिद्धि मिली थी? चित्र का संक्षिप्त परिचय दीजिए।",
              answer: "उत्तर: चित्रा को विधवा स्त्रियों और दो अनाथ बच्चों के चित्र से प्रसिद्धि मिली थी। अनेक प्रतियोगिताओं में उसका ‘अनाथ’ शीर्षक वाला चित्र प्रथम पुरस्कार पा चुका था। विदेश जाने से पहले चित्रा अपने गुरुओं से आशीर्वाद लेकर लौट रही थी, तो मार्ग में उसने देखा कि एक पेड़ के नीचे एक विधवा स्त्री मरी पड़ी है और उसके दोनों छोटे बच्चे उसके शरीर से चिपककर बुरी तरह से रो रहे हैं।उसी दृश्य से प्रेरित होकर उसने उनका एक रफ-सा स्केच बना डाला था। विदेश में जाकर उसने एक चित्र में उसी स्केच के आधार पर विधवा स्त्री और उसके दो बच्चों को चित्रित किया था, जिससे उसे प्रसिद्धि मिली थी।"
            }

          ]
        },
        "11": {
          id: "2",
          title: "Ramayana",
          author: "Valmiki",
          coverImage: "https://source.unsplash.com/random/300x200/?epic,india",
          description: "The Ramayana is one of the largest ancient epics in world literature. It consists of nearly 24,000 verses, divided into seven books and about 500 chapters telling the story of Rama, whose wife Sita is abducted by the demon king of Lanka, Ravana.",
          questions: [
            {
              id: "q2-1",
              question: "Who wrote the original Ramayana?",
              answer: "The original Ramayana was composed by the sage Valmiki, who is known as the 'adikavi' or first poet of Sanskrit literature. Legend says that Valmiki was inspired to compose the epic after witnessing the grief of a female bird when her mate was killed by a hunter."
            },
            {
              id: "q2-2",
              question: "What are the seven kandas (books) of the Ramayana?",
              answer: "The seven kandas (books) of the Ramayana are: 1) Bala Kanda (Book of Youth), 2) Ayodhya Kanda (Book of Ayodhya), 3) Aranya Kanda (Book of the Forest), 4) Kishkindha Kanda (Book of Kishkindha), 5) Sundara Kanda (Book of Beauty), 6) Yuddha Kanda (Book of War), and 7) Uttara Kanda (Last Book)."
            },
            {
              id: "q2-3",
              question: "Why was Rama exiled to the forest for fourteen years?",
              answer: "Rama was exiled because his stepmother Kaikeyi asked King Dasharatha to fulfill two boons he had promised her earlier. She asked that her son Bharata be crowned king instead of Rama, and that Rama be exiled to the forest for fourteen years. Bound by his promise, the heartbroken king had to comply with her demands."
            },
            {
              id: "q2-4",
              question: "What role did Hanuman play in the Ramayana?",
              answer: "Hanuman played a crucial role in the Ramayana as Rama's devoted servant and ally. He helped find Sita after she was kidnapped by Ravana, carrying Rama's ring to her as proof of his coming. Hanuman also set Lanka on fire with his burning tail, fought valiantly in the war against Ravana's forces, and brought the life-saving Sanjeevani herb to revive Lakshmana when he was severely wounded."
            },
            {
              id: "q2-5",
              question: "What is the significance of the Lakshman Rekha in the Ramayana?",
              answer: "The Lakshman Rekha (Line of Lakshman) was a protective boundary drawn by Lakshmana around Sita's hut when he had to leave her temporarily. He instructed her not to cross this line for any reason. When the disguised Ravana came as a sage asking for alms, Sita crossed the line to offer him food, enabling him to kidnap her. This symbolizes the consequences of transgressing established boundaries and protective measures."
            }
          ]
        },
        "12": {
          id: "3",
          title: "Mahabharata",
          author: "Ved Vyasa",
          coverImage: "https://source.unsplash.com/random/300x200/?war,ancient",
          description: "The Mahabharata is one of the two major Sanskrit epics of ancient India, the other being the Ramayana. It narrates the struggle between two groups of cousins in the Kurukshetra War and the fates of the Kaurava and the Pandava princes and their successors.",
          questions: [
            {
              id: "q3-1",
              question: "Who compiled the Mahabharata?",
              answer: "The Mahabharata was compiled by Sage Ved Vyasa (also known as Krishna Dwaipayana), who is also a character in the epic. According to tradition, Lord Ganesha served as the scribe who wrote down the epic as Vyasa dictated it."
            },
            {
              id: "q3-2",
              question: "What is the Bhagavad Gita and how does it relate to the Mahabharata?",
              answer: "The Bhagavad Gita is a 700-verse Hindu scripture that is part of the Mahabharata, appearing in the Bhishma Parva chapter. It records the conversation between Arjuna and Lord Krishna on the battlefield of Kurukshetra just before the start of the war. Krishna provides philosophical guidance to the conflicted Arjuna about duty (dharma) and righteous action, covering topics of ethics, metaphysical truths, and spiritual realization."
            },
            {
              id: "q3-3",
              question: "What was the cause of the Kurukshetra War in the Mahabharata?",
              answer: "The primary cause of the Kurukshetra War was the dispute over the throne of Hastinapura between the Kauravas (led by Duryodhana) and the Pandavas (led by Yudhishthira). After the Pandavas completed their exile and period of hiding, Duryodhana refused to return their rightful share of the kingdom. Krishna's attempts at peace negotiations failed, as Duryodhana was unwilling to compromise, ultimately leading to the devastating war."
            },
            {
              id: "q3-4",
              question: "What is the significance of Draupadi's vastraharan (disrobing) episode?",
              answer: "Draupadi's vastraharan (disrobing) is a pivotal episode that occurs after she is lost by Yudhishthira in a game of dice to the Kauravas. When Dushasana attempts to disrobe her in the royal court, she prays to Lord Krishna who miraculously provides her with an endless saree, preventing her humiliation. This event signifies the ultimate adharma (unrighteousness) of the Kauravas, becomes a key motivation for the Pandavas to seek justice, and is seen as one of the main reasons for the eventual destruction of the Kuru dynasty."
            },
            {
              id: "q3-5",
              question: "Who was Karna and what makes his character tragic?",
              answer: "Karna was the son of Kunti (before her marriage) and the sun god Surya, making him the elder half-brother of the Pandavas, though this fact remained unknown to most until the end. His tragedy stems from multiple factors: being abandoned at birth, facing discrimination as a perceived lower-caste person despite his skills, unknowingly fighting against his own brothers, maintaining loyalty to Duryodhana who accepted him when others rejected him, and ultimately dying at the hands of Arjuna without recognition of his true identity and nobility."
            }
          ]
        }
      };

      const selectedStory = storiesData[storyId];
      if (selectedStory) {
        setStory(selectedStory);
      } else {
        // If story not found, navigate back to stories page
        navigate('/stories');
      }
      setLoading(false);
    }, 800);
  }, [storyId, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className={`${textClass} text-center`}>
          <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-700 border-l-blue-600 border-r-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Loading story...</p>
        </div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className={`container mx-auto px-4 py-8 text-center ${textClass}`}>
        <p>Story not found. Redirecting...</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="container mx-auto px-4 py-8 mb-20 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Fixed persistent background gradients */}
      <div className="fixed top-0 left-0 w-full h-full -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[15%] w-[30vw] h-[30vw] rounded-full bg-blue-500/30 blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[25vw] h-[25vw] rounded-full bg-purple-500/30 blur-[100px] opacity-60"></div>
        <div className="absolute top-[40%] right-[20%] w-[20vw] h-[20vw] rounded-full bg-pink-500/30 blur-[100px] opacity-60"></div>
      </div>

      {/* Back button */}
      <motion.button
        onClick={() => navigate('/stories')}
        className={`flex items-center space-x-2 mb-6 px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700/80 text-white' : 'bg-white/80 hover:bg-gray-100/80 text-gray-800'} transition duration-300 backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} shadow-md`}
        variants={itemVariants}
      >
        <ArrowLeft size={18} />
        <span>Back to Stories</span>
      </motion.button>

      {/* Page Header with enhanced glassmorphism */}
      <motion.div className="text-center mb-8 relative z-20" variants={itemVariants}>
        <motion.span 
          className="px-4 py-2 rounded-full bg-primary-500/30 backdrop-blur-xl text-primary-500 text-sm font-medium inline-block mb-4 shadow-sm border border-primary-500/30"
        >
          ICSE Class 10 Hindi
        </motion.span>
      </motion.div>

      {/* Story header */}
      <motion.div 
        className={`${glassmorphismClass} rounded-2xl p-6 mb-10 shadow-xl relative overflow-hidden border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}
        variants={itemVariants}
      >
        {/* Background color gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-80 pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row md:items-center relative z-10">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <img 
              src={story.coverImage} 
              alt={story.title} 
              className="w-full h-48 object-cover rounded-xl shadow-lg border-2 border-white/20 transform transition-transform duration-500 hover:scale-105" 
            />
          </div>
          <div className="md:ml-8 md:w-3/4">
            <div className="flex items-center mb-2">
              <h1 className={`text-3xl md:text-4xl font-bold ${textClass}`}>
                {story.title}
              </h1>
              <span className="ml-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/30 backdrop-blur-xl text-primary-500 border border-primary-500/20 shadow-sm">
                {story.id}
              </span>
            </div>
            <p className={`text-lg ${secondaryTextClass} mb-3`}>
              by <span className="font-medium">{story.author}</span>
            </p>
            <div className={`mt-4 ${secondaryTextClass} p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/30'}`}>
              <p>{story.description}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Questions and Answers section */}
      <motion.div variants={itemVariants} className="mb-8 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold ${textClass} flex items-center`}>
            <BookOpen className="mr-3" size={24} />
            <span>Questions and Answers</span>
          </h2>
          <span className={`px-3 py-1 rounded-full ${isDarkMode ? 'bg-gray-800/70' : 'bg-white/70'} ${secondaryTextClass} text-sm backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/30'}`}>
            {story.questions.length} Questions
          </span>
        </div>
        
        <div className="space-y-6">
          {story.questions.map((qa, index) => (
            <motion.div 
              key={qa.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`${glassmorphismClass} p-6 rounded-xl shadow-lg border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} relative overflow-hidden`}
            >
              {/* Question number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-primary-500/20 backdrop-blur-sm text-primary-500 border border-primary-500/30 text-sm font-medium">
                {index + 1}
              </div>
              
              {/* Subtle background gradient based on question number */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                index % 3 === 0 ? 'from-blue-500/10 to-purple-500/10' :
                index % 3 === 1 ? 'from-purple-500/10 to-pink-500/10' :
                'from-pink-500/10 to-orange-500/10'
              } opacity-60 pointer-events-none`}></div>
              
              <div className="relative z-10">
                <h3 className={`text-xl font-semibold mb-4 pr-8 ${textClass} flex items-start`}>
                  <Book className="mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>{qa.question}</span>
                </h3>
                
                <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/30'}`}>
                  <div className={`flex items-start justify-between`}>
                    <p className={`${secondaryTextClass} pr-10 flex items-start`}>
                      <BookText className="mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{qa.answer}</span>
                    </p>
                    <button 
                      onClick={() => handleCopyAnswer(qa.answer, index)}
                      className={`p-3 rounded-full flex-shrink-0 transition duration-300 ${
                        copiedIndex === index 
                          ? (isDarkMode ? 'bg-green-700/80 text-green-200' : 'bg-green-500/80 text-white') 
                          : (isDarkMode ? 'bg-gray-800/70 text-gray-300 hover:bg-gray-700/70' : 'bg-white/70 text-gray-600 hover:bg-gray-100/70')
                      } shadow-md backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/30'}`}
                      title={copiedIndex === index ? "Copied!" : "Copy answer"}
                    >
                      {copiedIndex === index ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StoryDetail; 