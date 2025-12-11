// Word list - common 5-letter words
const WORDS = [
    "ABOUT", "ABOVE", "ABUSE", "ACTOR", "ACUTE", "ADMIT", "ADOPT", "ADULT", "AFTER", "AGAIN",
    "AGENT", "AGREE", "AHEAD", "ALARM", "ALBUM", "ALERT", "ALIGN", "ALIKE", "ALIVE", "ALLOW",
    "ALONE", "ALONG", "ALTER", "ANGEL", "ANGER", "ANGLE", "ANGRY", "APART", "APPLE", "APPLY",
    "ARENA", "ARGUE", "ARISE", "ARRAY", "ASIDE", "ASSET", "AUDIO", "AVOID", "AWARD", "AWARE",
    "BADLY", "BAKER", "BASES", "BASIC", "BASIS", "BEACH", "BEGAN", "BEGIN", "BEING", "BELOW",
    "BENCH", "BILLY", "BIRTH", "BLACK", "BLAME", "BLIND", "BLOCK", "BLOOD", "BOARD", "BOOST",
    "BOOTH", "BOUND", "BRAIN", "BRAND", "BREAD", "BREAK", "BREED", "BRIEF", "BRING", "BROAD",
    "BROKE", "BROWN", "BUILD", "BUILT", "BUYER", "CABLE", "CALIF", "CARRY", "CATCH", "CAUSE",
    "CHAIN", "CHAIR", "CHART", "CHASE", "CHEAP", "CHECK", "CHEST", "CHIEF", "CHILD", "CHINA",
    "CHOSE", "CIVIL", "CLAIM", "CLASS", "CLEAN", "CLEAR", "CLICK", "CLOCK", "CLOSE", "COACH",
    "COAST", "COULD", "COUNT", "COURT", "COVER", "CRAFT", "CRASH", "CRAZY", "CREAM", "CRIME",
    "CROSS", "CROWD", "CROWN", "CRUDE", "CYCLE", "DAILY", "DANCE", "DATED", "DEALT", "DEATH",
    "DEBUT", "DELAY", "DEPTH", "DOING", "DOUBT", "DOZEN", "DRAFT", "DRAMA", "DRANK", "DRAWN",
    "DREAM", "DRESS", "DRILL", "DRINK", "DRIVE", "DROVE", "DYING", "EAGER", "EARLY", "EARTH",
    "EIGHT", "ELITE", "EMPTY", "ENEMY", "ENJOY", "ENTER", "ENTRY", "EQUAL", "ERROR", "EVENT",
    "EVERY", "EXACT", "EXIST", "EXTRA", "FAITH", "FALSE", "FAULT", "FIBER", "FIELD", "FIFTH",
    "FIFTY", "FIGHT", "FINAL", "FIRST", "FIXED", "FLASH", "FLEET", "FLOOR", "FLUID", "FOCUS",
    "FORCE", "FORTH", "FORTY", "FORUM", "FOUND", "FRAME", "FRANK", "FRAUD", "FRESH", "FRONT",
    "FRUIT", "FULLY", "FUNNY", "GIANT", "GIVEN", "GLASS", "GLOBE", "GOING", "GRACE", "GRADE",
    "GRAND", "GRANT", "GRASS", "GRAVE", "GREAT", "GREEN", "GROSS", "GROUP", "GROWN", "GUARD",
    "GUESS", "GUEST", "GUIDE", "HAPPY", "HARRY", "HEART", "HEAVY", "HENCE", "HENRY", "HORSE",
    "HOTEL", "HOUSE", "HUMAN", "IDEAL", "IMAGE", "INDEX", "INNER", "INPUT", "ISSUE", "JAPAN",
    "JIMMY", "JOINT", "JONES", "JUDGE", "KNOWN", "LABEL", "LARGE", "LASER", "LATER", "LAUGH",
    "LAYER", "LEARN", "LEASE", "LEAST", "LEAVE", "LEGAL", "LEMON", "LEVEL", "LEWIS", "LIGHT",
    "LIMIT", "LINKS", "LIVES", "LOCAL", "LOGIC", "LOOSE", "LOWER", "LUCKY", "LUNCH", "LYING",
    "MAGIC", "MAJOR", "MAKER", "MARCH", "MARIA", "MATCH", "MAYBE", "MAYOR", "MEANT", "MEDIA",
    "METAL", "MIGHT", "MINOR", "MINUS", "MIXED", "MODEL", "MONEY", "MONTH", "MORAL", "MOTOR",
    "MOUNT", "MOUSE", "MOUTH", "MOVED", "MOVIE", "MUSIC", "NEEDS", "NEVER", "NEWLY", "NIGHT",
    "NOISE", "NORTH", "NOTED", "NOVEL", "NURSE", "OCCUR", "OCEAN", "OFFER", "OFTEN", "ORDER",
    "OTHER", "OUGHT", "PAINT", "PANEL", "PAPER", "PARTY", "PEACE", "PETER", "PHASE", "PHONE",
    "PHOTO", "PIECE", "PILOT", "PITCH", "PLACE", "PLAIN", "PLANE", "PLANT", "PLATE", "POINT",
    "POUND", "POWER", "PRESS", "PRICE", "PRIDE", "PRIME", "PRINT", "PRIOR", "PRIZE", "PROOF",
    "PROUD", "PROVE", "QUEEN", "QUICK", "QUIET", "QUITE", "RADIO", "RAISE", "RANGE", "RAPID",
    "RATIO", "REACH", "READY", "REFER", "RIGHT", "RIVAL", "RIVER", "ROBIN", "ROGER", "ROMAN",
    "ROUGH", "ROUND", "ROUTE", "ROYAL", "RURAL", "SCALE", "SCENE", "SCOPE", "SCORE", "SENSE",
    "SERVE", "SEVEN", "SHALL", "SHAPE", "SHARE", "SHARP", "SHEET", "SHELF", "SHELL", "SHIFT",
    "SHINE", "SHIRT", "SHOCK", "SHOOT", "SHORT", "SHOWN", "SIGHT", "SINCE", "SIXTH", "SIXTY",
    "SIZED", "SKILL", "SLEEP", "SLIDE", "SMALL", "SMART", "SMILE", "SMITH", "SMOKE", "SOLID",
    "SOLVE", "SORRY", "SOUND", "SOUTH", "SPACE", "SPARE", "SPEAK", "SPEED", "SPEND", "SPENT",
    "SPLIT", "SPOKE", "SPORT", "STAFF", "STAGE", "STAKE", "STAND", "START", "STATE", "STEAM",
    "STEEL", "STICK", "STILL", "STOCK", "STONE", "STOOD", "STORE", "STORM", "STORY", "STRIP",
    "STUCK", "STUDY", "STUFF", "STYLE", "SUGAR", "SUITE", "SUPER", "SWEET", "TABLE", "TAKEN",
    "TASTE", "TAXES", "TEACH", "TERRY", "TEXAS", "THANK", "THEFT", "THEIR", "THEME", "THERE",
    "THESE", "THICK", "THING", "THINK", "THIRD", "THOSE", "THREE", "THREW", "THROW", "TIGHT",
    "TIMES", "TITLE", "TODAY", "TOPIC", "TOTAL", "TOUCH", "TOUGH", "TOWER", "TRACK", "TRADE",
    "TRAIN", "TREAT", "TREND", "TRIAL", "TRIBE", "TRICK", "TRIED", "TRIES", "TROOP", "TRUCK",
    "TRULY", "TRUST", "TRUTH", "TWICE", "UNDER", "UNDUE", "UNION", "UNITY", "UNTIL", "UPPER",
    "UPSET", "URBAN", "USAGE", "USUAL", "VALID", "VALUE", "VIDEO", "VIRUS", "VISIT", "VITAL",
    "VOCAL", "VOICE", "WASTE", "WATCH", "WATER", "WHEEL", "WHERE", "WHICH", "WHILE", "WHITE",
    "WHOLE", "WHOSE", "WOMAN", "WOMEN", "WORLD", "WORRY", "WORSE", "WORST", "WORTH", "WOULD",
    "WOUND", "WRITE", "WRONG", "WROTE", "YIELD", "YOUNG", "YOUTH", "ZONES", "ZEBRA", "PARKS",
    "BARKS", "SKIRT", "SHARK", "FLAME", "QUEST", "PLANK", "FORKS", "SPOON", "KNIFE", "BOWLS",
    "BOOKS", "DESKS", "LAMPS", "DOORS", "WALLS", "ROADS", "TREES", "BIRDS", "BEARS", "LIONS",
    "TIGER", "SNAKE", "GOOSE", "DUCKS", "FROGS", "CRABS", "SEALS", "OTTER", "FOXES", "HAWKS",
    "CROWS", "MOTHS", "FLIES", "WASPS", "WORMS", "GRUBS", "SLUGS", "SNAIL", "STARS", "MOONS",
    "CLOUD", "RAINS", "SNOWS", "HAILS", "WINDS", "BLAZE", "SPARK", "FROST", "CHILL", "MOIST",
    "SWEAT", "TEARS", "BONES", "FLESH", "VEINS", "NERVE", "SKULL", "SPINE", "BELLY", "ANKLE",
    "ELBOW", "WRIST", "THUMB", "NAILS", "TEETH", "CHEEK", "WAIST", "THIGH", "KNEES", "HEELS",
    "SOLES", "PALMS", "GLOVE", "SCARF", "BOOTS", "SHOES", "SOCKS", "PANTS", "JEANS", "APRON",
    "COATS", "VESTS", "TIARA", "RINGS", "JEWEL", "BADGE", "MEDAL", "TORCH", "SHADE", "DRAPE",
    "COUCH", "STOOL", "TRUNK", "BOXES", "CRATE", "FLASK", "VIALS", "BLADE", "SWORD", "TOOLS",
    "LANCE", "SPEAR", "ARROW", "BOLTS", "ARMOR", "GAUNT", "CLOAK", "ROBES", "GOWNS", "CAPES",
    "SHAWL", "BELTS", "STRAP", "LATCH", "HINGE", "LEVER", "CRANK", "PIVOT", "PEDAL", "BRAKE",
    "SHAFT", "VALVE", "PIPES", "TUBES", "WIRES", "CLOTH", "LINEN", "SATIN", "DENIM", "TWEED",
    "PLAID", "BLEND", "SHEER", "DENSE", "MELON", "GRAPE", "PEACH", "PLUMS", "NYLON", "RAYON",
    "BERRY", "MANGO", "DATES", "OLIVE", "PRUNE", "PEARS", "KIWIS", "SALAD", "PASTA", "PIZZA",
    "TACOS", "CHIPS", "TOAST", "BAGEL", "DONUT", "CAKES", "TARTS", "CANDY", "FUDGE", "HONEY",
    "SYRUP", "JELLY", "SAUCE", "GRAVY", "BROTH", "JUICE", "SODAS", "BACON", "STEAK", "MEATS",
    "CHOPS", "ROAST", "WINGS", "DRUMS", "LIVER", "JERKY", "PATTY", "MINCE", "GRIND", "CHILI",
    "CURRY", "STEWS", "GRILL", "BAKED", "FRIED", "POACH", "BROIL", "SEARS", "CHARS", "CRISP",
    "JUICY", "SALTY", "SPICY", "BLAND", "STALE", "BURNT", "SMOKY", "TANGY", "ZESTY", "JUMBO",
    "PETTY", "BONUS", "ADDED", "DIRTY", "GRIMY", "FILTH", "GRIME", "SLIME", "TRASH", "DUSTY",
    "SCRAP", "RUINS", "TURFS", "WEEDS", "VINES", "ROOTS", "STEMS", "SEEDS", "GRAIN", "WHEAT",
    "BEANS", "PECAN", "HAZEL", "ACORN", "COCOA", "BASIL", "THYME", "CUMIN", "CLOVE", "ANISE",
    "SALTS", "SPICE", "HERBS", "ONION", "LEEKS", "BEETS", "GOURD", "ROLLS", "SLICE", "CHUNK",
    "BRICK", "ROCKS", "CAVES", "PEAKS", "HILLS", "VALES", "DALES", "SLOPE", "CLIFF", "RIDGE",
    "CREST", "LEDGE", "GORGE", "MARSH", "SWAMP", "DELTA", "CREEK", "BROOK", "LAKES", "PONDS",
    "POOLS", "WAVES", "TIDES", "SHORE", "DUNES", "OASIS", "LANDS", "REALM", "TERRA", "LUNAR",
    "SOLAR", "COMET", "ORBIT", "ABYSS", "CHAOS", "VIGOR", "BRAVE", "HARDY", "STOUT", "STERN",
    "BLUNT", "LUCID", "VIVID", "SLEEK", "SLICK", "GLOSS", "GLEAM", "FLARE", "EMBER", "COALS",
    "VAPOR", "FOGGY", "MURKY", "BEIGE", "IVORY", "AMBER", "OCHRE", "SEPIA", "UMBER", "AZURE",
    "MAUVE", "LILAC", "SLATE", "BRASS", "ALLOY", "TOPAZ", "BERYL", "AGATE", "FLINT", "PRISM",
    "EASEL", "MURAL", "TRACE", "CARVE", "ANVIL", "FORGE", "GUILD", "LABOR", "WORKS", "TOILS",
    "CHORE", "TASKS", "HONOR", "GLORY", "MERIT", "PERKS", "GIFTS", "FAVOR", "MERCY", "GRIEF",
    "MOURN", "WAILS", "HOWLS", "MOANS", "SIGHS", "PLAZA", "ALLEY", "PATIO", "VERGE", "CURBS",
    "FENCE", "ARBOR", "BOWER", "FOYER", "LOBBY", "ATTIC", "LOFTS", "VAULT", "CRYPT", "TOMBS",
    "ALTAR", "AISLE", "CHOIR", "ORGAN", "BELLS", "CHIME", "GONGS", "FLUTE", "VIOLA", "CELLO",
    "BANJO", "LYRES", "FORTE", "TEMPO", "CHORD", "NOTES", "TONES", "HYMNS", "SONGS", "TUNES",
    "BEATS", "PULSE", "WALTZ", "TANGO", "SALSA", "DISCO", "RAVES", "SHOWS", "PROMS", "MIXER",
    "FEAST", "DINER", "SNACK", "MEALS", "DIETS", "LADLE", "WHISK", "SIEVE", "SCOOP", "STOVE",
    "OVENS", "LOAFS", "CRUMB", "CRUST", "DOUGH", "YEAST", "FLOUR", "REPLY", "QUERY", "TALKS",
    "CHATS", "JOKES", "QUIPS", "IRONY", "SKITS", "PLAYS", "PARTS", "LEADS", "ICONS", "IDOLS",
    "CHAMP", "LOGOS", "MARKS", "SIGNS", "DECAL", "PATCH", "CLASP", "HOOKS", "LOOPS", "KNOTS",
    "TWINE", "CORDS", "TACKS", "DOWEL", "SLATS", "BEAMS", "POSTS", "POLES", "DUCTS", "VENTS",
    "SINKS", "SPOUT", "HASPS", "SHIMS", "WEDGE", "CLAMP", "AUGER", "BORER", "GRIPS", "CLAWS",
    "PIERS", "DOCKS", "WHARF", "BERTH", "LEVEE", "WEIRS", "FLUME", "GRATE", "GRIDS", "RACKS",
    "TIERS", "PAILS", "TANKS", "VASES", "BASIN", "FONTS", "BATHS", "RINKS", "CLUBS", "TEAMS",
    "BANDS", "CREWS", "GANGS", "HORDE", "SWARM", "FLOCK", "BROOD", "BUNCH", "BATCH", "SQUAD",
    "CORPS", "COVEN", "CLANS", "DUCHY", "VILLA", "HAVEN", "ABODE", "DWELL", "SHACK", "CABIN",
    "BUNKS", "DORMS", "CONDO", "FLATS", "MANSE", "ACRES", "SHIRE", "SITES", "SPOTS", "VENUE",
    "HAUNT", "DIVES", "CAFES", "RESTO", "DELIS", "SHOPS", "MALLS", "KIOSK", "CARTS", "SEDAN",
    "COUPE", "WAGON", "BUSES", "TRAMS", "METRO", "FERRY", "YACHT", "LINER", "BARGE", "CANOE",
    "KAYAK", "RAFTS", "SKIFF", "SLOOP", "KETCH", "NAVAL", "HAULS", "LOADS", "GOODS", "WARES",
    "ITEMS", "HOARD", "CACHE", "STASH", "TROVE", "BOOTY", "SPOIL", "LOOTS", "HEIST", "CAPER"
];

// Valid 5-letter words for guessing (includes WORDS plus more)
const VALID_WORDS = [
    ...WORDS, "AAHED", "AALII", "AARGH", "ABACA", "ABACI", "ABACK", "ABAFT", "ABAKA", "ABAMP",
    "ABASE", "JORKS", "NOICE", "JOSHI", "TYLER", "FARUQ", "KINKY", "PENIS", "PUSSY",
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