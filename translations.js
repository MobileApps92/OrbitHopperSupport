/**
 * Orbit Hopper — Web page translations.
 *
 * Usage:
 *   1. Add data-i18n="key" attributes to HTML elements.
 *   2. Call initI18n() on DOMContentLoaded.
 *   3. Language is determined by: ?lang= param > browser language > 'en'.
 */

const TRANSLATIONS = {
  // ─────────── SHARED (all pages) ───────────
  en: {
    footer: '© 2026 Catalin Lazar. All rights reserved.',
    back_contact: 'Contact',
    customer_support: 'Customer Support',

    // CONTACT PAGE
    contact_title: 'Contact & Support',
    get_in_touch: 'Get in Touch',
    get_in_touch_desc: "Having an issue or want to share feedback? We'd love to hear from you.",
    faq: 'FAQ',
    faq_play_q: 'How do I play?',
    faq_play_a: 'Hold anywhere on the screen to charge your launch. A trajectory line appears showing where your rocket will go. Release to fly! Land on the next planet to keep going.',
    faq_offline_q: 'Does the game work offline?',
    faq_offline_a: 'Yes! Orbit Hopper is fully playable without an internet connection.',
    faq_sound_q: 'How do I turn off sound or haptics?',
    faq_sound_a: 'You can toggle sound, music, and haptic feedback from Menu > Settings.',
    faq_ads_q: 'Why are there ads?',
    faq_ads_a: 'Ads help keep Orbit Hopper free for everyone. Rewarded ads are always optional — you choose to watch them for an extra life.',
    faq_backup_q: 'Is my progress backed up?',
    faq_backup_a: 'Yes! Your scores, statistics, and unlocks are automatically backed up to the cloud. If you reinstall the app, your progress will be restored.',
    faq_crash_q: 'My game is crashing. What should I do?',
    faq_crash_a: 'Make sure your app is updated to the latest version. If the issue persists, email us with your device model and OS version.',
    download_link: 'Download the Game',
    privacy_link: 'Privacy Policy',

    // DOWNLOAD PAGE
    download_title: 'Download the Game',
    landing_tagline: 'Master gravity. Hop the orbit.',
    redirecting: 'Redirecting you to the store...',
    download_desc: 'Master gravity across 11 themed worlds, unlock rockets and companions, discover secret zones, and compete on global leaderboards. Free to play.',
    download_on: 'Download on',
    get_it_on: 'Get it on',
    or_divider: 'or',
    download_hint_1: 'Not redirected? Tap the button above for your platform.',
    download_hint_2: 'On desktop, scan the QR code below with your phone.',
    ss_1: 'Master Gravity',
    ss_2: 'Explore Secret Worlds',
    ss_3: 'Complete Events',
    ss_4: 'Find Your Way Home',
    ss_5: 'Find New Friends',
    ss_6: 'Unlock Your Potential',
    ss_7: 'Take Risks',
    ss_8: 'Reach Higher',

    // PRIVACY POLICY PAGE
    pp_title: 'Privacy Policy',
    pp_effective: 'Effective date: March 22, 2026',
    pp_overview_h: 'Overview',
    pp_overview_p1: "Orbit Hopper is a free mobile arcade game developed by Catalin Lazar. Your privacy matters, and this policy explains what data is collected, how it's used, and your choices.",
    pp_overview_p2: 'Orbit Hopper does not require an account and does not collect personal information directly. Game progress is backed up anonymously to the cloud so it can be restored if you reinstall the app.',
    pp_device_h: 'Data Stored on Your Device',
    pp_device_p: 'The following data is stored locally on your device:',
    pp_device_li1: 'High scores, best times, and game statistics',
    pp_device_li2: 'Unlocked rockets and companions',
    pp_device_li3: 'Sound, music, and haptic preferences',
    pp_device_note: 'Settings (sound, music, haptics) are stored on your device only and are cleared if you uninstall the app.',
    pp_cloud_h: 'Cloud Backup',
    pp_cloud_p1: 'To protect your progress, Orbit Hopper backs up game data to the cloud using Firebase. This allows your scores, statistics, and unlocks to be restored if you reinstall the app on the same device.',
    pp_cloud_p2: "Here's how cloud backup works:",
    pp_cloud_li1: 'An anonymous account is created automatically — no email, username, or personal information is required.',
    pp_cloud_li2: 'Game progress is uploaded only when you achieve a new personal record (high score, best time, or furthest planet reached).',
    pp_cloud_li3: 'Backed-up data includes scores, statistics, achievement progress, and unlocked items. It does not include settings or ad-related data.',
    pp_cloud_note: 'Cloud data is stored in Firebase Firestore (EU region) and is associated only with an anonymous identifier — not with your name, email, or any other personal information.',
    pp_third_h: 'Third-Party Services',
    pp_third_p: 'Orbit Hopper uses the following third-party services that may collect data independently:',
    pp_admob_h: 'Google AdMob (Advertising)',
    pp_admob_p: 'AdMob serves ads and may collect device identifiers, ad interaction data, and approximate location to deliver relevant ads. Rewarded ads are always optional.',
    pp_analytics_h: 'Firebase Analytics',
    pp_analytics_p: 'Firebase Analytics collects anonymous usage data such as session duration, screen views, and device information to help improve the game. No personally identifiable information is collected.',
    pp_children_h: "Children's Privacy",
    pp_children_p: 'Orbit Hopper is not directed at children under 13. We do not knowingly collect personal information from children. AdMob is configured to comply with applicable regulations.',
    pp_choices_h: 'Your Choices',
    pp_choices_li1: 'Ad tracking: You can limit ad personalization through your device settings (iOS: Settings > Privacy > Tracking; Android: Settings > Google > Ads).',
    pp_choices_li2: 'Reset all data: You can erase all progress (local and cloud) from within the app. Go to Menu > Reset All Progress. This permanently deletes your scores, statistics, unlocks, and cloud backup.',
    pp_choices_li3: 'Uninstall: Uninstalling the app removes all locally stored data. Your cloud backup will remain so progress can be restored on reinstall.',
    pp_contact_h: 'Contact',
    pp_contact_p: 'Questions about this privacy policy? Reach out at',
  },

  ro: {
    footer: '© 2026 Catalin Lazar. Toate drepturile rezervate.',
    back_contact: 'Contact',
    customer_support: 'Asistență Clienți',
    contact_title: 'Contact & Suport',
    get_in_touch: 'Contactează-ne',
    get_in_touch_desc: 'Ai o problemă sau vrei să ne dai un feedback? Ne-ar face plăcere să auzim de la tine.',
    faq: 'Întrebări Frecvente',
    faq_play_q: 'Cum se joacă?',
    faq_play_a: 'Ține apăsat oriunde pe ecran pentru a încărca lansarea. O linie de traiectorie arată unde va merge racheta. Eliberează pentru a zbura! Aterizează pe următoarea planetă pentru a continua.',
    faq_offline_q: 'Funcționează jocul offline?',
    faq_offline_a: 'Da! Orbit Hopper poate fi jucat complet fără conexiune la internet.',
    faq_sound_q: 'Cum dezactivez sunetul sau vibrațiile?',
    faq_sound_a: 'Poți comuta sunetul, muzica și vibrațiile din Meniu > Setări.',
    faq_ads_q: 'De ce sunt reclame?',
    faq_ads_a: 'Reclamele ajută ca Orbit Hopper să rămână gratuit pentru toată lumea. Reclamele cu recompensă sunt mereu opționale — tu alegi dacă le vizionezi pentru o viață extra.',
    faq_backup_q: 'Progresul meu este salvat?',
    faq_backup_a: 'Da! Scorurile, statisticile și deblocările tale sunt salvate automat în cloud. Dacă reinstalezi aplicația, progresul va fi restaurat.',
    faq_crash_q: 'Jocul se blochează. Ce pot face?',
    faq_crash_a: 'Asigură-te că aplicația este actualizată la ultima versiune. Dacă problema persistă, trimite-ne un email cu modelul dispozitivului și versiunea OS.',
    download_link: 'Descarcă Jocul',
    privacy_link: 'Politica de Confidențialitate',
    download_title: 'Descarcă Jocul',
    landing_tagline: 'Stăpânește gravitația. Sari pe orbită.',
    redirecting: 'Redirecționare către magazin...',
    download_desc: 'Stăpânește gravitația în 11 lumi tematice, deblochează rachete și companioni, descoperă zone secrete și concurează în clasamente globale. Gratuit.',
    download_on: 'Descarcă de pe',
    get_it_on: 'Disponibil pe',
    or_divider: 'sau',
    download_hint_1: 'Nu ai fost redirecționat? Apasă butonul de mai sus.',
    download_hint_2: 'Pe desktop, scanează codul QR de mai jos cu telefonul.',
    ss_1: 'Stăpânește Gravitația',
    ss_2: 'Explorează Lumi Secrete',
    ss_3: 'Completează Evenimente',
    ss_4: 'Găsește Drumul Acasă',
    ss_5: 'Găsește Noi Prieteni',
    ss_6: 'Deblochează-ți Potențialul',
    ss_7: 'Asumă-ți Riscuri',
    ss_8: 'Țintește Mai Sus',
    pp_title: 'Politica de Confidențialitate',
    pp_effective: 'Data intrării în vigoare: 22 Martie 2026',
    pp_overview_h: 'Prezentare Generală',
    pp_overview_p1: 'Orbit Hopper este un joc arcade mobil gratuit dezvoltat de Catalin Lazar. Confidențialitatea ta contează, iar această politică explică ce date sunt colectate, cum sunt utilizate și ce opțiuni ai.',
    pp_overview_p2: 'Orbit Hopper nu necesită un cont și nu colectează informații personale direct. Progresul este salvat anonim în cloud pentru a putea fi restaurat dacă reinstalezi aplicația.',
    pp_device_h: 'Date Stocate pe Dispozitiv',
    pp_device_p: 'Următoarele date sunt stocate local pe dispozitivul tău:',
    pp_device_li1: 'Scoruri maxime, cele mai bune timpuri și statistici',
    pp_device_li2: 'Rachete și companioni deblocați',
    pp_device_li3: 'Preferințe de sunet, muzică și vibrații',
    pp_device_note: 'Setările (sunet, muzică, vibrații) sunt stocate doar pe dispozitivul tău și se șterg la dezinstalare.',
    pp_cloud_h: 'Backup în Cloud',
    pp_cloud_p1: 'Pentru a-ți proteja progresul, Orbit Hopper salvează datele jocului în cloud folosind Firebase. Aceasta permite restaurarea scorurilor, statisticilor și deblocărilor la reinstalare.',
    pp_cloud_p2: 'Iată cum funcționează backup-ul în cloud:',
    pp_cloud_li1: 'Un cont anonim este creat automat — nu este necesar email, nume de utilizator sau informații personale.',
    pp_cloud_li2: 'Progresul este încărcat doar când obții un nou record personal (scor maxim, cel mai bun timp sau cea mai departe planetă).',
    pp_cloud_li3: 'Datele salvate includ scoruri, statistici, progresul realizărilor și elementele deblocate. Nu includ setări sau date legate de reclame.',
    pp_cloud_note: 'Datele cloud sunt stocate în Firebase Firestore (regiunea UE) și sunt asociate doar cu un identificator anonim — nu cu numele, emailul sau alte informații personale.',
    pp_third_h: 'Servicii Terțe',
    pp_third_p: 'Orbit Hopper folosește următoarele servicii terțe care pot colecta date independent:',
    pp_admob_h: 'Google AdMob (Publicitate)',
    pp_admob_p: 'AdMob afișează reclame și poate colecta identificatori de dispozitiv, date de interacțiune și locație aproximativă. Reclamele cu recompensă sunt mereu opționale.',
    pp_analytics_h: 'Firebase Analytics',
    pp_analytics_p: 'Firebase Analytics colectează date anonime de utilizare precum durata sesiunii, vizualizările de ecran și informații despre dispozitiv. Nu sunt colectate informații personale identificabile.',
    pp_children_h: 'Confidențialitatea Copiilor',
    pp_children_p: 'Orbit Hopper nu este destinat copiilor sub 13 ani. Nu colectăm cu bună știință informații personale de la copii. AdMob este configurat conform reglementărilor aplicabile.',
    pp_choices_h: 'Opțiunile Tale',
    pp_choices_li1: 'Urmărirea reclamelor: Poți limita personalizarea reclamelor din setările dispozitivului (iOS: Setări > Confidențialitate > Urmărire; Android: Setări > Google > Reclame).',
    pp_choices_li2: 'Resetare date: Poți șterge tot progresul (local și cloud) din aplicație. Mergi la Meniu > Resetează Progresul. Aceasta șterge permanent scorurile, statisticile, deblocările și backup-ul cloud.',
    pp_choices_li3: 'Dezinstalare: Dezinstalarea aplicației șterge toate datele locale. Backup-ul cloud va rămâne pentru a putea restaura progresul la reinstalare.',
    pp_contact_h: 'Contact',
    pp_contact_p: 'Întrebări despre politica de confidențialitate? Contactează-ne la',
  },

  es: {
    footer: '© 2026 Catalin Lazar. Todos los derechos reservados.',
    back_contact: 'Contacto',
    customer_support: 'Atención al Cliente',
    contact_title: 'Contacto y Soporte',
    get_in_touch: 'Escríbenos',
    get_in_touch_desc: '¿Tienes un problema o quieres compartir tu opinión? Nos encantaría saber de ti.',
    faq: 'Preguntas Frecuentes',
    faq_play_q: '¿Cómo se juega?',
    faq_play_a: 'Mantén pulsado en cualquier lugar de la pantalla para cargar el lanzamiento. Aparece una línea de trayectoria que muestra dónde irá tu cohete. ¡Suelta para volar! Aterriza en el siguiente planeta para seguir.',
    faq_offline_q: '¿El juego funciona sin conexión?',
    faq_offline_a: '¡Sí! Orbit Hopper es completamente jugable sin conexión a internet.',
    faq_sound_q: '¿Cómo desactivo el sonido o la vibración?',
    faq_sound_a: 'Puedes activar o desactivar el sonido, la música y la vibración desde Menú > Ajustes.',
    faq_ads_q: '¿Por qué hay anuncios?',
    faq_ads_a: 'Los anuncios ayudan a mantener Orbit Hopper gratis para todos. Los anuncios con recompensa siempre son opcionales — tú eliges verlos para una vida extra.',
    faq_backup_q: '¿Se guarda mi progreso?',
    faq_backup_a: '¡Sí! Tus puntuaciones, estadísticas y desbloqueos se guardan automáticamente en la nube. Si reinstalas la app, tu progreso se restaurará.',
    faq_crash_q: 'Mi juego se bloquea. ¿Qué hago?',
    faq_crash_a: 'Asegúrate de tener la última versión de la app. Si el problema continúa, envíanos un email con el modelo de tu dispositivo y versión del sistema.',
    download_link: 'Descargar el Juego',
    privacy_link: 'Política de Privacidad',
    download_title: 'Descargar el Juego',
    landing_tagline: 'Domina la gravedad. Salta a la órbita.',
    redirecting: 'Redirigiendo a la tienda...',
    download_desc: 'Domina la gravedad en 11 mundos temáticos, desbloquea cohetes y compañeros, descubre zonas secretas y compite en clasificaciones globales. Gratis.',
    download_on: 'Descargar en',
    get_it_on: 'Consíguelo en',
    or_divider: 'o',
    download_hint_1: '¿No te redirigió? Toca el botón de arriba.',
    download_hint_2: 'En ordenador, escanea el código QR de abajo con tu teléfono.',
    ss_1: 'Domina la Gravedad',
    ss_2: 'Explora Mundos Secretos',
    ss_3: 'Completa Eventos',
    ss_4: 'Encuentra el Camino a Casa',
    ss_5: 'Encuentra Nuevos Amigos',
    ss_6: 'Desbloquea Tu Potencial',
    ss_7: 'Arriésgate',
    ss_8: 'Apunta Más Alto',
    pp_title: 'Política de Privacidad',
    pp_effective: 'Fecha de vigencia: 22 de Marzo de 2026',
    pp_overview_h: 'Descripción General',
    pp_overview_p1: 'Orbit Hopper es un juego arcade móvil gratuito desarrollado por Catalin Lazar. Tu privacidad importa, y esta política explica qué datos se recopilan, cómo se usan y tus opciones.',
    pp_overview_p2: 'Orbit Hopper no requiere una cuenta y no recopila información personal directamente. El progreso se guarda anónimamente en la nube para poder restaurarlo si reinstalas la app.',
    pp_device_h: 'Datos Almacenados en tu Dispositivo',
    pp_device_p: 'Los siguientes datos se almacenan localmente en tu dispositivo:',
    pp_device_li1: 'Puntuaciones máximas, mejores tiempos y estadísticas',
    pp_device_li2: 'Cohetes y compañeros desbloqueados',
    pp_device_li3: 'Preferencias de sonido, música y vibración',
    pp_device_note: 'Los ajustes (sonido, música, vibración) solo se almacenan en tu dispositivo y se borran al desinstalar.',
    pp_cloud_h: 'Copia de Seguridad en la Nube',
    pp_cloud_p1: 'Para proteger tu progreso, Orbit Hopper guarda los datos en la nube usando Firebase. Esto permite restaurar puntuaciones, estadísticas y desbloqueos al reinstalar la app.',
    pp_cloud_p2: 'Así funciona la copia de seguridad:',
    pp_cloud_li1: 'Se crea una cuenta anónima automáticamente — no se requiere email, nombre de usuario ni información personal.',
    pp_cloud_li2: 'El progreso se sube solo cuando logras un nuevo récord personal (puntuación máxima, mejor tiempo o planeta más lejano).',
    pp_cloud_li3: 'Los datos guardados incluyen puntuaciones, estadísticas, progreso de logros y elementos desbloqueados. No incluyen ajustes ni datos de anuncios.',
    pp_cloud_note: 'Los datos en la nube se almacenan en Firebase Firestore (región UE) y están asociados solo con un identificador anónimo — no con tu nombre, email u otra información personal.',
    pp_third_h: 'Servicios de Terceros',
    pp_third_p: 'Orbit Hopper utiliza los siguientes servicios de terceros que pueden recopilar datos de forma independiente:',
    pp_admob_h: 'Google AdMob (Publicidad)',
    pp_admob_p: 'AdMob muestra anuncios y puede recopilar identificadores de dispositivo, datos de interacción y ubicación aproximada. Los anuncios con recompensa siempre son opcionales.',
    pp_analytics_h: 'Firebase Analytics',
    pp_analytics_p: 'Firebase Analytics recopila datos anónimos de uso como duración de sesión, vistas de pantalla e información del dispositivo. No se recopila información personal identificable.',
    pp_children_h: 'Privacidad de los Niños',
    pp_children_p: 'Orbit Hopper no está dirigido a niños menores de 13 años. No recopilamos información personal de niños a sabiendas. AdMob está configurado para cumplir con las regulaciones aplicables.',
    pp_choices_h: 'Tus Opciones',
    pp_choices_li1: 'Seguimiento publicitario: Puedes limitar la personalización de anuncios en los ajustes de tu dispositivo (iOS: Ajustes > Privacidad > Seguimiento; Android: Ajustes > Google > Anuncios).',
    pp_choices_li2: 'Borrar datos: Puedes borrar todo el progreso (local y nube) desde la app. Ve a Menú > Borrar Progreso. Esto elimina permanentemente puntuaciones, estadísticas, desbloqueos y copia de seguridad.',
    pp_choices_li3: 'Desinstalar: Desinstalar la app elimina todos los datos locales. La copia en la nube se mantiene para restaurar el progreso al reinstalar.',
    pp_contact_h: 'Contacto',
    pp_contact_p: '¿Preguntas sobre esta política? Escríbenos a',
  },

  fr: {
    footer: '© 2026 Catalin Lazar. Tous droits réservés.',
    back_contact: 'Contact',
    customer_support: 'Support Client',
    contact_title: 'Contact & Support',
    get_in_touch: 'Contactez-nous',
    get_in_touch_desc: 'Un problème ou un retour à partager ? Nous serions ravis de vous entendre.',
    faq: 'FAQ',
    faq_play_q: 'Comment jouer ?',
    faq_play_a: "Appuyez n'importe où sur l'écran pour charger votre lancement. Une ligne de trajectoire montre où votre fusée ira. Relâchez pour voler ! Atterrissez sur la prochaine planète pour continuer.",
    faq_offline_q: 'Le jeu fonctionne-t-il hors ligne ?',
    faq_offline_a: 'Oui ! Orbit Hopper est entièrement jouable sans connexion internet.',
    faq_sound_q: 'Comment désactiver le son ou les vibrations ?',
    faq_sound_a: 'Vous pouvez activer ou désactiver le son, la musique et les vibrations depuis Menu > Paramètres.',
    faq_ads_q: 'Pourquoi y a-t-il des publicités ?',
    faq_ads_a: "Les publicités permettent de garder Orbit Hopper gratuit pour tous. Les publicités récompensées sont toujours optionnelles — vous choisissez de les regarder pour une vie supplémentaire.",
    faq_backup_q: 'Ma progression est-elle sauvegardée ?',
    faq_backup_a: "Oui ! Vos scores, statistiques et déverrouillages sont automatiquement sauvegardés dans le cloud. Si vous réinstallez l'app, votre progression sera restaurée.",
    faq_crash_q: 'Mon jeu plante. Que faire ?',
    faq_crash_a: "Assurez-vous que votre app est à jour. Si le problème persiste, envoyez-nous un email avec le modèle de votre appareil et la version de l'OS.",
    download_link: 'Télécharger le Jeu',
    privacy_link: 'Politique de Confidentialité',
    download_title: 'Télécharger le Jeu',
    landing_tagline: 'Maîtrisez la gravité. Sautez en orbite.',
    redirecting: 'Redirection vers le magasin...',
    download_desc: 'Maîtrisez la gravité à travers 11 mondes thématiques, débloquez des fusées et des compagnons, découvrez des zones secrètes et rivalisez dans les classements mondiaux. Gratuit.',
    download_on: 'Télécharger sur',
    get_it_on: 'Disponible sur',
    or_divider: 'ou',
    download_hint_1: 'Pas redirigé ? Appuyez sur le bouton ci-dessus.',
    download_hint_2: 'Sur ordinateur, scannez le code QR ci-dessous avec votre téléphone.',
    ss_1: 'Maîtrise la Gravité',
    ss_2: 'Explore des Mondes Secrets',
    ss_3: 'Complète les Événements',
    ss_4: 'Retrouve le Chemin',
    ss_5: 'Trouve de Nouveaux Amis',
    ss_6: 'Libère Ton Potentiel',
    ss_7: 'Prends des Risques',
    ss_8: 'Vise Plus Haut',
    pp_title: 'Politique de Confidentialité',
    pp_effective: "Date d'entrée en vigueur : 22 Mars 2026",
    pp_overview_h: 'Aperçu',
    pp_overview_p1: 'Orbit Hopper est un jeu d\'arcade mobile gratuit développé par Catalin Lazar. Votre vie privée compte, et cette politique explique quelles données sont collectées, comment elles sont utilisées et vos choix.',
    pp_overview_p2: "Orbit Hopper ne nécessite pas de compte et ne collecte pas d'informations personnelles directement. La progression est sauvegardée anonymement dans le cloud pour pouvoir être restaurée si vous réinstallez l'app.",
    pp_device_h: 'Données Stockées sur Votre Appareil',
    pp_device_p: 'Les données suivantes sont stockées localement sur votre appareil :',
    pp_device_li1: 'Meilleurs scores, meilleurs temps et statistiques',
    pp_device_li2: 'Fusées et compagnons déverrouillés',
    pp_device_li3: 'Préférences de son, musique et vibrations',
    pp_device_note: "Les paramètres (son, musique, vibrations) sont stockés uniquement sur votre appareil et sont supprimés si vous désinstallez l'app.",
    pp_cloud_h: 'Sauvegarde Cloud',
    pp_cloud_p1: "Pour protéger votre progression, Orbit Hopper sauvegarde les données dans le cloud via Firebase. Cela permet de restaurer vos scores, statistiques et déverrouillages si vous réinstallez l'app.",
    pp_cloud_p2: 'Voici comment fonctionne la sauvegarde cloud :',
    pp_cloud_li1: "Un compte anonyme est créé automatiquement — aucun email, nom d'utilisateur ou information personnelle n'est requis.",
    pp_cloud_li2: 'La progression est envoyée uniquement lorsque vous atteignez un nouveau record personnel (meilleur score, meilleur temps ou planète la plus éloignée).',
    pp_cloud_li3: "Les données sauvegardées incluent scores, statistiques, progression des succès et éléments déverrouillés. Elles n'incluent pas les paramètres ni les données publicitaires.",
    pp_cloud_note: "Les données cloud sont stockées dans Firebase Firestore (région UE) et ne sont associées qu'à un identifiant anonyme — pas à votre nom, email ou toute autre information personnelle.",
    pp_third_h: 'Services Tiers',
    pp_third_p: 'Orbit Hopper utilise les services tiers suivants qui peuvent collecter des données de manière indépendante :',
    pp_admob_h: 'Google AdMob (Publicité)',
    pp_admob_p: 'AdMob diffuse des publicités et peut collecter des identifiants d\'appareil, des données d\'interaction et une localisation approximative. Les publicités récompensées sont toujours optionnelles.',
    pp_analytics_h: 'Firebase Analytics',
    pp_analytics_p: "Firebase Analytics collecte des données d'utilisation anonymes telles que la durée des sessions, les vues d'écran et les informations sur l'appareil. Aucune information personnelle identifiable n'est collectée.",
    pp_children_h: 'Vie Privée des Enfants',
    pp_children_p: "Orbit Hopper ne s'adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants. AdMob est configuré pour respecter les réglementations applicables.",
    pp_choices_h: 'Vos Choix',
    pp_choices_li1: 'Suivi publicitaire : Vous pouvez limiter la personnalisation des publicités via les paramètres de votre appareil (iOS : Réglages > Confidentialité > Suivi ; Android : Paramètres > Google > Publicités).',
    pp_choices_li2: "Réinitialiser : Vous pouvez effacer toute la progression (locale et cloud) depuis l'app. Allez dans Menu > Tout Réinitialiser. Cela supprime définitivement scores, statistiques, déverrouillages et sauvegarde cloud.",
    pp_choices_li3: "Désinstallation : Désinstaller l'app supprime toutes les données locales. Votre sauvegarde cloud sera conservée pour restaurer la progression lors d'une réinstallation.",
    pp_contact_h: 'Contact',
    pp_contact_p: 'Questions sur cette politique ? Contactez-nous à',
  },

  pt: {
    footer: '© 2026 Catalin Lazar. Todos os direitos reservados.',
    back_contact: 'Contacto',
    customer_support: 'Apoio ao Cliente',
    contact_title: 'Contacto e Suporte',
    get_in_touch: 'Entre em Contacto',
    get_in_touch_desc: 'Tem um problema ou quer partilhar a sua opinião? Adoraríamos ouvir de si.',
    faq: 'Perguntas Frequentes',
    faq_play_q: 'Como se joga?',
    faq_play_a: 'Mantenha pressionado em qualquer lugar do ecrã para carregar o lançamento. Uma linha de trajetória mostra para onde o foguete vai. Solte para voar! Aterre no próximo planeta para continuar.',
    faq_offline_q: 'O jogo funciona offline?',
    faq_offline_a: 'Sim! Orbit Hopper é totalmente jogável sem ligação à internet.',
    faq_sound_q: 'Como desativo o som ou a vibração?',
    faq_sound_a: 'Pode alternar o som, música e vibração em Menu > Definições.',
    faq_ads_q: 'Porque é que há anúncios?',
    faq_ads_a: 'Os anúncios ajudam a manter o Orbit Hopper gratuito para todos. Os anúncios com recompensa são sempre opcionais — você escolhe assisti-los para uma vida extra.',
    faq_backup_q: 'O meu progresso está guardado?',
    faq_backup_a: 'Sim! As suas pontuações, estatísticas e desbloqueios são guardados automaticamente na nuvem. Se reinstalar a app, o seu progresso será restaurado.',
    faq_crash_q: 'O meu jogo está a crashar. O que faço?',
    faq_crash_a: 'Certifique-se de que a app está atualizada. Se o problema persistir, envie-nos um email com o modelo do dispositivo e versão do sistema.',
    download_link: 'Descarregar o Jogo',
    privacy_link: 'Política de Privacidade',
    download_title: 'Descarregar o Jogo',
    landing_tagline: 'Domine a gravidade. Salte para a órbita.',
    redirecting: 'A redirecionar para a loja...',
    download_desc: 'Domine a gravidade em 11 mundos temáticos, desbloqueie foguetes e companheiros, descubra zonas secretas e compita em classificações globais. Gratuito.',
    download_on: 'Descarregar na',
    get_it_on: 'Disponível no',
    or_divider: 'ou',
    download_hint_1: 'Não foi redirecionado? Toque no botão acima.',
    download_hint_2: 'No computador, digitalize o código QR abaixo com o telemóvel.',
    ss_1: 'Domina a Gravidade',
    ss_2: 'Explora Mundos Secretos',
    ss_3: 'Completa Eventos',
    ss_4: 'Encontra o Caminho de Casa',
    ss_5: 'Encontra Novos Amigos',
    ss_6: 'Liberta o Teu Potencial',
    ss_7: 'Arrisca-te',
    ss_8: 'Mira Mais Alto',
    pp_title: 'Política de Privacidade',
    pp_effective: 'Data de vigência: 22 de Março de 2026',
    pp_overview_h: 'Visão Geral',
    pp_overview_p1: 'Orbit Hopper é um jogo arcade móvel gratuito desenvolvido por Catalin Lazar. A sua privacidade é importante, e esta política explica que dados são recolhidos, como são usados e as suas opções.',
    pp_overview_p2: 'Orbit Hopper não requer conta e não recolhe informações pessoais diretamente. O progresso é guardado anonimamente na nuvem para poder ser restaurado se reinstalar a app.',
    pp_device_h: 'Dados Armazenados no Dispositivo',
    pp_device_p: 'Os seguintes dados são armazenados localmente no seu dispositivo:',
    pp_device_li1: 'Pontuações máximas, melhores tempos e estatísticas',
    pp_device_li2: 'Foguetes e companheiros desbloqueados',
    pp_device_li3: 'Preferências de som, música e vibração',
    pp_device_note: 'As definições (som, música, vibração) são armazenadas apenas no dispositivo e apagadas ao desinstalar.',
    pp_cloud_h: 'Backup na Nuvem',
    pp_cloud_p1: 'Para proteger o seu progresso, Orbit Hopper guarda os dados na nuvem usando Firebase. Isto permite restaurar pontuações, estatísticas e desbloqueios ao reinstalar.',
    pp_cloud_p2: 'Eis como funciona o backup na nuvem:',
    pp_cloud_li1: 'Uma conta anónima é criada automaticamente — não é necessário email, nome de utilizador ou informação pessoal.',
    pp_cloud_li2: 'O progresso é enviado apenas quando atinge um novo recorde pessoal (melhor pontuação, melhor tempo ou planeta mais distante).',
    pp_cloud_li3: 'Os dados guardados incluem pontuações, estatísticas, progresso de conquistas e itens desbloqueados. Não incluem definições ou dados de anúncios.',
    pp_cloud_note: 'Os dados na nuvem são armazenados no Firebase Firestore (região UE) e estão associados apenas a um identificador anónimo — não ao seu nome, email ou outra informação pessoal.',
    pp_third_h: 'Serviços de Terceiros',
    pp_third_p: 'Orbit Hopper utiliza os seguintes serviços de terceiros que podem recolher dados de forma independente:',
    pp_admob_h: 'Google AdMob (Publicidade)',
    pp_admob_p: 'O AdMob exibe anúncios e pode recolher identificadores de dispositivo, dados de interação e localização aproximada. Os anúncios com recompensa são sempre opcionais.',
    pp_analytics_h: 'Firebase Analytics',
    pp_analytics_p: 'Firebase Analytics recolhe dados anónimos de uso como duração da sessão, visualizações de ecrã e informações do dispositivo. Nenhuma informação pessoal identificável é recolhida.',
    pp_children_h: 'Privacidade das Crianças',
    pp_children_p: 'Orbit Hopper não se destina a crianças menores de 13 anos. Não recolhemos conscientemente informações pessoais de crianças. O AdMob está configurado para cumprir as regulamentações aplicáveis.',
    pp_choices_h: 'As Suas Opções',
    pp_choices_li1: 'Rastreio de anúncios: Pode limitar a personalização de anúncios nas definições do dispositivo (iOS: Definições > Privacidade > Rastreio; Android: Definições > Google > Anúncios).',
    pp_choices_li2: 'Apagar dados: Pode apagar todo o progresso (local e nuvem) na app. Vá a Menu > Apagar Progresso. Isto elimina permanentemente pontuações, estatísticas, desbloqueios e backup.',
    pp_choices_li3: 'Desinstalar: Desinstalar a app remove todos os dados locais. O backup na nuvem permanece para restaurar o progresso ao reinstalar.',
    pp_contact_h: 'Contacto',
    pp_contact_p: 'Questões sobre esta política? Contacte-nos em',
  },

  ru: {
    footer: '© 2026 Catalin Lazar. Все права защищены.',
    back_contact: 'Контакт',
    customer_support: 'Служба Поддержки',
    contact_title: 'Контакт и Поддержка',
    get_in_touch: 'Свяжитесь с нами',
    get_in_touch_desc: 'Есть проблема или хотите поделиться отзывом? Мы будем рады вас услышать.',
    faq: 'Частые Вопросы',
    faq_play_q: 'Как играть?',
    faq_play_a: 'Удерживайте палец на экране, чтобы зарядить запуск. Линия траектории покажет, куда полетит ракета. Отпустите, чтобы взлететь! Приземлитесь на следующую планету, чтобы продолжить.',
    faq_offline_q: 'Игра работает без интернета?',
    faq_offline_a: 'Да! В Orbit Hopper можно полностью играть без подключения к интернету.',
    faq_sound_q: 'Как отключить звук или вибрацию?',
    faq_sound_a: 'Вы можете переключить звук, музыку и вибрацию в Меню > Настройки.',
    faq_ads_q: 'Почему есть реклама?',
    faq_ads_a: 'Реклама помогает сохранить Orbit Hopper бесплатным для всех. Рекламные ролики за награду всегда необязательны — вы сами решаете, смотреть ли их ради дополнительной жизни.',
    faq_backup_q: 'Мой прогресс сохраняется?',
    faq_backup_a: 'Да! Ваши очки, статистика и разблокировки автоматически сохраняются в облаке. При переустановке приложения прогресс будет восстановлен.',
    faq_crash_q: 'Игра вылетает. Что делать?',
    faq_crash_a: 'Убедитесь, что приложение обновлено до последней версии. Если проблема не исчезнет, напишите нам с указанием модели устройства и версии ОС.',
    download_link: 'Скачать Игру',
    privacy_link: 'Политика Конфиденциальности',
    download_title: 'Скачать Игру',
    landing_tagline: 'Освой гравитацию. Прыгай по орбите.',
    redirecting: 'Перенаправление в магазин...',
    download_desc: 'Освойте гравитацию в 11 тематических мирах, разблокируйте ракеты и спутников, откройте секретные зоны и соревнуйтесь в мировых рейтингах. Бесплатно.',
    download_on: 'Скачать в',
    get_it_on: 'Доступно в',
    or_divider: 'или',
    download_hint_1: 'Не перенаправило? Нажмите кнопку выше.',
    download_hint_2: 'На компьютере отсканируйте QR-код ниже с телефона.',
    ss_1: 'Покори Гравитацию',
    ss_2: 'Исследуй Тайные Миры',
    ss_3: 'Выполни События',
    ss_4: 'Найди Путь Домой',
    ss_5: 'Найди Новых Друзей',
    ss_6: 'Раскрой Свой Потенциал',
    ss_7: 'Рискуй',
    ss_8: 'Цельсь Выше',
    pp_title: 'Политика Конфиденциальности',
    pp_effective: 'Дата вступления в силу: 22 Марта 2026',
    pp_overview_h: 'Обзор',
    pp_overview_p1: 'Orbit Hopper — бесплатная мобильная аркада, разработанная Catalin Lazar. Ваша конфиденциальность важна, и эта политика объясняет, какие данные собираются, как они используются и какие у вас есть варианты.',
    pp_overview_p2: 'Orbit Hopper не требует аккаунта и не собирает личную информацию напрямую. Прогресс анонимно сохраняется в облаке для восстановления при переустановке.',
    pp_device_h: 'Данные на Вашем Устройстве',
    pp_device_p: 'На вашем устройстве хранятся следующие данные:',
    pp_device_li1: 'Рекорды, лучшее время и статистика',
    pp_device_li2: 'Разблокированные ракеты и спутники',
    pp_device_li3: 'Настройки звука, музыки и вибрации',
    pp_device_note: 'Настройки (звук, музыка, вибрация) хранятся только на устройстве и удаляются при деинсталляции.',
    pp_cloud_h: 'Облачное Резервное Копирование',
    pp_cloud_p1: 'Для защиты прогресса Orbit Hopper сохраняет данные в облаке через Firebase. Это позволяет восстановить очки, статистику и разблокировки при переустановке.',
    pp_cloud_p2: 'Вот как работает облачное копирование:',
    pp_cloud_li1: 'Анонимный аккаунт создаётся автоматически — без email, имени пользователя или личной информации.',
    pp_cloud_li2: 'Прогресс загружается только при достижении нового личного рекорда (лучший счёт, время или самая дальняя планета).',
    pp_cloud_li3: 'Сохранённые данные включают очки, статистику, прогресс достижений и разблокированные предметы. Настройки и рекламные данные не сохраняются.',
    pp_cloud_note: 'Облачные данные хранятся в Firebase Firestore (регион ЕС) и связаны только с анонимным идентификатором — не с вашим именем, email или другой личной информацией.',
    pp_third_h: 'Сторонние Сервисы',
    pp_third_p: 'Orbit Hopper использует следующие сторонние сервисы, которые могут собирать данные самостоятельно:',
    pp_admob_h: 'Google AdMob (Реклама)',
    pp_admob_p: 'AdMob показывает рекламу и может собирать идентификаторы устройства, данные взаимодействия и приблизительное местоположение. Рекламные ролики за награду всегда необязательны.',
    pp_analytics_h: 'Firebase Analytics',
    pp_analytics_p: 'Firebase Analytics собирает анонимные данные использования: длительность сессий, просмотры экранов и информацию об устройстве. Персональные данные не собираются.',
    pp_children_h: 'Конфиденциальность Детей',
    pp_children_p: 'Orbit Hopper не предназначен для детей младше 13 лет. Мы сознательно не собираем личную информацию детей. AdMob настроен в соответствии с действующими нормами.',
    pp_choices_h: 'Ваши Варианты',
    pp_choices_li1: 'Отслеживание рекламы: Вы можете ограничить персонализацию рекламы в настройках устройства (iOS: Настройки > Конфиденциальность > Отслеживание; Android: Настройки > Google > Реклама).',
    pp_choices_li2: 'Сброс данных: Вы можете удалить весь прогресс (локальный и облачный) из приложения. Меню > Сбросить Прогресс. Это навсегда удалит очки, статистику, разблокировки и облачную копию.',
    pp_choices_li3: 'Удаление: При деинсталляции удаляются все локальные данные. Облачная копия сохранится для восстановления прогресса при переустановке.',
    pp_contact_h: 'Контакт',
    pp_contact_p: 'Вопросы о политике конфиденциальности? Свяжитесь с нами:',
  },
};

