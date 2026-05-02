import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { app } from "./firebase-config.js";

const REF_MAP = {
    // https://orbit-hopper.com/download.html?lang=ro&ref=x8k2m9
    "x8k2m9": "Alexandru B.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=q3w7p4
    "q3w7p4": "Madalina B.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=r5t1n6
    "r5t1n6": "Madalina S.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=j9v4b2
    "j9v4b2": "George P.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=h6y8c3
    "h6y8c3": "Ciprian T.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=d2f5g7
    "d2f5g7": "Ela T.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=k4m1w9
    "k4m1w9": "Iulian R.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=p7n3x5
    "p7n3x5": "Marius O.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=z1s6t8
    "z1s6t8": "Alina G.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=v9c2r4
    "v9c2r4": "Cristian P.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=b3g7h1
    "b3g7h1": "Antonia D.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=w5j9k6
    "w5j9k6": "Cristian D.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=t8m2n4
    "t8m2n4": "Elkan Z.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=f1p5q3
    "f1p5q3": "Basit N.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=y6r9s7
    "y6r9s7": "Gabriel V.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=c4v8w2
    "c4v8w2": "Ana C.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=n7x1z5
    "n7x1z5": "Gheorghe C.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=g3b6d9
    "g3b6d9": "Alex N.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=m8f2h4
    "m8f2h4": "Georgiana N.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=s1j5k7
    "s1j5k7": "Catalin C.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=u9n3p6
    "u9n3p6": "Georgiana C.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=a2q7r1
    "a2q7r1": "Florin B.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=e5t9v4
    "e5t9v4": "Daniela B.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=i8w2x6
    "i8w2x6": "Georgeta A.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=o3z7b1
    "o3z7b1": "Ionela G.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=l6c9d4
    "l6c9d4": "Cristina N.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=q1f5g8
    "q1f5g8": "Denis N.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=v4h7j2
    "v4h7j2": "Roxana C.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=z8k3m5
    "z8k3m5": "Constantin D.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=b7n1p9
    "b7n1p9": "Mihaela Pop",
    // https://orbit-hopper.com/download.html?lang=ro&ref=d5q4r6
    "d5q4r6": "Catalin B.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=g9s8t2
    "g9s8t2": "Ciprian M.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=j2v6w3
    "j2v6w3": "Adina O.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=m5x9z7
    "m5x9z7": "Raluca T.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=p8b3c1
    "p8b3c1": "Stefan I.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=r4d7f6
    "r4d7f6": "Mirela L.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=t1g5h9
    "t1g5h9": "Alexandra A.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=w6j8k4
    "w6j8k4": "Eusebiu P.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=y3m2n7
    "y3m2n7": "Maria V.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=a9p1q5
    "a9p1q5": "Ovidiu I.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=c6r4s8
    "c6r4s8": "Ionut Z.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=f2t7v3
    "f2t7v3": "Cosmin B.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=h5w1x9
    "h5w1x9": "Cristian O.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=k8z4b6
    "k8z4b6": "Ines",
    // https://orbit-hopper.com/download.html?lang=ro&ref=n2c7d1
    "n2c7d1": "Andra R.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=q5f9g3
    "q5f9g3": "Bibi",
    // https://orbit-hopper.com/download.html?lang=ro&ref=s8h4j6
    "s8h4j6": "Ioana Mocanu",
    // https://orbit-hopper.com/download.html?lang=ro&ref=v1k7m2
    "v1k7m2": "Alex Mih.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=x4n8p5
    "x4n8p5": "Cristian C.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=z7q3r9
    "z7q3r9": "Test",
    // https://orbit-hopper.com/download.html?lang=ro&ref=e3r6t9
    "e3r6t9": "Alina Petcu.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=h2k5n8
    "h2k5n8": "Alex Bra.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=m4p7s1
    "m4p7s1": "Alexandra Rot.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=w9b2c5
    "w9b2c5": "Alexa",
    // https://orbit-hopper.com/download.html?lang=ro&ref=f6g3j8
    "f6g3j8": "Andrei Rares",
    // https://orbit-hopper.com/download.html?lang=ro&ref=l1n4q7
    "l1n4q7": "Anca Nazare",
    // https://orbit-hopper.com/download.html?lang=ro&ref=t5v8x2
    "t5v8x2": "Vladimir",
    // https://orbit-hopper.com/download.html?lang=ro&ref=d9h3k6
    "d9h3k6": "Bogdan Tenis",
    // https://orbit-hopper.com/download.html?lang=ro&ref=r2m5p8
    "r2m5p8": "Dana Sophie",
    // https://orbit-hopper.com/download.html?lang=ro&ref=b7c1f4
    "b7c1f4": "Bunica Dom.",
    // https://orbit-hopper.com/download.html?lang=ro&ref=y6z9a3
    "y6z9a3": "Bogdan Florescu",
    // https://orbit-hopper.com/download.html?lang=ro&ref=j5n8w1
    "j5n8w1": "Adi Tenis",
    // https://orbit-hopper.com/download.html?lang=ro&ref=q4s7v2
    "q4s7v2": "George Sophie",
    // https://orbit-hopper.com/download.html?lang=ro&ref=g8h2k5
    "g8h2k5": "Tata Eva",
    // https://orbit-hopper.com/download.html?lang=ro&ref=u3w6y9
    "u3w6y9": "Sorin Tenis",
    // https://orbit-hopper.com/download.html?lang=ro&ref=c1d4f7
    "c1d4f7": "Alex Gigel",
    // https://orbit-hopper.com/download.html?lang=ro&ref=p2r5t8
    "p2r5t8": "Iulian Et. 1",
    // https://orbit-hopper.com/download.html?lang=ro&ref=m6n9q3
    "m6n9q3": "Ciucu Andreea",
    // https://orbit-hopper.com/download.html?lang=ro&ref=v4x7z1
    "v4x7z1": "Adrian Vasile",
    // https://orbit-hopper.com/download.html?lang=ro&ref=b8d2g5
    "b8d2g5": "Emil Mihai",
    // https://orbit-hopper.com/download.html?lang=ro&ref=h9j3l6
    "h9j3l6": "Florin Robert",
    // https://orbit-hopper.com/download.html?lang=ro&ref=n1p4s7
    "n1p4s7": "Name 22",
    // https://orbit-hopper.com/download.html?lang=ro&ref=r5u8w2
    "r5u8w2": "Name 23",
    // https://orbit-hopper.com/download.html?lang=ro&ref=e6f9k3
    "e6f9k3": "Name 24",
    // https://orbit-hopper.com/download.html?lang=ro&ref=t1v4y7
    "t1v4y7": "Name 25",
    // https://orbit-hopper.com/download.html?lang=ro&ref=a8c2d5
    "a8c2d5": "Name 26",
    // https://orbit-hopper.com/download.html?lang=ro&ref=m9p3r6
    "m9p3r6": "Name 27",
    // https://orbit-hopper.com/download.html?lang=ro&ref=j4l7n1
    "j4l7n1": "Name 28",
    // https://orbit-hopper.com/download.html?lang=ro&ref=w5y8b2
    "w5y8b2": "Name 29",
    // https://orbit-hopper.com/download.html?lang=ro&ref=f3h6j9
    "f3h6j9": "Name 30",
    // https://orbit-hopper.com/download.html?lang=ro&ref=q7s1u4
    "q7s1u4": "Name 31",
    // https://orbit-hopper.com/download.html?lang=ro&ref=d8g2k5
    "d8g2k5": "Name 32",
    // https://orbit-hopper.com/download.html?lang=ro&ref=p6r9t3
    "p6r9t3": "Name 33",
    // https://orbit-hopper.com/download.html?lang=ro&ref=v1x4z7
    "v1x4z7": "Name 34",
    // https://orbit-hopper.com/download.html?lang=ro&ref=c5e8h2
    "c5e8h2": "Name 35",
    // https://orbit-hopper.com/download.html?lang=ro&ref=n4q7s2
    "n4q7s2": "Name 36",
    // https://orbit-hopper.com/download.html?lang=ro&ref=b9d3f6
    "b9d3f6": "Name 37",
    // https://orbit-hopper.com/download.html?lang=ro&ref=l2m5p8
    "l2m5p8": "Name 38",
    // https://orbit-hopper.com/download.html?lang=ro&ref=u7w1y4
    "u7w1y4": "Name 39",
    // https://orbit-hopper.com/download.html?lang=ro&ref=g6j9k3
    "g6j9k3": "Name 40",
    // https://orbit-hopper.com/download.html?lang=ro&ref=r8t2v5
    "r8t2v5": "Name 41",
    // https://orbit-hopper.com/download.html?lang=ro&ref=a1c4e7
    "a1c4e7": "Name 42",
    // https://orbit-hopper.com/download.html?lang=ro&ref=h3k6n9
    "h3k6n9": "Name 43",
    // https://orbit-hopper.com/download.html?lang=ro&ref=p5s8u2
    "p5s8u2": "Name 44",
    // https://orbit-hopper.com/download.html?lang=ro&ref=d4f7j1
    "d4f7j1": "Name 45",
    // https://orbit-hopper.com/download.html?lang=ro&ref=m8q3t6
    "m8q3t6": "Name 46",
    // https://orbit-hopper.com/download.html?lang=ro&ref=w2y5b8
    "w2y5b8": "Name 47",
    // https://orbit-hopper.com/download.html?lang=ro&ref=n9p1r4
    "n9p1r4": "Name 48",
    // https://orbit-hopper.com/download.html?lang=ro&ref=v3x6z9
    "v3x6z9": "Name 49",
    // https://orbit-hopper.com/download.html?lang=ro&ref=c7e1g4
    "c7e1g4": "Name 50",
};

const analytics = getAnalytics(app);

const ref = new URLSearchParams(window.location.search).get('ref');
if (ref) {
    const name = REF_MAP[ref] || ref;
    const page = window.location.pathname.split('/').pop() || 'index';
    logEvent(analytics, 'page_visit', { ref_id: name, page: page });
}
