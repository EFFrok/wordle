// Word list - common 5-letter words
const WORDS = [
    "ABODE", "ABOUT", "ABOVE", "ABUSE", "ABYSS", "ACORN", "ACRES", "ACTOR", "ACUTE", "ADDED",
    "ADMIT", "ADOPT", "ADULT", "AFTER", "AGATE", "AGENT", "AGREE", "AHEAD", "AISLE", "ALARM",
    "ALBUM", "ALERT", "ALIGN", "ALIKE", "ALIVE", "ALLEY", "ALLOW", "ALLOY", "ALONE", "ALONG",
    "ALTER", "ALTAR", "AMBER", "ANGEL", "ANGER", "ANGLE", "ANGRY", "ANISE", "ANKLE", "ANVIL",
    "APART", "APPLE", "APPLY", "APRON", "ARBOR", "ARENA", "ARGUE", "ARISE", "ARMOR", "ARROW",
    "ARRAY", "ASIDE", "ASSET", "ATTIC", "AUDIO", "AUGER", "AVOID", "AWARD", "AWARE", "AZURE",
    "BACON", "BADGE", "BADLY", "BAGEL", "BAKED", "BAKER", "BANDS", "BANJO", "BARGE", "BARKS",
    "BASIN", "BASES", "BASIL", "BASIC", "BASIS", "BATCH", "BATHS", "BEACH", "BEAMS", "BEANS",
    "BEARS", "BEATS", "BEGAN", "BEGIN", "BEING", "BEIGE", "BELOW", "BELLY", "BELTS", "BENCH",
    "BERRY", "BERTH", "BERYL", "BEETS", "BIRDS", "BIRTH", "BLACK", "BLADE", "BLAME", "BLAND",
    "BLAZE", "BLEND", "BLESS", "BLIND", "BLOCK", "BLOOD", "BOARD", "BOLTS", "BONES", "BONUS",
    "BOOKS", "BOOST", "BOOTH", "BOOTS", "BORER", "BOOTY", "BOUND", "BOWER", "BOWLS", "BOXES",
    "BRAIN", "BRAKE", "BRAND", "BRASS", "BRAVE", "BREAD", "BREAK", "BREED", "BRICK", "BRIEF",
    "BRING", "BROAD", "BROIL", "BROKE", "BROOK", "BROOD", "BROTH", "BROWN", "BUILD", "BUILT",
    "BUNCH", "BUNKS", "BURNT", "BUSES", "BUYER", "BUYER", "CABLE", "CABIN", "CACHE", "CAFES",
    "CAKES", "CANDY", "CANOE", "CAPER", "CAPES", "CARRY", "CARTS", "CARVE", "CATCH", "CAUSE",
    "CAVES", "CELLO", "CHAIN", "CHAIR", "CHAMP", "CHAOS", "CHARS", "CHART", "CHASE", "CHATS",
    "CHEAP", "CHECK", "CHEEK", "CHEST", "CHIEF", "CHILD", "CHILI", "CHILL", "CHIME", "CHIPS",
    "CHOIR", "CHOPS", "CHORD", "CHORE", "CHOSE", "CHUNK", "CIVIL", "CLAIM", "CLAMP", "CLANS",
    "CLASS", "CLASP", "CLAWS", "CLEAN", "CLEAR", "CLICK", "CLIFF", "CLOAK", "CLOCK", "CLOSE",
    "CLOTH", "CLOUD", "CLOVE", "CLUBS", "COACH", "COALS", "COAST", "COATS", "COCOA", "COINS",
    "COMET", "CONDO", "CORDS", "CORPS", "COUCH", "COULD", "COUNT", "COUPE", "COURT", "COVEN",
    "COVER", "CRABS", "CRAFT", "CRANK", "CRASH", "CRATE", "CRAZY", "CREAM", "CREEK", "CREST",
    "CREWS", "CRISP", "CRIME", "CROSS", "CROWD", "CROWN", "CROWS", "CRUDE", "CRUMB", "CRUST",
    "CRYPT", "CULTS", "CUMIN", "CURBS", "CURES", "CURRY", "CYCLE", "DAILY", "DALES", "DANCE",
    "DATED", "DATES", "DEALT", "DEATH", "DEBUT", "DECAL", "DELAY", "DELIS", "DELTA", "DENIM",
    "DENSE", "DEPTH", "DESKS", "DIETS", "DINER", "DIRTY", "DISCO", "DIVES", "DOCKS", "DOING",
    "DONUT", "DOORS", "DORMS", "DOUBT", "DOUGH", "DOWEL", "DOZEN", "DRAFT", "DRAMA", "DRANK",
    "DRAPE", "DRAWN", "DREAM", "DRESS", "DRIED", "DRILL", "DRINK", "DRIVE", "DROPS", "DROVE",
    "DRUMS", "DUCHY", "DUCKS", "DUCTS", "DUNES", "DUSTY", "DWELL", "DYING", "EAGER", "EARLY",
    "EARTH", "EASEL", "EIGHT", "ELBOW", "ELITE", "EMBER", "EMPTY", "ENEMY", "ENJOY", "ENTER",
    "ENTRY", "EQUAL", "ERROR", "EVENT", "EVERY", "EXACT", "EXIST", "EXTRA", "FAITH", "FALSE",
    "FAULT", "FAVOR", "FEAST", "FENCE", "FERRY", "FIBER", "FIELD", "FIFTH", "FIFTY", "FIGHT",
    "FILTH", "FINAL", "FIRST", "FIXED", "FLAME", "FLARE", "FLASH", "FLASK", "FLATS", "FLEET",
    "FLEEC", "FLESH", "FLIES", "FLINT", "FLOCK", "FLOOR", "FLOUR", "FLUID", "FLUME", "FLUTE",
    "FOCUS", "FOGGY", "FONTS", "FORCE", "FORGE", "FORKS", "FORTE", "FORTH", "FORTY", "FORUM",
    "FOUND", "FOYER", "FRAME", "FRAUD", "FRESH", "FRIED", "FROGS", "FRONT", "FROST", "FRUIT",
    "FUDGE", "FULLY", "FUNNY", "GANGS", "GAUNT", "GIANT", "GIFTS", "GIVEN", "GLASS", "GLEAM",
    "GLOBE", "GLOSS", "GLOVE", "GOING", "GONGS", "GOODS", "GOOSE", "GORGE", "GOURD", "GOWNS",
    "GRACE", "GRADE", "GRAIN", "GRAND", "GRANT", "GRAPE", "GRASS", "GRATE", "GRAVE", "GRAVY",
    "GREAT", "GREEN", "GRIEF", "GRIDS", "GRILL", "GRIME", "GRIMY", "GRIND", "GRIPS", "GROSS",
    "GROUP", "GROWN", "GRUBS", "GUARD", "GUESS", "GUEST", "GUIDE", "GUILD", "HAILS", "HAPPY",
    "HARDY", "HAULS", "HAUNT", "HAVEN", "HAWKS", "HAZEL", "HEART", "HEAVY", "HEELS", "HEIST",
    "HENCE", "HERBS", "HILLS", "HINGE", "HOARD", "HONEY", "HONOR", "HOOKS", "HORDE", "HORSE",
    "HOTEL", "HOUSE", "HOWLS", "HUMAN", "HYMNS", "ICONS", "IDEAL", "IDOLS", "IMAGE", "INDEX",
    "INNER", "INPUT", "IRONY", "ISSUE", "ITEMS", "IVORY", "JEANS", "JELLY", "JERKY", "JEWEL",
    "JOINT", "JOKES", "JUDGE", "JUICE", "JUICY", "JUMBO", "KAYAK", "KETCH", "KIOSK", "KIWIS",
    "KNEES", "KNIFE", "KNOTS", "KNOWN", "LABEL", "LABOR", "LADLE", "LAKES", "LAMPS", "LANCE",
    "LANDS", "LARGE", "LASER", "LATER", "LATCH", "LAUGH", "LAYER", "LEADS", "LEARN", "LEASE",
    "LEAST", "LEAVE", "LEDGE", "LEEKS", "LEGAL", "LEMON", "LEVEL", "LEVER", "LEVEE", "LICKS",
    "LIGHT", "LILAC", "LIMIT", "LINEN", "LINER", "LINKS", "LIONS", "LIVER", "LIVES", "LOADS",
    "LOAFS", "LOBBY", "LOCAL", "LOFTS", "LOGIC", "LOGOS", "LOOPS", "LOOSE", "LOOTS", "LOWER",
    "LUCID", "LUCKY", "LUNAR", "LUNCH", "LYING", "LYRES", "MAGIC", "MAJOR", "MAKER", "MALLS",
    "MANGO", "MANSE", "MARCH", "MARKS", "MARSH", "MATCH", "MAUVE", "MAYBE", "MAYOR", "MEALS",
    "MEANT", "MEATS", "MEDAL", "MEDIA", "MELON", "MERCY", "MERIT", "METAL", "METRO", "MIGHT",
    "MINCE", "MINOR", "MINUS", "MIXER", "MIXED", "MOANS", "MODEL", "MOIST", "MONEY", "MONTH",
    "MOONS", "MORAL", "MOTHS", "MOTOR", "MOUNT", "MOURN", "MOUSE", "MOUTH", "MOVED", "MOVIE",
    "MUDDY", "MURAL", "MURKY", "MUSIC", "NAILS", "NAMES", "NAVAL", "NEEDS", "NERVE", "NEVER",
    "NEWLY", "NIGHT", "NOISE", "NORTH", "NOTED", "NOTES", "NOVEL", "NURSE", "NYLON", "OASIS",
    "OCCUR", "OCEAN", "OCHRE", "OFFER", "OFTEN", "OLIVE", "ONION", "ORBIT", "ORDER", "ORGAN",
    "OTHER", "OUGHT", "OTTER", "OVENS", "PAINT", "PAILS", "PALMS", "PANEL", "PANTS", "PAPER",
    "PARKS", "PARTS", "PARTY", "PASTA", "PASTE", "PATCH", "PATIO", "PATTY", "PEACE", "PEACH",
    "PEAKS", "PEARS", "PECAN", "PEDAL", "PERKS", "PETTY", "PHASE", "PHONE", "PHOTO", "PIECE",
    "PIERS", "PILLS", "PILOT", "PIPES", "PITCH", "PIVOT", "PIZZA", "PLACE", "PLAID", "PLAIN",
    "PLANE", "PLANK", "PLANS", "PLANT", "PLATE", "PLAYS", "PLAZA", "PLUMS", "POACH", "POINT",
    "POLES", "PONDS", "POOLS", "POSTS", "POUND", "POWER", "PRESS", "PRICE", "PRIDE", "PRIME",
    "PRINT", "PRIOR", "PRISM", "PRIZE", "PROMS", "PROOF", "PROUD", "PROVE", "PRUNE", "PULSE",
    "QUEEN", "QUERY", "QUEST", "QUICK", "QUIET", "QUIPS", "QUITE", "RACKS", "RADIO", "RAFTS",
    "RAINS", "RAISE", "RANGE", "RAPID", "RATIO", "RAVES", "RAYON", "REACH", "READY", "REALM",
    "REFER", "REMES", "REPLY", "RESTO", "RIDGE", "RIGHT", "RINGS", "RINKS", "RIVAL", "RIVER",
    "ROADS", "ROAST", "ROBES", "ROCKS", "ROLLS", "ROOTS", "ROUGH", "ROUND", "ROUTE", "ROYAL",
    "RUINS", "RURAL", "SALAD", "SALSA", "SALTY", "SALTS", "SAUCE", "SCALE", "SCAMS", "SCARF",
    "SCENE", "SCENT", "SCOPE", "SCOOP", "SCORE", "SCRAP", "SEALS", "SEARS", "SEATS", "SEDAN",
    "SEEDS", "SENSE", "SEPIA", "SERVE", "SEVEN", "SHAFT", "SHALL", "SHAPE", "SHARE", "SHARK",
    "SHARP", "SHAWL", "SHEET", "SHELF", "SHELL", "SHIFT", "SHIMS", "SHINE", "SHIRE", "SHIRT",
    "SHOCK", "SHOOT", "SHOPS", "SHORT", "SHORE", "SHOTS", "SHOWN", "SHOWS", "SIGHT", "SIGHS",
    "SIGNS", "SINCE", "SINKS", "SITES", "SIXTH", "SIXTY", "SIZED", "SKIFF", "SKILL", "SKIRT",
    "SKITS", "SKULL", "SLEEP", "SLEEK", "SLATS", "SLATE", "SLICE", "SLICK", "SLIDE", "SLIME",
    "SLOPE", "SLOOP", "SLOWS", "SLUGS", "SMALL", "SMART", "SMILE", "SMOKE", "SMOKY", "SNACK",
    "SNAIL", "SNAKE", "SNOWS", "SOCKS", "SODAS", "SOLAR", "SOLES", "SOLID", "SOLVE", "SONGS",
    "SORRY", "SOUND", "SOUTH", "SPACE", "SPARE", "SPARK", "SPEAK", "SPEAR", "SPEED", "SPEND",
    "SPENT", "SPICE", "SPICY", "SPINE", "SPLIT", "SPOKE", "SPOON", "SPOIL", "SPORT", "SPOTS",
    "SPOUT", "SQUAD", "STAFF", "STAGE", "STAKE", "STALE", "STAMP", "STAND", "START", "STARS",
    "STASH", "STATE", "STEAK", "STEAM", "STEEL", "STEMS", "STERN", "STEWS", "STICK", "STILL",
    "STOCK", "STONE", "STOOD", "STOOL", "STORE", "STORM", "STORY", "STOUT", "STOVE", "STRAP",
    "STRIP", "STUCK", "STUDY", "STUFF", "STYLE", "SUGAR", "SUITE", "SUPER", "SWAMP", "SWARM",
    "SWEAT", "SWEET", "SWELL", "SWORD", "SYRUP", "TABLE", "TACKS", "TACOS", "TAKEN", "TALES",
    "TALKS", "TANGO", "TANGY", "TANKS", "TANGY", "TARTS", "TASKS", "TASTE", "TAXES", "TEACH",
    "TEAMS", "TEARS", "TEETH", "TEMPO", "TERRA", "THANK", "THEFT", "THEIR", "THEME", "THERE",
    "THESE", "THICK", "THIGH", "THING", "THINK", "THIRD", "THOSE", "THREE", "THREW", "THROW",
    "THUMB", "THYME", "TIARA", "TIDES", "TIERS", "TIGER", "TIGHT", "TIMES", "TITLE", "TODAY",
    "TOILS", "TOMBS", "TONES", "TONIC", "TOOLS", "TOPAZ", "TOPIC", "TORCH", "TOTAL", "TOUCH",
    "TOUGH", "TOWER", "TRACK", "TRACE", "TRADE", "TRAIN", "TRAMS", "TRASH", "TREAT", "TREES",
    "TREND", "TRIAL", "TRIBE", "TRICK", "TRIED", "TRIES", "TROOP", "TROVE", "TRUCK", "TRULY",
    "TRUNK", "TRUST", "TRUTH", "TUBES", "TUNES", "TURFS", "TWICE", "TWEED", "TWINE", "UMBER",
    "UNDER", "UNDUE", "UNION", "UNITY", "UNTIL", "UPPER", "UPSET", "URBAN", "USAGE", "USUAL",
    "VALES", "VALID", "VALUE", "VALVE", "VAPOR", "VASES", "VAULT", "VEINS", "VENUE", "VERGE",
    "VESTS", "VIALS", "VIDEO", "VIGOR", "VILLA", "VINES", "VIOLA", "VIRUS", "VISIT", "VITAL",
    "VIVID", "VOCAL", "VOICE", "VOWEL", "WAILS", "WAIST", "WALTZ", "WALLS", "WARES", "WASTE",
    "WATCH", "WATER", "WAVES", "WEEDS", "WEDGE", "WEIRS", "WHEAT", "WHEEL", "WHERE", "WHICH",
    "WHILE", "WHISK", "WHITE", "WHARF", "WHOLE", "WHOSE", "WINDS", "WINGS", "WIRES", "WOMAN",
    "WOMEN", "WORKS", "WORLD", "WORMS", "WORRY", "WORSE", "WORST", "WORTH", "WOULD", "WOUND",
    "WRIST", "WRITE", "WRONG", "WROTE", "YACHT", "YEAST", "YIELD", "YOUNG", "YOUTH", "ZEBRA",
    "ZESTY", "ZONES", 
];

