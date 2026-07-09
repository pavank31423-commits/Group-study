import { useState } from "react";
import { Home, Users, MessageCircleQuestion, Trophy, Share2, Search, Plus, LogIn, Mail, Phone, X, Copy, Check, Globe, User, Send, ClipboardList, Loader2, RotateCcw, CornerDownRight, ChevronRight, Sparkles, ArrowLeft, PlayCircle, MessageSquare, Camera } from "lucide-react";

const T = {
  en: {
    appName: "Group Study", tagline: "Learn together, grow together",
    loginTitle: "Welcome to Group Study", loginSub: "Login to start learning with friends",
    email: "Email address", phone: "Phone number", loginBtn: "Login / Sign up",
    home: "Home", community: "Community", groups: "Groups", test: "Test", leaderboard: "Rank", share: "Share",
    askDoubt: "Ask any doubt to everyone...", post: "Post", replies: "replies", reply: "Reply",
    writeReply: "Write a reply...", searchGroup: "Search a group by name...", groupName: "Enter group name",
    create: "Create", join: "Join", joined: "Joined", members: "members", online: "online",
    addMaterial: "Paste a YouTube link or image URL", caption: "Write a caption...", postMaterial: "Post to Group Study",
    yourFeed: "Study Feed", shareTitle: "Share Group Study", shareSub: "Invite your friends to join and learn together",
    copyLink: "Copy link", copied: "Copied!", points: "points", logout: "Logout", hiUser: "Hi",
    publicCommunity: "Public Doubt Community", communitySub: "Ask anything. Anyone can help you.",
    noGroupsFound: "No groups found. Try creating one!",
    testQuizTitle: "AI Test & Quiz", testQuizSub: "PYQs & model tests for every class, board & exam",
    selectClass: "Class / Exam", selectBoard: "Board", selectSubject: "Subject", selectLang: "Question language",
    selectType: "Test type", numQuestions: "No. of questions", generateTest: "Generate Test",
    generating: "AI is preparing your test...", q: "Question", of: "of", next: "Next", previous: "Previous",
    submitTest: "Submit Test", yourScore: "Your Score", retake: "Take another test",
    testLeaderboardTitle: "Leaderboard for this test", overallTab: "Overall", testsTab: "Test Leaderboards",
    noTestsYet: "You haven't attempted any test yet. Go to Test tab!", you: "You",
    errorGenerating: "Couldn't generate the test, please try again.", correct: "Correct", incorrect: "Incorrect",
    correctAnswer: "Correct answer",
    groupMembers: "Members", joinToChat: "Join this group to chat", typeMessage: "Type a message...",
    noMessagesYet: "No messages yet. Say hi!", backToGroups: "Groups", watchOnYoutube: "Play video",
    delete: "Delete", confirmDeletePost: "Delete this post?", confirmDeleteDoubt: "Delete this doubt?",
    confirmDeleteReply: "Delete this reply?", pts: "pts", confirmDeleteMessage: "Delete this message?",
    profile: "Profile", changePhoto: "Change photo", removePhoto: "Remove photo", savePhoto: "Save", close: "Close",
    postTypeYoutube: "YouTube video", postTypeImage: "Image / Notes", postTypeQuestion: "Question / Text",
    writePost: "Write your question or notes...", publicPostNote: "This will be visible to everyone",
    invalidPhone: "Enter a valid 10-digit phone number",
  },
  hi: {
    appName: "Group Study", tagline: "साथ पढ़ो, साथ बढ़ो",
    loginTitle: "Group Study में आपका स्वागत है", loginSub: "दोस्तों के साथ पढ़ाई शुरू करने के लिए लॉगिन करें",
    email: "ईमेल पता", phone: "फ़ोन नंबर", loginBtn: "लॉगिन / साइन अप करें",
    home: "होम", community: "कम्युनिटी", groups: "ग्रुप्स", test: "टेस्ट", leaderboard: "रैंक", share: "शेयर करें",
    askDoubt: "सबसे कोई भी डाउट पूछें...", post: "पोस्ट करें", replies: "जवाब", reply: "जवाब दें",
    writeReply: "जवाब लिखें...", searchGroup: "ग्रुप का नाम खोजें...", groupName: "ग्रुप का नाम लिखें",
    create: "बनाएं", join: "जॉइन करें", joined: "जॉइन किया", members: "मेंबर्स", online: "ऑनलाइन",
    addMaterial: "YouTube लिंक या इमेज URL पेस्ट करें", caption: "कैप्शन लिखें...", postMaterial: "Group Study पर पोस्ट करें",
    yourFeed: "स्टडी फीड", shareTitle: "Group Study शेयर करें", shareSub: "दोस्तों को जॉइन करने और साथ पढ़ने के लिए बुलाएं",
    copyLink: "लिंक कॉपी करें", copied: "कॉपी हो गया!", points: "पॉइंट्स", logout: "लॉगआउट", hiUser: "नमस्ते",
    publicCommunity: "पब्लिक डाउट कम्युनिटी", communitySub: "कुछ भी पूछें। कोई भी आपकी मदद कर सकता है।",
    noGroupsFound: "कोई ग्रुप नहीं मिला। एक बना लें!",
    testQuizTitle: "AI टेस्ट और क्विज़", testQuizSub: "हर क्लास, बोर्ड और एग्जाम के PYQ व मॉडल टेस्ट",
    selectClass: "क्लास / एग्जाम", selectBoard: "बोर्ड", selectSubject: "विषय", selectLang: "प्रश्नों की भाषा",
    selectType: "टेस्ट का प्रकार", numQuestions: "प्रश्नों की संख्या", generateTest: "टेस्ट बनाएं",
    generating: "AI आपका टेस्ट तैयार कर रहा है...", q: "प्रश्न", of: "में से", next: "अगला", previous: "पिछला",
    submitTest: "टेस्ट सबमिट करें", yourScore: "आपका स्कोर", retake: "नया टेस्ट लें",
    testLeaderboardTitle: "इस टेस्ट का लीडरबोर्ड", overallTab: "ओवरऑल", testsTab: "टेस्ट लीडरबोर्ड्स",
    noTestsYet: "आपने अभी तक कोई टेस्ट नहीं दिया। टेस्ट टैब पर जाएं!", you: "आप",
    errorGenerating: "टेस्ट नहीं बन पाया, दोबारा कोशिश करें।", correct: "सही", incorrect: "गलत",
    correctAnswer: "सही जवाब",
    groupMembers: "मेंबर्स", joinToChat: "बात करने के लिए ग्रुप जॉइन करें", typeMessage: "मैसेज लिखें...",
    noMessagesYet: "अभी कोई मैसेज नहीं। हाय बोलो!", backToGroups: "ग्रुप्स", watchOnYoutube: "वीडियो चलाएं",
    delete: "मिटाएं", confirmDeletePost: "इस पोस्ट को मिटाएं?", confirmDeleteDoubt: "इस डाउट को मिटाएं?",
    confirmDeleteReply: "इस जवाब को मिटाएं?", pts: "पॉइंट्स", confirmDeleteMessage: "इस मैसेज को मिटाएं?",
    profile: "प्रोफाइल", changePhoto: "फोटो बदलें", removePhoto: "फोटो हटाएं", savePhoto: "सेव करें", close: "बंद करें",
    postTypeYoutube: "YouTube वीडियो", postTypeImage: "इमेज / नोट्स", postTypeQuestion: "सवाल / टेक्स्ट",
    writePost: "अपना सवाल या नोट्स लिखें...", publicPostNote: "यह सबको दिखेगा",
    invalidPhone: "सही 10 अंकों का फ़ोन नंबर डालें",
  },
};

