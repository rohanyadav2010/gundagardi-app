import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Check, BookOpen, Book, BookText, Heart, Music } from 'lucide-react';

const PoemDetail = ({ isDarkMode, glassmorphismClass }) => {
  const { poemId } = useParams();
  const navigate = useNavigate();
  const [poem, setPoem] = useState(null);
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

  // Get gradient based on poem category
  const getCategoryGradient = (category) => {
    switch(category) {
      case 'भक्ति':
        return 'from-orange-500/20 to-yellow-600/20';
      case 'नीति':
        return 'from-indigo-500/20 to-blue-600/20';
      case 'राष्ट्रीय':
        return 'from-red-500/20 to-rose-600/20';
      case 'देशभक्ति':
        return 'from-orange-500/20 to-red-600/20';
      case 'प्रकृति':
        return 'from-green-500/20 to-emerald-600/20';
      case 'सामाजिक':
        return 'from-purple-500/20 to-violet-600/20';
      case 'बाल':
        return 'from-yellow-500/20 to-amber-600/20';
      case 'पारिवारिक':
        return 'from-pink-500/20 to-rose-600/20';
      default:
        return 'from-primary-500/20 to-primary-700/20';
    }
  };

  // Hard-coded poems data with questions and answers
  useEffect(() => {
    // Simulating data fetch with setTimeout
    setTimeout(() => {
      const poemsData = {
        "1": {
          id: "1",
          title: "साखी",
          author: "कबीर दास",
          fullText: "माला फेरत जुग भया, फिरा न मन का फेर।\nकर का मनका डारि दे, मन का मनका फेर॥\n\nदुःख में सुमिरन सब करें, सुख में करें न कोय।\nजो सुख में सुमिरन करें, दुःख काहे को होय॥\n\nकबीर कुत्ता राम का, मुतिया मेरा नांउ।\nगले राम की जेवड़ी, जित खैंचे तित जांउ॥",
          category: "भक्ति",
          likes: 342,
          coverImage: "https://source.unsplash.com/random/300x200/?prayer,spiritual",
          audioAvailable: true,
          description: "कबीर दास जी की साखियाँ भक्ति काल की अमूल्य धरोहर हैं। ये साखियाँ मानव जीवन के विभिन्न पहलुओं को स्पर्श करते हुए आत्म-चिंतन की ओर प्रेरित करती हैं। कबीर ने अपनी सरल और सीधी भाषा में जटिल दार्शनिक विचारों को भी सहज रूप से प्रस्तुत किया है।",
          questions: [
            {
              id: "q1-1",
              question: "कबीर ने 'माला फेरत जुग भया' साखी में क्या संदेश दिया है?",
              answer: "इस साखी में कबीर ने बाह्य आडंबरों और कर्मकांडों की निरर्थकता पर प्रकाश डाला है। उनका संदेश है कि केवल माला फेरने से ईश्वर की प्राप्ति नहीं हो सकती, जब तक मन का भाव शुद्ध न हो। कबीर कहते हैं कि लोग वर्षों से माला फेरते आ रहे हैं, लेकिन उनके मन में कोई परिवर्तन नहीं आया। वे सुझाते हैं कि हाथ की माला को छोड़कर मन के मनकों (विचारों) को नियंत्रित करना अधिक महत्वपूर्ण है।"
            },
            {
              id: "q1-2",
              question: "दुःख और सुख में ईश्वर स्मरण के संबंध में कबीर का क्या विचार है?",
              answer: "कबीर के अनुसार, अधिकतर लोग केवल दुःख में ही ईश्वर का स्मरण करते हैं, सुख में नहीं। वे इस प्रवृत्ति की आलोचना करते हुए कहते हैं कि यदि व्यक्ति सुख के समय भी ईश्वर का स्मरण करे, तो उसे दुःख का सामना ही नहीं करना पड़ेगा। कबीर का तात्पर्य है कि ईश्वर-स्मरण हर परिस्थिति में निरंतर होना चाहिए, न कि केवल संकट काल में।"
            },
            {
              id: "q1-3",
              question: "कबीर ने स्वयं को 'कुत्ता राम का' क्यों कहा है?",
              answer: "कबीर ने अपने आपको 'राम का कुत्ता' कहकर अपनी पूर्ण समर्पण भावना और ईश्वर के प्रति निष्ठा को व्यक्त किया है। जैसे कुत्ता अपने स्वामी के प्रति वफादार होता है और उसकी आज्ञा का पालन करता है, वैसे ही कबीर ईश्वर के प्रति पूर्ण समर्पित हैं। 'मुतिया मेरा नांउ' कहकर वे अपनी विनम्रता प्रकट करते हैं। 'गले राम की जेवड़ी, जित खैंचे तित जांउ' से उनका तात्पर्य है कि वे ईश्वर के अधीन हैं और जहां भी ईश्वर उन्हें ले जाना चाहे, वे तैयार हैं।"
            },
            {
              id: "q1-4",
              question: "कबीर की साखियों की भाषागत विशेषताएँ क्या हैं?",
              answer: "कबीर की साखियों की भाषा सधुक्कड़ी है, जो पूर्वी हिंदी, खड़ी बोली, ब्रज, राजस्थानी, पंजाबी और फारसी के शब्दों का मिश्रण है। उनकी भाषा में लोकोक्तियों और मुहावरों का प्रचुर प्रयोग मिलता है। वे जटिल दार्शनिक विचारों को भी सरल, सहज और सीधी भाषा में प्रस्तुत करते हैं, जिससे आम जनता भी उन्हें आसानी से समझ सके। उनकी साखियाँ छोटी होती हैं लेकिन गहरे अर्थ रखती हैं, जिससे वे लोगों के मन में सहजता से बस जाती हैं।"
            },
            {
              id: "q1-5",
              question: "कबीर के अनुसार सच्ची भक्ति क्या है?",
              answer: "कबीर के अनुसार, सच्ची भक्ति बाह्य आडंबरों, कर्मकांडों और धार्मिक अनुष्ठानों में नहीं, बल्कि आंतरिक शुद्धता और ईश्वर के प्रति सच्चे प्रेम में है। वे मानते हैं कि ईश्वर हर मनुष्य के हृदय में निवास करता है, और उसे बाहर खोजने की आवश्यकता नहीं है। कबीर के लिए, भक्ति का मार्ग सरल, सहज और प्रेम-आधारित है, जिसमें जाति-पाँति, धर्म-संप्रदाय का कोई भेदभाव नहीं होता। उनके अनुसार, सच्चा भक्त वह है जो सभी प्राणियों में ईश्वर का दर्शन करे और सभी के प्रति प्रेम और करुणा का भाव रखे।"
            }
          ]
        },
        "2": {
          id: "2",
          title: "गिरिधर की कुंडलिया",
          author: "गिरिधर कवि राय",
          fullText: "तरुवर फल नहिं खात है, सरवर पियत न पान।\nकहि गिरिधर कविराय यों, परमारथ के दान॥\nपरमारथ के दान से, बढ़त सकल कल्यान।\nज्यों जल सीचें मूल को, फूलै फलै जहान॥",
          category: "नीति",
          likes: 305,
          coverImage: "https://source.unsplash.com/random/300x200/?tree,water",
          audioAvailable: true,
          description: "गिरिधर कवि राय हिंदी साहित्य के प्रमुख कवियों में से एक हैं। इनकी प्रसिद्ध कुंडलिया में त्याग और परोपकार की महत्ता को दर्शाया गया है। गिरिधर कवि राय ने प्रकृति के माध्यम से मानव को सीख देने का प्रयास किया है।",
          questions: [
            {
              id: "q2-1",
              question: "गिरिधर कवि राय ने वृक्ष और सरोवर का उदाहरण देकर क्या सिखाया है?",
              answer: "गिरिधर कवि राय ने वृक्ष और सरोवर का उदाहरण देकर त्याग और परोपकार की महत्ता सिखाई है। कवि कहते हैं कि जैसे वृक्ष स्वयं अपने फल नहीं खाता और सरोवर अपना जल स्वयं नहीं पीता, वैसे ही मनुष्य को भी परोपकार के लिए जीना चाहिए। उनका संदेश है कि जीवन का वास्तविक उद्देश्य दूसरों की सेवा और कल्याण है, न कि स्वार्थपूर्ण जीवन जीना।"
            },
            {
              id: "q2-2",
              question: "'परमारथ के दान' से क्या तात्पर्य है और इसका क्या महत्व है?",
              answer: "'परमारथ के दान' से तात्पर्य है परोपकार या दूसरों की भलाई के लिए किया गया दान। गिरिधर कवि राय के अनुसार, ऐसे दान से न केवल प्राप्तकर्ता का कल्याण होता है, बल्कि समाज का समग्र कल्याण होता है। जैसे पेड़ की जड़ को पानी देने से पूरा पेड़ फूलता-फलता है, वैसे ही परोपकार के कार्य से समाज के सभी वर्गों का विकास होता है। परमार्थ के दान से व्यक्ति को आत्मिक संतोष मिलता है और समाज में सद्भाव और एकता का वातावरण बनता है।"
            },
            {
              id: "q2-3",
              question: "कुंडलिया छंद की विशेषताएँ क्या हैं और गिरिधर कवि राय ने इसका प्रयोग कैसे किया है?",
              answer: "कुंडलिया छंद में दोहा और रोला छंदों का मिश्रण होता है। इसमें छह पंक्तियाँ होती हैं, जिनमें पहली चार पंक्तियाँ दोहे की और अंतिम दो पंक्तियाँ रोला छंद की होती हैं। दोहे की अंतिम पंक्ति और रोले की पहली पंक्ति समान होती है, जिससे एक 'कुंडल' (घेरा) सा बन जाता है, इसीलिए इसे कुंडलिया कहते हैं। गिरिधर कवि राय ने इस छंद का प्रयोग बड़ी कुशलता से किया है। उन्होंने दोहे में वृक्ष और सरोवर का उदाहरण देकर परोपकार का संदेश दिया है, और फिर रोला में इसके महत्व को स्पष्ट किया है, जिससे संदेश प्रभावशाली और स्मरणीय बन गया है।"
            },
            {
              id: "q2-4",
              question: "गिरिधर कवि राय की भाषा-शैली की विशेषताएँ क्या हैं?",
              answer: "गिरिधर कवि राय की भाषा-शैली सरल, प्रवाहपूर्ण और प्रभावशाली है। वे प्राकृतिक उपमानों का प्रयोग करके जटिल नैतिक और दार्शनिक विचारों को आम जन के लिए सुलभ बनाते हैं। उनकी भाषा में ब्रज मिश्रित खड़ी बोली का प्रयोग मिलता है। उनकी शैली में लोकोक्तियों और मुहावरों का सटीक प्रयोग मिलता है, जिससे उनके विचार सीधे पाठक के मन में उतरते हैं। वे छोटे-छोटे वाक्यों में गहरे अर्थ भरने में माहिर हैं। उनकी कविता में अलंकारों का स्वाभाविक प्रयोग है, विशेषकर उपमा और दृष्टांत अलंकारों का।"
            },
            {
              id: "q2-5",
              question: "प्रस्तुत कुंडलिया में प्रकृति और मानव जीवन के बीच क्या संबंध स्थापित किया गया है?",
              answer: "प्रस्तुत कुंडलिया में, गिरिधर कवि राय ने प्रकृति और मानव जीवन के बीच एक महत्वपूर्ण संबंध स्थापित किया है। वे प्रकृति के तत्वों (वृक्ष और सरोवर) को मनुष्य के लिए आदर्श के रूप में प्रस्तुत करते हैं। जैसे प्रकृति निस्वार्थ भाव से दूसरों की सेवा करती है, वैसे ही मनुष्य को भी करना चाहिए। कवि ने यह भी दर्शाया है कि जैसे प्रकृति में सब एक-दूसरे पर निर्भर हैं और एक-दूसरे की सहायता करते हैं (जैसे जड़ को पानी देने से पूरा पेड़ फलता-फूलता है), वैसे ही मानव समाज में भी परस्पर सहयोग और परोपकार से ही सबका कल्याण होता है। इस प्रकार कवि ने प्रकृति को आदर्श मानकर मानव जीवन के लिए एक नैतिक मार्गदर्शन प्रस्तुत किया है।"
            }
          ]
        },
        "3": {
          id: "3",
          title: "स्वर्ग बना सकते है",
          author: "रामधारी सिंह दिनकर",
          fullText: "धरती जो अपना खून पचा सकती है\nवह अपने वक्ष पर स्वर्ग बना सकती है\nचीर कर सकती पृथ्वी को, अनल उगलती\nज्वाला मुखी उसके स्वर्ग में बाधा नहीं\nआलोकित हिमशिखर, खिला रविकमल\nवही स्वर्ग है, वही राष्ट्र कमल है,\nहम अपनी करामात से जिसे हिन्द कहते है\nवह धरती ये हैं, हम जिसे भारत कहते है।",
          category: "राष्ट्रीय",
          likes: 426,
          coverImage: "https://source.unsplash.com/random/300x200/?mountain,sky",
          audioAvailable: true,
          description: "रामधारी सिंह 'दिनकर' आधुनिक हिंदी कविता के प्रमुख स्तंभों में से एक हैं। उनकी कविताओं में देशभक्ति, राष्ट्रीय चेतना और सामाजिक न्याय का स्वर बुलंद रहता है। प्रस्तुत कविता में उन्होंने भारत की महानता और उसके स्वर्ग तुल्य होने का वर्णन किया है।",
          questions: [
            {
              id: "q3-1",
              question: "'धरती जो अपना खून पचा सकती है' से कवि का क्या आशय है?",
              answer: "इस पंक्ति में कवि भारतीय धरती की सहनशीलता और धैर्य का वर्णन कर रहे हैं। 'खून पचाना' मुहावरा है जिसका अर्थ है अत्याचार, कष्ट या दुःख को सहन करना। कवि कहते हैं कि भारत की धरती ने अनेक आक्रमणों, संघर्षों, प्राकृतिक आपदाओं और चुनौतियों को सहन किया है, फिर भी अपनी सभ्यता और संस्कृति को बनाए रखा है। यह क्षमता उसे विशेष बनाती है और स्वर्ग के समान महिमामंडित करती है।"
            },
            {
              id: "q3-2",
              question: "कवि ने भारत को 'स्वर्ग' क्यों कहा है?",
              answer: "कवि ने भारत को 'स्वर्ग' कहा है क्योंकि उनके अनुसार भारत की विशेषताएँ स्वर्ग के समान हैं - यहाँ की प्राकृतिक सुंदरता, विविधता, समृद्ध संस्कृति और आध्यात्मिक महत्व। 'आलोकित हिमशिखर, खिला रविकमल' पंक्ति में वे हिमालय की बर्फीली चोटियों और सूर्य की स्वर्णिम किरणों का उल्लेख करते हैं, जो भारत की प्राकृतिक सुंदरता को दर्शाता है। उनका मानना है कि भारत की धरती ने जो संघर्ष सहे हैं, उन्हीं के कारण वह और भी महान और दिव्य हो गई है - ठीक वैसे ही जैसे धरती के भीतर से निकलने वाली ज्वालामुखी, जो विनाश के बाद नई उर्वरता लाती है।"
            },
            {
              id: "q3-3",
              question: "कविता में 'राष्ट्र कमल' की क्या व्याख्या है?",
              answer: "'राष्ट्र कमल' रूपक है जिसमें कवि ने भारत राष्ट्र की तुलना कमल के फूल से की है। कमल कीचड़ में उगता है, लेकिन अपनी सुंदरता और पवित्रता बनाए रखता है। इसी प्रकार, भारत ने भी अनेक संकटों और चुनौतियों का सामना किया है, लेकिन अपनी संस्कृति, सभ्यता और गौरव को अक्षुण्ण रखा है। 'स्वर्ग' और 'राष्ट्र कमल' को समानार्थी बताकर कवि भारत की महानता और दिव्यता को रेखांकित करते हैं। यह रूपक राष्ट्रीय गौरव और अस्मिता का प्रतीक है।"
            },
            {
              id: "q3-4",
              question: "कविता में 'हम अपनी करामात से जिसे हिन्द कहते है' पंक्ति का क्या अर्थ है?",
              answer: "इस पंक्ति में कवि भारतीय जनमानस की सर्जनात्मक और सांस्कृतिक शक्ति का वर्णन करते हैं। 'करामात' शब्द चमत्कार या अद्भुत कार्य को सूचित करता है। कवि कहते हैं कि भारतीयों ने अपनी प्रतिभा, परिश्रम, वीरता, त्याग और बलिदान से इस देश को 'हिन्द' के रूप में विकसित और प्रतिष्ठित किया है। यह नाम मात्र नहीं, बल्कि एक महान सभ्यता और संस्कृति का प्रतीक है जो लोगों की अपनी 'करामात' (सर्जनात्मक शक्ति) का परिणाम है। यह पंक्ति राष्ट्रीय अस्मिता और स्वाभिमान को व्यक्त करती है।"
            },
            {
              id: "q3-5",
              question: "दिनकर जी की इस कविता में किस प्रकार के भाव और विचार प्रकट हुए हैं?",
              answer: "दिनकर जी की इस कविता में मुख्य रूप से राष्ट्रीय गौरव, स्वाभिमान और देशभक्ति के भाव प्रकट हुए हैं। कविता में भारत के प्रति अटूट प्रेम, उसकी महानता में विश्वास और उसके स्वर्णिम भविष्य की कामना दिखाई देती है। कवि ने भारत की विविधता, सहनशीलता और सौंदर्य को रेखांकित करते हुए उसे 'स्वर्ग' के समान बताया है। साथ ही, वे भारतीयों की सर्जनात्मक शक्ति और संघर्षों से उबरने की क्षमता की प्रशंसा करते हैं। कविता में आशावाद, दृढ़ संकल्प और राष्ट्रीय एकता का संदेश भी निहित है। दिनकर जी की भाषा ओजस्वी और प्रवाहपूर्ण है, जो पाठकों के मन में देशभक्ति का भाव जगाती है।"
            }
          ]
        }
      };
      
      // Set to include more poems as needed...

      const selectedPoem = poemsData[poemId];
      if (selectedPoem) {
        setPoem(selectedPoem);
      } else {
        // If poem not found, navigate back to poems page
        navigate('/poems');
      }
      setLoading(false);
    }, 800);
  }, [poemId, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className={`${textClass} text-center`}>
          <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-700 border-l-blue-600 border-r-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Loading poem...</p>
        </div>
      </div>
    );
  }

  if (!poem) {
    return (
      <div className={`container mx-auto px-4 py-8 text-center ${textClass}`}>
        <p>Poem not found. Redirecting...</p>
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
        <div className="absolute top-[5%] left-[15%] w-[30vw] h-[30vw] rounded-full bg-orange-500/30 blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[25vw] h-[25vw] rounded-full bg-purple-500/30 blur-[100px] opacity-60"></div>
        <div className="absolute top-[40%] right-[20%] w-[20vw] h-[20vw] rounded-full bg-indigo-500/30 blur-[100px] opacity-60"></div>
      </div>

      {/* Back button */}
      <motion.button
        onClick={() => navigate('/poems')}
        className={`flex items-center space-x-2 mb-6 px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700/80 text-white' : 'bg-white/80 hover:bg-gray-100/80 text-gray-800'} transition duration-300 backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} shadow-md`}
        variants={itemVariants}
      >
        <ArrowLeft size={18} />
        <span>Back to Poems</span>
      </motion.button>

      {/* Page Header with enhanced glassmorphism */}
      <motion.div className="text-center mb-8 relative z-20" variants={itemVariants}>
        <motion.span 
          className="px-4 py-2 rounded-full bg-primary-500/30 backdrop-blur-xl text-primary-500 text-sm font-medium inline-block mb-4 shadow-sm border border-primary-500/30"
        >
          ICSE Class 10 Hindi
        </motion.span>
      </motion.div>

      {/* Poem header */}
      <motion.div 
        className={`${glassmorphismClass} rounded-2xl p-6 mb-10 shadow-xl relative overflow-hidden border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}
        variants={itemVariants}
      >
        {/* Background color gradient based on poem category */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(poem.category)} opacity-80 pointer-events-none`}></div>
        
        <div className="flex flex-col md:flex-row md:items-center relative z-10">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <img 
              src={poem.coverImage} 
              alt={poem.title} 
              className="w-full h-48 object-cover rounded-xl shadow-lg border-2 border-white/20 transform transition-transform duration-500 hover:scale-105" 
            />
            <div className="mt-4 flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full ${isDarkMode ? 'bg-gray-800/70' : 'bg-white/70'} backdrop-blur-sm text-sm border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} ${secondaryTextClass}`}>
                  {poem.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Heart className={`h-4 w-4 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                  <span className={`text-sm ${secondaryTextClass}`}>{poem.likes}</span>
                </div>
              </div>
              {poem.audioAvailable && (
                <button 
                  className={`flex items-center justify-center space-x-2 py-2 px-4 rounded-lg ${isDarkMode ? 'bg-gray-800/70 hover:bg-gray-700/70' : 'bg-white/70 hover:bg-gray-100/70'} backdrop-blur-sm text-sm border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} transition duration-300`}
                >
                  <Music className={`h-4 w-4 ${isDarkMode ? 'text-amber-400' : 'text-amber-500'}`} />
                  <span className={textClass}>Listen to Poem</span>
                </button>
              )}
            </div>
          </div>
          <div className="md:ml-8 md:w-3/4">
            <div className="flex items-center mb-2">
              <h1 className={`text-3xl md:text-4xl font-bold ${textClass}`}>
                {poem.title}
              </h1>
              <span className="ml-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/30 backdrop-blur-xl text-primary-500 border border-primary-500/20 shadow-sm">
                {poem.id}
              </span>
            </div>
            <p className={`text-lg ${secondaryTextClass} mb-5`}>
              by <span className="font-medium">{poem.author}</span>
            </p>
            
            <div className={`mt-4 p-5 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/30'} mb-5`}>
              <p className={`${secondaryTextClass}`}>{poem.description}</p>
            </div>
            
            <div className={`p-5 rounded-xl ${isDarkMode ? 'bg-gray-900/60' : 'bg-gray-100/60'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/30'} whitespace-pre-line font-medium ${textClass}`}>
              {poem.fullText}
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
            {poem.questions.length} Questions
          </span>
        </div>
        
        <div className="space-y-6">
          {poem.questions.map((qa, index) => (
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
                index % 3 === 0 ? 'from-orange-500/10 to-yellow-500/10' :
                index % 3 === 1 ? 'from-purple-500/10 to-pink-500/10' :
                'from-indigo-500/10 to-blue-500/10'
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

export default PoemDetail; 