// Valid 5-letter words for guessing (includes WORDS plus more)
const VALID_WORDS = [
    ...WORDS, "AAHED", "AALII", "AARGH", "ABACA", "ABACI", "ABACK", "ABAFT", "ABAKA", "ABAMP",
    "ABASE", "JORKS", "NOICE", "JOSHI", "TYLER", "FARUQ", "KINKY", "PENIS", "PUSSY", "FRANK", 
    "NAKED",
];

// Game state
let targetWord = "";
let currentRow = 0;
let currentTile = 0;
let gameOver = false;
let messageTimeout = null;

// Initialize the game
function init() {
    targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    console.log("Target word:", targetWord); // For testing
    createBoard();
    addKeyboardListeners();
}

// Create the game board
function createBoard() {
    const board = document.getElementById("board");
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < 5; j++) {
            const tile = document.createElement("div");
            tile.className = "tile";
            tile.setAttribute("data-row", i);
            tile.setAttribute("data-col", j);
            row.appendChild(tile);
        }
        board.appendChild(row);
    }
}

// Add keyboard event listeners
function addKeyboardListeners() {
    // Physical keyboard
    document.addEventListener("keydown", handleKeyPress);
    
    // On-screen keyboard
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => {
        key.addEventListener("click", () => {
            const keyValue = key.getAttribute("data-key");
            handleKey(keyValue);
        });
    });
}