const BUBBLE_COLORS = [
  { from: "#ff6b6b", to: "#c0392b" }, { from: "#4facfe", to: "#00527a" },
  { from: "#a78bfa", to: "#5b21b6" }, { from: "#ffd166", to: "#c77d00" },
  { from: "#43e97b", to: "#0f7a3d" }, { from: "#ff8fd6", to: "#c2277f" },
];

function Bubble({ icon: Icon, colorIdx, active, onClick, label, size = 50 }) {
  const c = BUBBLE_COLORS[colorIdx % BUBBLE_COLORS.length];
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1 transition-transform active:scale-90" style={{ transform: active ? "translateY(-4px)" : "none" }}>
      <div style={{ width: size, height: size, borderRadius: "50%", background: `radial-gradient(circle at 30% 25%, ${c.from}, ${c.to})`,
        boxShadow: active ? `0 8px 16px ${c.to}88, inset 0 2px 4px rgba(255,255,255,0.6), inset 0 -6px 10px rgba(0,0,0,0.25)` : `0 4px 8px ${c.to}55, inset 0 2px 3px rgba(255,255,255,0.5), inset 0 -5px 8px rgba(0,0,0,0.2)`,
        display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon size={size * 0.45} color="white" strokeWidth={2.4} style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.3))" }} />
      </div>
      {label && <span className={`text-[10px] font-bold ${active ? "text-slate-900" : "text-slate-400"}`}>{label}</span>}
    </button>
  );
}

function AppLogo({ size = 44 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 16, background: "radial-gradient(circle at 30% 20%, #7dd3fc, #4338ca 75%)",
      boxShadow: "0 6px 14px rgba(67,56,202,0.45), inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -6px 10px rgba(0,0,0,0.25)",
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <Users size={size * 0.55} color="white" strokeWidth={2.5} style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.3))" }} />
    </div>
  );
}

function extractYoutubeId(url) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

const CLASS_OPTIONS = ["9th", "10th", "11th", "12th", "NEET", "JEE Main", "JEE Advanced"];
const BOARD_OPTIONS = ["CBSE", "ICSE", "Bihar Board", "Competitive Exam"];
const SUBJECT_OPTIONS = ["Physics", "Chemistry", "Biology", "Maths", "Science", "English", "Hindi", "Social Science", "Computer Science"];
const TYPE_OPTIONS = [
  { key: "chapter", en: "Chapter-wise", hi: "अध्याय-वार" },
  { key: "pyq", en: "Previous Year Questions", hi: "पिछले वर्ष के प्रश्न" },
  { key: "model", en: "Model Test Set", hi: "मॉडल टेस्ट सेट" },
];
const MOCK_FIRST_NAMES = ["Aarav", "Ishita", "Kabir", "Riya", "Vivaan", "Ananya", "Reyansh", "Diya", "Arjun", "Myra", "Sai", "Zara"];

const INITIAL_GROUPS = [
  { id: 1, name: "Physics Warriors", joined: false, colorIdx: 1, memberList: [{ name: "Aarav", online: true }, { name: "Ishita", online: false }, { name: "Kabir", online: true }, { name: "Vivaan", online: false }], chatMessages: [{ user: "Aarav", text: "Kal ka assignment kisine kiya?" }, { user: "Kabir", text: "Haan maine kar liya, share karta hoon." }] },
  { id: 2, name: "Maths Ninjas", joined: true, colorIdx: 3, memberList: [{ name: "Riya", online: true }, { name: "Ananya", online: true }, { name: "Reyansh", online: false }], chatMessages: [{ user: "Riya", text: "Integration ka doubt hai kisi ko?" }] },
  { id: 3, name: "Bio Squad", joined: false, colorIdx: 4, memberList: [{ name: "Diya", online: false }, { name: "Arjun", online: true }], chatMessages: [] },
  { id: 4, name: "English Club", joined: false, colorIdx: 5, memberList: [{ name: "Myra", online: true }], chatMessages: [] },
  { id: 5, name: "Chemistry Heroes", joined: false, colorIdx: 0, memberList: [{ name: "Sai", online: false }, { name: "Zara", online: true }, { name: "Aarav", online: false }], chatMessages: [] },
  { id: 6, name: "Computer Coders", joined: false, colorIdx: 2, memberList: [{ name: "Kabir", online: true }, { name: "Riya", online: true }], chatMessages: [] },
];

function VideoBlock({ url, watchLabel }) {
  const [playing, setPlaying] = useState(false);
  const ytId = extractYoutubeId(url);
  if (!ytId) return null;
  if (playing) {
    return (
      <div className="aspect-video w-full bg-black">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${ytId}?autoplay=1`}
          title="video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <div className="relative aspect-video w-full bg-black cursor-pointer" onClick={() => setPlaying(true)}>
      <img src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`} alt="thumbnail" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/25">
        <PlayCircle size={54} color="white" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }} />
        <span className="text-white text-xs font-bold bg-black/40 px-3 py-1 rounded-full">{watchLabel}</span>
      </div>
    </div>
  );
}

