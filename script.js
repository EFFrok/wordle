// Word list - common 5-letter words
const WORDS = [
    "ABOUT", "ABOVE", "ABUSE", "ACORN", "ACRES", "ACTOR", "ACUTE", "ADDED", "ADMIT", "ADOPT",
    "ADULT", "AFTER", "AGENT", "AGREE", "AHEAD", "AISLE", "ALARM", "ALBUM", "ALERT", "ALIGN",
    "ALIKE", "ALIVE", "ALLEY", "ALLOW", "ALONE", "ALONG", "ALTER", "AMBER", "ANGEL", "ANGER",
    "ANGLE", "ANGRY", "ANKLE", "APART", "APPLE", "APPLY", "APRON", "ARENA", "ARGUE", "ARISE",
    "ARMOR", "ARROW", "ARRAY", "ASIDE", "ASSET", "ATTIC", "AUDIO", "AVOID", "AWARD", "AWARE",
    "BACON", "BADGE", "BADLY", "BAGEL", "BAKED", "BAKER", "BANDS", "BANJO", "BARGE", "BARKS",
    "BASIN", "BASES", "BASIL", "BASIC", "BATCH", "BATHS", "BEACH", "BEAMS", "BEANS", "BEARS",
    "BEATS", "BEGAN", "BEGIN", "BEING", "BELOW", "BELLY", "BELTS", "BENCH", "BERRY", "BEETS",
    "BIRDS", "BIRTH", "BLACK", "BLADE", "BLAME", "BLAND", "BLAZE", "BLEND", "BLESS", "BLIND",
    "BLOCK", "BLOOD", "BOARD", "BOLTS", "BONES", "BONUS", "BOOKS", "BOOST", "BOOTH", "BOOTS",
    "BOUND", "BOWLS", "BOXES", "BRAIN", "BRAKE", "BRAND", "BRASS", "BRAVE", "BREAD", "BREAK",
    "BREED", "BRICK", "BRIEF", "BRING", "BROAD", "BROKE", "BROWN", "BUILD", "BUILT", "BUNCH",
    "BUNKS", "BURNT", "BUSES", "BUYER", "CABLE", "CABIN", "CAFES", "CAKES", "CANDY", "CANOE",
    "CARRY", "CARTS", "CARVE", "CATCH", "CAUSE", "CAVES", "CHAIN", "CHAIR", "CHAMP", "CHAOS",
    "CHART", "CHASE", "CHATS", "CHEAP", "CHECK", "CHEEK", "CHEST", "CHIEF", "CHILD", "CHILI",
    "CHILL", "CHIME", "CHIPS", "CHOPS", "CHORE", "CHOSE", "CHUNK", "CIVIL", "CLAIM", "CLAMP",
    "CLASS", "CLASP", "CLAWS", "CLEAN", "CLEAR", "CLICK", "CLIFF", "CLOAK", "CLOCK", "CLOSE",
    "CLOTH", "CLOUD", "CLUBS", "COACH", "COALS", "COAST", "COATS", "COCOA", "COINS", "COMET",
    "CONDO", "CORDS", "COUCH", "COULD", "COUNT", "COURT", "COVER", "CRABS", "CRAFT", "CRANK",
    "CRASH", "CRATE", "CRAZY", "CREAM", "CREEK", "CREST", "CREWS", "CRISP", "CRIME", "CROSS",
    "CROWD", "CROWN", "CROWS", "CRUDE", "CRUMB", "CRUST", "CURBS", "CURES", "CURRY", "CYCLE",
    "DAILY", "DANCE", "DATED", "DATES", "DEALT", "DEATH", "DEBUT", "DELAY", "DENIM", "DENSE",
    "DEPTH", "DESKS", "DIETS", "DINER", "DIRTY", "DISCO", "DIVES", "DOCKS", "DOING", "DONUT",
    "DOORS", "DORMS", "DOUBT", "DOUGH", "DOZEN", "DRAFT", "DRAMA", "DRANK", "DRAWN", "DREAM",
    "DRESS", "DRIED", "DRILL", "DRINK", "DRIVE", "DROPS", "DROVE", "DRUMS", "DUCKS", "DUNES",
    "DUSTY", "DYING", "EAGER", "EARLY", "EARTH", "EIGHT", "ELBOW", "ELITE", "EMPTY", "ENEMY",
    "ENJOY", "ENTER", "ENTRY", "EQUAL", "ERROR", "EVENT", "EVERY", "EXACT", "EXIST", "EXTRA",
    "FAITH", "FALSE", "FAULT", "FAVOR", "FEAST", "FENCE", "FERRY", "FIBER", "FIELD", "FIFTH",
    "FIFTY", "FIGHT", "FILTH", "FINAL", "FIRST", "FIXED", "FLAME", "FLARE", "FLASH", "FLASK",
    "FLATS", "FLEET", "FLESH", "FLIES", "FLOCK", "FLOOR", "FLOUR", "FLUID", "FOCUS", "FOGGY",
    "FORCE", "FORKS", "FORTH", "FORTY", "FORUM", "FOUND", "FRAME", "FRAUD", "FRESH", "FRIED",
    "FROGS", "FRONT", "FROST", "FRUIT", "FUDGE", "FULLY", "FUNNY", "GANGS", "GIANT", "GIFTS",
    "GIVEN", "GLASS", "GLOBE", "GLOSS", "GLOVE", "GOING", "GOODS", "GOOSE", "GRACE", "GRADE",
    "GRAIN", "GRAND", "GRANT", "GRAPE", "GRASS", "GRATE", "GRAVE", "GRAVY", "GREAT", "GREEN",
    "GRIEF", "GRILL", "GRIME", "GRIMY", "GRIND", "GROSS", "GROUP", "GROWN", "GUARD", "GUESS",
    "GUEST", "GUIDE", "HAPPY", "HAUNT", "HAVEN", "HEART", "HEAVY", "HEELS", "HEIST", "HENCE",
    "HERBS", "HILLS", "HINGE", "HOARD", "HONEY", "HONOR", "HOOKS", "HORSE", "HOTEL", "HOUSE",
    "HUMAN", "IDEAL", "IMAGE", "INDEX", "INNER", "INPUT", "IRONY", "ISSUE", "ITEMS", "JEANS",
    "JELLY", "JERKY", "JEWEL", "JOINT", "JOKES", "JUDGE", "JUICE", "JUICY", "JUMBO", "KAYAK",
    "KIWIS", "KNEES", "KNIFE", "KNOTS", "KNOWN", "LABEL", "LABOR", "LAKES", "LAMPS", "LANDS",
    "LARGE", "LASER", "LATER", "LATCH", "LAUGH", "LAYER", "LEADS", "LEARN", "LEASE", "LEAST",
    "LEAVE", "LEDGE", "LEGAL", "LEMON", "LEVEL", "LEVER", "LIGHT", "LIMIT", "LINEN", "LINER",
    "LINKS", "LIONS", "LIVER", "LIVES", "LOADS", "LOBBY", "LOCAL", "LOGIC", "LOOPS", "LOOSE",
    "LOWER", "LUCKY", "LUNCH", "LYING", "MAGIC", "MAJOR", "MAKER", "MALLS", "MANGO", "MARCH",
    "MARKS", "MATCH", "MAYBE", "MAYOR", "MEALS", "MEANT", "MEATS", "MEDAL", "MEDIA", "MELON",
    "MERCY", "MERIT", "METAL", "METRO", "MIGHT", "MINCE", "MINOR", "MINUS", "MIXER", "MIXED",
    "MODEL", "MOIST", "MONEY", "MONTH", "MOONS", "MORAL", "MOTOR", "MOUNT", "MOUSE", "MOUTH",
    "MOVED", "MOVIE", "MUDDY", "MUSIC", "NAILS", "NAMES", "NEEDS", "NERVE", "NEVER", "NEWLY",
    "NIGHT", "NOISE", "NORTH", "NOTED", "NOTES", "NOVEL", "NURSE", "NYLON", "OCCUR", "OCEAN",
    "OFFER", "OFTEN", "OLIVE", "ONION", "ORBIT", "ORDER", "ORGAN", "OTHER", "OUGHT", "OTTER",
    "OVENS", "PAINT", "PALMS", "PANEL", "PANTS", "PAPER", "PARKS", "PARTS", "PARTY", "PASTA",
    "PASTE", "PATCH", "PATIO", "PATTY", "PEACE", "PEACH", "PEAKS", "PEARS", "PEDAL", "PERKS",
    "PETTY", "PHASE", "PHONE", "PHOTO", "PIECE", "PILLS", "PILOT", "PIPES", "PITCH", "PIVOT",
    "PIZZA", "PLACE", "PLAIN", "PLANE", "PLANK", "PLANS", "PLANT", "PLATE", "PLAYS", "PLAZA",
    "PLUMS", "POINT", "POLES", "PONDS", "POOLS", "POSTS", "POUND", "POWER", "PRESS", "PRICE",
    "PRIDE", "PRIME", "PRINT", "PRIOR", "PRIZE", "PROOF", "PROUD", "PROVE", "PRUNE", "PULSE",
    "QUEEN", "QUERY", "QUEST", "QUICK", "QUIET", "QUITE", "RACKS", "RADIO", "RAINS", "RAISE",
    "RANGE", "RAPID", "RATIO", "REACH", "READY", "REFER", "REPLY", "RIDGE", "RIGHT", "RINGS",
    "RIVAL", "RIVER", "ROADS", "ROAST", "ROCKS", "ROLLS", "ROOTS", "ROUGH", "ROUND", "ROUTE",
    "ROYAL", "RUINS", "RURAL", "SALAD", "SALSA", "SALTY", "SALTS", "SAUCE", "SCALE", "SCARF",
    "SCENE", "SCENT", "SCOPE", "SCOOP", "SCORE", "SCRAP", "SEALS", "SEATS", "SEDAN", "SEEDS",
    "SENSE", "SERVE", "SEVEN", "SHAFT", "SHALL", "SHAPE", "SHARE", "SHARK", "SHARP", "SHEET",
    "SHELF", "SHELL", "SHIFT", "SHINE", "SHIRT", "SHOCK", "SHOOT", "SHOPS", "SHORT", "SHORE",
    "SHOTS", "SHOWN", "SHOWS", "SIGHT", "SIGNS", "SINCE", "SINKS", "SITES", "SIXTH", "SIXTY",
    "SIZED", "SKILL", "SKIRT", "SKULL", "SLEEP", "SLEEK", "SLATE", "SLICE", "SLICK", "SLIDE",
    "SLIME", "SLOPE", "SMALL", "SMART", "SMILE", "SMOKE", "SMOKY", "SNACK", "SNAIL", "SNAKE",
    "SNOWS", "SOCKS", "SODAS", "SOLID", "SOLVE", "SONGS", "SORRY", "SOUND", "SOUTH", "SPACE",
    "SPARE", "SPARK", "SPEAK", "SPEAR", "SPEED", "SPEND", "SPENT", "SPICE", "SPICY", "SPINE",
    "SPLIT", "SPOKE", "SPOON", "SPORT", "SPOTS", "SQUAD", "STAFF", "STAGE", "STAKE", "STALE",
    "STAMP", "STAND", "START", "STARS", "STASH", "STATE", "STEAK", "STEAM", "STEEL", "STEMS",
    "STICK", "STILL", "STOCK", "STONE", "STOOD", "STOOL", "STORE", "STORM", "STORY", "STOVE",
    "STRAP", "STRIP", "STUCK", "STUDY", "STUFF", "STYLE", "SUGAR", "SUITE", "SUPER", "SWAMP",
    "SWARM", "SWEAT", "SWEET", "SWELL", "SWORD", "SYRUP", "TABLE", "TACKS", "TACOS", "TAKEN",
    "TALES", "TALKS", "TANGO", "TANGY", "TANKS", "TARTS", "TASKS", "TASTE", "TAXES", "TEACH",
    "TEAMS", "TEARS", "TEETH", "THANK", "THEFT", "THEIR", "THEME", "THERE", "THESE", "THICK",
    "THIGH", "THING", "THINK", "THIRD", "THOSE", "THREE", "THREW", "THROW", "THUMB", "TIDES",
    "TIGER", "TIGHT", "TIMES", "TITLE", "TODAY", "TONES", "TONIC", "TOOLS", "TOPIC", "TORCH",
    "TOTAL", "TOUCH", "TOUGH", "TOWER", "TRACK", "TRACE", "TRADE", "TRAIN", "TRASH", "TREAT",
    "TREES", "TREND", "TRIAL", "TRIBE", "TRICK", "TRIED", "TRIES", "TROOP", "TRUCK", "TRULY",
    "TRUNK", "TRUST", "TRUTH", "TUBES", "TUNES", "TWICE", "UNDER", "UNION", "UNITY", "UNTIL",
    "UPPER", "UPSET", "URBAN", "USAGE", "USUAL", "VALID", "VALUE", "VALVE", "VAPOR", "VASES",
    "VAULT", "VEINS", "VENUE", "VESTS", "VIDEO", "VILLA", "VINES", "VIRUS", "VISIT", "VITAL",
    "VOCAL", "VOICE", "VOWEL", "WAIST", "WALTZ", "WALLS", "WASTE", "WATCH", "WATER", "WAVES",
    "WEEDS", "WEDGE", "WHEAT", "WHEEL", "WHERE", "WHICH", "WHILE", "WHITE", "WHOLE", "WHOSE",
    "WINDS", "WINGS", "WIRES", "WOMAN", "WOMEN", "WORKS", "WORLD", "WORMS", "WORRY", "WORSE",
    "WORST", "WORTH", "WOULD", "WOUND", "WRIST", "WRITE", "WRONG", "WROTE", "YEAST", "YIELD",
    "YOUNG", "YOUTH", "ZONES",
];