// Handle key press
function handleKeyPress(e) {
    if (gameOver) return;
    
    const key = e.key.toUpperCase();
    
    if (key === "ENTER") {
        handleKey("Enter");
    } else if (key === "BACKSPACE") {
        handleKey("Backspace");
    } else if (/^[A-Z]$/.test(key)) {
        handleKey(key);
    }
}

// Handle key input
function handleKey(key) {
    if (gameOver) return;
    
    if (key === "Enter") {
        submitGuess();
    } else if (key === "Backspace") {
        deleteLetter();
    } else if (currentTile < 5) {
        addLetter(key);
    }
}

// Add a letter to the current tile
function addLetter(letter) {
    if (currentTile < 5) {
        clearMessage();
        const tile = document.querySelector(`[data-row="${currentRow}"][data-col="${currentTile}"]`);
        tile.textContent = letter;
        tile.classList.add("filled");
        currentTile++;
    }
}

// Delete the last letter
function deleteLetter() {
    if (currentTile > 0) {
        clearMessage();
        currentTile--;
        const tile = document.querySelector(`[data-row="${currentRow}"][data-col="${currentTile}"]`);
        tile.textContent = "";
        tile.classList.remove("filled");
    }
}

// Submit the current guess
function submitGuess() {
    if (currentTile < 5) {
        showMessage("Not enough letters", true);
        return;
    }
    
    // Get the guessed word
    let guess = "";
    for (let i = 0; i < 5; i++) {
        const tile = document.querySelector(`[data-row="${currentRow}"][data-col="${i}"]`);
        guess += tile.textContent;
    }
    
    // Check if word is valid
    if (guess.length !== 5) {
        showMessage("Not enough letters", true);
        return;
    }

    if (guess === "JJJJJ") {
        showMessage("Josh are you stupid or what? Go jorking", true)
        return;
    }
    
    // Check if word exists in the word list
    if (!WORDS.includes(guess) && !VALID_WORDS.includes(guess)) {
        showMessage("Not a valid word", true);
        return;
    }
    
    // Check the guess
    checkGuess(guess);
    
    // Check win/loss conditions
    if (guess === targetWord) {
        gameOver = true;
        setTimeout(() => {
            showMessage("Congratulations! You won! 🎉", false);
        }, 1500);
    } else if (currentRow === 5) {
        gameOver = true;
        setTimeout(() => {
            showMessage(`Game Over! The word was ${targetWord}`, false);
        }, 1500);
    } else {
        currentRow++;
        currentTile = 0;
    }
}