export default function GroupStudyApp() {
  const [lang, setLang] = useState("en");
  const t = T[lang];
  const [view, setView] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const [groups, setGroups] = useState(INITIAL_GROUPS);
  const [groupSearch, setGroupSearch] = useState("");
  const [newGroupName, setNewGroupName] = useState("");
  const [openGroupId, setOpenGroupId] = useState(null);
  const [chatDraft, setChatDraft] = useState("");

  const [doubts, setDoubts] = useState([
    { id: 1, user: "Riya", text: "Newton ka teesra law kisi example se samjhao?", emoji: "🧑‍🎓", repliesList: [{ user: "Aman", text: "Jab tum deewar ko push karte ho, deewar bhi tumhe push karti hai." }] },
    { id: 2, user: "Aman", text: "Integration by parts kab use karte hain?", emoji: "👨‍🎓", repliesList: [] },
    { id: 3, user: "Sneha", text: "Cell ki structure diagram koi bhej sakta hai?", emoji: "👩‍🎓", repliesList: [] },
  ]);
  const [newDoubt, setNewDoubt] = useState("");
  const [replyDrafts, setReplyDrafts] = useState({});
  const [openReplyBox, setOpenReplyBox] = useState({});

  const [posts, setPosts] = useState([
    { id: 1, type: "youtube", url: "https://youtu.be/dQw4w9WgXcQ", caption: "Full chapter revision video", user: "Karan" },
  ]);
  const [newPostUrl, setNewPostUrl] = useState("");
  const [newPostCaption, setNewPostCaption] = useState("");
  const [newPostType, setNewPostType] = useState("youtube");

  const leaderboard = [
    { rank: 1, name: "Priya Sharma", points: 2840, emoji: "👑" }, { rank: 2, name: "Rohan Verma", points: 2510, emoji: "🥈" },
    { rank: 3, name: "Aisha Khan", points: 2390, emoji: "🥉" }, { rank: 4, name: "Dev Patel", points: 2100, emoji: "📘" },
    { rank: 5, name: "Meera Iyer", points: 1980, emoji: "📗" }, { rank: 6, name: "Sahil Gupta", points: 1875, emoji: "📙" },
    { rank: 7, name: "Tanya Roy", points: 1690, emoji: "📕" },
  ];

  const [rankTab, setRankTab] = useState("overall");
  const [quizConfig, setQuizConfig] = useState({ cls: "10th", board: "CBSE", subject: "Physics", type: "chapter", num: "5" });
  const [quizLang, setQuizLang] = useState("en");
  const [quizStage, setQuizStage] = useState("setup");
  const [quizError, setQuizError] = useState("");
  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [testLeaderboards, setTestLeaderboards] = useState({});
  const [lastTestKey, setLastTestKey] = useState(null);

  const shareLink = "https://groupstudy.app/join/" + (name ? name.toLowerCase().replace(/\s/g, "") : "you");

  const isValidPhone = (p) => /^\d{10}$/.test(p.trim());
  const handleLogin = () => { if (email.trim() && isValidPhone(phone)) setLoggedIn(true); };
  const handlePhotoUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setProfilePhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const handleJoinToggle = (id) => {
    setGroups((gs) => gs.map((g) => {
      if (g.id !== id) return g;
      const myName = name || t.you;
      if (g.joined) return { ...g, joined: false, memberList: g.memberList.filter((m) => m.name !== myName) };
      return { ...g, joined: true, memberList: [...g.memberList, { name: myName, online: true }] };
    }));
  };
  const handleCreateGroup = () => {
    if (!newGroupName.trim()) return;
    const myName = name || t.you;
    setGroups((g) => [{ id: Date.now(), name: newGroupName.trim(), joined: true, colorIdx: g.length, memberList: [{ name: myName, online: true }], chatMessages: [] }, ...g]);
    setNewGroupName("");
  };
  const handlePostDoubt = () => {
    if (!newDoubt.trim()) return;
    setDoubts((d) => [{ id: Date.now(), user: name || "You", text: newDoubt.trim(), emoji: "🙋", repliesList: [] }, ...d]);
    setNewDoubt("");
  };
  const handlePostReply = (doubtId) => {
    const text = (replyDrafts[doubtId] || "").trim();
    if (!text) return;
    setDoubts((d) => d.map((x) => (x.id === doubtId ? { ...x, repliesList: [...x.repliesList, { user: name || "You", text }] } : x)));
    setReplyDrafts((r) => ({ ...r, [doubtId]: "" }));
    setOpenReplyBox((o) => ({ ...o, [doubtId]: true }));
  };
  const handlePostMaterial = () => {
    if (newPostType === "question") {
      if (!newPostCaption.trim()) return;
      setPosts((p) => [{ id: Date.now(), type: "text", text: newPostCaption.trim(), user: name || "You" }, ...p]);
      setNewPostCaption("");
      return;
    }
    if (!newPostUrl.trim()) return;
    const ytId = extractYoutubeId(newPostUrl.trim());
    setPosts((p) => [{ id: Date.now(), type: ytId ? "youtube" : "image", url: newPostUrl.trim(), caption: newPostCaption.trim(), user: name || "You" }, ...p]);
    setNewPostUrl(""); setNewPostCaption("");
  };
  const handleDeletePost = (postId) => {
    if (!window.confirm(t.confirmDeletePost)) return;
    setPosts((p) => p.filter((x) => x.id !== postId));
  };
  const handleDeleteDoubt = (doubtId) => {
    if (!window.confirm(t.confirmDeleteDoubt)) return;
    setDoubts((d) => d.filter((x) => x.id !== doubtId));
  };
  const handleDeleteReply = (doubtId, replyIdx) => {
    if (!window.confirm(t.confirmDeleteReply)) return;
    setDoubts((d) => d.map((x) => (x.id === doubtId ? { ...x, repliesList: x.repliesList.filter((_, i) => i !== replyIdx) } : x)));
  };
  const filteredGroups = groups.filter((g) => g.name.toLowerCase().includes(groupSearch.toLowerCase()));
  const copyLink = () => { setCopied(true); setTimeout(() => setCopied(false), 1800); };

  const sendChat = (groupId) => {
    if (!chatDraft.trim()) return;
    setGroups((gs) => gs.map((g) => (g.id === groupId ? { ...g, chatMessages: [...g.chatMessages, { user: name || t.you, text: chatDraft.trim() }] } : g)));
    setChatDraft("");
  };
  const handleDeleteMessage = (groupId, msgIdx) => {
    if (!window.confirm(t.confirmDeleteMessage)) return;
    setGroups((gs) => gs.map((g) => (g.id === groupId ? { ...g, chatMessages: g.chatMessages.filter((_, i) => i !== msgIdx) } : g)));
  };

  const testKeyFor = (cfg) => `${cfg.cls}|${cfg.board}|${cfg.subject}|${cfg.type}|${quizLang}`;
  const testLabelFor = (cfg) => {
    const typeObj = TYPE_OPTIONS.find((x) => x.key === cfg.type);
    return `${cfg.cls} · ${cfg.board} · ${cfg.subject} · ${quizLang === "hi" ? typeObj.hi : typeObj.en}`;
  };

  const generateTest = async () => {
    setQuizStage("loading"); setQuizError("");
    try {
      const typeObj = TYPE_OPTIONS.find((x) => x.key === quizConfig.type);
      const langName = quizLang === "hi" ? "Hindi (Devanagari script)" : "English";
      const n = parseInt(quizConfig.num, 10) || 5;
      const prompt = `You are an expert Indian school exam paper setter. Create exactly ${n} multiple choice questions for: Class/Exam = ${quizConfig.cls}, Board = ${quizConfig.board}, Subject = ${quizConfig.subject}, Test style = ${typeObj.en}. Write every question and option in ${langName}. Match real exam difficulty and syllabus for this class/board/subject (if NEET/JEE, use NEET/JEE level questions). Respond with ONLY a raw JSON array, no markdown fences, no explanation text, in exactly this format: [{"question":"...","options":["...","...","...","..."],"correctIndex":0}]`;
      const maxTokens = Math.min(8000, Math.max(1200, n * 145 + 700));
      const response = await fetch("/api/generate-test", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, maxTokens }),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      const rawText = (data.content || []).map((b) => b.text || "").join("\n");
      let cleaned = rawText.replace(/```json|```/g, "").trim();
      const start = cleaned.indexOf("[");
      const end = cleaned.lastIndexOf("]");
      if (start !== -1 && end !== -1 && end > start) cleaned = cleaned.slice(start, end + 1);
      const parsed = JSON.parse(cleaned);
      if (!Array.isArray(parsed) || parsed.length === 0) throw new Error("empty");
      const valid = parsed.filter((q) => q && typeof q.question === "string" && Array.isArray(q.options) && q.options.length >= 2 && Number.isInteger(q.correctIndex));
      if (valid.length === 0) throw new Error("invalid");
      setQuestions(valid); setAnswers(new Array(valid.length).fill(null)); setQIndex(0); setQuizStage("active");
    } catch (err) {
      setQuizError(t.errorGenerating); setQuizStage("setup");
    }
  };

  const selectAnswer = (idx) => setAnswers((a) => { const c = [...a]; c[qIndex] = idx; return c; });

  const POINTS_PER_CORRECT = 10;
  const POINTS_PER_WRONG = 1;
  const makeEntry = (correct, wrong, total, extra) => ({
    score: correct, total,
    points: correct * POINTS_PER_CORRECT - wrong * POINTS_PER_WRONG,
    accuracy: total > 0 ? correct / total : 0,
    ...extra,
  });

  const submitTest = () => {
    const score = answers.reduce((s, a, i) => s + (a === questions[i].correctIndex ? 1 : 0), 0);
    const wrongCount = answers.reduce((s, a, i) => s + (a !== null && a !== undefined && a !== questions[i].correctIndex ? 1 : 0), 0);
    const total = questions.length;
    const key = testKeyFor(quizConfig);
    setTestLeaderboards((prev) => {
      const existing = prev[key];
      let entries = existing ? existing.entries.filter((e) => !e.isUser) : [];
      if (!existing) {
        const mockCount = 5 + Math.floor(Math.random() * 4);
        entries = Array.from({ length: mockCount }).map(() => {
          const mockScore = Math.floor(Math.random() * (total + 1));
          const mockWrong = total - mockScore;
          return makeEntry(mockScore, mockWrong, total, {
            name: MOCK_FIRST_NAMES[Math.floor(Math.random() * MOCK_FIRST_NAMES.length)] + " " + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + ".",
            isUser: false,
          });
        });
      }
      entries = [...entries, makeEntry(score, wrongCount, total, { name: name || t.you, isUser: true })];
      // Rank by accuracy first (fewer questions with higher correctness ranks above more questions with lower correctness), then by points.
      entries.sort((a, b) => b.accuracy - a.accuracy || b.points - a.points);
      return { ...prev, [key]: { label: testLabelFor(quizConfig), entries } };
    });
    setLastTestKey(key); setQuizStage("result");
  };
  const retakeTest = () => { setQuizStage("setup"); setQuestions([]); setAnswers([]); setQIndex(0); };

  const openGroup = groups.find((g) => g.id === openGroupId);

  if (!loggedIn) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-4" style={{ background: "radial-gradient(circle at 20% 10%, #eef2ff, #e0f2fe 40%, #fdf4ff 100%)" }}>
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center mb-6">
            <AppLogo size={72} />
            <h1 className="mt-3 text-2xl font-extrabold text-slate-800">{t.appName}</h1>
            <p className="text-slate-500 text-sm">{t.tagline}</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-slate-100">
            <div className="flex justify-end mb-3">
              <button onClick={() => setLang(lang === "en" ? "hi" : "en")} className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600">
                <Globe size={14} /> {lang === "en" ? "हिंदी" : "English"}
              </button>
            </div>
            <h2 className="text-lg font-bold text-slate-800">{t.loginTitle}</h2>
            <p className="text-sm text-slate-500 mb-4">{t.loginSub}</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 border border-slate-200 rounded-2xl px-3 py-2.5 focus-within:border-indigo-400">
                <User size={18} className="text-slate-400" />
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder={lang === "en" ? "Your name" : "आपका नाम"} className="flex-1 outline-none text-sm" />
              </div>
              <div className="flex items-center gap-2 border border-slate-200 rounded-2xl px-3 py-2.5 focus-within:border-indigo-400">
                <Mail size={18} className="text-slate-400" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.email} className="flex-1 outline-none text-sm" />
              </div>
              <div className="flex items-center gap-2 border border-slate-200 rounded-2xl px-3 py-2.5 focus-within:border-indigo-400">
                <Phone size={18} className="text-slate-400" />
                <input value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder={t.phone} inputMode="numeric" maxLength={10} className="flex-1 outline-none text-sm" />
              </div>
              {phone.length > 0 && !isValidPhone(phone) && <p className="text-xs text-red-500 -mt-1">{t.invalidPhone}</p>}
              <button onClick={handleLogin} disabled={!email.trim() || !isValidPhone(phone)} className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-white disabled:opacity-40" style={{ background: "linear-gradient(135deg,#6366f1,#4338ca)" }}>
                <LogIn size={18} /> {t.loginBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full" style={{ background: "radial-gradient(circle at 15% 0%, #eef2ff, #f0fdfa 45%, #fdf4ff 100%)" }}>
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2"><AppLogo size={38} /><span className="font-extrabold text-slate-800 text-lg">{t.appName}</span></div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "en" ? "hi" : "en")} className="flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-full bg-indigo-50 text-indigo-600"><Globe size={13} /> {lang === "en" ? "हिं" : "EN"}</button>
            <button onClick={() => setShowShare(true)} className="p-2 rounded-full bg-pink-50 text-pink-600"><Share2 size={16} /></button>
            <button onClick={() => setShowProfile(true)} className="rounded-full overflow-hidden border-2 border-indigo-200" style={{ width: 32, height: 32 }} title={t.profile}>
              {profilePhoto ? (
                <img src={profilePhoto} alt="profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-indigo-50 text-indigo-500"><User size={16} /></div>
              )}
            </button>
            <button onClick={() => setLoggedIn(false)} className="text-xs font-semibold text-slate-400">{t.logout}</button>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-5 pb-28">
        {view === "home" && (
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-1">{t.hiUser} {name || "👋"}</h2>
            <p className="text-sm text-slate-500 mb-4">{t.yourFeed}</p>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
              <div className="flex gap-2 mb-2">
                {[{ key: "youtube", label: t.postTypeYoutube }, { key: "image", label: t.postTypeImage }, { key: "question", label: t.postTypeQuestion }].map((opt) => (
                  <button key={opt.key} onClick={() => setNewPostType(opt.key)} className={`flex-1 text-[11px] font-bold py-1.5 rounded-full ${newPostType === opt.key ? "text-white" : "bg-slate-50 text-slate-400 border border-slate-200"}`} style={newPostType === opt.key ? { background: "linear-gradient(135deg,#22c55e,#0f7a3d)" } : {}}>{opt.label}</button>
                ))}
              </div>
              {newPostType !== "question" ? (
                <>
                  <input value={newPostUrl} onChange={(e) => setNewPostUrl(e.target.value)} placeholder={t.addMaterial} className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 mb-2 outline-none focus:border-indigo-400" />
                  <input value={newPostCaption} onChange={(e) => setNewPostCaption(e.target.value)} placeholder={t.caption} className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 mb-2 outline-none focus:border-indigo-400" />
                </>
              ) : (
                <textarea value={newPostCaption} onChange={(e) => setNewPostCaption(e.target.value)} placeholder={t.writePost} rows={3} className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 mb-2 outline-none focus:border-indigo-400 resize-none" />
              )}
              <p className="text-[11px] text-slate-400 mb-2">{t.publicPostNote}</p>
              <button onClick={handlePostMaterial} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-white text-sm" style={{ background: "linear-gradient(135deg,#22c55e,#0f7a3d)" }}><Plus size={16} /> {t.postMaterial}</button>
            </div>
            <div className="space-y-4">
              {posts.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                  <div className="p-3 flex items-center gap-2">
                    <div style={{ width: 30, height: 30, borderRadius: "50%", background: "radial-gradient(circle at 30% 25%,#4facfe,#00527a)" }} className="flex items-center justify-center text-white text-xs font-bold">{p.user[0]}</div>
                    <span className="text-sm font-semibold text-slate-700 flex-1">{p.user}</span>
                    {p.user === (name || "You") && (
                      <button onClick={() => handleDeletePost(p.id)} className="p-1.5 rounded-full text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors" title={t.delete}>
                        <X size={15} />
                      </button>
                    )}
                  </div>
                  {p.type === "youtube" ? <VideoBlock url={p.url} watchLabel={t.watchOnYoutube} /> : p.type === "image" ? <img src={p.url} alt="study material" className="w-full max-h-72 object-cover" /> : p.type === "text" ? <p className="px-4 pt-1 pb-3 text-sm text-slate-700 whitespace-pre-wrap">{p.text}</p> : null}
                  {p.caption && <p className="p-3 text-sm text-slate-600">{p.caption}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "community" && (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Bubble icon={MessageCircleQuestion} colorIdx={1} active size={36} label="" onClick={() => {}} />
              <div><h2 className="text-lg font-bold text-slate-800">{t.publicCommunity}</h2><p className="text-xs text-slate-500">{t.communitySub}</p></div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 mt-4 mb-4 flex items-center gap-2">
              <input value={newDoubt} onChange={(e) => setNewDoubt(e.target.value)} placeholder={t.askDoubt} className="flex-1 text-sm outline-none" />
              <button onClick={handlePostDoubt} className="p-2 rounded-full text-white" style={{ background: "linear-gradient(135deg,#a78bfa,#5b21b6)" }}><Send size={16} /></button>
            </div>
            <div className="space-y-3">
              {doubts.map((d) => (
                <div key={d.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3.5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-lg">{d.emoji}</span>
                    <span className="text-sm font-bold text-slate-700 flex-1">{d.user}</span>
                    {d.user === (name || "You") && (
                      <button onClick={() => handleDeleteDoubt(d.id)} className="p-1.5 rounded-full text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors" title={t.delete}>
                        <X size={14} />
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{d.text}</p>
                  <div className="flex items-center gap-3 mb-2">
                    <button onClick={() => setOpenReplyBox((o) => ({ ...o, [d.id]: !o[d.id] }))} className="text-xs font-bold text-indigo-500 flex items-center gap-1"><CornerDownRight size={13} /> {t.reply}</button>
                    {d.repliesList.length > 0 && <span className="text-xs font-semibold text-slate-400">{d.repliesList.length} {t.replies}</span>}
                  </div>
                  {d.repliesList.length > 0 && (
                    <div className="space-y-1.5 mb-2 pl-3 border-l-2 border-slate-100">
                      {d.repliesList.map((r, i) => (
                        <div key={i} className="text-xs flex items-center gap-1.5 group">
                          <span className="flex-1"><span className="font-bold text-slate-600">{r.user}: </span><span className="text-slate-500">{r.text}</span></span>
                          {r.user === (name || "You") && (
                            <button onClick={() => handleDeleteReply(d.id, i)} className="p-1 rounded-full text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors" title={t.delete}>
                              <X size={12} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {openReplyBox[d.id] && (
                    <div className="flex items-center gap-2">
                      <input value={replyDrafts[d.id] || ""} onChange={(e) => setReplyDrafts((r) => ({ ...r, [d.id]: e.target.value }))} placeholder={t.writeReply} className="flex-1 text-xs border border-slate-200 rounded-full px-3 py-2 outline-none focus:border-indigo-400" onKeyDown={(e) => { if (e.key === "Enter") handlePostReply(d.id); }} />
                      <button onClick={() => handlePostReply(d.id)} className="p-2 rounded-full text-white" style={{ background: "linear-gradient(135deg,#a78bfa,#5b21b6)" }}><Send size={13} /></button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "groups" && !openGroup && (
          <div>
            <div className="flex items-center gap-2 border border-slate-200 bg-white rounded-2xl px-3 py-2.5 mb-3 shadow-sm">
              <Search size={16} className="text-slate-400" />
              <input value={groupSearch} onChange={(e) => setGroupSearch(e.target.value)} placeholder={t.searchGroup} className="flex-1 text-sm outline-none" />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <input value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} placeholder={t.groupName} className="flex-1 text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-400" />
              <button onClick={handleCreateGroup} className="px-3 py-2 rounded-xl text-white text-sm font-bold flex items-center gap-1" style={{ background: "linear-gradient(135deg,#ffd166,#c77d00)" }}><Plus size={15} /> {t.create}</button>
            </div>
            <div className="space-y-3">
              {filteredGroups.length === 0 && <p className="text-center text-sm text-slate-400 py-8">{t.noGroupsFound}</p>}
              {filteredGroups.map((g) => {
                const onlineCount = g.memberList.filter((m) => m.online).length;
                return (
                  <div key={g.id} onClick={() => setOpenGroupId(g.id)} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3.5 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform">
                    <div className="flex items-center gap-3">
                      <Bubble icon={Users} colorIdx={g.colorIdx} active={false} onClick={() => {}} label="" size={42} />
                      <div>
                        <p className="text-sm font-bold text-slate-700 flex items-center gap-1">{g.name} <MessageSquare size={12} className="text-slate-300" /></p>
                        <p className="text-xs text-slate-400">{g.memberList.length} {t.members} · <span className="text-green-500 font-semibold">{onlineCount} {t.online}</span></p>
                      </div>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); handleJoinToggle(g.id); }} className={`text-xs font-bold px-3.5 py-2 rounded-full ${g.joined ? "bg-green-50 text-green-600" : "text-white"}`} style={!g.joined ? { background: "linear-gradient(135deg,#4facfe,#00527a)" } : {}}>
                      {g.joined ? t.joined : t.join}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {view === "groups" && openGroup && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <button onClick={() => setOpenGroupId(null)} className="p-2 rounded-full bg-white border border-slate-200"><ArrowLeft size={16} className="text-slate-500" /></button>
              <Bubble icon={Users} colorIdx={openGroup.colorIdx} active={false} onClick={() => {}} label="" size={38} />
              <div><p className="text-sm font-extrabold text-slate-800">{openGroup.name}</p><p className="text-xs text-slate-400">{openGroup.memberList.length} {t.members}</p></div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 mb-3">
              <p className="text-xs font-bold text-slate-500 mb-2">{t.groupMembers}</p>
              <div className="flex flex-wrap gap-2">
                {openGroup.memberList.map((m, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-slate-50 rounded-full pl-1 pr-2.5 py-1">
                    <span className="relative flex items-center justify-center w-6 h-6 rounded-full text-white text-[10px] font-bold" style={{ background: "radial-gradient(circle at 30% 25%,#a78bfa,#5b21b6)" }}>
                      {m.name[0]}
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white" style={{ background: m.online ? "#22c55e" : "#cbd5e1" }} />
                    </span>
                    <span className="text-xs font-semibold text-slate-600">{m.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 flex flex-col" style={{ height: 340 }}>
              <div className="flex-1 overflow-y-auto space-y-2 pr-1 mb-2">
                {openGroup.chatMessages.length === 0 && <p className="text-center text-xs text-slate-400 mt-8">{t.noMessagesYet}</p>}
                {openGroup.chatMessages.map((m, i) => {
                  const mine = m.user === (name || t.you);
                  return (
                    <div key={i} className={`flex items-end gap-1 ${mine ? "justify-end" : "justify-start"}`}>
                      {mine && (
                        <button onClick={() => handleDeleteMessage(openGroup.id, i)} className="p-1 rounded-full text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors mb-0.5" title={t.delete}>
                          <X size={11} />
                        </button>
                      )}
                      <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-xs ${mine ? "text-white rounded-br-sm" : "bg-slate-100 text-slate-700 rounded-bl-sm"}`} style={mine ? { background: "linear-gradient(135deg,#6366f1,#4338ca)" } : {}}>
                        {!mine && <p className="font-bold mb-0.5">{m.user}</p>}
                        {m.text}
                      </div>
                    </div>
                  );
                })}
              </div>
              {openGroup.joined ? (
                <div className="flex items-center gap-2">
                  <input value={chatDraft} onChange={(e) => setChatDraft(e.target.value)} placeholder={t.typeMessage} onKeyDown={(e) => { if (e.key === "Enter") sendChat(openGroup.id); }} className="flex-1 text-sm border border-slate-200 rounded-full px-3.5 py-2 outline-none focus:border-indigo-400" />
                  <button onClick={() => sendChat(openGroup.id)} className="p-2.5 rounded-full text-white" style={{ background: "linear-gradient(135deg,#a78bfa,#5b21b6)" }}><Send size={15} /></button>
                </div>
              ) : (
                <button onClick={() => handleJoinToggle(openGroup.id)} className="w-full py-2.5 rounded-full text-white text-sm font-bold" style={{ background: "linear-gradient(135deg,#4facfe,#00527a)" }}>{t.joinToChat}</button>
              )}
            </div>
          </div>
        )}

        {view === "test" && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bubble icon={ClipboardList} colorIdx={2} active size={36} label="" onClick={() => {}} />
              <div><h2 className="text-lg font-bold text-slate-800">{t.testQuizTitle}</h2><p className="text-xs text-slate-500">{t.testQuizSub}</p></div>
            </div>

            {quizStage === "setup" && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 space-y-3">
                {quizError && <p className="text-xs font-semibold text-red-500">{quizError}</p>}
                <div><label className="text-xs font-bold text-slate-500">{t.selectClass}</label>
                  <select value={quizConfig.cls} onChange={(e) => setQuizConfig((c) => ({ ...c, cls: e.target.value }))} className="w-full mt-1 text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none">
                    {CLASS_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div><label className="text-xs font-bold text-slate-500">{t.selectBoard}</label>
                  <select value={quizConfig.board} onChange={(e) => setQuizConfig((c) => ({ ...c, board: e.target.value }))} className="w-full mt-1 text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none">
                    {BOARD_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div><label className="text-xs font-bold text-slate-500">{t.selectSubject}</label>
                  <select value={quizConfig.subject} onChange={(e) => setQuizConfig((c) => ({ ...c, subject: e.target.value }))} className="w-full mt-1 text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none">
                    {SUBJECT_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div><label className="text-xs font-bold text-slate-500">{t.selectType}</label>
                  <select value={quizConfig.type} onChange={(e) => setQuizConfig((c) => ({ ...c, type: e.target.value }))} className="w-full mt-1 text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none">
                    {TYPE_OPTIONS.map((o) => <option key={o.key} value={o.key}>{lang === "hi" ? o.hi : o.en}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-bold text-slate-500">{t.numQuestions}</label>
                    <select value={quizConfig.num} onChange={(e) => setQuizConfig((c) => ({ ...c, num: e.target.value }))} className="w-full mt-1 text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none">
                      {["5", "10", "15", "20", "25", "30", "40", "50"].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div><label className="text-xs font-bold text-slate-500">{t.selectLang}</label>
                    <select value={quizLang} onChange={(e) => setQuizLang(e.target.value)} className="w-full mt-1 text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none">
                      <option value="en">English</option><option value="hi">हिंदी</option>
                    </select>
                  </div>
                </div>
                <button onClick={generateTest} className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-white text-sm" style={{ background: "linear-gradient(135deg,#ffd166,#c77d00)" }}><Sparkles size={16} /> {t.generateTest}</button>
              </div>
            )}

            {quizStage === "loading" && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 flex flex-col items-center gap-3">
                <Loader2 size={30} className="animate-spin text-indigo-500" /><p className="text-sm font-semibold text-slate-500">{t.generating}</p>
              </div>
            )}

            {quizStage === "active" && questions.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-400">{t.q} {qIndex + 1} {t.of} {questions.length}</span>
                  <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-indigo-500" style={{ width: `${((qIndex + 1) / questions.length) * 100}%` }} /></div>
                </div>
                <p className="text-sm font-bold text-slate-800 mb-3">{questions[qIndex].question}</p>
                <div className="space-y-2 mb-4">
                  {questions[qIndex].options.map((opt, i) => (
                    <button key={i} onClick={() => selectAnswer(i)} className={`w-full text-left text-sm px-3.5 py-2.5 rounded-xl border-2 ${answers[qIndex] === i ? "border-indigo-500 bg-indigo-50 font-semibold text-indigo-700" : "border-slate-200 text-slate-600"}`}>{opt}</button>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <button disabled={qIndex === 0} onClick={() => setQIndex((i) => i - 1)} className="text-xs font-bold text-slate-400 disabled:opacity-30">{t.previous}</button>
                  {qIndex < questions.length - 1 ? (
                    <button onClick={() => setQIndex((i) => i + 1)} className="flex items-center gap-1 text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg,#4facfe,#00527a)" }}>{t.next} <ChevronRight size={14} /></button>
                  ) : (
                    <button onClick={submitTest} className="text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg,#22c55e,#0f7a3d)" }}>{t.submitTest}</button>
                  )}
                </div>
              </div>
            )}

            {quizStage === "result" && lastTestKey && testLeaderboards[lastTestKey] && (
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 text-center">
                  <p className="text-xs font-bold text-slate-400 mb-1">{t.yourScore}</p>
                  <p className="text-3xl font-extrabold text-indigo-600">{answers.reduce((s, a, i) => s + (a === questions[i].correctIndex ? 1 : 0), 0)} / {questions.length}</p>
                  <p className="text-xs font-bold text-slate-400 mt-1">{testLeaderboards[lastTestKey].entries.find((e) => e.isUser)?.points ?? 0} {t.pts}</p>
                  <button onClick={retakeTest} className="mt-3 inline-flex items-center gap-1 text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg,#a78bfa,#5b21b6)" }}><RotateCcw size={13} /> {t.retake}</button>
                </div>
                <div>
                  {questions.map((q, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3.5 mb-2.5">
                      <p className="text-sm font-semibold text-slate-700 mb-1.5">{i + 1}. {q.question}</p>
                      <p className={`text-xs font-bold ${answers[i] === q.correctIndex ? "text-green-600" : "text-red-500"}`}>{answers[i] === q.correctIndex ? t.correct : t.incorrect}</p>
                      {answers[i] !== q.correctIndex && <p className="text-xs text-slate-500 mt-0.5">{t.correctAnswer}: {q.options[q.correctIndex]}</p>}
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                  <p className="text-sm font-bold text-slate-800 mb-3">{t.testLeaderboardTitle}</p>
                  <div className="divide-y divide-slate-50">
                    {testLeaderboards[lastTestKey].entries.map((e, i) => (
                      <div key={i} className={`flex items-center justify-between py-2 ${e.isUser ? "bg-indigo-50 -mx-2 px-2 rounded-lg" : ""}`}>
                        <div className="flex items-center gap-2"><span className="w-5 text-center text-xs font-bold text-slate-400">{i + 1}</span><span className="text-sm font-semibold text-slate-700">{e.isUser ? t.you : e.name}</span></div>
                        <div className="text-right"><span className="text-xs font-bold text-indigo-500">{e.score}/{e.total}</span><span className="block text-[10px] font-semibold text-slate-400">{e.points} {t.pts}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {view === "leaderboard" && (
          <div>
            <div className="flex items-center gap-2 mb-4"><Bubble icon={Trophy} colorIdx={3} active size={36} label="" onClick={() => {}} /><h2 className="text-lg font-bold text-slate-800">{t.leaderboard}</h2></div>
            <div className="flex gap-2 mb-4">
              <button onClick={() => setRankTab("overall")} className={`flex-1 text-xs font-bold py-2 rounded-full ${rankTab === "overall" ? "text-white" : "bg-white text-slate-400 border border-slate-200"}`} style={rankTab === "overall" ? { background: "linear-gradient(135deg,#6366f1,#4338ca)" } : {}}>{t.overallTab}</button>
              <button onClick={() => setRankTab("tests")} className={`flex-1 text-xs font-bold py-2 rounded-full ${rankTab === "tests" ? "text-white" : "bg-white text-slate-400 border border-slate-200"}`} style={rankTab === "tests" ? { background: "linear-gradient(135deg,#6366f1,#4338ca)" } : {}}>{t.testsTab}</button>
            </div>
            {rankTab === "overall" && (
              <div>
                <div className="flex items-end justify-center gap-3 mb-6">
                  {[leaderboard[1], leaderboard[0], leaderboard[2]].map((u, i) => {
                    const heights = [90, 120, 75]; const podiumColor = ["#c0c0c0", "#ffd166", "#cd7f32"];
                    return (
                      <div key={u.rank} className="flex flex-col items-center">
                        <span className="text-2xl mb-1">{u.emoji}</span>
                        <span className="text-xs font-bold text-slate-700 max-w-[70px] text-center truncate">{u.name}</span>
                        <span className="text-[10px] text-slate-400 mb-1">{u.points} {t.points}</span>
                        <div style={{ height: heights[i], background: `linear-gradient(180deg, ${podiumColor[i]}, ${podiumColor[i]}aa)` }} className="w-16 rounded-t-xl flex items-start justify-center pt-1"><span className="text-white font-extrabold text-lg">{u.rank}</span></div>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-50">
                  {leaderboard.slice(3).map((u) => (
                    <div key={u.rank} className="flex items-center justify-between p-3.5">
                      <div className="flex items-center gap-3"><span className="w-6 text-center font-bold text-slate-400 text-sm">{u.rank}</span><span className="text-xl">{u.emoji}</span><span className="text-sm font-semibold text-slate-700">{u.name}</span></div>
                      <span className="text-xs font-bold text-indigo-500">{u.points} {t.points}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {rankTab === "tests" && (
              <div className="space-y-4">
                {Object.keys(testLeaderboards).length === 0 && <p className="text-center text-sm text-slate-400 py-8">{t.noTestsYet}</p>}
                {Object.entries(testLeaderboards).map(([key, tl]) => (
                  <div key={key} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                    <p className="text-sm font-bold text-slate-800 mb-3">{tl.label}</p>
                    <div className="divide-y divide-slate-50">
                      {tl.entries.map((e, i) => (
                        <div key={i} className={`flex items-center justify-between py-2 ${e.isUser ? "bg-indigo-50 -mx-2 px-2 rounded-lg" : ""}`}>
                          <div className="flex items-center gap-2"><span className="w-5 text-center text-xs font-bold text-slate-400">{i + 1}</span><span className="text-sm font-semibold text-slate-700">{e.isUser ? t.you : e.name}</span></div>
                          <div className="text-right"><span className="text-xs font-bold text-indigo-500">{e.score}/{e.total}</span><span className="block text-[10px] font-semibold text-slate-400">{e.points} {t.pts}</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-md border-t border-slate-100">
        <div className="max-w-lg mx-auto px-3 py-2.5 flex items-center justify-between">
          <Bubble icon={Home} colorIdx={0} active={view === "home"} onClick={() => setView("home")} label={t.home} />
          <Bubble icon={MessageCircleQuestion} colorIdx={1} active={view === "community"} onClick={() => setView("community")} label={t.community} />
          <Bubble icon={Users} colorIdx={2} active={view === "groups"} onClick={() => { setView("groups"); setOpenGroupId(null); }} label={t.groups} />
          <Bubble icon={ClipboardList} colorIdx={4} active={view === "test"} onClick={() => setView("test")} label={t.test} />
          <Bubble icon={Trophy} colorIdx={3} active={view === "leaderboard"} onClick={() => setView("leaderboard")} label={t.leaderboard} />
        </div>
      </div>

      {showShare && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-30 p-4" onClick={() => setShowShare(false)}>
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2"><AppLogo size={38} /><h3 className="font-bold text-slate-800">{t.shareTitle}</h3></div>
              <button onClick={() => setShowShare(false)}><X size={18} className="text-slate-400" /></button>
            </div>
            <p className="text-sm text-slate-500 mb-4">{t.shareSub}</p>
            <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-2.5 mb-3">
              <span className="flex-1 text-xs text-slate-500 truncate">{shareLink}</span>
              <button onClick={copyLink} className="flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-lg text-white" style={{ background: copied ? "linear-gradient(135deg,#22c55e,#0f7a3d)" : "linear-gradient(135deg,#6366f1,#4338ca)" }}>
                {copied ? <Check size={13} /> : <Copy size={13} />} {copied ? t.copied : t.copyLink}
              </button>
            </div>
          </div>
        </div>
      )}

      {showProfile && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-30 p-4" onClick={() => setShowProfile(false)}>
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-slate-800">{t.profile}</h3>
              <button onClick={() => setShowProfile(false)}><X size={18} className="text-slate-400" /></button>
            </div>
            <div className="flex flex-col items-center mb-5">
              <div className="rounded-full overflow-hidden border-4 border-indigo-100 mb-3" style={{ width: 96, height: 96 }}>
                {profilePhoto ? (
                  <img src={profilePhoto} alt="profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-indigo-50 text-indigo-400"><User size={40} /></div>
                )}
              </div>
              <p className="text-sm font-bold text-slate-700">{name || t.you}</p>
            </div>
            <label className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-white text-sm cursor-pointer mb-2" style={{ background: "linear-gradient(135deg,#6366f1,#4338ca)" }}>
              <Camera size={16} /> {t.changePhoto}
              <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
            </label>
            {profilePhoto && (
              <button onClick={() => setProfilePhoto(null)} className="w-full py-2.5 rounded-xl font-bold text-red-500 text-sm border border-red-200 mb-2">{t.removePhoto}</button>
            )}
            <button onClick={() => setShowProfile(false)} className="w-full py-2.5 rounded-xl font-bold text-slate-500 text-sm border border-slate-200">{t.close}</button>
          </div>
        </div>
      )}
    </div>
  );
}