// Valid 5-letter words for guessing (includes WORDS plus more hard/obscure words)
const VALID_WORDS = [
    ...WORDS,
    // Harder/obscure words that players can still guess
    "ABODE", "ABYSS", "AGATE", "ALLOY", "ALTAR", "ANISE", "ANVIL", "ARBOR", "AUGER", "AZURE",
    "BEIGE", "BERTH", "BERYL", "BORER", "BOOTY", "BOWER", "BROIL", "BROOK", "BROOD", "BROTH",
    "CACHE", "CAPER", "CAPES", "CELLO", "CHARS", "CHOIR", "CHORD", "CLANS", "CLOVE", "COUPE",
    "CORPS", "COVEN", "CRYPT", "CULTS", "CUMIN", "DALES", "DECAL", "DELIS", "DELTA", "DOWEL",
    "DRAPE", "DUCHY", "DUCTS", "DWELL", "EASEL", "EMBER", "FLEEC", "FLINT", "FLUME", "FLUTE",
    "FOGGY", "FONTS", "FORGE", "FORTE", "FOYER", "GAUNT", "GLEAM", "GONGS", "GORGE", "GOURD",
    "GOWNS", "GRIDS", "GRIPS", "GRUBS", "GUILD", "HAILS", "HARDY", "HAULS", "HAWKS", "HAZEL",
    "HORDE", "HOWLS", "HYMNS", "ICONS", "IDOLS", "IVORY", "KETCH", "KIOSK", "LADLE", "LANCE",
    "LEEKS", "LEVEE", "LICKS", "LILAC", "LOAFS", "LOFTS", "LOGOS", "LOOTS", "LUCID", "LUNAR",
    "LYRES", "MANSE", "MARSH", "MAUVE", "MOANS", "MOTHS", "MOURN", "MURAL", "MURKY", "NAVAL",
    "OASIS", "OCHRE", "PAILS", "PECAN", "PIERS", "PLAID", "POACH", "PRISM", "PROMS", "QUIPS",
    "RAFTS", "RAVES", "RAYON", "REALM", "REMES", "RESTO", "RINKS", "ROBES", "SCAMS", "SEARS",
    "SEPIA", "SHAWL", "SHIMS", "SHIRE", "SIGHS", "SKIFF", "SKITS", "SLATS", "SLOOP", "SLOWS",
    "SLUGS", "SOLAR", "SOLES", "SPOIL", "SPOUT", "STERN", "STEWS", "STOUT", "TEMPO", "TERRA",
    "THYME", "TIARA", "TIERS", "TOILS", "TOMBS", "TOPAZ", "TRAMS", "TROVE", "TURFS", "TWEED",
    "TWINE", "UMBER", "UNDUE", "VALES", "VERGE", "VIALS", "VIGOR", "VIOLA", "VIVID", "WAILS",
    "WARES", "WEIRS", "WHARF", "WHISK", "YACHT", "ZEBRA", "ZESTY", "FRANK", "JOSHI", "FARUQ",
    "TYLER", "BOOBS", "PENIS", "BUTTS", 
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