// Check the guess against the target word
function checkGuess(guess) {
    const targetLetters = targetWord.split("");
    const guessLetters = guess.split("");
    const result = Array(5).fill("absent");
    const letterCount = {};
    
    // Count letters in target word
    targetLetters.forEach(letter => {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    });
    
    // First pass: mark correct letters
    guessLetters.forEach((letter, i) => {
        if (letter === targetLetters[i]) {
            result[i] = "correct";
            letterCount[letter]--;
        }
    });
    
    // Second pass: mark present letters
    guessLetters.forEach((letter, i) => {
        if (result[i] === "absent" && letterCount[letter] > 0) {
            result[i] = "present";
            letterCount[letter]--;
        }
    });
    
    // Apply results to tiles and keyboard
    guessLetters.forEach((letter, i) => {
        const tile = document.querySelector(`[data-row="${currentRow}"][data-col="${i}"]`);
        const key = document.querySelector(`[data-key="${letter}"]`);
        
        setTimeout(() => {
            tile.classList.add(result[i]);
            
            // Update keyboard key color (only if it's a better result)
            if (!key.classList.contains("correct")) {
                if (result[i] === "correct") {
                    key.classList.remove("present", "absent");
                    key.classList.add("correct");
                } else if (result[i] === "present" && !key.classList.contains("present")) {
                    key.classList.remove("absent");
                    key.classList.add("present");
                } else if (result[i] === "absent" && !key.classList.contains("present")) {
                    key.classList.add("absent");
                }
            }
        }, i * 300);
    });
}

