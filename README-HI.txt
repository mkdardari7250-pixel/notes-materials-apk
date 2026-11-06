नया आसान APK Builder पैकेज

1) इस ZIP की सामान्य फाइलें GitHub repository के root में upload करें:
index.html, styles.css, firebase.js, app.js, package.json, capacitor.config.json
README-HI.txt वैकल्पिक है।
2) WORKFLOW-CONTENT.txt खोलें और पूरा टेक्स्ट कॉपी करें।
3) GitHub repository में Add file > Create new file चुनें।
4) File name में ठीक यह path लिखें:
.github/workflows/build-apk.yml
5) नीचे कॉपी किया workflow content paste करें और Commit changes करें।
6) Actions tab > Build NOTES Materials APK > Run workflow चलाएँ।
7) सफल run के Artifacts से NOTES-Materials-debug-APK डाउनलोड करें और ZIP extract कर APK इंस्टॉल करें।

नोट: यह debug/testing APK है, Play Store release के लिए signed release नहीं।
ऐप की Login, Admin, PDF upload और Mock Test सुविधाएँ अभी development के अगले चरण में हैं।
