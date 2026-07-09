# Group Study App — Setup, Website & APK Guide (Hindi)

Ye project ek ready-to-run React app hai. Neeche diye steps apne computer par (Windows/Mac/Linux) follow karo.
Pehle **Node.js** install kar lo (nodejs.org se, LTS version) agar pehle se nahi hai.

---

## Step 1: Project chalu karo (local test ke liye)

Terminal/CMD me is folder ke andar jaake:

```
npm install
npm run dev
```

Browser me `http://localhost:5173` khol kar app dekh sakte ho.

---

## Step 2: AI Test generation ke liye API key setup (zaroori)

App ke andar "AI Test & Quiz" feature Anthropic API use karta hai. Security ke liye API key
seedhe app/APK ke andar nahi rakhi ja sakti (koi bhi nikaal sakta hai) — isliye ek chhota
backend function (`api/generate-test.js`) banaya gaya hai jo key ko safe rakhta hai.

- Anthropic console (console.anthropic.com) se apni API key le lo.
- Website deploy karte waqt (Step 3) ye key environment variable ke roop me set karni hogi.
- Local testing ke liye: `.env` file banao aur usme `ANTHROPIC_API_KEY=your_key_here` daalo,
  aur `vercel dev` command se local server chalao (niche dekho).

---

## Step 3: Website ke roop me publish karo (Vercel — free, sabse aasan)

1. Is poore folder ko GitHub par ek naye repository me push karo.
2. [vercel.com](https://vercel.com) par jaake GitHub account se login karo.
3. "Add New Project" → apna GitHub repo select karo → Deploy dabao.
4. Deploy hone se pehle: Project Settings → Environment Variables me jaake
   `ANTHROPIC_API_KEY` naam se apni key add karo.
5. 2 minute me tumhe ek live website URL milega (jaise `group-study-app.vercel.app`).

Isi URL ko tum apni website ke roop me kisi ko bhi share kar sakte ho — browser me chalega,
mobile browser me bhi.

---

## Step 4: APK banao (Android app) — 2 tareeke

### Tareeka A — PWABuilder (sabse jaldi, coding ki zaroorat nahi)

1. Step 3 wala live website URL ready rakho.
2. [pwabuilder.com](https://www.pwabuilder.com) par jaao.
3. Apna website URL paste karo aur "Start" dabao.
4. "Android" package select karo → "Generate" dabao.
5. Kuch minute me signed/unsigned APK download ho jaayega — seedhe phone me install
   kar sakte ho ya Play Store par upload kar sakte ho.

Isme icon files (`public/icon-192.png`, `public/icon-512.png`) add karna na bhoolo — apna
app logo 192x192 aur 512x512 PNG size me banwa kar `public` folder me daal do, warna
PWABuilder default icon use karega.

### Tareeka B — Capacitor (zyada control, native feel)

Isi project folder ke andar:

```
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "Group Study" com.groupstudy.app --web-dir=dist
npm run build
npx cap add android
npx cap copy android
npx cap open android
```

Ye Android Studio khol dega. Wahan se:
- `Build` menu → `Generate Signed Bundle / APK` → APK choose karo → naya keystore banao
  (pehli baar) → Finish. Kuch minute me signed APK ban jaayega
  (`android/app/release/app-release.apk`).
- Ye APK seedhe kisi bhi Android phone me install ho sakta hai, ya Play Store par upload
  kar sakte ho.

Android Studio install karna padega (developer.android.com/studio se, free hai) — isme
Android SDK bhi included aata hai.

---

## Step 5: Play Store par publish karna (optional)

1. [play.google.com/console](https://play.google.com/console) par jaake Google Play
   Console account banao (ek-baar $25 fee).
2. "Create app" → apna signed APK/AAB upload karo.
3. Store listing (naam, description, screenshots, privacy policy link) bharo.
4. Review ke liye submit karo — usually 1-7 din lagte hain approval me.

---

## Zaroori Nots (Important Notes)

- Abhi is app me login, groups, chat, posts, leaderboard sab **sirf local memory** me hain —
  app band karte hi ya refresh karte hi data reset ho jaata hai. Agar real users ke beech
  data share hona chahiye (jaise ek user ka post doosre ko dikhe), to Firebase ya Supabase
  jaisa real database backend lagana padega. Ye agla zaroori step hai agar app real users
  ke liye launch karni hai.
- `api/generate-test.js` sirf Vercel/Netlify jaisi serverless hosting par kaam karta hai.
  Agar tum kisi aur hosting (jaise plain static hosting) use kar rahe ho, isko apne server
  setup ke hisaab se adjust karna padega.