// Clear message
function clearMessage() {
    if (messageTimeout) {
        clearTimeout(messageTimeout);
        messageTimeout = null;
    }
    const messageEl = document.getElementById("message");
    messageEl.className = "message";
    messageEl.textContent = "";
}

// Show message to user
function showMessage(text, isError = false) {
    clearMessage();
    
    const messageEl = document.getElementById("message");
    messageEl.textContent = text;
    messageEl.className = "message show";
    if (isError) {
        messageEl.classList.add("error");
    }
    
    messageTimeout = setTimeout(() => {
        messageEl.className = "message";
        messageEl.textContent = "";
        messageTimeout = null;
    }, 5000);
}

// Restart the game
function restartGame() {
    // Reset game state
    currentRow = 0;
    currentTile = 0;
    gameOver = false;
    targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    console.log("Target word:", targetWord); // For testing
    
    // Clear the board
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.textContent = "";
        tile.className = "tile";
    });
    
    // Reset keyboard colors
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => {
        key.classList.remove("correct", "present", "absent");
    });
    
    // Clear message
    const messageEl = document.getElementById("message");
    messageEl.textContent = "";
    messageEl.className = "message";
}

// Add restart button listener
document.getElementById("restart-btn").addEventListener("click", restartGame);

// Start the game
init();

// Future ideas:
// - Differend modes - maybe even possibility to 4 letter or 6 letter words