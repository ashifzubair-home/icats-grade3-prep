/* ============================================================
   ICATS PREP — QUESTION BANK
   Add a new question anywhere in the array. Pick a NEW id
   (keep the pattern: c1, c2, c3 …). Then commit & push.

   Flow for AI / human add:
   1. Copy the template below, fill it in.
   2. Paste it into the QUESTION array (before the closing ]);
   3. In papers.js you may add its id to a fixed set, OR
      just save the file — the Home "custom paper" builder
      will already include it.

   difficulty: "easy" | "medium" | "hard"
   category:   one of  arithmetic | money | time | fraction |
               geometry | measurement | calendar | patterns |
               data | logic | reasoning
   figure:     optional — "clock" (uses fig {h, m}) or "" (none)
   answer:     index (0-based) of the correct option
   words:      "jab bhi sawal mein yeh word aaye = yeh kaam"
   explainQ:   Roman Urdu — is sawal mein kya poocha gaya hai
   explainA:   steps — har step ek line (big + easy math)

   TEMPLATE
   {
     id: "c1",
     difficulty: "medium",
     category: "time",
     q: "Question text here.",
     options: ["A", "B", "C", "D"],
     answer: 1,
     figure: "",
     fig: {},
     words: "trap word note",
     explainQ: "Roman Urdu mein sawal ka matlab.",
     explainA: ["Step 1: …", "Step 2: …", "Answer: …"]
   },
   ------------------------------------------------------------ */