// ─────────── Flag emoji for language switcher ───────────
const LANG_FLAGS = {
  en: '🇺🇸', ro: '🇷🇴', es: '🇪🇸', fr: '🇫🇷', pt: '🇵🇹', ru: '🇷🇺',
};
const LANG_NAMES = {
  en: 'English', ro: 'Română', es: 'Español', fr: 'Français', pt: 'Português', ru: 'Русский',
};
const SUPPORTED_LANGS = ['en', 'ro', 'es', 'fr', 'pt', 'ru'];

/**
 * Detects the best language: ?lang= param > browser language > 'en'.
 */
function detectLang() {
  // 1. URL param
  const params = new URLSearchParams(window.location.search);
  const paramLang = params.get('lang');
  if (paramLang && SUPPORTED_LANGS.includes(paramLang)) return paramLang;

  // 2. Browser language
  const browserLang = (navigator.language || '').split('-')[0].toLowerCase();
  if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;

  // 3. Fallback
  return 'en';
}

/**
 * Applies translations to all elements with data-i18n attributes.
 */
function applyTranslations(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  // Also update <html lang="">
  document.documentElement.lang = lang;
}

/**
 * Builds and injects the language switcher dropdown into the page.
 */
function buildLanguageSwitcher(currentLang) {
  const switcher = document.createElement('div');
  switcher.className = 'lang-switcher';
  switcher.innerHTML = `
    <button class="lang-btn" aria-label="Change language">
      <span class="lang-flag">${LANG_FLAGS[currentLang]}</span>
    </button>
    <div class="lang-dropdown">
      ${SUPPORTED_LANGS.map(l => `
        <a class="lang-option ${l === currentLang ? 'active' : ''}"
           href="?lang=${l}"
           data-lang="${l}">
          <span class="lang-opt-flag">${LANG_FLAGS[l]}</span>
          <span class="lang-opt-name">${LANG_NAMES[l]}</span>
        </a>
      `).join('')}
    </div>
  `;
  const container = document.querySelector('.container');
  if (container) {
    container.insertBefore(switcher, container.firstChild);
  } else {
    document.body.appendChild(switcher);
  }

  // Toggle dropdown
  const btn = switcher.querySelector('.lang-btn');
  const dropdown = switcher.querySelector('.lang-dropdown');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', () => dropdown.classList.remove('open'));

  // Preserve other URL params when switching
  switcher.querySelectorAll('.lang-option').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const newLang = a.dataset.lang;
      const url = new URL(window.location);
      url.searchParams.set('lang', newLang);
      window.location.href = url.toString();
    });
  });
}

/**
 * Call this on DOMContentLoaded in each page.
 */
function initI18n() {
  const lang = detectLang();
  applyTranslations(lang);
  buildLanguageSwitcher(lang);
  preserveLangInLinks(lang);
}

/**
 * Appends the current lang param to all internal links so navigation preserves language.
 */
function preserveLangInLinks(lang) {
  if (lang === 'en') return; // default language, no param needed
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    // Only patch local .html links (skip external, mailto, anchors, etc.)
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('?')) return;
    if (!href.endsWith('.html') && !href.includes('.html?')) return;
    const url = new URL(href, window.location.origin + window.location.pathname);
    if (!url.searchParams.has('lang')) {
      url.searchParams.set('lang', lang);
      a.setAttribute('href', url.pathname.split('/').pop() + url.search);
    }
  });
}
