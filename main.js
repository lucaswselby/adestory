class Proclivity {
    constructor(name, definition, school, type, env, self, others, plane, basis, source, element, subcategories) {
        this._name = name;
        this._definition = definition;
        this._school = school;
        this._type = type;
        this._env = env;
        this._self = self;
        this._others = others;
        this._plane = plane;
        this._basis = basis;
        this._source = source;
        this._element = element;
        this._subcategories = subcategories;
    }
    get name() {
        return this._name;
    }
    get definition() {
        return this._definition;
    }
    get school() {
        return this._school;
    }
    get type() {
        return this._type;
    }
    get env() {
        return this._env;
    }
    get self() {
        return this._self;
    }
    get others() {
        return this._others;
    }
    get plane() {
        return this._plane;
    }
    get basis() {
        return this._basis;
    }
    get source() {
        return this._source;
    }
    get element() {
        return this._element;
    }
    get subcategories() {
        return this._subcategories;
    }
}
const abacomancy = new Proclivity("ABACOMANCY", "USING SAND TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, false, false, ["ASTRAL", "PHYSICAL"], [], ["ELEMENTAL"], ["EARTH"], []);
const adaptation = new Proclivity("ADAPTATION", "CHANGE ONE'S SELF TO SURVIVE IN ANY ENVIRONMENT", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["PHYSICAL"], [], ["PERSON"], [], []);
const ancestralCommunication = new Proclivity("ANCESTRAL COMMUNICATION", "COMMUNICATE WITH ONE'S ANCESTORS", "TRANSMUTATION", "COMMUNICATION", false, false, true, ["ASTRAL", "SOCIAL"], [], ["MAGIC"], [], []);
const ancestralKnowledge = new Proclivity("ANCESTRAL KNOWLEDGE", "KNOWLEDGE OF ONE'S LINEAGE", "DIVINATION", "DETECTION", false, false, true, ["ASTRAL"], [], ["MAGIC"], [], []);
const angerInducement = new Proclivity("ANGER INDUCEMENT", "CAUSE ANOTHER TO FEEL ANGER", "ENCHANTMENT", "CREATION", false, false, true, ["MENTAL"], [], ["PERSON"], [], []);
const animalCommunication = new Proclivity("ANIMAL COMMUNICATION", "COMMUNICATE WITH ANIMALS", "TRANSMUTATION", "COMMUNICATION", false, true, false, ["PHYSICAL", "SOCIAL"], [], ["ANIMAL"], [], ["WILD", "DOMESTIC"]);
const animalMastery = new Proclivity("ANIMAL MASTERY", "KNOWLEDGE OF ANIMALS AND HOW TO CARE FOR THEM", "DIVINATION", "MASTERY", false, false, false, ["PHYSICAL"], [], ["ANIMAL"], [], ["WILD", "DOMESTIC"]);
const animancy = new Proclivity("ANIMANCY", "USING TECHNOLOGY TO MANIUPLATE THE SOUL OR LIFE FORCE", "NECROMANCY", "MANIPULATION", false, true, true, ["ASTRAL", "TECHNOLOGICAL"], [], ["MAN-MADE", "PERSON"], [], []);
const anthropomancy = new Proclivity("ANTHROPOMANCY", "USING THE ENTRAILS OF A DECEASED OR DYING INDIVIDUAL TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", false, true, true, ["PHYSICAL"], ["DEATH"], ["PERSON"], [], []);
const anxietyInducement = new Proclivity("ANXIETY INDUCEMENT", "CAUSE ANOTHER TO FEEL ANXIETY", "ENCHANTMENT", "CREATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const apotropaic = new Proclivity("APOTROPAIC", "POWER TO AVERT EVIL INFLUENCES", "ABJURATION", "RESISTANCE", false, false, true, ["ASTRAL"], ["BLESSING"], ["MAGIC"], [], []);
const architecturalManipulation = new Proclivity("ARCHITECTURAL MANIPULATION", "CHANGE THE ARCHITECTURE OF MAN-MADE STRUCTURES", "TRANSMUTATION", "MANIPULATION", true, false, false, ["PHYSICAL"], [], ["MAN-MADE"], [], []);
const artMastery = new Proclivity("ART MASTERY", "KNOWLEDGE OF AN ART FORM AND THE ABLITY TO USE IT", "DIVINATION", "MASTERY", true, false, false, ["PHYSICAL"], ["ART"], ["PERSON"], [], []);
const astralCommunication = new Proclivity("ASTRAL COMMUNICATION", "COMMUNICATING THROUGH THE ASTRAL PLANE", "TRANSMUTATION", "COMMUNICATION", false, true, true, ["ASTRAL", "SOCIAL"], ["LANGUAGE"], ["MAGIC"], [], []);
const astralProjection = new Proclivity("ASTRAL PROJECTION", "PROJECTING ONE'S SELF INTO THE ASTRAL PLANE", "NECROMANCY", "COMMUNICATION", false, true, false, ["ASTRAL", "PHYSICAL", "SOCIAL"], ["TRAVEL"], ["MAGIC"], [], []);
const augury = new Proclivity("AUGURY", "USING BIRDS TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, true, false, ["ASTRAL", "PHYSICAL"], [], ["ANIMAL"], [], []);
const auramancy = new Proclivity("AURAMANCY", "USING AURAS TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", false, true, true, ["ASTRAL"], [], ["MAGIC"], [], []);
const banishment = new Proclivity("BANISHMENT", "SEND ANOTHER TO ANOTHER PLANE OF EXISTANCE", "ABJURATION", "MANIPULATION", false, true, true, ["ASTRAL", "PHYSICAL"], ["TRAVEL"], ["MAGIC"], [], []);
const battleTactics = new Proclivity("BATTLE TACTICS", "KNOWLEDGE OF BATTLE TACTICS", "DIVINATION", "MASTERY", false, true, false, ["PHYSICAL"], ["COMBAT"], ["PERSON"], [], []);
const blessingCreation = new Proclivity("BLESSING CREATION", "CREATE BLESSINGS ON OTHERS OR THE ENVIRONMENT", "CONJURATION", "CREATION", false, true, true, ["ASTRAL"], ["BLESSING"], ["MAGIC"], [], []);
const blessingDestruction = new Proclivity("BLESSING DESTRUCTION", "DESTROY BLESSINGS", "TRANSMUTATION", "MANIPULATION", false, true, true, ["ASTRAL"], ["BLESSING"], ["MAGIC"], [], []);
const blessingDetection = new Proclivity("BLESSING DETECTION", "SENSE A BLESSING ON ONE'S SELF, OTHERS, OR THEIR ENVIRONMENT", "DIVINATION", "DETECTION", false, true, true, ["ASTRAL"], ["BLESSING"], ["MAGIC"], [], []);
const blessingImmunity = new Proclivity("BLESSING IMMUNITY", "IMMUNITY TO BLESSINGS", "ABJURATION", "IMMUNITY", false, false, false, ["ASTRAL"], ["BLESSING"], ["MAGIC"], [], []);
const blessingManipulation = new Proclivity("BLESSING MANIPULATION", "CHANGE PREEXISTING BLESSINGS", "TRANSMUTATION", "MANIPULATION", false, true, true, ["ASTRAL"], ["BLESSING"], ["MAGIC"], [], []);
const blessingResistance = new Proclivity("BLESSING RESISTANCE", "RESISTANCE TO BLESSINGS", "ABJURATION", "RESISTANCE", false, true, false, ["ASTRAL"], ["BLESSING"], ["MAGIC"], [], []);
const bodyMimicry = new Proclivity("BODY MIMICRY", "PROJECTION OF ANOTHER'S BODY ON ONE'S OWN", "ILLUSION", "MANIPULATION", false, true, true, ["PHYSICAL"], [], ["PERSON"], [], []);
const cartomancy = new Proclivity("CARTOMANCY", "USING CARDS TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, false, false, ["ASTRAL", "PHYSICAL"], ["CHANCE"], ["MAGIC"], [], []);
const chlomancy = new Proclivity("CHLOMANCY", "USING PLANTS TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, false, false, ["ASTRAL", "PHYSICAL"], [], ["PLANT"], [], []);
const cleromancy = new Proclivity("CLEROMANCY", "USING CHANCE TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, false, false, ["ASTRAL"], ["CHANCE"], ["MAGIC"], [], []);
const cloaking = new Proclivity("CLOAKING", "HIDE SOMETHING OR SOMEONE AT ONE'S WILL", "ILLUSION", "MANIPULATION", true, true, true, ["ASTRAL", "PHYSICAL"], [], ["PERSON"], [], []);
const clothManipulation = new Proclivity("CLOTH MANIPULATION", "SHAPE AND MANIPULATE TEXTILES", "TRANSMUTATION", "MANIPULATION", true, false, false, ["PHYSICAL"], ["ART"], ["PERSON"], [], []);
const coldImmunity = new Proclivity("COLD IMMUNITY", "IMMUNITY TO COLD TEMPERATURES", "ABJURATION", "IMMUNITY", false, true, true, ["PHYSICAL"], [], ["ELEMENTAL"], ["TEMPERATURE"], []);
const coldResistance = new Proclivity("COLD RESISTANCE", "RESISTANCE TO COLD TEMPERATURES", "ABJURATION", "RESISTANCE", false, true, true, ["PHYSICAL"], [], ["ELEMENTAL"], ["TEMPERATURE"], []);
const combatMastery = new Proclivity("COMBAT MASTERY", "KNOWLEDGE OF COMBAT AND THE ABLITY TO USE IT", "DIVINATION", "MASTERY", true, true, true, ["PHYSICAL"], ["COMBAT"], ["PERSON"], [], []);
const combatMimicry = new Proclivity("COMBAT MIMICRY", "COPY COMBAT MOVES ONE HAS PREVIOUSLY SEEN", "EVOCATION", "MANIPULATION", true, true, true, ["PHYSICAL"], ["COMBAT"], ["PERSON"], [], []);
const command = new Proclivity("COMMAND", "COMMAND ANOTHER TO DO AS YOU WISH", "ENCHANTMENT", "COMMUNICATION", false, true, true, ["MENTAL", "PHYSICAL", "SOCIAL"], ["LANGUAGE", "CURSE"], ["PERSON"], [], []);
const compassSense = new Proclivity("COMPASS SENSE", "KNOWLEDGE OF ALL CARDINAL DIRECTIONS", "EVOCATION", "MASTERY", false, true, false, ["MENTAL", "PHYSICAL"], ["TRAVEL"], ["MAGIC"], [], []);
const courageInducement = new Proclivity("COURAGE INDUCEMENT", "CUASE ANOTHER TO FEEL COURAGEOUS", "ENCHANTMENT", "CREATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const curseCreation = new Proclivity("CURSE CREATION", "CREATION OF CURSES IN ONE'S SELF, OTHERS, OR THE ENVIRONMENT", "CONJURATION", "CREATION", false, true, true, ["ASTRAL"], ["CURSE"], ["MAGIC"], [], []);
const curseDestruction = new Proclivity("CURSE DESTRUCTION", "DETROYING CURSES", "ABJURATION", "MANIPULATION", false, true, true, ["ASTRAL"], ["CURSE"], ["MAGIC"], [], []);
const curseDetection = new Proclivity("CURSE DETECTION", "DECTECTION OF CURSES IN ONE'S SELF, OTHERS, OR THE ENVIRONMENT", "DIVINATION", "DETECTION", false, true, true, ["ASTRAL"], ["CURSE"], ["MAGIC"], [], []);
const curseImmunity = new Proclivity("CURSE IMMUNITY", "IMMUNITY TO CURSES ", "ABJURATION", "IMMUNITY", false, true, false, ["ASTRAL"], ["CURSE"], ["MAGIC"], [], []);
const curseManipulation = new Proclivity("CURSE MANIPULATION", "CHANGING ALREADY ESTABLISHED CURSES", "TRANSMUTATION", "MANIPULATION", true, true, true, ["ASTRAL"], ["CURSE"], ["MAGIC"], [], []);
const cyberlingalism = new Proclivity("CYBERLINGALISM", "COMMUNICATION WITH AND THROUGH COMPUTERS", "TRANSMUTATION", "COMMUNICATION", true, true, false, ["TECHNOLOGICAL", "SOCIAL"], ["KNOWLEDGE"], ["MAN-MADE", "PERSON"], [], []);
const deathInducement = new Proclivity("DEATH INDUCEMENT", "CAUSE DEATH", "NECROMANCY", "WIELDING", false, true, true, ["ASTRAL", "PHYSICAL"], ["DEATH", "LIFE"], ["MAGIC"], [], []);
const deathPrevention = new Proclivity("DEATH PREVENTION", "PREVENTS DEATH", "NECROMANCY", "RESISTANCE", false, true, true, ["PHYSICAL"], ["DEATH", "LIFE"], ["MAGIC"], [], []);
const diseaseCreation = new Proclivity("DISEASE CREATION", "CREATE DISEASES", "CONJURATION", "CREATION", true, false, false, ["PHYSICAL"], ["LIFE"], ["PERSON"], [], []);
const diseaseImmunity = new Proclivity("DISEASE IMMUNITY", "IMMUNITY TO DISEASE", "ABJURATION", "IMMUNITY", false, true, false, ["PHYSICAL"], ["LIFE"], ["PERSON"], [], []);
const diseaseManipulation = new Proclivity("DISEASE MANIPULATION", "MUTATE DISEASES", "TRANSMUTATION", "MANIPULATION", true, false, false, ["PHYSICAL"], ["LIFE"], ["PERSON"], [], []);
const diseaseResistance = new Proclivity("DISEASE RESISTANCE", "RESISTANCE TO DISEASE", "ABJURATION", "RESISTANCE", false, true, false, ["PHYSICAL"], ["LIFE"], ["PERSON"], [], []);
const disgustInducement = new Proclivity("DISGUST INDUCEMENT", "CAUSE ANOTHER TO FEEL DISGUST", "ENCHANTMENT", "CREATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const divineCommunication = new Proclivity("DIVINE COMMUNICATION", "COMMUNICATION WITH THE GODS", "TRANSMUTATION", "COMMUNICATION", false, true, false, ["ASTRAL"], [], ["MAGIC"], [], []);
const doubtManipulation = new Proclivity("DOUBT MANIPULATION", "CHANGE ANOTHER'S DOUBT", "ENCHANTMENT", "MANIPULATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const dreamCreation = new Proclivity("DREAM CREATION", "CREATE DREAMS IN ANOTHER'S MIND", "ILLUSION", "CREATION", false, true, true, ["ASTRAL"], [], ["PERSON"], [], []);
const dreamManipulation = new Proclivity("DREAM MANIPULATION", "CHANGE CREAMS IN ONE'S OR OTHER'S MINDS", "ILLUSION", "MANIPULATION", false, true, true, ["ASTRAL", "MENTAL"], [], ["PERSON"], [], []);
const dreamProjection = new Proclivity("DREAM PROJECTION", "PROJECTING DREAMS FOR OTHERS TO SEE", "ILLUSION", "CREATION", true, true, false, ["ASTRAL", "MENTAL", "PHYSICAL"], [], ["PERSON"], [], []);
const dreamWalking = new Proclivity("DREAM WALKING", "ENTERING OTHER'S DREAMS", "ILLUSION", "COMMUNICATION", false, true, true, ["ASTRAL", "SOCIAL"], [], ["PERSON"], [], []);
const earthWielding = new Proclivity("EARTH WIELDING", "USING EARTH TO ONE'S WILL", "EVOCATION", "WIELDING", false, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["EARTH"], []);
const eideticMemory = new Proclivity("EIDETIC MEMORY", "RECALL MEMORIES EXACTLY AS THEY HAPPENED", "DIVINATION", "MASTERY", false, true, false, ["MENTAL"], ["MEMORY"], ["PERSON"], [], []);
const emotionRegulation = new Proclivity("EMOTION REGULATION", "HELP OTHERS FEEL THEIR EMOTIONS", "ENCHANTMENT", "MANIPULATION", false, true, true, ["MENTAL", "SOCIAL"], ["EMOTION"], ["PERSON"], [], []);
const emotionalAbsorption = new Proclivity("EMOTIONAL ABSORPTION", "TAKE ON ANOTHER'S EMOTIONS", "ENCHANTMENT", "MANIPULATION", false, true, true, ["MENTAL", "SOCIAL"], ["EMOTION"], ["PERSON"], [], []);
const emotionalAssimilation = new Proclivity("EMOTIONAL ASSIMILATION", "KNOW ANOTHER'S EMOTIONS UPON TOUCH", "DIVINATION", "CLAIRVOYANCE", false, true, true, ["ASTRAL", "MENTAL"], ["EMOTION", "KNOWLEDGE"], ["PERSON"], [], []);
const empathy = new Proclivity("EMPATHY", "DETECT OTHER'S FEELINGS", "DIVINATION", "DETECTION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const energyAbsorption = new Proclivity("ENERGY ABSORPTION", "TAKE IN ENERGY AND CHANNEL IT INTO OTHER THINGS", "TRANSMUTATION", "ENHANCEMENT", true, true, false, ["PHYSICAL"], [], ["PERSON", "ELEMENTAL"], ["ENERGY"], []);
const energyConduit = new Proclivity("ENERGY CONDUIT", "CONDUCTING ENERGY", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["ENERGY"], []);
const energyWielding = new Proclivity("ENERGY WIELDING", "USING ENERGY AT ONE'S WILL", "EVOCATION", "WIELDING", true, true, false, ["PHYSICAL", "TECHNOLOGICAL"], [], ["MAN-MADE", "ELEMENTAL"], ["ENERGY"], []);
const enhancedHearing = new Proclivity("ENHANCED HEARING", "BETTER HEARING THAN AVERAGE PERSON", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["PHYSICAL"], [], ["PERSON"], [], []);
const enhancedIntelligence = new Proclivity("ENHANCED INTELLIGENCE", "BETTER INTELLIGENCE THAN THE AVERAGE PERSON", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["MENTAL"], ["KNOWLEDGE"], ["PERSON"], [], []);
const enhancedSight = new Proclivity("ENHANCED SIGHT", "BETTER SIGHT THAN THE AVERAGE PERSON", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["PHYSICAL"], [], ["PERSON"], [], []);
const enhancedSpeed = new Proclivity("ENHANCED SPEED", "FASTER SPEED THAN THE AVERAGE PERSON", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["PHYSICAL"], ["TRAVEL"], ["PERSON"], [], []);
const enhancedStrength = new Proclivity("ENHANCED STRENGTH", "LARGER STRNGTH CAPACITY THAT THE AVERAGE PERSON", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["PHYSICAL"], [], ["PERSON"], [], []);
const enhancedTaste = new Proclivity("ENHANCED TASTE", "BETTER SENSE OF TASTE THAN THE AVERAGE HUMAN", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["PHYSICAL"], [], ["PERSON"], [], []);
const enhancedTracking = new Proclivity("ENHANCED TRACKING", "BETTER ABILITY TO TRACK COMPARED TO THE AVERAGE PERSON", "TRANSMUTATION", "ENHANCEMENT", true, true, true, ["PHYSICAL"], ["KNOWLEDGE"], ["ANIMAL"], [], []);
const enviromentalMimicry = new Proclivity("ENVIROMENTAL MIMICRY", "RECREATE AN ENVIRONMENT ONE HAS PREVIOUSLY SEEN", "CONJURATION", "CREATION", true, true, false, ["PHYSICAL"], [], ["PLANT", "ANIMAL", "MAN-MADE"], [], []);
const enviromentalProjection = new Proclivity("ENVIROMENTAL PROJECTION", "PROJECT A COPY OF AN ENVIROMENT THAT ONE HAS PREVIOUSLY SEEN", "ILLUSION", "MANIPULATION", true, true, true, ["PHYSICAL"], [], ["PLANT"], [], []);
const fearDetection = new Proclivity("FEAR DETECTION", "KNOW WHAT ANOTHER FEARS", "DIVINATION", "DETECTION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const fearInducement = new Proclivity("FEAR INDUCEMENT", "CAUSE ANOTHER TO FEEL FEAR", "ENCHANTMENT", "CREATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const fearManipulation = new Proclivity("FEAR MANIPULATION", "TWIST OR CHANGE ANOTHER'S FEAR ", "ENCHANTMENT", "MANIPULATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const fearProjection = new Proclivity("FEAR PROJECTION", "PROJECTING FEAR TO ENVELOP ANOTHER", "ILLUSION", "CREATION", false, true, true, ["MENTAL", "PHYSICAL"], ["EMOTION", "CURSE"], ["MAGIC"], [], []);
const fireImmunity = new Proclivity("FIRE IMMUNITY", "IMMUNITY TO FIRE", "ABJURATION", "IMMUNITY", false, true, true, ["PHYSICAL"], [], ["ELEMENTAL"], ["FIRE"], []);
const fireResistance = new Proclivity("FIRE RESISTANCE", "RESISTANCE TO FIRE", "ABJURATION", "RESISTANCE", false, true, true, ["PHYSICAL"], [], ["ELEMENTAL"], ["FIRE"], []);
const fireWielding = new Proclivity("FIRE WIELDING", "USING FIRE TO ONE'S WILL", "EVOCATION", "WIELDING", false, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["FIRE"], []);
const flying = new Proclivity("FLYING", "TRAVEL THROUGH THE AIR", "CONJURATION", "MANIPULATION", false, true, false, ["PHYSICAL"], ["TRAVEL"], ["PERSON"], [], []);
const foodPreperation = new Proclivity("FOOD PREPERATION", "CREATE EDIBLE FOOD FROM OTHERWISE INEDIBLE THINGS", "CONJURATION", "CREATION", true, false, false, ["PHYSICAL"], [], ["ANIMAL", "PLANT"], [], []);
const foraging = new Proclivity("FORAGING", "DETECT EDIBLE PLANTS", "DIVINATION", "DETECTION", true, false, false, ["PHYSICAL"], [], ["PLANT"], [], []);
const glassWielding = new Proclivity("GLASS WIELDING", "USING GLASS TO ONE'S WILL", "EVOCATION", "WIELDING", true, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["EARTH"], []);
const gravityCreation = new Proclivity("GRAVITY CREATION", "CREATE GRAVITATIONAL PULL", "CONJURATION", "CREATION", true, false, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["GRAVITY"], []);
const gravityEnhancement = new Proclivity("GRAVITY ENHANCEMENT", "AMPLIFICATION OF GRAVITATIONAL PULL", "TRANSMUTATION", "ENHANCEMENT", true, false, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["GRAVITY"], []);
const gravityManipulation = new Proclivity("GRAVITY MANIPULATION", "CHANGE THE GRAVITATIONAL PULL OF ONE'S ENVIRONMENT", "EVOCATION", "MANIPULATION", true, false, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["GRAVITY"], []);
const guiltInducement = new Proclivity("GUILT INDUCEMENT", "CAUSE ANOTHER TO FEEL GUILT", "ENCHANTMENT", "CREATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const guiltManipulation = new Proclivity("GUILT MANIPULATION", "CHANGE ANOTHER'S GUILT", "ENCHANTMENT", "MANIPULATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const hagiomancy = new Proclivity("HAGIOMANCY", "USING SAINTS AND THE GOD TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", false, true, false, ["ASTRAL"], [], ["MAGIC"], [], []);
const happinessInducement = new Proclivity("HAPPINESS INDUCEMENT", "CAUSE ANOTHER TO FEEL HAPPINESS", "ENCHANTMENT", "CREATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const happinessManipulation = new Proclivity("HAPPINESS MANIPULATION", "TWIST OR CHANGE ANOTHER'S JOY", "ENCHANTMENT", "MANIPULATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const harbingerOfDeath = new Proclivity("HARBINGER OF DEATH", "SENSE WHEN SOMEONE IS GOING TO DIE", "NECROMANCY", "CLAIRVOYANCE", false, true, false, ["ASTRAL"], ["DEATH"], ["PERSON"], [], []);
const hatredInducement = new Proclivity("HATRED INDUCEMENT", "CAUSE ANOTHER TO FEEL HATRED", "ENCHANTMENT", "CREATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const hatredManipulation = new Proclivity("HATRED MANIPULATION", "CHANGE ANOTHER'S HATRED", "ENCHANTMENT", "MANIPULATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const healingAugmentation = new Proclivity("HEALING AUGMENTATION", "SPEEDS UP THE HEALING PROCESS IN OTHERS", "ABJURATION", "ENHANCEMENT", false, true, true, ["PHYSICAL", "SOCIAL"], ["LIFE"], ["PERSON"], [], []);
const regeneration = new Proclivity("REGENERATION", "HEAL ONE'S SELF", "ABJURATION", "ENHANCEMENT", false, true, false, ["PHYSICAL"], ["LIFE"], ["PERSON"], [], []);
const heatAbsorption = new Proclivity("HEAT ABSORPTION", "TAKE IN HEAT AND CHANNEL IT INTO OTHER THINGS", "TRANSMUTATION", "ENHANCEMENT", true, true, false, ["PHYSICAL"], [], ["PERSON", "ELEMENTAL"], ["TEMPERATURE"], []);
const heatImmunity = new Proclivity("HEAT IMMUNITY", "IMMUNITY TO HEAT", "ABJURATION", "IMMUNITY", false, true, true, ["PHYSICAL"], [], ["ELEMENTAL"], ["TEMPERATURE"], []);
const heatResistance = new Proclivity("HEAT RESISTANCE", "RESISTANCE TO HEAT", "ABJURATION", "RESISTANCE", true, true, true, ["PHYSICAL"], [], ["ELEMENTAL"], ["TEMPERATURE"], []);
const heliomanncy = new Proclivity("HELIOMANNCY", "USING THE SUN TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, false, false, ["ASTRAL", "PHYSICAL"], [], ["ELEMENTAL"], ["SOLAR"], []);
const hematomancy = new Proclivity("HEMATOMANCY", "USING BLOOD TO LEARN OF ONE'S FUTURE", "DIVINATION", "CLAIRVOYANCE", false, true, true, ["ASTRAL"], ["DEATH"], ["PERSON"], [], []);
const hybridization = new Proclivity("HYBRIDIZATION", "MERGE ONE'S DNA WITH THAT OF SOMETHING OR SOMEONE ELSE", "TRANSMUTATION", "MANIPULATION", true, true, true, ["PHYSICAL"], ["LIFE"], ["PERSON", "ANIMAL", "PLANT"], [], []);
const hydromancy = new Proclivity("HYDROMANCY", "USING WATER TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, false, false, ["ASTRAL", "PHYSICAL"], [], ["ELEMENTAL"], ["WATER"], []);
const hypnoticSinging = new Proclivity("HYPNOTIC SINGING", "SINGING TO PUT OTHER'S IN A HYPNOTIC TRANCE LIKE STATE", "ENCHANTMENT", "MASTERY", false, true, true, ["MENTAL", "SOCIAL"], ["ART"], ["PERSON"], [], []);
const iceWielding = new Proclivity("ICE WIELDING", "USING ICE TO ONE'S WILL", "EVOCATION", "WIELDING", false, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["TEMPERATURE"], []);
const lifeTransference = new Proclivity("LIFE TRANSFERENCE", "TRANSFER LIFE FROM ONE PERSON, ANIMAL OR THING TO ANOTHER", "NECROMANCY", "CREATION", true, true, true, ["ASTRAL", "PHYSICAL"], ["DEATH", "LIFE"], ["PERSON"], [], []);
const lightCreation = new Proclivity("LIGHT CREATION", "CREATE LIGHT ", "CONJURATION", "CREATION", true, false, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["LIGHT"], []);
const lightManipulation = new Proclivity("LIGHT MANIPULATION", "CHANGE LIGHT (DIMMING, SHIFTING,BRIGHTENING)", "TRANSMUTATION", "MANIPULATION", true, false, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["LIGHT"], []);
const lightWielding = new Proclivity("LIGHT WIELDING", "USING LIGHT TO ONE'S WILL", "EVOCATION", "WIELDING", true, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["LIGHT"], []);
const linguisticAssimilation = new Proclivity("LINGUISTIC ASSIMILATION", "KNOW ANOTHER'S LANGUAGE UPON TOUCH", "DIVINATION", "COMMUNICATION", false, true, true, ["MENTAL", "SOCIAL"], ["LANGUAGE"], ["PERSON"], [], []);
const literaryMastery = new Proclivity("LITERARY MASTERY", "KNOWLEDGE OF LITERARY WORKS AND THEIR MEANINGS", "DIVINATION", "MASTERY", false, true, false, ["MENTAL"], ["LANGUAGE", "KNOWLEDGE"], ["PERSON"], [], []);
const loveInducement = new Proclivity("LOVE INDUCEMENT", "CAUSE ANOTHER TO FEEL LOVE", "ENCHANTMENT", "CREATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const loveManipulation = new Proclivity("LOVE MANIPULATION", "TWIST OR CHANGE ANOTHER'S LOVE", "ENCHANTMENT", "MANIPULATION", false, true, true, ["MENTAL", "SOCIAL"], ["EMOTION"], ["PERSON"], [], []);
const luckCreation = new Proclivity("LUCK CREATION", "MAKE ONE'S SELF OR OTHERS LUCKY", "CONJURATION", "CREATION", false, true, true, ["ASTRAL"], ["BLESSING", "CHANCE"], ["MAGIC"], [], []);
const luckEnhancement = new Proclivity("LUCK ENHANCEMENT", "MAKE ONE'S SELF OR OTHERS LUCKIER", "TRANSMUTATION", "ENHANCEMENT", false, true, true, ["ASTRAL"], ["BLESSING", "CHANCE"], ["MAGIC"], [], []);
const luckyCharmCreation = new Proclivity("LUCKY CHARM CREATION", "MAKE A LUCKY CHARM", "CONJURATION", "CREATION", true, true, false, ["ASTRAL", "PHYSICAL"], ["BLESSING", "CHANCE"], ["MAGIC"], [], []);
const magicAbsorption = new Proclivity("MAGIC ABSORPTION", "TAKE IN MAGIC AND CHANNEL IT INTO OTHER THINGS", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["ASTRAL"], [], ["MAGIC"], [], []);
const magicAmplification = new Proclivity("MAGIC AMPLIFICATION", "MAKE MAGIC MORE POTENT", "TRANSMUTATION", "ENHANCEMENT", true, false, false, ["ASTRAL"], [], ["MAGIC"], [], []);
const magicConduit = new Proclivity("MAGIC CONDUIT", "TRANSFER MAGIC FROM ONE PERSON OR OBJECT TO ANOTHER", "TRANSMUTATION", "ENHANCEMENT", true, true, true, ["ASTRAL"], [], ["PERSON"], [], []);
const magicDampening = new Proclivity("MAGIC DAMPENING", "MAKE MAGIC LESS POTENT", "ABJURATION", "RESISTANCE", true, true, true, ["ASTRAL"], [], ["MAGIC"], [], []);
const magicDetection = new Proclivity("MAGIC DETECTION", "DETECT WHEN MAGIC IS BEING USED", "DIVINATION", "DETECTION", true, true, true, ["ASTRAL"], [], ["MAGIC"], [], []);
const magicNullification = new Proclivity("MAGIC NULLIFICATION", "STOP MAGIC FROM BEING USED", "ABJURATION", "IMMUNITY", true, true, true, ["ASTRAL"], [], ["MAGIC"], [], []);
const magicShielding = new Proclivity("MAGIC SHIELDING", "CREATE A SHIELD TO PROTECT FROM MAGICAL ATTACKS", "ABJURATION", "RESISTANCE", true, true, true, ["ASTRAL"], [], ["MAGIC"], [], []);
const magnetWielding = new Proclivity("MAGNET WIELDING", "WIELDING MAGENTIC ENERGY TO ONE'S WILL", "EVOCATION", "WIELDING", false, true, false, ["PHYSICAL", "TECHNOLOGICAL"], [], ["MAN-MADE", " ELEMENTAL"], ["GRAVITY"], []);
const magneticConduit = new Proclivity("MAGNETIC CONDUIT", "BECOME MAGNETIC", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["GRAVITY"], []);
const magnetization = new Proclivity("MAGNETIZATION", "MAKE SOMETHING MAGNETIC", "TRANSMUTATION", "ENHANCEMENT", true, true, true, ["PHYSICAL"], [], ["ELEMENTAL"], ["GRAVITY"], []);
const mapMimicry = new Proclivity("MAP MIMICRY", "CREATE A MAP BASED ON ANY MAP THEY HAVE SEEN BEFORE", "CONJURATION", "CREATION", true, false, false, ["ASTRAL", "PHYSICAL"], ["TRAVEL"], ["MAGIC"], [], []);
const mechanicalIntutition = new Proclivity("MECHANICAL INTUTITION", "MECHANICAL KNOWLEDGE", "DIVINATION", "MASTERY", true, false, false, ["MENTAL", "TECHNOLOGICAL"], ["KNOWLEDGE"], ["PERSON", "MAN-MADE"], [], []);
const mechanicalRegeneration = new Proclivity("MECHANICAL REGENERATION", "FIX ONE'S SELF WITH MECHANICS", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["PHYSICAL", "TECHNOLOGICAL"], ["LIFE"], ["MAN-MADE", "PERSON"], [], []);
const medicalCreation = new Proclivity("MEDICAL CREATION", "CREATE MEDICINAL SALVES AND OR POTIONS", "CONJURATION", "CREATION", false, true, true, ["PHYSICAL"], ["LIFE", "BLESSING"], ["PLANT", "MAN-MADE", "PERSON", "ANIMAL"], [], []);
const memoryCreation = new Proclivity("MEMORY CREATION", "PLANT A MEMORY IN ANOTHER'S MIND", "CONJURATION", "CREATION", false, true, true, ["MENTAL"], ["MEMORY"], ["PERSON"], [], []);
const memoryManipulation = new Proclivity("MEMORY MANIPULATION", "CHANGE ANOTHER'S MEMORY", "ENCHANTMENT", "MANIPULATION", false, true, true, ["MENTAL"], ["MEMORY"], ["PERSON"], [], []);
const memoryProjection = new Proclivity("MEMORY PROJECTION", "PROJECT ONE'S MEMORY FOR ANOTHER TO SEE", "ILLUSION", "CREATION", false, true, true, ["MENTAL", "PHYSICAL"], ["MEMORY"], ["PERSON"], [], []);
const memorySight = new Proclivity("MEMORY SIGHT", "SEE OTHER'S MEMORIES", "ENCHANTMENT", "DETECTION", false, true, true, ["MENTAL", "SOCIAL"], ["MEMORY"], ["PERSON"], [], []);
const mentalSeduction = new Proclivity("MENTAL SEDUCTION", "CREATE ATTRACTION IN ANOTHER THROUGH THOUGHTS", "ENCHANTMENT", "CREATION", false, true, true, ["MENTAL", "PHYSICAL", "SOCIAL"], ["EMOTION"], ["PERSON"], [], []);
const mentalShielding = new Proclivity("MENTAL SHIELDING", "CREATE SHIELDS TO PROTECT AGAINST MENTAL ATTACKS", "ABJURATION", "RESISTANCE", false, true, true, ["ASTRAL"], [], ["PERSON"], [], []);
const mentalFortitude = new Proclivity("MENTAL FORTITUDE", "RESISTANCE TO MENTAL PROCLIVITIES", "ABJURATION", "RESISTANCE", false, true, false, ["MENTAL", "SOCIAL"], [], ["PERSON"], [], []);
const metalDetection = new Proclivity("METAL DETECTION", "DETECTION OF METAL", "DIVINATION", "DETECTION", true, false, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["METAL"], []);
const metalWielding = new Proclivity("METAL WIELDING", "USING METAL TO ONE'S WILL", "EVOCATION", "WIELDING", false, true, false, ["PHYSICAL", "TECHNOLOGICAL"], [], ["MAN-MADE", "ELEMENTAL"], ["METAL"], []);
const navigationMastery = new Proclivity("NAVIGATION MASTERY", "KNOWLEDGE OF TERRAIN AND HOW TO TRAVEL IT", "DIVINATION", "MASTERY", true, false, false, ["PHYSICAL"], ["TRAVEL", "KNOWLEDGE"], ["MAGIC"], [], []);
const necromancy = new Proclivity("NECROMANCY", "MANIPULATION OF LIFE FORCE AND THE UNDEAD", "NECROMANCY", "MANIPULATION", false, true, false, ["ASTRAL", "PHYSICAL", "SOCIAL"], ["DEATH", "LIFE"], ["PERSON"], [], []);
const necrosisInducement = new Proclivity("NECROSIS INDUCEMENT", "CAUSE THINGS TO DECAY", "NECROMANCY", "MANIPULATION", true, true, true, ["PHYSICAL"], ["DEATH"], ["PERSON"], [], []);
const numeromancy = new Proclivity("NUMEROMANCY", "USING NUMBERS TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", false, false, false, ["ASTRAL"], ["LANGUAGE"], ["MAGIC"], [], []);
const oilDetection = new Proclivity("OIL DETECTION", "DETECTION OF OIL IN ONE'S SURROUNDINGS", "DIVINATION", "DETECTION", true, false, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["OIL"], []);
const oilPulling = new Proclivity("OIL PULLING", "BRING OIL TO ONE'S SELF", "EVOCATION", "WIELDING", true, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["OIL"], []);
const oilPurification = new Proclivity("OIL PURIFICATION", "PURIFICATION OF OIL", "TRANSMUTATION", "MANIPULATION", true, false, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["OIL"], []);
const oilWielding = new Proclivity("OIL WIELDING", "USING OIL TO ONE'S WILL", "EVOCATION", "WIELDING", true, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["OIL"], []);
const organimancy = new Proclivity("ORGANIMANCY", "USING ORGANS TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", false, true, false, ["ASTRAL", "PHYSICAL"], ["DEATH"], ["PERSON"], [], []);
const osteomancy = new Proclivity("OSTEOMANCY", "USING BONES TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", false, true, true, ["ASTRAL", "PHYSICAL"], ["DEATH"], ["PERSON"], [], []);
const palmistry = new Proclivity("PALMISTRY", "USING PALMS TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", false, true, true, ["ASTRAL"], [], ["PERSON"], [], []);
const pheromoneCreation = new Proclivity("PHEROMONE CREATION", "CREATE PHEROMONE SECRETIONS", "CONJURATION", "CREATION", false, true, true, ["PHYSICAL", "SOCIAL"], ["LIFE"], ["PERSON"], [], []);
const physicalSeduction = new Proclivity("PHYSICAL SEDUCTION", "CREATING PHYSCIAL DESIRE IN ANOTHER", "ENCHANTMENT", "CREATION", false, true, true, ["MENTAL", "PHYSICAL", "SOCIAL"], ["EMOTION"], ["PERSON"], [], []);
const physicalShielding = new Proclivity("PHYSICAL SHIELDING", "CREATE SHIELDS TO PROTECT AGAINST PHYSICAL ATTACKS", "ABJURATION", "RESISTANCE", true, true, true, ["PHYSICAL"], [], ["PERSON"], [], []);
const plantWielding = new Proclivity("PLANT WIELDING", "USING PLANTS TO ONE'S WILL", "EVOCATION", "WIELDING", true, true, false, ["PHYSICAL"], [], ["PLANT"], [], []);
const poisonCreation = new Proclivity("POISON CREATION", "CREATE POISON", "CONJURATION", "CREATION", false, true, true, ["PHYSICAL"], [], ["ELEMENTAL"], ["POISON"], []);
const poisonImmunity = new Proclivity("POISON IMMUNITY", "IMMUNITY TO POISON", "ABJURATION", "IMMUNITY", false, true, true, ["PHYSICAL"], [], ["ELEMENTAL"], ["POISON"], []);
const poisonResistance = new Proclivity("POISON RESISTANCE", "RESISTANCE TO POISON", "ABJURATION", "RESISTANCE", true, true, true, ["PHYSICAL"], [], ["ELEMENTAL"], ["POISON"], []);
const pollutionCreation = new Proclivity("POLLUTION CREATION", "CREATE POLLUTION", "CONJURATION", "CREATION", true, false, false, ["PHYSICAL", "TECHNOLOGICAL"], [], ["MAN-MADE", "ELEMENTAL"], ["POISON", "WATER"], []);
const pollutionPurification = new Proclivity("POLLUTION PURIFICATION", "CLEAN POLLUTION OUT OF SOMEHTING", "TRANSMUTATION", "MANIPULATION", true, false, false, ["TECHNOLOGICAL", "PHYSICAL"], [], ["ELEMENTAL"], ["POISON", "WATER"], []);
const portal = new Proclivity("PORTAL", "CREATE PORTALS FOR TRAVEL", "CONJURATION", "CREATION", true, true, false, ["ASTRAL", "PHYSICAL"], ["TRAVEL"], ["MAGIC"], [], []);
const proclivityAssmilation = new Proclivity("PROCLIVITY ASSMILATION", "KNOW ANOTHER'S PROCLVITY UPON TOUCH", "DIVINATION", "DETECTION", false, false, true, ["ASTRAL", "PHYSICAL", "SOCIAL"], ["KNOWLEDGE"], ["MAGIC"], [], []);
const proclivityMimicry = new Proclivity("PROCLIVITY MIMICRY", "COPY ANOTHER'S PROVLIVITY THAT THEY HAVE SEEN", "EVOCATION", "MANIPULATION", false, true, true, ["ASTRAL", "SOCIAL"], [], ["PERSON"], [], []);
const projection = new Proclivity("PROJECTION", "USE LIGHT TO PROJECT AN IMAGE", "ILLUSION", "COMMUNICATION", false, true, false, ["PHYSICAL"], [], ["PERSON", "ELEMENTAL"], ["LIGHT"], []);
const pryomancy = new Proclivity("PRYOMANCY", "USING FIRE TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, false, false, ["ASTRAL", "PHYSICAL"], [], ["ELEMENTAL"], ["FIRE"], []);
const realityDistortion = new Proclivity("REALITY DISTORTION", "CHANGE THE HOW OTHER'S PERCEIVE THE WORLD AROUND THEM", "ILLUSION", "MANIPULATION", true, true, true, ["MENTAL", "SOCIAL"], [], ["PERSON"], [], []);
const resurrection = new Proclivity("RESURRECTION", "BRING ONE'S SELF OR ANOTHER BACK FROM THE DEAD", "NECROMANCY", "CREATION", false, true, true, ["ASTRAL", "MENTAL", "PHYSICAL"], ["DEATH", "LIFE"], ["PERSON"], [], []);
const roboticsMastery = new Proclivity("ROBOTICS MASTERY", "KNOWLEDGE OF ROBOTICS AND THE ABLITY TO CREATE IT", "DIVINATION", "MASTERY", true, false, false, ["MENTAL", "PHYSICAL", "TECHNOLOGICAL"], [], ["PERSON", "MAN-MADE"], [], []);
const rockWielding = new Proclivity("ROCK WIELDING", "USING ROCK TO ONE'S WILL", "EVOCATION", "WIELDING", true, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["EARTH"], []);
const sadnessInducement = new Proclivity("SADNESS INDUCEMENT", "CAUSE ANOTHER TO FEEL SADNESS", "ENCHANTMENT", "CREATION", false, true, true, ["MENTAL"], [], ["PERSON"], [], []);
const sandWielding = new Proclivity("SAND WIELDING", "USING SAND TO ONE'S WILL", "EVOCATION", "WIELDING", true, true, false, ["PHYSICAL"], [], ["PERSON", "ELEMENTAL"], ["EARTH"], []);
const scribe = new Proclivity("SCRIBE", "WRITE ONLY THE TRUTH", "DIVINATION", "COMMUNICATION", false, true, false, ["MENTAL", "SOCIAL"], [], ["PERSON"], [], []);
const selenomancy = new Proclivity("SELENOMANCY", "USING LUNAR PATTERNS TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, true, false, ["ASTRAL", "PHYSICAL"], [], ["ELEMENTAL"], ["LUNAR"], []);
const shadowWalking = new Proclivity("SHADOW WALKING", "CAN MANIPULATE SHADOWS TO WALK IN THEM", "ENCHANTMENT", "MANIPULATION", false, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["SHADOW"], []);
const shadowWielding = new Proclivity("SHADOW WIELDING", "USING SHADOW TO ONE'S WILL", "EVOCATION", "WIELDING", true, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["SHADOW"], []);
const shamanism = new Proclivity("SHAMANISM", "COMMUNICATING WITH THE DEAD", "NECROMANCY", "COMMUNICATION", false, true, true, ["ASTRAL", "SOCIAL"], ["DEATH"], ["PERSON"], [], []);
const shapeShifting = new Proclivity("SHAPE SHIFTING", "CHANGE ONE'S PHYSCIAL FORM", "TRANSMUTATION", "MANIPULATION", false, true, false, ["PHYSICAL"], [], ["PERSON"], [], []);
const singingMastery = new Proclivity("SINGING MASTERY", "KNOWLEDGE OF SINGING AND THE ABLITY TO USE IT", "DIVINATION", "MASTERY", false, true, false, ["MENTAL", "PHYSICAL", "SOCIAL"], ["ART"], ["MAN-MADE"], [], []);
const sizeManipulation = new Proclivity("SIZE MANIPULATION", "CHANGE THE SIZE OF THINGS", "TRANSMUTATION", "MANIPULATION", true, true, true, ["PHYSICAL"], [], ["PERSON"], [], []);
const soulSight = new Proclivity("SOUL SIGHT", "KNOW THE TRUEST FORM OF ANOTHER'S SOUL", "NECROMANCY", "MASTERY", true, true, true, ["ASTRAL", "SOCIAL"], ["DEATH", "LIFE"], ["PERSON"], [], []);
const soulWielding = new Proclivity("SOUL WIELDING", "WIELDING OF SOULS", "NECROMANCY", "WIELDING", false, true, true, ["ASTRAL", "PHYSICAL", "SOCIAL"], ["DEATH"], ["PERSON"], [], []);
const soundMimicry = new Proclivity("SOUND MIMICRY", "COPY SOUNDS THAT ONE HAS HEARD", "ENCHANTMENT", "MANIPULATION", true, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["SOUND"], []);
const stealth = new Proclivity("STEALTH", "HIDE IN PLAIN SIGHT AND PICK LOCKS", "ILLUSION", "MANIPULATION", true, true, false, ["MENTAL", "PHYSICAL"], [], ["PERSON"], [], []);
const stormWielding = new Proclivity("STORM WIELDING", "USING STORMS TO ONE'S OWN WILL", "EVOCATION", "WIELDING", true, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["WEATHER"], []);
const summmoning = new Proclivity("SUMMMONING", "INSTANTANEOUS TRANSPORTATION OF AN OBJECT TO ONE'S SELF", "CONJURATION", "MANIPULATION", true, true, false, ["PHYSICAL"], ["TRAVEL"], ["MAGIC"], [], []);
const tasseomancy = new Proclivity("TASSEOMANCY", "READING TEA LEAVES TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, true, true, ["ASTRAL", "PHYSICAL"], [], ["PLANT", "ELEMENTAL"], ["WATER"], []);
const technorganicEnhancement = new Proclivity("TECHNORGANIC ENHANCEMENT", "FUSION OF THE ORGANIC AND THE TECHNOLOGICAL", "TRANSMUTATION", "ENHANCEMENT", true, true, true, ["PHYSICAL", "TECHNOLOGICAL"], [], ["ANIMAL", "MAN-MADE", "PERSON", "PLANT"], [], []);
const telekinesis = new Proclivity("TELEKINESIS", "MOVE OBJECTS WITH ONE'S MIND", "CONJURATION", "MANIPULATION", true, true, false, ["MENTAL", "PHYSICAL"], [], ["PERSON"], [], []);
const telepathy = new Proclivity("TELEPATHY", "READ ANOTHER'S THOUGHTS", "DIVINATION", "DETECTION", false, true, true, ["MENTAL"], [], ["MAGIC"], [], []);
const teleportation = new Proclivity("TELEPORTATION", "INSTANTANEOUS TRAVEL OF AN OBJECT OR PERSON", "CONJURATION", "MANIPULATION", false, true, true, ["ASTRAL", "PHYSICAL"], ["TRAVEL"], ["MAGIC"], [], []);
const textileCreation = new Proclivity("TEXTILE CREATION", "CREATE ANY TEXTILE", "CONJURATION", "CREATION", true, false, false, ["PHYSICAL"], ["ART"], ["MAN-MADE", "PLANT", "ANIMAL"], [], []);
const tongues = new Proclivity("TONGUES", "SPEAKING ANY LANGUAGE REGARDLESS OF PRIOR KNOWLEDGE", "DIVINATION", "MASTERY", false, true, false, ["MENTAL"], ["LANGUAGE"], ["PERSON"], [], []);
const tranceHypnosis = new Proclivity("TRANCE/HYPNOSIS", "PUT ANOTHER INTO A HYPNOTIC TRANCE-LIKE STATE", "ENCHANTMENT", "MANIPULATION", false, true, true, ["ASTRAL"], ["MEMORY", "EMOTION"], ["PERSON"], [], []);
const typhomancy = new Proclivity("TYPHOMANCY", "USING SMOKE TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, true, false, ["ASTRAL", "PHYSICAL"], [], ["ELEMENTAL"], ["FIRE", "WEATHER"], []);
const understandLanguages = new Proclivity("UNDERSTAND LANGUAGES", "UNDERSTAND ANY LANGUAGE ONE HEARS", "DIVINATION", "MASTERY", false, true, false, ["MENTAL"], ["LANGUAGE"], ["PERSON"], [], []);
const underwaterBreathing = new Proclivity("UNDERWATER BREATHING", "BEING ABLE TO BREATH UNDERWATER", "ABJURATION", "IMMUNITY", false, true, true, ["PHYSICAL"], [], ["PERSON", "ELEMENTAL"], ["WATER"], []);
const urbanUnderstanding = new Proclivity("URBAN UNDERSTANDING", "KNOWLEDGE OF URBAN LANDSCAPES AND HOW TO NAVIGATE IT", "DIVINATION", "MASTERY", true, false, false, ["MENTAL", "TECHNOLOGICAL"], ["KNOWLEDGE"], ["PERSON", "MAN-MADE"], [], []);
const waterAbsorption = new Proclivity("WATER ABSORPTION", "TAKE IN WATER AND CHANNEL IT INTO OTHER THINGS", "TRANSMUTATION", "ENHANCEMENT", true, true, false, ["PHYSICAL"], [], ["PERSON", "ELEMENTAL"], ["WATER"], []);
const waterDetection = new Proclivity("WATER DETECTION", "DETECT WATER IN ONE'S ENVIRONMENT", "DIVINATION", "DETECTION", true, false, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["WATER"], []);
const waterPurification = new Proclivity("WATER PURIFICATION", "CLEAN WATER MAKING IT STERILE", "TRANSMUTATION", "MANIPULATION", true, false, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["WATER"], []);
const waterTravel = new Proclivity("WATER TRAVEL", "TRAVEL THROUGH WATER AS IF WALKING", "CONJURATION", "ENHANCEMENT", true, false, false, ["PHYSICAL"], ["TRAVEL"], ["ELEMENTAL"], ["WATER"], []);
const waterWielding = new Proclivity("WATER WIELDING", "USING WATER TO ONE'S WILL", "EVOCATION", "WIELDING", true, true, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["WATER"], []);
const weaponCreation = new Proclivity("WEAPON CREATION", "CREATE WEAPONS FROM ONE'S SURROUNDINGS", "CONJURATION", "CREATION", true, true, false, ["PHYSICAL"], ["COMBAT"], ["PERSON", "MAN-MADE"], [], []);
const weaponMastery = new Proclivity("WEAPON MASTERY", "KNOWLEDGE OF WEAPONS AND THE ABLITY TO USE THEM", "DIVINATION", "MASTERY", false, true, false, ["PHYSICAL"], ["COMBAT"], ["PERSON", "MAN-MADE"], [], []);
const weaponMimicry = new Proclivity("WEAPON MIMICRY", "RECREATE WEAPONS ONE HAS SEEN", "TRANSMUTATION", "MANIPULATION", false, true, true, ["PHYSICAL"], ["COMBAT"], ["PERSON", "MAN-MADE"], [], []);
const windWielding = new Proclivity("WIND WIELDING", "USING WIND TO ONE'S WILL", "EVOCATION", "WIELDING", true, false, false, ["PHYSICAL"], [], ["ELEMENTAL"], ["WEATHER"], []);
const zombification = new Proclivity("ZOMBIFICATION", "CREATE ZOMBIES BY RE-ANIMATING A CORPSE", "NECROMANCY", "CREATION", false, true, true, ["ASTRAL", "PHYSICAL"], ["DEATH"], ["PERSON"], [], []);
const painAlleviation = new Proclivity("PAIN ALLEVIATION", "LESSENS THE PAIN ONE MAY FEEL ", "ABJURATION", "RESISTANCE", false, true, true, ["MENTAL", "PHYSICAL"], ["LIFE"], ["PERSON"], [], []);
const longevity = new Proclivity("LONGEVITY", "LONG LIFE SPAN", "ENCHANTMENT", "RESISTANCE", false, true, false, ["PHYSICAL", "MENTAL"], ["LIFE"], ["PERSON"], [], []);
const ageManipulation = new Proclivity("AGE MANIPULATION", "MANIPULATE THE AGE OF ONE'S SELF OR ANOTHER", "ABJURATION", "MANIPULATION", false, true, true, ["PHYSICAL", "MENTAL"], ["DEATH"], [], [], []);
const proclivities = [abacomancy, adaptation, ancestralCommunication, ancestralKnowledge, angerInducement, animalCommunication, animalMastery, animancy, anthropomancy, anxietyInducement, apotropaic, architecturalManipulation, artMastery, astralCommunication, astralProjection, augury, auramancy, banishment, battleTactics, blessingCreation, blessingDestruction, blessingDetection, blessingImmunity, blessingManipulation, blessingResistance, bodyMimicry, cartomancy, chlomancy, cleromancy, cloaking, clothManipulation, coldImmunity, coldResistance, combatMastery, combatMimicry, command, compassSense, courageInducement, curseCreation, curseDestruction, curseDetection, curseImmunity, curseManipulation, cyberlingalism, deathInducement, deathPrevention, diseaseCreation, diseaseImmunity, diseaseManipulation, diseaseResistance, disgustInducement, divineCommunication, doubtManipulation, dreamCreation, dreamManipulation, dreamProjection, dreamWalking, earthWielding, eideticMemory, emotionRegulation, emotionalAbsorption, emotionalAssimilation, empathy, energyAbsorption, energyConduit, energyWielding, enhancedHearing, enhancedIntelligence, enhancedSight, enhancedSpeed, enhancedStrength, enhancedTaste, enhancedTracking, enviromentalMimicry, enviromentalProjection, fearDetection, fearInducement, fearManipulation, fearProjection, fireImmunity, fireResistance, fireWielding, flying, foodPreperation, foraging, glassWielding, gravityCreation, gravityEnhancement, gravityManipulation, guiltInducement, guiltManipulation, hagiomancy, happinessInducement, happinessManipulation, harbingerOfDeath, hatredInducement, hatredManipulation, healingAugmentation, regeneration, heatAbsorption, heatImmunity, heatResistance, heliomanncy, hematomancy, hybridization, hydromancy, hypnoticSinging, iceWielding, lifeTransference, lightCreation, lightManipulation, lightWielding, linguisticAssimilation, literaryMastery, loveInducement, loveManipulation, luckCreation, luckEnhancement, luckyCharmCreation, magicAbsorption, magicAmplification, magicConduit, magicDampening, magicDetection, magicNullification, magicShielding, magnetWielding, magneticConduit, magnetization, mapMimicry, mechanicalIntutition, mechanicalRegeneration, medicalCreation, memoryCreation, memoryManipulation, memoryProjection, memorySight, mentalSeduction, mentalShielding, mentalFortitude, metalDetection, metalWielding, navigationMastery, necromancy, necrosisInducement, numeromancy, oilDetection, oilPulling, oilPurification, oilWielding, organimancy, osteomancy, palmistry, pheromoneCreation, physicalSeduction, physicalShielding, plantWielding, poisonCreation, poisonImmunity, poisonResistance, pollutionCreation, pollutionPurification, portal, proclivityAssmilation, proclivityMimicry, projection, pryomancy, realityDistortion, resurrection, roboticsMastery, rockWielding, sadnessInducement, sandWielding, scribe, selenomancy, shadowWalking, shadowWielding, shamanism, shapeShifting, singingMastery, sizeManipulation, soulSight, soulWielding, soundMimicry, stealth, stormWielding, summmoning, tasseomancy, technorganicEnhancement, telekinesis, telepathy, teleportation, textileCreation, tongues, tranceHypnosis, typhomancy, understandLanguages, underwaterBreathing, urbanUnderstanding, waterAbsorption, waterDetection, waterPurification, waterTravel, waterWielding, weaponCreation, weaponMastery, weaponMimicry, windWielding, zombification, painAlleviation, longevity, ageManipulation];

// fill proclivities table
proclivities.forEach(proclivity => {
    document.getElementById("proclivitiesTable").getElementsByTagName("TBODY")[0].innerHTML += `<tr class="proclivityRow">
        <td>${proclivity.name}</td>
        <td>${proclivity.definition}</td>
        <td>${proclivity.school}</td>
        <td>${proclivity.type}</td>
        <td>${proclivity.env ? "&#10004;" : ""}</td>
        <td>${proclivity.self ? "&#10004;" : ""}</td>
        <td>${proclivity.others ? "&#10004;" : ""}</td>
        <td>${proclivity.plane.join(", ")}</td>
        <td>${proclivity.basis.join(", ")}</td>
        <td>${proclivity.source.join(", ")}</td>
        <td>${proclivity.element.join(", ")}</td>
        <td>${proclivity.subcategories.join(", ")}</td>
    </tr>`;
});

const filterableColumns = ["plane", "basis", "source", "element", "subcategories"];

// filter rows by selected attribute
const filterRows = () => {
    const filterTest = (filter, index) => {
        if (!document.getElementById(`${filter}FilterSelect`).value) return true;
        if (document.getElementById(`${filter}Just`).checked) {
            return proclivities[index][filter].length === 1 && proclivities[index][filter][0] === document.getElementById(`${filter}FilterSelect`).value;
        }
        else {
            return proclivities[index][filter.toLowerCase()].includes(document.getElementById(`${filter}FilterSelect`).value);
        }
    };
    for (let i = 0; i < document.getElementsByClassName("proclivityRow").length; i++) {
        document.getElementsByClassName("proclivityRow")[i].style.display = "none";
        if (!filterableColumns.filter(column => {return !filterTest(column, i);}).length) document.getElementsByClassName("proclivityRow")[i].style.display = "table-row";
    }
};

filterableColumns.forEach(column => {
    // fill filter selects
    let options = [];
    proclivities.forEach(proclivity => {
        proclivity[column].forEach(option => {
            if (!options.includes(option)) options.push(option);
        });
    });
    options.forEach(option => {
        document.getElementById(`${column}FilterSelect`).innerHTML += `<option value="${option}">${option}</option>`;
    });

    document.getElementById(`${column}FilterSelect`).onchange = filterRows;
    document.getElementById(`${column}Just`).onchange = filterRows;
});