window.QUESTIONS = [

  {
    id: "b1",
    difficulty: "easy",
    category: "arithmetic",
    q: "Sara bought a bag of beads. She had 1,234 red beads and 2,157 blue beads, but lost 320 beads. How many beads were left in all?",
    options: ["3071", "3171", "3391", "2971"],
    answer: 0,
    figure: "",
    fig: {},
    words: "lost / left = minus waala kaam",
    explainQ: "Sara ke paas red aur blue beads hain. Woh 320 beads kho deti hai. Sawal poochhta hai: sab mila kar ab kitne beads bache?",
    explainA: ["Pehle saare beads jodo: 1,234 + 2,157 = 3,391", "Phir lost huye 320 nikaal do: 3,391 − 320 = 3,071", "Is liye jawab A — 3071"]
  },

  {
    id: "b2",
    difficulty: "easy",
    category: "arithmetic",
    q: "If you add 268 to me, I will become 600. Who am I?",
    options: ["332", "342", "268", "432"],
    answer: 0,
    figure: "",
    fig: {},
    words: "ulta karo — add ka ulta subtraction hai",
    explainQ: "Ek number hai. Us mein 268 jodo to 600 ban jaaye. Woh number kaunsa hai?",
    explainA: ["Yeh sawal ulta karta hai: 600 − 268", "600 − 268 = 332", "Check: 332 + 268 = 600 — sahi hai"]
  },

  {
    id: "b3",
    difficulty: "easy",
    category: "arithmetic",
    q: "Hina made 240 stickers. She divided all the stickers equally among 6 friends. How many stickers did each friend get?",
    options: ["24", "30", "40", "60"],
    answer: 2,
    figure: "",
    fig: {},
    words: "equally divided = baraabar taqseem = ÷",
    explainQ: "240 sticker 6 doston mein baraabar baantne hain. Har dost ko kitne mile?",
    explainA: ["Taiseem karne ka matlab ÷ hai: 240 ÷ 6", "240 ÷ 6 = 40", "Har dost ko 40 stickers — jawab C"]
  },

  {
    id: "b5",
    difficulty: "easy",
    category: "time",
    q: "Ayesha wakes up at 6:45 am. It takes her 40 minutes to get ready. What time is she ready?",
    options: ["7:15 am", "7:25 am", "7:35 am", "7:45 am"],
    answer: 1,
    figure: "",
    fig: {},
    words: "after / takes = time aagay seen",
    explainQ: "Ayesha 6:45 par uthti hai aur taiyaar hone mein 40 minute lagte hain. Woh kitne baje taiyaar hoti hai?",
    explainA: ["6:45 mein 40 minute jodo", "45 + 40 = 85 minute = 1 ghanta 25 minute", "6:00 + 1:25 = 7:25 — jawab B"]
  },

  {
    id: "b8",
    difficulty: "easy",
    category: "money",
    q: "A 5-pack of pencils costs Rs. 75. What is the cost of one pencil?",
    options: ["Rs. 12", "Rs. 15", "Rs. 20", "Rs. 25"],
    answer: 1,
    figure: "",
    fig: {},
    words: "cost of ONE = poore ki qeemat ÷ taadad",
    explainQ: "5 pencils mil kar 75 rupay ke hain. Ek pencil ki qeemat kitni hai?",
    explainA: ["Ek ki qeemat nikalne ke liye ÷ karo: 75 ÷ 5", "75 ÷ 5 = 15", "Ek pencil Rs. 15 — jawab B"]
  },

  {
    id: "b11",
    difficulty: "medium",
    category: "fraction",
    q: "Which fraction is equal to 3/9?",
    options: ["1/3", "3/6", "1/9", "2/3"],
    answer: 0,
    figure: "",
    fig: {},
    words: "equal fraction = chhota karke dekho (simplify)",
    explainQ: "3/9 ke baraabar kaunsi fraction hai? Yani 3/9 ko chhota nambar jaisa likha jaye to kya banta hai?",
    explainA: ["3/9 mein upar aur neeche dono 3 se divide karo", "3 ÷ 3 = 1 aur 9 ÷ 3 = 3", "3/9 = 1/3 — jawab A"]
  },

  {
    id: "b14",
    difficulty: "medium",
    category: "calendar",
    q: "Bilal has cricket practice every fifth day in May, starting with May 1. What date will be his last day of practice for the month?",
    options: ["May 26", "May 29", "May 30", "May 31"],
    answer: 3,
    figure: "",
    fig: {},
    words: "every fifth day = 5, 5 jodo chaltay jao",
    explainQ: "Bilal May mein har 5-wen din practice karta hai, 1 May se shuru. May ki aakhri practice kis date ko hogi?",
    explainA: ["5, 5 karke aagay jao: 1, 6, 11, 16, 21, 26, 31", "May ke 31 din hote hain", "Aakhri practice 31 May — jawab D"]
  },

  {
    id: "b17",
    difficulty: "medium",
    category: "measurement",
    q: "Nine kilometres two hundred forty metres is equal to how many metres?",
    options: ["9024 metres", "9204 metres", "9240 metres", "9420 metres"],
    answer: 2,
    figure: "",
    fig: {},
    words: "km = 1000 metres; dono ko milao",
    explainQ: "9 kilometre 240 metre ko poore metre mein likhna hai. Kitne metre bane?",
    explainA: ["1 km = 1000 m, to 9 km = 9000 m", "9000 + 240 = 9240", "Jawab C — 9240 metres"]
  },

  {
    id: "b19",
    difficulty: "medium",
    category: "logic",
    q: "A farmer has hens and goats. There are 10 heads and 28 legs in total. How many goats does he have?",
    options: ["3 goats", "4 goats", "5 goats", "6 goats"],
    answer: 1,
    figure: "",
    fig: {},
    words: "heads = sirf 1; goat ke 4 legs, hen ke 2",
    explainQ: "Farm par hens aur goats hain. Kul 10 sar hain aur 28 tangen. Farm par kitni goats hain?",
    explainA: ["Agar sab hens hotin to legs hote: 10 × 2 = 20", "Extra legs: 28 − 20 = 8", "Har goat ke 2 extra legs hain: 8 ÷ 2 = 4 goats", "Jawab B — 4 goats"]
  },

  {
    id: "b22",
    difficulty: "hard",
    category: "time",
    q: "A train leaves Station A at 2:20 pm and takes 1 hour 50 minutes to reach Station B. It waits 25 minutes, then travels 1 hour 15 minutes to Station C. What time does it arrive at Station C?",
    options: ["5:30 pm", "5:40 pm", "5:50 pm", "6:00 pm"],
    answer: 2,
    figure: "",
    fig: {},
    words: "station se station — time ko ek saath jodo",
    explainQ: "Train 2:20 pe chalti hai, B pe 1 ghanta 50 minute mein pahunchti hai, 25 minute rukti hai, phir C ka rasta 1 ghanta 15 minute hai. C pe kitne baje pahunchegi?",
    explainA: ["2:20 + 1:50 = 4:10 (B pe aayi)", "4:10 + 25 minute wait = 4:35", "4:35 + 1:15 = 5:50 (C pe aayi)", "Jawab C — 5:50 pm"]
  },

  {
    id: "b24",
    difficulty: "hard",
    category: "time",
    q: "A clock gains 5 minutes every hour. It was set correctly at 12:00 pm. What time will the faulty clock show when the actual time is 4:00 pm?",
    options: ["4:15 pm", "4:20 pm", "4:25 pm", "3:40 pm"],
    answer: 1,
    figure: "",
    fig: {},
    words: "gains = zyada dikhata hai; growl = kam; tricky!",
    explainQ: "Ek ghadi har ghante mein 5 minute aagay (zyada) ho jaati hai. 12:00 pe theek thi. Asli waqt 4:00 hai to yeh ghadi kya dikha rahi hai?",
    explainA: ["Asli waqt 12 se 4 tak = 4 ghante", "Har ghante 5 minute zyada: 4 × 5 = 20 minute", "Ghadi 4:00 nahi, 4:20 dikhaayegi", "Jawab B — 4:20 pm"]
  }

];